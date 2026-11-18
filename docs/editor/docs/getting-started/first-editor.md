# Your first editor

Two calls make an editor: `createEditorState` builds one document, and `mountEditor` shows it
in an element. When the document is a file, two more read and write its bytes:

```html
<div id="editor" style="height: 480px"></div>
```

```ts
import { createEditorState, mountEditor, openMarkdownFile, saveMarkdownFile } from "@openmarkdown-dev/editor";

let file = openMarkdownFile(new Uint8Array(await (await fetch("/notes.md")).arrayBuffer()));
const editor = mountEditor(document.getElementById("editor")!, createEditorState({ doc: file.text }));

const bytes = saveMarkdownFile(editor.getDoc(), file); // write these back
```

Give the parent element a height. The editor fills it and scrolls inside it. For an editor that
grows with its content instead, like a form field, pass `height: "auto"` (see
[Theming](/editor/docs/guides/theming/#height)).

Fetch the file as bytes (`arrayBuffer()`), not as text: `openMarkdownFile` keeps the file's BOM
and line endings, refuses bytes that are not UTF-8, and `saveMarkdownFile` gives back the
original bytes when nothing was edited. Decoding with `response.text()` first would already have
dropped the BOM and the line endings the save needs. See [Fidelity](/editor/docs/fidelity/) for what
they keep.

After a save, make the bytes you wrote the new baseline, so that `editor.getDoc() !== file.text`
means "unsaved edits":

```ts
file = openMarkdownFile(bytes);
```

## Read and write the document as a string

When there is no file, only text (a form field, local storage), give the editor a string. It
keeps the document as a string in `\n`, so `editor.getDoc()` is the text.

```ts
import { createEditorState, mountEditor } from "@openmarkdown-dev/editor";

const state = createEditorState({
  doc: localStorage.getItem("notes.md") ?? "# Notes\n",
  host: {
    // isUserEdit is false for setDoc and other programmatic changes.
    onChange: (doc, isUserEdit) => {
      if (isUserEdit) localStorage.setItem("notes.md", doc);
    },
  },
});
const editor = mountEditor(document.getElementById("editor")!, state);

editor.getDoc(); // the current Markdown, as a string
editor.setDoc("# Replaced\n"); // new text, for example after the file changed on disk; scroll position kept
```

`host` holds the per-document callbacks. Every one is optional; see [the host](/editor/docs/guides/host/).

## Modes

```ts
editor.setMode("source"); // "live" | "source" | "reading"
editor.mode(); // "source"
editor.focus(); // setMode does not move focus
```

- `live` (the default) renders Markdown in place and shows the source under the caret.
- `source` is the plain text, colored.
- `reading` is rendered and read-only.

Switching mode keeps the document, the selection and the undo history. It does not move
focus: when a button of yours calls `setMode`, the focus stays on that button, so call
`editor.focus()` afterwards if the user should be able to type right away. To start in
another mode, pass `mode` to `createEditorState`.

To make the document read-only in every mode, pass `editable: false` (or call
`editor.setEditable(false)`). Reading mode alone still lets the reader tick a task checkbox;
`editable: false` does not.

## Commands

The handle runs the editor's own commands, so you need no CodeMirror import for them:

```ts
editor.undo(); // as Mod+Z; false when there was nothing to undo
editor.redo();
editor.openSearch(); // the find panel, as Mod+F
editor.isSearchOpen(); // true
editor.closeSearch();
editor.revealText("## Setup"); // select its first occurrence and scroll to it
```

## The environment: per editor, with page defaults

Capabilities that are not about the document, such as the color scheme, the clipboard and
external links, can be given to each editor (`createEditorState({ environment })`) or set once
for the whole page as defaults. The UI language is page-wide. Set the defaults before the
first editor mounts:

```ts
import { configureEditorEnvironment } from "@openmarkdown-dev/editor";

const media = matchMedia("(prefers-color-scheme: dark)");
configureEditorEnvironment({
  language: "en",
  colorScheme: {
    current: () => (media.matches ? "dark" : "light"),
    subscribe: (cb) => {
      const on = () => cb(media.matches ? "dark" : "light");
      media.addEventListener("change", on);
      return () => media.removeEventListener("change", on);
    },
  },
  copyText: (text) => navigator.clipboard.writeText(text),
});
```

Without it the editor is light, English, and has no clipboard, external-link or spelling
behaviour. See [the environment](/editor/docs/guides/environment/).

## Clean up

```ts
editor.destroy(); // when the editor leaves the page
```

`destroy` removes the view and stops following the color scheme.

## Several documents in one view

One state is one document, with its undo history, folds and mode. A host with several
documents (tabs, for example) can keep one state each and swap them into one view:

```ts
editor.view.setState(otherState);
editor.syncAmbient(); // re-apply the current light or dark scheme
```

Next: [React](/editor/docs/getting-started/react/), or [any other framework](/editor/docs/getting-started/any-framework/).
