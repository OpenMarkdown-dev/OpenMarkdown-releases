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

macOS and Linux. On Windows the row is there and says agent co-editing is coming.

| Setting | What it does |
| --- | --- |
| Default agent | The agent listed first in the intercom, marked **Last used**. Follows whichever you started last, until you pick one. If no agent is found it is greyed out and points you to [Connect your agent](/docs/start/connect/). |

## System integration

| Setting | What it does |
| --- | --- |
| Stay in menu bar | Keeps OpenMarkdown running in the menu bar (the system tray on Linux and Windows) after you close the window, so files reopen instantly. |
| Command-line tool (openmd) | Puts `openmd` on your PATH, for agents and scripts in your own terminal. macOS and Linux. |
| Write agents' long prompts in OpenMarkdown (⌃G) | Makes Claude Code's and Codex's <kbd>⌃G</kbd> open the prompt in OpenMarkdown. It writes into each agent's own config (`~/.claude/settings.json`, `~/.codex/.env`), not your shell, so `git commit` keeps its editor. An editor you set yourself is left alone. See [`$EDITOR` handoff](/docs/agent/editor-handoff/). macOS and Linux. |
| Editor for every terminal tool | Adds `VISUAL` (and `EDITOR`, unless you set your own) pointing at `openmd --wait` to your shell's startup file, in a marked block it can remove again. Every tool in a new terminal that asks for an editor then opens OpenMarkdown — `git commit` included. It never overwrites a `VISUAL` you set yourself. Needs the command-line tool. macOS and Linux. |
| Default app for .md | Makes OpenMarkdown open `.md` files when you double-click them. Turning it off hands them back to the app before. macOS only. |

## Help & about

Keyboard shortcuts, Open Welcome guide, and Send feedback.
