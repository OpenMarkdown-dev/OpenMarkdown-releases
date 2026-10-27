import{c as h,D as T,E as p,a as v}from"./index-Xw5G8W17.js";import{s as b,r as A}from"./disk-uhQTC_Wf.js";const E="\uFEFF";function C(o){const t=o.startsWith(E),i=t?o.slice(1):o,u=i.includes(`\r
`)?`\r
`:`
`;return{content:u===`\r
`?i.replaceAll(`\r
`,`
`):i,eol:u,bom:t}}function D(o,{eol:t,bom:i}){const u=t===`\r
`?o.replaceAll(`
`,`\r
`):o;return i?E+u:u}const S=1500;function m(o){v("watch_file",{path:o},{onError:"log"})}function f(o){v("unwatch_file",{path:o},{onError:"ignore"})}let r=null;const F=h((o,t)=>{A(n=>o({saveError:n}));async function i(){const{path:n,currentContent:e,savedContent:a,eol:s,bom:l}=t();!n||e===a||await b(n,D(e,{eol:s,bom:l}))&&o({savedContent:e,dirty:!1,saveError:null,lastSavedAt:Date.now()})}function u(n,e,a="end"){r&&clearTimeout(r);const s=t().path;s&&s!==n&&(f(s),p(s)),m(n);const{content:l,eol:c,bom:d}=C(e);return o(y=>({path:n,savedContent:l,currentContent:l,eol:c,bom:d,dirty:!1,lastSavedAt:null,saveError:null,docVersion:y.docVersion+1,openCursor:a})),l}return{path:null,savedContent:"",currentContent:"",eol:`
`,bom:!1,dirty:!1,lastSavedAt:null,saveError:null,docVersion:0,openCursor:"end",async openFile(n,e){await t().flush();const a=await v("read_file",{path:n},{onError:"throw"});return t().adoptDisk(a.path,a.content,"open",e)},adoptDisk(n,e,a,s){if(a==="open")return u(n,e,s?.initialCursor);if(t().path!==n)return null;const{content:l,eol:c,bom:d}=C(e);return o(a==="reload"?{savedContent:l,currentContent:l,eol:c,bom:d,dirty:!1}:{savedContent:l,eol:c,bom:d}),l},clear(){r&&(clearTimeout(r),r=null);const n=t().path;n&&(f(n),p(n)),o(e=>({path:null,savedContent:"",currentContent:"",eol:`
`,bom:!1,dirty:!1,lastSavedAt:null,saveError:null,docVersion:e.docVersion+1,openCursor:"end"}))},onEdit(n){o({currentContent:n,dirty:n!==t().savedContent}),r&&clearTimeout(r),r=setTimeout(()=>{i()},S)},async flush(){r&&(clearTimeout(r),r=null),await i()},discard(){r&&(clearTimeout(r),r=null),o(n=>({savedContent:n.currentContent,dirty:!1}))},repath(n){const e=t().path;!e||e===n||(f(e),m(n),T(e,n),o({path:n}))}}});export{C as decodeDisk,D as encodeForDisk,F as useDocumentStore};
