# Embed in a form or CMS field

A Markdown field in a form, a CMS entry or a settings page differs from a full-page editor in a
few ways: it grows with its text, it has a label, its value is a string, it may be read-only,
and there is no file path to store pasted images beside. Each has an option.

## A complete field

```ts
import { createEditorState, mountEditor, openMarkdownText, saveMarkdownText } from "@openmarkdown-dev/editor";

const textarea = document.querySelector<HTMLTextAreaElement>("textarea[name=body]")!;
const file = openMarkdownText(textarea.value); // keeps the BOM and line endings it came with

const editor = mountEditor(
  document.getElementById("body-editor")!,
  createEditorState({
    doc: file.text,
    height: "auto", // as tall as its text; the page scrolls
    id: "body", // <label for="body"> focuses it
    ariaLabelledBy: "body-label", // and names it for screen readers
    host: {
      onChange: (doc) => {
        textarea.value = saveMarkdownText(doc, file); // what the form submits
      },
      uploadImage: async (bytes, hint) => upload(bytes, hint), // resolves a URL, or null
    },
  }),
);

document.getElementById("discard")!.addEventListener("click", () => {
  if (!editor.isUnedited(file)) editor.setDoc(file.text);
});
```

```html
<label id="body-label" for="body">Body</label>
<div id="body-editor" class="field"></div>
<textarea name="body" hidden></textarea>
```

```css
.field .ome-root { min-height: 12rem; border: 1px solid #ccc; border-radius: 6px; }
```

Style the field through `.ome-root`, never `.cm-editor`: a table cell being edited is an editor
of its own (`.ome-nested`), and a rule on `.cm-editor` would reach it too. To take the page's
font, size and color, use the "Fit the host page" recipe in [Theming](/editor/docs/guides/theming/).

## Height

`height: "auto"` makes the editor as tall as its content, with the bottom space the same as the
top (`--ome-padding-y`) instead of the room a full-page editor leaves to scroll past the end. A
`min-height` on `.ome-root` keeps an empty field from collapsing, and a click in the blank below
the text puts the caret at the end. The default, `"fill"`, takes the parent's height and
scrolls inside it. See [Theming](/editor/docs/guides/theming/#height).

## Label, name and focus

The editable text is a `contenteditable` element, not a form control, so a browser does not
connect it to a `<label>` by itself:

- `id` puts the id on the editable text, and a click on a `<label for>` with that id focuses
  the editor.
- `ariaLabelledBy` (an element's id) or `ariaLabel` (a string) gives the field its accessible
  name. A `<label for>` alone does not name it for screen readers.
- `editor.focus()` gives it the keyboard focus, for example when a form shows a validation
  error.

## The value is a string

`openMarkdownText` and `saveMarkdownText` are the string form of the file codec: unedited, the
string you saved is the string you loaded, exactly; edited, it keeps the original BOM and line
endings. `editor.isUnedited(file)` answers "are there unsaved changes?" with the same test. If
you decode bytes yourself, decode with `TextDecoder("utf-8", { ignoreBOM: true })` (a default
decoder drops the BOM before the codec sees it), or pass the bytes to `openMarkdownFile`.

After a save, make what you saved the new baseline (`file = openMarkdownText(saved)`), so that
`isUnedited` means "unsaved since the last save".

## Read-only

`editable: false` makes the field read-only in every mode: no typing, pasting, dropping,
checkbox ticking or property editing, and no editing controls are drawn. The reader can still
select, copy, search and follow links. Switch it with `editor.setEditable(true | false)`, for
example while the form is submitting. Reading mode (`mode: "reading"`) is a different thing: a
rendered view that still lets the reader tick a task checkbox.

## Images without a file path

A CMS entry has no path, so `saveAttachment` (which stores an image beside the document) does
not apply. `uploadImage(bytes, hint)` stores the image wherever you keep images and resolves the
link target, or `null` when the upload failed. See [Images](/editor/docs/guides/images/).

## Several fields on one page

Each editor has its own options. Give one field its own color scheme, link policy or key
bindings with `environment`, and change them with `editor.setEnvironment`; the page defaults
from `configureEditorEnvironment` fill in what a field does not give. See
[the environment](/editor/docs/guides/environment/).

```ts
import { createEditorState } from "@openmarkdown-dev/editor";

const state = createEditorState({
  doc: "",
  environment: {
    handleKey: (_view, e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
        form.requestSubmit(); // Mod+Enter submits this field's form
        return true;
      }
      return false;
    },
  },
});
```

## Commands for a toolbar

A field's own toolbar can call the editor's commands on the handle, with no import from the
CodeMirror packages: `editor.undo()`, `editor.redo()`, `editor.openSearch()`,
`editor.closeSearch()`, `editor.isSearchOpen()`, `editor.revealText(text)` (select a passage
and scroll to it) and `editor.focus()`. `editor.view` is the CodeMirror view, for anything else.

## Class components and other lifecycles

The editor needs only a mount point and a cleanup. In a React class component, mount in
`componentDidMount`, call `editor.destroy()` in `componentWillUnmount`, and push outside value
changes in `componentDidUpdate` with `editor.setDoc(value)` when it differs from
`editor.getDoc()`. The same three steps fit any framework; see
[Use it in any framework](/editor/docs/getting-started/any-framework/).

## Replacing a CodeMirror editor you already have

If the field was a plain CodeMirror 6 editor, pass its state as `fromState`. The new editor takes
its document, selection and undo history, so Mod+Z still undoes what the user typed before the
switch:

```ts
import { createEditorState, mountEditor } from "@openmarkdown-dev/editor";

const previous = oldView.state; // built with history() from @codemirror/commands
oldView.destroy();
const editor = mountEditor(container, createEditorState({ fromState: previous, height: "auto" }));
```

The history carries over only when both editors use the same copy of `@codemirror/commands`
(it is a peer dependency, so one copy is the normal case). Nothing else of the old state comes
along: its extensions, keymaps and listeners are its own. Pass your own extensions again with
`extensions`, which takes one extension or an array.
