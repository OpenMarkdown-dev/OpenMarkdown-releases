# MarkdownText

A Markdown file opened from a string with `openMarkdownText`: the text to
give the editor, plus what `saveMarkdownText` needs to write it back. The
same as `MarkdownFile`, with the original string in place of the bytes.

## Properties

### bom

> **bom**: `boolean`

Whether the string started with a BOM (U+FEFF). An edited save writes it back.

***

### ending

> **ending**: [`LineEnding`](/editor/docs/api/type-aliases/lineending/)

The line ending an edited save writes: the most frequent one; on a tie, the first. `"\n"` with no line break.

***

### mixed

> **mixed**: `boolean`

Whether the string mixes line endings. Unedited, it is saved as it was; once edited, every line break is written as `ending`.

***

### source

> **source**: `string`

The string as it was passed in. `saveMarkdownText` returns it as it is while the text is unedited.

***

### text

> **text**: `string`

The text to edit: without a leading BOM, every line ending turned into `\n`.
