import{j as e,a as w,g as C,e as T,I as P,B as I}from"./index-806RzVmj.js";import{L as S,r as f}from"./router-CTqkcgir.js";import{C as F,b as R}from"./card-DM18b3lk.js";import{P as A}from"./index-DBk2_LcY.js";import{P as Y}from"./index-Bxcr3w61.js";import{h as y}from"./moment-BjLXg0w5.js";import{u as M,o as D,F as k,S as b,c as $,a as r,g as L}from"./SelectField-BQfgim-u.js";import{R as v}from"./RHFTextField-B_iTY4r2.js";import{c as q}from"./useComonData-CVJ3i0JQ.js";import{S as x}from"./separator-Ma15OfAL.js";import"./headlessui-BV7w-sRG.js";import"./axios-DmypytPv.js";function B({collectionData:a}){var d,c,l,m,i,t;return a!=null&&a.isFetching?e.jsx(e.Fragment,{children:Array.from({length:10}).map((s,n)=>e.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:e.jsx("div",{className:"animate-pulse flex space-x-4",children:e.jsxs("div",{className:"flex-1 space-y-4 py-1",children:[e.jsx("div",{className:"h-4 bg-gray-200 rounded w-3/4"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"h-4 bg-gray-200 rounded"}),e.jsx("div",{className:"h-4 bg-gray-200 rounded w-5/6"})]})]})})},n+1))}):e.jsx("div",{children:a.status==="success"&&((m=(l=(c=(d=a==null?void 0:a.data)==null?void 0:d.data)==null?void 0:c.details)==null?void 0:l.transactions)==null?void 0:m.length)>0?(t=(i=a.data.data)==null?void 0:i.details)==null?void 0:t.transactions.map((s,n)=>e.jsxs("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm mt-4",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4 justify-center items-center",children:[e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"Consumer no/APT no :"}),e.jsx("div",{className:"text-sm font-semibold text-gray-500 w-30 truncate",children:s!=null&&s.apartmentCode?s==null?void 0:s.apartmentCode:s==null?void 0:s.consumerNo}),e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"Consumer Name / APT Name :"}),e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:s!=null&&s.apartmentName?s==null?void 0:s.apartmentName:s==null?void 0:s.consumerName}),e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"Ward :"}),e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:s.wardNo}),e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"Amount :"}),e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:s.amount}),e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"Mode :"}),e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:s.transactionMode}),e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"Payment from :"}),e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:s.demandFrom}),e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"Payment upto :"}),e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:s.demandUpto})]}),e.jsx("div",{className:"flex justify-end mt-4",children:e.jsx(S,{to:`/deoghar-app/payment-receipt/${s==null?void 0:s.transactionNo}`,className:"text-sm text-blue-500",children:"View Receipt"})})]},n+1)):e.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"No Data Found"})})})})}const E=$().shape({fromDate:r(),toDate:r(),tcId:r(),consumerCategory:r(),consumerType:r(),buildingType:r(),mode:r(),wardNo:r().nullable(),reportType:r(),userId:L()});function Z(){var h,p,u,g,j,N;const{user:a}=w(),{getTcList:d}=q(),[c,l]=f.useState(1),[m,i]=f.useState(10),t=M({resolver:D(E),defaultValues:{fromDate:y().format("YYYY-MM-DD"),toDate:y().format("YYYY-MM-DD"),tcId:"",consumerCategory:"",consumerType:"",buildingType:"",mode:"",wardNo:null,reportType:"dailyCollection",userId:a==null?void 0:a.id}}),s=C({api:T.getReportData,config:{fromDate:t.watch("fromDate"),toDate:t.watch("toDate"),tcId:(a==null?void 0:a.userTypeId)==5||t.watch("tcId")!=""?t.watch("tcId"):"",consumerCategory:t.watch("consumerCategory"),consumerType:t.watch("consumerType"),buildingType:t.watch("buildingType"),mode:t.watch("mode"),wardNo:t.watch("wardNo"),reportType:t.watch("reportType"),userId:t.watch("userId")},options:{enabled:!0}}),n=async o=>{l(1),i(10),s.refetch()};return e.jsx(Y,{title:"Collection Report",children:e.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[e.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[e.jsx(P,{src:"/assets/icons/coins.svg",alt:"Add Consumer",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:" font-semibold",children:"Collection Report"}),e.jsx("p",{className:"text-xs text-gray-500",children:"Solid waste management system"})]})]}),e.jsx(x,{}),e.jsx(F,{className:"overflow-hidden py-4","x-chunk":"dashboard-05-chunk-4",children:e.jsx(R,{className:"px-6 text-sm",children:e.jsx(k,{methods:t,onSubmit:t.handleSubmit(n),children:e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsx("div",{children:e.jsx(v,{name:"fromDate",label:"From Date",className:"w-full",type:"date"})}),e.jsx("div",{children:e.jsx(v,{name:"toDate",label:"To Date",className:"w-full",type:"date"})}),(a==null?void 0:a.userTypeId)==4&&e.jsx("div",{className:"col-span-2",children:e.jsx(b,{name:"tcId",label:"TC",className:"w-full",data:((p=(h=d==null?void 0:d.data)==null?void 0:h.data)==null?void 0:p.map(o=>({label:String(o.tcName),value:String(o.tcId)})))??[]})}),e.jsx("div",{className:"col-span-2",children:e.jsx(b,{name:"mode",label:"Mode",className:"w-full",data:[{label:"Cash",value:"Cash"},{label:"Cheque",value:"Cheque"},{label:"Dd",value:"DD"},{label:"Online",value:"Online"}]})}),e.jsx("div",{className:"col-span-2 mt-2",children:e.jsx(I,{type:"submit",variant:"default",size:"sm",className:"rounded-md w-24",children:"Search"})})]})})})}),e.jsx(x,{}),e.jsxs("div",{className:"flex justify-between item-center",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("h1",{className:"text-xs font-semibold",children:"Total Transaction:"}),e.jsx("h1",{className:"text-xs text-green-800 font-bold",children:((g=(u=s==null?void 0:s.data)==null?void 0:u.data.details)==null?void 0:g.transactions.length)??0})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("h1",{className:"text-xs font-semibold",children:"Total Collection:"}),e.jsxs("h1",{className:"text-xs text-green-800 font-bold",children:["Rs. ",((N=(j=s==null?void 0:s.data)==null?void 0:j.data.details)==null?void 0:N.totalCollection)??0]})]})]}),e.jsx(B,{collectionData:s}),(s==null?void 0:s.status)==="success"&&e.jsxs(e.Fragment,{children:[e.jsx(A,{page:c,perPage:m,totalPage:10,setPage:o=>l(o)}),e.jsx(x,{})]})]})})}export{Z as default};
