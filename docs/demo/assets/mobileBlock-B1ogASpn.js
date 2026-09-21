import{f as s,j as e,g as i}from"./index-DCYZuUJm.js";import{c as a,T as d,B as r}from"./Button-Bm83S7xX.js";const c=820,l="https://openmarkdown.dev/#download",p={en:{title:"The demo needs a computer",body:"OpenMarkdown is a desktop editor — its palette, tabs and shortcuts want a keyboard. Open this page on a laptop to try it, or get the app.",action:"Get OpenMarkdown"},zh:{title:"这个 demo 需要在电脑上体验",body:"OpenMarkdown 是桌面编辑器 —— 命令面板、标签页、快捷键都是为键盘做的。用电脑打开这个页面来试，或者直接下载 app。",action:"去下载 OpenMarkdown"},ja:{title:"このデモはパソコンが必要です",body:"OpenMarkdown はデスクトップのエディタです。パレットもタブもショートカットもキーボード前提です。パソコンで開くか、アプリを入手してください。",action:"OpenMarkdown を入手"}};function h(){const t=document.createElement("div");t.setAttribute("data-harness-mobile-block",""),document.body.appendChild(t);const o=document.createElement("style");o.textContent=`
    [data-harness-mobile-block] { display: none; }
    @media (max-width: ${c-1}px) {
      [data-harness-mobile-block] {
        display: flex;
        position: fixed;
        inset: 0;
        z-index: 9999;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
        padding: 2rem;
        text-align: center;
        background: var(--background);
        color: var(--foreground);
      }
      #root { display: none; }
    }
  `,document.head.appendChild(o);const n=p[i()];s.createRoot(t).render(e.jsxs(e.Fragment,{children:[e.jsx("p",{className:a(d.body,"font-medium"),children:n.title}),e.jsx("p",{className:a(d.body,"text-muted-foreground max-w-sm leading-relaxed"),children:n.body}),e.jsx(r,{weight:"solid",size:"lg",className:"mt-2",onClick:()=>window.open(l,"_blank","noopener"),children:n.action})]}))}export{h as installMobileBlock};
