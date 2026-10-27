# Editor and live preview

OpenMarkdown edits the Markdown itself. What you see is rendered, and the file on disk is exactly the text you typed.

## Three modes

The button at the top of the window cycles through three modes. Each tab remembers its own.

| Mode | What you see | Editing |
| --- | --- | --- |
| **Live preview** (default) | Rendered. The line your cursor is on shows its Markdown, so you can edit it. | Yes |
| **Source** | Every marker visible, all text one size, with colour for headings, links and code. Good for commit messages and prompts. | Yes |
| **Reading** | The clean rendered page, no cursor. | Only task checkboxes |

Switching is instant and keeps your place.

## Formatting

Type Markdown, or use the keys: <kbd>⌘B</kbd> bold, <kbd>⌘I</kbd> italic, <kbd>⇧⌘X</kbd> strikethrough, <kbd>⌘E</kbd> inline code, <kbd>⌘K</kbd> link. Pressing one again on formatted text removes it. All shortcuts: [Keyboard shortcuts](/docs/reference/shortcuts/).

## Blocks

Tables, callouts, code blocks, math and frontmatter render as blocks. The arrow keys move into and out of them like any other line.

- **Tables:** click a cell to edit it; arrow keys move between cells. Wide tables scroll sideways.
- **Callouts:** insert one from the command palette (**Insert Callout: Note**, **Tip**, **Important**, **Warning**, **Caution**). Its text stays editable in place.
- **Code blocks:** typing <code>```</code> closes the fence for you. A copy button sits on each block.
- **Frontmatter:** YAML at the top of a file shows as a Properties block.

If a block cannot render, it shows its source instead, so nothing you wrote disappears.

## Lists and headings

<kbd>Tab</kbd> and <kbd>⇧Tab</kbd> (or <kbd>⌘]</kbd> and <kbd>⌘[</kbd>) indent and outdent a list item, and numbered lists renumber themselves. <kbd>↩</kbd> on an empty item steps out a level, then out of the list.

Headings and lists fold. Point at a heading and click the arrow that appears to its left; a folded heading keeps its arrow so you can open it again. Folding only changes the view, never the file.

## Links

Drag a file from the sidebar into a note to insert a relative link to it. While typing a link, OpenMarkdown suggests files in the workspace and headings in the note.

## Copying

Two ways to copy a selection, in any mode:

- **Copy as plain text** (<kbd>⇧⌘C</kbd>): what you see, without the Markdown markers.
- **Copy as Markdown source**: the exact text in the file. In the command palette.

## What renders

The full list, and the few places OpenMarkdown's Markdown differs from GitHub's: [Markdown dialect](/docs/reference/markdown/).
