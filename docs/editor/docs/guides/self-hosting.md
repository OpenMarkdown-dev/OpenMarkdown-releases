# Self-hosting

This guide is for pages that load JavaScript as plain files from their own server: a
server-rendered app (Jinja, ERB, Go templates, PHP) with no bundler of its own, or a site whose
policy rules out a CDN. You build the editor once with [esbuild](https://esbuild.github.io/),
copy the output next to your other static files, and load it with one `<script type="module">`
under a strict Content Security Policy.

If your app already has a bundler (Vite, webpack, Rollup, esbuild), you do not need this page:
import the package as in [your first editor](/editor/docs/getting-started/first-editor/) and your
bundler does the same splitting.

## 1. Install

In a small build project (it can live inside your app's repository), install the editor, its
CodeMirror peers, the code-block languages (optional: highlighted fenced code) and esbuild:

```sh
npm install @openmarkdown-dev/editor @codemirror/state @codemirror/view @codemirror/commands \
  @codemirror/language @codemirror/lang-markdown @codemirror/lang-html \
  @codemirror/search @codemirror/autocomplete @lezer/common @lezer/highlight @lezer/markdown \
  @codemirror/language-data
npm install --save-dev esbuild
```

To build from a local package file instead of the registry (a tarball made with `npm pack`,
for example before a release reaches npm), install the file by its path. npm 7 and later install
the peers listed above with it:

```sh
npm install ./openmarkdown-dev-editor-0.1.0.tgz
npm install --save-dev esbuild
```

## 2. The entry

One module of your own imports the editor and mounts it. It reads the document from a
`<textarea>` your template fills, copies the document back into it on each change (so an
ordinary form post saves it), and hands CodeMirror the page's style nonce:

```js selfhost-entry
// src/editor.js
import { EditorView } from "@codemirror/view";
import { languages } from "@codemirror/language-data";
import { createEditorState, mountEditor } from "@openmarkdown-dev/editor";

// The nonce the server put in this response's CSP header, read from the page.
const nonce = document.querySelector('meta[property="csp-nonce"]')?.nonce ?? "";
const source = document.getElementById("editor-doc");

mountEditor(
  document.getElementById("editor"),
  createEditorState({
    doc: source.value,
    extensions: EditorView.cspNonce.of(nonce),
    // Render ```mermaid blocks as diagrams. Set false to keep them as code and
    // never load Mermaid; see "Diagrams and the policy" below.
    diagrams: true,
    // Highlight fenced code; each language is a chunk, fetched on first use.
    codeLanguages: languages,
    host: { onChange: (doc) => { source.value = doc; } },
  }),
);
```

## 3. The build

This script is the whole build. Run it with `node build.mjs`; it writes the editor into
`static/editor/`:

```js selfhost-config
// build.mjs
import { build } from "esbuild";
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outdir = "static/editor";

const result = await build({
  entryPoints: ["src/editor.js"],
  bundle: true,
  format: "esm",
  // Mermaid, Temml and each code language become chunks, fetched only when needed.
  splitting: true,
  outdir,
  entryNames: "[name]",
  chunkNames: "chunks/[name]-[hash]",
  target: "es2022",
  minify: true,
  // Keep /*! … */ and @license comments in the file they came from.
  legalComments: "eof",
  metafile: true,
  logLevel: "warning",
});

// Every package that went into the output, with its license text, in one file.
const notices = new Map();
for (const input of Object.keys(result.metafile.inputs)) {
  const dir = /^(.*node_modules\/(?:@[^/]+\/)?[^/]+)\//.exec(input)?.[1];
  if (!dir || notices.has(dir) || !existsSync(join(dir, "package.json"))) continue;
  const pkg = JSON.parse(readFileSync(join(dir, "package.json"), "utf8"));
  const file = readdirSync(dir).find((f) => /^(licen[cs]e|copying|notice)/i.test(f));
  const text = file ? readFileSync(join(dir, file), "utf8") : `License: ${pkg.license}`;
  notices.set(dir, `${pkg.name}@${pkg.version}\n\n${text.trim()}\n`);
}
const all = [...notices.values()].sort();
writeFileSync(join(outdir, "THIRD_PARTY_LICENSES.txt"), all.join(`\n${"-".repeat(72)}\n\n`));
```

- `format: "esm"` with `splitting: true` keeps the editor's lazy `import()`s as separate files.
  Without splitting, esbuild would inline Mermaid and every language into one large file that
  every page downloads. If your page must load one file, see
  [bundling into one file](/editor/docs/guides/bundling/).
- `legalComments: "eof"` keeps the license comments some packages put in their code. Most
  packages do not, so the script also writes `THIRD_PARTY_LICENSES.txt` with the license file of
  every package in the output. Serve it, or link it from your app's notices page: the MIT and
  similar licenses require the notice to travel with the code.

## 4. What it writes

```text
static/editor/
├── editor.js                  the entry: the editor, CodeMirror and Lezer
├── THIRD_PARTY_LICENSES.txt   the license of every package in the output
└── chunks/
    ├── chunk-….js             code shared between the entry and lazy chunks
    ├── mermaid.core-….js      Mermaid, loaded on the first diagram
    ├── flowDiagram-….js       one chunk per Mermaid diagram type (and so on)
    ├── temml-….js             Temml, loaded on the first formula
    ├── dist-….js              a CodeMirror language package
    └── ruby-….js, shell-….js  a legacy-mode language, one per language
