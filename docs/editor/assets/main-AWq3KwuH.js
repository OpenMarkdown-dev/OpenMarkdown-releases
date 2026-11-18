import{x as d,u,v as y,I as f,y as i}from"./index-I3-Tfd5X.js";import"./preload-helper-BE6tXj1V.js";let o=d(new TextEncoder().encode(`\uFEFFTitle\r
=====\r
\r
* item one  \r
* item __two__\r
\r
1) first\r
2) second`)),l="example.md";const a=document.getElementById("status");function s(e){const t=o.bytes,n=i(e,o),c=t.length===n.length&&t.every((m,g)=>m===n[g]);a.dataset.identical=String(c),a.textContent=c?`Save writes the same ${n.length} bytes you opened.`:`Edited: ${n.length} bytes, was ${t.length}.`}const r=u(document.getElementById("editor"),y({doc:o.text,host:{onChange:s}}));s(r.getDoc());document.getElementById("open").addEventListener("change",async e=>{const t=e.target.files?.[0];if(t){try{o=d(new Uint8Array(await t.arrayBuffer()))}catch(n){if(!(n instanceof f))throw n;a.dataset.identical="false",a.textContent=`${t.name} is not valid UTF-8, so it was not opened.`;return}l=t.name,r.setDoc(o.text),s(r.getDoc())}});document.getElementById("save").addEventListener("click",()=>{const e=document.createElement("a");e.href=URL.createObjectURL(new Blob([i(r.getDoc(),o)],{type:"text/markdown"})),e.download=l,e.click(),URL.revokeObjectURL(e.href)});
