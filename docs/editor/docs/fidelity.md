# Fidelity

Lossless round-trip: open a Markdown file and save it without editing, and the file is byte-for-byte what it was.

Most rich Markdown editors parse your file into a tree and write a new file out of that tree when
you save. That new file says the same thing in the editor's own style: your `_emphasis_` comes
back as `*emphasis*`, your `+` list as `-`, your setext heading as `#`, and some constructs, such
as frontmatter or callouts, can come back as something else.

This editor edits the text itself. What you typed changes, and the rest of the file stays as you
wrote it.

## The claim

This is the whole claim. Every sentence is backed by a test:

> OpenMarkdown edits your Markdown source text directly; it never rebuilds the file from a document tree. Open and save without editing, and the file is byte-for-byte what it was: line endings (LF / CRLF), BOM, final newline, whitespace, tabs, escapes and Unicode spelling untouched. When you edit, only what you touched changes, with a few exceptions, each pinned by a test: editing a cell of an aligned table re-pads that cell when you leave it, and widens that one column when the new text no longer fits; table commands change only the rows or column they act on, in the table's own style; indenting a list item or pressing Enter in a numbered list renumbers the affected items; Enter in a list item drops trailing spaces before the cursor; a file with mixed line endings gets uniform ones once you edit it; typing on a lone blank line between two blocks adds a line break after that line, so the block below stays separate.

The claim is about the file, so it holds when your host reads and writes the file with
`openMarkdownFile` and `saveMarkdownFile`. The editor keeps the document as a string in `\n` with
no BOM; these two keep what the string does not carry:

```ts
import { createEditorState, mountEditor, openMarkdownFile, saveMarkdownFile } from "@openmarkdown-dev/editor";

const file = openMarkdownFile(bytes); // the file as read, a Uint8Array
const editor = mountEditor(document.getElementById("editor")!, createEditorState({ doc: file.text }));

const out = saveMarkdownFile(editor.getDoc(), file); // the bytes to write
```

- **Strict UTF-8.** Bytes that are not valid UTF-8 throw `InvalidUtf8Error` (its `code` is
  `"INVALID_UTF8"`). Refuse to open the file: a lenient decode would replace the bad bytes with
  U+FFFD, and the next save would write that damage to disk.
- **Unedited, the original bytes.** While `editor.getDoc()` equals `file.text`, `saveMarkdownFile`
  returns `file.bytes`: BOM, line endings (LF, CRLF, lone CR, or a mix of them), a missing final
  newline and Unicode spelling exactly as they were.
- **Edited, the file's conventions.** The BOM is written back if there was one, and every line
  break is written as the file's dominant ending (`file.ending`: the most frequent one; on a tie,
  the one that comes first). A file with mixed line endings gets uniform ones once you edit it.

A host that does its own decoding has to keep the same three rules for the claim to hold. The
OpenMarkdown app keeps them in its own (Rust) file layer. The
[save-load example](/editor/examples/) uses the two functions.

## Check it yourself

Run any Markdown file of yours through the package: open it, put it in an editor state, and save
it without editing. Save this as `roundtrip.mjs` and run `node roundtrip.mjs notes.md`:

```js roundtrip-check
import { readFileSync } from "node:fs";
import { createEditorState, openMarkdownFile, saveMarkdownFile } from "@openmarkdown-dev/editor";

const bytes = readFileSync(process.argv[2]);
const file = openMarkdownFile(bytes);
const state = createEditorState({ doc: file.text }); // in the editor, no edits
const saved = saveMarkdownFile(state.doc.toString(), file);

console.log(Buffer.compare(bytes, saved) === 0 ? "byte-identical" : "changed");
```

For a UTF-8 file it prints `byte-identical` (other bytes throw `InvalidUtf8Error`, see above).
The editor's own test suite runs this exact script on every test run
(`src/editor/roundtripCheck.gate.test.ts` in the editor's repository), over a test file of valid
but unusual Markdown (`fixtures/roundtrip/`: setext headings, `+` lists, reference links, odd
YAML, unaligned tables, NFD Unicode, trailing spaces, tabs) and its CRLF, BOM, mixed line ending,
lone CR and final newline variants.

In a browser, the [live demo](/editor/demo/) shows the same thing: its
developer panel says `0 bytes changed` until you type.

## What the exceptions look like

Edit one cell of a table and leave it, and only that cell's line changes. A table written
compact stays compact, and so does a hand-compacted row in an aligned table. In an aligned table
the cell gets its column's padding back, and if the new text no longer fits, that one column is
widened: its other aligned cells get more padding, and the delimiter row gets more dashes, its
colons kept. Changing `10` to `1000000` in this table:

```diff
-| Plan    | Users | Price    |
-|:--------|:-----:|---------:|
-| Free    |   1   |       $0 |
-| Team    |  10   |      $29 |
+| Plan    | Users   | Price    |
+|:--------|:-------:|---------:|
+| Free    |    1    |       $0 |
+| Team    | 1000000 |      $29 |
```

Changing it to `12` changes the `Team` line only. Clicking into a cell and leaving without a
change writes nothing. Table commands (insert, delete or move a row or column, toggle a column's
alignment) change the rows or the column they act on, in the table's own style. Format table is
the one command that re-aligns a whole table. Nothing else in the file moves.

## Compared with other editors

We opened the same 56-line Markdown file in six embeddable editors (their npm packages, in
headless Chromium), saved it without editing, then changed one word and saved again:

| Editor | Open → save, no edit | Change one word → save |
| --- | --- | --- |
| **@openmarkdown-dev/editor** (CodeMirror 6) | byte-identical | only that word changed |
| **Atomic Editor** (CodeMirror 6) | byte-identical | only that word changed |
| Milkdown Crepe (ProseMirror) | 13 of 22 tracked features changed | the same 30 changed lines, plus the word |
| Toast UI Editor (ProseMirror) | 15 of 22 changed | the same changes, plus the word |
| Tiptap + `@tiptap/markdown` (ProseMirror) | 17 of 22 changed | the same changes, plus the word |
| MDXEditor (Lexical) | refused the file (reference links); 13 of 19 changed without them | the edit was lost on the full file |

Atomic Editor ties with us here, because it is built the same way: the source is the document.
The difference is with editors that rebuild Markdown from a tree. When we edited one table cell
(in 0.1.3, before cell edits stopped re-aligning tables), both CodeMirror editors re-aligned that table. Ours kept the column alignment. Atomic's rewrote
the delimiter row to `| --- |` and lost it.

The method, an example diff, the run date and the caveats are on [the method page](/editor/docs/fidelity/method/).
