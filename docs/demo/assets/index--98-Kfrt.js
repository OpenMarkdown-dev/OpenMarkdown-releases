const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/workspace-C_P6fFA8.js","assets/index-DCYZuUJm.js","assets/index-Cb-EKEwJ.css","assets/react-rhDzC2ZM.js","assets/agentSidebar-BTwgA1RV.js","assets/cases-FPi5mXBS.js","assets/index-QQlSzGLV.js","assets/editorRegistry-CpVf6Kaj.js","assets/settingsPanel-GUYHkhfy.js","assets/cta-CvSfNpG6.js","assets/Overlay-Q2rxTDUQ.js","assets/Button-Bm83S7xX.js","assets/mobileBlock-B1ogASpn.js"])))=>i.map(i=>d[i]);
import{_ as m}from"./index-DCYZuUJm.js";const H=[],j=["md","markdown","mdx","txt"];class l extends Error{code;params;constructor(t,e={}){super(`${t} ${JSON.stringify(e)}`),this.code=t,this.params=e}toWire(){return{code:this.code,params:this.params}}}function d(s){const t=s.replace(/\/+$/,"");return t===""?"/":t}function w(s){const t=d(s),e=t.lastIndexOf("/");return e<0?"":e===0?"/":t.slice(0,e)}function S(s){const t=s.split(".").pop();return t!==void 0&&j.includes(t.toLowerCase())}class B{nodes=new Map;constructor(){this.nodes.set("/",{kind:"dir"})}reset(){this.nodes.clear(),this.nodes.set("/",{kind:"dir"})}paths(){return[...this.nodes.keys()].sort()}exists(t){return this.nodes.has(d(t))}isDir(t){return this.nodes.get(d(t))?.kind==="dir"}mkdirp(t){const e=d(t);if(e==="/"||e==="")return;const n=e.split("/").filter(Boolean);let i="";for(const o of n){i=`${i}/${o}`;const a=this.nodes.get(i);if(a===void 0)this.nodes.set(i,{kind:"dir"});else if(a.kind!=="dir")throw new l("CREATE_DIR_FAILED",{path:i,detail:"not a directory"})}}readText(t){const e=d(t),n=this.nodes.get(e);if(n===void 0)throw new l("READ_FAILED",{path:e,detail:"no such file"});if(n.kind!=="file")throw new l("READ_FAILED",{path:e,detail:"not a UTF-8 file"});return n.text}readBytes(t){const e=d(t),n=this.nodes.get(e);if(n?.kind!=="bin")throw new l("READ_FAILED",{path:e,detail:"no such binary file"});return n.bytes}writeText(t,e){const n=d(t);this.mkdirp(w(n)),this.nodes.set(n,{kind:"file",text:e})}writeBytes(t,e){const n=d(t);this.mkdirp(w(n)),this.nodes.set(n,{kind:"bin",bytes:e})}createNote(t){const e=d(t);if(this.nodes.has(e))throw new l("CREATE_FAILED",{path:e,detail:"file exists"});this.writeText(e,"")}createFolder(t){const e=d(t);if(this.nodes.has(e))throw new l("CREATE_FOLDER_FAILED",{path:e,detail:"file exists"});this.mkdirp(e)}listDir(t){const e=d(t);if(!this.isDir(e))throw new l("LIST_DIR_FAILED",{path:e,detail:"not a directory"});const n=e==="/"?"/":`${e}/`,i=[];for(const[o,a]of this.nodes){if(o===e||!o.startsWith(n))continue;const r=o.slice(n.length);if(r.includes("/")||r.startsWith("."))continue;const c=a.kind==="dir";!c&&!S(r)||i.push({name:r,path:o,is_dir:c})}return i.sort((o,a)=>Number(a.is_dir)-Number(o.is_dir)||(o.name<a.name?-1:o.name>a.name?1:0)),i}listFiles(t){const e=d(t);if(!this.isDir(e))throw new l("LIST_DIR_FAILED",{path:e,detail:"not a directory"});const n=e==="/"?"/":`${e}/`,i=[];for(const[o,a]of this.nodes){if(a.kind==="dir"||!o.startsWith(n))continue;const r=o.slice(n.length);r.split("/").some(c=>c.startsWith("."))||S(r)&&i.push(r)}return i.sort()}rename(t,e){if(e===""||e.includes("/")||e.includes(":"))throw new l("INVALID_NAME",{name:e});const n=d(t);if(!this.nodes.has(n))throw new l("RENAME_FAILED",{path:n,detail:"no such file"});const i=w(n),o=i==="/"?`/${e}`:`${i}/${e}`;if(this.nodes.has(o))throw new l("NAME_EXISTS",{name:e});return this.movePrefix(n,o),o}trash(t){const e=d(t);if(!this.nodes.has(e))throw new l("TRASH_FAILED",{path:e,detail:"no such file"});for(const n of[...this.nodes.keys()])(n===e||n.startsWith(`${e}/`))&&this.nodes.delete(n)}movePrefix(t,e){for(const n of[...this.nodes.keys()]){if(n!==t&&!n.startsWith(`${t}/`))continue;const i=this.nodes.get(n);this.nodes.delete(n),this.nodes.set(e+n.slice(t.length),i)}}}const V=`# Welcome to OpenMarkdown

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
`,C="/Users/harness",b=`${C}/OpenMarkdown`,G=["png","jpg","jpeg","gif","svg","webp"];function E(s){const t=s.split(".").pop()?.toLowerCase();return t!==void 0&&G.includes(t)}class Y{constructor(t,e="test"){this.fs=t,this.mode=e}fs;mode;unloaded=new Set;seedPaths(){return this.mode!=="demo"?H:[`${g}/About this demo.md`,`${g}/Welcome.md`,...Object.keys(k).map(t=>`${g}/attachments/${t}`)]}seed(){this.unloaded.clear(),this.fs.mkdirp(b),this.mode==="demo"&&this.fs.mkdirp(`${g}/attachments`);for(const t of this.seedPaths())E(t)?this.fs.writeBytes(t,new Uint8Array):this.fs.writeText(t,""),this.unloaded.add(t)}paths(){return[...this.seedPaths()]}async ensureLoaded(t){if(!this.unloaded.has(t))return;if(this.unloaded.delete(t),this.mode==="demo"){await this.loadDemoPath(t);return}const e=await fetch(t);if(!e.ok)throw new l("READ_FAILED",{path:t,detail:`dev server ${e.status}`});E(t)?this.fs.writeBytes(t,new Uint8Array(await e.arrayBuffer())):this.fs.writeText(t,await e.text())}async loadDemoPath(t){const e=t.slice(t.lastIndexOf("/")+1);if(t.includes("/attachments/")){const n=await fetch(k[e]??"");if(!n.ok)throw new l("READ_FAILED",{path:t,detail:`dev server ${n.status}`});this.fs.writeBytes(t,new Uint8Array(await n.arrayBuffer()));return}if(e==="Welcome.md"){this.fs.writeText(t,await this.welcomeTemplate());return}this.fs.writeText(t,q)}isPlaceholder(t){return this.unloaded.has(t)}markWritten(t){this.unloaded.delete(t)}async welcomeTemplate(){return V}}const X="/demo/assets/command-palette-outline-fveirLdX.png",z="/demo/assets/toolbar-CdreEjfr.png",J={"command-palette-outline.png":X,"toolbar.png":z},g=`${b}/Demo`,k=J,q=`# About this demo

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
`,I="openmd.demo.files.v1",K=2e6;function Z(s,t,e){const n={};for(const i of s.paths())if(i.startsWith(`${t}/`)&&!s.isDir(i)&&!i.includes("/attachments/")&&e(i))try{n[i]=s.readText(i)}catch{}return n}function Q(s,t,e){try{const n=JSON.stringify(Z(s,t,e));if(n.length>K)return;localStorage.setItem(I,n)}catch{}}function ee(){try{const s=localStorage.getItem(I);if(!s)return null;const t=JSON.parse(s);if(!t||typeof t!="object"||Array.isArray(t))return null;const e={};for(const[n,i]of Object.entries(t))typeof i=="string"&&(e[n]=i);return e}catch{return null}}class te{callbacks=new Map;nextCallbackId=1;listeners=new Map;nextEventId=1;transformCallback(t,e=!1){const n=this.nextCallbackId++;return this.callbacks.set(n,{fn:t??(()=>{}),once:e}),n}unregisterCallback(t){this.callbacks.delete(t)}listen(t,e){let n=this.listeners.get(t);return n||(n=new Set,this.listeners.set(t,n)),n.add(e),this.nextEventId++}unregisterListener(t,e){const n=this.listeners.get(t);if(n){for(const i of[...n])this.eventIdOf.get(i)===e&&n.delete(i);n.size===0&&this.listeners.delete(t)}}eventIdOf=new Map;pair(t,e){this.eventIdOf.set(t,e)}emit(t,e){const n=this.listeners.get(t);if(!n)return 0;let i=0;for(const o of[...n]){const a=this.callbacks.get(o);if(!a)continue;const r={event:t,id:this.eventIdOf.get(o)??o,payload:e};a.fn(r),i++,a.once&&this.callbacks.delete(o)}return i}activeEvents(){return[...this.listeners.keys()].sort()}reset(){this.callbacks.clear(),this.listeners.clear(),this.eventIdOf.clear()}}const ne="HARNESS_UNSUPPORTED",O={sync_tray_state:"native tray",relaunch:"native process restart",relaunch_for_update:"native process restart","plugin:window|close":"native window","plugin:window|set_always_on_top":"native window",install_cli:"writes to the host filesystem",uninstall_cli:"writes to the host filesystem",install_visual:"writes to the host filesystem",uninstall_visual:"writes to the host filesystem",visual_status:"probes the host filesystem",default_app_status:"OS document-type registration",set_default_app:"OS document-type registration",revert_default_app:"OS document-type registration","plugin:opener|reveal_item_in_dir":"native file manager","plugin:opener|open_url":"native shell open","plugin:opener|open_path":"native shell open","plugin:dialog|open":"native file picker","plugin:updater|check":"signed release feed",session_complete:"unix socket bridge",reveal_complete:"unix socket bridge",report_workspace_state:"unix socket bridge",bridge_response:"unix socket bridge",sidebar_send:"unix socket bridge",sidebar_listener_count:"unix socket bridge",sidebar_listeners:"unix socket bridge",sidebar_dismiss_listener:"unix socket bridge",summon_terminals:"native terminal app",summon_command_line:"native terminal app",summon_agent:"native terminal app",focus_terminal:"native terminal app",watch_file:"no filesystem watcher in a browser",unwatch_file:"no filesystem watcher in a browser"},se={summon_agent:"cta",summon_terminals:"cta",summon_command_line:"cta",focus_terminal:"cta",sidebar_send:"cta",sidebar_dismiss_listener:"cta",sidebar_listener_count:"mute",sidebar_listeners:"mute",install_cli:"cta",uninstall_cli:"cta","plugin:window|set_always_on_top":"cta","plugin:dialog|open":"cta",set_default_app:"cta",revert_default_app:"cta",install_visual:"hide",uninstall_visual:"hide","plugin:opener|reveal_item_in_dir":"hide","plugin:opener|open_path":"hide","plugin:window|close":"hide",relaunch_for_update:"hide","plugin:opener|open_url":"native",relaunch:"native",default_app_status:"mute",visual_status:"mute",sync_tray_state:"mute","plugin:updater|check":"mute",watch_file:"mute",unwatch_file:"mute",bridge_response:"mute",session_complete:"mute",reveal_complete:"mute",report_workspace_state:"mute"},ie={default_app_status:{is_default:!1,has_previous:!1},visual_status:{state:"not_configured",paths:[]},"plugin:updater|check":null,sync_tray_state:null,watch_file:null,unwatch_file:null,sidebar_listener_count:0,sidebar_listeners:[],bridge_response:null,session_complete:null,reveal_complete:null,report_workspace_state:null},oe=new Set(["write_file","create_note","create_folder","rename_path","trash_path","write_attachment"]);function T(s){return se[s]}function _(s){return{code:ne,params:{command:s,reason:O[s]??"not implemented in the browser harness"}}}const ae=["zh","ja","en"];function x(s){if(!s)return null;const t=s.toLowerCase().replace(/_/g,"-");return ae.find(e=>t===e||t.startsWith(`${e}-`))??null}function y(s){return x(s)??x(typeof navigator>"u"?null:navigator.language)??"en"}function re(s){let t=0xcbf29ce484222325n;const e=0xffffffffffffffffn;for(const n of s)t=(t^BigInt(n))&e,t=t*0x100000001b3n&e;return t}function A(s){const t=s.toLowerCase();return t==="jpeg"||t==="jpg"?"jpg":t==="svg+xml"||t==="svg"?"svg":t}function le(s){const t=(s??"").trim();if(t.startsWith("image/"))return A(t.slice(6));const e=t.lastIndexOf(".");if(e>=0){const n=t.slice(e+1);if(n.length>0&&n.length<=5&&/^[a-zA-Z0-9]+$/.test(n))return A(n)}return"png"}function de(){const s=new Date,t=e=>String(e).padStart(2,"0");return`${s.getFullYear()}-${t(s.getMonth()+1)}-${t(s.getDate())}`}class he{mode;present;fs=new B;fixtures;events=new te;objectUrls=new Map;settings={resident:!0,language:null,theme:null,scratch_dir:null,welcome_seed_rev:0};bootedAt=Date.now();startupConsumed=!1;cliInstalled=!1;agentHosts=[];handlers;constructor(t="test"){this.mode=t,this.fixtures=new Y(this.fs,t),this.handlers=this.buildHandlers(),this.reset(),this.cliInstalled=t==="demo"}reset(){for(const t of this.objectUrls.values())URL.revokeObjectURL(t);this.objectUrls.clear(),this.fs.reset(),this.events.reset(),this.fixtures.seed(),this.mode==="demo"&&this.restoreDemoFiles(),this.settings={resident:!0,language:null,theme:null,scratch_dir:null,welcome_seed_rev:0},this.startupConsumed=!1,this.cliInstalled=this.mode==="demo",this.agentHosts=[]}setCliInstalled(t){this.cliInstalled=t}restoreDemoFiles(){const t=ee();if(t)for(const[e,n]of Object.entries(t)){const i=e.slice(0,e.lastIndexOf("/"));this.fs.mkdirp(i),this.fs.writeText(e,n),this.fixtures.markWritten(e)}}setRefusalPresenter(t){this.present=t}setAgentHosts(t){this.agentHosts=[...t]}coverage(){return{simulated:Object.keys(this.handlers).sort(),refused:Object.entries(O).map(([t,e])=>({command:t,reason:e,tier:T(t)})).sort((t,e)=>t.command<e.command?-1:1)}}simulatedCommands(){return Object.keys(this.handlers).sort()}async invoke(t,e={}){const n=this.handlers[t];if(!n){if(this.mode==="demo"){const i=T(t)??"cta";if(i==="mute")return ie[t]??null;if(i==="native")return this.nativeEquivalent(t,e);this.present?.(t,i)}throw _(t)}try{const i=await n(e);return this.mode==="demo"&&oe.has(t)&&Q(this.fs,g,o=>!this.fixtures.isPlaceholder(o)),i}catch(i){throw i instanceof l?i.toWire():i}}nativeEquivalent(t,e){if(t==="relaunch")return location.reload(),null;if(t==="plugin:opener|open_url"){const n=typeof e.url=="string"?e.url:null;return n&&window.open(n,"_blank","noopener,noreferrer"),null}throw _(t)}assetUrl(t){const e=this.objectUrls.get(t);if(e)return e;if(t.startsWith("/fixtures/"))return t;if(this.mode==="demo"){const n=t.slice(t.lastIndexOf("/")+1),i=k[n];if(i&&t.includes("/attachments/"))return i}try{const n=this.fs.readBytes(t),i=URL.createObjectURL(new Blob([n]));return this.objectUrls.set(t,i),i}catch{return t}}windowTheme(){return this.settings.theme==="dark"||this.settings.theme==="light"?this.settings.theme:typeof matchMedia=="function"&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}scratchDir(){return this.mode==="demo"?g:this.settings.scratch_dir??b}async readFileContent(t){return await this.fixtures.ensureLoaded(t),{path:t,content:this.fs.readText(t)}}buildHandlers(){const t=this.fs;return{startup_elapsed_ms:()=>Date.now()-this.bootedAt,startup_kind:()=>this.startupConsumed?"hot":(this.startupConsumed=!0,"cold"),app_channel:()=>this.mode==="demo"?"release":"dev",perf_log:e=>(this.mode==="demo"||console.debug("[harness perf]",e.line),null),cli_status:()=>({installed:this.cliInstalled,paths:this.cliInstalled?["/usr/local/bin/openmd"]:[]}),agent_profiles:()=>[{id:"claude",name:"Claude Code",command:"claude '/openmarkdown:listen'"},{id:"codex",name:"Codex",command:"codex '<bootstrap>'"},{id:"gemini",name:"Gemini CLI",command:"gemini -i '<bootstrap>'"},{id:"opencode",name:"opencode",command:"opencode run '<bootstrap>'"}].map(n=>({...n,installed:this.agentHosts.includes(n.id)})),capabilities:()=>({agentBridge:this.mode==="demo"}),feedback_context:()=>({version:"0.0.0-harness",os:`${navigator.platform||"browser"} (harness)`,channel:"dev",language:y(this.settings.language)}),paths_exist:e=>e.paths.map(n=>t.exists(n)),is_dir:e=>t.isDir(e.path),read_file:e=>this.readFileContent(e.path),write_file:e=>{const n=e.path;t.writeText(n,e.content),this.fixtures.markWritten(n)},list_dir:e=>t.listDir(e.path),list_files:e=>t.listFiles(e.root),create_note:e=>{const n=e.path;t.createNote(n),this.fixtures.markWritten(n)},create_folder:e=>t.createFolder(e.path),trash_path:e=>t.trash(e.path),rename_path:e=>t.rename(e.path,e.newName),write_attachment:e=>{const n=e.docPath,i=Uint8Array.from(e.bytes),o=`${w(n)}/attachments`,a=`img-${re(i).toString(16).padStart(16,"0")}.${le(e.hint)}`,r=`${o}/${a}`;return t.exists(r)||t.writeBytes(r,i),`attachments/${a}`},open_scratch_note:async()=>{const e=`${this.scratchDir()}/${de()}.md`;return t.exists(e)||(t.writeText(e,""),this.fixtures.markWritten(e)),this.readFileContent(e)},open_welcome_note:async()=>{const e=`${this.scratchDir()}/Welcome.md`;return t.exists(e)||(t.writeText(e,await this.fixtures.welcomeTemplate()),this.fixtures.markWritten(e)),this.readFileContent(e)},welcome_startup:async()=>{if(this.mode==="demo"||this.settings.welcome_seed_rev>=1)return null;const e=`${this.scratchDir()}/Welcome.md`;return t.exists(e)||(t.writeText(e,await this.fixtures.welcomeTemplate()),this.fixtures.markWritten(e)),this.readFileContent(e)},mark_welcome_seeded:()=>{this.settings.welcome_seed_rev=1},get_settings:()=>({...this.settings}),set_settings:e=>{this.settings={...this.settings,...e.settings}},get_language:()=>y(this.settings.language),resolve_language:e=>y(e.pref),take_pending_open:()=>[],take_pending_actions:()=>[],"plugin:event|listen":e=>{const n=e.handler,i=this.events.listen(e.event,n);return this.events.pair(n,i),i},"plugin:event|unlisten":()=>{},"plugin:event|emit":e=>{this.events.emit(e.event,e.payload)},"plugin:event|emit_to":e=>{this.events.emit(e.event,e.payload)},"plugin:app|version":()=>"0.0.0-harness","plugin:path|resolve_directory":e=>{if(e.directory===21)return C;throw _(`plugin:path|resolve_directory(${String(e.directory)})`)},"plugin:window|theme":()=>this.windowTheme(),"plugin:webview|set_webview_zoom":e=>{document.documentElement.style.setProperty("zoom",String(e.value))}}}}const v="main";function ce(s){window.__TAURI_INTERNALS__={invoke:(t,e)=>s.invoke(t,e??{}),transformCallback:(t,e=!1)=>s.events.transformCallback(t,e),unregisterCallback:t=>s.events.unregisterCallback(t),convertFileSrc:t=>s.assetUrl(t),metadata:{currentWindow:{label:v},currentWebview:{windowLabel:v,label:v}},plugins:{path:{sep:"/",delimiter:":"}}},window.__TAURI_EVENT_PLUGIN_INTERNALS__={unregisterListener:(t,e)=>s.events.unregisterListener(t,e)}}function ue(s){typeof matchMedia=="function"&&matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{s.events.emit("tauri://theme-changed",s.windowTheme())})}let D="test";function pe(s){D=s.mode;const t={backend:s,mode:s.mode,reset:()=>s.reset(),coverage:()=>s.coverage(),fixturePaths:()=>s.fixtures.paths(),agentSidebar:()=>{const e=u.agentSidebar;if(!e)throw new Error("agent sidebar store not warmed");const n=e.useAgentSidebarStore;return{...n.getState(),threadOf:i=>n.getState().threads[i]??[]}},editorView:()=>{const e=u.editorRegistry;return e?e.getActiveEditor()?.view??null:null},commands:()=>{const e=u.commands;return e?e.listCommands().map(n=>{const i=e.commandGate(n);return{id:n.id,title:n.title(),state:i.state,...i.state==="disabled"?{reason:i.reason}:{}}}):[]},runCommand:e=>{u.commands?.runCommand(e)},openPath:async e=>{const{useWorkspaceStore:n}=await m(async()=>{const{useWorkspaceStore:i}=await import("./workspace-C_P6fFA8.js").then(o=>o.J);return{useWorkspaceStore:i}},__vite__mapDeps([0,1,2,3,4]));await n.getState().openTab(e,{pin:!0})},emit:(e,n)=>s.events.emit(e,n),activeEvents:()=>s.events.activeEvents(),runCase:async e=>{const{editorGeometryCase:n,contextMenuCase:i,listIndentCase:o,listRenderCase:a,tableUndoCase:r,openSafetyCase:c,agentSidebarCase:L,settingsShapeCase:R}=await m(async()=>{const{editorGeometryCase:h,contextMenuCase:P,listIndentCase:M,listRenderCase:$,tableUndoCase:F,openSafetyCase:W,agentSidebarCase:N,settingsShapeCase:U}=await import("./cases-FPi5mXBS.js");return{editorGeometryCase:h,contextMenuCase:P,listIndentCase:M,listRenderCase:$,tableUndoCase:F,openSafetyCase:W,agentSidebarCase:N,settingsShapeCase:U}},__vite__mapDeps([5,1,2,6])),f={openPath:t.openPath,runCommand:t.runCommand,exists:h=>s.fs.exists(h),removeFile:h=>s.fs.trash(h),view:()=>{const h=t.editorView();if(!h)throw new Error("no active editor after opening the case fixture");return h},agentSidebar:t.agentSidebar,setCliInstalled:h=>s.setCliInstalled(h),setAgentHosts:h=>s.setAgentHosts(h),openSettings:()=>u.settingsPanel?.useSettingsPanelStore.getState().openSettings(),closeSettings:()=>u.settingsPanel?.useSettingsPanelStore.getState().closeSettings()},p=[];return(e==="editor-geometry"||e==="all")&&p.push(await n(f)),(e==="editor-context-menu"||e==="all")&&p.push(await i(f)),(e==="editor-list-indent"||e==="all")&&p.push(await o(f)),(e==="editor-list-render"||e==="all")&&p.push(await a(f)),(e==="workspace-open-safety"||e==="all")&&p.push(await c(f)),(e==="editor-table-undo"||e==="all")&&p.push(await r(f)),(e==="agent-sidebar"||e==="all")&&p.push(await L(f)),(e==="settings-shape"||e==="all")&&p.push(await R(f)),p}};window.__OPENMD_HARNESS__=t}const u={};async function ge(){u.editorRegistry=await m(()=>import("./editorRegistry-CpVf6Kaj.js").then(s=>s.e),__vite__mapDeps([7,6])),u.commands=await m(()=>import("./commands-DSqtCpZv.js"),[]),u.agentSidebar=await m(()=>import("./agentSidebar-BTwgA1RV.js").then(s=>s.p),__vite__mapDeps([4,1,2,3])),u.settingsPanel=await m(()=>import("./settingsPanel-GUYHkhfy.js"),__vite__mapDeps([8,3,1,2])),D==="demo"&&await me()}async function me(){const{useWorkspaceStore:s}=await m(async()=>{const{useWorkspaceStore:t}=await import("./workspace-C_P6fFA8.js").then(e=>e.J);return{useWorkspaceStore:t}},__vite__mapDeps([0,1,2,3,4]));await s.getState().openFolderAt(g),await s.getState().openTab(`${g}/About this demo.md`,{pin:!0})}async function we(s="test"){const t=new he(s);if(s==="demo"){const{installCta:i,showCta:o}=await m(async()=>{const{installCta:r,showCta:c}=await import("./cta-CvSfNpG6.js");return{installCta:r,showCta:c}},__vite__mapDeps([9,1,2,10,11])),{installMobileBlock:a}=await m(async()=>{const{installMobileBlock:r}=await import("./mobileBlock-B1ogASpn.js");return{installMobileBlock:r}},__vite__mapDeps([12,1,2,11]));i(),a(),t.setRefusalPresenter((r,c)=>{c==="cta"&&o(r)})}ce(t),ue(t),pe(t);const{simulated:e,refused:n}=t.coverage();if(s==="demo"){console.info("OpenMarkdown demo — this is the real editor with a simulated filesystem. Your files live in this browser only. https://openmarkdown.dev");return}console.info(`[harness] simulated backend installed (${t.mode}) — ${e.length} commands simulated, ${n.length} refused. window.__OPENMD_HARNESS__ for the probe; refusals are deliberate (see openspec/specs/browser-harness).`)}export{we as installHarness,ge as warmHarness};
