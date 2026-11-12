import{r as p,u as x}from"./index-DdGPNERJ.js";import"./preload-helper-BE6tXj1V.js";class g extends Error{code="INVALID_UTF8";constructor(e){super("The file is not valid UTF-8, so it was not opened: editing it would corrupt the invalid bytes.",e),this.name="InvalidUtf8Error"}}const w="\uFEFF",m=/\r\n|\r|\n/g;function h(t){let e;try{e=new TextDecoder("utf-8",{fatal:!0,ignoreBOM:!0}).decode(t)}catch(a){throw new g({cause:a})}const n=e.startsWith(w),c=n?e.slice(1):e,o=new Map;for(const a of c.matchAll(m)){const s=a[0];o.set(s,(o.get(s)??0)+1)}let i=`
`,f=0;for(const[a,s]of o)s>f&&(i=a,f=s);return{text:c.replace(m,`
`),bytes:t.slice(),bom:n,ending:i,mixed:o.size>1}}function E(t,e){return t===e.text?e.bytes:new TextEncoder().encode((e.bom?w:"")+t.replace(m,e.ending))}let r=h(new TextEncoder().encode(`\uFEFFTitle\r
=====\r
\r
* item one  \r
* item __two__\r
\r
1) first\r
2) second`)),y="example.md";const d=document.getElementById("status");function u(t){const e=r.bytes,n=E(t,r),c=e.length===n.length&&e.every((o,i)=>o===n[i]);d.dataset.identical=String(c),d.textContent=c?`Save writes the same ${n.length} bytes you opened.`:`Edited: ${n.length} bytes, was ${e.length}.`}const l=p(document.getElementById("editor"),x({doc:r.text,host:{onChange:u}}));u(l.getDoc());document.getElementById("open").addEventListener("change",async t=>{const e=t.target.files?.[0];if(e){try{r=h(new Uint8Array(await e.arrayBuffer()))}catch(n){if(!(n instanceof g))throw n;d.dataset.identical="false",d.textContent=`${e.name} is not valid UTF-8, so it was not opened.`;return}y=e.name,l.setDoc(r.text),u(l.getDoc())}});document.getElementById("save").addEventListener("click",()=>{const t=document.createElement("a");t.href=URL.createObjectURL(new Blob([E(l.getDoc(),r)],{type:"text/markdown"})),t.download=y,t.click(),URL.revokeObjectURL(t.href)});
