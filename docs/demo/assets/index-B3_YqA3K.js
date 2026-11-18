const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/workspace-SWs7mUV7.js","assets/index-n10u-4oU.js","assets/index-B-xtcC9n.css","assets/event-D12BCjYd.js","assets/tabStates-Ch3vVrhx.js","assets/panelLayout-B2huy2Ci.js","assets/home-BsJlynsm.js","assets/terminalMemory-gMdEQhU7.js","assets/terminal-LoosSRh-.js","assets/agentState-Bdug3Ia9.js","assets/uiState-DEzlRcYa.js","assets/layout-Dwqz5YFl.js","assets/lazySurface-BphywS7N.js","assets/agentSidebar-D6RxzVJO.js","assets/presence-Br773y4y.js","assets/document-B2_qLRwG.js","assets/opensAs-D2wq-6bs.js","assets/cases-D2UdOq-E.js","assets/formatCombo-BmKY2YtJ.js","assets/index-BTPYBMiG.js","assets/propertyCommand-D3dOpN2V.js","assets/outline-Cmqhau9O.js","assets/control-BeAznQJE.js","assets/overlayStack-CYjZnx-e.js","assets/iconMetrics-C4sHaW3N.js","assets/fonts-D0T-CKfG.js","assets/imageResolve-BHBNQNcF.js","assets/emptyTier-DfEYmxPo.js","assets/editorRegistry-DArHh_4a.js","assets/revealFlash-BecpUTHi.js","assets/commands-9QMTV2_K.js","assets/settingsPanel-DQwMWEVM.js","assets/homeAttention-D7nPNTVf.js","assets/cta-AFwIixz_.js","assets/Overlay-Dna6CR_f.js","assets/buttonClasses-1RgluOc-.js","assets/useOverlayLayer-JjEpvbu6.js","assets/Button-CkejdnSY.js","assets/externalOpen-D--4eHqh.js","assets/mobileBlock-Hg2PvLSa.js"])))=>i.map(i=>d[i]);
import{z as T,_ as p}from"./index-n10u-4oU.js";import{l as mt,o as wt}from"./opensAs-D2wq-6bs.js";const D="/Users/harness",A=`${D}/OpenMarkdown`,gt="/demo/assets/command-palette-CfoUFeNA.png",_t="/demo/assets/window-U_tu_MaJ.png",yt={"command-palette.png":gt,"window.png":_t},m=`${A}/Demo`,S=yt,kt=`# About this demo

This is OpenMarkdown itself, running in your browser — not a video, not a
mockup. The same live preview, the same command palette (press \`Cmd+P\`), the
same outline, the same themes.

> [!WARNING]
> **Your writing lives in this browser, and only here.** Files you create or
> edit are stored in this browser's local storage. They never leave your
> device — and they are gone if you clear your browsing data, switch browsers,
> or open the demo on another machine.
>
> To keep your notes, [download the app](https://openmarkdown.dev/#download).
> Your files then live on your own disk, as plain \`.md\` — yours to move,
> back up, and read with anything.

## What this demo cannot do

Two things are missing here, and both are missing for the same reason: a
browser tab has no access to your machine.

- **Opening your own files.** The demo can only see the two files in this
  folder. The desktop app opens any folder on your disk.
- **Working with your coding agent.** This is the part OpenMarkdown exists for:
  your agent edits the same \`.md\` file you are looking at, and you watch it
  happen. That needs a file on a real disk and an agent in a real terminal.

Try pressing anything that looks like it belongs to those two — the app will
tell you where it lives.

## Next

Open \`Welcome.md\` in the sidebar. It is the same guide the desktop app opens
on first run: Markdown basics first, then the part about agents.
`,R="openmd.demo.files.v1",vt=2e6;function bt(i,t,n){const e={};for(const s of i.paths())if(s.startsWith(`${t}/`)&&!i.isDir(s)&&!s.includes("/attachments/")&&n(s))try{e[s]=i.readText(s)}catch{}return e}function Ct(i,t,n){try{const e=JSON.stringify(bt(i,t,n));if(e.length>vt)return;localStorage.setItem(R,e)}catch{}}function St(){try{const i=localStorage.getItem(R);if(!i)return null;const t=JSON.parse(i);if(!t||typeof t!="object"||Array.isArray(t))return null;const n={};for(const[e,s]of Object.entries(t))typeof s=="string"&&(n[e]=s);return n}catch{return null}}class c extends Error{code;params;constructor(t,n={}){super(`${t} ${JSON.stringify(n)}`),this.code=t,this.params=n}toWire(){return{code:this.code,params:this.params}}}function u(i){const t=i.replace(/\/+$/,"");return t===""?"/":t}function w(i){const t=u(i),n=t.lastIndexOf("/");return n<0?"":n===0?"/":t.slice(0,n)}function At(i){return mt(i)}function v(i,t){return i===".git"||i==="node_modules"?!1:t||At(i)}const Tt=1e4;class xt{nodes=new Map;constructor(){this.nodes.set("/",{kind:"dir"})}reset(){this.nodes.clear(),this.nodes.set("/",{kind:"dir"})}paths(){return[...this.nodes.keys()].sort()}exists(t){return this.nodes.has(u(t))}isDir(t){return this.nodes.get(u(t))?.kind==="dir"}mkdirp(t){const n=u(t);if(n==="/"||n==="")return;const e=n.split("/").filter(Boolean);let s="";for(const o of e){s=`${s}/${o}`;const l=this.nodes.get(s);if(l===void 0)this.nodes.set(s,{kind:"dir"});else if(l.kind!=="dir")throw new c("CREATE_DIR_FAILED",{path:s,detail:"not a directory"})}}readText(t){const n=u(t),e=this.nodes.get(n);if(e===void 0)throw new c("READ_FAILED",{path:n,detail:"no such file"});if(e.kind!=="file")throw new c("READ_FAILED",{path:n,detail:"not a UTF-8 file"});return e.text}readBytes(t){const n=u(t),e=this.nodes.get(n);if(e?.kind!=="bin")throw new c("READ_FAILED",{path:n,detail:"no such binary file"});return e.bytes}writeText(t,n){const e=u(t);this.mkdirp(w(e)),this.nodes.set(e,{kind:"file",text:n})}writeBytes(t,n){const e=u(t);this.mkdirp(w(e)),this.nodes.set(e,{kind:"bin",bytes:n})}createNote(t){const n=u(t);if(this.nodes.has(n))throw new c("CREATE_FAILED",{path:n,detail:"file exists"});this.writeText(n,"")}createFolder(t){const n=u(t);if(this.nodes.has(n))throw new c("CREATE_FOLDER_FAILED",{path:n,detail:"file exists"});this.mkdirp(n)}homeListDir(t){const n=u(t);if(!this.isDir(n))throw new c("LIST_DIR_FAILED",{path:n,detail:"not a directory"});const e=n==="/"?"/":`${n}/`,s=[];for(const[o,l]of this.nodes){if(o===n||!o.startsWith(e))continue;const d=o.slice(e.length);if(d.includes("/"))continue;const f=l.kind==="dir";v(d,f)&&s.push({name:d,path:o,is_dir:f})}return s.sort((o,l)=>Number(l.is_dir)-Number(o.is_dir)||(o.name<l.name?-1:o.name>l.name?1:0)),s}homeFiles(t,n=Tt){const e=u(t);if(!this.isDir(e))throw new c("LIST_DIR_FAILED",{path:e,detail:"not a directory"});const s=e==="/"?"/":`${e}/`,o=[];for(const[l,d]of this.nodes){if(d.kind==="dir"||!l.startsWith(s))continue;const f=l.slice(s.length),g=f.split("/"),y=g.pop();g.every(k=>v(k,!0))&&v(y,!1)&&o.push(f)}return o.sort(),o.length>n?{files:o.slice(0,n),truncated:!0}:{files:o,truncated:!1}}rename(t,n){if(n===""||n.includes("/")||n.includes(":"))throw new c("INVALID_NAME",{name:n});const e=u(t);if(!this.nodes.has(e))throw new c("RENAME_FAILED",{path:e,detail:"no such file"});const s=w(e),o=s==="/"?`/${n}`:`${s}/${n}`;if(this.nodes.has(o))throw new c("NAME_EXISTS",{name:n});return this.movePrefix(e,o),o}trash(t){const n=u(t);if(!this.nodes.has(n))throw new c("TRASH_FAILED",{path:n,detail:"no such file"});for(const e of[...this.nodes.keys()])(e===n||e.startsWith(`${n}/`))&&this.nodes.delete(e)}movePrefix(t,n){for(const e of[...this.nodes.keys()]){if(e!==t&&!e.startsWith(`${t}/`))continue;const s=this.nodes.get(e);this.nodes.delete(e),this.nodes.set(n+e.slice(t.length),s)}}}const Et=[],It=`# Welcome to OpenMarkdown

This is a plain \`.md\` file on your disk — OpenMarkdown just shows it. Edit
anything here; it's yours.

- **Part one — How to write Markdown**. Five minutes.
- **Part two — you and your agent.** Connect it, then work on one file together.

---

## 1. Write

Type markdown and it renders as you go. Put the cursor on anything to see its
source again.

| Type | You get | Or press |
| --- | --- | --- |
| \`#\` to \`######\` | a heading, six levels | |
| \`**bold**\` | **bold** | \`⌘B\` |
| \`*italic*\` | *italic* | \`⌘I\` |
| \\\`code\\\` | \`code\` | \`⌘E\` |
| \`[text](url)\` | a link — ⌘-click to open | \`⌘K\` |
| \`[[\` | a link to another note — pick from your files | |
| \`- \` or \`1. \` | a list | |
| \`- [ ] \` | a checkbox | |
| \`> \` | a quote | |

Try a few on the line below:



Hover any heading and click the triangle on its left to fold it. The **outline**
on the left lists every heading — click one to jump there.

### Bigger blocks

> [!tip]
> A **callout**. Change \`tip\` to \`warning\` and watch it change.
> Five kinds: \`note\` · \`tip\` · \`important\` · \`warning\` · \`caution\`.

| Plan | Owner | Done |
| --- | --- | --- |
| Draft the page | me | |
| Pick a photo | me | |

Click a cell to edit it: \`Tab\` moves across, \`Enter\` adds a row.

\`\`\`html
<h1>Hi, I'm building this page</h1>
\`\`\`

Code highlights itself; the copy button is in the corner.

**Images:** drag or paste one in — it's saved next to this file. Right-click it
→ **View beside** to see it at full size.

Need any of these without remembering the syntax? \`⌘⇧P\`, then type "callout"
or "table".

That's the whole idea: **you edit the file, the file is the truth, the app just
shows it.**

## 2. Find anything

One box for everything. It opens on your **files**; with the box empty, \`→\` / \`←\`
switch to \`@\` **headings** in this note and \`>\` **commands**.

![The ⌘P palette](attachments/command-palette.png)

## 3. Shortcuts

| | |
| --- | --- |
| \`⌘P\` · \`⌘⇧P\` | find a file · run a command |
| \`⌘/\` | every shortcut |
| \`⌘S\` · \`⌘F\` | save · find |
| \`⌘T\` · \`⌘W\` · \`⌘⇧T\` | new tab · close tab · bring the last one back |
| \`⌘1\`–\`⌘9\` | jump to a tab |
| \`⌥↑\` / \`⌥↓\` | move a line |
| \`⌘=\` · \`⌘-\` · \`⌘0\` | bigger · smaller · reset text |

## 4. Your window

![The OpenMarkdown window](attachments/window.png)

1. **Left side** — your **Homes**, the **Files** in the current one, and this
   note's **Outline**. \`⌘\\\` hides it all.
2. **Tabs** — one per open note.
3. **Top right** — command palette, view mode (live / source / reading),
   settings, keep-on-top, then the three right-side cards:
   **agent sidebar** (\`⌘⇧A\`), **viewer** for images, **terminal** (\`\` ⌃\` \`\`).

**A home is a folder.** \`⌘⇧O\` opens one; a file you open from outside brings its
folder (or its git repo) along. Click a home to switch — each keeps its own tabs.
\`×\` takes one off the list (your files stay put); \`⌘⇧T\` brings it back.

---

# OpenMarkdown Agent Experience

> [!WARNING]
>  No coding agent? You're all set. ▲
>
> Everything above works on its own. You now know enough to use OpenMarkdown for real.

## Agent Feature Showdown. ▼

> [!NOTE]
> - use Claude Code (or codex, Pi agent or any coding agents)
> - your agent can edit **this same file** alongside you
> - you both share one whiteboard.

## Connect your agent
*About two minutes. Do it once.*

**Step 1 — start it here.** Press \`⌘⇧A\` to open the **agent sidebar**. It lists
every coding agent installed on this Mac; click one. It starts in OpenMarkdown's
own terminal, in the current home's folder, and connects itself. If its
OpenMarkdown plugin is missing, the row says so and installs it when you click —
"See what runs" shows the exact command first.

No agent listed? Install one (for example Claude Code), then come back here.

**Step 2 — the command line (optional).** Turn on **Settings → Command-line tool
(openmd)**. Then from any terminal:

\`\`\`
openmd notes.md      # open a file here (creates it if it doesn't exist)
openmd .             # open a folder as a home
\`\`\`

**Step 3 — an agent in your own terminal (optional).** Prefer your usual terminal
app? Follow [openmarkdown.dev/docs/start/connect](https://openmarkdown.dev/docs/start/connect/).
It can open and edit files here; only an agent started from the sidebar can
talk to you *in* the sidebar.

Connected? Ask your agent: \`Are you connected to OpenMarkdown?\` — it answers with
the app's version and what you have open.

## Two ways to work together

**Ask it** *(you send, it answers)* — paste a prompt into the **agent sidebar**
(\`⌘⇧A\`) and press send — or into your agent's own window, if it runs elsewhere. It
edits *this* file and you watch the change land. Most sections below work this
way — each has a prompt to copy.

**Let it watch** *(it comes to you)* — tell your agent to *watch* this file (on Claude
Code: \`/openmarkdown:co-edit\`). Now you hand off work **without leaving OpenMarkdown**:
type \`- [ ] @agent <task>\` right in the file, save, and it does the work and ticks the
box. The last section tries this.

---

## Ask it: talk in the sidebar
*Shows: the agent sidebar — a conversation that never leaves this window.*

Put your cursor in this section, open the sidebar (\`⌘⇧A\`), and send:

\`\`\`
Listen to me here. What is this section for?
\`\`\`

The sidebar attaches **where you are** (file + section), not the text — the agent
reads it fresh. Its replies are short and land in the sidebar; anything worth
keeping it writes into the file. The chat itself is not saved.

(On Claude Code, \`/openmarkdown:listen\` starts listening in one step.)

## Ask it: build the hero
*Shows: your agent writing into this file — you watch it appear.*

Copy this to your agent:

\`\`\`
Write a punchy hero headline and a one-line subtitle into the
"Ask it: build the hero" section of this file.
\`\`\`

<!-- your agent writes here — you'll see the text appear as it types -->

## Ask it: turn CSV into a table
*Shows: your agent reading what you highlight, then editing the file.*

A color palette as raw CSV. **Highlight it**, switch to your agent, and paste:

name,hex,use
ink,#1a1a2e,headings
sky,#4ea8de,links
paper,#f7f7f2,background

\`\`\`
Turn the CSV I just highlighted into a markdown table.
\`\`\`

## Ask it: punch up the copy
*Shows: your agent rewriting what you highlight.*

A rough draft of the page's intro. **Highlight it** and paste:

> Hi welcome to my website. It is a website that I made. Here you can find
> information about me and also how to contact me if you want to.

\`\`\`
Rewrite the text I highlighted to be punchier — two short sentences.
\`\`\`

## Ask it: jump me to a section
*Shows: reveal — your agent scrolls your view to a spot.*

Long note? Ask your agent (any heading works):

\`\`\`
Take me to where we build the hero.
\`\`\`

## Ask it: make a checklist
*Shows: you and your agent thinking together through a file — the whole point.*

Turn all of this into a plan you can act on:

\`\`\`
List the steps to actually ship this web page as a checklist,
put it in a new file, and open it for me.
\`\`\`

Then tick the boxes it made. Change your mind? Edit them and ask it to react — you're
working the same file from both sides.

## Let it watch: hand off a task
*Shows: the **live** mode — the agent watches this file; you hand off work inside it, no window switch.*

First, put your agent in watch mode:

\`\`\`
Co-edit this file and pick up any @agent tasks I leave in it.
\`\`\`

(On Claude Code, \`/openmarkdown:co-edit\` does this in one step.)

Now drop a task right into the file and save — it does the work and ticks the box.
Uncomment this (or write your own with \`⌘⇧P\` → *Insert @agent task*):

<!-- - [ ] @agent add a simple footer with a copyright line to the code block above -->

---

## Bonus: write your agent's prompts in OpenMarkdown
*Shows: \`$VISUAL\` / \`$EDITOR\` hand-off.*

In **Settings**, enable the **\`$VISUAL\` editor**. Then in your terminal (or Claude
Code) hit \`⌃G\` to compose your prompt here instead of the cramped input line —
\`⌘↩\` when you're done. Go back and forth as many times as you like.

---

## Come back any time
*This guide is just a file. Nothing to reinstall, nothing hidden.*

Reopen it whenever you want, three ways:

- **Command palette** (\`⌘P\`) → **Open Welcome guide**
- **Settings** → **Open Welcome guide**
- Or open the file directly: **\`~/OpenMarkdown/Welcome.md\`**

It lives on disk like any other note — feel free to edit it, keep notes in it, or
delete it. We'll never overwrite your changes.
`,Ot=["png","jpg","jpeg","gif","svg","webp"];function x(i){const t=i.split(".").pop()?.toLowerCase();return t!==void 0&&Ot.includes(t)}class Dt{constructor(t,n="test"){this.fs=t,this.mode=n}fs;mode;unloaded=new Set;seedPaths(){return this.mode!=="demo"?Et:[`${m}/About this demo.md`,`${m}/Welcome.md`,...Object.keys(S).map(t=>`${m}/attachments/${t}`)]}seed(){this.unloaded.clear(),this.fs.mkdirp(A),this.mode==="demo"&&this.fs.mkdirp(`${m}/attachments`);for(const t of this.seedPaths())x(t)?this.fs.writeBytes(t,new Uint8Array):this.fs.writeText(t,""),this.unloaded.add(t)}paths(){return[...this.seedPaths()]}async ensureLoaded(t){if(!this.unloaded.has(t))return;if(this.unloaded.delete(t),this.mode==="demo"){await this.loadDemoPath(t);return}const n=await fetch(t);if(!n.ok)throw new c("READ_FAILED",{path:t,detail:`dev server ${n.status}`});x(t)?this.fs.writeBytes(t,new Uint8Array(await n.arrayBuffer())):this.fs.writeText(t,await n.text())}async loadDemoPath(t){const n=t.slice(t.lastIndexOf("/")+1);if(t.includes("/attachments/")){const e=await fetch(S[n]??"");if(!e.ok)throw new c("READ_FAILED",{path:t,detail:`dev server ${e.status}`});this.fs.writeBytes(t,new Uint8Array(await e.arrayBuffer()));return}if(n==="Welcome.md"){this.fs.writeText(t,await this.welcomeTemplate());return}this.fs.writeText(t,kt)}isPlaceholder(t){return this.unloaded.has(t)}markWritten(t){this.unloaded.delete(t)}async welcomeTemplate(){return It}}class Rt{callbacks=new Map;nextCallbackId=1;listeners=new Map;nextEventId=1;transformCallback(t,n=!1){const e=this.nextCallbackId++;return this.callbacks.set(e,{fn:t??(()=>{}),once:n}),e}unregisterCallback(t){this.callbacks.delete(t)}listen(t,n){let e=this.listeners.get(t);return e||(e=new Set,this.listeners.set(t,e)),e.add(n),this.nextEventId++}unregisterListener(t,n){const e=this.listeners.get(t);if(e){for(const s of[...e])this.eventIdOf.get(s)===n&&e.delete(s);e.size===0&&this.listeners.delete(t)}}eventIdOf=new Map;pair(t,n){this.eventIdOf.set(t,n)}emit(t,n){const e=this.listeners.get(t);if(!e)return 0;let s=0;for(const o of[...e]){const l=this.callbacks.get(o);if(!l)continue;const d={event:t,id:this.eventIdOf.get(o)??o,payload:n};l.fn(d),s++,l.once&&this.callbacks.delete(o)}return s}activeEvents(){return[...this.listeners.keys()].sort()}reset(){this.callbacks.clear(),this.listeners.clear(),this.eventIdOf.clear()}}const Pt="HARNESS_UNSUPPORTED",P={sync_tray_state:"native tray",relaunch:"native process restart",relaunch_for_update:"native process restart","plugin:window|close":"native window","plugin:window|set_always_on_top":"native window",install_cli:"writes to the host filesystem",uninstall_cli:"writes to the host filesystem",install_visual:"writes to the host filesystem",uninstall_visual:"writes to the host filesystem",visual_status:"probes the host filesystem",agent_editor_status:"probes the host filesystem",agent_editor_enable:"writes to the host filesystem",agent_editor_disable:"writes to the host filesystem",desktop_app_connect:"writes another app's settings",desktop_app_disconnect:"writes another app's settings",default_app_status:"OS document-type registration",set_default_app:"OS document-type registration",revert_default_app:"OS document-type registration",open_external:"native shell open",reveal_in_file_manager:"native file manager",share_file:"native share sheet",export_pdf:"native print-to-file","plugin:dialog|open":"native file picker",update_attempt:"signed release feed",session_complete:"unix socket bridge",reveal_complete:"unix socket bridge",report_workspace_state:"unix socket bridge",bridge_response:"unix socket bridge",sidebar_send:"unix socket bridge",terminal_open:"native PTY",terminal_write:"native PTY",terminal_resize:"native PTY",terminal_attach:"native PTY",app_quit:"native process",quit_confirmed:"native process",watch_file:"no filesystem watcher in a browser",unwatch_file:"no filesystem watcher in a browser",spell_check_paragraphs:"native spell checker",spell_suggestions:"native spell checker",spell_close_document:"native spell checker"},Lt={terminal_open:"cta",sidebar_send:"cta",install_cli:"cta",uninstall_cli:"cta","plugin:window|set_always_on_top":"cta","plugin:dialog|open":"cta",set_default_app:"cta",revert_default_app:"cta",install_visual:"hide",uninstall_visual:"hide",agent_editor_enable:"hide",agent_editor_disable:"hide",desktop_app_connect:"hide",desktop_app_disconnect:"hide",reveal_in_file_manager:"hide",share_file:"hide",export_pdf:"hide","plugin:window|close":"hide",relaunch_for_update:"hide",app_quit:"hide",quit_confirmed:"hide",spell_check_paragraphs:"hide",spell_suggestions:"hide",spell_close_document:"hide",open_external:"native",relaunch:"native",default_app_status:"mute",visual_status:"mute",agent_editor_status:"mute",sync_tray_state:"mute",update_attempt:"mute",terminal_write:"mute",terminal_resize:"mute",terminal_attach:"mute",watch_file:"mute",unwatch_file:"mute",bridge_response:"mute",session_complete:"mute",reveal_complete:"mute",report_workspace_state:"mute"},Mt={default_app_status:{is_default:!1,has_previous:!1},visual_status:{state:"not_configured",paths:[]},agent_editor_status:[],update_attempt:{outcome:"no_update"},sync_tray_state:null,watch_file:null,unwatch_file:null,bridge_response:null,session_complete:null,reveal_complete:null,report_workspace_state:null},Ft=new Set(["write_file","create_note","create_folder","rename_path","trash_path","write_attachment"]);function Nt(i){let t;try{t=new URL(typeof i=="string"?i:"")}catch{return{outcome:"refused",reason:"malformed",scheme:null}}return t.protocol!=="https:"&&t.protocol!=="http:"?{outcome:"refused",reason:"scheme",scheme:t.protocol.replace(/:$/,"")}:(window.open(t.href,"_blank","noopener,noreferrer"),{outcome:"opened"})}function E(i){return Lt[i]}function _(i){return{code:Pt,params:{command:i,reason:P[i]??"not implemented in the browser harness"}}}function I(){return{resident:!0,language:null,theme:null,scratch_dir:null,welcome_seed_rev:0,preferred_agent:null,check_spelling:!1,last_seen_version:null,setup_card_rev:0,chat_apps_card_seen:!1,update_source_memory:{last_good:null,last_good_failed:!1},update_fail_notice:null}}function b(i){return T(i)??T(typeof navigator>"u"?null:navigator.language)??"en"}function Wt(i){let t=0xcbf29ce484222325n;const n=0xffffffffffffffffn;for(const e of i)t=(t^BigInt(e))&n,t=t*0x100000001b3n&n;return t}function O(i){const t=i.toLowerCase();return t==="jpeg"||t==="jpg"?"jpg":t==="svg+xml"||t==="svg"?"svg":t}function $t(i){const t=(i??"").trim();if(t.startsWith("image/"))return O(t.slice(6));const n=t.lastIndexOf(".");if(n>=0){const e=t.slice(n+1);if(e.length>0&&e.length<=5&&/^[a-zA-Z0-9]+$/.test(e))return O(e)}return"png"}function Ht(){const i=new Date,t=n=>String(n).padStart(2,"0");return`${i.getFullYear()}-${t(i.getMonth()+1)}-${t(i.getDate())}`}function Ut(i,t){const e={claude:{via:"plugin",install:["claude plugin marketplace add OpenMarkdown-dev/OpenMarkdown-releases","claude plugin install openmarkdown@openmarkdown"],enable:["claude plugin enable openmarkdown@openmarkdown"],undo:"claude plugin uninstall openmarkdown@openmarkdown"},codex:{via:"mcpServer",install:["codex mcp add openmd -- openmd mcp"],enable:[],undo:"codex mcp remove openmd"}}[i];if(!e)return null;const s=t==="missing"?e.install:t==="disabled"?e.enable:[];return{state:t,commands:s,undo:e.undo,via:e.via}}class Vt{mode;present;fs=new xt;fixtures;events=new Rt;objectUrls=new Map;settings=I();bootedAt=Date.now();startupConsumed=!1;cliInstalled=!1;agentHosts=[];agentSetup={};desktopApps=[];terminalSessions=[];terminalRunning=[];handlers;constructor(t="test"){this.mode=t,this.fixtures=new Dt(this.fs,t),this.handlers=this.buildHandlers(),this.reset(),this.cliInstalled=t==="demo"}reset(){for(const t of this.objectUrls.values())URL.revokeObjectURL(t);this.objectUrls.clear(),this.fs.reset(),this.events.reset(),this.fixtures.seed(),this.mode==="demo"&&this.restoreDemoFiles(),this.settings=I(),this.startupConsumed=!1,this.cliInstalled=this.mode==="demo",this.agentHosts=[],this.agentSetup={},this.desktopApps=[],this.terminalSessions=[],this.terminalRunning=[]}setTerminalSessions(t,n=[]){this.terminalSessions=t.map(e=>({...e})),this.terminalRunning=[...n]}setCliInstalled(t){this.cliInstalled=t}restoreDemoFiles(){const t=St();if(t)for(const[n,e]of Object.entries(t)){const s=n.slice(0,n.lastIndexOf("/"));this.fs.mkdirp(s),this.fs.writeText(n,e),this.fixtures.markWritten(n)}}setRefusalPresenter(t){this.present=t}setAgentHosts(t){this.agentHosts=[...t]}setDesktopApps(t){this.desktopApps=[...t]}setAgentSetup(t,n){this.agentSetup={...this.agentSetup,[t]:n}}coverage(){return{simulated:Object.keys(this.handlers).sort(),refused:Object.entries(P).map(([t,n])=>({command:t,reason:n,tier:E(t)})).sort((t,n)=>t.command<n.command?-1:1)}}simulatedCommands(){return Object.keys(this.handlers).sort()}async invoke(t,n={}){this.invocations.set(t,(this.invocations.get(t)??0)+1),this.lastArgs.set(t,n);const e=this.handlers[t];if(!e){if(this.mode==="demo"){const s=E(t)??"cta";if(s==="mute")return Mt[t]??null;if(s==="native")return this.nativeEquivalent(t,n);throw this.present?.(t,s),{..._(t),presented:!0}}throw _(t)}try{const s=await e(n);return this.mode==="demo"&&Ft.has(t)&&Ct(this.fs,m,o=>!this.fixtures.isPlaceholder(o)),s}catch(s){throw s instanceof c?s.toWire():s}}nativeEquivalent(t,n){if(t==="relaunch")return location.reload(),null;if(t==="open_external")return Nt(n.url);throw _(t)}assetUrl(t){const n=this.objectUrls.get(t);if(n)return n;if(t.startsWith("/fixtures/"))return t;if(this.mode==="demo"){const e=t.slice(t.lastIndexOf("/")+1),s=S[e];if(s&&t.includes("/attachments/"))return s}try{const e=this.fs.readBytes(t),s=URL.createObjectURL(new Blob([e]));return this.objectUrls.set(t,s),s}catch{return t}}windowTitles=[];invocations=new Map;lastArgs=new Map;homeVersions=new Map;homeVersion(t){return this.homeVersions.get(t)??1}windowTheme(){return this.settings.theme==="dark"||this.settings.theme==="light"?this.settings.theme:typeof matchMedia=="function"&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}scratchDir(){return this.mode==="demo"?m:this.settings.scratch_dir??A}async readFileContent(t){return await this.fixtures.ensureLoaded(t),{path:t,content:this.fs.readText(t)}}buildHandlers(){const t=this.fs;return{startup_elapsed_ms:()=>Date.now()-this.bootedAt,startup_kind:()=>this.startupConsumed?"hot":(this.startupConsumed=!0,"cold"),app_channel:()=>this.mode==="demo"?{channel:"release",productName:"OpenMarkdown",updates:!0}:{channel:"dev",productName:"OpenMarkdown Dev",updates:!1},perf_log:n=>(this.mode==="demo"||console.debug("[harness perf]",n.line),null),cli_status:()=>({installed:this.cliInstalled,paths:this.cliInstalled?["/usr/local/bin/openmd"]:[]}),bundled_cli_status:()=>({installed:this.cliInstalled}),desktop_apps:()=>this.desktopApps,agent_profiles:()=>[...[{id:"claude",name:"Claude Code",command:"claude '/openmarkdown:listen'",resumable:!0},{id:"codex",name:"Codex",command:"codex '<bootstrap>'",resumable:!1},{id:"gemini",name:"Gemini CLI",command:"gemini -i '<bootstrap>'",resumable:!1},{id:"opencode",name:"opencode",command:"opencode run '<bootstrap>'",resumable:!1}].map(e=>{const s=this.agentHosts.includes(e.id),o=this.agentSetup[e.id];return{...e,kind:"agent",installed:s,setup:s&&o?Ut(e.id,o):null}}),{id:"shell",name:"shell",kind:"shell",installed:!0,resumable:!1,command:""}],agent_states:()=>[],session_attention:()=>({version:0,rows:[]}),session_attention_seen:()=>null,terminal_list:()=>this.terminalSessions.map(n=>({...n})),terminal_running:()=>[...this.terminalRunning],terminal_close:n=>{const e=n.id;return this.terminalSessions=this.terminalSessions.filter(s=>s.id!==e),this.terminalRunning=this.terminalRunning.filter(s=>s!==e),null},capabilities:()=>({agentBridge:this.mode==="demo"}),feedback_context:()=>({version:"0.0.0-harness",os:`${navigator.platform||"browser"} (harness)`,channel:"dev",language:b(this.settings.language)}),paths_exist:n=>n.paths.map(e=>t.exists(e)),git_root_of:n=>{const e=n.path;let s=t.isDir(e)?e:w(e);for(;;){if(t.exists(`${s==="/"?"":s}/.git`))return{path:e,root:s};if(s==="/"||s==="")return{path:e,root:null};s=w(s)}},default_home_dir:()=>this.scratchDir(),is_dir:n=>t.isDir(n.path),read_file:n=>this.readFileContent(n.path),open_image:n=>{const e=n.path;if(wt(e)!=="image")throw{code:"NOT_AN_IMAGE",params:{path:e}};if(!t.exists(e)||t.isDir(e))throw{code:"READ_FAILED",params:{path:e,detail:"not found"}};return{path:e}},write_file:n=>{const e=n.path;t.writeText(e,n.content),this.fixtures.markWritten(e)},home_list_dir:n=>{const e=n.root,s=n.dir;if(s!==e&&!s.startsWith(`${e==="/"?"":e}/`))throw new c("NOT_IN_HOME",{path:s,root:e});return t.homeListDir(s)},home_files:n=>({...t.homeFiles(n.root),version:this.homeVersion(n.root)}),home_refresh:n=>{const e=n.root,s=n.dir??null,o=this.homeVersion(e)+1;this.homeVersions.set(e,o),this.events.emit("om:home-changed",{root:e,version:o,dirs:[s??e],all:s===null})},create_note:n=>{const e=n.path;t.createNote(e),this.fixtures.markWritten(e)},create_folder:n=>t.createFolder(n.path),trash_path:n=>t.trash(n.path),rename_path:n=>t.rename(n.path,n.newName),write_attachment:n=>{const e=n.docPath,s=Uint8Array.from(n.bytes),o=`${w(e)}/attachments`,l=`img-${Wt(s).toString(16).padStart(16,"0")}.${$t(n.hint)}`,d=`${o}/${l}`;return t.exists(d)||t.writeBytes(d,s),`attachments/${l}`},open_scratch_note:async()=>{const n=`${this.scratchDir()}/${Ht()}.md`;return t.exists(n)||(t.writeText(n,""),this.fixtures.markWritten(n)),this.readFileContent(n)},open_welcome_note:async()=>{const n=`${this.scratchDir()}/Welcome.md`;return t.exists(n)||(t.writeText(n,await this.fixtures.welcomeTemplate()),this.fixtures.markWritten(n)),this.readFileContent(n)},welcome_startup:async()=>{if(this.mode==="demo"||this.settings.welcome_seed_rev>=1)return null;const n=`${this.scratchDir()}/Welcome.md`;return t.exists(n)||(t.writeText(n,await this.fixtures.welcomeTemplate()),this.fixtures.markWritten(n)),this.readFileContent(n)},mark_welcome_seeded:()=>{this.settings.welcome_seed_rev=1},get_settings:()=>({...this.settings}),patch_settings:n=>{const e=n.patch;for(const s of Object.keys(e))if(!(s in this.settings))throw{code:"UNKNOWN_SETTING",params:{key:s}};return this.settings={...this.settings,...e},this.events.emit("om:settings-changed",{...this.settings}),{...this.settings}},get_language:()=>b(this.settings.language),resolve_language:n=>b(n.pref),take_pending_open:()=>[],take_pending_actions:()=>[],"plugin:event|listen":n=>{const e=n.handler,s=this.events.listen(n.event,e);return this.events.pair(e,s),s},"plugin:event|unlisten":()=>{},"plugin:event|emit":n=>{this.events.emit(n.event,n.payload)},"plugin:event|emit_to":n=>{this.events.emit(n.event,n.payload)},"plugin:app|version":()=>"0.0.0-harness","plugin:path|resolve_directory":n=>{if(n.directory===21)return D;throw _(`plugin:path|resolve_directory(${String(n.directory)})`)},"plugin:window|theme":()=>this.windowTheme(),"plugin:window|set_title":n=>(this.windowTitles.push(String(n.value)),null)}}}const C="main";function jt(i){window.__TAURI_INTERNALS__={invoke:(t,n)=>i.invoke(t,n??{}),transformCallback:(t,n=!1)=>i.events.transformCallback(t,n),unregisterCallback:t=>i.events.unregisterCallback(t),convertFileSrc:t=>i.assetUrl(t),metadata:{currentWindow:{label:C},currentWebview:{windowLabel:C,label:C}},plugins:{path:{sep:"/",delimiter:":"}}},window.__TAURI_EVENT_PLUGIN_INTERNALS__={unregisterListener:(t,n)=>i.events.unregisterListener(t,n)}}function Bt(i){typeof matchMedia=="function"&&matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{i.events.emit("tauri://theme-changed",i.windowTheme())})}let L="test";function Yt(i){L=i.mode;const t={backend:i,mode:i.mode,reset:()=>i.reset(),coverage:()=>i.coverage(),fixturePaths:()=>i.fixtures.paths(),agentSidebar:()=>{const e=h.agentSidebar;if(!e)throw new Error("agent sidebar store not warmed");const s=e.useAgentSidebarStore;return{...s.getState(),threadOf:o=>s.getState().threads[o]??[],homeNeedsYou:o=>h.homeAttention?.useHomeAttention.getState().lit[o]===!0}},editorView:()=>{const e=h.editorRegistry;return e?e.getActiveEditor()?.view??null:null},commands:()=>{const e=h.commands;return e?e.listCommands().map(s=>{const o=e.commandGate(s);return{id:s.id,title:s.title(),state:o.state,...o.state==="disabled"?{reason:o.reason}:{}}}):[]},runCommand:(e,s)=>h.commands?.runCommand(e,s)??!1,openPath:async e=>{const{useWorkspaceStore:s}=await p(async()=>{const{useWorkspaceStore:o}=await import("./workspace-SWs7mUV7.js").then(l=>l.w);return{useWorkspaceStore:o}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]));await s.getState().openPath(e,{pin:!0})},emit:(e,s)=>i.events.emit(e,s),activeEvents:()=>i.events.activeEvents(),runCase:async e=>{const{editorGeometryCase:s,contextMenuCase:o,listIndentCase:l,listRenderCase:d,listFoldCase:f,longDocumentCase:g,insetsCase:y,tableUndoCase:k,tableLocalityCase:M,blockArrowsCase:F,nestedIsolationCase:N,tableArrowsCase:W,propertiesCase:$,openSafetyCase:H,agentSidebarCase:U,intercomTwoWaysCase:V,settingsShapeCase:j,panelRegionsCase:B,homesCase:Y,emptyStateCase:z,terminalHostCase:G,flatStatesCase:q,panelChromeCase:X,emptyHintCentredCase:J,chromeFollowupsCase:K,intercomAgentPickerCase:Z,controlRulerCase:Q,paletteOpenCase:ee,panelOpenCase:te,renderFallbackCase:ne,mermaidRenderCase:se,strikeMarksCase:ie,editorDialectCase:oe,cellTreeCase:ae,cellFixesCase:re,selectionPaintCase:le,imageSizeCase:de,calloutSuffixCase:he,tableCellImagesCase:ce,spellcheckCase:ue,tabStateCase:pe,caretRulesCase:fe,whatsNewCase:me,setupCardCase:we,tooltipCase:ge,codeFontCase:_e,listCaretHomeCase:ye,viewerCase:ke}=await p(async()=>{const{editorGeometryCase:ve,contextMenuCase:be,listIndentCase:Ce,listRenderCase:Se,listFoldCase:Ae,longDocumentCase:Te,insetsCase:xe,tableUndoCase:Ee,tableLocalityCase:Ie,blockArrowsCase:Oe,nestedIsolationCase:De,tableArrowsCase:Re,propertiesCase:Pe,openSafetyCase:Le,agentSidebarCase:Me,intercomTwoWaysCase:Fe,settingsShapeCase:Ne,panelRegionsCase:We,homesCase:$e,emptyStateCase:He,terminalHostCase:Ue,flatStatesCase:Ve,panelChromeCase:je,emptyHintCentredCase:Be,chromeFollowupsCase:Ye,intercomAgentPickerCase:ze,controlRulerCase:Ge,paletteOpenCase:qe,panelOpenCase:Xe,renderFallbackCase:Je,mermaidRenderCase:Ke,strikeMarksCase:Ze,editorDialectCase:Qe,cellTreeCase:et,cellFixesCase:tt,selectionPaintCase:nt,imageSizeCase:st,calloutSuffixCase:it,tableCellImagesCase:ot,spellcheckCase:at,tabStateCase:rt,caretRulesCase:lt,whatsNewCase:dt,setupCardCase:ht,tooltipCase:ct,codeFontCase:ut,listCaretHomeCase:pt,viewerCase:ft}=await import("./cases-D2UdOq-E.js");return{editorGeometryCase:ve,contextMenuCase:be,listIndentCase:Ce,listRenderCase:Se,listFoldCase:Ae,longDocumentCase:Te,insetsCase:xe,tableUndoCase:Ee,tableLocalityCase:Ie,blockArrowsCase:Oe,nestedIsolationCase:De,tableArrowsCase:Re,propertiesCase:Pe,openSafetyCase:Le,agentSidebarCase:Me,intercomTwoWaysCase:Fe,settingsShapeCase:Ne,panelRegionsCase:We,homesCase:$e,emptyStateCase:He,terminalHostCase:Ue,flatStatesCase:Ve,panelChromeCase:je,emptyHintCentredCase:Be,chromeFollowupsCase:Ye,intercomAgentPickerCase:ze,controlRulerCase:Ge,paletteOpenCase:qe,panelOpenCase:Xe,renderFallbackCase:Je,mermaidRenderCase:Ke,strikeMarksCase:Ze,editorDialectCase:Qe,cellTreeCase:et,cellFixesCase:tt,selectionPaintCase:nt,imageSizeCase:st,calloutSuffixCase:it,tableCellImagesCase:ot,spellcheckCase:at,tabStateCase:rt,caretRulesCase:lt,whatsNewCase:dt,setupCardCase:ht,tooltipCase:ct,codeFontCase:ut,listCaretHomeCase:pt,viewerCase:ft}},__vite__mapDeps([17,1,2,18,19,20,3,21,22,23,24,25,10,26,27])),r=n(),a=[];return(e==="editor-geometry"||e==="all")&&a.push(await s(r)),(e==="editor-context-menu"||e==="all")&&a.push(await o(r)),(e==="editor-list-indent"||e==="all")&&a.push(await l(r)),(e==="editor-list-render"||e==="all")&&a.push(await d(r)),(e==="editor-list-fold"||e==="all")&&a.push(await f(r)),(e==="editor-long-document"||e==="all")&&a.push(await g(r)),(e==="editor-insets"||e==="all")&&a.push(await y(r)),(e==="workspace-open-safety"||e==="all")&&a.push(await H(r)),(e==="editor-table-undo"||e==="all")&&a.push(await k(r)),(e==="editor-table-locality"||e==="all")&&a.push(await M(r)),(e==="editor-block-arrows"||e==="all")&&a.push(await F(r)),(e==="editor-nested-isolation"||e==="all")&&a.push(await N(r)),(e==="editor-table-arrows"||e==="all")&&a.push(await W(r)),(e==="editor-properties"||e==="all")&&a.push(await $(r)),(e==="agent-sidebar"||e==="all")&&a.push(await U(r)),(e==="intercom-two-ways"||e==="all")&&a.push(await V(r)),(e==="settings-shape"||e==="all")&&a.push(await j(r)),(e==="panel-regions"||e==="all")&&a.push(await B(r)),(e==="workspace-homes"||e==="all")&&a.push(await Y(r)),(e==="workspace-empty-state"||e==="all")&&a.push(await z(r)),(e==="terminal-host"||e==="all")&&a.push(await G(r)),(e==="flat-states"||e==="all")&&a.push(await q(r)),(e==="panel-chrome"||e==="all")&&a.push(await X(r)),(e==="empty-hint-centred"||e==="all")&&a.push(await J(r)),(e==="chrome-followups"||e==="all")&&a.push(await K(r)),(e==="intercom-agent-picker"||e==="all")&&a.push(await Z(r)),(e==="control-ruler"||e==="all")&&a.push(await Q(r)),(e==="palette-open"||e==="all")&&a.push(await ee(r)),(e==="panel-open"||e==="all")&&a.push(await te(r)),(e==="render-fallback"||e==="all")&&a.push(await ne(r)),(e==="mermaid-render"||e==="all")&&a.push(await se(r)),(e==="strike-marks"||e==="all")&&a.push(await ie(r)),(e==="editor-dialect"||e==="all")&&a.push(await oe(r)),(e==="cell-tree"||e==="all")&&a.push(await ae(r)),(e==="editor-cell-fixes"||e==="all")&&a.push(await re(r)),(e==="selection-paint"||e==="all")&&a.push(await le(r)),(e==="image-size"||e==="all")&&a.push(await de(r)),(e==="callout-suffix"||e==="all")&&a.push(await he(r)),(e==="table-cell-images"||e==="all")&&a.push(await ce(r)),(e==="spellcheck"||e==="all")&&a.push(await ue(r)),(e==="tab-state"||e==="all")&&a.push(await pe(r)),(e==="caret-rules"||e==="all")&&a.push(await fe(r)),(e==="whats-new"||e==="all")&&a.push(await me(r)),(e==="setup-card"||e==="all")&&a.push(await we(r)),(e==="tooltip"||e==="all")&&a.push(await ge(r)),(e==="code-font"||e==="all")&&a.push(await _e(r)),(e==="list-caret-home"||e==="all")&&a.push(await ye(r)),(e==="viewer"||e==="all")&&a.push(await ke(r)),a}};function n(){return{openPath:t.openPath,runCommand:t.runCommand,exists:e=>i.fs.exists(e),removeFile:e=>i.fs.trash(e),writeFile:(e,s)=>i.fs.writeText(e,s),readFile:e=>i.fs.readText(e),view:()=>{const e=t.editorView();if(!e)throw new Error("no active editor after opening the case fixture");return e},agentSidebar:t.agentSidebar,emit:(e,s)=>{i.events.emit(e,s)},regions:()=>{const e=h.workspace?.useWorkspaceStore,s=h.panelLayout?.usePanelLayoutStore;if(!e||!s)throw new Error("region stores not warmed");return{memory:()=>{const o=e.getState();return{...o.regions,folded:[...o.regions.folded,...o.windowFolded]}},toggleLeft:o=>e.getState().toggleSidebar(o),setPanelOpen:(o,l)=>e.getState().setPanelOpen(o,l),setPanelFolded:(o,l)=>e.getState().setPanelFolded(o,l),widths:()=>s.getState().regionWidth,setWidth:(o,l)=>s.getState().setRegionWidth(o,l)}},setCliInstalled:e=>i.setCliInstalled(e),invocations:e=>i.invocations.get(e)??0,lastArgs:e=>i.lastArgs.get(e),windowTitles:()=>[...i.windowTitles],setAgentHosts:e=>i.setAgentHosts(e),setAgentSetup:(e,s)=>i.setAgentSetup(e,s),setDesktopApps:e=>i.setDesktopApps(e),openSettings:()=>h.settingsPanel?.useSettingsPanelStore.getState().openSettings(),closeSettings:()=>h.settingsPanel?.useSettingsPanelStore.getState().closeSettings(),terminal:()=>{const e=h.terminal?.useTerminalStore,s=h.terminalMemory;if(!e||!s)throw new Error("terminal store not warmed");return{seed:async(o,l=[])=>{i.setTerminalSessions(o,l),e.setState({sessions:[],selected:{},selectedAgent:{}}),e.getState().sync(o.map(d=>({...d}))),await new Promise(d=>setTimeout(d,40))},storeIds:()=>e.getState().sessions.map(o=>o.id),selected:o=>e.getState().selected[o],selectedAgent:o=>e.getState().selectedAgent[o],remember:(o,l)=>{for(const d of s.readTerminals(o))s.forgetTerminal(o,d);for(const d of l)s.rememberTerminal(o,d);e.getState().loadRemembered(o)}}}}}t.caseContext=n,window.__OPENMD_HARNESS__=t}const h={};async function Xt(){h.editorRegistry=await p(()=>import("./editorRegistry-DArHh_4a.js").then(i=>i.k),__vite__mapDeps([28,19,1,2,14,29])),h.commands=await p(()=>import("./commands-9QMTV2_K.js").then(i=>i.i),__vite__mapDeps([30,23,18,19,1,2,28,14,29])),h.agentSidebar=await p(()=>import("./agentSidebar-D6RxzVJO.js").then(i=>i.k),__vite__mapDeps([13,1,2,9,3,14])),h.settingsPanel=await p(()=>import("./settingsPanel-DQwMWEVM.js"),__vite__mapDeps([31,1,2])),h.workspace=await p(()=>import("./workspace-SWs7mUV7.js").then(i=>i.w),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])),h.panelLayout=await p(()=>import("./panelLayout-B2huy2Ci.js").then(i=>i.O),__vite__mapDeps([5,6,7,1,2,8,9,3,10,11,12,13,14])),h.terminal=await p(()=>import("./terminal-LoosSRh-.js"),__vite__mapDeps([8,1,2,9,3,7])),h.terminalMemory=await p(()=>import("./terminalMemory-gMdEQhU7.js").then(i=>i.d),[]),h.homeAttention=await p(()=>import("./homeAttention-D7nPNTVf.js"),__vite__mapDeps([32,1,2])),L==="demo"&&await zt()}async function zt(){const{useWorkspaceStore:i}=await p(async()=>{const{useWorkspaceStore:t}=await import("./workspace-SWs7mUV7.js").then(n=>n.w);return{useWorkspaceStore:t}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]));await i.getState().openFolder(m),await i.getState().openPath(`${m}/About this demo.md`,{pin:!0})}async function Jt(i="test"){const t=new Vt(i);if(i==="demo"){const{installCta:s,showCta:o}=await p(async()=>{const{installCta:d,showCta:f}=await import("./cta-AFwIixz_.js");return{installCta:d,showCta:f}},__vite__mapDeps([33,1,2,34,35,22,23,36,37,38])),{installMobileBlock:l}=await p(async()=>{const{installMobileBlock:d}=await import("./mobileBlock-Hg2PvLSa.js");return{installMobileBlock:d}},__vite__mapDeps([39,1,2,37,35,22,23,38]));s(),l(),t.setRefusalPresenter((d,f)=>{f==="cta"&&o(d)})}jt(t),Bt(t),Yt(t);const{simulated:n,refused:e}=t.coverage();if(i==="demo"){console.info("OpenMarkdown demo — this is the real editor with a simulated filesystem. Your files live in this browser only. https://openmarkdown.dev");return}console.info(`[harness] simulated backend installed (${t.mode}) — ${n.length} commands simulated, ${e.length} refused. window.__OPENMD_HARNESS__ for the probe; refusals are deliberate (see openspec/specs/browser-harness).`)}export{Jt as installHarness,Xt as warmHarness};
