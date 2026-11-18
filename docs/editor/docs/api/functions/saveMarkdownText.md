# saveMarkdownText

> **saveMarkdownText**(`doc`, `file`): `string`

The string to store for the editor's document. Unedited (`doc` equals
`file.text`), it is the original string, exactly. Edited, it is `doc` with
the original BOM put back and every line break written as `file.ending` —
the same text `saveMarkdownFile` encodes.

## Parameters

### doc

`string`

The document to save, usually `editor.getDoc()`.

### file

[`MarkdownText`](/editor/docs/api/interfaces/markdowntext/)

What `openMarkdownText` returned for this string.

## Returns

`string`

The string to store.
