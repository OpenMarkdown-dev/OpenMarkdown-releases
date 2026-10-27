# Privacy and transparency

The full account, kept up to date with each release, is on [openmarkdown.dev/transparency](/transparency). In short:

## Your files stay yours

Plain `.md` files in folders you choose. No database, no proprietary format, no account. Pasted images go to an `attachments/` folder next to the note.

## Network

No telemetry, and no AI inside to send your text anywhere. The app makes two kinds of request:

- **An update check** when it starts, to the GitHub releases page where OpenMarkdown is published.
- **Feedback you send**, only when you write it and press Send, containing exactly what is on screen.

Your agent is a separate program you run. What it sends to its own provider is between you and that provider; OpenMarkdown's MCP server itself makes no network requests.

## Changes to your system

Each is off until you turn it on in Settings, and turning it off undoes exactly what it did:

- **Command-line tool:** a link to the `openmd` inside the app, in `/usr/local/bin` or `~/.local/bin`.
- **$VISUAL editor:** one marked block in your shell's startup file.
- **Default app for `.md`:** registers OpenMarkdown with macOS, remembering the app before it so it can hand back.

## This site

Page views are counted without cookies or personal data, only on the live site. Opened from a file, these pages make no requests at all.
