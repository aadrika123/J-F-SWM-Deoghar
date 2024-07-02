import{c as u,j as e,g as h,_ as c}from"./index-DpLc_VBb.js";import{r as y,L as j}from"./router-DQohkvhc.js";import{P as f}from"./index-DXYI66RA.js";import{I as b}from"./Image-BiAIlPq9.js";import{B as n}from"./button-CQD3R9tk.js";import{S as N}from"./separator-DMdG5SbB.js";import{u as v,a as w}from"./useCustomQuery-_o8NWOw0.js";import{a as k,o as R,F as L,c as C,b as m}from"./SelectField-x3wuE_96.js";import{R as x}from"./RHFTextField-C8Nb3w9R.js";import{C as S}from"./index-YNpgorTJ.js";import"./headlessui-qWRqSxHB.js";import"./axios-DmypytPv.js";/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=u("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]),$=C().shape({routeName:m().required().label("Route Name"),selectedDate:m().required().label("Select Date")});function z({open:a,setOpen:t,title:l,refetch:i}){const s=v({}),d=()=>t(!a),o=k({resolver:R($),defaultValues:{routeName:"",selectedDate:""}}),g=async p=>{t(!1),S("Are you sure?","Please confirm",async()=>{try{const r=await s.mutateAsync({api:h.postNewRoute,data:p});r.data.status?(c.success(r.data.msg),i&&i()):c.error(r.data.msg)}catch(r){c.error(r.msg)}})};return e.jsxs("div",{children:[a&&e.jsx("div",{className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),e.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:`${a?"flex":"hidden"} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`,children:e.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full",children:e.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-900 dark:text-white",children:l??"Add Reminder"}),e.jsxs("button",{style:{background:"none"},onClick:d,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[e.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),e.jsx("div",{className:"p-4 md:p-5",children:e.jsxs(L,{methods:o,onSubmit:o.handleSubmit(g),children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[e.jsx("div",{children:e.jsx(x,{name:"routeName",label:"Route Name"})}),e.jsx("div",{children:e.jsx(x,{name:"selectedDate",label:"Select Date",type:"date"})})]}),e.jsxs("div",{className:"flex justify-end gap-3 mt-6 mb-2",children:[e.jsx(n,{size:"sm",type:"button",onClick:d,className:"bg-gray-200 text-gray-900 w-20",children:"Cancel"}),e.jsx(n,{size:"sm",type:"submit",className:"w-20",children:"SAVE"})]})]})})]})})})]})}function T(){var i;const[a,t]=y.useState(!1),l=w({api:`${h.getRouteList}`,config:{},options:{enabled:!0}});return e.jsxs(f,{title:"Route List",children:[a&&e.jsx(z,{open:a,setOpen:t,refetch:l.refetch}),e.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[e.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[e.jsx(b,{src:"/assets/image/category.png",alt:"Route List",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"font-semibold",children:"Route List"}),e.jsx("p",{className:"text-xs text-gray-500",children:"Solid west management system"})]})]}),e.jsx("div",{className:"flex space-x-3 items-center justify-end",children:e.jsx(n,{size:"sm",onClick:()=>{t(!0)},children:"Add Route."})}),e.jsx(N,{}),e.jsx("div",{className:"grid grid-cols-1 gap-4",children:(i=l.data)==null?void 0:i.data.map((s,d)=>e.jsxs("div",{className:"flex justify-between items-center p-4 bg-gray-100 rounded-lg",children:[e.jsxs("div",{className:"flex gap-3 items-center",children:[e.jsx(A,{className:"w-8 h-8 rounded-lg bg-gray-200 p-2"}),e.jsxs("div",{children:[e.jsx("h1",{className:"font-semibold",children:s==null?void 0:s.routeName}),e.jsx("p",{className:"text-xs text-gray-500",children:s==null?void 0:s.totalConsumerCount})]})]}),e.jsx(j,{to:`/deoghar-app/route-list-details/${s==null?void 0:s.id}/${s==null?void 0:s.routeName}/${s==null?void 0:s.totalConsumerCount}`,children:e.jsx(n,{size:"sm",children:"View"})})]},d+1))})]})]})}export{T as default};
