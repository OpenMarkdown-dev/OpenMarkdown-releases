import{n as B}from"./site-oQ_3JMic.js";import{v as O,u as R,r as F,z as P}from"./index-DdGPNERJ.js";import"./preload-helper-BE6tXj1V.js";const E=`---
title: A tour of the editor
package: "@openmarkdown-dev/editor"
license: MIT
status: preview
tags: [markdown, codemirror, live-preview]
---

# A tour of the editor

You are reading a Markdown file, in the editor this demo is about. Click anywhere and type. Switch to **Source** above to see the plain text underneath. Nothing here is saved; **Reset** puts the page back.

The block at the top is the file's frontmatter, shown as properties. Click a value to edit it.

## Tables you edit in place

Click a cell and type. **Tab** moves to the next cell, **Enter** to the cell below, and Tab in the last cell adds a row. When you leave, the whole table is re-aligned in the source. That is one of the few rewrites the editor makes beyond your keystrokes; the full list is in the [fidelity notes](https://openmarkdown.dev/editor/docs/fidelity/).

| What you do            | What changes in the file          | On GitHub |
| :--------------------- | :-------------------------------- | :-------: |
| Type a word            | That word                         |    yes    |
| Tick a task box        | \`[ ]\` becomes \`[x]\`               |    yes    |
| Resize an image        | The \`\\|480\` after its alt text    |   no      |
| Edit a table cell      | That table, re-aligned            |    yes    |

[Docs →](https://openmarkdown.dev/editor/docs/fidelity/#what-the-exceptions-look-like)

## Math

Inline math sits in the sentence: the roots of $ax^2 + bx + c = 0$ are $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$. A block gets its own line:

$$
\\sum_{k=1}^{n} k = \\frac{n(n+1)}{2}
$$

Put the cursor inside a formula to edit the TeX.

[Docs →](https://openmarkdown.dev/editor/docs/getting-started/install/#what-else-comes-with-it)

## Diagrams

A fenced block marked \`mermaid\` is drawn as a diagram. Click it to edit the source.

\`\`\`mermaid
flowchart LR
  F[notes.md on disk] -->|open| E[Editor]
  E -->|you type| C[Change to that text only]
  C -->|save| F
\`\`\`

The diagram library loads the first time a document has one, not before.

[Docs →](https://openmarkdown.dev/editor/docs/getting-started/install/#what-else-comes-with-it)

## Callouts

> [!NOTE]
> GitHub alert syntax. The file still says \`> [!NOTE]\`, so it renders the same on GitHub.

> [!TIP]
> Every heading has a fold arrow beside it. Collapse this section, then expand it again.

> [!WARNING]
> Pasted images stay in this browser tab. In your app, the \`saveAttachment\` callback decides where they go.

## Images

Paste a screenshot here, or drop an image file anywhere in the text. It is inserted as \`![](attachments/…)\`, the same link a file on disk would get.

Drag the corner of the picture below to resize it. The new width is written into the source as \`|width\`.

![The OpenMarkdown app, which is built on this editor|480](attachments/live-preview.png)

[Docs →](https://openmarkdown.dev/editor/docs/guides/images/)

## Lists fold too

- [x] Live preview, source and reading modes
- [ ] Your own toolbar
  - The editor has no toolbar of its own.
  - Your app calls \`setMode\`, or runs the editor's commands.
- Folding
  - Hover a list item that has children and click its arrow.
  - Headings fold the same way.

## Find

Press **⌘F** (Ctrl+F on Windows and Linux), or use **Find** above. Matches are highlighted as you type, and replace works on the source text.

## Three modes

- **Live**: the Markdown marks show only where the cursor is.
- **Source**: plain text with colour, one font size.
- **Reading**: rendered and read-only.

[Docs →](https://openmarkdown.dev/editor/docs/getting-started/first-editor/#modes)

The **Dark** button switches the colour scheme. On a page with no button, the editor follows whatever scheme the host gives it.

[Docs →](https://openmarkdown.dev/editor/docs/guides/theming/#light-and-dark)
`;function N(e){const t=n=>e[n]??-1;return t(0)===137&&t(1)===80&&t(2)===78&&t(3)===71?"image/png":t(0)===255&&t(1)===216&&t(2)===255?"image/jpeg":t(0)===71&&t(1)===73&&t(2)===70?"image/gif":t(8)===87&&t(9)===69&&t(10)===66&&t(11)===80?"image/webp":t(4)===102&&t(5)===116&&t(6)===121&&t(7)===112&&t(8)===97?"image/avif":null}function U(e,t,n){return`attachments/${((e??"").split(/[\\/]/).pop()??"").replace(/\.[^.]*$/,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,40)||"image"}-${n}.${t}`}const j=e=>e.trim().replace(/^\.\//,"");function H(e){const t=new Map(Object.entries(e.seeded??{}));let n=0;return{async saveAttachment(o,s,a){const c=N(s);if(!c)return null;n+=1;const r=U(a,c.slice(6),n);return t.set(r,e.toUrl(new Blob([s.slice()],{type:c}))),r},resolveImage(o){const s=t.get(j(o));return s||(/^https:\/\//i.test(o.trim())?o.trim():null)},count:()=>n}}function W(e){try{const t=new URL(e);return t.protocol==="https:"||t.protocol==="http:"}catch{return!1}}function z(e){let t=null;const n=new Set,o=()=>t??(e?.matches?"dark":"light"),s=()=>{const a=o();for(const c of n)c(a)};return e?.addEventListener("change",()=>{t===null&&s()}),{current:o,subscribe(a){return n.add(a),()=>n.delete(a)},toggle(){return t=o()==="dark"?"light":"dark",s(),t}}}function G(e){return{language:"en",colorScheme:{current:e.current,subscribe:e.subscribe},copyText:t=>navigator.clipboard?.writeText(t),openExternal:t=>{W(t)&&window.open(t,"_blank","noopener,noreferrer")}}}const $=e=>new TextEncoder().encode(e);function q(e,t){let n=0;const o=Math.min(e.length,t.length);for(;n<o&&e[n]===t[n];)n++;let s=0;for(;s<o-n&&e[e.length-1-s]===t[t.length-1-s];)s++;return Math.max(e.length-n-s,t.length-n-s)}function Y(e,t){let n=0;for(;n<e.length&&n<t.length&&e[n]===t[n];)n++;let o=0;for(;o<e.length-n&&o<t.length-n&&e[e.length-1-o]===t[t.length-1-o];)o++;const s=e.slice(n,e.length-o),a=t.slice(n,t.length-o),c=e.slice(0,n).map(r=>({t:" ",line:r}));if(s.length*a.length>4e6)c.push(...s.map(r=>({t:"-",line:r})),...a.map(r=>({t:"+",line:r})));else{const r=s.length,m=a.length,i=Array.from({length:r+1},()=>new Uint32Array(m+1));for(let h=r-1;h>=0;h--)for(let u=m-1;u>=0;u--)i[h][u]=s[h]===a[u]?i[h+1][u+1]+1:Math.max(i[h+1][u],i[h][u+1]);let l=0,d=0;for(;l<r||d<m;)l<r&&d<m&&s[l]===a[d]?(c.push({t:" ",line:s[l]}),l++,d++):l<r&&(d===m||i[l+1][d]>=i[l][d+1])?c.push({t:"-",line:s[l++]}):c.push({t:"+",line:a[d++]})}return c.push(...e.slice(e.length-o).map(r=>({t:" ",line:r}))),c}function _(e,t=3){const n=e.map((i,l)=>i.t!==" "?l:-1).filter(i=>i>=0);if(!n.length)return"";const o=[];for(const i of n){const l=Math.max(0,i-t),d=Math.min(e.length-1,i+t),h=o[o.length-1];h&&l<=h[1]+1?h[1]=Math.max(h[1],d):o.push([l,d])}const s=[],a=[];let c=1,r=1;for(const i of e)s.push(c),a.push(r),i.t!=="+"&&c++,i.t!=="-"&&r++;const m=["--- showcase.md","+++ editor.getDoc()"];for(const[i,l]of o){const d=e.slice(i,l+1),h=d.filter(f=>f.t!=="+").length,u=d.filter(f=>f.t!=="-").length;m.push(`@@ -${s[i]},${h} +${a[i]},${u} @@`);for(const f of d)m.push(f.t+f.line)}return m.join(`
`)}function J(e,t){if(e===t)return{identical:!0,bytesChanged:0,linesAdded:0,linesRemoved:0,unified:""};const n=Y(e.split(`
`),t.split(`
`));return{identical:!1,bytesChanged:q($(e),$(t)),linesAdded:n.filter(o=>o.t==="+").length,linesRemoved:n.filter(o=>o.t==="-").length,unified:_(n)}}function X(e){return e.identical?"0 bytes changed":`${`${e.bytesChanged} byte${e.bytesChanged===1?"":"s"} changed`} · +${e.linesAdded} −${e.linesRemoved} line${e.linesAdded+e.linesRemoved===1?"":"s"}`}B();const v=document.getElementById("dev-log"),K=performance.now();function w(e,t){const n=document.createElement("li");n.dataset.call=e;const o=((performance.now()-K)/1e3).toFixed(1),s=document.createElement("b");s.textContent=e,n.append(`${o}s `,s,` ${t}`),v.append(n),v.scrollTop=v.scrollHeight}let k=0;const x=(e,t=48)=>e.length>t?`${e.slice(0,t-1)}…`:e,y=z(typeof matchMedia=="function"?matchMedia("(prefers-color-scheme: dark)"):null),b=G(y);O({...b,copyText:e=>(w("copyText",`(${e.length} chars)`),b.copyText?.(e)),openExternal:e=>(w("openExternal",x(e)),b.openExternal?.(e))});const A=H({seeded:{"attachments/live-preview.png":"/assets/screens/live-preview.png"},toUrl:e=>URL.createObjectURL(e)}),I=document.getElementById("editor-frame"),Q=document.getElementById("editor"),V=R({doc:E,mode:"live",docPath:"/demo/tour.md",host:{resolveImage:A.resolveImage,async saveAttachment(e,t,n){const o=await A.saveAttachment(e,t,n);return w("saveAttachment",`(${x(e,24)}, ${t.length} bytes, ${JSON.stringify(n)}) → ${JSON.stringify(o)}`),o},openLink:e=>w("openLink",x(e)),onChange:()=>L()}}),g=F(Q,V);I.dataset.ready="true";const Z=document.getElementById("dev-doc"),C=document.getElementById("dev-diff"),ee=document.getElementById("dev-unified"),te=document.getElementById("dev-unified-text");function T(){k=0;const e=g.getDoc();Z.textContent=e;const t=J(E,e);C.textContent=X(t),C.dataset.identical=String(t.identical),ee.hidden=t.identical,te.textContent=t.unified}function L(){k||(k=requestAnimationFrame(T))}T();const M=Array.from(document.querySelectorAll("[data-mode]")),S=e=>{for(const t of M)t.setAttribute("aria-pressed",String(t.dataset.mode===e))};for(const e of M)e.addEventListener("click",()=>{const t=e.dataset.mode;g.setMode(t),S(t),g.view.focus(),L()});S(g.mode());document.getElementById("find")?.addEventListener("click",()=>{P(g.view)});const p=document.getElementById("theme"),D=e=>{I.dataset.scheme=e,p&&(p.textContent=e==="dark"?"Light":"Dark",p.setAttribute("aria-label",e==="dark"?"Switch the editor to light":"Switch the editor to dark"))};y.subscribe(D);D(y.current());p?.addEventListener("click",()=>y.toggle());document.getElementById("reset")?.addEventListener("click",()=>{g.setDoc(E),g.view.scrollDOM.scrollTop=0,T()});
