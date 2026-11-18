# Install

```sh
npm install @openmarkdown-dev/editor
```

npm 7 and later also install the editor's **peer dependencies**, CodeMirror and Lezer. With
another package manager, or to pin them yourself, install them explicitly:

```sh
npm install @openmarkdown-dev/editor @codemirror/state @codemirror/view @codemirror/commands \
  @codemirror/language @codemirror/lang-markdown @codemirror/lang-html \
  @codemirror/search @codemirror/autocomplete @lezer/common @lezer/highlight @lezer/markdown
```

## Why peers

Your page must hold exactly one copy of `@codemirror/state`. Two copies break CodeMirror:
extensions from one copy are not recognised by the other ("Unrecognized extension value").
Because CodeMirror is a peer, an app that already uses CodeMirror shares its copy with the
editor.

## What else comes with it

- `temml` (math) and `mermaid` (diagrams) are regular dependencies, declared as version ranges
  (`mermaid` `^11`), so an app that already has a Mermaid 11 shares its copy. The editor loads
  them with `import()` only when a document contains math or a diagram, and your bundler splits
  them into separate chunks. A document without either never downloads them.
- HTML inside Markdown is highlighted by `@codemirror/lang-html`, loaded the first time a
  document holds HTML; it is not part of the first load.
- There is no CSS file to import. The editor injects its styles, and every color and font is
  a `--ome-*` custom property you can override ([Theming](/editor/docs/guides/theming/)).

## Choose an entry

The package has three entries with the same API. They differ only in the renderers they carry
built in ([math and diagram renderers](/editor/docs/guides/renderers/)):

| Import | Formulas | Diagrams | Use it when |
| --- | --- | --- | --- |
| `@openmarkdown-dev/editor` | Temml, built in | Mermaid, built in | You want everything to work out of the box. |
| `@openmarkdown-dev/editor/no-diagrams` | Temml, built in | yours, or none | No page needs diagrams, your page has its own Mermaid, or your style policy rules Mermaid out. |
| `@openmarkdown-dev/editor/no-renderers` | yours, or none | yours, or none | Your page already renders math and diagrams (MathJax, KaTeX, Mermaid), or you bundle into one file. |

Nothing `/no-diagrams` imports reaches Mermaid, and nothing `/no-renderers` imports reaches Temml
or Mermaid, so your bundler emits no chunk for them, and a single-file (IIFE) bundle does not
inline them ([bundling into one file](/editor/docs/guides/bundling/)). npm still installs `mermaid` and
`temml`, the main entry's dependencies.

## Highlighted code blocks

Code blocks are highlighted when you opt in with `codeLanguages`. The usual list is
`@codemirror/language-data`'s (install it beside the editor; each language loads the first time a
block uses it):

```sh
npm install @codemirror/language-data
```

```ts
import { languages } from "@codemirror/language-data";
import { createEditorState } from "@openmarkdown-dev/editor";

const state = createEditorState({ doc, codeLanguages: languages });
```

Without it, fenced code shows unhighlighted and none of the twenty-odd `@codemirror/lang-*`
packages enter your lockfile.

## Release-age gates

Some projects refuse packages published in the last few days: bun's `minimumReleaseAge`
(`bunfig.toml`), pnpm's `minimumReleaseAge` (`pnpm-workspace.yaml`), or a CI policy built on
`npm install --before`. A version of the editor younger than that window is refused. The gate
falls back to an older version only inside your version range: with `^0.2.0` in `package.json`
and 0.2.0 the newest release, no version qualifies, and the install fails until 0.2.0 is older
than the window. Pin the newest version older than your window instead:

```sh
npm view @openmarkdown-dev/editor time --json
npm install @openmarkdown-dev/editor@<version>   # the newest one older than your window
```

To exclude the package from the gate instead, bun's `minimumReleaseAgeExcludes` takes exact
package names, not patterns: list `"@openmarkdown-dev/editor"` (and `"@openmarkdown-dev/css"` if
you use the stylesheets); `"@openmarkdown-dev/*"` matches nothing.

Every release is listed with its date in the [changelog](https://github.com/OpenMarkdown-dev/OpenMarkdown-editor/blob/main/CHANGELOG.md),
and its peers and dependencies are declared as ranges, so an older editor version installs with
the CodeMirror your app already has.

## No bundler?

Framework-free is not build-free. The package is ES modules with bare imports
(`@codemirror/state`, …), which a browser cannot resolve on its own. A page without a bundler
has two ways:

- **The prebuilt browser file**, `@openmarkdown-dev/editor/browser` (`dist/browser.js`): one
  minified ES module with CodeMirror, Lezer and the formula renderer inside, for a
  `<script type="module">`. It is the `/no-diagrams` entry; for diagrams, give it your page's
  Mermaid ([renderers](/editor/docs/guides/renderers/)). It cannot share CodeMirror with your page, so
  `extensions` built from another copy of CodeMirror do not work with it.
- **Your own build**, served from your server: [self-hosting](/editor/docs/guides/self-hosting/) gives the
  build script, for a server-rendered app with no bundler or a page that may not use a CDN.

## Requirements

- The package is ES2022 JavaScript with TypeScript declarations included.
- Importing it needs no DOM, so it is safe in server code ([SSR](/editor/docs/guides/ssr/)).
  Mounting an editor needs a browser DOM.
- Every build is tested by mounting, typing, rendering math and a diagram, and switching mode
  and scheme in headless Chromium, WebKit (Safari's engine) and Firefox.

Next: [your first editor](/editor/docs/getting-started/first-editor/).
