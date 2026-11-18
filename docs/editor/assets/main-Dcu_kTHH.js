import{u as r,v as c}from"./index-I3-Tfd5X.js";import"./preload-helper-BE6tXj1V.js";const s=`# Release notes

Reading mode renders the document and **cannot be edited**. Switch to Live to
edit with the preview, or to Source for the plain text.

| Version | Change |
| --- | --- |
| 0.1.0 | First release |

- [x] Tables, math and diagrams render here too
- [ ] Tick me in reading mode; lock the editor and I stay as I am
`,t=r(document.getElementById("editor"),c({doc:s,mode:"reading"})),n=[...document.querySelectorAll("[data-mode]")],a=()=>n.forEach(e=>e.setAttribute("aria-pressed",String(e.dataset.mode===t.mode())));for(const e of n)e.addEventListener("click",()=>{t.setMode(e.dataset.mode),a();const o=document.getElementById("lock");o.addEventListener("change",()=>t.setEditable(!o.checked))});a();const d=document.getElementById("lock");d.addEventListener("change",()=>t.setEditable(!d.checked));
