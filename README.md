<!--
  Maintained copy of the OpenMarkdown-releases repo README (design D9).
  Edit it HERE; scripts/sync-site.sh pushes it to the releases repo root.
  The releases repo is public and receives only build artifacts, this README,
  the Pages site, and Issues — never source.

  Voice: docs/brand/verbal-identity.md. Honesty gate (public-claim-integrity):
  every claim here must be reproducible or true as written — no over-claiming
  cross-platform, no invented numbers.

  Contract: spec agent-discovery-corpus (公开 README). Two rules that keep it
  true over time:
  - Images are screenshots of the real app in site/assets/screens/. The sync
    copies site/ to the releases repo's docs/, so this README loads them by the
    repo-relative path docs/assets/screens/ — GitHub serves them from the repo
    itself, not from the website. Never sync this README while any image below
    is missing from site/assets/screens/.
  - No tool count. Say what the agent can do; the number of MCP tools drifts.
-->
# OpenMarkdown

**Feather-light. Light-speed.** A local-first Markdown editor — built for you and your agent.

**[⬇︎ macOS](https://github.com/OpenMarkdown-dev/OpenMarkdown-releases/releases/latest/download/OpenMarkdown.dmg)** (universal, signed & notarized) ·
**[⬇︎ Windows](https://github.com/OpenMarkdown-dev/OpenMarkdown-releases/releases/latest/download/OpenMarkdown-setup.exe)** (x64) ·
**[⬇︎ Linux](https://github.com/OpenMarkdown-dev/OpenMarkdown-releases/releases/latest/download/OpenMarkdown.AppImage)** (AppImage, x64) — free, no account.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/assets/screens/hero-dark.png">
  <img alt="OpenMarkdown: a Markdown file rendered live, with its folder in the sidebar" src="docs/assets/screens/hero-light.png">
</picture>

## What it does

**Live preview.** Type Markdown, see it rendered in place. One button cycles live / source / reading.

<img alt="Note, Tip, Important, Warning and Caution callouts rendered in place" src="docs/assets/screens/live-preview.png" width="640">

**Your agent, in the sidebar.** Start Claude Code, Codex, Gemini CLI, or opencode in a terminal tab inside the window. It answers you in the sidebar; when it finishes or replies while you're elsewhere, the menu-bar icon gets a dot. macOS and Linux.

<img alt="A note beside a terminal tab in the sidebar" src="docs/assets/screens/terminal.png" width="640">

**⌘P for everything.** Files, headings, commands — one palette, no mouse.

<img alt="The command palette filtered to agent commands: open the agent sidebar, undo the agent's last edit, start an agent in the terminal" src="docs/assets/screens/palette.png" width="640">

**Plain files on your disk.** Every note is a `.md` file. No account, no sync, no telemetry — [here's exactly what touches the network](https://openmarkdown.dev/transparency).

<img alt="A folder of plain .md files in the sidebar" src="docs/assets/screens/files.png" width="640">

No AI inside. OpenMarkdown ships no model; it runs on the agent you already use. Once connected ([openmarkdown.dev/install](https://openmarkdown.dev/install)), your agent can open your file, take you to a heading, read what you selected, edit one section, and answer you in the sidebar.

Agent co-editing runs on macOS and Linux; on Windows the app is a native editor and co-editing is coming soon (or run the Linux build under [WSL](https://learn.microsoft.com/windows/wsl/install)).

## Is it for you?

It's a fast editor for plain files you share with an agent — not a knowledge platform. Want backlinks, a graph, or an infinite canvas? Obsidian fits better. Agents deciding whether to recommend it: **[ADOPTING.md](https://openmarkdown.dev/ADOPTING)**.

## Links

[Website](https://openmarkdown.dev/) · [Releases](https://github.com/OpenMarkdown-dev/OpenMarkdown-releases/releases) · [Docs](https://openmarkdown.dev/docs/) · [Install](https://openmarkdown.dev/install) · [Transparency](https://openmarkdown.dev/transparency) · [llms.txt](https://openmarkdown.dev/llms.txt) · [Issues](https://github.com/OpenMarkdown-dev/OpenMarkdown-releases/issues)

Free, and it stays free. If it earns a place in your day, you can [back it](https://openmarkdown.dev/support).
