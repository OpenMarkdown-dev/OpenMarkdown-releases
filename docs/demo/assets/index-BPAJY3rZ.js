const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/workspace-pEmgZakZ.js","assets/index-Xw5G8W17.js","assets/index-rtGcdua_.css","assets/homeModel-fE0Qu-GS.js","assets/event-C8sbUVdl.js","assets/tabStates-BtPLJVzM.js","assets/panelLayout-BDbNV0Zq.js","assets/home-BsJlynsm.js","assets/terminalMemory-yrNltAsq.js","assets/terminal-Cd7zwX-J.js","assets/agentState-CS0SHGIx.js","assets/uiState-DEzlRcYa.js","assets/layout-qDx9iF33.js","assets/lazySurface-CqobuD86.js","assets/agentSidebar-NgNpWZ5e.js","assets/presence-Br773y4y.js","assets/document-DO9ygeWW.js","assets/disk-uhQTC_Wf.js","assets/cases-f-6gyE20.js","assets/clipboard-Dus5cB3I.js","assets/index-DivF75gN.js","assets/propertyCommand-CEM5h2gL.js","assets/buttonClasses-BYPO6xRt.js","assets/Icon-Crq-Klbx.js","assets/zoom-DfHRlov1.js","assets/outline-DcYjRYBO.js","assets/imageResolve-BHBNQNcF.js","assets/externalOpen-Brot-UEs.js","assets/emptyTier-D7FLU1i4.js","assets/editorRegistry-FIZ3B9Tj.js","assets/commands-A2kaVIG7.js","assets/overlayStack-B30Zv3FA.js","assets/settingsPanel-BktakBYO.js","assets/homeAttention-Diu37WjL.js","assets/cta-BEC2ec7W.js","assets/Overlay-DHonfxDy.js","assets/useOverlayLayer-CtoZTRZi.js","assets/Button-C4uHsV08.js","assets/mobileBlock-D351Z0rW.js"])))=>i.map(i=>d[i]);
import{n as R,_ as w}from"./index-Xw5G8W17.js";const F="/Users/harness",O=`${F}/OpenMarkdown`,Ge="/demo/assets/command-palette-outline-fveirLdX.png",Xe="/demo/assets/toolbar-CdreEjfr.png",ze={"command-palette-outline.png":Ge,"toolbar.png":Xe},k=`${O}/Demo`,I=ze,qe=`# About this demo

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
`,N="openmd.demo.files.v1",Je=2e6;function Ke(i,t,e){const n={};for(const s of i.paths())if(s.startsWith(`${t}/`)&&!i.isDir(s)&&!s.includes("/attachments/")&&e(s))try{n[s]=i.readText(s)}catch{}return n}function Ze(i,t,e){try{const n=JSON.stringify(Ke(i,t,e));if(n.length>Je)return;localStorage.setItem(N,n)}catch{}}function Qe(){try{const i=localStorage.getItem(N);if(!i)return null;const t=JSON.parse(i);if(!t||typeof t!="object"||Array.isArray(t))return null;const e={};for(const[n,s]of Object.entries(t))typeof s=="string"&&(e[n]=s);return e}catch{return null}}const et=["md","markdown","mdx","txt"];class f extends Error{code;params;constructor(t,e={}){super(`${t} ${JSON.stringify(e)}`),this.code=t,this.params=e}toWire(){return{code:this.code,params:this.params}}}function m(i){const t=i.replace(/\/+$/,"");return t===""?"/":t}function v(i){const t=m(i),e=t.lastIndexOf("/");return e<0?"":e===0?"/":t.slice(0,e)}function tt(i){const t=i.lastIndexOf(".");return t!==-1&&et.includes(i.slice(t+1).toLowerCase())}function E(i,t){return i===".git"||i==="node_modules"?!1:t||tt(i)}const nt=1e4;class st{nodes=new Map;constructor(){this.nodes.set("/",{kind:"dir"})}reset(){this.nodes.clear(),this.nodes.set("/",{kind:"dir"})}paths(){return[...this.nodes.keys()].sort()}exists(t){return this.nodes.has(m(t))}isDir(t){return this.nodes.get(m(t))?.kind==="dir"}mkdirp(t){const e=m(t);if(e==="/"||e==="")return;const n=e.split("/").filter(Boolean);let s="";for(const o of n){s=`${s}/${o}`;const h=this.nodes.get(s);if(h===void 0)this.nodes.set(s,{kind:"dir"});else if(h.kind!=="dir")throw new f("CREATE_DIR_FAILED",{path:s,detail:"not a directory"})}}readText(t){const e=m(t),n=this.nodes.get(e);if(n===void 0)throw new f("READ_FAILED",{path:e,detail:"no such file"});if(n.kind!=="file")throw new f("READ_FAILED",{path:e,detail:"not a UTF-8 file"});return n.text}readBytes(t){const e=m(t),n=this.nodes.get(e);if(n?.kind!=="bin")throw new f("READ_FAILED",{path:e,detail:"no such binary file"});return n.bytes}writeText(t,e){const n=m(t);this.mkdirp(v(n)),this.nodes.set(n,{kind:"file",text:e})}writeBytes(t,e){const n=m(t);this.mkdirp(v(n)),this.nodes.set(n,{kind:"bin",bytes:e})}createNote(t){const e=m(t);if(this.nodes.has(e))throw new f("CREATE_FAILED",{path:e,detail:"file exists"});this.writeText(e,"")}createFolder(t){const e=m(t);if(this.nodes.has(e))throw new f("CREATE_FOLDER_FAILED",{path:e,detail:"file exists"});this.mkdirp(e)}homeListDir(t){const e=m(t);if(!this.isDir(e))throw new f("LIST_DIR_FAILED",{path:e,detail:"not a directory"});const n=e==="/"?"/":`${e}/`,s=[];for(const[o,h]of this.nodes){if(o===e||!o.startsWith(n))continue;const u=o.slice(n.length);if(u.includes("/"))continue;const g=h.kind==="dir";E(u,g)&&s.push({name:u,path:o,is_dir:g})}return s.sort((o,h)=>Number(h.is_dir)-Number(o.is_dir)||(o.name<h.name?-1:o.name>h.name?1:0)),s}homeFiles(t,e=nt){const n=m(t);if(!this.isDir(n))throw new f("LIST_DIR_FAILED",{path:n,detail:"not a directory"});const s=n==="/"?"/":`${n}/`,o=[];for(const[h,u]of this.nodes){if(u.kind==="dir"||!h.startsWith(s))continue;const g=h.slice(s.length),b=g.split("/"),C=b.pop();b.every(T=>E(T,!0))&&E(C,!1)&&o.push(g)}return o.sort(),o.length>e?{files:o.slice(0,e),truncated:!0}:{files:o,truncated:!1}}rename(t,e){if(e===""||e.includes("/")||e.includes(":"))throw new f("INVALID_NAME",{name:e});const n=m(t);if(!this.nodes.has(n))throw new f("RENAME_FAILED",{path:n,detail:"no such file"});const s=v(n),o=s==="/"?`/${e}`:`${s}/${e}`;if(this.nodes.has(o))throw new f("NAME_EXISTS",{name:e});return this.movePrefix(n,o),o}trash(t){const e=m(t);if(!this.nodes.has(e))throw new f("TRASH_FAILED",{path:e,detail:"no such file"});for(const n of[...this.nodes.keys()])(n===e||n.startsWith(`${e}/`))&&this.nodes.delete(n)}movePrefix(t,e){for(const n of[...this.nodes.keys()]){if(n!==t&&!n.startsWith(`${t}/`))continue;const s=this.nodes.get(n);this.nodes.delete(n),this.nodes.set(e+n.slice(t.length),s)}}}const it=[],ot=`# Welcome to OpenMarkdown

This file is an onboarding tutorial. 
This is a \`.md\` file on your disk. OpenMarkdown just *renders* it. 

- First part: Basics — just you.
- Second part: Agents — you and your coding agent.

---

## 1. Markdown grammar + Live preview

Put your cursor anywhere and start editing.

### 1.1 Hash tag \`#\` for heading/subheading
#### 1.1.1 More \`#\`'s means subheading
##### 1.1.1.1 Six levels of heading in total 
###### 1.1.1.1.1 Fold/Expand heading  sections using the left triangle

**Bold** is double \`**[TEXT]**\` or \`⌘B\`
*Italic* is single \`*[TEXT]*\` or \`⌘I\`
~~Strikeout~~ is double \`~~[TEXT]~~\`

> [!tip]
> This is a **callout**. Change \`[!tip]\` to \`[!warning]\` and watch the color and
> icon change. (Callouts: \`note\` · \`tip\` · \`important\` · \`warning\` · \`caution\`.)
> Or \`⌘⇧P\`, type "callout" to insert one.

A table for planning the page. **Click a cell and edit it** — press \`Tab\` to move
across, \`Enter\` to add a row:

| Section | Content            | Done |
| ------- | ------------------ | ---- |
| Hero    | Big headline       |      |
| About   | One short sentence |      |
| Contact | An email link      |      |

**Note:** \`⌘⇧P\`, type "table" for table commands.

And a code block — your page's first lines. Syntax highlights automatically. Copy button on top right corner.

\`\`\`html
<h1>Hi, I'm building this page</h1>
<p>...and OpenMarkdown is where I'm planning it.</p>
\`\`\`

A **link** — ⌘-click to open: [openmarkdown.dev](https://openmarkdown.dev)
**Link another note** — type \`[[\`, pick a file, and it drops in as a link you can ⌘-click.
A **photo** — drag or copy any image into the note; it's saved next to this file and linked as \`![](...)\`.

That's the core feel: **you edit the file, the file is the truth, the app just
shows it.**

## 2. Command palette

> Command palette is the command center for
> - Find files
> - Jump to sections
> - Commands

Press \`⌘P\` — it opens on your **files**. With the box empty, tap \`→\` / \`←\` to cycle
the three modes: **files → \`@\` outline (jump to any heading) → \`>\` commands**.
(\`⌘⇧P\` jumps straight to commands.) Press \`⌘/\` any time to see every shortcut.
![](attachments/command-palette-outline.png)
<!-- SCREENSHOT: ⌘P palette, empty query, three chips visible (files / @ outline / > commands) -->


## 3. Shortcuts

You may already know most of these. OpenMarkdown aims to feel as smooth as possible.

- \`⌘S\` — save · \`⌘F\` — find · \`⌘/\` — see every shortcut
- \`⌘T\` — new tab · \`⌘⇧T\` — reopen closed tab · \`⌘W\` — close tab *(don't, right now :)*
- \`⌘1\`–\`⌘9\` — jump to a tab · \`⌥⌘←\` / \`⌥⌘→\` — previous / next tab
- \`⌥↑\` / \`⌥↓\` — move a line · \`⌥⇧↑\` / \`⌥⇧↓\` — duplicate a line

## 4. The toolbar

![OpenMarkdown's toolbar](attachments/toolbar.png)
<!-- SCREENSHOT: top toolbar — file/outline toggles on the left; palette, view-mode switch, settings, pin on the right -->

Top-left toggles the **file tree** and the **outline**. Top-right: the **command
palette**, the **view mode** (live / source / reading), **settings**, and **pin**
(keep the window always on top).

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

To connect it:
1. **Settings → Command-line tool (openmd)**
2. **Settings → Connect your agent** — paste the line it gives you to your agent.

## Two ways to work together

**Ask it** *(you switch over)* — go to your agent's window and give it a prompt. It
edits *this* file; switch back to OpenMarkdown and watch the change land. Most sections
below work this way — each has a prompt to copy.

**Let it watch** *(it comes to you)* — tell your agent to *watch* this file (on Claude
Code: \`/openmarkdown:co-edit\`). Now you hand off work **without leaving OpenMarkdown**:
type \`- [ ] @agent <task>\` right in the file, save, and it does the work and ticks the
box. The last section tries this.

---

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
`,at=["png","jpg","jpeg","gif","svg","webp"];function D(i){const t=i.split(".").pop()?.toLowerCase();return t!==void 0&&at.includes(t)}class rt{constructor(t,e="test"){this.fs=t,this.mode=e}fs;mode;unloaded=new Set;seedPaths(){return this.mode!=="demo"?it:[`${k}/About this demo.md`,`${k}/Welcome.md`,...Object.keys(I).map(t=>`${k}/attachments/${t}`)]}seed(){this.unloaded.clear(),this.fs.mkdirp(O),this.mode==="demo"&&this.fs.mkdirp(`${k}/attachments`);for(const t of this.seedPaths())D(t)?this.fs.writeBytes(t,new Uint8Array):this.fs.writeText(t,""),this.unloaded.add(t)}paths(){return[...this.seedPaths()]}async ensureLoaded(t){if(!this.unloaded.has(t))return;if(this.unloaded.delete(t),this.mode==="demo"){await this.loadDemoPath(t);return}const e=await fetch(t);if(!e.ok)throw new f("READ_FAILED",{path:t,detail:`dev server ${e.status}`});D(t)?this.fs.writeBytes(t,new Uint8Array(await e.arrayBuffer())):this.fs.writeText(t,await e.text())}async loadDemoPath(t){const e=t.slice(t.lastIndexOf("/")+1);if(t.includes("/attachments/")){const n=await fetch(I[e]??"");if(!n.ok)throw new f("READ_FAILED",{path:t,detail:`dev server ${n.status}`});this.fs.writeBytes(t,new Uint8Array(await n.arrayBuffer()));return}if(e==="Welcome.md"){this.fs.writeText(t,await this.welcomeTemplate());return}this.fs.writeText(t,qe)}isPlaceholder(t){return this.unloaded.has(t)}markWritten(t){this.unloaded.delete(t)}async welcomeTemplate(){return ot}}class lt{callbacks=new Map;nextCallbackId=1;listeners=new Map;nextEventId=1;transformCallback(t,e=!1){const n=this.nextCallbackId++;return this.callbacks.set(n,{fn:t??(()=>{}),once:e}),n}unregisterCallback(t){this.callbacks.delete(t)}listen(t,e){let n=this.listeners.get(t);return n||(n=new Set,this.listeners.set(t,n)),n.add(e),this.nextEventId++}unregisterListener(t,e){const n=this.listeners.get(t);if(n){for(const s of[...n])this.eventIdOf.get(s)===e&&n.delete(s);n.size===0&&this.listeners.delete(t)}}eventIdOf=new Map;pair(t,e){this.eventIdOf.set(t,e)}emit(t,e){const n=this.listeners.get(t);if(!n)return 0;let s=0;for(const o of[...n]){const h=this.callbacks.get(o);if(!h)continue;const u={event:t,id:this.eventIdOf.get(o)??o,payload:e};h.fn(u),s++,h.once&&this.callbacks.delete(o)}return s}activeEvents(){return[...this.listeners.keys()].sort()}reset(){this.callbacks.clear(),this.listeners.clear(),this.eventIdOf.clear()}}const dt="HARNESS_UNSUPPORTED",W={sync_tray_state:"native tray",relaunch:"native process restart",relaunch_for_update:"native process restart","plugin:window|close":"native window","plugin:window|set_always_on_top":"native window",install_cli:"writes to the host filesystem",uninstall_cli:"writes to the host filesystem",install_visual:"writes to the host filesystem",uninstall_visual:"writes to the host filesystem",visual_status:"probes the host filesystem",default_app_status:"OS document-type registration",set_default_app:"OS document-type registration",revert_default_app:"OS document-type registration",open_external:"native shell open",reveal_in_file_manager:"native file manager","plugin:dialog|open":"native file picker","plugin:updater|check":"signed release feed",session_complete:"unix socket bridge",reveal_complete:"unix socket bridge",report_workspace_state:"unix socket bridge",bridge_response:"unix socket bridge",sidebar_send:"unix socket bridge",terminal_open:"native PTY",terminal_write:"native PTY",terminal_resize:"native PTY",terminal_attach:"native PTY",app_quit:"native process",quit_confirmed:"native process",watch_file:"no filesystem watcher in a browser",unwatch_file:"no filesystem watcher in a browser",spell_check_paragraphs:"native spell checker",spell_suggestions:"native spell checker",spell_close_document:"native spell checker"},ht={terminal_open:"cta",sidebar_send:"cta",install_cli:"cta",uninstall_cli:"cta","plugin:window|set_always_on_top":"cta","plugin:dialog|open":"cta",set_default_app:"cta",revert_default_app:"cta",install_visual:"hide",uninstall_visual:"hide",reveal_in_file_manager:"hide","plugin:window|close":"hide",relaunch_for_update:"hide",app_quit:"hide",quit_confirmed:"hide",spell_check_paragraphs:"hide",spell_suggestions:"hide",spell_close_document:"hide",open_external:"native",relaunch:"native",default_app_status:"mute",visual_status:"mute",sync_tray_state:"mute","plugin:updater|check":"mute",terminal_write:"mute",terminal_resize:"mute",terminal_attach:"mute",watch_file:"mute",unwatch_file:"mute",bridge_response:"mute",session_complete:"mute",reveal_complete:"mute",report_workspace_state:"mute"},ct={default_app_status:{is_default:!1,has_previous:!1},visual_status:{state:"not_configured",paths:[]},"plugin:updater|check":null,sync_tray_state:null,watch_file:null,unwatch_file:null,bridge_response:null,session_complete:null,reveal_complete:null,report_workspace_state:null},ut=new Set(["write_file","create_note","create_folder","rename_path","trash_path","write_attachment"]);function pt(i){let t;try{t=new URL(typeof i=="string"?i:"")}catch{return{outcome:"refused",reason:"malformed",scheme:null}}return t.protocol!=="https:"&&t.protocol!=="http:"?{outcome:"refused",reason:"scheme",scheme:t.protocol.replace(/:$/,"")}:(window.open(t.href,"_blank","noopener,noreferrer"),{outcome:"opened"})}function L(i){return ht[i]}function S(i){return{code:dt,params:{command:i,reason:W[i]??"not implemented in the browser harness"}}}function P(){return{resident:!0,language:null,theme:null,scratch_dir:null,welcome_seed_rev:0,preferred_agent:null,check_spelling:!1,menu_bar_only:!1,last_seen_version:null}}function A(i){return R(i)??R(typeof navigator>"u"?null:navigator.language)??"en"}function ft(i){let t=0xcbf29ce484222325n;const e=0xffffffffffffffffn;for(const n of i)t=(t^BigInt(n))&e,t=t*0x100000001b3n&e;return t}function M(i){const t=i.toLowerCase();return t==="jpeg"||t==="jpg"?"jpg":t==="svg+xml"||t==="svg"?"svg":t}function mt(i){const t=(i??"").trim();if(t.startsWith("image/"))return M(t.slice(6));const e=t.lastIndexOf(".");if(e>=0){const n=t.slice(e+1);if(n.length>0&&n.length<=5&&/^[a-zA-Z0-9]+$/.test(n))return M(n)}return"png"}function wt(){const i=new Date,t=e=>String(e).padStart(2,"0");return`${i.getFullYear()}-${t(i.getMonth()+1)}-${t(i.getDate())}`}function gt(i,t){const n={claude:{via:"plugin",install:["claude plugin marketplace add OpenMarkdown-dev/OpenMarkdown-releases","claude plugin install openmarkdown@openmarkdown"],enable:["claude plugin enable openmarkdown@openmarkdown"],undo:"claude plugin uninstall openmarkdown@openmarkdown"},codex:{via:"mcpServer",install:["codex mcp add openmd -- openmd mcp"],enable:[],undo:"codex mcp remove openmd"}}[i];if(!n)return null;const s=t==="missing"?n.install:t==="disabled"?n.enable:[];return{state:t,commands:s,undo:n.undo,via:n.via}}class _t{mode;present;fs=new st;fixtures;events=new lt;objectUrls=new Map;settings=P();bootedAt=Date.now();startupConsumed=!1;cliInstalled=!1;agentHosts=[];agentSetup={};terminalSessions=[];terminalRunning=[];handlers;constructor(t="test"){this.mode=t,this.fixtures=new rt(this.fs,t),this.handlers=this.buildHandlers(),this.reset(),this.cliInstalled=t==="demo"}reset(){for(const t of this.objectUrls.values())URL.revokeObjectURL(t);this.objectUrls.clear(),this.fs.reset(),this.events.reset(),this.fixtures.seed(),this.mode==="demo"&&this.restoreDemoFiles(),this.settings=P(),this.startupConsumed=!1,this.cliInstalled=this.mode==="demo",this.agentHosts=[],this.agentSetup={},this.terminalSessions=[],this.terminalRunning=[]}setTerminalSessions(t,e=[]){this.terminalSessions=t.map(n=>({...n})),this.terminalRunning=[...e]}setCliInstalled(t){this.cliInstalled=t}restoreDemoFiles(){const t=Qe();if(t)for(const[e,n]of Object.entries(t)){const s=e.slice(0,e.lastIndexOf("/"));this.fs.mkdirp(s),this.fs.writeText(e,n),this.fixtures.markWritten(e)}}setRefusalPresenter(t){this.present=t}setAgentHosts(t){this.agentHosts=[...t]}setAgentSetup(t,e){this.agentSetup={...this.agentSetup,[t]:e}}coverage(){return{simulated:Object.keys(this.handlers).sort(),refused:Object.entries(W).map(([t,e])=>({command:t,reason:e,tier:L(t)})).sort((t,e)=>t.command<e.command?-1:1)}}simulatedCommands(){return Object.keys(this.handlers).sort()}async invoke(t,e={}){this.invocations.set(t,(this.invocations.get(t)??0)+1),this.lastArgs.set(t,e);const n=this.handlers[t];if(!n){if(this.mode==="demo"){const s=L(t)??"cta";if(s==="mute")return ct[t]??null;if(s==="native")return this.nativeEquivalent(t,e);throw this.present?.(t,s),{...S(t),presented:!0}}throw S(t)}try{const s=await n(e);return this.mode==="demo"&&ut.has(t)&&Ze(this.fs,k,o=>!this.fixtures.isPlaceholder(o)),s}catch(s){throw s instanceof f?s.toWire():s}}nativeEquivalent(t,e){if(t==="relaunch")return location.reload(),null;if(t==="open_external")return pt(e.url);throw S(t)}assetUrl(t){const e=this.objectUrls.get(t);if(e)return e;if(t.startsWith("/fixtures/"))return t;if(this.mode==="demo"){const n=t.slice(t.lastIndexOf("/")+1),s=I[n];if(s&&t.includes("/attachments/"))return s}try{const n=this.fs.readBytes(t),s=URL.createObjectURL(new Blob([n]));return this.objectUrls.set(t,s),s}catch{return t}}windowTitles=[];invocations=new Map;lastArgs=new Map;homeVersions=new Map;homeVersion(t){return this.homeVersions.get(t)??1}windowTheme(){return this.settings.theme==="dark"||this.settings.theme==="light"?this.settings.theme:typeof matchMedia=="function"&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}scratchDir(){return this.mode==="demo"?k:this.settings.scratch_dir??O}async readFileContent(t){return await this.fixtures.ensureLoaded(t),{path:t,content:this.fs.readText(t)}}buildHandlers(){const t=this.fs;return{startup_elapsed_ms:()=>Date.now()-this.bootedAt,startup_kind:()=>this.startupConsumed?"hot":(this.startupConsumed=!0,"cold"),app_channel:()=>this.mode==="demo"?{channel:"release",productName:"OpenMarkdown"}:{channel:"dev",productName:"OpenMarkdown Dev"},perf_log:e=>(this.mode==="demo"||console.debug("[harness perf]",e.line),null),cli_status:()=>({installed:this.cliInstalled,paths:this.cliInstalled?["/usr/local/bin/openmd"]:[]}),bundled_cli_status:()=>({installed:this.cliInstalled}),agent_profiles:()=>[...[{id:"claude",name:"Claude Code",command:"claude '/openmarkdown:listen'",resumable:!0},{id:"codex",name:"Codex",command:"codex '<bootstrap>'",resumable:!1},{id:"gemini",name:"Gemini CLI",command:"gemini -i '<bootstrap>'",resumable:!1},{id:"opencode",name:"opencode",command:"opencode run '<bootstrap>'",resumable:!1}].map(n=>{const s=this.agentHosts.includes(n.id),o=this.agentSetup[n.id];return{...n,kind:"agent",installed:s,setup:s&&o?gt(n.id,o):null}}),{id:"shell",name:"shell",kind:"shell",installed:!0,resumable:!1,command:""}],agent_states:()=>[],session_attention:()=>({version:0,rows:[]}),session_attention_seen:()=>null,terminal_list:()=>this.terminalSessions.map(e=>({...e})),terminal_running:()=>[...this.terminalRunning],terminal_close:e=>{const n=e.id;return this.terminalSessions=this.terminalSessions.filter(s=>s.id!==n),this.terminalRunning=this.terminalRunning.filter(s=>s!==n),null},capabilities:()=>({agentBridge:this.mode==="demo"}),feedback_context:()=>({version:"0.0.0-harness",os:`${navigator.platform||"browser"} (harness)`,channel:"dev",language:A(this.settings.language)}),paths_exist:e=>e.paths.map(n=>t.exists(n)),git_root_of:e=>{const n=e.path;let s=t.isDir(n)?n:v(n);for(;;){if(t.exists(`${s==="/"?"":s}/.git`))return{path:n,root:s};if(s==="/"||s==="")return{path:n,root:null};s=v(s)}},default_home_dir:()=>this.scratchDir(),is_dir:e=>t.isDir(e.path),read_file:e=>this.readFileContent(e.path),write_file:e=>{const n=e.path;t.writeText(n,e.content),this.fixtures.markWritten(n)},home_list_dir:e=>{const n=e.root,s=e.dir;if(s!==n&&!s.startsWith(`${n==="/"?"":n}/`))throw new f("NOT_IN_HOME",{path:s,root:n});return t.homeListDir(s)},home_files:e=>({...t.homeFiles(e.root),version:this.homeVersion(e.root)}),home_refresh:e=>{const n=e.root,s=e.dir??null,o=this.homeVersion(n)+1;this.homeVersions.set(n,o),this.events.emit("om:home-changed",{root:n,version:o,dirs:[s??n],all:s===null})},create_note:e=>{const n=e.path;t.createNote(n),this.fixtures.markWritten(n)},create_folder:e=>t.createFolder(e.path),trash_path:e=>t.trash(e.path),rename_path:e=>t.rename(e.path,e.newName),write_attachment:e=>{const n=e.docPath,s=Uint8Array.from(e.bytes),o=`${v(n)}/attachments`,h=`img-${ft(s).toString(16).padStart(16,"0")}.${mt(e.hint)}`,u=`${o}/${h}`;return t.exists(u)||t.writeBytes(u,s),`attachments/${h}`},open_scratch_note:async()=>{const e=`${this.scratchDir()}/${wt()}.md`;return t.exists(e)||(t.writeText(e,""),this.fixtures.markWritten(e)),this.readFileContent(e)},open_welcome_note:async()=>{const e=`${this.scratchDir()}/Welcome.md`;return t.exists(e)||(t.writeText(e,await this.fixtures.welcomeTemplate()),this.fixtures.markWritten(e)),this.readFileContent(e)},welcome_startup:async()=>{if(this.mode==="demo"||this.settings.welcome_seed_rev>=1)return null;const e=`${this.scratchDir()}/Welcome.md`;return t.exists(e)||(t.writeText(e,await this.fixtures.welcomeTemplate()),this.fixtures.markWritten(e)),this.readFileContent(e)},mark_welcome_seeded:()=>{this.settings.welcome_seed_rev=1},get_settings:()=>({...this.settings}),patch_settings:e=>{const n=e.patch;for(const s of Object.keys(n))if(!(s in this.settings))throw{code:"UNKNOWN_SETTING",params:{key:s}};return this.settings={...this.settings,...n},this.events.emit("om:settings-changed",{...this.settings}),{...this.settings}},get_language:()=>A(this.settings.language),resolve_language:e=>A(e.pref),take_pending_open:()=>[],take_pending_actions:()=>[],"plugin:event|listen":e=>{const n=e.handler,s=this.events.listen(e.event,n);return this.events.pair(n,s),s},"plugin:event|unlisten":()=>{},"plugin:event|emit":e=>{this.events.emit(e.event,e.payload)},"plugin:event|emit_to":e=>{this.events.emit(e.event,e.payload)},"plugin:app|version":()=>"0.0.0-harness","plugin:path|resolve_directory":e=>{if(e.directory===21)return F;throw S(`plugin:path|resolve_directory(${String(e.directory)})`)},"plugin:window|theme":()=>this.windowTheme(),"plugin:window|set_title":e=>(this.windowTitles.push(String(e.value)),null)}}}const x="main";function yt(i){window.__TAURI_INTERNALS__={invoke:(t,e)=>i.invoke(t,e??{}),transformCallback:(t,e=!1)=>i.events.transformCallback(t,e),unregisterCallback:t=>i.events.unregisterCallback(t),convertFileSrc:t=>i.assetUrl(t),metadata:{currentWindow:{label:x},currentWebview:{windowLabel:x,label:x}},plugins:{path:{sep:"/",delimiter:":"}}},window.__TAURI_EVENT_PLUGIN_INTERNALS__={unregisterListener:(t,e)=>i.events.unregisterListener(t,e)}}function kt(i){typeof matchMedia=="function"&&matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{i.events.emit("tauri://theme-changed",i.windowTheme())})}let $="test";function vt(i){$=i.mode;const t={backend:i,mode:i.mode,reset:()=>i.reset(),coverage:()=>i.coverage(),fixturePaths:()=>i.fixtures.paths(),agentSidebar:()=>{const e=c.agentSidebar;if(!e)throw new Error("agent sidebar store not warmed");const n=e.useAgentSidebarStore;return{...n.getState(),threadOf:s=>n.getState().threads[s]??[],homeNeedsYou:s=>c.homeAttention?.useHomeAttention.getState().lit[s]===!0}},editorView:()=>{const e=c.editorRegistry;return e?e.getActiveEditor()?.view??null:null},commands:()=>{const e=c.commands;return e?e.listCommands().map(n=>{const s=e.commandGate(n);return{id:n.id,title:n.title(),state:s.state,...s.state==="disabled"?{reason:s.reason}:{}}}):[]},runCommand:(e,n)=>c.commands?.runCommand(e,n)??!1,openPath:async e=>{const{useWorkspaceStore:n}=await w(async()=>{const{useWorkspaceStore:s}=await import("./workspace-pEmgZakZ.js").then(o=>o.w);return{useWorkspaceStore:s}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]));await n.getState().openPath(e,{pin:!0})},emit:(e,n)=>i.events.emit(e,n),activeEvents:()=>i.events.activeEvents(),runCase:async e=>{const{editorGeometryCase:n,contextMenuCase:s,listIndentCase:o,listRenderCase:h,listFoldCase:u,longDocumentCase:g,insetsCase:b,tableUndoCase:C,blockArrowsCase:T,nestedIsolationCase:H,tableArrowsCase:U,propertiesCase:j,openSafetyCase:V,agentSidebarCase:B,settingsShapeCase:Y,panelRegionsCase:G,homesCase:X,emptyStateCase:z,terminalHostCase:q,flatStatesCase:J,panelChromeCase:K,emptyHintCentredCase:Z,chromeFollowupsCase:Q,intercomAgentPickerCase:ee,controlRulerCase:te,paletteOpenCase:ne,panelOpenCase:se,renderFallbackCase:ie,strikeMarksCase:oe,selectionPaintCase:ae,imageSizeCase:re,calloutSuffixCase:le,tableCellImagesCase:de,spellcheckCase:he,tabStateCase:ce,caretRulesCase:ue,whatsNewCase:pe}=await w(async()=>{const{editorGeometryCase:r,contextMenuCase:p,listIndentCase:d,listRenderCase:_,listFoldCase:y,longDocumentCase:fe,insetsCase:me,tableUndoCase:we,blockArrowsCase:ge,nestedIsolationCase:_e,tableArrowsCase:ye,propertiesCase:ke,openSafetyCase:ve,agentSidebarCase:be,settingsShapeCase:Se,panelRegionsCase:Ce,homesCase:Te,emptyStateCase:Ee,terminalHostCase:Ae,flatStatesCase:xe,panelChromeCase:Ie,emptyHintCentredCase:Oe,chromeFollowupsCase:Re,intercomAgentPickerCase:De,controlRulerCase:Le,paletteOpenCase:Pe,panelOpenCase:Me,renderFallbackCase:Fe,strikeMarksCase:Ne,selectionPaintCase:We,imageSizeCase:$e,calloutSuffixCase:He,tableCellImagesCase:Ue,spellcheckCase:je,tabStateCase:Ve,caretRulesCase:Be,whatsNewCase:Ye}=await import("./cases-f-6gyE20.js");return{editorGeometryCase:r,contextMenuCase:p,listIndentCase:d,listRenderCase:_,listFoldCase:y,longDocumentCase:fe,insetsCase:me,tableUndoCase:we,blockArrowsCase:ge,nestedIsolationCase:_e,tableArrowsCase:ye,propertiesCase:ke,openSafetyCase:ve,agentSidebarCase:be,settingsShapeCase:Se,panelRegionsCase:Ce,homesCase:Te,emptyStateCase:Ee,terminalHostCase:Ae,flatStatesCase:xe,panelChromeCase:Ie,emptyHintCentredCase:Oe,chromeFollowupsCase:Re,intercomAgentPickerCase:De,controlRulerCase:Le,paletteOpenCase:Pe,panelOpenCase:Me,renderFallbackCase:Fe,strikeMarksCase:Ne,selectionPaintCase:We,imageSizeCase:$e,calloutSuffixCase:He,tableCellImagesCase:Ue,spellcheckCase:je,tabStateCase:Ve,caretRulesCase:Be,whatsNewCase:Ye}},__vite__mapDeps([18,1,2,19,20,21,22,23,24,11,25,4,26,27,28])),l={openPath:t.openPath,runCommand:t.runCommand,exists:r=>i.fs.exists(r),removeFile:r=>i.fs.trash(r),writeFile:(r,p)=>i.fs.writeText(r,p),readFile:r=>i.fs.readText(r),view:()=>{const r=t.editorView();if(!r)throw new Error("no active editor after opening the case fixture");return r},agentSidebar:t.agentSidebar,emit:(r,p)=>{i.events.emit(r,p)},regions:()=>{const r=c.workspace?.useWorkspaceStore,p=c.panelLayout?.usePanelLayoutStore;if(!r||!p)throw new Error("region stores not warmed");return{memory:()=>{const d=r.getState();return{...d.regions,folded:[...d.regions.folded,...d.windowFolded]}},toggleLeft:d=>r.getState().toggleSidebar(d),setPanelOpen:(d,_)=>r.getState().setPanelOpen(d,_),setPanelFolded:(d,_)=>r.getState().setPanelFolded(d,_),widths:()=>p.getState().regionWidth,setWidth:(d,_)=>p.getState().setRegionWidth(d,_)}},setCliInstalled:r=>i.setCliInstalled(r),invocations:r=>i.invocations.get(r)??0,lastArgs:r=>i.lastArgs.get(r),windowTitles:()=>[...i.windowTitles],setAgentHosts:r=>i.setAgentHosts(r),setAgentSetup:(r,p)=>i.setAgentSetup(r,p),openSettings:()=>c.settingsPanel?.useSettingsPanelStore.getState().openSettings(),closeSettings:()=>c.settingsPanel?.useSettingsPanelStore.getState().closeSettings(),terminal:()=>{const r=c.terminal?.useTerminalStore,p=c.terminalMemory;if(!r||!p)throw new Error("terminal store not warmed");return{seed:async(d,_=[])=>{i.setTerminalSessions(d,_),r.setState({sessions:[],selected:{},selectedAgent:{}}),r.getState().sync(d.map(y=>({...y}))),await new Promise(y=>setTimeout(y,40))},storeIds:()=>r.getState().sessions.map(d=>d.id),selected:d=>r.getState().selected[d],selectedAgent:d=>r.getState().selectedAgent[d],remember:(d,_)=>{for(const y of p.readTerminals(d))p.forgetTerminal(d,y);for(const y of _)p.rememberTerminal(d,y);r.getState().loadRemembered(d)}}}},a=[];return(e==="editor-geometry"||e==="all")&&a.push(await n(l)),(e==="editor-context-menu"||e==="all")&&a.push(await s(l)),(e==="editor-list-indent"||e==="all")&&a.push(await o(l)),(e==="editor-list-render"||e==="all")&&a.push(await h(l)),(e==="editor-list-fold"||e==="all")&&a.push(await u(l)),(e==="editor-long-document"||e==="all")&&a.push(await g(l)),(e==="editor-insets"||e==="all")&&a.push(await b(l)),(e==="workspace-open-safety"||e==="all")&&a.push(await V(l)),(e==="editor-table-undo"||e==="all")&&a.push(await C(l)),(e==="editor-block-arrows"||e==="all")&&a.push(await T(l)),(e==="editor-nested-isolation"||e==="all")&&a.push(await H(l)),(e==="editor-table-arrows"||e==="all")&&a.push(await U(l)),(e==="editor-properties"||e==="all")&&a.push(await j(l)),(e==="agent-sidebar"||e==="all")&&a.push(await B(l)),(e==="settings-shape"||e==="all")&&a.push(await Y(l)),(e==="panel-regions"||e==="all")&&a.push(await G(l)),(e==="workspace-homes"||e==="all")&&a.push(await X(l)),(e==="workspace-empty-state"||e==="all")&&a.push(await z(l)),(e==="terminal-host"||e==="all")&&a.push(await q(l)),(e==="flat-states"||e==="all")&&a.push(await J(l)),(e==="panel-chrome"||e==="all")&&a.push(await K(l)),(e==="empty-hint-centred"||e==="all")&&a.push(await Z(l)),(e==="chrome-followups"||e==="all")&&a.push(await Q(l)),(e==="intercom-agent-picker"||e==="all")&&a.push(await ee(l)),(e==="control-ruler"||e==="all")&&a.push(await te(l)),(e==="palette-open"||e==="all")&&a.push(await ne(l)),(e==="panel-open"||e==="all")&&a.push(await se(l)),(e==="render-fallback"||e==="all")&&a.push(await ie(l)),(e==="strike-marks"||e==="all")&&a.push(await oe(l)),(e==="selection-paint"||e==="all")&&a.push(await ae(l)),(e==="image-size"||e==="all")&&a.push(await re(l)),(e==="callout-suffix"||e==="all")&&a.push(await le(l)),(e==="table-cell-images"||e==="all")&&a.push(await de(l)),(e==="spellcheck"||e==="all")&&a.push(await he(l)),(e==="tab-state"||e==="all")&&a.push(await ce(l)),(e==="caret-rules"||e==="all")&&a.push(await ue(l)),(e==="whats-new"||e==="all")&&a.push(await pe(l)),a}};window.__OPENMD_HARNESS__=t}const c={};async function Ct(){c.editorRegistry=await w(()=>import("./editorRegistry-FIZ3B9Tj.js").then(i=>i.e),__vite__mapDeps([29,20])),c.commands=await w(()=>import("./commands-A2kaVIG7.js"),__vite__mapDeps([30,31,19,20,1,2,29])),c.agentSidebar=await w(()=>import("./agentSidebar-NgNpWZ5e.js").then(i=>i.k),__vite__mapDeps([14,1,2,10,4,15])),c.settingsPanel=await w(()=>import("./settingsPanel-BktakBYO.js"),__vite__mapDeps([32,1,2])),c.workspace=await w(()=>import("./workspace-pEmgZakZ.js").then(i=>i.w),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])),c.panelLayout=await w(()=>import("./panelLayout-BDbNV0Zq.js").then(i=>i.O),__vite__mapDeps([6,7,8,1,2,9,10,4,11,12,13,14,15])),c.terminal=await w(()=>import("./terminal-Cd7zwX-J.js"),__vite__mapDeps([9,1,2,10,4,8])),c.terminalMemory=await w(()=>import("./terminalMemory-yrNltAsq.js").then(i=>i.d),[]),c.homeAttention=await w(()=>import("./homeAttention-Diu37WjL.js"),__vite__mapDeps([33,1,2])),$==="demo"&&await bt()}async function bt(){const{useWorkspaceStore:i}=await w(async()=>{const{useWorkspaceStore:t}=await import("./workspace-pEmgZakZ.js").then(e=>e.w);return{useWorkspaceStore:t}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]));await i.getState().openFolder(k),await i.getState().openPath(`${k}/About this demo.md`,{pin:!0})}async function Tt(i="test"){const t=new _t(i);if(i==="demo"){const{installCta:s,showCta:o}=await w(async()=>{const{installCta:u,showCta:g}=await import("./cta-BEC2ec7W.js");return{installCta:u,showCta:g}},__vite__mapDeps([34,1,2,35,22,36,31,37,27])),{installMobileBlock:h}=await w(async()=>{const{installMobileBlock:u}=await import("./mobileBlock-D351Z0rW.js");return{installMobileBlock:u}},__vite__mapDeps([38,1,2,37,22,27]));s(),h(),t.setRefusalPresenter((u,g)=>{g==="cta"&&o(u)})}yt(t),kt(t),vt(t);const{simulated:e,refused:n}=t.coverage();if(i==="demo"){console.info("OpenMarkdown demo — this is the real editor with a simulated filesystem. Your files live in this browser only. https://openmarkdown.dev");return}console.info(`[harness] simulated backend installed (${t.mode}) — ${e.length} commands simulated, ${n.length} refused. window.__OPENMD_HARNESS__ for the probe; refusals are deliberate (see openspec/specs/browser-harness).`)}export{Tt as installHarness,Ct as warmHarness};
