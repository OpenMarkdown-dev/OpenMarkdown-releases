# How we compared editors

**Question:** if you open a Markdown file in an embeddable editor and save it, do you get your file
back?

**Run on 2026-11-04.** One test file (56 lines, 22 tracked features) went through six editors' npm
packages in headless Chromium, and we diffed what each one would save. The results include ones
that are bad for us; they are listed under [where OpenMarkdown did not win](#where-openmarkdown-did-not-win).

## The editors

| Editor | Package and version | Model | Configuration |
| --- | --- | --- | --- |
| OpenMarkdown | `@openmarkdown-dev/editor`, from source before its first npm release | CodeMirror 6, the source is the document | live-preview mode, no host |
| Atomic Editor | `@atomic-editor/editor` 0.6.2 | CodeMirror 6, the source is the document | defaults |
| Milkdown Crepe | `@milkdown/crepe` 7.22.3 | ProseMirror tree, serialized with remark | Crepe defaults (all features on) |
| MDXEditor | `@mdxeditor/editor` 4.3.3 | Lexical tree, serialized with mdast | headings, lists, quote, thematic break, link, link dialog, table, frontmatter, code block, image, Markdown shortcuts |
| Toast UI Editor | `@toast-ui/editor` 3.2.2 | ProseMirror tree, serialized with ToastMark | WYSIWYG mode, defaults otherwise |
| Tiptap | `@tiptap/core` + `@tiptap/markdown` 3.32.0 | ProseMirror tree, serialized with marked | StarterKit + TableKit + Markdown |

Every package was pinned to the newest release published at least two weeks before the run. All
six ran from npm in one Vite project, one page per editor, each loaded with its own Markdown import
and read back with its own export (`getDoc()` for OpenMarkdown, `getMarkdown()` for the others).
No public demo page was used.

## The tests

1. **Open → save.** Load the file, wait two seconds, then export with no input at all.
2. **One-word edit.** Double-click the word `quick` in a paragraph with a real mouse gesture, type
   `slow`, and export. The expected output is the file with only that word replaced.
3. **One table cell.** Click at the end of the cell `22`, press Backspace twice, type `23`, click
   into a paragraph to leave the table, and export.

**How a feature is scored.** Each of the 22 features is a verbatim snippet of the test file. A
feature counts as "changed" when that exact snippet is missing from the export. Each change was then
classified by reading the diff:

- **rewritten**: the meaning is the same and the syntax is different;
- **lost**: a GFM/CommonMark reader (or GitHub, for frontmatter and callouts) sees something
  different when the saved file is reopened.

## Results

| Editor | Open → save, no edit | Change one word → save | Then edit one table cell |
| --- | --- | --- | --- |
| **OpenMarkdown** | byte-identical; 0 of 22 features changed | only the word changed | the whole table re-aligned (4 lines); alignment colons and `\|` kept |
| **Atomic Editor** | byte-identical; 0 of 22 | only the word changed | 2 lines changed; the delimiter row became `\| --- \| --- \| --- \|`, so column alignment is lost |
| Milkdown Crepe | 13 of 22 changed (2 lost, 11 rewritten); 30 diff lines | the same 30 lines plus the word | only the cell changed, in its already-rewritten table |
| MDXEditor | refused the file: a reference link stopped its parser, and the edit never reached its export | edit lost | n/a |
| MDXEditor, file without reference links | 13 of 19 changed (4 lost, 9 rewritten); 34 diff lines | the same plus the word | only the cell changed |
| Toast UI Editor | 15 of 22 changed (8 lost, 7 rewritten); 40 diff lines | the same plus the word | only the cell changed |
| Tiptap | 17 of 22 changed (3 lost, 14 rewritten); 41 diff lines | the same plus the word | only the cell changed |

"Diff lines" counts the `+` and `-` lines of `diff -u`. For each tree-based editor, the one-word
output is its open → save output with one word changed: a one-word edit saves the same 30 to 41
changed lines that opening the file already caused.

## Example diff

Milkdown, open then save with no edit. The YAML frontmatter comes back as a horizontal rule and a
heading:

```diff
----
+***
+
 title: Round-trip corpus
-tags: [a,b ,  c]
----
+tags: \[a,b ,  c]
+-----------------
```

## Feature by feature (open → save)

`kept` means the bytes are identical.

| Feature (source) | OpenMarkdown | Atomic | Milkdown | MDXEditor¹ | Toast UI | Tiptap |
| --- | --- | --- | --- | --- | --- | --- |
| frontmatter `---`…`---` | kept | kept | lost: `***` + paragraph + setext h2 | kept | lost | lost: `---` + `## title: …` |
| `*stars*` | kept | kept | kept | kept | kept | kept |
| `_underscores_` | kept | kept | kept | rewritten `*…*` | rewritten `*…*` | rewritten `*…*` |
| `__underscores__` | kept | kept | kept | rewritten `**…**` | rewritten `**…**` | rewritten `**…**` |
| setext h1 (`====`) | kept | kept | rewritten `# …` | rewritten `# …` | rewritten, underline shortened | rewritten `# …` |
| setext h2 (`----`) | kept | kept | rewritten `## …` | rewritten `## …` | rewritten `---` | rewritten `## …` |
| table delimiter row | kept | kept | rewritten (padded) | rewritten (padded) | rewritten | rewritten (padded) |
| table row with `` `a\|b` `` and `\|` | kept | kept | rewritten (padding; escapes kept) | rewritten (padding) | lost: the bare pipe splits the cell on reopen | rewritten (padding) |
| unpadded table row | kept | kept | rewritten | rewritten | rewritten | rewritten |
| `[the spec][spec]` | kept | kept | rewritten inline | refused | lost: never parsed as a link | rewritten inline |
| `[Collapsed][]` | kept | kept | rewritten inline | refused | lost | rewritten inline |
| link reference definitions | kept | kept | rewritten (deleted, inlined) | refused | lost | rewritten (deleted, inlined) |
| `+` list marker | kept | kept | rewritten `*` | rewritten `*` | rewritten `*` | rewritten `-` |
| `*` list marker | kept | kept | rewritten `-` | kept | kept | rewritten `-` |
| two adjacent lists stay two | kept | kept | kept | lost: merged into one list | lost: one list on reopen | lost: one list on reopen |
| ordered list starting at `3.` | kept | kept | kept | lost: renumbered `1.` | kept | kept |
| backslash hard break `\` | kept | kept | kept | lost: soft break | lost: lines glued | rewritten as two trailing spaces |
| trailing spaces (a hard break) | kept | kept | rewritten `\` | lost: soft break | lost: lines glued | rewritten (2 spaces) |
| HTML block `<div align="center">` | kept | kept | kept | kept | lost: glued into the previous paragraph | lost: `**HTML block**` |
| inline math `$E = mc^2$` | kept | kept | kept | rewritten `$E \= mc^2$` | kept | kept |
| callout `> [!NOTE]` | kept | kept | lost: `> \[!NOTE]` | lost: `> \[!NOTE]` | kept | lost: `> \[!NOTE\]` |
| CJK paragraph | kept | kept | kept | kept | kept | kept |
| `\*not emphasis\*` | kept | kept | kept | kept | kept | kept |
| final newline | kept | kept | kept | dropped | dropped | dropped |

¹ MDXEditor values are from the run without the reference-link section. With the full file, it
reports a parse error on the reference link and renders nothing after it.

## Caveats

- **Atomic Editor ties with us.** It is also built on CodeMirror and edits the text itself. The
  split here is editing the text against editing a tree, not us against everyone.
- **Table edits:** editing one cell in OpenMarkdown re-aligns that whole table (4 lines in this
  file). Atomic changes 2 lines there, but drops the column alignment.
- **The test file is ours.** It uses valid but less common syntax on purpose: setext headings, `+`
  lists, reference links. A file written in one canonical style (ATX headings, `-` lists, `**`,
  padded tables) loses much less in a tree editor. A fair summary is "tree editors normalize your
  style and lose some constructs", not "they corrupt everything".
- **Configuration matters.** Each tree-based editor can be extended with more plugins; some
  community plugins (frontmatter, for example) could fix some rows. Rewriting `_` / `__`, setext
  headings, list markers and table padding is a property of serializing a tree, not a missing
  plugin.
- **"Lost"** means a Markdown reader sees something different when the saved file is reopened;
  **"changed"** includes harmless rewrites like `_a_` to `*a*`.
- **One run per editor, in headless Chromium.** Results were identical across every run made while
  building the test (six full runs).
- **Single gestures.** The edit tests do not cover typing-heavy sessions, paste, undo or IME input.
- **The editor alone.** OpenMarkdown was run from its source before the first npm release. The
  app's disk layer (BOM, CRLF) is not involved for this LF, BOM-less file; the editor's own
  fidelity tests cover it separately.

## Where OpenMarkdown did not win

- **The tie with Atomic Editor** on open → save and on a prose edit. Do not read these results as
  "the one editor that keeps your file".
- **Table edits** rewrite more bytes than Atomic's (4 lines against 2), by design.
- **`\|` inside inline code in a table** displays as `a\|b` in OpenMarkdown. GFM reads that cell as
  `a|b`, and Milkdown, MDXEditor and Toast UI display it that way. The bytes are kept, but the
  display is wrong.
- **Double-click inside a table cell** first opens the cell editor and places the caret, where the
  other editors select the word. The table test uses click and Backspace for each editor, so the
  numbers above are not affected, but a user would notice it.

The round-trip test file and the test that runs it are in the editor's repository
(`fixtures/roundtrip/`, `src/editor/roundtripCheck.gate.test.ts`). The comparison harness and its
per-feature results are not public yet.
