# Changelog

What changed in each release, newest first. Download the latest from the [home page](/#download).

## 0.15.2

### What's new

**Editor**

- Each tab keeps its own undo history, folds and selection. Switching tabs and back no longer loses them.
- A file you reopen comes back where you left it.
- Drag an image's bottom-right corner to resize it. Letting go writes the width into the file (`|W`), and one undo puts it back. 
- Images without a size now scale with the editor zoom.

**Menu bar**

- When an agent in a terminal finishes or replies while you are in another app, the icon gets an orange dot and the menu lists the session at the top. Clicking it takes you there.
- New submenus: Terminals (sessions grouped by home) and Homes (open a home, or one of its recent files).
- New Note from Clipboard (macOS) starts a note with the copied text.
- On macOS the icon is a plain `#M` that follows light and dark menu bars.

## 0.15.1

### What's new

**Editor**

- Spell checking for English on macOS
	- turn it on in Settings → Appearance.
    - Misspelled words get a dotted red underline; right-click one for up to five corrections.
    - Code, links, formulas and frontmatter are left alone.
- Images inside table cells now show as images, sizes included (write `![alt\|120](image.png)` inside a table).
- `![alt|300](image.png)` shows the image 300 wide, and `|300x200` sets both sides. A width larger than the picture enlarges it; nothing gets wider than the text column.

**Workspace**

- The file tree follows the disk: files created, renamed or deleted elsewhere show up without a refresh.
- Opening the terminal panel (macOS and Linux) starts a shell straight away. Closing its last tab closes the panel.

## 0.15.0

### What's new

**Terminal**

- The right side panel now has a terminal (macOS and Linux). `+` opens a shell, and agents started from the intercom run in their own tab.
- Each session gets an animal name drawn at random, never shared by two open sessions.
- An agent's tab shows its icon: an orange arc while it works, a blink while it starts, grey once it exits.
- After a restart, the terminal offers to reopen the agent that was last there.

**Homes**

- Every file opens in its home: the nearest opened folder, else the nearest `.git` folder, else its own folder. 
- Closing the last tab leaves the home's empty page, and typing there creates the note.

**Editor**

- Frontmatter shows as editable properties: one row per property, edited in place, the rest of the YAML left untouched.
- Skill mode is sunset.
- Table cells are edited in place with live preview, and the arrow keys move between cells.
- Folding a list item folds its whole subtree.

## 0.14.0

### What's new

- **agent co-edit sidecar**
    - right side panel to launch/monitor/chat with terminal agent (connected over MCP)
    - the conversation clears on quit
    - `/openmarkdown:listen` starts an agent listening on a workspace (plugin 0.6.0).

- **workspaces**
    - support for multiple folders/workspace 
    - left side panel update: a dropdown at the top of the sidebar and a collapsible rail

- **Look and layout**
    - unified icon sizes, buttons and menus
    - Settings is regrouped into five groups, with rows measured against one ruler.

### Minors

- The `openmd` sidecar now reads JSON-RPC notifications, so a cancelled agent stops leaving a ghost listener behind.

## 0.13.11

### What's new

#### Formatless copy
- Cmd/Ctrl+Shift+C copies the selection as rendered plain text, in any editor mode.
- Right-clicking a selection in the editor offers "Copy as plain text" and "Copy as Markdown source"; both are in the command palette under the same names.
- 0.13.9 reading mode copying is reverted.

### Minors

- Selected text stays readable in dark mode. Since dark mode shipped it was drawn dark-on-dark and effectively vanished.
