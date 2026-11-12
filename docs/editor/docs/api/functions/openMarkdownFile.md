# openMarkdownFile

> **openMarkdownFile**(`bytes`): [`MarkdownFile`](/editor/docs/api/interfaces/markdownfile/)

Open a Markdown file's bytes for the editor. Decodes strict UTF-8 (invalid
bytes throw `InvalidUtf8Error`; nothing is replaced), notes and strips a
leading BOM, detects the line endings (LF, CRLF, lone CR, or a mix) and turns
them into `\n`, and keeps a copy of the original bytes. Save with
`saveMarkdownFile`.

## Parameters

### bytes

`Uint8Array`

The file as read from disk, a network response or a file input.

## Returns

[`MarkdownFile`](/editor/docs/api/interfaces/markdownfile/)

The text to edit, and what saving needs to write the file back.

## Throws

InvalidUtf8Error when `bytes` is not valid UTF-8.
