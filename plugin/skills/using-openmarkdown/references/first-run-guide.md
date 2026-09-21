# First-run guide — open the Welcome, don't build one

Agent-facing runbook for the very first thing to do once OpenMarkdown's plugin/MCP is installed and verified. Your job is small and specific: **open the Welcome note the app already seeded** and hand the user into it. You are not building an onboarding — the app did that.

This file is the single source of truth for that handoff. The install runbook page (`openmarkdown.dev/install`) inlines this same file so non-Claude MCP hosts get the identical steps — so keep everything here host-neutral (only the seven MCP tools, no Claude-Code-specific verbs).

**Where the Welcome comes from:** on its first launch OpenMarkdown seeds `~/OpenMarkdown/Welcome.md` (a curated, two-part onboarding note) and opens it. That file is the onboarding — a real file on the user's disk, with the human-facing lesson and, in its second half, per-section *"copy this to your agent"* prompts. Your role at first run is to **open that same file**, not to author your own.

**Prerequisite:** `openmd` is on PATH. The seven MCP tools may not be *live in this session* yet — and that changes how you open the note, not whether you do:

- **Tools live** → `open_file` / `reveal` the Welcome as below.
- **Not live because the plugin was just installed this session** (a host loads a plugin's MCP server + skill only when its session starts) → **do not stop, and do not claim you can't help.** Open the note with `openmd ~/OpenMarkdown/Welcome.md` directly. Then, at the end, tell the user how to load the full tools **without a restart**: on Claude Code that is **`/reload-plugins`** (the user types it — an agent cannot), which loads the MCP server, skill, and `/openmarkdown` commands into this same session.
- **`openmd` itself missing** (not on PATH) → *that* is the one stop condition: the app + CLI aren't set up yet; finish install first (see the runbook).

## Ask first (consent gate)

Before opening anything, ask one light line in chat and wait for the answer:

> "Installed. Want me to open your Welcome note and get you started? (yes / later)"

- **Skip the ask** if the sentence that triggered this install already asked to open a note (e.g. "…and open my first note"). That is consent — open it now.
- **"later"** → do **not** steal focus (no `reveal`). Say: "Your Welcome is at `~/OpenMarkdown/Welcome.md` — open it or ping me whenever." **Never create a note of your own**, and never open one of the user's existing files to stand in for it. Stop here.
- **"yes"** → open it.

## Open the seeded Welcome

`open_file` `~/OpenMarkdown/Welcome.md`, then `reveal` it so the app comes to the front. This is the file the app seeded on first launch — **open it, never author your own, and never open the user's oldest existing note in its place** ("open my first note" means *this* curated Welcome).

If `~/OpenMarkdown/Welcome.md` doesn't exist — the default notes dir is already there but was created some other way (an existing user), so the app never seeded it — do not manufacture a curated note. Open the default notes directory (or say where it is) and let the user pick up from there.

## Hand off

Once it's open, one line in chat, then get out of the way:

> "That's your Welcome — a real file on your disk; the app just renders it. Walk through it yourself, or ask me to demo any section for you."

The Welcome's first part teaches the basics with nothing but the user and the editor. Its second part is the agent half: each section carries a *"copy this to your agent"* prompt the user can hand to you. So the felt moment isn't a fixed script you perform up front — it happens **on demand**, when the user asks.

## Demo a section on request

When the user asks you to run one of the Welcome's sections (e.g. "turn this CSV into a table", "take me to where we build the hero"), do exactly that with the MCP tools — `read_section` / `write_section` to edit in place, `reveal` to move their view, `get_context` to see what they've selected. Each section already says what it shows; you're just the agent it points to. No separate beat script, no keeper note to seed — the file is already there, and you act on it when invited.
