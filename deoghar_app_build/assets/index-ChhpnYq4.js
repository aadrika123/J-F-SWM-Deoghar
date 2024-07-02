import{j as e,g as D}from"./index-DpLc_VBb.js";import{b as F,r as v}from"./router-DQohkvhc.js";import{C as T,b as A}from"./card-BXyQteIV.js";import{P as R}from"./index-6JNMorUQ.js";import{P as k}from"./index-DXYI66RA.js";import{a as $,o as I,F as E,S as m,c as z,b as l}from"./SelectField-x3wuE_96.js";import{R as w}from"./RHFTextField-C8Nb3w9R.js";import{B as x}from"./button-CQD3R9tk.js";import{a as B}from"./useCustomQuery-_o8NWOw0.js";import{u as W,a as G,b as O}from"./useComonData-CebNVlkw.js";import{S as c}from"./separator-DMdG5SbB.js";import{I as V}from"./Image-BiAIlPq9.js";import"./headlessui-qWRqSxHB.js";import"./axios-DmypytPv.js";function H({reminderListData:t}){const r=F();return t!=null&&t.isFetching?e.jsx(e.Fragment,{children:Array.from({length:10}).map((s,o)=>e.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:e.jsx("div",{className:"animate-pulse flex space-x-4",children:e.jsxs("div",{className:"flex-1 space-y-4 py-1",children:[e.jsx("div",{className:"h-4 bg-gray-200 rounded w-3/4"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"h-4 bg-gray-200 rounded"}),e.jsx("div",{className:"h-4 bg-gray-200 rounded w-5/6"})]})]})})},o+1))}):e.jsx(e.Fragment,{children:t.status==="success"?t.data.data.map((s,o)=>e.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx("div",{className:"text-xs font-semibold text-gray-500",children:s.consumerNo!==""?"Consumer Name :":"Apartment Name :"}),e.jsx("div",{className:"text-xs font-semibold text-gray-500 w-30 truncate",children:s.consumerNo!==""?s.consumerName:s.apartmentName}),e.jsx("div",{className:"text-xs font-semibold text-gray-500",children:"Ward No :"}),e.jsx("div",{className:"text-xs font-semibold text-gray-500",children:s.wardNo}),e.jsx("div",{className:"text-xs font-semibold text-gray-500",children:s.consumerNo!==""?"Consumer No :":"Apartment Code :"}),e.jsx("div",{className:"text-xs font-semibold text-gray-500",children:s.consumerNo!==""?s.consumerNo:s.apartmentCode}),e.jsx("div",{className:"text-xs font-semibold text-gray-500",children:"Reminder Date :"}),e.jsx("div",{className:"text-xs font-semibold text-gray-500",children:s.reminderDate}),e.jsx("div",{className:"text-xs font-semibold text-gray-500",children:"Date :"}),e.jsx("div",{className:"text-xs font-semibold text-gray-500",children:s.date}),e.jsx("div",{className:"text-xs font-semibold text-gray-500",children:"Address :"}),e.jsx("div",{className:"text-xs font-semibold text-gray-500",children:s.address}),e.jsx("div",{className:"text-xs font-semibold text-gray-500",children:"Remarks :"}),e.jsx("div",{className:"text-xs font-semibold text-gray-500",children:s.remarks}),e.jsx(c,{className:"col-span-2 w-full"}),e.jsx("div",{children:e.jsx(x,{onClick:()=>{s.consumerNo!==""&&r(`/deoghar-app/consumer-actions/${s.id}`),s.apartmentCode!==""&&r(`/deoghar-app/apartment-actions/${s.id}`)},variant:"outline",className:"w-full rounded-lg ",size:"sm",children:e.jsx("h1",{className:"text-xs font-semibold text-gray-600",children:"VIEW DETAILS"})})}),e.jsx("div",{children:e.jsx(x,{variant:"outline",onClick:()=>{s.consumerNo!==""&&r(`/deoghar-app/consumer-payment/${s.id}`),s.apartmentCode!==""&&r(`/deoghar-app/apartment-payment/${s.id}`)},className:"w-full rounded-lg",size:"sm",children:"PAY"})})]})},o+1)):e.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("div",{className:"text-xs font-semibold text-gray-500",children:"No Data Found"})})})})}const Y=z().shape({category:l(),consumerType:l(),wardNo:l(),fromDate:l(),toDate:l()});function re(){var g,u,h,p,N,j,f,y,b;const{getAllUser:t}=W(),{getConsumerAddFormData:r}=G(),[s,o]=v.useState(1),[S,C]=v.useState(10),d=$({resolver:I(Y),defaultValues:{fromDate:new Date().toISOString().split("T")[0],toDate:new Date().toISOString().split("T")[0],category:"",consumerType:"",wardNo:""}}),n=B({api:`${D.getReminderList}`,config:{fromDate:d.watch("fromDate"),toDate:d.watch("toDate"),category:d.watch("category"),type:d.watch("consumerType"),wardNo:d.watch("wardNo")},key:"reminderList",options:{enabled:!0}}),P=async a=>{o(1),C(10),n.refetch()},{consumerCategoryData:i}=O(String(d.watch("category")));return e.jsx(k,{title:"Reminder List",children:e.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[e.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[e.jsx(V,{src:"/assets/image/apartment.png",alt:"Add Consumer",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:" font-semibold",children:"Reminder List"}),e.jsx("p",{className:"text-xs text-gray-500",children:"Solid waste management reminder list."})]})]}),e.jsx(c,{}),e.jsx(T,{className:"overflow-hidden py-4","x-chunk":"dashboard-05-chunk-4",children:e.jsx(A,{className:"px-6 text-sm",children:e.jsxs(E,{methods:d,onSubmit:d.handleSubmit(P),children:[e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx(w,{name:"fromDate",label:"From Date",type:"date",className:"w-full"})}),e.jsx("div",{children:e.jsx(w,{name:"toDate",label:"To Date",type:"date",className:"w-full"})}),e.jsx("div",{className:"col-span-2",children:e.jsx(m,{name:"wardNo",label:"Ward No",className:"w-full",data:((h=(u=(g=t==null?void 0:t.data)==null?void 0:g.data[0].ulbDetails[0])==null?void 0:u.wards)==null?void 0:h.map(a=>({label:String(a),value:String(a)})))??[]})}),e.jsx("div",{children:e.jsx(m,{name:"category",label:"Category",className:"w-full",data:((j=(N=(p=r==null?void 0:r.data)==null?void 0:p.data)==null?void 0:N.consumerCategory)==null?void 0:j.map(a=>({label:String(a.name),value:String(a.id)})))??[]})}),e.jsx("div",{children:e.jsx(m,{name:"consumerType",label:"Consumer Type",className:"w-full",data:((b=(y=(f=i==null?void 0:i.data)==null?void 0:f.data)==null?void 0:y.consumerTypeList)==null?void 0:b.map(a=>({label:String(a.name),value:String(a.id)})))??[]})})]}),e.jsx("div",{className:"flex justify-end mt-4",children:e.jsx(x,{type:"submit",variant:"default",size:"sm",className:"rounded-md w-24",children:"Search"})})]})})}),e.jsx(c,{}),e.jsx(H,{reminderListData:n}),(n==null?void 0:n.status)==="success"&&e.jsxs(e.Fragment,{children:[e.jsx(R,{page:s,perPage:S,totalPage:10,setPage:a=>o(a)}),e.jsx(c,{})]})]})})}export{re as default};
