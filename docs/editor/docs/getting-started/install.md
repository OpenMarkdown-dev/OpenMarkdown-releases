# Install

```sh
npm install @openmarkdown-dev/editor
```

npm 7 and later also install the editor's **peer dependencies**, CodeMirror and Lezer. With
another package manager, or to pin them yourself, install them explicitly:

```sh
npm install @openmarkdown-dev/editor @codemirror/state @codemirror/view @codemirror/commands \
  @codemirror/language @codemirror/language-data @codemirror/lang-markdown \
  @codemirror/search @codemirror/autocomplete @lezer/highlight @lezer/markdown
```

## Why peers

Your page must hold exactly one copy of `@codemirror/state`. Two copies break CodeMirror:
extensions from one copy are not recognised by the other ("Unrecognized extension value").
Because CodeMirror is a peer, an app that already uses CodeMirror shares its copy with the
editor.

## What else comes with it

- `temml` (math) and `mermaid` (diagrams) are regular dependencies. The editor loads them
  with `import()` only when a document contains math or a diagram, and your bundler splits
  them into separate chunks. A document without either never downloads them.
- `@openmarkdown-dev/editor/no-diagrams` is the same editor without diagram support: nothing
  it imports reaches Mermaid, so your bundler emits no Mermaid chunks, and a ```` ```mermaid ````
  block stays code. It has the same API; import from it instead of the main entry. (npm still
  installs `mermaid`, a dependency of the main entry.)
- There is no CSS file to import. The editor injects its styles, and every color and font is
  a `--ome-*` custom property you can override ([Theming](/editor/docs/guides/theming/)).

## No bundler?

Framework-free is not build-free. The package is ES modules with bare imports
(`@codemirror/state`, …), which a browser cannot resolve on its own: a page loads it either from
a CDN that rewrites them (once the package is published there) or from files you build once
and serve yourself. [Self-hosting](/editor/docs/guides/self-hosting/) gives that build, for a
server-rendered app with no bundler or a page that may not use a CDN.

## Requirements

- The package is ES2022 JavaScript with TypeScript declarations included.
- Importing it needs no DOM, so it is safe in server code ([SSR](/editor/docs/guides/ssr/)).
  Mounting an editor needs a browser DOM.
- Every build is tested by mounting, typing, rendering math and a diagram, and switching mode
  and scheme in headless Chromium, WebKit (Safari's engine) and Firefox.

Next: [your first editor](/editor/docs/getting-started/first-editor/).
