# The environment: `EditorEnvironment`

Some capabilities belong to the page, not to a document: the color scheme, the clipboard,
external links, spelling, the UI language and the host's key bindings. Provide them once with
`configureEditorEnvironment`, before the first editor mounts. A later call replaces the whole
environment.

Every member is optional. Without the call, the editor is light, English, and has no clipboard,
external-link, spelling or host-key behaviour.

| Member | What it does | Without it |
| --- | --- | --- |
| `language` | The editor's own UI words: `"en"`, `"zh"`, `"ja"` or `"ko"`. | English. |
| `colorScheme` | `{ current(), subscribe(cb) }`: the page's `"light"` / `"dark"` scheme and its changes. | Always light. |
| `copyText(text)` | Put text on the clipboard (the code-block copy button). | No copy button action. |
| `openExternal(url)` | A web link was followed (Cmd/Ctrl+click; a plain click in reading mode). Your policy decides how it opens. | Web links do nothing. |
| `refusedLink(url, scheme)` | The editor refused a script-capable link (`javascript:`, `data:` and similar). Use it to tell the user. Never open the URL. | The refusal is silent. |
| `spell` | A `SpellService` that draws spelling squiggles and offers suggestions. | No spell checking. |
| `handleKey(view, event)` | Sees each key before the editor's defaults. Return `true` to consume it. | The editor's keymap only. |

## Follow the system color scheme

```ts
import { configureEditorEnvironment } from "@openmarkdown-dev/editor";

const media = matchMedia("(prefers-color-scheme: dark)");
configureEditorEnvironment({
  colorScheme: {
    current: () => (media.matches ? "dark" : "light"),
    subscribe: (cb) => {
      const on = () => cb(media.matches ? "dark" : "light");
      media.addEventListener("change", on);
      return () => media.removeEventListener("change", on);
    },
  },
  copyText: (text) => navigator.clipboard.writeText(text),
  openExternal: (url) => window.open(url, "_blank", "noopener"),
});
```

A mounted editor subscribes while it lives and unsubscribes in `destroy`. A page with its own
theme toggle implements `colorScheme` over that toggle instead.

## Spelling: `SpellService`

The editor draws its own spelling squiggles and suggestion menu; the checking is yours. A
`SpellService` has six members:

| Member | What it does |
| --- | --- |
| `isOn()` | Is spell checking on right now? |
| `onChange(cb)` | Follow the on / off state. Returns the unsubscribe. |
| `newDocument()` | A fresh spell-document number for one editor, so a checker can keep per-editor ignore lists. |
| `check(doc, paragraphs)` | The misspellings (`SpellMiss`, UTF-16 `from` / `to` offsets) for each paragraph, in order, or `null` when the check could not run. |
| `suggestions(doc, paragraph, from, to)` | Up to five suggestions for `paragraph.slice(from, to)`. |
| `closeDocument(doc)` | The editor of `doc` is gone. |

Pass `checkSpelling: false` to `createEditorState` for an editor that should never show
squiggles, such as a small comment box.

## Host key bindings

`handleKey` sees every key the editor's keymap sees, before CodeMirror's defaults. Return `true`
when your binding ran:

```ts
import { configureEditorEnvironment } from "@openmarkdown-dev/editor";

configureEditorEnvironment({
  handleKey: (view, event) => {
    if ((event.metaKey || event.ctrlKey) && event.key === "s") {
      save(view.state.doc.toString());
      return true;
    }
    return false;
  },
});
```

The full signatures are in the [API reference](/editor/docs/api/interfaces/editorenvironment/).
