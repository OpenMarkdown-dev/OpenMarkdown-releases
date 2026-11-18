# OpenMarkdown Editor

`@openmarkdown-dev/editor` is a live-preview Markdown editor built on [CodeMirror 6](https://codemirror.net/).
Headings, lists, tables, math, Mermaid diagrams, callouts and YAML properties render in place,
and the Markdown shows under the caret. It edits the Markdown source text itself, for a
lossless round-trip: open and save without editing, and the file is byte-for-byte what it was.
When you edit, only what you touched changes, with a few exceptions, each pinned by a test.

It is the editor inside the [OpenMarkdown](https://openmarkdown.dev) app, extracted as an MIT library.

## Start here

1. [Install](/editor/docs/getting-started/install/) the package and its CodeMirror peers.
2. [Mount your first editor](/editor/docs/getting-started/first-editor/) in plain JavaScript.
3. Use it [in React](/editor/docs/getting-started/react/) or [in any other framework](/editor/docs/getting-started/any-framework/).

## Guides

- [The host: `EditorHost`](/editor/docs/guides/host/): the per-document callbacks (changes, links, images, outline).
- [The environment: `EditorEnvironment`](/editor/docs/guides/environment/): per editor or as page defaults (color scheme, clipboard, links, spelling, keys).
- [Embed in a form or CMS field](/editor/docs/guides/embed-in-a-form/): auto height, labels, a string value, read-only, image uploads, replacing a CodeMirror editor.
- [Theming](/editor/docs/guides/theming/): the `--ome-*` custom properties.
- [UI language](/editor/docs/guides/language/): English, Chinese, Japanese and Korean.
- [Images](/editor/docs/guides/images/): showing, pasting, dropping and resizing.
- [Markdown syntax](/editor/docs/guides/syntax/): what the editor renders, what it shows as written, and how math delimiters are read.
- [Untrusted content](/editor/docs/guides/untrusted-content/): what the editor does with a document written by someone else.
- [Server-side rendering](/editor/docs/guides/ssr/): importing on the server, mounting in the browser.
- [Self-hosting](/editor/docs/guides/self-hosting/): building the editor into static files, without a bundler or a CDN, under a strict CSP.

## Fidelity

- [What the editor changes in your file](/editor/docs/fidelity/), and what it never changes.
- [How we compared it with other editors](/editor/docs/fidelity/method/): method, an example diff, the run date and the caveats.

## Reference and examples

- The [API reference](/editor/docs/api/) is generated from the package's type declarations.
- [Examples](/editor/examples/): small projects you can run, one per task.
- [Live demo](/editor/demo/): the editor with a showcase document.

## Code and app

The editor's source is in its public repository, and the same editor ships inside the
OpenMarkdown app for macOS, Windows and Linux. To see it with files, folders and an agent
around it, [get the app](/#download) or
[try the whole app in your browser](/demo).
