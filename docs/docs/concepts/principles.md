# Design principles

## The file is the shared whiteboard

You and your agent need one place you both can see and change. OpenMarkdown makes that place a plain `.md` file. The agent's memory, your notes, a plan you are working out together: all of it is in the file, where either of you can read it later, and where git can track it.

The app renders the file and gets out of the way. Close it and nothing is lost, because nothing lived in the app.

## Bring your own agent

OpenMarkdown ships no model, no chat and no "ask AI" button. You already have an agent you like; OpenMarkdown gives it a way to put a note in front of you, see what you are looking at, and edit exactly one section. When a better agent comes out, you switch agents, not editors.

## Your files, not a library

No database, no import, no account. OpenMarkdown opens folders you already have and writes back to the same files. Uninstall it and every note opens unchanged in any other editor. Where its Markdown differs from GitHub's, the difference is written down: [Markdown dialect](/docs/reference/markdown/).

## Never lose a keystroke

An agent edits one section and never the whole file. If you and it touch the same section, its write is refused rather than yours. Changes made on disk while you type are merged. When something can't render, its source shows. Anything else would make it unsafe to let an agent near your notes.

## Fast

The editor opens instantly and stays out of your way. Speed is what lets you and your agent stay on the same page: you see each change as it lands, not after a reload.

## Honest

The app does what its documentation says, on the platforms it says. What it sends over the network is listed in full on [Privacy and transparency](/docs/concepts/privacy/).
