# MathRenderer

> **MathRenderer** = (`tex`, `displayMode`) => `string`

Renders the TeX inside one formula (without its `$` / `$$` delimiters) to
presentation MathML: a string holding one `<math>` element (MathJax's
`tex2mml`, KaTeX with `output: "mathml"`, Temml's `renderToString`).
`displayMode` is true for a `$$…$$` block. Called synchronously each time a
formula is drawn, so have the renderer loaded before you hand it over
(`editor.setEnvironment` redraws every formula with a new one). Throw on TeX
it cannot render: the formula then shows its source with the failure mark.
The TeX is the document's — possibly someone else's — so configure the
renderer not to trust it (no `\href`, no `\style`). Its output goes through
the editor's sanitiser, which keeps presentation MathML only: anything else
(HTML, SVG, styles) makes the formula show its source with the failure mark.

## Parameters

### tex

`string`

### displayMode

`boolean`

## Returns

`string`
