# openMarkdownText

> **openMarkdownText**(`source`): [`MarkdownText`](/editor/docs/api/interfaces/markdowntext/)

Open a Markdown file you hold as a string — a CMS field, a textarea, a JSON
response — for the editor: the same reading as `openMarkdownFile` after
decoding (notes and strips a leading BOM, detects the line endings and turns
them into `\n`), keeping the original string. Save with `saveMarkdownText`.
If you decode bytes yourself, decode with `ignoreBOM: true` (a default
`TextDecoder` drops the BOM before this sees it), or use
`openMarkdownFile` on the bytes instead.

## Parameters

### source

`string`

The file's content as a string.

## Returns

[`MarkdownText`](/editor/docs/api/interfaces/markdowntext/)

The text to edit, and what saving needs to write the string back.
