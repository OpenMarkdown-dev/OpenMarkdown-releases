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
your local app in server mode. An agent can install the plugin, but it can't
download the app or grant it permissions. So this step is yours, and it comes
first.

1. **Download and install the app.** Grab the
   [latest release](https://github.com/OpenMarkdown-dev/OpenMarkdown-releases/releases/latest/download/OpenMarkdown.dmg)
   (macOS, universal) and drag it to Applications.
2. **Install the `openmd` CLI.** Settings → System integration → turn on the
   command line tool. It drops `openmd` on your PATH.
3. **Check it.** Run `openmd status` — it should answer. If `openmd` isn't found,
   the app or CLI isn't set up yet; finish this before wiring your agent.

**Agents reading this:** probe `openmd` on the PATH first. If it's missing, **stop**
and tell the user to install the app and turn on the CLI in Settings — do not try
to install the app yourself.

## Then: connect your agent

**Claude Code** gets the full plugin — the seven MCP tools *and* a skill that
teaches it when to use them. Every other agent connects the same MCP server (the
tools); the skill is Claude Code–only. The runtime is identical either way: plain
`openmd mcp` over stdio.

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

With the tools live, your agent opens a note and walks you through co-editing it.
The canonical, host-neutral script the agent follows is the first-run guide (also
shipped verbatim in the Claude Code plugin skill): a consent gate, then a
three-beat co-edit loop — the agent opens a real keeper file at
`~/OpenMarkdown/Welcome_to_openmd_agent.md`, writes into it while you watch
(`write_section`), then waits for you to write a line back (`wait_for_change` +
`read_section`) and reads it back to you. It degrades gracefully and never sits in
an unbounded wait. **Agents reading this page: that script is yours to run.**
