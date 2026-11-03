const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/workspace-Fb3tYCba.js","assets/index-CNKzQmxV.js","assets/index-BCMDZ5-v.css","assets/homeModel-CpjfSJJf.js","assets/event-Bd6TOq0x.js","assets/tabStates-BYyahu9m.js","assets/panelLayout-B0T2ZRvm.js","assets/home-BsJlynsm.js","assets/terminalMemory-BVCaXxke.js","assets/terminal-BUzfrMhi.js","assets/agentState-B09nOn2y.js","assets/uiState-DEzlRcYa.js","assets/layout-Dwqz5YFl.js","assets/lazySurface-CxRR0EeQ.js","assets/agentSidebar-BSRGY5r4.js","assets/presence-Br773y4y.js","assets/document-lUDIIoLy.js","assets/disk-DOZ1UjS4.js","assets/opensAs-D2wq-6bs.js","assets/cases-C4X1IHKI.js","assets/clipboard-DGNteFFi.js","assets/index-DivF75gN.js","assets/propertyCommand-BCTq1DlJ.js","assets/buttonClasses-CcK2MU_a.js","assets/overlayStack-CYjZnx-e.js","assets/Icon-BoTREWg0.js","assets/fonts-BNXYDxva.js","assets/outline-cLJEsxSa.js","assets/imageResolve-BHBNQNcF.js","assets/externalOpen-C7ecxM5d.js","assets/emptyTier-D7FLU1i4.js","assets/editorRegistry-FIZ3B9Tj.js","assets/commands-DoGORBNc.js","assets/settingsPanel-vDEqnAK1.js","assets/homeAttention-CGCrDuoF.js","assets/cta-PlUUFhMz.js","assets/Overlay-CZa_Sj1Z.js","assets/useOverlayLayer-BRKJU0-n.js","assets/Button-M0uia9_w.js","assets/mobileBlock-C7SvHADN.js"])))=>i.map(i=>d[i]);
import{n as D,_ as w}from"./index-CNKzQmxV.js";import{l as it,o as ot}from"./opensAs-D2wq-6bs.js";const F="/Users/harness",O=`${F}/OpenMarkdown`,at="/demo/assets/command-palette-CfoUFeNA.png",rt="/demo/assets/window-U_tu_MaJ.png",lt={"command-palette.png":at,"window.png":rt},k=`${O}/Demo`,I=lt,dt=`# About this demo

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
`,N="openmd.demo.files.v1",ht=2e6;function ct(i,t,e){const n={};for(const s of i.paths())if(s.startsWith(`${t}/`)&&!i.isDir(s)&&!s.includes("/attachments/")&&e(s))try{n[s]=i.readText(s)}catch{}return n}function ut(i,t,e){try{const n=JSON.stringify(ct(i,t,e));if(n.length>ht)return;localStorage.setItem(N,n)}catch{}}function pt(){try{const i=localStorage.getItem(N);if(!i)return null;const t=JSON.parse(i);if(!t||typeof t!="object"||Array.isArray(t))return null;const e={};for(const[n,s]of Object.entries(t))typeof s=="string"&&(e[n]=s);return e}catch{return null}}class f extends Error{code;params;constructor(t,e={}){super(`${t} ${JSON.stringify(e)}`),this.code=t,this.params=e}toWire(){return{code:this.code,params:this.params}}}function m(i){const t=i.replace(/\/+$/,"");return t===""?"/":t}function v(i){const t=m(i),e=t.lastIndexOf("/");return e<0?"":e===0?"/":t.slice(0,e)}function ft(i){return it(i)}function A(i,t){return i===".git"||i==="node_modules"?!1:t||ft(i)}const mt=1e4;class wt{nodes=new Map;constructor(){this.nodes.set("/",{kind:"dir"})}reset(){this.nodes.clear(),this.nodes.set("/",{kind:"dir"})}paths(){return[...this.nodes.keys()].sort()}exists(t){return this.nodes.has(m(t))}isDir(t){return this.nodes.get(m(t))?.kind==="dir"}mkdirp(t){const e=m(t);if(e==="/"||e==="")return;const n=e.split("/").filter(Boolean);let s="";for(const r of n){s=`${s}/${r}`;const h=this.nodes.get(s);if(h===void 0)this.nodes.set(s,{kind:"dir"});else if(h.kind!=="dir")throw new f("CREATE_DIR_FAILED",{path:s,detail:"not a directory"})}}readText(t){const e=m(t),n=this.nodes.get(e);if(n===void 0)throw new f("READ_FAILED",{path:e,detail:"no such file"});if(n.kind!=="file")throw new f("READ_FAILED",{path:e,detail:"not a UTF-8 file"});return n.text}readBytes(t){const e=m(t),n=this.nodes.get(e);if(n?.kind!=="bin")throw new f("READ_FAILED",{path:e,detail:"no such binary file"});return n.bytes}writeText(t,e){const n=m(t);this.mkdirp(v(n)),this.nodes.set(n,{kind:"file",text:e})}writeBytes(t,e){const n=m(t);this.mkdirp(v(n)),this.nodes.set(n,{kind:"bin",bytes:e})}createNote(t){const e=m(t);if(this.nodes.has(e))throw new f("CREATE_FAILED",{path:e,detail:"file exists"});this.writeText(e,"")}createFolder(t){const e=m(t);if(this.nodes.has(e))throw new f("CREATE_FOLDER_FAILED",{path:e,detail:"file exists"});this.mkdirp(e)}homeListDir(t){const e=m(t);if(!this.isDir(e))throw new f("LIST_DIR_FAILED",{path:e,detail:"not a directory"});const n=e==="/"?"/":`${e}/`,s=[];for(const[r,h]of this.nodes){if(r===e||!r.startsWith(n))continue;const u=r.slice(n.length);if(u.includes("/"))continue;const g=h.kind==="dir";A(u,g)&&s.push({name:u,path:r,is_dir:g})}return s.sort((r,h)=>Number(h.is_dir)-Number(r.is_dir)||(r.name<h.name?-1:r.name>h.name?1:0)),s}homeFiles(t,e=mt){const n=m(t);if(!this.isDir(n))throw new f("LIST_DIR_FAILED",{path:n,detail:"not a directory"});const s=n==="/"?"/":`${n}/`,r=[];for(const[h,u]of this.nodes){if(u.kind==="dir"||!h.startsWith(s))continue;const g=h.slice(s.length),b=g.split("/"),S=b.pop();b.every(T=>A(T,!0))&&A(S,!1)&&r.push(g)}return r.sort(),r.length>e?{files:r.slice(0,e),truncated:!0}:{files:r,truncated:!1}}rename(t,e){if(e===""||e.includes("/")||e.includes(":"))throw new f("INVALID_NAME",{name:e});const n=m(t);if(!this.nodes.has(n))throw new f("RENAME_FAILED",{path:n,detail:"no such file"});const s=v(n),r=s==="/"?`/${e}`:`${s}/${e}`;if(this.nodes.has(r))throw new f("NAME_EXISTS",{name:e});return this.movePrefix(n,r),r}trash(t){const e=m(t);if(!this.nodes.has(e))throw new f("TRASH_FAILED",{path:e,detail:"no such file"});for(const n of[...this.nodes.keys()])(n===e||n.startsWith(`${e}/`))&&this.nodes.delete(n)}movePrefix(t,e){for(const n of[...this.nodes.keys()]){if(n!==t&&!n.startsWith(`${t}/`))continue;const s=this.nodes.get(n);this.nodes.delete(n),this.nodes.set(e+n.slice(t.length),s)}}}const gt=[],_t=`# Welcome to OpenMarkdown

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
`,yt=["png","jpg","jpeg","gif","svg","webp"];function R(i){const t=i.split(".").pop()?.toLowerCase();return t!==void 0&&yt.includes(t)}class kt{constructor(t,e="test"){this.fs=t,this.mode=e}fs;mode;unloaded=new Set;seedPaths(){return this.mode!=="demo"?gt:[`${k}/About this demo.md`,`${k}/Welcome.md`,...Object.keys(I).map(t=>`${k}/attachments/${t}`)]}seed(){this.unloaded.clear(),this.fs.mkdirp(O),this.mode==="demo"&&this.fs.mkdirp(`${k}/attachments`);for(const t of this.seedPaths())R(t)?this.fs.writeBytes(t,new Uint8Array):this.fs.writeText(t,""),this.unloaded.add(t)}paths(){return[...this.seedPaths()]}async ensureLoaded(t){if(!this.unloaded.has(t))return;if(this.unloaded.delete(t),this.mode==="demo"){await this.loadDemoPath(t);return}const e=await fetch(t);if(!e.ok)throw new f("READ_FAILED",{path:t,detail:`dev server ${e.status}`});R(t)?this.fs.writeBytes(t,new Uint8Array(await e.arrayBuffer())):this.fs.writeText(t,await e.text())}async loadDemoPath(t){const e=t.slice(t.lastIndexOf("/")+1);if(t.includes("/attachments/")){const n=await fetch(I[e]??"");if(!n.ok)throw new f("READ_FAILED",{path:t,detail:`dev server ${n.status}`});this.fs.writeBytes(t,new Uint8Array(await n.arrayBuffer()));return}if(e==="Welcome.md"){this.fs.writeText(t,await this.welcomeTemplate());return}this.fs.writeText(t,dt)}isPlaceholder(t){return this.unloaded.has(t)}markWritten(t){this.unloaded.delete(t)}async welcomeTemplate(){return _t}}class vt{callbacks=new Map;nextCallbackId=1;listeners=new Map;nextEventId=1;transformCallback(t,e=!1){const n=this.nextCallbackId++;return this.callbacks.set(n,{fn:t??(()=>{}),once:e}),n}unregisterCallback(t){this.callbacks.delete(t)}listen(t,e){let n=this.listeners.get(t);return n||(n=new Set,this.listeners.set(t,n)),n.add(e),this.nextEventId++}unregisterListener(t,e){const n=this.listeners.get(t);if(n){for(const s of[...n])this.eventIdOf.get(s)===e&&n.delete(s);n.size===0&&this.listeners.delete(t)}}eventIdOf=new Map;pair(t,e){this.eventIdOf.set(t,e)}emit(t,e){const n=this.listeners.get(t);if(!n)return 0;let s=0;for(const r of[...n]){const h=this.callbacks.get(r);if(!h)continue;const u={event:t,id:this.eventIdOf.get(r)??r,payload:e};h.fn(u),s++,h.once&&this.callbacks.delete(r)}return s}activeEvents(){return[...this.listeners.keys()].sort()}reset(){this.callbacks.clear(),this.listeners.clear(),this.eventIdOf.clear()}}const bt="HARNESS_UNSUPPORTED",W={sync_tray_state:"native tray",relaunch:"native process restart",relaunch_for_update:"native process restart","plugin:window|close":"native window","plugin:window|set_always_on_top":"native window",install_cli:"writes to the host filesystem",uninstall_cli:"writes to the host filesystem",install_visual:"writes to the host filesystem",uninstall_visual:"writes to the host filesystem",visual_status:"probes the host filesystem",agent_editor_status:"probes the host filesystem",agent_editor_enable:"writes to the host filesystem",agent_editor_disable:"writes to the host filesystem",default_app_status:"OS document-type registration",set_default_app:"OS document-type registration",revert_default_app:"OS document-type registration",open_external:"native shell open",reveal_in_file_manager:"native file manager","plugin:dialog|open":"native file picker",update_attempt:"signed release feed",session_complete:"unix socket bridge",reveal_complete:"unix socket bridge",report_workspace_state:"unix socket bridge",bridge_response:"unix socket bridge",sidebar_send:"unix socket bridge",terminal_open:"native PTY",terminal_write:"native PTY",terminal_resize:"native PTY",terminal_attach:"native PTY",app_quit:"native process",quit_confirmed:"native process",watch_file:"no filesystem watcher in a browser",unwatch_file:"no filesystem watcher in a browser",spell_check_paragraphs:"native spell checker",spell_suggestions:"native spell checker",spell_close_document:"native spell checker"},Ct={terminal_open:"cta",sidebar_send:"cta",install_cli:"cta",uninstall_cli:"cta","plugin:window|set_always_on_top":"cta","plugin:dialog|open":"cta",set_default_app:"cta",revert_default_app:"cta",install_visual:"hide",uninstall_visual:"hide",agent_editor_enable:"hide",agent_editor_disable:"hide",reveal_in_file_manager:"hide","plugin:window|close":"hide",relaunch_for_update:"hide",app_quit:"hide",quit_confirmed:"hide",spell_check_paragraphs:"hide",spell_suggestions:"hide",spell_close_document:"hide",open_external:"native",relaunch:"native",default_app_status:"mute",visual_status:"mute",agent_editor_status:"mute",sync_tray_state:"mute",update_attempt:"mute",terminal_write:"mute",terminal_resize:"mute",terminal_attach:"mute",watch_file:"mute",unwatch_file:"mute",bridge_response:"mute",session_complete:"mute",reveal_complete:"mute",report_workspace_state:"mute"},St={default_app_status:{is_default:!1,has_previous:!1},visual_status:{state:"not_configured",paths:[]},agent_editor_status:[],update_attempt:{outcome:"no_update"},sync_tray_state:null,watch_file:null,unwatch_file:null,bridge_response:null,session_complete:null,reveal_complete:null,report_workspace_state:null},Tt=new Set(["write_file","create_note","create_folder","rename_path","trash_path","write_attachment"]);function At(i){let t;try{t=new URL(typeof i=="string"?i:"")}catch{return{outcome:"refused",reason:"malformed",scheme:null}}return t.protocol!=="https:"&&t.protocol!=="http:"?{outcome:"refused",reason:"scheme",scheme:t.protocol.replace(/:$/,"")}:(window.open(t.href,"_blank","noopener,noreferrer"),{outcome:"opened"})}function P(i){return Ct[i]}function C(i){return{code:bt,params:{command:i,reason:W[i]??"not implemented in the browser harness"}}}function L(){return{resident:!0,language:null,theme:null,scratch_dir:null,welcome_seed_rev:0,preferred_agent:null,check_spelling:!1,last_seen_version:null,setup_card_rev:0,update_source_memory:{last_good:null,last_good_failed:!1},update_fail_notice:null}}function E(i){return D(i)??D(typeof navigator>"u"?null:navigator.language)??"en"}function Et(i){let t=0xcbf29ce484222325n;const e=0xffffffffffffffffn;for(const n of i)t=(t^BigInt(n))&e,t=t*0x100000001b3n&e;return t}function M(i){const t=i.toLowerCase();return t==="jpeg"||t==="jpg"?"jpg":t==="svg+xml"||t==="svg"?"svg":t}function xt(i){const t=(i??"").trim();if(t.startsWith("image/"))return M(t.slice(6));const e=t.lastIndexOf(".");if(e>=0){const n=t.slice(e+1);if(n.length>0&&n.length<=5&&/^[a-zA-Z0-9]+$/.test(n))return M(n)}return"png"}function It(){const i=new Date,t=e=>String(e).padStart(2,"0");return`${i.getFullYear()}-${t(i.getMonth()+1)}-${t(i.getDate())}`}function Ot(i,t){const n={claude:{via:"plugin",install:["claude plugin marketplace add OpenMarkdown-dev/OpenMarkdown-releases","claude plugin install openmarkdown@openmarkdown"],enable:["claude plugin enable openmarkdown@openmarkdown"],undo:"claude plugin uninstall openmarkdown@openmarkdown"},codex:{via:"mcpServer",install:["codex mcp add openmd -- openmd mcp"],enable:[],undo:"codex mcp remove openmd"}}[i];if(!n)return null;const s=t==="missing"?n.install:t==="disabled"?n.enable:[];return{state:t,commands:s,undo:n.undo,via:n.via}}class Dt{mode;present;fs=new wt;fixtures;events=new vt;objectUrls=new Map;settings=L();bootedAt=Date.now();startupConsumed=!1;cliInstalled=!1;agentHosts=[];agentSetup={};terminalSessions=[];terminalRunning=[];handlers;constructor(t="test"){this.mode=t,this.fixtures=new kt(this.fs,t),this.handlers=this.buildHandlers(),this.reset(),this.cliInstalled=t==="demo"}reset(){for(const t of this.objectUrls.values())URL.revokeObjectURL(t);this.objectUrls.clear(),this.fs.reset(),this.events.reset(),this.fixtures.seed(),this.mode==="demo"&&this.restoreDemoFiles(),this.settings=L(),this.startupConsumed=!1,this.cliInstalled=this.mode==="demo",this.agentHosts=[],this.agentSetup={},this.terminalSessions=[],this.terminalRunning=[]}setTerminalSessions(t,e=[]){this.terminalSessions=t.map(n=>({...n})),this.terminalRunning=[...e]}setCliInstalled(t){this.cliInstalled=t}restoreDemoFiles(){const t=pt();if(t)for(const[e,n]of Object.entries(t)){const s=e.slice(0,e.lastIndexOf("/"));this.fs.mkdirp(s),this.fs.writeText(e,n),this.fixtures.markWritten(e)}}setRefusalPresenter(t){this.present=t}setAgentHosts(t){this.agentHosts=[...t]}setAgentSetup(t,e){this.agentSetup={...this.agentSetup,[t]:e}}coverage(){return{simulated:Object.keys(this.handlers).sort(),refused:Object.entries(W).map(([t,e])=>({command:t,reason:e,tier:P(t)})).sort((t,e)=>t.command<e.command?-1:1)}}simulatedCommands(){return Object.keys(this.handlers).sort()}async invoke(t,e={}){this.invocations.set(t,(this.invocations.get(t)??0)+1),this.lastArgs.set(t,e);const n=this.handlers[t];if(!n){if(this.mode==="demo"){const s=P(t)??"cta";if(s==="mute")return St[t]??null;if(s==="native")return this.nativeEquivalent(t,e);throw this.present?.(t,s),{...C(t),presented:!0}}throw C(t)}try{const s=await n(e);return this.mode==="demo"&&Tt.has(t)&&ut(this.fs,k,r=>!this.fixtures.isPlaceholder(r)),s}catch(s){throw s instanceof f?s.toWire():s}}nativeEquivalent(t,e){if(t==="relaunch")return location.reload(),null;if(t==="open_external")return At(e.url);throw C(t)}assetUrl(t){const e=this.objectUrls.get(t);if(e)return e;if(t.startsWith("/fixtures/"))return t;if(this.mode==="demo"){const n=t.slice(t.lastIndexOf("/")+1),s=I[n];if(s&&t.includes("/attachments/"))return s}try{const n=this.fs.readBytes(t),s=URL.createObjectURL(new Blob([n]));return this.objectUrls.set(t,s),s}catch{return t}}windowTitles=[];invocations=new Map;lastArgs=new Map;homeVersions=new Map;homeVersion(t){return this.homeVersions.get(t)??1}windowTheme(){return this.settings.theme==="dark"||this.settings.theme==="light"?this.settings.theme:typeof matchMedia=="function"&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}scratchDir(){return this.mode==="demo"?k:this.settings.scratch_dir??O}async readFileContent(t){return await this.fixtures.ensureLoaded(t),{path:t,content:this.fs.readText(t)}}buildHandlers(){const t=this.fs;return{startup_elapsed_ms:()=>Date.now()-this.bootedAt,startup_kind:()=>this.startupConsumed?"hot":(this.startupConsumed=!0,"cold"),app_channel:()=>this.mode==="demo"?{channel:"release",productName:"OpenMarkdown",updates:!0}:{channel:"dev",productName:"OpenMarkdown Dev",updates:!1},perf_log:e=>(this.mode==="demo"||console.debug("[harness perf]",e.line),null),cli_status:()=>({installed:this.cliInstalled,paths:this.cliInstalled?["/usr/local/bin/openmd"]:[]}),bundled_cli_status:()=>({installed:this.cliInstalled}),agent_profiles:()=>[...[{id:"claude",name:"Claude Code",command:"claude '/openmarkdown:listen'",resumable:!0},{id:"codex",name:"Codex",command:"codex '<bootstrap>'",resumable:!1},{id:"gemini",name:"Gemini CLI",command:"gemini -i '<bootstrap>'",resumable:!1},{id:"opencode",name:"opencode",command:"opencode run '<bootstrap>'",resumable:!1}].map(n=>{const s=this.agentHosts.includes(n.id),r=this.agentSetup[n.id];return{...n,kind:"agent",installed:s,setup:s&&r?Ot(n.id,r):null}}),{id:"shell",name:"shell",kind:"shell",installed:!0,resumable:!1,command:""}],agent_states:()=>[],session_attention:()=>({version:0,rows:[]}),session_attention_seen:()=>null,terminal_list:()=>this.terminalSessions.map(e=>({...e})),terminal_running:()=>[...this.terminalRunning],terminal_close:e=>{const n=e.id;return this.terminalSessions=this.terminalSessions.filter(s=>s.id!==n),this.terminalRunning=this.terminalRunning.filter(s=>s!==n),null},capabilities:()=>({agentBridge:this.mode==="demo"}),feedback_context:()=>({version:"0.0.0-harness",os:`${navigator.platform||"browser"} (harness)`,channel:"dev",language:E(this.settings.language)}),paths_exist:e=>e.paths.map(n=>t.exists(n)),git_root_of:e=>{const n=e.path;let s=t.isDir(n)?n:v(n);for(;;){if(t.exists(`${s==="/"?"":s}/.git`))return{path:n,root:s};if(s==="/"||s==="")return{path:n,root:null};s=v(s)}},default_home_dir:()=>this.scratchDir(),is_dir:e=>t.isDir(e.path),read_file:e=>this.readFileContent(e.path),open_image:e=>{const n=e.path;if(ot(n)!=="image")throw{code:"NOT_AN_IMAGE",params:{path:n}};if(!t.exists(n)||t.isDir(n))throw{code:"READ_FAILED",params:{path:n,detail:"not found"}};return{path:n}},write_file:e=>{const n=e.path;t.writeText(n,e.content),this.fixtures.markWritten(n)},home_list_dir:e=>{const n=e.root,s=e.dir;if(s!==n&&!s.startsWith(`${n==="/"?"":n}/`))throw new f("NOT_IN_HOME",{path:s,root:n});return t.homeListDir(s)},home_files:e=>({...t.homeFiles(e.root),version:this.homeVersion(e.root)}),home_refresh:e=>{const n=e.root,s=e.dir??null,r=this.homeVersion(n)+1;this.homeVersions.set(n,r),this.events.emit("om:home-changed",{root:n,version:r,dirs:[s??n],all:s===null})},create_note:e=>{const n=e.path;t.createNote(n),this.fixtures.markWritten(n)},create_folder:e=>t.createFolder(e.path),trash_path:e=>t.trash(e.path),rename_path:e=>t.rename(e.path,e.newName),write_attachment:e=>{const n=e.docPath,s=Uint8Array.from(e.bytes),r=`${v(n)}/attachments`,h=`img-${Et(s).toString(16).padStart(16,"0")}.${xt(e.hint)}`,u=`${r}/${h}`;return t.exists(u)||t.writeBytes(u,s),`attachments/${h}`},open_scratch_note:async()=>{const e=`${this.scratchDir()}/${It()}.md`;return t.exists(e)||(t.writeText(e,""),this.fixtures.markWritten(e)),this.readFileContent(e)},open_welcome_note:async()=>{const e=`${this.scratchDir()}/Welcome.md`;return t.exists(e)||(t.writeText(e,await this.fixtures.welcomeTemplate()),this.fixtures.markWritten(e)),this.readFileContent(e)},welcome_startup:async()=>{if(this.mode==="demo"||this.settings.welcome_seed_rev>=1)return null;const e=`${this.scratchDir()}/Welcome.md`;return t.exists(e)||(t.writeText(e,await this.fixtures.welcomeTemplate()),this.fixtures.markWritten(e)),this.readFileContent(e)},mark_welcome_seeded:()=>{this.settings.welcome_seed_rev=1},get_settings:()=>({...this.settings}),patch_settings:e=>{const n=e.patch;for(const s of Object.keys(n))if(!(s in this.settings))throw{code:"UNKNOWN_SETTING",params:{key:s}};return this.settings={...this.settings,...n},this.events.emit("om:settings-changed",{...this.settings}),{...this.settings}},get_language:()=>E(this.settings.language),resolve_language:e=>E(e.pref),take_pending_open:()=>[],take_pending_actions:()=>[],"plugin:event|listen":e=>{const n=e.handler,s=this.events.listen(e.event,n);return this.events.pair(n,s),s},"plugin:event|unlisten":()=>{},"plugin:event|emit":e=>{this.events.emit(e.event,e.payload)},"plugin:event|emit_to":e=>{this.events.emit(e.event,e.payload)},"plugin:app|version":()=>"0.0.0-harness","plugin:path|resolve_directory":e=>{if(e.directory===21)return F;throw C(`plugin:path|resolve_directory(${String(e.directory)})`)},"plugin:window|theme":()=>this.windowTheme(),"plugin:window|set_title":e=>(this.windowTitles.push(String(e.value)),null)}}}const x="main";function Rt(i){window.__TAURI_INTERNALS__={invoke:(t,e)=>i.invoke(t,e??{}),transformCallback:(t,e=!1)=>i.events.transformCallback(t,e),unregisterCallback:t=>i.events.unregisterCallback(t),convertFileSrc:t=>i.assetUrl(t),metadata:{currentWindow:{label:x},currentWebview:{windowLabel:x,label:x}},plugins:{path:{sep:"/",delimiter:":"}}},window.__TAURI_EVENT_PLUGIN_INTERNALS__={unregisterListener:(t,e)=>i.events.unregisterListener(t,e)}}function Pt(i){typeof matchMedia=="function"&&matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{i.events.emit("tauri://theme-changed",i.windowTheme())})}let $="test";function Lt(i){$=i.mode;const t={backend:i,mode:i.mode,reset:()=>i.reset(),coverage:()=>i.coverage(),fixturePaths:()=>i.fixtures.paths(),agentSidebar:()=>{const e=c.agentSidebar;if(!e)throw new Error("agent sidebar store not warmed");const n=e.useAgentSidebarStore;return{...n.getState(),threadOf:s=>n.getState().threads[s]??[],homeNeedsYou:s=>c.homeAttention?.useHomeAttention.getState().lit[s]===!0}},editorView:()=>{const e=c.editorRegistry;return e?e.getActiveEditor()?.view??null:null},commands:()=>{const e=c.commands;return e?e.listCommands().map(n=>{const s=e.commandGate(n);return{id:n.id,title:n.title(),state:s.state,...s.state==="disabled"?{reason:s.reason}:{}}}):[]},runCommand:(e,n)=>c.commands?.runCommand(e,n)??!1,openPath:async e=>{const{useWorkspaceStore:n}=await w(async()=>{const{useWorkspaceStore:s}=await import("./workspace-Fb3tYCba.js").then(r=>r.w);return{useWorkspaceStore:s}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]));await n.getState().openPath(e,{pin:!0})},emit:(e,n)=>i.events.emit(e,n),activeEvents:()=>i.events.activeEvents(),runCase:async e=>{const{editorGeometryCase:n,contextMenuCase:s,listIndentCase:r,listRenderCase:h,listFoldCase:u,longDocumentCase:g,insetsCase:b,tableUndoCase:S,blockArrowsCase:T,nestedIsolationCase:H,tableArrowsCase:U,propertiesCase:V,openSafetyCase:j,agentSidebarCase:B,settingsShapeCase:Y,panelRegionsCase:G,homesCase:z,emptyStateCase:q,terminalHostCase:X,flatStatesCase:J,panelChromeCase:K,emptyHintCentredCase:Z,chromeFollowupsCase:Q,intercomAgentPickerCase:ee,controlRulerCase:te,paletteOpenCase:ne,panelOpenCase:se,renderFallbackCase:ie,strikeMarksCase:oe,cellTreeCase:ae,selectionPaintCase:re,imageSizeCase:le,calloutSuffixCase:de,tableCellImagesCase:he,spellcheckCase:ce,tabStateCase:ue,caretRulesCase:pe,whatsNewCase:fe,setupCardCase:me,tooltipCase:we,codeFontCase:ge,listCaretHomeCase:_e,viewerCase:ye}=await w(async()=>{const{editorGeometryCase:l,contextMenuCase:p,listIndentCase:d,listRenderCase:_,listFoldCase:y,longDocumentCase:ke,insetsCase:ve,tableUndoCase:be,blockArrowsCase:Ce,nestedIsolationCase:Se,tableArrowsCase:Te,propertiesCase:Ae,openSafetyCase:Ee,agentSidebarCase:xe,settingsShapeCase:Ie,panelRegionsCase:Oe,homesCase:De,emptyStateCase:Re,terminalHostCase:Pe,flatStatesCase:Le,panelChromeCase:Me,emptyHintCentredCase:Fe,chromeFollowupsCase:Ne,intercomAgentPickerCase:We,controlRulerCase:$e,paletteOpenCase:He,panelOpenCase:Ue,renderFallbackCase:Ve,strikeMarksCase:je,cellTreeCase:Be,selectionPaintCase:Ye,imageSizeCase:Ge,calloutSuffixCase:ze,tableCellImagesCase:qe,spellcheckCase:Xe,tabStateCase:Je,caretRulesCase:Ke,whatsNewCase:Ze,setupCardCase:Qe,tooltipCase:et,codeFontCase:tt,listCaretHomeCase:nt,viewerCase:st}=await import("./cases-C4X1IHKI.js");return{editorGeometryCase:l,contextMenuCase:p,listIndentCase:d,listRenderCase:_,listFoldCase:y,longDocumentCase:ke,insetsCase:ve,tableUndoCase:be,blockArrowsCase:Ce,nestedIsolationCase:Se,tableArrowsCase:Te,propertiesCase:Ae,openSafetyCase:Ee,agentSidebarCase:xe,settingsShapeCase:Ie,panelRegionsCase:Oe,homesCase:De,emptyStateCase:Re,terminalHostCase:Pe,flatStatesCase:Le,panelChromeCase:Me,emptyHintCentredCase:Fe,chromeFollowupsCase:Ne,intercomAgentPickerCase:We,controlRulerCase:$e,paletteOpenCase:He,panelOpenCase:Ue,renderFallbackCase:Ve,strikeMarksCase:je,cellTreeCase:Be,selectionPaintCase:Ye,imageSizeCase:Ge,calloutSuffixCase:ze,tableCellImagesCase:qe,spellcheckCase:Xe,tabStateCase:Je,caretRulesCase:Ke,whatsNewCase:Ze,setupCardCase:Qe,tooltipCase:et,codeFontCase:tt,listCaretHomeCase:nt,viewerCase:st}},__vite__mapDeps([19,1,2,20,21,22,23,24,25,26,11,27,4,28,29,30])),a={openPath:t.openPath,runCommand:t.runCommand,exists:l=>i.fs.exists(l),removeFile:l=>i.fs.trash(l),writeFile:(l,p)=>i.fs.writeText(l,p),readFile:l=>i.fs.readText(l),view:()=>{const l=t.editorView();if(!l)throw new Error("no active editor after opening the case fixture");return l},agentSidebar:t.agentSidebar,emit:(l,p)=>{i.events.emit(l,p)},regions:()=>{const l=c.workspace?.useWorkspaceStore,p=c.panelLayout?.usePanelLayoutStore;if(!l||!p)throw new Error("region stores not warmed");return{memory:()=>{const d=l.getState();return{...d.regions,folded:[...d.regions.folded,...d.windowFolded]}},toggleLeft:d=>l.getState().toggleSidebar(d),setPanelOpen:(d,_)=>l.getState().setPanelOpen(d,_),setPanelFolded:(d,_)=>l.getState().setPanelFolded(d,_),widths:()=>p.getState().regionWidth,setWidth:(d,_)=>p.getState().setRegionWidth(d,_)}},setCliInstalled:l=>i.setCliInstalled(l),invocations:l=>i.invocations.get(l)??0,lastArgs:l=>i.lastArgs.get(l),windowTitles:()=>[...i.windowTitles],setAgentHosts:l=>i.setAgentHosts(l),setAgentSetup:(l,p)=>i.setAgentSetup(l,p),openSettings:()=>c.settingsPanel?.useSettingsPanelStore.getState().openSettings(),closeSettings:()=>c.settingsPanel?.useSettingsPanelStore.getState().closeSettings(),terminal:()=>{const l=c.terminal?.useTerminalStore,p=c.terminalMemory;if(!l||!p)throw new Error("terminal store not warmed");return{seed:async(d,_=[])=>{i.setTerminalSessions(d,_),l.setState({sessions:[],selected:{},selectedAgent:{}}),l.getState().sync(d.map(y=>({...y}))),await new Promise(y=>setTimeout(y,40))},storeIds:()=>l.getState().sessions.map(d=>d.id),selected:d=>l.getState().selected[d],selectedAgent:d=>l.getState().selectedAgent[d],remember:(d,_)=>{for(const y of p.readTerminals(d))p.forgetTerminal(d,y);for(const y of _)p.rememberTerminal(d,y);l.getState().loadRemembered(d)}}}},o=[];return(e==="editor-geometry"||e==="all")&&o.push(await n(a)),(e==="editor-context-menu"||e==="all")&&o.push(await s(a)),(e==="editor-list-indent"||e==="all")&&o.push(await r(a)),(e==="editor-list-render"||e==="all")&&o.push(await h(a)),(e==="editor-list-fold"||e==="all")&&o.push(await u(a)),(e==="editor-long-document"||e==="all")&&o.push(await g(a)),(e==="editor-insets"||e==="all")&&o.push(await b(a)),(e==="workspace-open-safety"||e==="all")&&o.push(await j(a)),(e==="editor-table-undo"||e==="all")&&o.push(await S(a)),(e==="editor-block-arrows"||e==="all")&&o.push(await T(a)),(e==="editor-nested-isolation"||e==="all")&&o.push(await H(a)),(e==="editor-table-arrows"||e==="all")&&o.push(await U(a)),(e==="editor-properties"||e==="all")&&o.push(await V(a)),(e==="agent-sidebar"||e==="all")&&o.push(await B(a)),(e==="settings-shape"||e==="all")&&o.push(await Y(a)),(e==="panel-regions"||e==="all")&&o.push(await G(a)),(e==="workspace-homes"||e==="all")&&o.push(await z(a)),(e==="workspace-empty-state"||e==="all")&&o.push(await q(a)),(e==="terminal-host"||e==="all")&&o.push(await X(a)),(e==="flat-states"||e==="all")&&o.push(await J(a)),(e==="panel-chrome"||e==="all")&&o.push(await K(a)),(e==="empty-hint-centred"||e==="all")&&o.push(await Z(a)),(e==="chrome-followups"||e==="all")&&o.push(await Q(a)),(e==="intercom-agent-picker"||e==="all")&&o.push(await ee(a)),(e==="control-ruler"||e==="all")&&o.push(await te(a)),(e==="palette-open"||e==="all")&&o.push(await ne(a)),(e==="panel-open"||e==="all")&&o.push(await se(a)),(e==="render-fallback"||e==="all")&&o.push(await ie(a)),(e==="strike-marks"||e==="all")&&o.push(await oe(a)),(e==="cell-tree"||e==="all")&&o.push(await ae(a)),(e==="selection-paint"||e==="all")&&o.push(await re(a)),(e==="image-size"||e==="all")&&o.push(await le(a)),(e==="callout-suffix"||e==="all")&&o.push(await de(a)),(e==="table-cell-images"||e==="all")&&o.push(await he(a)),(e==="spellcheck"||e==="all")&&o.push(await ce(a)),(e==="tab-state"||e==="all")&&o.push(await ue(a)),(e==="caret-rules"||e==="all")&&o.push(await pe(a)),(e==="whats-new"||e==="all")&&o.push(await fe(a)),(e==="setup-card"||e==="all")&&o.push(await me(a)),(e==="tooltip"||e==="all")&&o.push(await we(a)),(e==="code-font"||e==="all")&&o.push(await ge(a)),(e==="list-caret-home"||e==="all")&&o.push(await _e(a)),(e==="viewer"||e==="all")&&o.push(await ye(a)),o}};window.__OPENMD_HARNESS__=t}const c={};async function Wt(){c.editorRegistry=await w(()=>import("./editorRegistry-FIZ3B9Tj.js").then(i=>i.e),__vite__mapDeps([31,21])),c.commands=await w(()=>import("./commands-DoGORBNc.js"),__vite__mapDeps([32,24,20,21,1,2,31])),c.agentSidebar=await w(()=>import("./agentSidebar-BSRGY5r4.js").then(i=>i.k),__vite__mapDeps([14,1,2,10,4,15])),c.settingsPanel=await w(()=>import("./settingsPanel-vDEqnAK1.js"),__vite__mapDeps([33,1,2])),c.workspace=await w(()=>import("./workspace-Fb3tYCba.js").then(i=>i.w),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18])),c.panelLayout=await w(()=>import("./panelLayout-B0T2ZRvm.js").then(i=>i.O),__vite__mapDeps([6,7,8,1,2,9,10,4,11,12,13,14,15])),c.terminal=await w(()=>import("./terminal-BUzfrMhi.js"),__vite__mapDeps([9,1,2,10,4,8])),c.terminalMemory=await w(()=>import("./terminalMemory-BVCaXxke.js").then(i=>i.d),[]),c.homeAttention=await w(()=>import("./homeAttention-CGCrDuoF.js"),__vite__mapDeps([34,1,2])),$==="demo"&&await Mt()}async function Mt(){const{useWorkspaceStore:i}=await w(async()=>{const{useWorkspaceStore:t}=await import("./workspace-Fb3tYCba.js").then(e=>e.w);return{useWorkspaceStore:t}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]));await i.getState().openFolder(k),await i.getState().openPath(`${k}/About this demo.md`,{pin:!0})}async function $t(i="test"){const t=new Dt(i);if(i==="demo"){const{installCta:s,showCta:r}=await w(async()=>{const{installCta:u,showCta:g}=await import("./cta-PlUUFhMz.js");return{installCta:u,showCta:g}},__vite__mapDeps([35,1,2,36,23,24,37,38,29])),{installMobileBlock:h}=await w(async()=>{const{installMobileBlock:u}=await import("./mobileBlock-C7SvHADN.js");return{installMobileBlock:u}},__vite__mapDeps([39,1,2,38,23,24,29]));s(),h(),t.setRefusalPresenter((u,g)=>{g==="cta"&&r(u)})}Rt(t),Pt(t),Lt(t);const{simulated:e,refused:n}=t.coverage();if(i==="demo"){console.info("OpenMarkdown demo — this is the real editor with a simulated filesystem. Your files live in this browser only. https://openmarkdown.dev");return}console.info(`[harness] simulated backend installed (${t.mode}) — ${e.length} commands simulated, ${n.length} refused. window.__OPENMD_HARNESS__ for the probe; refusals are deliberate (see openspec/specs/browser-harness).`)}export{$t as installHarness,Wt as warmHarness};
