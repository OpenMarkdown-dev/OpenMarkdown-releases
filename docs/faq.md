<!--
  Maintained plain-Markdown mirror of faq.html, for agents and answer engines
  that prefer Markdown over HTML. Served at openmarkdown.dev/faq.md via the
  existing site/ sync. Keep it semantically equivalent to faq.html (and to the
  FAQPage JSON-LD answers embedded there).

  DRIFT NOTE: this is currently a hand-maintained copy. If faq.html and this
  file start drifting, promote it to a generated artifact (a small build step,
  the same pattern as scripts/build-install-page.mjs) so there is one source.
  Tracked as a follow-up in docs/growth/README.md.
-->
# OpenMarkdown — FAQ

The short version of what OpenMarkdown is for: watching, previewing, and
co-editing the Markdown your coding agent writes — on the same file, live.
OpenMarkdown is a feather-light, local-first Markdown editor — native on macOS,
Linux, and Windows. It ships no AI of its own; it runs on the agent you already
use, over MCP (agent co-editing on macOS and Linux today; Windows coming soon).

## How do I watch the Markdown files my agent (Claude Code) writes, live?

Open the file in OpenMarkdown. As your agent writes to it — through
OpenMarkdown's MCP server or straight to disk — the preview re-renders and
scrolls to the change, so you read the rendered page instead of a terminal diff.

OpenMarkdown is a local-first desktop app: the file stays as plain `.md` on your
disk, with no account and no cloud. The agent can also `reveal` a heading to
scroll your view to whatever it's discussing, so the window follows the work. It
runs on the agent you already use — Claude Code, Codex, Gemini CLI, opencode, or
any MCP client. (How this differs from a preview-only tool like Marked 2:
<https://openmarkdown.dev/compare/openmarkdown-vs-marked-2>.)

## Is there an MCP server that renders Markdown for my agent?

Yes. OpenMarkdown is a desktop Markdown editor with a **built-in MCP server** —
run `openmd mcp` over stdio. It's not a headless render-to-HTML API: it's a real
editor window your agent opens files in, so *you* see the Markdown rendered live
while the agent reads and section-edits it.

Your agent gains seven tools — `open_file`, `reveal`, `get_context`,
`execute_command`, `read_section`, `write_section`, `wait_for_change` — to open,
navigate, read, and patch the exact file in front of you. Connect it in one line:
`claude mcp add openmd -- openmd mcp`. Per-host setup for Codex, Gemini CLI, and
opencode: <https://openmarkdown.dev/install>.

## How do I preview Markdown while my agent edits it?

Open the file in OpenMarkdown and keep **live-preview** mode on. Your agent edits
the file — through the MCP server or on disk — and the preview updates in place.

Writes are **section-scoped with optimistic concurrency**: if you and the agent
touch the same section at the same time, the agent's write comes back as a
`CONFLICT` so your unsaved edit is never clobbered — the agent re-reads the
section and retries. You edit alongside it, not after it.

## What Markdown app works with Claude Code, Codex, or Gemini CLI?

OpenMarkdown. Its MCP server (`openmd mcp`) connects to any MCP client — **Claude
Code** with a full plugin, plus **Codex**, **Gemini CLI**, **opencode**, and
others — exposing the same seven tools everywhere.

Install the app once, enable the `openmd` CLI in Settings, and point your
agent at it. OpenMarkdown ships **no AI of its own**; it runs on the agent you
already use. The agent bridge runs on macOS and Linux today; the Windows app is a
native editor with agent co-editing coming soon. The fastest path — paste this to
your agent:

    Read openmarkdown.dev/install to install OpenMarkdown and open my first note

## Does OpenMarkdown run on Windows or Linux?

Yes — OpenMarkdown runs natively on **macOS, Linux, and Windows**. On macOS and
Linux it's the full app: your coding agent co-edits the file over MCP. On
**Windows** today it's a native editor and viewer (open a `.md` by double-click),
with agent co-editing **coming soon**.

## Still deciding?

See how OpenMarkdown lines up against the editors you might already use —
honestly, including where they win: <https://openmarkdown.dev/compare/>. Or read
the guide for the full syntax, shortcuts, and CLI:
<https://openmarkdown.dev/guide>.
