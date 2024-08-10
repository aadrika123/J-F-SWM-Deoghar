import{j as s,g as P,e as F,I as A,B as Y}from"./index-806RzVmj.js";import{r as v}from"./router-CTqkcgir.js";import{C as T,b as k}from"./card-DM18b3lk.js";import{P as R}from"./index-DBk2_LcY.js";import{P as B}from"./index-Bxcr3w61.js";import{h as w}from"./moment-BjLXg0w5.js";import{u as L,o as M,F as E,S as i,c as G,a as n}from"./SelectField-BQfgim-u.js";import{R as S}from"./RHFTextField-B_iTY4r2.js";import{u as I,a as W,b as $}from"./useComonData-CVJ3i0JQ.js";import{S as x}from"./separator-Ma15OfAL.js";import"./headlessui-BV7w-sRG.js";import"./axios-DmypytPv.js";function z({denialData:t}){var d,c;return t!=null&&t.isFetching?s.jsx(s.Fragment,{children:Array.from({length:10}).map((e,o)=>s.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:s.jsx("div",{className:"animate-pulse flex space-x-4",children:s.jsxs("div",{className:"flex-1 space-y-4 py-1",children:[s.jsx("div",{className:"h-4 bg-gray-200 rounded w-3/4"}),s.jsxs("div",{className:"space-y-2",children:[s.jsx("div",{className:"h-4 bg-gray-200 rounded"}),s.jsx("div",{className:"h-4 bg-gray-200 rounded w-5/6"})]})]})})},o+1))}):s.jsx("div",{children:t.status==="success"&&((d=t.status)==null?void 0:d.length)>0?(c=t.data.data)==null?void 0:c.map((e,o)=>s.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm mt-4",children:s.jsxs("div",{className:"grid grid-cols-2 gap-4 justify-center items-center",children:[s.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"Consumer no/APT no :"}),s.jsx("div",{className:"text-sm font-semibold text-gray-500 w-30 truncate",children:e!=null&&e.apartmentCode?e==null?void 0:e.apartmentCode:e==null?void 0:e.consumerNo}),s.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"Consumer Name / APT Name :"}),s.jsx("div",{className:"text-sm font-semibold text-gray-500",children:e!=null&&e.apartmentName?e==null?void 0:e.apartmentName:e==null?void 0:e.consumerName}),s.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"Ward :"}),s.jsx("div",{className:"text-sm font-semibold text-gray-500",children:e.wardNo}),s.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"Amount :"}),s.jsx("div",{className:"text-sm font-semibold text-gray-500",children:e.outstandingAmount}),s.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"Deny by :"}),s.jsx("div",{className:"text-sm font-semibold text-gray-500",children:e.denyBy}),s.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"Deny date time :"}),s.jsx("div",{className:"text-sm font-semibold text-gray-500",children:e.denyDate}),s.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"Address :"}),s.jsx("div",{className:"text-sm font-semibold text-gray-500",children:e.address}),s.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"Remark :"}),s.jsx("div",{className:"text-sm font-semibold text-gray-500",children:e.remarks})]})},o+1)):s.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:s.jsx("div",{className:"flex items-center justify-center",children:s.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"No Data Found"})})})})}const H=G().shape({fromDate:n(),toDate:n(),category:n(),type:n(),wardNo:n().nullable()});function as(){var g,h,u,p,j,y,f,N,b;const{getAllUser:t}=I(),{getConsumerAddFormData:d}=W(),[c,e]=v.useState(1),[o,C]=v.useState(10),r=L({resolver:M(H),defaultValues:{fromDate:w().format("YYYY-MM-DD"),toDate:w().format("YYYY-MM-DD"),category:"",type:"",wardNo:""}}),l=P({api:F.getdenialNotification,config:{fromDate:r.watch("fromDate"),toDate:r.watch("toDate"),category:r.watch("category"),type:r.watch("type"),wardNo:r.watch("wardNo")},options:{enabled:!1}}),D=async a=>{e(1),C(10),l.refetch()},{consumerCategoryData:m}=$(String(r.watch("category")));return s.jsx(B,{title:"Denial List",children:s.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[s.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[s.jsx(A,{src:"/assets/image/deactivate.png",alt:"Add Consumer",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),s.jsxs("div",{className:"",children:[s.jsx("h1",{className:" font-semibold",children:"Denial List"}),s.jsx("p",{className:"text-xs text-gray-500",children:"Solid waste management system"})]})]}),s.jsx(x,{}),s.jsx(T,{className:"overflow-hidden py-4","x-chunk":"dashboard-05-chunk-4",children:s.jsx(k,{className:"px-6 text-sm",children:s.jsx(E,{methods:r,onSubmit:r.handleSubmit(D),children:s.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[s.jsx("div",{children:s.jsx(S,{name:"fromDate",label:"From Date",className:"w-full",type:"date"})}),s.jsx("div",{children:s.jsx(S,{name:"toDate",label:"To Date",className:"w-full",type:"date"})}),s.jsx("div",{className:"col-span-2",children:s.jsx(i,{name:"wardNo",label:"Ward",className:"w-full",data:((u=(h=(g=t==null?void 0:t.data)==null?void 0:g.data[0].ulbDetails[0])==null?void 0:h.wards)==null?void 0:u.map(a=>({label:String(a),value:String(a)})))??[]})}),s.jsx("div",{children:s.jsx(i,{name:"category",label:"Category",className:"w-full",data:((y=(j=(p=d==null?void 0:d.data)==null?void 0:p.data)==null?void 0:j.consumerCategory)==null?void 0:y.map(a=>({label:String(a.name),value:String(a.id)})))??[]})}),s.jsx("div",{children:s.jsx(i,{name:"type",label:"Consumer Type",className:"w-full",data:((b=(N=(f=m==null?void 0:m.data)==null?void 0:f.data)==null?void 0:N.consumerTypeList)==null?void 0:b.map(a=>({label:String(a.name),value:String(a.id)})))??[]})}),s.jsx("div",{className:"col-span-2 mt-2",children:s.jsx(Y,{type:"submit",variant:"default",size:"sm",className:"rounded-md w-24",children:"Search"})})]})})})}),s.jsx(x,{}),s.jsx(z,{denialData:l}),(l==null?void 0:l.status)==="success"&&s.jsxs(s.Fragment,{children:[s.jsx(R,{page:c,perPage:o,totalPage:10,setPage:a=>e(a)}),s.jsx(x,{})]})]})})}export{as as default};
