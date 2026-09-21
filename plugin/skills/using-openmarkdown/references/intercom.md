# The intercom — listening on a workspace

The single home for the sidebar channel. The thin core (SKILL.md) and the `listen` command route here; they do not restate this. `wait_for_change` and `post_message`'s tool descriptions own their contracts (parameters, return shapes, states) — this playbook owns *how to run the loop* and *what your replies should sound like*.

Only reach for this if `wait_for_change` accepts a `workspace` and `post_message` appears in your tool list. On an older app they will not, and there is nothing to listen on.

## The gate: only listen when explicitly asked

Listening spends tokens on every turn of the loop, so **never enter it on your own initiative**. An explicit intercom command (e.g. `/openmarkdown:listen` if your host provides it) *is* the ask. Absent such a command, wait for the user to say so in words.

## What the intercom is

The user has a sidebar in OpenMarkdown, bound to one workspace (a folder, or the directory of the file they have open). They type there and press send; you get it. You answer with one line that lands back in that sidebar.

Two properties shape everything below:

- **It is transient.** Nothing said here is saved anywhere. If it matters tomorrow, it belongs in a file.
- **It is not your terminal, mirrored.** The user sees only the lines you deliberately send. They cannot see your reasoning, your tool calls, or your progress — and that is the design, not a gap to work around.

## The loop

`wait_for_change` with the `workspace` (add `name` so the sidebar can say who is listening) → it returns → **look at which source woke you** → handle it → wait again.

- **Messages** — `source: "message"`, with `messages`: **always a list, sometimes more than one**. Read them all before you touch anything, then reply once with `post_message`.
- **A file change** — only if you also passed a `path`. Handle it per `references/watch-loop.md`; the two loops are the same loop with two wake sources, not two separate watches.
- **A timeout** — `{changed:false, timedOut:true}`. Nothing happened. Loop and wait again; it is **not** an error.
- **A cancellation** — `{changed:false, cancelled:true}`, with `source: "cancelled"`. The user interrupted you (Ctrl-C) while you were waiting. **Leave the loop**, exactly as for a stand-down, and for the same reason: waiting again would undo the interrupt they just performed. It is **not** a timeout — a timeout means nothing has happened yet, this means they stopped you on purpose. Your process and context are untouched; carry on with whatever they ask next.
- **A stand-down** — `{dismissed:true}`, with `source: "dismissed"`. The user asked you to stop listening, from the sidebar's roster. **Leave the loop**: say you have stopped listening and start no further wait. It is not a failure and not a timeout — retrying would undo a button the user deliberately pressed. Nothing else about you changed: your process, your context and your terminal are exactly as they were, so carry on with ordinary work if there is any.

Rules that keep the loop honest:

- **One wake can carry several messages, and they are usually one request.** Anything the user said while you were busy arrives together, in the order they said it. Treat the batch as a single ask that was typed in pieces — a later line most often *amends* an earlier one ("summarise this section" … "actually just the last paragraph"), so decide from the whole batch and act once. Doing them in turn as N independent tasks means doing the superseded thing first, and the user watching you undo it.
- **The context is a POSITION, not a quote.** `message.context` carries the file path, the section heading and the selected line range — never the text itself. That is deliberate: the user may have kept editing while you were thinking. **`read_section` it yourself** and act on what is there now.
- **Prefer a short `timeout_seconds` in a loop** over one long hang, and make the wait the **last call in an iteration** — it blocks the server, so anything else you send queues behind it.
- **A send is the user's "I'm done talking".** Unlike a file save it is never debounced, so it reaches you the moment they press Enter. Act on it; do not wait for more.
- **Never act on a stale read.** A wait returns *because* something moved.
- **A dismissal is not a timeout.** They look similar — neither carries a message — and treating one as the other is the single way to make the user's stand-down button do nothing at all: you would wait again immediately and reappear in the roster.
- When the user says stop, finish the iteration, say you have stopped listening, and do not start another wait.

You cannot be given a message while you are working — the app holds them for you and hands them over on your next wait — so there is no reason to poll mid-task, and no reason to hurry back for fear of losing something. A queue that nobody collects before the app's own window closes is discarded, so a wait you never return to still loses the user's words: come back.

`NOT_RUNNING` means the app is closed — most often because the user simply quit it, which is ordinary and not an error. **Leave the loop.** Say the intercom is gone, and stop: do not retry, do not poll for the app to come back, and do not start another wait. There is no sidebar to listen to, so a loop that keeps trying just burns tokens in silence.

Quitting the app does **not** touch you. You are a process in the user's own terminal and the app has no say over your lifetime — it only ever answered your calls. You stay exactly where you are, with your context, and can keep doing ordinary work; the only thing that went away is the sidebar channel. If the user opens the app again, they can put you back on the intercom by running the listen command again.

`NOT_A_DIRECTORY` means the workspace path is wrong; `get_context`'s `folder` is the value you want.

## Replying: `post_message`

One call, one line, fire-and-forget. It touches no file and has **no delivery guarantee** — with the app closed or the sidebar unavailable it is dropped silently and the call still succeeds. Do not retry, and do not use it for anything that must survive: that goes in the document.

### The five rules for what you say

1. **Say the result, not the process.** "Trimmed it to three lines." Never which files you read, which tools you called, or what you considered. The app refuses to display process anyway — this is the first gate, not the only one.
2. **Say plainly what you could not do.** Partial or failed, name it and why. A silence the user only discovers later costs far more than an awkward sentence now.
3. **One or two sentences, no bullet points.** If it needs a list, that content belongs in the file, not the intercom — put it there and say you did.
4. **Do not restate what you wrote.** They are looking at the document; the glow already shows them where.
5. **When it needs their decision, ask once and stop.** Do not guess and carry on.

Only inline `` `code` `` and line breaks render; every other markdown mark shows up as literal characters. Use backticks for filenames, commands and identifiers — nothing else.

### Examples

> Trimmed 实现方案 to three lines. The code block underneath wouldn't fit, so I left it.

> `plan.md` has no 风险 section — do you want me to add one, or did you mean 权衡?

Not:

> I read the section, considered a few phrasings, then called write_section to replace it with: "..."

## Editing on the user's behalf

Anything you change goes through `references/write-back.md`: `read_section` → `write_section` into their live buffer, never a whole-file rewrite that races their unsaved edits. While you do, OpenMarkdown shows them a glow on that section and a one-line "working on 〈section〉" note in the sidebar. That is presence, generated by the app from your reads and writes — you do not need to narrate it, and rule 1 says not to.
