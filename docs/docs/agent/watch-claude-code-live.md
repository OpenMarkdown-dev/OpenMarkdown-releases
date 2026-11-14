# Watch Claude Code edit your files live

Claude Code writes plans, specs and notes as Markdown files. Instead of reading them as diffs in the terminal, open them in OpenMarkdown and watch the rendered page change as Claude writes.

Three steps, on macOS or Linux.

## 1. Install OpenMarkdown

[Download the app](/docs/start/install/) and turn on the [command-line tool](/docs/start/install/#turn-on-the-command-line-tool) so Claude Code can reach it.

## 2. Connect Claude Code

In your terminal:

```sh
claude plugin marketplace add OpenMarkdown-dev/OpenMarkdown-releases
claude plugin install openmarkdown@openmarkdown
```

This adds OpenMarkdown's [MCP server](/docs/reference/mcp-tools/) and a [skill and slash commands](/docs/agent/plugin-skills/) that tell Claude when to use it. Other agents connect the same way: see [Connect your agent](/docs/start/connect/).

## 3. Ask Claude to open the file

Start a new Claude Code session and ask:

```text
Write the plan in plan.md and open it in OpenMarkdown
```

The file opens in a tab. From then on, each edit Claude makes shows up in that tab as it lands: Claude edits one section at a time, and the section it is writing glows briefly. When it finishes a batch, a small sign lists the sections it touched.

`/openmarkdown:show` does the same for whatever Claude just produced: it writes it to a file and opens it.

## What else you can do

- **Edit while Claude edits.** Type in the same file; Claude's writes don't overwrite your typing. See [Co-edit](/docs/agent/co-edit/).
- **Have Claude watch for your changes.** `/openmarkdown:co-edit plan.md` makes Claude wait for your edits, act on them, and wait again.
- **Take back Claude's last edit.** **Undo agent's last edit** in the command palette.

## Files Claude writes straight to disk

If Claude writes a file with its own file tools instead of through OpenMarkdown, open the file in OpenMarkdown yourself: changes on disk show up in the open tab.
