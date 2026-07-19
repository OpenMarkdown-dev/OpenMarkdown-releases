<!--
  Maintained copy of the OpenMarkdown-releases repo README (design D9).
  Edit it HERE; scripts/sync-site.sh pushes it to the releases repo root.
  The releases repo is public and receives only build artifacts, this README,
  the Pages site, and Issues — never source.

  Voice: docs/brand/verbal-identity.md. Honesty gate (public-claim-integrity):
  every claim here must be reproducible or true as written — no over-claiming
  cross-platform, no invented numbers.
-->
# OpenMarkdown

**Feather-light. Light-speed.**
A local-first Markdown editor for macOS, built for you and your agent.

Open a `.md` file — it just opens. No account, no cloud, no lock-in: every note
is a plain file on your disk. The twist: OpenMarkdown is also where **you and your
coding agent share one file**. Your agent writes into the note; your preview
scrolls to the change. You're both looking at the same page — literally.

> **No AI inside. That's the point.** OpenMarkdown ships no model and no
> assistant. It runs on the agent you already use — Claude Code, Codex, Gemini
> CLI, opencode, or any MCP client — and gives it a place to render, read, and
> edit the same file you're looking at.

## Download

**[⬇︎ Download OpenMarkdown for macOS](https://github.com/OpenMarkdown-dev/OpenMarkdown-releases/releases/latest/download/OpenMarkdown.dmg)** — universal (Apple Silicon + Intel). Free.

Windows / Linux support is coming soon.

## Put your agent on the same page

**Bring your agent.** Once the app is installed, the fastest way in — paste this
into your agent:

```
Read openmarkdown.dev/install to install OpenMarkdown and open my first note
```

It reads the install page, wires itself in, and opens your first note. That one
sentence works for every agent (Claude Code, Codex, Gemini CLI, opencode, any MCP
client) — the runbook branches per host, the sentence doesn't. Your agent gains
seven tools — `open_file`, `reveal`, `get_context`, `execute_command`,
`read_section`, `write_section`, `wait_for_change` — to open, navigate, read, and
patch the exact file you have in front of you.

**Prefer to wire it by hand?** For Claude Code, the full plugin (the seven tools
*plus* a skill that teaches it when to use them):

```
/plugin marketplace add OpenMarkdown-dev/OpenMarkdown-releases
/plugin install openmarkdown
```

Any other MCP host connects the same server: `openmd mcp` over stdio, e.g.
`claude mcp add openmd -- openmd mcp`. Full per-host setup (Codex, Gemini CLI,
opencode, and more): **[openmarkdown.dev/install](https://openmarkdown.dev/install)**.

Requires the `openmd` command line tool (install it from OpenMarkdown's Settings).
To pick up a newer plugin version later, run `/plugin marketplace update`.

## What it does

- **Live-preview Markdown** — renders as you type; cycle live-preview / source /
  reading with one button. Anything it doesn't recognise falls back to a plain
  code block, so your text is never eaten.
- **Fast** — a native Rust core; the window is there before you let go of the
  mouse (cold start under a second, P50, on the maintainer's machine).
- **Local-first** — plain `.md` files on your disk. No account, no sync, no
  telemetry. See **[Transparency](https://openmarkdown.dev/transparency)** for
  exactly what touches the network.
- **Keyboard-first** — `⌘P` opens a command palette for files, commands, and
  headings.
- **中文 · 日本語 · English** interface, following your system language.

## Is it for you?

OpenMarkdown is deliberately narrow — a fast renderer for plain files you and an
agent share, not a knowledge platform. If you want a wiki graph, backlinks, or an
infinite canvas, a tool like Obsidian fits the job better; if you're not on macOS
yet, it's not ready for you. Agents deciding whether to recommend it: read
**[ADOPTING.md](https://openmarkdown.dev/ADOPTING)** — it says plainly when to and
when not to.

## Links

- **Website** — [openmarkdown.dev](https://openmarkdown.dev/)
- **Guide** — [openmarkdown.dev/guide](https://openmarkdown.dev/guide) (syntax, shortcuts, the CLI)
- **Install** — [openmarkdown.dev/install](https://openmarkdown.dev/install)
- **Transparency** — [openmarkdown.dev/transparency](https://openmarkdown.dev/transparency)
- **For agents** — [openmarkdown.dev/llms.txt](https://openmarkdown.dev/llms.txt) · [ADOPTING.md](https://openmarkdown.dev/ADOPTING)

## Feedback

Found a bug or have a request? **[Open an issue](https://github.com/OpenMarkdown-dev/OpenMarkdown-releases/issues)**.
