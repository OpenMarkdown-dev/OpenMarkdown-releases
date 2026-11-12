# saveMarkdownFile

> **saveMarkdownFile**(`doc`, `file`): `Uint8Array`

The bytes to write for the editor's document. Unedited (`doc` equals
`file.text`), they are the original bytes, exactly. Edited, they are `doc`
encoded as UTF-8 with the file's BOM put back and every line break written
as `file.ending`; a file with mixed line endings gets uniform ones.

## Parameters

### doc

`string`

The document to save, usually `editor.getDoc()`.

### file

[`MarkdownFile`](/editor/docs/api/interfaces/markdownfile/)

What `openMarkdownFile` returned for this file.

## Returns

`Uint8Array`

The file's bytes.
