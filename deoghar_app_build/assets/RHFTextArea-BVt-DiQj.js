import{j as t}from"./index-DpLc_VBb.js";import{u as c,C as p,e as f}from"./SelectField-x3wuE_96.js";function b({name:n,label:o,size:s,borderColor:l,inputValidation:r,...u}){const{control:m}=c();return t.jsx(p,{name:n,control:m,render:({field:{ref:d,...a},fieldState:{error:e}})=>t.jsxs(t.Fragment,{children:[t.jsx("label",{className:"text-gray-700 dark:text-gray-200 ",htmlFor:o,children:o}),t.jsx("textarea",{ref:d,...a,value:typeof a.value=="number"&&a.value===0?"":a.value,onInput:x=>{r&&f(x,r)},className:`bg-transparent block w-full rounded-sm border mt-2 dark:text-white ${s==="small"&&"p-1"||s==="medium"&&"p-3"||s==="large"&&"p-4"||"p-2"} placeholder-gray-500 focus:outline-none focus:z-10 
              ${e?"focus:border-red-400":"focus:border-indigo-400"}  
              ${e?"border-red-400":l??"border-gray-300"}
          `,...u}),e&&t.jsx("span",{className:"text-red-400 text-xs",children:e==null?void 0:e.message})]})})}export{b as R};
