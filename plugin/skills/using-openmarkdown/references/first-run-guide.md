# First-run guide — the co-edit first moment

Agent-facing runbook for the very first thing to do once OpenMarkdown's plugin/MCP is installed and verified. Your job: in about 30 seconds, make *"the human and the agent share one file, and the app just renders it"* **felt**, not explained.

This file is the single source of truth for that script. The install runbook page (`openmarkdown.dev/install`) inlines this same file so non-Claude MCP hosts get the identical steps — so keep everything here host-neutral (only the seven MCP tools, no Claude-Code-specific verbs).

**Prerequisite:** `openmd` is on PATH. The seven MCP tools may not be *live in this session* yet — and that changes what you do, not whether you do it:

- **Tools live** → run the beats below with them.
- **Not live because the plugin was just installed this session** (a host loads a plugin's MCP server + skill only when its session starts) → **do not stop, and do not claim you can't help.** Run the beats in *degraded mode*: edit the note file directly with your own file tools and `openmd <file>` to open/reveal it — it still lands the felt moment. Then, at the end, tell the user how to load the full tools **without a restart**: on Claude Code that is **`/reload-plugins`** (the user types it — an agent cannot), which loads the MCP server, skill, and `/openmarkdown` commands into this same session.
- **`openmd` itself missing** (not on PATH) → *that* is the one stop condition: the app + CLI aren't set up yet; finish install first (see the runbook).

**Language:** the user-facing strings below (the consent line, the note body, the headings) are the English canonical form. Render them in the user's UI language when you know it — e.g. the "Your turn" heading is `## 轮到你` in Chinese, `## あなたの番` in Japanese. You wrote the note, so you always know which heading text to read back in Beat 3.

## Beat 0 — Ask first (consent gate)

Before opening anything, ask one light line in chat and wait for the answer:

> "Installed. Want me to open a note and walk you through co-editing together? (yes / later)"

- **Skip the ask** if the sentence that triggered this install already asked to open a note (e.g. "…and open my first note"). That is consent — go straight to Beat 1.
- **"later"** → do **not** steal focus. Quietly create the note (below) **without** `reveal`, then say: "Left it at `~/OpenMarkdown/Welcome_to_openmd_agent.md` — open it or ping me whenever." Stop here.
- **"yes"** → continue.

## The note

Create a real, keeper file at `~/OpenMarkdown/Welcome_to_openmd_agent.md` (the user's default notes dir). **Create it fresh — never repurpose or open one of the user's existing notes** ("open my first note" means *this* curated Welcome, not their oldest file). Never a temp/throwaway file either — it stays on disk so the point lands: *this is your file, not a chat log.* Seed it with:

```markdown
# Welcome to OpenMarkdown

This is a real file on your disk — `~/OpenMarkdown/Welcome_to_openmd_agent.md` —
not a chat message. I'm your agent, and I just opened it in front of you. The app
you're looking at is only rendering it; the *file* is what we both share. Watch
what that feels like:

## Watch this

<!-- the agent writes here, live, in Beat 2 -->

## Your turn

<!-- write me a line here and save — I'm watching this file, and I'll read it back -->

## Hand me a task

<!-- Leave me async work right in the file. Uncomment the line below (or write your
     own) and save — while I'm watching this note I'll do it and tick the box. The
     point: you hand off work through the file, not the chat. -->
<!-- - [ ] @agent turn the three lines above into a bullet list -->
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

- **Keep co-editing** — ask me to watch a note again and I'll wait for your saves and react; that re-opens this loop anytime (on Claude Code, `/openmarkdown:co-edit <file>` does it in one step).
- **Hand me async work** — drop `- [ ] @agent <task>` into a note I'm watching (like `## Hand me a task` above); I pick it up, do it, and tick the box. This is the whole point of the shared file.
- `export VISUAL="openmd --wait"` — then `git commit` (and anything using `$EDITOR`/`$VISUAL`) opens in OpenMarkdown.
- `⌘P` — the command palette (files / commands / outline).
- Drag an image into a note — it's saved next to the file and linked with a relative path.
- Ask me to jump you to any heading — I'll `reveal` it.
