# Connect your agent

Your agent reaches OpenMarkdown through its MCP server, `openmd mcp`. It is the app you already installed, answering over stdio: nothing new is downloaded and nothing goes over the network. Connect once per agent.

This works on macOS and Linux. Agents in your own terminal also need the [command-line tool turned on](/docs/start/install/#turn-on-the-command-line-tool).

## Let your agent do it

Paste this to any agent that can read a web page:

```text
Read openmarkdown.dev/install to install OpenMarkdown and open my first note
```

It checks that `openmd` is there, connects itself, and opens your Welcome note. If `openmd` is missing, it stops and tells you what to turn on. The same sentence is in the app under **Settings → Connect your agent**.

Or connect by hand:

## Claude Code

Claude Code gets the full plugin: the MCP tools plus a [skill and slash commands](/docs/agent/plugin-skills/) that teach it when to use them.

```sh
claude plugin marketplace add OpenMarkdown-dev/OpenMarkdown-releases
claude plugin install openmarkdown@openmarkdown
```

The plugin is Markdown only: no hooks, no scripts that run on their own, no network calls. [Read its source](https://github.com/OpenMarkdown-dev/OpenMarkdown-releases/tree/main/plugin) before you install it if you like.

Tools only, without the skill:

```sh
claude mcp add openmd -- openmd mcp
```

## Codex

```sh
codex mcp add openmd -- openmd mcp
```

Or in `~/.codex/config.toml`:

```toml
[mcp_servers.openmd]
command = "openmd"
args = ["mcp"]
```

## Gemini CLI

```sh
gemini mcp add openmd openmd mcp
```

Or in `~/.gemini/settings.json`:

```json
{ "mcpServers": { "openmd": { "command": "openmd", "args": ["mcp"] } } }
```

## opencode

In `opencode.json` (one project) or `~/.config/opencode/opencode.json` (everywhere):

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "openmd": { "type": "local", "command": ["openmd", "mcp"], "enabled": true }
  }
}
```

## Any other MCP client

Have it start `openmd mcp` over stdio, with no arguments:

```json
{ "command": "openmd", "args": ["mcp"] }
```

Agents other than Claude Code get the [MCP tools](/docs/reference/mcp-tools/) and no skill; their tool descriptions say when to use each one.

## Check it worked

Ask your agent:

```text
What do I have open in OpenMarkdown?
```

It should name your open folder and file. If it says OpenMarkdown is not running, open the app and ask again. More in [Troubleshooting](/docs/help/troubleshooting/).
