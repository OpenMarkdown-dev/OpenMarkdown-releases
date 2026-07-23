<!--
  Maintained plain-Markdown mirror of install.html, for agents and answer engines
  that prefer Markdown over HTML. Served at openmarkdown.dev/install.md via the
  existing site/ sync. Keep it semantically equivalent to install.html.

  DRIFT NOTE: hand-maintained copy. install.html's first-run section is itself
  generated from plugin/skills/using-openmarkdown/references/first-run-guide.md
  by scripts/build-install-page.mjs. If drift appears, generate this mirror from
  the same sources. Tracked as a follow-up in docs/growth/README.md.
-->
# OpenMarkdown — Install

Hand one sentence to your agent and it sets OpenMarkdown up for you — checks your
machine, wires in the tools, and opens your first note. Or do any of it by hand.

## Paste one sentence

Give this to any agent that can read a URL. It reads this page and does the rest —
the URL is the single thing that stays current, so the sentence never goes stale.

```
Read openmarkdown.dev/install to install OpenMarkdown and open my first note
```

That's the whole install for most people. Want to run the steps yourself? Below.

## First: install the app

OpenMarkdown's tools **are** the desktop app — the MCP server is `openmd mcp`,
your local app in server mode. Downloading an app and granting it permissions is
something only you can do, so this step is yours and comes first; your agent picks
up from there.

1. **Download and install the app.** Grab the latest release for your platform —
   [macOS (.dmg, drag to Applications)](https://github.com/OpenMarkdown-dev/OpenMarkdown-releases/releases/latest/download/OpenMarkdown.dmg),
   [Linux (AppImage)](https://github.com/OpenMarkdown-dev/OpenMarkdown-releases/releases/latest/download/OpenMarkdown.AppImage),
   or [Windows (.exe)](https://github.com/OpenMarkdown-dev/OpenMarkdown-releases/releases/latest/download/OpenMarkdown-setup.exe).
   **The agent steps below are macOS and Linux** — on Windows the app is a native
   editor with agent co-editing coming soon (or run the Linux build under WSL to
   get it today).
2. **Turn on the `openmd` CLI.** In the app: **Settings → System integration →
   Install the command-line tool**. That drops `openmd` on your PATH.
3. **Check it.** Run `openmd status` — it should answer.

**If `openmd` isn't on your PATH yet,** one of two things is true — both quick to fix:

- **You have the app, but the CLI is off** → open OpenMarkdown → **Settings →
  System integration → Install the command-line tool**.
- **You don't have the app yet** → install it (step 1 above), then turn on the CLI.

Once `openmd status` answers, paste the sentence again and your agent carries on. A
missing `openmd` just means this step isn't finished — nothing is wrong; your agent
can't download the app or grant its permissions (that needs your hands), so it
points you back here rather than guess or try to install the app itself.

## Then: connect your agent

**Claude Code** gets the full plugin — the seven MCP tools *and* a skill that
teaches it when to use them. Every other agent connects the same MCP server (the
tools); the skill is Claude Code–only. The runtime is identical either way: plain
`openmd mcp` over stdio.

**What you're actually installing.** The MCP wiring just points your agent at
`openmd mcp` — the local app you installed a moment ago, no new binary downloaded.
The Claude Code plugin adds Markdown only (a skill + three slash commands): **no
hooks, no scripts that run on their own, no network calls**, and no "run any shell
command" tool — the seven tools touch only your Markdown files and the app's own
menu commands. It's all open:
[read the `plugin/` source](https://github.com/OpenMarkdown-dev/OpenMarkdown-releases/tree/main/plugin)
before you install it — that's the front door, not a detour. A careful agent that
checks first finds no hooks and no network, and can go ahead.

### Claude Code (full plugin)

Hand it the sentence (it installs the plugin and opens your first note):

```
Read openmarkdown.dev/install to install OpenMarkdown and open my first note
```

Or run it yourself:

```
claude plugin marketplace add OpenMarkdown-dev/OpenMarkdown-releases
claude plugin install openmarkdown@openmarkdown
```

Want the tools only, without the skill? `claude mcp add openmd -- openmd mcp`

### Codex (MCP only)

```
codex mcp add openmd -- openmd mcp
```

Or by hand in `~/.codex/config.toml`:

```toml
[mcp_servers.openmd]
command = "openmd"
args = ["mcp"]
```

### Gemini CLI (MCP only)

```
gemini mcp add openmd openmd mcp
```

Or by hand in `~/.gemini/settings.json`:

```json
{ "mcpServers": { "openmd": { "command": "openmd", "args": ["mcp"] } } }
```

### opencode (MCP only)

No add command — set it in `opencode.json` (project) or
`~/.config/opencode/opencode.json` (global):

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "openmd": { "type": "local", "command": ["openmd", "mcp"], "enabled": true }
  }
}
```

### Any MCP client (MCP only)

Anything that speaks MCP can spawn the server. Point it at `openmd mcp` over
stdio — no arguments, no network:

```json
{ "command": "openmd", "args": ["mcp"] }
```

## Finally: your first note

With the tools live, **"open my first note" means one specific thing**: your agent
creates a fresh, curated **Welcome** note — a real keeper file at
`~/OpenMarkdown/Welcome_to_openmd_agent.md` — and uses it to show you co-editing.
Not your oldest existing file; a new note made for this moment.

The script it follows is the canonical, host-neutral first-run guide — shipped
verbatim in the Claude Code plugin skill, and available inline on the /install page
for every other host: a consent gate, then a three-beat co-edit loop. The agent
writes into the note while you watch (`write_section`), waits for you to write a
line back (`wait_for_change` + `read_section`), and reads it back to you. It
degrades gracefully and never sits in an unbounded wait.
