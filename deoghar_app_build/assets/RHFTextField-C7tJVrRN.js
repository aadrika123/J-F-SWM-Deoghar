import{j as s}from"./index-DwHfpNlX.js";import{d as u,C as g,I as d,f as n}from"./SelectField-DCQpvyE5.js";function N({name:l,label:t,isDynamic:f,inputValidation:a,inputSize:e,isRequired:h,...c}){const{control:o}=u();return s.jsx(s.Fragment,{children:l?s.jsx(g,{name:l,control:o,render:({field:{ref:m,...r},fieldState:{error:x}})=>s.jsxs("div",{children:[s.jsxs("h1",{className:"text-gray-700 dark:text-gray-200 mb-1",children:[t," ",h&&t&&s.jsx("span",{className:"text-red-400",children:"*"})]}),s.jsx(d,{...r,value:typeof r.value=="number"&&r.value===0?"":r.value,ref:m,className:"".concat(x?"border-red-400":null,"\n            ").concat(e==="small"&&"h-8"||e==="medium"&&"h-10"||e==="large"&&"h-12"||"h-9"),onInput:j=>{a&&n(j,a)},...c}),x&&s.jsx("span",{className:"text-red-400 text-xs",children:x.message})]})}):s.jsxs("div",{children:[s.jsx("h1",{className:"text-gray-700 dark:text-gray-200 mb-1",children:t}),s.jsx(d,{...c,className:"\n        ".concat(e==="small"&&"h-8"||e==="medium"&&"h-10"||e==="large"&&"h-12"||"h-9"),onInput:m=>{a&&n(m,a)}})]})})}export{N as R};
