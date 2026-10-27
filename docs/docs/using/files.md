# Files, workspaces and Homes

OpenMarkdown has no library and no database. It opens the files and folders you already have, and saves straight back to them.

## Opening

- **A file:** double-click it (once OpenMarkdown is your [default app for .md](/docs/using/settings/#system-integration)), press <kbd>⌘O</kbd>, or run `openmd notes.md`.
- **A folder:** press <kbd>⇧⌘O</kbd> (**Open Folder…**) or run `openmd .`. Its files appear in the sidebar.
- **Anything by name:** <kbd>⌘P</kbd>, then type part of the name, or paste a full path. See [Command palette](/docs/using/command-palette/).

Files save as you type. Changes made on disk by other programs (your agent, `git pull`) show up in the open note.

## Homes

Every file belongs to one **Home**, a folder OpenMarkdown works out from where the file lives. It picks the nearest of:

1. a folder you opened;
2. a folder that is a git repository;
3. the file's own folder.

The window shows one Home at a time: its tabs, its sidebar, its terminals. The **Homes** panel lists them so you can switch with one click. Each Home remembers its own tabs and where you were in each file.

Folders you opened and git repositories stay in the list until you remove them. A Home that is only a file's folder drops off by itself once nothing in it is open.

## The scratch folder

New notes that don't belong anywhere yet go to the scratch folder, `~/OpenMarkdown` unless you choose another in **Settings → Files → Scratch folder**. It is the default Home.

- <kbd>⌘T</kbd> starts a new note there, named with today's date (`2026-10-26.md`).
- **Open daily note** in the command palette opens today's note, or creates it.

## In the sidebar

Right-click in the file tree for **New note**, **New folder**, **Rename** and **Delete**. Delete moves the file to the system Trash. Renaming a folder keeps its open tabs open.

## Tabs

Each tab remembers its mode, scroll position, cursor and undo history. <kbd>⇧⌘T</kbd> reopens the last tab you closed; <kbd>⌘1</kbd>–<kbd>⌘9</kbd> jump to a tab.
