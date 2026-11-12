# MarkdownFile

A Markdown file opened with `openMarkdownFile`: the text to give the editor,
plus what `saveMarkdownFile` needs to write it back.

## Properties

### bom

> **bom**: `boolean`

Whether the file started with a UTF-8 BOM (`EF BB BF`). An edited save writes it back.

***

### bytes

> **bytes**: `Uint8Array`

The file's original bytes (a copy of what was passed in).
`saveMarkdownFile` returns them as they are while the text is unedited.

***

### ending

> **ending**: [`LineEnding`](/editor/docs/api/type-aliases/lineending/)

The line ending an edited save writes: the file's most frequent one; on a
tie, the one that comes first in the file. `"\n"` for a file with no line
break.

***

### mixed

> **mixed**: `boolean`

Whether the file mixes line endings (two or more of LF, CRLF and lone CR).
Unedited, it is saved as its original bytes, mix included; once edited,
every line break is written as `ending`.

***

### text

> **text**: `string`

The text to edit: the file decoded as UTF-8, without a leading BOM, with
every line ending turned into `\n`. Pass it as `doc` to `createEditorState`
(or to `editor.setDoc`). Unicode is kept as written: nothing is normalized.
