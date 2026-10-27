# Command palette

Press <kbd>⌘P</kbd>. One box does three things, picked by the first character you type:

| Type | To |
| --- | --- |
| a name, or a path | open a file |
| `@` | jump to a heading in this note |
| `>` | run a command |

<kbd>⇧⌘P</kbd> opens it straight on commands. The chips under the box show which mode you are in; <kbd>←</kbd> and <kbd>→</kbd> switch between them.

## Files

Matching is fuzzy: `lpl` finds `launch-plan.md`. With nothing typed, the list shows the files you opened most recently. Paste a full path to open any file on your disk.

No match? <kbd>⇧↩</kbd> creates a note with the name you typed.

## Headings

`@` lists the headings of the open note. Pick one to scroll to it.

## Commands

`>` lists everything the app can do, with its shortcut where it has one. A command that can't run right now is greyed out, with the reason. Some to try:

- **Open daily note**
- **Insert Callout: Note**
- **Copy file path**
- **Theme: dark**
- **Open Welcome guide**

Your agent can run the same commands with the [`execute_command`](/docs/reference/mcp-tools/#execute_command) tool.
