import{g as r,e as l,j as e,I as m,B as n}from"./index-CPXdmuH_.js";import{P as c}from"./index-D_E-W8CG.js";import{i as x,L as o}from"./router-BsPcvcg3.js";import{S as i}from"./separator-KMf3fRTH.js";import"./headlessui-DAvslveC.js";import"./axios-BrYcoDUu.js";function N(){var a;const{id:t}=x(),d=r({api:"".concat(l.getRouteDataById),config:{routeId:t},options:{enabled:!!t}});return e.jsx(c,{title:"Route List Details",children:e.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[e.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[e.jsx(m,{src:"/assets/image/category.png",alt:"Route List Details",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"font-semibold",children:"Route List Details"}),e.jsx("p",{className:"text-xs text-gray-500",children:"Solid west management system"})]})]}),e.jsx(i,{}),e.jsx("div",{className:"grid grid-cols-1 gap-4",children:(a=d.data)==null?void 0:a.data.map(s=>e.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:e.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"Consumer Name :"}),e.jsx("div",{className:"text-sm font-semibold text-gray-500 w-30 truncate",children:s.consumerName})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"Ward No :"}),e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:s.wardNo})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"Category :"}),e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:s.cansumerCategory})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"Type :"}),e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:s.cansumerType})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"Paid Status :"}),e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:s.paidStatus==="Paid"?e.jsx("span",{className:"px-2 py-1 text-xs font-semibold flex justify-start items-center border border-green-500 text-green-500 rounded-lg",children:s.paidStatus}):e.jsx("span",{className:"px-2 py-1 text-xs font-semibold flex justify-start items-center border border-red-500 text-red-500 rounded-lg",children:s.paidStatus})})]}),e.jsx(i,{}),s.paidStatus==="Unpaid"&&e.jsx("div",{className:"col-span-1 w-full",children:e.jsx(o,{to:"".concat(s.apartmentCode==""?"/deoghar-app/consumer-payment/".concat(s.id):"/deoghar-app/apartment-payment/".concat(s.id)),children:e.jsx(n,{variant:"outline",className:"w-full rounded-lg ",size:"sm",children:e.jsx("h1",{className:"text-xs font-semibold text-gray-600",children:"PAY"})})})})]})},s.id))})]})})}export{N as default};
