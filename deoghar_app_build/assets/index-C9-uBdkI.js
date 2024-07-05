import{d as m,j as e,C as J,_ as c}from"./index-j9I82nQr.js";import{u as K,o as Q,F as V,S as W,c as X,a as O,e as Y}from"./SelectField-D_iHSFip.js";import{g as Z}from"./services-KQnp_8oA.js";import{R as D}from"./RHFTextArea-C4Y_Cvpg.js";import{B as ee}from"./ButtonLoading-xzbaRAEx.js";import{d as ae,h as se}from"./router-CTqkcgir.js";import{R as te}from"./RHFUploadFiled-C_dfXgDp.js";import{P as de}from"./index-CforZJnI.js";import{C as h,b as p}from"./card-DHBbtegN.js";import{I as ie}from"./Image-C6UstR7o.js";import{u as re,b as ne,a as E}from"./useCustomQuery-n4GyWQha.js";import{S as H}from"./separator-CzaTWi1P.js";import{S as j}from"./SkeletonLoader-B9YwBcsm.js";import{O as le}from"./OverLayLoader-Dyo6puCE.js";import"./headlessui-BV7w-sRG.js";import"./axios-DmypytPv.js";import"./module-CTPC1BkT.js";const oe=X().shape({paymentUpToMonth:O().required("Month is required"),remarks:O().required("Remark is required"),billFile:Y().required("Bill File is required").test("fileSize","File Size is too large. Max 900kb allowed.",l=>l&&l.size<=9e5)});function Ae(){var g,f,b,v,y,N,u,F,S,M,U,A,P,R,w,L,T,q,k,C,I,B,$;const l=ae(),o=re({}),{id:t}=se(),a=ne({api:`${m.getApartmentDetailsById}/${t}`,options:{enabled:!!t}}),x=E({api:m.getPaymentData,config:{apartmentId:t},options:{enabled:!!t}}),r=K({resolver:Q(oe)}),G=async d=>{var z,_;const i=new FormData;i.append("apartmentId",String(t)),i.append("adjustUpto",d.paymentUpToMonth),i.append("adjustAmount",String((_=(z=s==null?void 0:s.data)==null?void 0:z.data)==null?void 0:_.totaldemand)),i.append("remarks",d.remarks),i.append("billFile",d.billFile),J("Are you sure?","Please confirm",async()=>{try{const n=await o.mutateAsync({api:m.paymentAdjustment,data:i});n.data.status?(c.success(n.data.msg),l(`/deoghar-app/apartment-actions/${t}`)):c.error(n.data.msg)}catch(n){c.error(Z(n))}})},s=E({api:m.getCalculatedAmount,config:{apartmentId:t,payUpto:r.watch("paymentUpToMonth")},value:[r.watch("paymentUpToMonth")],options:{enabled:!!r.watch("paymentUpToMonth")&&!!t}});return a!=null&&a.isLoading?e.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:e.jsx(h,{children:e.jsxs(p,{children:[e.jsx(j,{}),e.jsx(j,{}),e.jsx(j,{})]})})}):e.jsxs(de,{title:"Demand Update",children:[o.isPending&&e.jsx(le,{}),e.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[e.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[e.jsx(ie,{src:"/assets/image/category.png",alt:"Demand Update",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"font-semibold",children:"Demand Update"}),e.jsx("p",{className:"text-xs text-gray-500",children:"Solid west management system"})]})]}),e.jsx(H,{}),e.jsx(h,{children:e.jsx(p,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-3 py-6",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Apartment code:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(f=(g=a==null?void 0:a.data)==null?void 0:g.data[0])==null?void 0:f.apartmentCode})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Apartment Name:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(v=(b=a==null?void 0:a.data)==null?void 0:b.data[0])==null?void 0:v.apartmentName})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Mobile no:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(N=(y=a==null?void 0:a.data)==null?void 0:y.data[0])==null?void 0:N.mobileNo})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Monthly Demand/Rate:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(u=a==null?void 0:a.data)==null?void 0:u.totalAptMonthlyDemand})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Outstanding Demand:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(F=a==null?void 0:a.data)==null?void 0:F.totalAptDemand})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Demand from:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(M=(S=a==null?void 0:a.data)==null?void 0:S.data[0])==null?void 0:M.demandFrom})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Demand upto:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(A=(U=a==null?void 0:a.data)==null?void 0:U.data[0])==null?void 0:A.demandUpto})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Total flats:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(R=(P=a==null?void 0:a.data)==null?void 0:P.data)==null?void 0:R.length})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Address:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(L=(w=a==null?void 0:a.data)==null?void 0:w.data[0])==null?void 0:L.address})})]})})}),e.jsx(H,{}),e.jsx(h,{children:e.jsx(p,{children:e.jsx(V,{methods:r,onSubmit:r.handleSubmit(G),children:e.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[e.jsx("div",{children:e.jsx(W,{name:"paymentUpToMonth",isRequired:!0,label:"Payment upto month",data:((k=(q=(T=x==null?void 0:x.data)==null?void 0:T.data)==null?void 0:q.demand)==null?void 0:k.map(d=>({label:d.payment_to,value:d.payment_to})))??[]})}),e.jsx("div",{children:e.jsx(D,{name:"remarks",label:"Remarks",isRequired:!0})}),e.jsx("div",{children:e.jsx(te,{isRequired:!0,name:"billFile",label:"Bill File",type:"file",accept:".pdf"})}),e.jsx("div",{className:"flex justify-end mt-2",children:e.jsxs(ee,{type:"submit",size:"sm",isLoading:o.isPending||s.isLoading,disabled:s.isLoading||o.isPending,children:[s.isLoading?"Loading...":"SUBMIT"," ",((I=(C=s==null?void 0:s.data)==null?void 0:C.data)==null?void 0:I.totaldemand)&&(($=(B=s==null?void 0:s.data)==null?void 0:B.data)==null?void 0:$.totaldemand)]})})]})})})})]})]})}export{Ae as default};
