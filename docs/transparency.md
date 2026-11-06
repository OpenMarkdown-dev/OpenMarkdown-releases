<!-- Generated from site/transparency.html by scripts/build-page-twins.mjs — do not edit; edit the page and re-run. -->
# Transparency — OpenMarkdown

> Exactly what OpenMarkdown touches on your machine — your files, the network, your shell — and what the website itself collects.

## What OpenMarkdown touches on your machine

OpenMarkdown is a local Markdown editor. It should be trustworthy the way a plain-text file is trustworthy — so here is exactly what it touches, and what it leaves alone.

[← back to home](https://openmarkdown.dev/)

### Your files

Everything you write is plain Markdown, saved as `.md` in a folder you pick. No database, no proprietary format, no account. Uninstall OpenMarkdown and every file opens, unchanged, in any editor. Images you paste are saved in an `attachments/` folder next to your note and linked with a relative path, so notes stay portable.

### The network

The app has no AI inside it and sends no telemetry — nothing about how you use it is collected or sent in the background. It makes only two kinds of network request, both of which you can see:

- **A version check** — automatically, on launch: a request to the GitHub releases where OpenMarkdown is published, which (like any web request) lets that server see your IP. There is no account and no identifier.
- **Feedback you send** — only when you choose “Send feedback,” write a note, and press Send. It transmits exactly what is on screen: your message, the small context block shown with it (your app version, OS, and channel — which you can edit or delete before sending), and your email if you added one. Nothing hidden, nothing in the background.

Apart from those, your files, your keystrokes, and how you use the app never leave your machine.

### Your shell (`$VISUAL`)

If you turn on the `$VISUAL` integration — so “edit in your editor,” including from your agent, opens OpenMarkdown — the app adds one clearly-marked block to your shell config:

```
# >>> OpenMarkdown VISUAL >>>
export VISUAL="openmd --wait --source claude"
# <<< OpenMarkdown VISUAL <<<
```

That is the whole change. Specifically:

- It writes to `~/.zshrc`, and to `~/.bash_profile` or `~/.bashrc` only if you already have one — it never creates a shell file you didn’t have.
- It only ever touches text between those two markers. Everything else in your config is preserved byte-for-byte.
- Turning the integration off deletes the block and nothing else. A `VISUAL=` line you set yourself, outside the markers, is never touched.
- The file is written atomically — a fresh file is renamed into place — so a crash mid-write can’t truncate your config, and your original permission bits are kept (a locked-down `600` file stays `600`).

The source for this is a single small file. It’s closed today — but if you want to audit it, ask and I’ll send it over.

### Default app

A button in Settings, off until you press it, registers OpenMarkdown as the macOS handler for `.md` and `.markdown`. That’s a system setting, not a change to your files.

Before taking over, it records the app that was default first. **Revert** puts that exact app back.

### CLI `openmd`

A button in Settings, off until you press it, installs the `openmd` command. Nothing is downloaded — it’s a symlink to the `openmd` binary already inside the app, VS Code style, in `/usr/local/bin` or `~/.local/bin`.

**Uninstall** removes that link, and only that link. Same rule as `$VISUAL`: OpenMarkdown only removes what it put there.

### This website

This site counts page views with a privacy-friendly analytics tool: no cookies, no personal data, no consent banner — just aggregate views, referrer, and country. The home page also shows a Product Hunt badge, which loads a small image from Product Hunt — so, like any web request, that server sees your IP; there is no account and no cookie. Both run only on the live site, so if you open these pages from a file the browser makes no external requests at all.

The feedback page at [/feedback](https://openmarkdown.dev/feedback) is different: it makes no request when it loads, not even the analytics one. Only when you write a note and press Send does it post that note — and your email, if you added one — to the feedback intake endpoint. That request is one you trigger, not an automatic one, so it is not part of the two above.

### No warranty

OpenMarkdown is free to use. The app is closed-source and provided as-is, without warranty of any kind. You’re trusted to decide whether it fits your machine and your work.

[← back to home](https://openmarkdown.dev/)
