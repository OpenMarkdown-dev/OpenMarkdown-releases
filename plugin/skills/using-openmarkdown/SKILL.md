---
name: using-openmarkdown
description: Use when producing or editing markdown documents for a user who has OpenMarkdown installed — put documents in front of them via open_file/reveal, sense what they are looking at via get_context, edit notes they may have open section-by-section via read_section/write_section instead of whole-file rewrites, respond correctly to running:false/degraded/NO_WINDOW states instead of retrying or guessing, and — only when the user asks you to watch — hold a file open as a live inbox with wait_for_change instead of polling.
---

# Using OpenMarkdown as a shared whiteboard

OpenMarkdown is the user's markdown app. Files are shared memory between you and the user; the app renders them. This SKILL is the **thin core**: the judgment for *when* to reach for OpenMarkdown and how to read its states. The deep per-workflow playbooks live in `references/` and are named below — pull the one you need when you enter that workflow.

Ownership, so nothing drifts: the **tool descriptions** own the contract (parameters, return shapes, state definitions); this **skill** owns the how-and-when (thin core + references); each workflow's steps are spelled out in **exactly one** reference, never restated across the tool description, this core, and the commands.

## The very first run

Right after the plugin/MCP is first installed, your job is a 30-second live demo, not a feature tour: open a note, write in it while the user watches, then have them write back. **Follow `references/first-run-guide.md`** — the consent gate, the keeper note, the three beats, the graceful degrade. Don't improvise your own onboarding and don't skip it silently. Ask once before you open anything (unless the install request already said to open a note), and never sit in an unbounded `wait_for_change`.

## When to reach for it (and where to go next)

- You just wrote or substantially edited a markdown document the user should read → `open_file` it (or `reveal` straight to the section that matters). Don't make them ask "where is it?".
- The conversation zooms in on one section of an open document → `reveal` with that heading, so their view follows the discussion.
- You need to know what the user is working on, has selected, or is currently reading → `get_context` first, before asking them.
- You're **editing** a file the user may have open → **see `references/write-back.md`** (section writes into the live buffer, not whole-file rewrites).
- The user has **explicitly asked you to watch** a file → **see `references/watch-loop.md`** (the co-edit inbox loop, `@agent` markers). Never enter a watch on your own initiative.
- Something needs doing in the app that no dedicated tool covers → `execute_command`, but see the escape-hatch discipline below.

## Reading the states

- `running: false` — the app is closed. Say so if relevant; `open_file`/`reveal` will launch it when you actually have something to show. Never call `get_context` in a loop hoping it comes up.
- `degraded: true` — almost always the app is tray-resident with **no window at all**. The snapshot is the user's *last-known* state: lead with that framing and report it in the past tense ("the last thing you had open was…"), never assert it as what is open right now — the tabs it lists may have been closed since. Recovery means opening a window: `open_file` the relevant document yourself, or ask the user to open one; "bring the window to the front" is meaningless when none exists. Don't retry — nothing improves until a window opens.
- `NO_WINDOW` vs `NOT_RUNNING` from `execute_command` — running-without-a-window vs not running at all. Either way the command had no live UI; if the action still matters, `open_file` something relevant first (that creates a window), then retry once.

## Escape-hatch discipline

Call `get_context` and pick an id from `availableCommands` before any `execute_command`. Never guess command ids — a typo'd id is indistinguishable from a missing feature.

## When things fail

- Spawning `openmd` fails (command not found): the CLI isn't installed. Point the user to OpenMarkdown's settings → "Install command line tool". Don't retry until they confirm.
- `get_context` returns a `version` older than what a tool or field mentioned here seems to assume, and calls are failing oddly: the user's app is older than this skill — suggest updating OpenMarkdown, and work with the tools that do respond.

## Restraint

- One document, one window: if a file is already in the user's tabs (check `get_context`), `reveal` beats a second `open_file` — and for small edits to a file they already have open, do nothing; the app live-reloads.
- Don't pop windows during rapid-fire edits. Open once when the deliverable is ready to read, reveal as the discussion moves.
- Pure Q&A with no document involved needs no OpenMarkdown calls at all.

Capabilities that may exist in newer versions (forms, diff review) are documented in `references/` when they land — only rely on a tool if it actually appears in your tool list.
