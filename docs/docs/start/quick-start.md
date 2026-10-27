# Quick start

Five steps, about five minutes. You need OpenMarkdown [installed](/docs/start/install/). Steps 3–5 need an agent such as Claude Code, on macOS or Linux.

## 1. Open a folder

Press <kbd>⇧⌘O</kbd> (**Open Folder…**) and pick any folder with Markdown in it, or an empty one. It opens as a workspace: its files in the sidebar, nothing copied or imported. To open one file instead, double-click it, or run `openmd notes.md`.

## 2. Write

Create a note from the sidebar (**New note**) and type:

```markdown
# Launch plan

## Checklist

- [ ] Pick the launch date
- [ ] Draft the announcement
```

Each line renders once your cursor moves off it, and the boxes are clickable. The file on disk is exactly what you typed.

## 3. Connect your agent

Follow [Connect your agent](/docs/start/connect/) for yours. For Claude Code it is two commands; for other agents, one.

## 4. Start it in the sidebar

Press <kbd>⇧⌘A</kbd> to open the agent sidebar, then **Start Claude Code** (or whichever agent you connected). It starts in a terminal tab inside OpenMarkdown, in this workspace's folder.

## 5. Ask it something about your note

Select the checklist, then type in the intercom:

```text
add two more items to this checklist
```

The agent reads your selection, writes the new items into that section, and leaves the rest of the note alone. You see them appear in the note; its short reply shows in the intercom.

## Where to go next

- [Co-edit](/docs/agent/co-edit/): you tick a box, your agent picks it up and carries on.
- [`$EDITOR` handoff](/docs/agent/editor-handoff/): your agent's CLI hands you a document, you edit it here, it reads your changes back.
- [MCP tools](/docs/reference/mcp-tools/): everything your agent can do in OpenMarkdown.
