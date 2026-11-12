import{r,u as a}from"./index-DdGPNERJ.js";import"./preload-helper-BE6tXj1V.js";const n=`# Release notes

Reading mode renders the document and **cannot be edited**. Switch to Live to
edit with the preview, or to Source for the plain text.

| Version | Change |
| --- | --- |
| 0.1.0 | First release |

- [x] Tables, math and diagrams render here too
`,t=r(document.getElementById("editor"),a({doc:n,mode:"reading"})),o=[...document.querySelectorAll("[data-mode]")],d=()=>o.forEach(e=>e.setAttribute("aria-pressed",String(e.dataset.mode===t.mode())));for(const e of o)e.addEventListener("click",()=>{t.setMode(e.dataset.mode),d()});d();