```

**Deploy every file.** The entry and the chunks find each other by relative URL, and which
chunks a page needs depends on the documents it opens: a diagram type or a code language no
one has used yet still has to be there the day someone uses it. Copy the whole directory,
never a selection, and copy it again on every upgrade (the hashes in the chunk names change).

## 5. The page

The server makes a fresh nonce for every response, sends it in the CSP header and writes it
into the page. This is the strict policy. It is all the editor, its icons and its formulas
need; with `diagrams: false` in the entry it is all the page needs:

```text selfhost-csp
default-src 'self'; script-src 'self'; style-src 'self' 'nonce-{{ nonce }}'; img-src 'self' https:; object-src 'none'; base-uri 'none'
```

A page that renders diagrams uses this one instead (see
[diagrams and the policy](#diagrams-and-the-policy)):

```text selfhost-csp-diagrams
default-src 'self'; script-src 'self'; style-src 'self' 'nonce-{{ nonce }}'; img-src 'self' https:; object-src 'none'; base-uri 'none'; style-src-elem 'self' 'unsafe-inline'; style-src-attr 'unsafe-inline'
```

```html selfhost-page
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Notes</title>
    <meta property="csp-nonce" nonce="{{ nonce }}" />
    <style nonce="{{ nonce }}">
      #editor { height: 480px; }
    </style>
    <script type="module" src="/static/editor/editor.js"></script>
  </head>
  <body>
    <form method="post">
      <div id="editor"></div>
      <textarea id="editor-doc" name="doc" hidden>{{ doc }}</textarea>
      <button>Save</button>
    </form>
  </body>
</html>
```

- `script-src 'self'` is enough for scripts: the editor and all its chunks are files from your
  origin, and it runs no inline script and no `eval`.
- `style-src 'self' 'nonce-…'`: CodeMirror and the editor inject their styles as `<style>`
  elements, and `EditorView.cspNonce` stamps the nonce on them. The editor writes no `style`
  attribute: what a formula needs is applied through `element.style`, which the policy allows.
  Your own inline `<style>` needs the same nonce; `style="…"` attributes in your template are
  blocked by this policy, so put such rules in a stylesheet.
- `img-src https:` lets documents show images from the web. Narrow it, or drop it and pass a
  `resolveImage` to the host (see [images](/editor/docs/guides/images/) and
  [untrusted content](/editor/docs/guides/untrusted-content/)).
- The nonce sits on a `<meta>` element's `nonce` attribute rather than in its `content`, the
  same convention as Vite's: the browser hides the attribute from selectors, and the script
  reads it from the `nonce` property.
- Your template engine must escape the document it writes into the `<textarea>` (Jinja's
  autoescape does). Serve `.js` files as `text/javascript`.

## Diagrams and the policy

The editor puts a diagram on the page without inline styles: its `<style>` gets the nonce and
its style attributes are applied through `element.style`. Mermaid itself does not. To measure
a diagram, it draws it once in the page, setting `style` attributes and adding `<style>`
elements that carry no nonce. Under the strict policy the browser blocks those and reports
each one as a violation (about 36 for a flowchart). The diagram still appears, but its text may
be measured without its font settings.

Pick one:

- **Render diagrams**: send the diagram policy above. It is the strict policy plus
  `style-src-elem 'self' 'unsafe-inline'` and `style-src-attr 'unsafe-inline'`. A nonce cannot
  cover Mermaid's `<style>` elements, and browsers ignore `'unsafe-inline'` in a directive that
  also has a nonce, so `style-src-elem` lists none. Inline styles are then allowed on the
  page; scripts stay `'self'` only.
- **No diagrams**: set `diagrams: false` in the entry and keep the strict policy. A
  ```` ```mermaid ```` block shows as code, and the page never fetches Mermaid (its chunks are
  still in the output, unused).
