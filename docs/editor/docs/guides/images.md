# Images

The editor shows Markdown images (`![alt](src)`) in place, lets the user paste or drop new ones,
and resizes them with a drag. Where image bytes come from and where they go is the host's
decision, through `EditorHost` callbacks.

## Showing images: `resolveImage`

`resolveImage(src)` gets the image target exactly as written and returns a URL the page may load,
or `null` to show the source text instead.

```ts
import { createEditorState } from "@openmarkdown-dev/editor";

const state = createEditorState({
  doc,
  docPath: "/notes/today.md",
  host: {
    resolveImage: (src) => {
      if (src.startsWith("https://")) return src;
      return `/files/notes/${src.replace(/^\.\//, "")}`; // your server serves the document's folder
    },
  },
});
```

- Without `resolveImage`, absolute `https:` images load, from any host, and nothing else does.
  The browser fetches them when the document is shown, which tells their server the document
  was opened. For private documents, pass a `resolveImage` that allows only your own hosts, or
  turn remote images off entirely:

  ```ts
  createEditorState({ doc, host: { resolveImage: () => null } }); // no image loads; the source shows
  ```

- Whatever you return, script-capable URLs (`javascript:` and similar) are dropped. See
  [Untrusted content](/editor/docs/guides/untrusted-content/).

## Pasting and dropping: `saveAttachment`

When the user pastes or drops an image, the editor calls
`saveAttachment(docPath, bytes, hint)` with the image bytes and a file-name hint. Store the bytes
and resolve the document-relative path to link; the editor inserts an image link to that path
where the image was pasted or dropped, with the caret in its alt text.
Resolve `null` when the save failed; the editor inserts nothing (report the failure yourself).

```ts
import { createEditorState } from "@openmarkdown-dev/editor";

const urls = new Map<string, string>();
let n = 0;

const state = createEditorState({
  doc: "",
  docPath: "/draft.md", // paste and drop need a document path
  host: {
    saveAttachment: async (_docPath, bytes, hint) => {
      const name = `attachments/pasted-${++n}.png`;
      urls.set(name, URL.createObjectURL(new Blob([bytes.slice()], { type: "image/png" })));
      return name;
    },
    resolveImage: (src) => urls.get(src) ?? (src.startsWith("https://") ? src : null),
  },
});
```

This keeps images in the browser tab only. A real app uploads the bytes and returns the path or
URL it stored them under.

`resolveImage` may be called more than once for the same image, so keep it free of side
effects. When its answer changes, for example after the reader allows remote images, call
`editor.refreshImages()` and every image is resolved again, including those in tables.

## A document without a path: `uploadImage`

A CMS field, a comment box or a database row has no file path, so there is nothing to store an
image beside. Give `uploadImage(bytes, hint)` instead: store the bytes wherever you keep images
and resolve the URL or path to write in the link, or `null` when the upload failed.

```ts
import { createEditorState } from "@openmarkdown-dev/editor";

const state = createEditorState({
  doc: "",
  host: {
    uploadImage: async (bytes, hint) => {
      const res = await fetch("/api/media", { method: "POST", body: new Blob([bytes.slice()]), headers: { "x-name": hint ?? "image" } });
      return res.ok ? (await res.json()).url : null; // e.g. "https://cdn.example.com/media/42.png"
    },
    resolveImage: (src) => (src.startsWith("https://cdn.example.com/") ? src : null),
  },
});
```

Return a target that is valid in a Markdown link (percent-encode spaces) and that your
`resolveImage` accepts. When the document has a path and you give both, `saveAttachment` is
used.

## When an image cannot be stored

- With neither `saveAttachment` nor `uploadImage`, pasting or dropping an image inserts nothing.
- With only `saveAttachment` and `docPath` set to `null` (an unsaved document), there is nowhere
  to store beside, so the editor does not call it.
- In both cases the editor stays silent. To tell the user, pass `onUnsupportedPaste`: it is
  called with the reason (`"no-save-attachment"` or `"no-doc-path"`) and how many images were
  dropped.

```ts
import { createEditorState } from "@openmarkdown-dev/editor";

const state = createEditorState({
  doc,
  host: {
    onUnsupportedPaste: (reason, count) => {
      showToast(`${count} image(s) not added: this editor cannot store images.`);
    },
  },
});
```
- `hint` is the file's name, or its MIME type when it has no name. It is a hint, not a checked
  type: look at the bytes before you store or serve them.

## Resizing

Every image has a grip in its corner. Dragging it resizes the image, and on release the editor
writes the width into the alt text as `|W`:

```md
![diagram|320](diagram.png)
```

Only that width changes in the file. In reading mode the grip is hidden.
