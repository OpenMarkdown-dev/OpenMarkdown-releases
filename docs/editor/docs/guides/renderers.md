# Math and diagram renderers

The editor draws `$…$` / `$$…$$` formulas and ```` ```mermaid ```` diagrams through two
renderers. Each entry of the package carries built-in ones, loaded only when a document first
needs them, and you can give your own instead: your page's MathJax, KaTeX or Mermaid, so the page
loads one copy and every formula and diagram looks the same inside and outside the editor.

| Entry | Built-in formula renderer | Built-in diagram renderer |
| --- | --- | --- |
| `@openmarkdown-dev/editor` | Temml | Mermaid |
| `@openmarkdown-dev/editor/no-diagrams` | Temml | none |
| `@openmarkdown-dev/editor/no-renderers` | none | none |

A renderer you give is used in place of the built-in one, with every entry. With no renderer at
all, a formula shows as its TeX and a mermaid fence stays a code block.

## Where they go

The renderers are two members of the editor environment, `renderMath` and `renderDiagram`, so
they follow its rules ([environment](/editor/docs/guides/environment/)): give them to every editor on the page with
`configureEditorEnvironment`, or to one editor with `createEditorState({ environment })`, and
replace them later with `editor.setEnvironment(...)`, which redraws every formula and diagram.

```ts
import { configureEditorEnvironment, createEditorState, mountEditor } from "@openmarkdown-dev/editor";

configureEditorEnvironment({
  renderMath: (tex, displayMode) => window.MathJax.tex2mml(tex, { display: displayMode }),
});
mountEditor(document.getElementById("editor")!, createEditorState({ doc: "Euler: $e^{i\\pi} + 1 = 0$" }));
```

## Formulas: `renderMath(tex, displayMode)`

It receives the TeX inside one formula (without the dollar signs) and returns **MathML**: a string
holding one `<math>` element. `displayMode` is true for a `$$…$$` block. It is called
synchronously each time a formula is drawn, so hand it over once your renderer has loaded (after
`MathJax.startup.promise`, say). Throw on TeX it cannot render: that formula then shows its source
with the failure mark, and the rest of the document is unaffected.

- **MathJax:** `MathJax.tex2mml(tex, { display: displayMode })`.
- **KaTeX:** `katex.renderToString(tex, { displayMode, output: "mathml", throwOnError: true, trust: false })`.
- **Temml** (what the built-in one does): `temml.renderToString(tex, { displayMode, throwOnError: true, trust: false })`.

The browser lays MathML out itself, so formulas take your page's font and need no stylesheet.

## Diagrams: `renderDiagram(source, scheme)`

It receives the source of one ```` ```mermaid ```` fence and the editor's color scheme
(`"light"` or `"dark"`), and returns an **SVG** string, or a promise of one. Reject on a source it
cannot render. Pass the same function each time: results are cached per renderer, source and
scheme. With your page's own Mermaid:

```ts
import mermaid from "mermaid";
import { createEditorState, mountEditor, type DiagramRenderer } from "@openmarkdown-dev/editor/no-diagrams";

let n = 0;
const renderDiagram: DiagramRenderer = async (source, scheme) => {
  mermaid.initialize({ startOnLoad: false, securityLevel: "strict", htmlLabels: false, flowchart: { htmlLabels: false }, theme: scheme === "dark" ? "dark" : "default" });
  return (await mermaid.render(`host-diagram-${++n}`, source)).svg;
};

mountEditor(document.getElementById("editor")!, createEditorState({ doc, environment: { renderDiagram } }));
```

The `/no-diagrams` entry plus your own Mermaid means your page holds one Mermaid, at the version
you chose, and the editor package never adds another to your bundle.

## What the editor does with the output

A renderer's output is placed in the page only after the editor's sanitiser has checked it, the
same one the built-in renderers go through (see [untrusted content](/editor/docs/guides/untrusted-content/)). The
TeX and the diagram source are the document's, so possibly someone else's.

- **Formulas** keep presentation MathML only. HTML layout (KaTeX's default output), SVG, links
  and styles make the formula show its source with the failure mark. Configure the renderer not
  to trust the TeX (`trust: false`; no `\href`).
- **Diagrams** keep SVG drawing elements, text and plain styling only, inside the editor's diagram
  profile. HTML labels (`foreignObject`), scripts, links, images and event handlers make the
  diagram show its source with the failure mark. Run Mermaid with `securityLevel: "strict"` and
  `htmlLabels: false`. The editor renames the SVG's root id (and every reference to it) into its
  own scheme; you need not.

## Code blocks

Highlighting fenced code is a third opt-in, the option `codeLanguages`: a list of CodeMirror
`LanguageDescription`s, matched by the fence's info string. The usual list is
`@codemirror/language-data`'s, about a hundred languages, each loaded the first time a fence uses
it. Install it beside the editor:

```ts
import { languages } from "@codemirror/language-data";
import { createEditorState } from "@openmarkdown-dev/editor";

const state = createEditorState({ doc, codeLanguages: languages });
```

Without `codeLanguages`, fenced code shows unhighlighted, and `@codemirror/language-data` (with
its twenty-odd language packages) never enters your lockfile. HTML inside Markdown is always
highlighted; its grammar loads the first time a document holds HTML.
