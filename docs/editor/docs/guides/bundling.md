# Bundling into one file

Some hosts bundle everything into one script: an esbuild or Rollup build with `format: "iife"`,
a plugin system that loads one file, a template that has one `<script>` tag. A one-file build
cannot leave anything for later, so every lazy `import()` in the editor is inlined into it: the
formula renderer, Mermaid with all its diagram types, the HTML grammar. This page says what that
costs for each entry and how to keep the file small.

If your bundler can split (Vite, webpack, Rollup or esbuild with `format: "esm"` and
`splitting: true`), you do not need this page: the renderers stay separate chunks, fetched only
by a document that needs them.

## What each entry inlines

Measured by the release check: one minified IIFE that mounts the editor, with CodeMirror and Lezer
inside (your own copy of CodeMirror, if your page has one, is shared and not counted twice).

| Import | What is inlined besides the editor and CodeMirror | Minified | gzip |
| --- | --- | --- | --- |
| `@openmarkdown-dev/editor` | Temml, Mermaid and every Mermaid diagram type, the HTML grammar | 4270 KB | 1214 KB |
| `@openmarkdown-dev/editor/no-diagrams` | Temml, the HTML grammar | 923 KB | 304 KB |
| `@openmarkdown-dev/editor/no-renderers` | the HTML grammar | 721 KB | 246 KB |

The package's own code is the same in each. For a page that bundles into one file, use
`/no-renderers` and give the editor the renderers your page already has, or `/no-diagrams` when the
built-in formula renderer is welcome. With a splitting bundler, the first load of every entry is
the same, about 185 KB gzipped with CodeMirror.

## The recipe

Import the entry without renderers, and hand it your page's own:

```js
// editor-live.js, bundled with esbuild --bundle --format=iife
import { configureEditorEnvironment, createEditorState, mountEditor } from "@openmarkdown-dev/editor/no-renderers";

configureEditorEnvironment({
  // The page's MathJax, already loaded: MathML for each formula.
  renderMath: (tex, displayMode) => window.MathJax.tex2mml(tex, { display: displayMode }),
  // The page's Mermaid: SVG for each diagram.
  renderDiagram: async (source, scheme) => {
    window.mermaid.initialize({ startOnLoad: false, securityLevel: "strict", htmlLabels: false, flowchart: { htmlLabels: false }, theme: scheme === "dark" ? "dark" : "default" });
    return (await window.mermaid.render(`diagram-${Date.now()}`, source)).svg;
  },
});

export function mountLiveEditor(parent, doc) {
  return mountEditor(parent, createEditorState({ doc }));
}
```

What the renderers must return, and what the editor does with it, is in
[math and diagram renderers](/editor/docs/guides/renderers/). Without them, `/no-renderers` shows formulas as TeX
and mermaid fences as code, which is a fine start for a wiki that has neither yet.

## Code blocks

Highlighted code blocks are an opt-in (`codeLanguages`), and what you pass is what gets inlined:
`@codemirror/language-data`'s whole list puts every grammar in the file. In a one-file build, pass
only the languages your pages use:

```js
import { LanguageDescription } from "@codemirror/language";
import { python } from "@codemirror/lang-python";
import { createEditorState } from "@openmarkdown-dev/editor/no-renderers";

const codeLanguages = [LanguageDescription.of({ name: "Python", alias: ["py"], support: python() })];
const state = createEditorState({ doc, codeLanguages });
```

## No bundler at all

`@openmarkdown-dev/editor/browser` (`dist/browser.js`) is a prebuilt one-file ES module: the
`/no-diagrams` entry with CodeMirror, Lezer, Temml and the HTML grammar inside, minified (about
304 KB gzipped), opening with the license notices of what it bundles. Load it with
`<script type="module">` from your own server or a CDN that serves npm files, and give it your
page's Mermaid for diagrams. It holds its own CodeMirror, so it cannot take `extensions` built
from another copy; a page that uses CodeMirror itself should bundle the package instead
([self-hosting](/editor/docs/guides/self-hosting/)).
