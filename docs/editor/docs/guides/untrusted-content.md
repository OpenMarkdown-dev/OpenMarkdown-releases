# Untrusted content

The editor is built to render documents written by someone else, such as a teammate or an AI
agent. Rendering a document never runs its script:

- **Raw HTML is shown as source**, never rendered.
- **Math** (Temml, `trust: false`) and the editor's icons reach the DOM only through one sanitiser
  with an allowlist of elements and attributes. Unknown elements make the formula fall back to
  its source. Unknown attributes are dropped.
- **Mermaid** runs with `securityLevel: "strict"` and no HTML labels. Its SVG goes through the same
  allowlist.
- **Links** are classified the way a browser reads them, after decoding entities and removing
  control characters. `javascript:`, `vbscript:`, `livescript:` and `data:` links are never passed
  to `openLink` or `openExternal`, however they are obfuscated. Your `refusedLink` is told
  instead.
- **Images**: without a `resolveImage`, only absolute `https:` images load. With one,
  script-capable URLs are still dropped.

## What stays your job

- **Network policy.** An `https:` image in a document is loaded by the browser, which tells its
  server the page was opened. If that matters, return `null` from `resolveImage` for hosts you do
  not trust, or proxy images.
- **Opening links.** `openExternal` and `openLink` receive URLs and paths the editor already
  classified as safe to follow; your policy still decides whether and how to open them.
- **Content Security Policy.** CodeMirror injects `<style>` elements, so a strict `style-src`
  needs a nonce through CodeMirror's `EditorView.cspNonce`, passed with `extensions`:

```ts
import { EditorView } from "@codemirror/view";
import { createEditorState } from "@openmarkdown-dev/editor";

const state = createEditorState({ doc, extensions: EditorView.cspNonce.of(nonce) });
```

What a strict policy (`script-src 'self'; style-src 'self' 'nonce-…'`, no `'unsafe-inline'`)
needs, exactly:

- **The editor and math**: only that nonce. The editor writes no `style` attribute; a formula's
  styles are applied through `element.style`, which the policy allows.
- **Diagrams**: more. Mermaid draws each diagram once in the page to measure it, with `style`
  attributes and `<style>` elements that carry no nonce. Without
  `style-src-attr 'unsafe-inline'` and `style-src-elem 'self' 'unsafe-inline'` the browser
  blocks them and reports violations. Either add those two directives, or pass
  `diagrams: false` to `createEditorState` (or import `@openmarkdown-dev/editor/no-diagrams`,
  which leaves Mermaid out of the build): `mermaid` blocks then stay code and Mermaid is
  never loaded. [Self-hosting](/editor/docs/guides/self-hosting/#diagrams-and-the-policy) gives both policies,
  tested in a browser.

## Known advisories

`npm audit` reports one advisory in a fresh install; npm counts it as `3 low severity
vulnerabilities`, one for each package on the path (`katex`, `mermaid` and this package). We
assessed it, and it does not apply to the editor:

- **GHSA-238p-pmpm-9mq7** (low; `katex`, installed through `mermaid` 11.17.2): "KaTeX: Existing
  prototype pollution can bypass trust restrictions". Exploiting it needs a prototype pollution
  already present in the page *and* KaTeX output inserted without sanitising. The editor renders
  math with Temml, not KaTeX. Mermaid runs with `htmlLabels: false`, so its labels are plain SVG
  text. Every piece of markup the editor inserts goes through its one sanitiser, which refuses
  anything outside its allow-list. The fix exists only in Mermaid 12, which adds a dependency
  under a license this package cannot take (EPL-2.0 OR GPL-3.0). With the `no-diagrams` entry,
  neither Mermaid nor KaTeX reaches your bundle. Next review: 2027-02-04.

The release check fails on any advisory that is not assessed here.

## Reporting a vulnerability

Report vulnerabilities privately through the repository's GitHub security advisories, not in a
public issue.
