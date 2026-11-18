# The host: `EditorHost`

`EditorHost` is what the editor calls back into, for one document. Pass it as `host` to
`createEditorState`. Every callback is optional: leave one out and that feature is switched off
quietly. Nothing errors, and the rest of the editor carries on.

```ts
import { createEditorState, type EditorHost } from "@openmarkdown-dev/editor";

const host: EditorHost = {
  onChange: (doc, isUserEdit) => {
    if (isUserEdit) save(doc);
  },
  resolveImage: (src) => (src.startsWith("https://") ? src : null),
};
const state = createEditorState({ doc, docPath: "/notes/today.md", host });
```

| Callback | Called when | Without it |
| --- | --- | --- |
| `onChange(doc, isUserEdit, docPath)` | The document changed. `isUserEdit` is false for `setDoc` and other programmatic changes. | Nothing happens. |
| `resolveImage(src)` | An image is shown. Return a URL the page may load, or `null` to show the source. Script-capable URLs are dropped whatever you return. | Only absolute `https:` images load, from any host. Pass `() => null` to load none ([images](/editor/docs/guides/images/)). |
| `openLink(absPath, fragment)` | A link to a local file was followed (Cmd/Ctrl+click; a plain click in reading mode). `fragment` is its `#fragment` without the `#`, or `null`. | Local links do nothing. |
| `getFolder()` | Link completion needs the root of the user's files. | Completion uses the document's own directory. |
| `listFiles(root)` | Link completion lists linkable files under `root` (root-relative paths). | Completion offers headings only. |
| `saveAttachment(docPath, bytes, hint)` | An image is pasted or dropped into a document with a path. Store it beside the document and resolve the relative path to link, or `null`. | `uploadImage` is used, if given. |
| `uploadImage(bytes, hint)` | An image is pasted or dropped, with or without a document path. Store it wherever you keep images and resolve the URL or path to link, or `null`. Used when the document has no path, or there is no `saveAttachment`. | Pasting or dropping an image inserts nothing (unless `saveAttachment` applies). |
| `onUnsupportedPaste(reason, count)` | Images were pasted or dropped but could not be stored: `reason` is `"no-save-attachment"` (neither saver) or `"no-doc-path"` (only `saveAttachment`, and no path). A notice only; nothing was inserted. | The images are dropped silently. |
| `onMoved()` | The selection or scroll position moved (debounced). Use it to remember the position. | Nothing happens. |
| `onOutline(items)` | The heading outline changed (`OutlineItem[]`, or `null` when the view goes away). | Nothing happens. |

## The host is read on every call

The editor keeps the object, not its functions, and reads the member each time it needs one.
You can mutate the object after creating the state, or forward to the latest props through a
ref ([React](/editor/docs/getting-started/react/)), without rebuilding the state.

## `docPath`

`docPath` is the document's absolute path, or `null` for an unsaved document. Relative links and
image paths resolve against its directory, and `saveAttachment` is only called when there is a
path to store beside (`uploadImage` needs none). Change it after a rename with `editor.setDocPath(path)`; read it with
`editor.docPath()`.

The path does not have to be a file on disk. A web app can use any absolute, `/`-separated name
(for example `/doc.md`) and resolve images in `resolveImage` from its own storage. See
[Images](/editor/docs/guides/images/).

## Reading and writing the file

The editor works on a string; the file on disk is bytes. Decode it with `openMarkdownFile` and
encode `editor.getDoc()` with `saveMarkdownFile`, typically in `onChange` or on a save command:

```ts
import { createEditorState, openMarkdownFile, saveMarkdownFile } from "@openmarkdown-dev/editor";

const file = openMarkdownFile(bytes); // throws InvalidUtf8Error for a file that is not UTF-8
const state = createEditorState({
  doc: file.text,
  host: {
    onChange: (doc, isUserEdit) => {
      if (isUserEdit) writeFile(saveMarkdownFile(doc, file));
    },
  },
});
```

Unedited, the bytes written are the bytes read; edited, the file keeps its BOM and its dominant
line ending. See [Fidelity](/editor/docs/fidelity/).

A host that holds the file as a string (a CMS field, a JSON API) uses `openMarkdownText` and
`saveMarkdownText` instead: the same reading of the BOM and line endings, on a string. For an
unsaved-changes indicator, `editor.isUnedited(file)` tells whether the document is still the
file's text, with the test the save functions use.

## Capabilities that are not about the document

The color scheme, the clipboard, external links, spelling, the UI language and host key
bindings belong to the editor environment: per editor through `createEditorState({ environment })`,
with page defaults from `configureEditorEnvironment`. See [the environment](/editor/docs/guides/environment/).

The full signatures are in the [API reference](/editor/docs/api/interfaces/editorhost/).
