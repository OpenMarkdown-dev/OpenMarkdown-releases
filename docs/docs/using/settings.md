# Settings

Open Settings with the gear in the window's top bar. Changes apply as you make them; there is no Save button. On Windows, the settings for agents and the command line are not shown.

## Appearance

| Setting | What it does |
| --- | --- |
| Appearance | Follow system, Light or Dark. |
| Language | The interface language. Takes effect after a relaunch. |
| Margin outline | A faint outline of the note in the left margin. Hides when the window is narrow. |
| Check spelling | A dotted red line under misspelled words; right-click for suggestions. macOS only. |

## Files

| Setting | What it does |
| --- | --- |
| Scratch folder | Where new notes go when they don't belong to a folder you opened. Default `~/OpenMarkdown`. |

## Agent

macOS and Linux.

| Setting | What it does |
| --- | --- |
| Default agent | The agent listed first in the intercom, marked **Last used**. Follows whichever you started last, until you pick one. |

## System integration

| Setting | What it does |
| --- | --- |
| Warm start | Keeps OpenMarkdown running in the menu bar (the system tray on Linux and Windows) after you close the window, so files reopen instantly. |
| Show in menu bar only | No Dock icon once the window is closed. macOS only. |
| Command-line tool (openmd) | Puts `openmd` on your PATH, for agents and scripts in your own terminal. macOS and Linux. |
| $VISUAL editor | Adds `export VISUAL="openmd --wait --source claude"` to your shell's startup file, in a marked block it can remove again. New terminals then open OpenMarkdown when a tool asks for an editor (Claude Code's <kbd>⌃G</kbd>, for one). It never overwrites a `VISUAL` you set yourself. See [`$EDITOR` handoff](/docs/agent/editor-handoff/). macOS and Linux. |
| Default app for .md | Makes OpenMarkdown open `.md` files when you double-click them. Turning it off hands them back to the app before. macOS only. |
| Connect your agent | The sentence and commands from [Connect your agent](/docs/start/connect/), ready to copy. macOS and Linux. |

## Help & about

Keyboard shortcuts, Open Welcome guide, and Send feedback.