- **No diagrams, and no Mermaid in the build**: import from the package's diagram-free entry
  instead, and keep the strict policy. Change one line of the entry, and drop `diagrams` (that
  entry ignores it):

  ```js
  import { createEditorState, mountEditor } from "@openmarkdown-dev/editor/no-diagrams";
  ```

  `@openmarkdown-dev/editor/no-diagrams` is the same editor with the same API, built from the
  same code, minus the diagram support: nothing it imports reaches Mermaid, so esbuild writes no
  Mermaid chunk and `THIRD_PARTY_LICENSES.txt` does not list it. A ```` ```mermaid ```` block
  shows as code. npm still installs the `mermaid` package (it is a dependency of the main
  entry); it just never reaches your output.

## Native WebViews and static hosts

A desktop or mobile app that shows the editor in a WebView (WKWebView, WebView2, Android
WebView), or a site served as static files, has no server to template a page per response.
The build above is the same; four things differ.

- **Serve the files from an origin.** Module scripts and their chunk imports do not load from
  `file://`. Serve the output through a custom scheme (`WKURLSchemeHandler`,
  `WebResourceRequested`, `WebViewAssetLoader`) or a local origin, with `.js` as
  `text/javascript`. Chunk imports are relative, so they resolve against that origin.
- **Wait for the page, not for the load event.** A WebView can report the page loaded before
  the module graph has run, so the first call from native code finds nothing to call. Send a
  message as the entry's last statement and call into the page only after it arrives:

  ```js
  // last line of entry.js (WKWebView; use your WebView's bridge)
  window.webkit?.messageHandlers?.editor?.postMessage({ type: "ready" });
  ```

- **The nonce needs a server.** A nonce only protects a page when it is new for every response;
  a fixed one written into a static file protects nothing. Without a server, use
  `style-src 'self' 'unsafe-inline'` (what diagrams need anyway), keep `script-src 'self'`,
  limit `img-src` to the schemes your images come from, and set `connect-src 'none'` if the
  page needs no network. The strict policy above is for a server that sends a fresh nonce.
- **Only what is on screen is in the page.** The editor draws the lines in view and a margin
  around them, not the whole document; this keeps long documents fast. Anything that reads the
  page's DOM sees only that part: the WebView's own find, copying the rendered HTML, and
  screen readers and other accessibility tools. Read the text with `editor.getDoc()`, and for
  find use the editor's own panel (Cmd/Ctrl+F, or `editor.openSearch()`), which searches the
  whole document.

## Loaded on demand

The entry holds what every editor needs. The rest is fetched the first time a document needs
it, and never otherwise:

- **Mermaid** and the code for each diagram type, on the first `mermaid` code block of that type
  (never, with `diagrams: false`; not in the output at all, with the `no-diagrams` entry);
- **Temml**, on the first formula;
- **a code language's grammar**, on the first fenced block in that language.

A document with none of these downloads only the entry and the chunks it shares.

## Sizes

Measured with the build above on the 0.1.0 package (minified, before compression):

- the output is about 230 files and 5.3 MB on disk, almost all of it lazy chunks that most pages
  never request;
- an editor that mounts on a plain document fetches the entry and the chunks it imports, about
  720 KB;
- the first diagram adds Mermaid's core and that diagram type, about 760 KB for a flowchart;
- the first formula adds Temml, about 210 KB; a code language adds from a few KB to about 50 KB;
- a document with a diagram, math and a code language fetches about 37 files, 1.7 MB.

Built from the `@openmarkdown-dev/editor/no-diagrams` entry instead, the output is about 125
files and 1.9 MB on disk: no Mermaid chunks. What a page fetches is the same as above for
documents without a diagram (the entry is the same size; a document with math and a code
language fetches about 9 files, 950 KB). The saving is in what you build and deploy.

Serve the files compressed (gzip or brotli); this JavaScript shrinks to roughly a third. The
chunk names carry content hashes, so chunks can be cached for a long time; `editor.js` keeps its
name and should be revalidated.
