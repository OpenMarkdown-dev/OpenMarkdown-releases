import{r as t,u as e}from"./index-DJtWu5tj.js";import"./preload-helper-BE6tXj1V.js";const a=`# Tables, diagrams and math

Click into a cell and type; Tab moves to the next one.

| Planet | Moons | Rings |
| :--- | ---: | :---: |
| Earth | 1 | no |
| Saturn | 274 | yes |

Inline math like $e^{i\\pi} + 1 = 0$, and a block:

$$
\\int_0^1 x^2\\,dx = \\frac{1}{3}
$$

\`\`\`mermaid
graph LR
  A[Markdown text] --> B[Editor]
  B --> C[Same text, saved]
\`\`\`
`;t(document.getElementById("editor"),e({doc:a}));
