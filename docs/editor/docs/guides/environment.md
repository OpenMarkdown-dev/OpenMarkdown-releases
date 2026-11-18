# The environment: `EditorEnvironment`

Some capabilities are not about a document: the color scheme, the clipboard, external links,
spelling, the UI language and the host's key bindings. Each editor can have its own, and the
page can set defaults that every editor uses for what it was not given:

- **Per editor:** pass `environment` to `createEditorState`, and change it later with
  `editor.setEnvironment(...)`. Two editors on one page can have different color schemes,
  link policies and key bindings.
- **Page defaults:** `configureEditorEnvironment(...)`, once, before the first editor mounts. A
  later call replaces the whole set. The UI `language` is page-wide and is only set here.

A member an editor's own environment gives replaces the page's for that editor; one it leaves
out falls back to the page's. Give a member as `undefined` to switch the page's off for one
editor.

Every member is optional. With neither, the editor is light, English, and has no clipboard,
external-link, spelling or host-key behaviour.

| Member | What it does | Without it |
| --- | --- | --- |
| `language` | The editor's own UI words: `"en"`, `"zh"`, `"ja"` or `"ko"`. Page-wide only. | English. |
| `colorScheme` | `"light"` or `"dark"`, or a live source `{ current(), subscribe(cb) }` that the editor follows while it is mounted. | Always light. |
| `copyText(text)` | Put text on the clipboard (the code-block copy button). | No copy button action. |
| `openExternal(url)` | A web link was followed (Cmd/Ctrl+click; a plain click in reading mode). Your policy decides how it opens. | Web links do nothing. |
| `refusedLink(url, scheme)` | The editor refused a script-capable link (`javascript:`, `data:` and similar). Use it to tell the user. Never open the URL. | The refusal is silent. |
| `spell` | A `SpellService` that draws spelling squiggles and offers suggestions. | No spell checking. |
| `handleKey(view, event)` | Sees each key before the editor's defaults. Return `true` to consume it. | The editor's keymap only. |
| `renderMath(tex, displayMode)` | Your formula renderer (MathJax, KaTeX) in place of the built-in one; returns MathML ([renderers](/editor/docs/guides/renderers/)). | The entry's built-in Temml; with `/no-renderers`, formulas show as TeX. |
| `renderDiagram(source, scheme)` | Your diagram renderer (your page's Mermaid) in place of the built-in one; returns SVG ([renderers](/editor/docs/guides/renderers/)). | The main entry's built-in Mermaid; with the other entries, fences stay code. |

## One editor's own environment

```ts
import { createEditorState, mountEditor } from "@openmarkdown-dev/editor";

const editor = mountEditor(
  document.getElementById("comment")!,
  createEditorState({
    doc: "",
    environment: {
      colorScheme: "dark",
      openExternal: (url) => window.open(url, "_blank", "noopener"),
    },
  }),
);

// Later, when your theme prop changes:
editor.setEnvironment({ colorScheme: "light", openExternal: (url) => window.open(url, "_blank", "noopener") });
```

`setEnvironment` replaces the editor's own environment as a whole: pass every member you want
it to keep. The environment travels with the state, like the mode.

## Follow the system color scheme

As a page default, for every editor:

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

A mounted editor subscribes while it shows its state and unsubscribes in `destroy`. A page with
its own theme toggle implements `colorScheme` over that toggle, or passes a fixed `"light"` /
`"dark"` and calls `editor.setEnvironment` when the toggle changes.

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
when your binding ran. Give it per editor when each editor saves somewhere else:

```ts
import { createEditorState } from "@openmarkdown-dev/editor";

const state = createEditorState({
  doc,
  environment: {
    handleKey: (view, event) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "s") {
        save(view.state.doc.toString());
        return true;
      }
      return false;
    },
  },
});
```

The full signatures are in the [API reference](/editor/docs/api/interfaces/editorenvironment/).
