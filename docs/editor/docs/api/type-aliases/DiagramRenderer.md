# DiagramRenderer

> **DiagramRenderer** = (`source`, `scheme`) => `string` \| `Promise`\<`string`\>

Renders one diagram's source (the body of a ```` ```mermaid ```` fence) to
an SVG string, in the editor's light or dark scheme; it may return a
promise. Reject or throw on a source it cannot render: the fence then shows
its source with the failure mark. Pass the same function each time —
results are cached per renderer and source. The source is the document's,
so run the renderer in its strictest mode (Mermaid: `securityLevel:
"strict"`, `htmlLabels: false`). Its output goes through the editor's
diagram sanitiser, which keeps SVG drawing elements and plain styling only:
HTML labels (`foreignObject`), scripts, links and event handlers make the
diagram show its source with the failure mark.

## Parameters

### source

`string`

### scheme

[`ColorScheme`](/editor/docs/api/type-aliases/colorscheme/)

## Returns

`string` \| `Promise`\<`string`\>
