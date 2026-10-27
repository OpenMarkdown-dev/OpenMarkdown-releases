# Troubleshooting

## `openmd: command not found`

The command-line tool is off. Turn on **Settings → System integration → Command-line tool (openmd)**, then open a new terminal. If Settings says it installed to `~/.local/bin`, add that folder to your `PATH`.

Agents started in OpenMarkdown's own terminal don't need this; they use the app's copy.

## My agent says OpenMarkdown is not running

The tools answer `running: false` or `NOT_RUNNING` when the app is closed. Open OpenMarkdown and ask again. `open_file` and `reveal` start the app themselves; the others don't, on purpose.

## My agent says there is no window

`degraded: true` or `NO_WINDOW` means the app is running in the menu bar (Warm start) with its window closed. Click the menu-bar icon, or open any file, and ask again. Retrying without a window does not help.

## My agent doesn't have the tools

Check it is connected: in Claude Code, `/mcp` should list `openmarkdown` (from the plugin) or `openmd` (added by hand). If not, connect it again: [Connect your agent](/docs/start/connect/). Restart the agent after adding the server.

Check the connection from a terminal, without the agent:

```sh
openmd status
```

## The intercom doesn't reach my agent

The intercom only talks to agents running in OpenMarkdown's terminal. Start the agent from the intercom (**Start …**), not in another terminal. If its state says **disconnected**, look at its terminal tab: the agent may be waiting for you there.

## My agent's edit didn't land

A section write is refused (`CONFLICT`) when you changed that section after the agent read it. The agent is told and should read it again. If a heading name is ambiguous, it gets the candidates (`AMBIGUOUS_HEADING`) and picks one.

## Still stuck

[Send feedback](/feedback) from the site, or **Settings → Help & about → Send feedback** in the app. Include your version (`openmd --version`).
