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
<p align="center">
  <img src="docs/assets/06-appicon-ink.svg" width="112" height="112" alt="OpenMarkdown app icon: a bold M beside a hash sign, in a rounded square" />
</p>

<h1 align="center">OpenMarkdown</h1>

<p align="center">
  <b>Feather-light. Light-speed.</b><br>
  A local-first Markdown editor — built for you and your agent.<br>
  Live preview, your agent in the sidebar, one palette for everything, plain <code>.md</code> files on your disk.<br>
  <a href="https://openmarkdown.dev/">openmarkdown.dev</a>
</p>

<p align="center">
  <a href="https://github.com/OpenMarkdown-dev/OpenMarkdown-releases/releases/latest"><img src="https://img.shields.io/github/v/release/OpenMarkdown-dev/OpenMarkdown-releases?label=release&color=111" alt="Latest release" /></a>
  <img src="https://img.shields.io/badge/platforms-macOS%20·%20Windows%20·%20Linux-555" alt="macOS, Windows and Linux" />
  <img src="https://img.shields.io/badge/price-free%20·%20no%20account-3fb950" alt="Free, no account" />
  <a href="https://openmarkdown.dev/transparency"><img src="https://img.shields.io/badge/telemetry-none-5b5bd6" alt="No telemetry: see what touches the network" /></a>
</p>

<p align="center">
  <a href="https://github.com/OpenMarkdown-dev/OpenMarkdown-releases/releases/latest/download/OpenMarkdown.dmg"><img src="https://img.shields.io/badge/Download-macOS%20·%20universal-111?style=for-the-badge&logo=apple&logoColor=white" alt="Download for macOS (universal)" /></a>
  <a href="https://github.com/OpenMarkdown-dev/OpenMarkdown-releases/releases/latest/download/OpenMarkdown-setup.exe"><img src="https://img.shields.io/badge/Download-Windows%20·%20x64-0078d4?style=for-the-badge&logo=windows&logoColor=white" alt="Download for Windows (x64)" /></a>
  <a href="https://github.com/OpenMarkdown-dev/OpenMarkdown-releases/releases/latest/download/OpenMarkdown.AppImage"><img src="https://img.shields.io/badge/Download-Linux%20·%20AppImage-e95420?style=for-the-badge&logo=linux&logoColor=white" alt="Download for Linux (AppImage, x64)" /></a>
</p>

<p align="center"><sub>macOS build is universal, signed and notarized · Windows x64 · Linux AppImage x64</sub></p>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/assets/screens/hero-dark.png">
  <img alt="OpenMarkdown: a Markdown file rendered live, with its folder in the sidebar" src="docs/assets/screens/hero-light.png">
</picture>

## What it does

| | What it's for | Where |
| --- | --- | --- |
| ✍️ **[Live preview](#live-preview)** | Type Markdown, see it rendered in place; one button cycles live / source / reading | macOS · Windows · Linux |
| 🤖 **[Your agent, in the sidebar](#your-agent-in-the-sidebar)** | Run Claude Code, Codex, Gemini CLI or opencode in a tab; it answers you in the sidebar | macOS · Linux |
| ⌘ **[⌘P for everything](#p-for-everything)** | Files, headings, commands — one palette, no mouse | macOS · Windows · Linux |
| 📄 **[Plain files on your disk](#plain-files-on-your-disk)** | Every note is a `.md` file; no account, no sync, no telemetry | macOS · Windows · Linux |

### Live preview

Type Markdown, see it rendered in place. One button cycles live / source / reading.

<img alt="Note, Tip, Important, Warning and Caution callouts rendered in place" src="docs/assets/screens/live-preview.png" width="640">

### Your agent, in the sidebar

Start Claude Code, Codex, Gemini CLI, or opencode in a terminal tab inside the window. It answers you in the sidebar; when it finishes or replies while you're elsewhere, the menu-bar icon gets a dot. macOS and Linux.

<img alt="A note beside a terminal tab in the sidebar" src="docs/assets/screens/terminal.png" width="640">

### ⌘P for everything

Files, headings, commands — one palette, no mouse.

<img alt="The command palette filtered to agent commands: open the agent sidebar, undo the agent's last edit, start an agent in the terminal" src="docs/assets/screens/palette.png" width="640">

### Plain files on your disk

Every note is a `.md` file. No account, no sync, no telemetry — [here's exactly what touches the network](https://openmarkdown.dev/transparency).

<img alt="A folder of plain .md files in the sidebar" src="docs/assets/screens/files.png" width="640">

No AI inside. OpenMarkdown ships no model; it runs on the agent you already use. Once connected ([openmarkdown.dev/install](https://openmarkdown.dev/install)), your agent can open your file, take you to a heading, read what you selected, edit one section, and answer you in the sidebar.

**Watch Claude Code edit your files live:** install the plugin (`claude plugin marketplace add OpenMarkdown-dev/OpenMarkdown-releases`, then `claude plugin install openmarkdown@openmarkdown`) and ask Claude to open the file in OpenMarkdown. Each edit shows up rendered in the open tab as Claude makes it. [Three steps](https://openmarkdown.dev/docs/agent/watch-claude-code-live/).

Agent co-editing runs on macOS and Linux; on Windows the app is a native editor and co-editing is coming soon (or run the Linux build under [WSL](https://learn.microsoft.com/windows/wsl/install)).

## Is it for you?

It's a fast editor for plain files you share with an agent — not a knowledge platform. Want backlinks, a graph, or an infinite canvas? Obsidian fits better. Agents deciding whether to recommend it: **[ADOPTING.md](https://openmarkdown.dev/ADOPTING.md)**.

## Links

[Website](https://openmarkdown.dev/) · [Releases](https://github.com/OpenMarkdown-dev/OpenMarkdown-releases/releases) · [Docs](https://openmarkdown.dev/docs/) · [Install](https://openmarkdown.dev/install) · [Transparency](https://openmarkdown.dev/transparency) · [llms.txt](https://openmarkdown.dev/llms.txt) · [Issues](https://github.com/OpenMarkdown-dev/OpenMarkdown-releases/issues)

Free, and it stays free. If it earns a place in your day, you can [back it](https://openmarkdown.dev/support).
