const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/workspace-BCFzPe6y.js","assets/index-BUvHEF0h.js","assets/index-CpaKKhfP.css","assets/event-D0KJZHHS.js","assets/tabStates-CVPqwzC4.js","assets/panelLayout-6NVHDQY1.js","assets/home-BsJlynsm.js","assets/terminalMemory-gMdEQhU7.js","assets/terminal-oBAT0c8U.js","assets/agentState-C7MQCmKd.js","assets/uiState-DC4aothW.js","assets/layout-CQTKvOWu.js","assets/lazySurface-DD6vLTjT.js","assets/agentSidebar-BhejpdCB.js","assets/presence-Cd5Z21Hw.js","assets/commands-u_3lhMjb.js","assets/overlayStack-CYjZnx-e.js","assets/formatCombo-DThVqyQ-.js","assets/outline-DmshfM29.js","assets/editorRegistry-f87ywU-Y.js","assets/agentEditSignpost-tfplAvvj.js","assets/revealFlash-E8lrOJu-.js","assets/signpost-B6uFhXbr.js","assets/changeSource-DKpwxdEn.js","assets/desktopApps-BgHkuexB.js","assets/externalOpen-BFPPp9ac.js","assets/switches-CNGyrKnl.js","assets/utils-DCADjnpI.js","assets/cloudSync-DHjnNaQ6.js","assets/channelClient-Cd4An3VG.js","assets/startupCards-BS7iFRSz.js","assets/startupCards-BoT-MvLn.js","assets/document-z-SujldV.js","assets/cases-DsZrIYnF.js","assets/propertyCommand-tKSHZ5UK.js","assets/control-BeAznQJE.js","assets/iconMetrics-C4sHaW3N.js","assets/fonts-B9j1WdpF.js","assets/imageResolve-BHBNQNcF.js","assets/emptyTier-DfEYmxPo.js","assets/settingsPanel-C8lAeKGd.js","assets/homeAttention-DkL1yqZ2.js","assets/cta-DvB9qnQx.js","assets/Overlay-_BFRBZzm.js","assets/IconButton-C8gBDa3T.js","assets/buttonClasses-BiRw0eSB.js","assets/Button-CSIE1SFD.js","assets/mobileBlock-DtjZ62ZL.js"])))=>i.map(i=>d[i]);
import{y as I,_ as u}from"./index-BUvHEF0h.js";import{a as Et,o as xt,s as Ot}from"./switches-CNGyrKnl.js";const R="/Users/harness",T=`${R}/OpenMarkdown`,Dt="/demo/assets/command-palette-CfoUFeNA.png",Rt="/demo/assets/window-U_tu_MaJ.png",Lt={"command-palette.png":Dt,"window.png":Rt},m=`${T}/Demo`,A=Lt,Nt=`# About this demo

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
`,L="openmd.demo.files.v1",Pt=2e6;function Ft(i,t,s){const e={};for(const n of i.paths())if(n.startsWith(`${t}/`)&&!i.isDir(n)&&!n.includes("/attachments/")&&s(n))try{e[n]=i.readText(n)}catch{}return e}function Mt(i,t,s){try{const e=JSON.stringify(Ft(i,t,s));if(e.length>Pt)return;localStorage.setItem(L,e)}catch{}}function Wt(){try{const i=localStorage.getItem(L);if(!i)return null;const t=JSON.parse(i);if(!t||typeof t!="object"||Array.isArray(t))return null;const s={};for(const[e,n]of Object.entries(t))typeof n=="string"&&(s[e]=n);return s}catch{return null}}class d extends Error{code;params;constructor(t,s={}){super(`${t} ${JSON.stringify(s)}`),this.code=t,this.params=s}toWire(){return{code:this.code,params:this.params}}}function p(i){const t=i.replace(/\/+$/,"");return t===""?"/":t}function w(i){const t=p(i),s=t.lastIndexOf("/");return s<0?"":s===0?"/":t.slice(0,s)}function $t(i){return Et(i)}function k(i,t){return i===".git"||i==="node_modules"?!1:t||$t(i)}const Ht=1e4;class Vt{nodes=new Map;constructor(){this.nodes.set("/",{kind:"dir"})}reset(){this.nodes.clear(),this.nodes.set("/",{kind:"dir"})}paths(){return[...this.nodes.keys()].sort()}exists(t){return this.nodes.has(p(t))}isDir(t){return this.nodes.get(p(t))?.kind==="dir"}mkdirp(t){const s=p(t);if(s==="/"||s==="")return;const e=s.split("/").filter(Boolean);let n="";for(const o of e){n=`${n}/${o}`;const l=this.nodes.get(n);if(l===void 0)this.nodes.set(n,{kind:"dir"});else if(l.kind!=="dir")throw new d("CREATE_DIR_FAILED",{path:n,detail:"not a directory"})}}readText(t){const s=p(t),e=this.nodes.get(s);if(e===void 0)throw new d("READ_FAILED",{path:s,detail:"no such file"});if(e.kind!=="file")throw new d("READ_FAILED",{path:s,detail:"not a UTF-8 file"});return e.text}readBytes(t){const s=p(t),e=this.nodes.get(s);if(e?.kind!=="bin")throw new d("READ_FAILED",{path:s,detail:"no such binary file"});return e.bytes}writeText(t,s){const e=p(t);this.mkdirp(w(e)),this.nodes.set(e,{kind:"file",text:s})}writeBytes(t,s){const e=p(t);this.mkdirp(w(e)),this.nodes.set(e,{kind:"bin",bytes:s})}createNote(t){const s=p(t);if(this.nodes.has(s))throw new d("CREATE_FAILED",{path:s,detail:"file exists"});this.writeText(s,"")}createFolder(t){const s=p(t);if(this.nodes.has(s))throw new d("CREATE_FOLDER_FAILED",{path:s,detail:"file exists"});this.mkdirp(s)}homeListDir(t){const s=p(t);if(!this.isDir(s))throw new d("LIST_DIR_FAILED",{path:s,detail:"not a directory"});const e=s==="/"?"/":`${s}/`,n=[];for(const[o,l]of this.nodes){if(o===s||!o.startsWith(e))continue;const c=o.slice(e.length);if(c.includes("/"))continue;const f=l.kind==="dir";k(c,f)&&n.push({name:c,path:o,is_dir:f})}return n.sort((o,l)=>Number(l.is_dir)-Number(o.is_dir)||(o.name<l.name?-1:o.name>l.name?1:0)),n}homeFiles(t,s=Ht){const e=p(t);if(!this.isDir(e))throw new d("LIST_DIR_FAILED",{path:e,detail:"not a directory"});const n=e==="/"?"/":`${e}/`,o=[];for(const[l,c]of this.nodes){if(c.kind==="dir"||!l.startsWith(n))continue;const f=l.slice(n.length),y=f.split("/"),v=y.pop();y.every(C=>k(C,!0))&&k(v,!1)&&o.push(f)}return o.sort(),o.length>s?{files:o.slice(0,s),truncated:!0}:{files:o,truncated:!1}}rename(t,s){if(s===""||s.includes("/")||s.includes(":"))throw new d("INVALID_NAME",{name:s});const e=p(t);if(!this.nodes.has(e))throw new d("RENAME_FAILED",{path:e,detail:"no such file"});const n=w(e),o=n==="/"?`/${s}`:`${n}/${s}`;if(this.nodes.has(o))throw new d("NAME_EXISTS",{name:s});return this.movePrefix(e,o),o}trash(t){const s=p(t);if(!this.nodes.has(s))throw new d("TRASH_FAILED",{path:s,detail:"no such file"});for(const e of[...this.nodes.keys()])(e===s||e.startsWith(`${s}/`))&&this.nodes.delete(e)}movePrefix(t,s){for(const e of[...this.nodes.keys()]){if(e!==t&&!e.startsWith(`${t}/`))continue;const n=this.nodes.get(e);this.nodes.delete(e),this.nodes.set(s+e.slice(t.length),n)}}}const Ut=[],Bt=`# Welcome to OpenMarkdown

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
`,jt=["png","jpg","jpeg","gif","svg","webp"];function E(i){const t=i.split(".").pop()?.toLowerCase();return t!==void 0&&jt.includes(t)}class Yt{constructor(t,s="test"){this.fs=t,this.mode=s}fs;mode;unloaded=new Set;seedPaths(){return this.mode!=="demo"?Ut:[`${m}/About this demo.md`,`${m}/Welcome.md`,...Object.keys(A).map(t=>`${m}/attachments/${t}`)]}seed(){this.unloaded.clear(),this.fs.mkdirp(T),this.mode==="demo"&&this.fs.mkdirp(`${m}/attachments`);for(const t of this.seedPaths())E(t)?this.fs.writeBytes(t,new Uint8Array):this.fs.writeText(t,""),this.unloaded.add(t)}paths(){return[...this.seedPaths()]}async ensureLoaded(t){if(!this.unloaded.has(t))return;if(this.unloaded.delete(t),this.mode==="demo"){await this.loadDemoPath(t);return}const s=await fetch(t);if(!s.ok)throw new d("READ_FAILED",{path:t,detail:`dev server ${s.status}`});E(t)?this.fs.writeBytes(t,new Uint8Array(await s.arrayBuffer())):this.fs.writeText(t,await s.text())}async loadDemoPath(t){const s=t.slice(t.lastIndexOf("/")+1);if(t.includes("/attachments/")){const e=await fetch(A[s]??"");if(!e.ok)throw new d("READ_FAILED",{path:t,detail:`dev server ${e.status}`});this.fs.writeBytes(t,new Uint8Array(await e.arrayBuffer()));return}if(s==="Welcome.md"){this.fs.writeText(t,await this.welcomeTemplate());return}this.fs.writeText(t,Nt)}isPlaceholder(t){return this.unloaded.has(t)}markWritten(t){this.unloaded.delete(t)}async welcomeTemplate(){return Bt}}class Gt{callbacks=new Map;nextCallbackId=1;listeners=new Map;nextEventId=1;transformCallback(t,s=!1){const e=this.nextCallbackId++;return this.callbacks.set(e,{fn:t??(()=>{}),once:s}),e}unregisterCallback(t){this.callbacks.delete(t)}listen(t,s){let e=this.listeners.get(t);return e||(e=new Set,this.listeners.set(t,e)),e.add(s),this.nextEventId++}unregisterListener(t,s){const e=this.listeners.get(t);if(e){for(const n of[...e])this.eventIdOf.get(n)===s&&e.delete(n);e.size===0&&this.listeners.delete(t)}}eventIdOf=new Map;pair(t,s){this.eventIdOf.set(t,s)}emit(t,s){const e=this.listeners.get(t);if(!e)return 0;let n=0;for(const o of[...e]){const l=this.callbacks.get(o);if(!l)continue;const c={event:t,id:this.eventIdOf.get(o)??o,payload:s};l.fn(c),n++,l.once&&this.callbacks.delete(o)}return n}activeEvents(){return[...this.listeners.keys()].sort()}reset(){this.callbacks.clear(),this.listeners.clear(),this.eventIdOf.clear()}}const zt="HARNESS_UNSUPPORTED",N={sync_tray_state:"native tray",relaunch:"native process restart",relaunch_for_update:"native process restart","plugin:window|close":"native window","plugin:window|set_always_on_top":"native window",install_cli:"writes to the host filesystem",uninstall_cli:"writes to the host filesystem",install_visual:"writes to the host filesystem",uninstall_visual:"writes to the host filesystem",visual_status:"probes the host filesystem",agent_editor_status:"probes the host filesystem",agent_editor_enable:"writes to the host filesystem",agent_editor_disable:"writes to the host filesystem",desktop_app_connect:"writes another app's settings",desktop_app_disconnect:"writes another app's settings",default_app_status:"OS document-type registration",set_default_app:"OS document-type registration",revert_default_app:"OS document-type registration",open_external:"native shell open",billing_checkout:"opens Stripe Checkout in the system browser",billing_portal:"opens the Stripe portal in the system browser",reveal_in_file_manager:"native file manager",share_file:"native share sheet",export_pdf:"native print-to-file","plugin:dialog|open":"native file picker",update_attempt:"signed release feed",session_complete:"unix socket bridge",reveal_complete:"unix socket bridge",report_workspace_state:"unix socket bridge",bridge_response:"unix socket bridge",sidebar_send:"unix socket bridge",terminal_open:"native PTY",terminal_write:"native PTY",terminal_resize:"native PTY",terminal_attach:"native PTY",app_quit:"native process",quit_confirmed:"native process",watch_file:"no filesystem watcher in a browser",unwatch_file:"no filesystem watcher in a browser",spell_check_paragraphs:"native spell checker",spell_suggestions:"native spell checker",spell_close_document:"native spell checker"},Jt={terminal_open:"cta",sidebar_send:"cta",install_cli:"cta",uninstall_cli:"cta","plugin:window|set_always_on_top":"cta","plugin:dialog|open":"cta",set_default_app:"cta",revert_default_app:"cta",install_visual:"hide",uninstall_visual:"hide",agent_editor_enable:"hide",agent_editor_disable:"hide",desktop_app_connect:"hide",desktop_app_disconnect:"hide",billing_checkout:"hide",billing_portal:"hide",reveal_in_file_manager:"hide",share_file:"hide",export_pdf:"hide","plugin:window|close":"hide",relaunch_for_update:"hide",app_quit:"hide",quit_confirmed:"hide",spell_check_paragraphs:"hide",spell_suggestions:"hide",spell_close_document:"hide",open_external:"native",relaunch:"native",default_app_status:"mute",visual_status:"mute",agent_editor_status:"mute",sync_tray_state:"mute",update_attempt:"mute",terminal_write:"mute",terminal_resize:"mute",terminal_attach:"mute",watch_file:"mute",unwatch_file:"mute",bridge_response:"mute",session_complete:"mute",reveal_complete:"mute",report_workspace_state:"mute"},qt={default_app_status:{is_default:!1,has_previous:!1},visual_status:{state:"not_configured",paths:[]},agent_editor_status:[],update_attempt:{outcome:"no_update"},sync_tray_state:null,watch_file:null,unwatch_file:null,bridge_response:null,session_complete:null,reveal_complete:null,report_workspace_state:null},Xt=new Set(["write_file","create_note","create_folder","rename_path","trash_path","write_attachment"]);function Kt(i){let t;try{t=new URL(typeof i=="string"?i:"")}catch{return{outcome:"refused",reason:"malformed",scheme:null}}return t.protocol!=="https:"&&t.protocol!=="http:"?{outcome:"refused",reason:"scheme",scheme:t.protocol.replace(/:$/,"")}:(window.open(t.href,"_blank","noopener,noreferrer"),{outcome:"opened"})}function x(i){return Jt[i]}function _(i){return{code:zt,params:{command:i,reason:N[i]??"not implemented in the browser harness"}}}function O(){return{resident:!0,language:null,theme:null,scratch_dir:null,welcome_seed_rev:0,preferred_agent:null,check_spelling:!1,last_seen_version:null,setup_card_rev:0,chat_apps_card_seen:!1,update_source_memory:{last_good:null,last_good_failed:!1},update_fail_notice:null}}function S(i){return I(i)??I(typeof navigator>"u"?null:navigator.language)??"en"}function Zt(i){let t=0xcbf29ce484222325n;const s=0xffffffffffffffffn;for(const e of i)t=(t^BigInt(e))&s,t=t*0x100000001b3n&s;return t}function D(i){const t=i.toLowerCase();return t==="jpeg"||t==="jpg"?"jpg":t==="svg+xml"||t==="svg"?"svg":t}function Qt(i){const t=(i??"").trim();if(t.startsWith("image/"))return D(t.slice(6));const s=t.lastIndexOf(".");if(s>=0){const e=t.slice(s+1);if(e.length>0&&e.length<=5&&/^[a-zA-Z0-9]+$/.test(e))return D(e)}return"png"}function es(){const i=new Date,t=s=>String(s).padStart(2,"0");return`${i.getFullYear()}-${t(i.getMonth()+1)}-${t(i.getDate())}`}function ts(i,t){const e={claude:{via:"plugin",install:["claude plugin marketplace add OpenMarkdown-dev/OpenMarkdown-releases","claude plugin install openmarkdown@openmarkdown"],enable:["claude plugin enable openmarkdown@openmarkdown"],undo:"claude plugin uninstall openmarkdown@openmarkdown"},codex:{via:"mcpServer",install:["codex mcp add openmd -- openmd mcp"],enable:[],undo:"codex mcp remove openmd"}}[i];if(!e)return null;const n=t==="missing"?e.install:t==="disabled"?e.enable:[];return{state:t,commands:n,undo:e.undo,via:e.via}}class g{mode;present;fs=new Vt;fixtures;events=new Gt;objectUrls=new Map;settings=O();bootedAt=Date.now();startupConsumed=!1;cliInstalled=!1;agentHosts=[];agentSetup={};desktopApps=[];syncStatus={state:"off",pending:0};syncConfig={root:null,server:"https://sync-staging.openmarkdown.dev",token:null,account:null,device:null};syncView(){const t=String(this.syncConfig.server??""),s=/^[a-z]+:\/\/(127\.0\.0\.1|localhost|\[::1\])(:|\/|$)/i.test(t),n=(typeof this.syncConfig.root=="string"?this.syncConfig.root:null)?.split("/").filter(Boolean).pop();return{...this.syncConfig,deviceDefault:"Harness-Mac",loopback:s,signedIn:this.syncConfig.account!=null,productionServer:"https://sync.openmarkdown.dev",localServer:"http://127.0.0.1:8787",...n?{folderName:n}:{}}}syncConflicts=[];cloudSummary={files:0,folderName:null};billingView=g.freeBilling();static freeBilling(){return{account:{plan:"free",paidUntil:null,source:null,beta:!1,lapsed:!1,readOnly:!1,renews:!1,interval:null,marketing:!1},confirmedAt:Date.now(),live:!0}}terminalSessions=[];terminalRunning=[];handlers;constructor(t="test"){this.mode=t,this.fixtures=new Yt(this.fs,t),this.handlers=this.buildHandlers(),this.reset(),this.cliInstalled=t==="demo"}reset(){for(const t of this.objectUrls.values())URL.revokeObjectURL(t);this.objectUrls.clear(),this.fs.reset(),this.events.reset(),this.fixtures.seed(),this.mode==="demo"&&this.restoreDemoFiles(),this.settings=O(),this.startupConsumed=!1,this.cliInstalled=this.mode==="demo",this.agentHosts=[],this.agentSetup={},this.desktopApps=[],this.syncStatus={state:"off",pending:0},this.syncConfig={root:null,server:"https://sync-staging.openmarkdown.dev",token:null,account:null,device:null},this.syncConflicts=[],this.cloudSummary={files:0,folderName:null},this.billingView=g.freeBilling(),this.terminalSessions=[],this.terminalRunning=[]}setTerminalSessions(t,s=[]){this.terminalSessions=t.map(e=>({...e})),this.terminalRunning=[...s]}setCliInstalled(t){this.cliInstalled=t}restoreDemoFiles(){const t=Wt();if(t)for(const[s,e]of Object.entries(t)){const n=s.slice(0,s.lastIndexOf("/"));this.fs.mkdirp(n),this.fs.writeText(s,e),this.fixtures.markWritten(s)}}setRefusalPresenter(t){this.present=t}setAgentHosts(t){this.agentHosts=[...t]}setDesktopApps(t){this.desktopApps=[...t]}setSync(t,s){this.syncStatus={pending:0,...t},this.events.emit("om:sync-status",{...this.syncStatus}),s&&(this.syncConflicts=s.map(e=>({seen:!1,...e})),this.events.emit("om:sync-conflict",s[0]??{}))}signInFailure=null;setSignInFailure(t,s=0){this.signInFailure=t?{reason:t,delayMs:s}:null}history={items:[],delayMs:0,fail:!1};setHistory(t){this.history={items:t.items??[],delayMs:t.delayMs??0,fail:t.fail??!1}}setSyncAccount(t){this.syncConfig=t?{...this.syncConfig,account:"alice@example.com",accountName:"Alice Liddell",accountGivenName:"Alice",accountId:"user_01HARNESSALICE",welcomed:!0}:{...this.syncConfig,token:null,account:null,accountName:null,accountGivenName:null,accountId:null}}setSyncRoot(t){this.syncConfig={...this.syncConfig,root:t}}setCloudSummary(t){this.cloudSummary={...t}}setBilling(t){this.billingView={confirmedAt:Date.now(),live:!0,...t,account:{...g.freeBilling().account,...t.account}}}setAgentSetup(t,s){this.agentSetup={...this.agentSetup,[t]:s}}coverage(){return{simulated:Object.keys(this.handlers).sort(),refused:Object.entries(N).map(([t,s])=>({command:t,reason:s,tier:x(t)})).sort((t,s)=>t.command<s.command?-1:1)}}simulatedCommands(){return Object.keys(this.handlers).sort()}async invoke(t,s={}){this.invocations.set(t,(this.invocations.get(t)??0)+1),this.lastArgs.set(t,s);const e=this.handlers[t];if(!e){if(this.mode==="demo"){const n=x(t)??"cta";if(n==="mute")return qt[t]??null;if(n==="native")return this.nativeEquivalent(t,s);throw this.present?.(t,n),{..._(t),presented:!0}}throw _(t)}try{const n=await e(s);return this.mode==="demo"&&Xt.has(t)&&Mt(this.fs,m,o=>!this.fixtures.isPlaceholder(o)),n}catch(n){throw n instanceof d?n.toWire():n}}nativeEquivalent(t,s){if(t==="relaunch")return location.reload(),null;if(t==="open_external")return Kt(s.url);throw _(t)}assetUrl(t){const s=this.objectUrls.get(t);if(s)return s;if(t.startsWith("/fixtures/"))return t;if(this.mode==="demo"){const e=t.slice(t.lastIndexOf("/")+1),n=A[e];if(n&&t.includes("/attachments/"))return n}try{const e=this.fs.readBytes(t),n=URL.createObjectURL(new Blob([e]));return this.objectUrls.set(t,n),n}catch{return t}}windowTitles=[];invocations=new Map;lastArgs=new Map;homeVersions=new Map;homeVersion(t){return this.homeVersions.get(t)??1}windowTheme(){return this.settings.theme==="dark"||this.settings.theme==="light"?this.settings.theme:typeof matchMedia=="function"&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}scratchDir(){return this.mode==="demo"?m:this.settings.scratch_dir??T}async readFileContent(t){await this.fixtures.ensureLoaded(t);const s=this.fs.readText(t),e=this.provenance.get(t);return{path:t,content:s,source:e&&e.text===s?e.source:"external"}}provenance=new Map;writeAs(t,s,e){this.fs.writeText(t,s),this.provenance.set(t,{text:s,source:e})}buildHandlers(){const t=this.fs;return{startup_elapsed_ms:()=>Date.now()-this.bootedAt,startup_kind:()=>this.startupConsumed?"hot":(this.startupConsumed=!0,"cold"),app_channel:()=>this.mode==="demo"?{channel:"release",productName:"OpenMarkdown",updates:!0,sync:!1}:{channel:"dev",productName:"OpenMarkdown Dev",updates:!1,sync:!0},menu_gate:()=>null,sync_status:()=>({...this.syncStatus}),sync_get_config:()=>this.syncView(),sync_set_config:s=>(this.syncConfig={...s.config,account:this.syncConfig.account,accountName:this.syncConfig.accountName,accountGivenName:this.syncConfig.accountGivenName,accountId:this.syncConfig.accountId,welcomed:this.syncConfig.welcomed},this.setSync(this.syncConfig.root?{state:"connecting",root:this.syncConfig.root}:{state:"off"}),this.syncView()),sync_sign_in:async()=>{const s=this.signInFailure;if(s)throw await new Promise(n=>setTimeout(n,s.delayMs)),{code:"SYNC_SIGN_IN_FAILED",params:{reason:s.reason,detail:"harness"}};this.events.emit("om:sync-sign-in-opened",null);const e=this.syncConfig.welcomed!==!0;return this.syncConfig={...this.syncConfig,account:"alice@example.com",accountName:"Alice Liddell",accountGivenName:"Alice",accountId:"user_01HARNESSALICE",welcomed:!0},this.syncConfig.root&&this.setSync({state:"connecting",root:this.syncConfig.root}),{...this.syncView(),...e?{welcome:!0}:{}}},sync_sign_out:()=>(this.syncConfig={...this.syncConfig,token:null,account:null,accountName:null,accountGivenName:null,accountId:null},this.setSync(this.syncConfig.root?{state:"paused",pause:{kind:"signIn"},root:this.syncConfig.root}:{state:"off"}),this.syncView()),sync_start:()=>this.setSync({state:"connecting",root:this.syncConfig.root}),sync_confirm_import:()=>this.setSync({state:"synced",root:this.syncConfig.root,lastSynced:Date.now()}),sync_cancel_import:()=>this.setSync({state:"stopped",reason:"importCancelled",root:this.syncConfig.root}),sync_keep_deletes:()=>this.setSync({state:"synced",root:this.syncConfig.root,lastSynced:Date.now()}),sync_restore_from_cloud:()=>this.setSync({state:"synced",root:this.syncConfig.root,lastSynced:Date.now()}),sync_conflicts:()=>this.syncConflicts.map(s=>({...s})),sync_conflict_dismiss:s=>{this.syncConflicts=this.syncConflicts.map(e=>e.id===s.id?{...e,seen:!0}:e)},sync_history:async()=>{const s=this.history;if(s.delayMs>0&&await new Promise(e=>setTimeout(e,s.delayMs)),s.fail)throw{code:"SYNC_OFFLINE",params:{}};return{fileId:"00000000-0000-7000-8000-000000000000",items:s.items.map(e=>({...e})),more:!1,checkpointMinutes:10}},sync_revision:()=>{throw{code:"SYNC_NOT_FOUND",params:{}}},sync_deleted:()=>({items:[],more:!1}),sync_restore_deleted:()=>null,sync_restore_version:()=>null,sync_mark_restore:()=>null,sync_erase:()=>this.setSync({state:"stopped",reason:"erasedHere",erasedAt:Date.now(),root:this.syncConfig.root}),sync_relink:()=>this.setSync({state:"connecting",root:this.syncConfig.root}),sync_skipped:()=>[],sync_devices:()=>[{name:"Harness",platform:"desktop",lastSeen:Date.now(),self:!0}],sync_usage:()=>({files:3,textBytes:1200,attachmentBytes:0,usedBytes:1200,limitBytes:64*1048576}),billing_refresh:()=>JSON.parse(JSON.stringify(this.billingView)),billing_marketing:s=>(this.billingView={...this.billingView,account:{...this.billingView.account,marketing:s.optIn===!0},confirmedAt:Date.now(),live:!0},JSON.parse(JSON.stringify(this.billingView))),sync_retry_uploads:()=>this.setSync({state:"synced",root:this.syncConfig.root,lastSynced:Date.now()}),sync_cloud_summary:()=>({...this.cloudSummary}),sync_download_target:s=>`/Users/harness/Documents/${String(s.name??"Notes")}`,sync_folder_usable:s=>!this.fs.exists(String(s.path)),sync_make_download_folder:()=>null,perf_log:s=>(this.mode==="demo"||console.debug("[harness perf]",s.line),null),cli_status:()=>({installed:this.cliInstalled,paths:this.cliInstalled?["/usr/local/bin/openmd"]:[]}),bundled_cli_status:()=>({installed:this.cliInstalled}),desktop_apps:()=>this.desktopApps,agent_profiles:()=>[...[{id:"claude",name:"Claude Code",command:"claude '/openmarkdown:listen'",resumable:!0},{id:"codex",name:"Codex",command:"codex '<bootstrap>'",resumable:!1},{id:"gemini",name:"Gemini CLI",command:"gemini -i '<bootstrap>'",resumable:!1},{id:"opencode",name:"opencode",command:"opencode run '<bootstrap>'",resumable:!1}].map(e=>{const n=this.agentHosts.includes(e.id),o=this.agentSetup[e.id];return{...e,kind:"agent",installed:n,setup:n&&o?ts(e.id,o):null}}),{id:"shell",name:"shell",kind:"shell",installed:!0,resumable:!1,command:""}],agent_states:()=>[],session_attention:()=>({version:0,rows:[]}),session_attention_seen:()=>null,terminal_list:()=>this.terminalSessions.map(s=>({...s})),terminal_running:()=>[...this.terminalRunning],terminal_close:s=>{const e=s.id;return this.terminalSessions=this.terminalSessions.filter(n=>n.id!==e),this.terminalRunning=this.terminalRunning.filter(n=>n!==e),null},capabilities:()=>({agentBridge:this.mode==="demo"}),feedback_context:()=>({version:"0.0.0-harness",os:`${navigator.platform||"browser"} (harness)`,channel:"dev",language:S(this.settings.language)}),paths_exist:s=>s.paths.map(e=>t.exists(e)),git_root_of:s=>{const e=s.path;let n=t.isDir(e)?e:w(e);for(;;){if(t.exists(`${n==="/"?"":n}/.git`))return{path:e,root:n};if(n==="/"||n==="")return{path:e,root:null};n=w(n)}},default_home_dir:()=>this.scratchDir(),is_dir:s=>t.isDir(s.path),read_file:s=>this.readFileContent(s.path),open_image:s=>{const e=s.path;if(xt(e)!=="image")throw{code:"NOT_AN_IMAGE",params:{path:e}};if(!t.exists(e)||t.isDir(e))throw{code:"READ_FAILED",params:{path:e,detail:"not found"}};return{path:e}},write_file:s=>{const e=s.path;t.writeText(e,s.content),this.provenance.delete(e),this.fixtures.markWritten(e)},home_list_dir:s=>{const e=s.root,n=s.dir;if(n!==e&&!n.startsWith(`${e==="/"?"":e}/`))throw new d("NOT_IN_HOME",{path:n,root:e});return t.homeListDir(n)},home_files:s=>({...t.homeFiles(s.root),version:this.homeVersion(s.root)}),home_refresh:s=>{const e=s.root,n=s.dir??null,o=this.homeVersion(e)+1;this.homeVersions.set(e,o),this.events.emit("om:home-changed",{root:e,version:o,dirs:[n??e],all:n===null})},create_note:s=>{const e=s.path;t.createNote(e),this.fixtures.markWritten(e)},create_folder:s=>t.createFolder(s.path),trash_path:s=>t.trash(s.path),rename_path:s=>t.rename(s.path,s.newName),write_attachment:s=>{const e=s.docPath,n=Uint8Array.from(s.bytes),o=`${w(e)}/attachments`,l=`img-${Zt(n).toString(16).padStart(16,"0")}.${Qt(s.hint)}`,c=`${o}/${l}`;return t.exists(c)||t.writeBytes(c,n),`attachments/${l}`},open_scratch_note:async()=>{const s=`${this.scratchDir()}/${es()}.md`;return t.exists(s)||(t.writeText(s,""),this.fixtures.markWritten(s)),this.readFileContent(s)},open_welcome_note:async()=>{const s=`${this.scratchDir()}/Welcome.md`;return t.exists(s)||(t.writeText(s,await this.fixtures.welcomeTemplate()),this.fixtures.markWritten(s)),this.readFileContent(s)},welcome_startup:async()=>{if(this.mode==="demo"||this.settings.welcome_seed_rev>=1)return null;const s=`${this.scratchDir()}/Welcome.md`;return t.exists(s)||(t.writeText(s,await this.fixtures.welcomeTemplate()),this.fixtures.markWritten(s)),this.readFileContent(s)},mark_welcome_seeded:()=>{this.settings.welcome_seed_rev=1},get_settings:()=>({...this.settings}),patch_settings:s=>{const e=s.patch;for(const n of Object.keys(e))if(!(n in this.settings))throw{code:"UNKNOWN_SETTING",params:{key:n}};return this.settings={...this.settings,...e},this.events.emit("om:settings-changed",{...this.settings}),{...this.settings}},get_language:()=>S(this.settings.language),resolve_language:s=>S(s.pref),take_pending_open:()=>[],take_pending_actions:()=>[],"plugin:event|listen":s=>{const e=s.handler,n=this.events.listen(s.event,e);return this.events.pair(e,n),n},"plugin:event|unlisten":()=>{},"plugin:event|emit":s=>{this.events.emit(s.event,s.payload)},"plugin:event|emit_to":s=>{this.events.emit(s.event,s.payload)},"plugin:app|version":()=>"0.0.0-harness","plugin:path|resolve_directory":s=>{if(s.directory===21)return R;throw _(`plugin:path|resolve_directory(${String(s.directory)})`)},"plugin:window|theme":()=>this.windowTheme(),"plugin:window|set_title":s=>(this.windowTitles.push(String(s.value)),null)}}}const b="main";function ss(i){window.__TAURI_INTERNALS__={invoke:(t,s)=>i.invoke(t,s??{}),transformCallback:(t,s=!1)=>i.events.transformCallback(t,s),unregisterCallback:t=>i.events.unregisterCallback(t),convertFileSrc:t=>i.assetUrl(t),metadata:{currentWindow:{label:b},currentWebview:{windowLabel:b,label:b}},plugins:{path:{sep:"/",delimiter:":"}}},window.__TAURI_EVENT_PLUGIN_INTERNALS__={unregisterListener:(t,s)=>i.events.unregisterListener(t,s)}}function ns(i){typeof matchMedia=="function"&&matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{i.events.emit("tauri://theme-changed",i.windowTheme())})}let P="test";function is(i){P=i.mode;const t={backend:i,mode:i.mode,reset:()=>i.reset(),coverage:()=>i.coverage(),fixturePaths:()=>i.fixtures.paths(),agentSidebar:()=>{const e=h.agentSidebar;if(!e)throw new Error("agent sidebar store not warmed");const n=e.useAgentSidebarStore;return{...n.getState(),threadOf:o=>n.getState().threads[o]??[],homeNeedsYou:o=>h.homeAttention?.useHomeAttention.getState().lit[o]===!0}},editorView:()=>{const e=h.editorRegistry;return e?e.getActiveEditor()?.view??null:null},commands:()=>{const e=h.commands;return e?e.listCommands().map(n=>{const o=e.commandGate(n);return{id:n.id,title:n.title(),state:o.state,...o.state==="disabled"?{reason:o.reason}:{}}}):[]},runCommand:(e,n)=>h.commands?.runCommand(e,n)??!1,openPath:async e=>{const{useWorkspaceStore:n}=await u(async()=>{const{useWorkspaceStore:o}=await import("./workspace-BCFzPe6y.js").then(l=>l.w);return{useWorkspaceStore:o}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]));await n.getState().openPath(e,{pin:!0})},emit:(e,n)=>i.events.emit(e,n),activeEvents:()=>i.events.activeEvents(),runCase:async e=>{const{editorGeometryCase:n,contextMenuCase:o,listIndentCase:l,listRenderCase:c,listFoldCase:f,longDocumentCase:y,insetsCase:v,tableUndoCase:C,tableLocalityCase:F,blockArrowsCase:M,nestedIsolationCase:W,tableArrowsCase:$,propertiesCase:H,openSafetyCase:V,agentSidebarCase:U,intercomTwoWaysCase:B,launchSwitchesCase:j,settingsShapeCase:Y,panelRegionsCase:G,homesCase:z,emptyStateCase:J,terminalHostCase:q,flatStatesCase:X,panelChromeCase:K,emptyHintCentredCase:Z,chromeFollowupsCase:Q,intercomAgentPickerCase:ee,controlRulerCase:te,paletteOpenCase:se,panelOpenCase:ne,renderFallbackCase:ie,mermaidRenderCase:oe,strikeMarksCase:ae,editorDialectCase:re,cellTreeCase:le,cellFixesCase:ce,selectionPaintCase:he,imageSizeCase:de,calloutSuffixCase:ue,tableCellImagesCase:pe,spellcheckCase:fe,tabStateCase:me,caretRulesCase:we,whatsNewCase:ge,setupCardCase:ye,tooltipCase:_e,codeFontCase:ve,listCaretHomeCase:Ce,viewerCase:ke,syncAttributionCase:Se,contentWidthCase:be,shellFitsCase:Ae,historyLiveCase:Te,historyEntriesCase:Ie}=await u(async()=>{const{editorGeometryCase:Ee,contextMenuCase:xe,listIndentCase:Oe,listRenderCase:De,listFoldCase:Re,longDocumentCase:Le,insetsCase:Ne,tableUndoCase:Pe,tableLocalityCase:Fe,blockArrowsCase:Me,nestedIsolationCase:We,tableArrowsCase:$e,propertiesCase:He,openSafetyCase:Ve,agentSidebarCase:Ue,intercomTwoWaysCase:Be,launchSwitchesCase:je,settingsShapeCase:Ye,panelRegionsCase:Ge,homesCase:ze,emptyStateCase:Je,terminalHostCase:qe,flatStatesCase:Xe,panelChromeCase:Ke,emptyHintCentredCase:Ze,chromeFollowupsCase:Qe,intercomAgentPickerCase:et,controlRulerCase:tt,paletteOpenCase:st,panelOpenCase:nt,renderFallbackCase:it,mermaidRenderCase:ot,strikeMarksCase:at,editorDialectCase:rt,cellTreeCase:lt,cellFixesCase:ct,selectionPaintCase:ht,imageSizeCase:dt,calloutSuffixCase:ut,tableCellImagesCase:pt,spellcheckCase:ft,tabStateCase:mt,caretRulesCase:wt,whatsNewCase:gt,setupCardCase:yt,tooltipCase:_t,codeFontCase:vt,listCaretHomeCase:Ct,viewerCase:kt,syncAttributionCase:St,contentWidthCase:bt,shellFitsCase:At,historyLiveCase:Tt,historyEntriesCase:It}=await import("./cases-DsZrIYnF.js");return{editorGeometryCase:Ee,contextMenuCase:xe,listIndentCase:Oe,listRenderCase:De,listFoldCase:Re,longDocumentCase:Le,insetsCase:Ne,tableUndoCase:Pe,tableLocalityCase:Fe,blockArrowsCase:Me,nestedIsolationCase:We,tableArrowsCase:$e,propertiesCase:He,openSafetyCase:Ve,agentSidebarCase:Ue,intercomTwoWaysCase:Be,launchSwitchesCase:je,settingsShapeCase:Ye,panelRegionsCase:Ge,homesCase:ze,emptyStateCase:Je,terminalHostCase:qe,flatStatesCase:Xe,panelChromeCase:Ke,emptyHintCentredCase:Ze,chromeFollowupsCase:Qe,intercomAgentPickerCase:et,controlRulerCase:tt,paletteOpenCase:st,panelOpenCase:nt,renderFallbackCase:it,mermaidRenderCase:ot,strikeMarksCase:at,editorDialectCase:rt,cellTreeCase:lt,cellFixesCase:ct,selectionPaintCase:ht,imageSizeCase:dt,calloutSuffixCase:ut,tableCellImagesCase:pt,spellcheckCase:ft,tabStateCase:mt,caretRulesCase:wt,whatsNewCase:gt,setupCardCase:yt,tooltipCase:_t,codeFontCase:vt,listCaretHomeCase:Ct,viewerCase:kt,syncAttributionCase:St,contentWidthCase:bt,shellFitsCase:At,historyLiveCase:Tt,historyEntriesCase:It}},__vite__mapDeps([33,1,2,17,18,34,3,35,16,36,37,10,38,39])),r=s(),a=[];return(e==="editor-geometry"||e==="all")&&a.push(await n(r)),(e==="editor-context-menu"||e==="all")&&a.push(await o(r)),(e==="editor-list-indent"||e==="all")&&a.push(await l(r)),(e==="editor-list-render"||e==="all")&&a.push(await c(r)),(e==="editor-list-fold"||e==="all")&&a.push(await f(r)),(e==="editor-long-document"||e==="all")&&a.push(await y(r)),(e==="editor-insets"||e==="all")&&a.push(await v(r)),(e==="workspace-open-safety"||e==="all")&&a.push(await V(r)),(e==="editor-table-undo"||e==="all")&&a.push(await C(r)),(e==="editor-table-locality"||e==="all")&&a.push(await F(r)),(e==="editor-block-arrows"||e==="all")&&a.push(await M(r)),(e==="editor-nested-isolation"||e==="all")&&a.push(await W(r)),(e==="editor-table-arrows"||e==="all")&&a.push(await $(r)),(e==="editor-properties"||e==="all")&&a.push(await H(r)),(e==="agent-sidebar"||e==="all")&&a.push(await U(r)),(e==="intercom-two-ways"||e==="all")&&a.push(await B(r)),(e==="launch-switches"||e==="all")&&a.push(await j(r)),(e==="settings-shape"||e==="all")&&a.push(await Y(r)),(e==="panel-regions"||e==="all")&&a.push(await G(r)),(e==="workspace-homes"||e==="all")&&a.push(await z(r)),(e==="workspace-empty-state"||e==="all")&&a.push(await J(r)),(e==="terminal-host"||e==="all")&&a.push(await q(r)),(e==="flat-states"||e==="all")&&a.push(await X(r)),(e==="panel-chrome"||e==="all")&&a.push(await K(r)),(e==="empty-hint-centred"||e==="all")&&a.push(await Z(r)),(e==="chrome-followups"||e==="all")&&a.push(await Q(r)),(e==="intercom-agent-picker"||e==="all")&&a.push(await ee(r)),(e==="control-ruler"||e==="all")&&a.push(await te(r)),(e==="palette-open"||e==="all")&&a.push(await se(r)),(e==="panel-open"||e==="all")&&a.push(await ne(r)),(e==="render-fallback"||e==="all")&&a.push(await ie(r)),(e==="mermaid-render"||e==="all")&&a.push(await oe(r)),(e==="strike-marks"||e==="all")&&a.push(await ae(r)),(e==="editor-dialect"||e==="all")&&a.push(await re(r)),(e==="cell-tree"||e==="all")&&a.push(await le(r)),(e==="editor-cell-fixes"||e==="all")&&a.push(await ce(r)),(e==="selection-paint"||e==="all")&&a.push(await he(r)),(e==="image-size"||e==="all")&&a.push(await de(r)),(e==="callout-suffix"||e==="all")&&a.push(await ue(r)),(e==="table-cell-images"||e==="all")&&a.push(await pe(r)),(e==="spellcheck"||e==="all")&&a.push(await fe(r)),(e==="tab-state"||e==="all")&&a.push(await me(r)),(e==="caret-rules"||e==="all")&&a.push(await we(r)),(e==="whats-new"||e==="all")&&a.push(await ge(r)),(e==="setup-card"||e==="all")&&a.push(await ye(r)),(e==="tooltip"||e==="all")&&a.push(await _e(r)),(e==="code-font"||e==="all")&&a.push(await ve(r)),(e==="list-caret-home"||e==="all")&&a.push(await Ce(r)),(e==="viewer"||e==="all")&&a.push(await ke(r)),(e==="sync-attribution"||e==="all")&&a.push(await Se(r)),(e==="content-width"||e==="all")&&a.push(await be(r)),(e==="shell-fits"||e==="all")&&a.push(await Ae(r)),(e==="history-live"||e==="all")&&a.push(await Te(r)),(e==="history-entries"||e==="all")&&a.push(await Ie(r)),a}};function s(){return{openPath:t.openPath,runCommand:t.runCommand,exists:e=>i.fs.exists(e),removeFile:e=>i.fs.trash(e),writeFile:(e,n,o)=>o?i.writeAs(e,n,o):i.fs.writeText(e,n),readFile:e=>i.fs.readText(e),view:()=>{const e=t.editorView();if(!e)throw new Error("no active editor after opening the case fixture");return e},agentSidebar:t.agentSidebar,emit:(e,n)=>{i.events.emit(e,n)},regions:()=>{const e=h.workspace?.useWorkspaceStore,n=h.panelLayout?.usePanelLayoutStore;if(!e||!n)throw new Error("region stores not warmed");return{memory:()=>{const o=e.getState();return{...o.regions,folded:[...o.regions.folded,...o.windowFolded]}},toggleLeft:o=>e.getState().toggleSidebar(o),setPanelOpen:(o,l)=>e.getState().setPanelOpen(o,l),setPanelFolded:(o,l)=>e.getState().setPanelFolded(o,l),widths:()=>n.getState().regionWidth,setWidth:(o,l)=>n.getState().setRegionWidth(o,l)}},setCliInstalled:e=>i.setCliInstalled(e),invocations:e=>i.invocations.get(e)??0,lastArgs:e=>i.lastArgs.get(e),windowTitles:()=>[...i.windowTitles],setAgentHosts:e=>i.setAgentHosts(e),setAgentSetup:(e,n)=>i.setAgentSetup(e,n),setDesktopApps:e=>i.setDesktopApps(e),setSync:(e,n)=>i.setSync(e,n),setBilling:e=>i.setBilling(e),setCloudSummary:e=>i.setCloudSummary(e),setHistory:e=>i.setHistory(e),setSyncRoot:async e=>{i.setSyncRoot(e);const n=h.cloudSync;if(!n)throw new Error("cloud sync store not warmed");n.refreshConfig(),await new Promise(o=>setTimeout(o,50))},setSyncLinked:async(e,n=!0)=>{i.setSyncAccount(n),i.setSyncRoot(e),i.setSync(e&&n?{state:"synced",root:e,lastSynced:Date.now()}:e?{state:"paused",pause:{kind:"signIn"},root:e}:{state:"off"});const o=h.cloudSync;if(!o)throw new Error("cloud sync store not warmed");o.refreshConfig(),await new Promise(l=>setTimeout(l,50))},setSignInFailure:(e,n)=>i.setSignInFailure(e,n),setLaunch:(e,n)=>Ot(),openSettings:(e,n)=>h.settingsPanel?.useSettingsPanelStore.getState().openSettings(e,n),closeSettings:()=>h.settingsPanel?.useSettingsPanelStore.getState().closeSettings(),terminal:()=>{const e=h.terminal?.useTerminalStore,n=h.terminalMemory;if(!e||!n)throw new Error("terminal store not warmed");return{seed:async(o,l=[])=>{i.setTerminalSessions(o,l),e.setState({sessions:[],selected:{},selectedAgent:{}}),e.getState().sync(o.map(c=>({...c}))),await new Promise(c=>setTimeout(c,40))},storeIds:()=>e.getState().sessions.map(o=>o.id),selected:o=>e.getState().selected[o],selectedAgent:o=>e.getState().selectedAgent[o],remember:(o,l)=>{for(const c of n.readTerminals(o))n.forgetTerminal(o,c);for(const c of l)n.rememberTerminal(o,c);e.getState().loadRemembered(o)}}}}}t.caseContext=s,window.__OPENMD_HARNESS__=t}const h={};async function ls(){h.editorRegistry=await u(()=>import("./editorRegistry-f87ywU-Y.js"),__vite__mapDeps([19,18,20,1,2,14,21,22,23])),h.commands=await u(()=>import("./commands-u_3lhMjb.js").then(i=>i.i),__vite__mapDeps([15,16,17,18,1,2,19,20,14,21,22,23])),h.agentSidebar=await u(()=>import("./agentSidebar-BhejpdCB.js").then(i=>i.k),__vite__mapDeps([13,1,2,9,3,14])),h.settingsPanel=await u(()=>import("./settingsPanel-C8lAeKGd.js").then(i=>i.s),__vite__mapDeps([40,28,3,1,2,29,26,15,16,17,18,19,20,14,21,22,23,30,31,25,10])),h.workspace=await u(()=>import("./workspace-BCFzPe6y.js").then(i=>i.w),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32])),h.panelLayout=await u(()=>import("./panelLayout-6NVHDQY1.js").then(i=>i.X),__vite__mapDeps([5,6,7,1,2,8,9,3,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31])),h.terminal=await u(()=>import("./terminal-oBAT0c8U.js"),__vite__mapDeps([8,1,2,9,3,7])),h.terminalMemory=await u(()=>import("./terminalMemory-gMdEQhU7.js").then(i=>i.d),[]),h.homeAttention=await u(()=>import("./homeAttention-DkL1yqZ2.js"),__vite__mapDeps([41,1,2])),h.cloudSync=await u(()=>import("./cloudSync-DHjnNaQ6.js").then(i=>i.al),__vite__mapDeps([28,3,1,2,29,26,15,16,17,18,19,20,14,21,22,23,30,31,25,10])),P==="demo"&&await os()}async function os(){const{useWorkspaceStore:i}=await u(async()=>{const{useWorkspaceStore:t}=await import("./workspace-BCFzPe6y.js").then(s=>s.w);return{useWorkspaceStore:t}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]));await i.getState().openFolder(m),await i.getState().openPath(`${m}/About this demo.md`,{pin:!0})}async function cs(i="test"){const t=new g(i);if(i==="demo"){const{installCta:n,showCta:o}=await u(async()=>{const{installCta:c,showCta:f}=await import("./cta-DvB9qnQx.js");return{installCta:c,showCta:f}},__vite__mapDeps([42,1,2,43,27,35,16,44,36,45,46,25])),{installMobileBlock:l}=await u(async()=>{const{installMobileBlock:c}=await import("./mobileBlock-DtjZ62ZL.js");return{installMobileBlock:c}},__vite__mapDeps([47,1,2,46,27,45,35,16,25]));n(),l(),t.setRefusalPresenter((c,f)=>{f==="cta"&&o(c)})}ss(t),ns(t),is(t);const{simulated:s,refused:e}=t.coverage();if(i==="demo"){console.info("OpenMarkdown demo — this is the real editor with a simulated filesystem. Your files live in this browser only. https://openmarkdown.dev");return}console.info(`[harness] simulated backend installed (${t.mode}) — ${s.length} commands simulated, ${e.length} refused. window.__OPENMD_HARNESS__ for the probe; refusals are deliberate (see openspec/specs/browser-harness).`)}export{cs as installHarness,ls as warmHarness};
