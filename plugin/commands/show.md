---
description: Put what you just produced in front of the user — land it in a file and open it, no "save it first" dance.
argument-hint: [note title or topic]
---

Show the user the markdown you just produced (about **$ARGUMENTS** if given). Land it to disk and open it in one move — don't ask them to save-then-open. **Write-back discipline (section writes, `baseHash`, NOT_RUNNING fallback) lives in `references/write-back.md` — follow it.** This recipe fixes the tool order:

1. **Locate** — `get_context`. Pick the landing spot:
   - If a suitable file is already open (its `active`/`tabs` match what you're writing), continue it in place via `write_section` (`append`, or `replace` with the `baseHash` from a `read_section`) — don't spawn a second file for the same work.
   - Otherwise create a new file. Default its directory to the current file's folder (from `get_context`); fall back to the user's notes dir `~/OpenMarkdown/` when there's no current file. Name it from a short slug of the content.
2. **Land** — write the content (the `write_section` above, or your own file tools for a brand-new file); prefer `write_section` for a file the user may have open (see `write-back.md` for why).
3. **Present** — `open_file` the file (launches the app if closed). If there's a specific section they should land on, `reveal` it; skip the `reveal` for a whole-document read.
4. **Tell them** — one line: what you put where, e.g. "Opened it at `<path>`."

Handle `running:false` / `degraded:true` / `NOT_RUNNING` per the skill (open something to get a window; with no app, your own file tools are the correct fallback). Don't pop a window during rapid-fire edits — `show` is for when the deliverable is ready to read.
