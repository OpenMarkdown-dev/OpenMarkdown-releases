# First-run guide — the co-edit first moment

Agent-facing runbook for the very first thing to do once OpenMarkdown's plugin/MCP is installed and verified. Your job: in about 30 seconds, make *"the human and the agent share one file, and the app just renders it"* **felt**, not explained.

This file is the single source of truth for that script. The install runbook page (`openmarkdown.dev/install`) inlines this same file so non-Claude MCP hosts get the identical steps — so keep everything here host-neutral (only the seven MCP tools, no Claude-Code-specific verbs).

**Prerequisite** (the install runbook has already met it): `openmd` is on PATH and the tools `open_file`, `reveal`, `write_section`, `read_section`, `wait_for_change` are live. If they are not, you are running out of order — stop and finish install first.

**Language:** the user-facing strings below (the consent line, the note body, the headings) are the English canonical form. Render them in the user's UI language when you know it — e.g. the "Your turn" heading is `## 轮到你` in Chinese, `## あなたの番` in Japanese. You wrote the note, so you always know which heading text to read back in Beat 3.

## Beat 0 — Ask first (consent gate)

Before opening anything, ask one light line in chat and wait for the answer:

> "Installed. Want me to open a note and walk you through co-editing together? (yes / later)"

- **Skip the ask** if the sentence that triggered this install already asked to open a note (e.g. "…and open my first note"). That is consent — go straight to Beat 1.
- **"later"** → do **not** steal focus. Quietly create the note (below) **without** `reveal`, then say: "Left it at `~/OpenMarkdown/Welcome_to_openmd_agent.md` — open it or ping me whenever." Stop here.
- **"yes"** → continue.

## The note

Create a real, keeper file at `~/OpenMarkdown/Welcome_to_openmd_agent.md` (the user's default notes dir). Never a temp/throwaway file — it stays on disk so the point lands: *this is your file, not a chat log.* Seed it with:

```markdown
# Welcome to OpenMarkdown

I'm your agent. I just opened this note in front of you — it's a real file on
your disk (`~/OpenMarkdown/Welcome_to_openmd_agent.md`), not a chat message.
We can both write in it.

## Watch this

<!-- the agent writes here, live, in Beat 2 -->

## Your turn

<!-- leave this blank for the user -->
```

## Beat 1 — Open it (proves `open_file` / `reveal`)

`open_file` the note, then `reveal` it so the app comes to the front. One line in chat: "That window that just popped up — I opened it for you. Look at the note."

## Beat 2 — Write while they watch (agent → file → render)

`write_section` into `## Watch this` — ideally two or three small writes with a beat between them, so text appears line by line in their editor rather than all at once. Write something that proves it is live: a one-line hello, the note's path, and "you're watching me type into your file right now." This is the agent→human direction of co-editing.

## Beat 3 — Their turn (human → agent, closes the loop)

Ask them to write one line under `## Your turn` and save (⌘S / Ctrl+S). Then `wait_for_change` on the note. When it returns, `read_section` the "Your turn" section and reply in chat **quoting what they wrote** — "Got it — you wrote '…'." That read-back is the proof the loop closes both ways.

**Degrade — never hang.** `wait_for_change` blocks. If they stall or say "skip", wind down gracefully (a short `wait_for_change` timeout in a loop, or stop the moment they say so) and say: "No rush — write a line under `## Your turn` whenever, and I'll pick it up." Never sit in an unbounded wait.

## Tail — "Also try" (they explore the rest on their own)

After the three beats, offer a short menu (in chat, or appended to the note) of things they can try **separately**. Do **not** expand it into a second forced tutorial — the beats teach exactly one co-edit loop; everything else is opt-in here:

- `export VISUAL="openmd --wait"` — then `git commit` (and anything using `$EDITOR`/`$VISUAL`) opens in OpenMarkdown.
- `⌘P` — the command palette (files / commands / outline).
- Drag an image into a note — it's saved next to the file and linked with a relative path.
- Ask me to jump you to any heading — I'll `reveal` it.
