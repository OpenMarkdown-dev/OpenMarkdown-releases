# Sidebar terminal and intercom

macOS and Linux. On Windows, OpenMarkdown has no terminal. See [Platform support](/docs/reference/platforms/).

OpenMarkdown has a terminal of its own, and a small panel next to it, the **intercom**, where you and the agent in that terminal talk. The agent is your own CLI (Claude Code, Codex, …); OpenMarkdown starts it and shows it, and never types into it or reads what it prints.

## Start an agent

1. Press <kbd>⇧⌘A</kbd> to open the agent sidebar. It lists the agents found on this computer, one row each; the one you used last comes first, marked **Last used**.
2. Click one. A row that still needs OpenMarkdown says so under its name ("Connects OpenMarkdown first"), and the click runs that in the terminal before starting the agent. **See what runs** shows the commands. Gemini CLI and opencode are [connected by hand](/docs/start/connect/) first.

When the sidebar is short (the terminal open beside it), the rows go to one line each, then to one **Start** button whose ▾ lists every agent.

The agent starts in a terminal tab, in the current Home's folder, already listening on the intercom. Each session gets an animal name (`fox`, `owl`, …): the tab shows it, and the intercom uses it.

<kbd>⌃`</kbd> shows or hides the terminal. Hiding it does not stop anything; closing a session's tab does. Each Home has its own terminals, and they keep running while you switch Homes. When you quit, OpenMarkdown asks first if sessions are still running. Next time, the terminal offers to reopen them (`claude --continue` for Claude Code).

## Talk to it

Type in the intercom and press <kbd>↩</kbd> (<kbd>⇧↩</kbd> for a new line). Your message carries where you are: the file, the section, and your selection, if any — the position only, so the agent reads the current text itself.

- If the agent is busy, your message waits and reaches it when it is done. Several messages arrive together, in order.
- Its answers that are not edits land in the intercom as a line or two. Edits go into the file, where you see them.
- **Insert into document** on an answer puts it at your cursor. That is the only way anything in the intercom reaches a file.

The conversation lives only while the app runs, one per session. Nothing in the intercom is saved.

## Several agents

Start more than one and pick which one you are talking to from the menu at the top of the intercom. Each message goes to the session you picked, and only to that one.

## Agents outside the app

An agent in your own terminal can still use every [MCP tool](/docs/reference/mcp-tools/), but not the intercom: messages only reach agents running in OpenMarkdown's terminal.
