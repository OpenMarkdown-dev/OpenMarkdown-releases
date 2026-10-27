# Co-edit

You and your agent work in the same file at the same time. You type, tick boxes and leave notes; it reads them and writes its part. The file on disk is the one record of what both of you did.

## How your agent edits

Through the MCP tools, your agent edits **one section at a time**: it reads a section with `read_section`, then adds to it or replaces it with `write_section`. The rest of the note is left alone, including whatever you are typing elsewhere. Its edits go straight into the open note, not around it.

If you change a section while the agent is rewriting it, its write is refused and it has to read your version first. Your typing is never overwritten.

Agents that write to the file directly (not through the tools) work too: OpenMarkdown picks up changes on disk and merges them with any edits of yours that are not saved yet. If the two touch the same lines, the version on disk is shown and a note tells you that <kbd>⌘Z</kbd> brings your typing back.

## Watching for your edits

Ask your agent to watch a note (in Claude Code: `/openmarkdown:co-edit notes.md`). It then waits for the file to change, reads what you did, acts, and waits again. While it watches, the note's tab shows it, in orange.

A pattern that works well: leave instructions in the note itself.

```markdown
- [ ] @agent tighten this paragraph
- [x] Pick the launch date
```

Tick a box or write an `@agent` line; once you stop typing, the watching agent picks it up.

## Seeing what it did

When the agent finishes a batch of edits to the note you have open, a small sign lists the sections it touched, with a jump to each. The section it is working in glows briefly as it writes.

## Undoing it

**Undo agent's last edit** (command palette) takes back the agent's most recent round of edits, and only those: what you typed since stays. Run it again to go further back. <kbd>⌘Z</kbd> undoes your own typing and never the agent's.
