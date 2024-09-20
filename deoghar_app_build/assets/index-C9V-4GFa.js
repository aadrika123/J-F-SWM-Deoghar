import{u as W,h as X,g as J,e as m,j as a,I as Y,C as Z,_ as h}from"./index-DskiXWfo.js";import{u as D,F as aa,c as ea,a as K,e as ta,o as sa}from"./switch-LxJsj5Bc.js";import{g as da}from"./services-KQnp_8oA.js";import{R as ia}from"./RHFTextArea-u7tjeRKC.js";import{B as ra}from"./ButtonLoading-D5QRYgjO.js";import{u as na,i as la}from"./router-DWxcwEcu.js";import{R as oa}from"./RHFUploadFiled-CaUEgPxG.js";import{R as ma}from"./SelectField-H8INzAoa.js";import{P as xa}from"./index-CRX5ZJ8K.js";import{C as c,b as p}from"./card-Bj2cLFo1.js";import{S as Q}from"./separator-BTd2xj_o.js";import{S as j}from"./SkeletonLoader-BO4ZHHk0.js";import{O as ha}from"./OverLayLoader-D59R5ziZ.js";import"./headlessui-DlCzxctq.js";import"./axios-BrYcoDUu.js";import"./module-CwN8NruV.js";const ca=ea().shape({paymentUpToMonth:K().required("Month is required"),remarks:K().required("Remark is required"),billFile:ta().required("Bill File is required").test("fileSize","File Size is too large. Max 900kb allowed.",l=>l&&l.size<=9e5)});function wa(){var g,f,b,v,y,N,F,u,M,A,S,U,L,R,w,T,q,P,k,C,I,B,$,z,_,H,O;const l=na(),o=W({}),{id:s}=la(),e=X({api:"".concat(m.getApartmentDetailsById,"/").concat(s),options:{enabled:!!s}}),x=J({api:m.getPaymentData,config:{apartmentId:s},options:{enabled:!!s}}),r=D({resolver:sa(ca)}),V=async d=>{var E,G;const i=new FormData;i.append("apartmentId",String(s)),i.append("adjustUpto",d.paymentUpToMonth),i.append("adjustAmount",String((G=(E=t==null?void 0:t.data)==null?void 0:E.data)==null?void 0:G.totaldemand)),i.append("remarks",d.remarks),i.append("billFile",d.billFile),Z("Are you sure?","Please confirm",async()=>{try{const n=await o.mutateAsync({api:m.paymentAdjustment,data:i});n.data.status?(h.success(n.data.msg),l("/deoghar-app/apartment-actions/".concat(s))):h.error(n.data.msg)}catch(n){h.error(da(n))}})},t=J({api:m.getCalculatedAmount,config:{apartmentId:s,payUpto:r.watch("paymentUpToMonth")},value:[r.watch("paymentUpToMonth")],options:{enabled:!!r.watch("paymentUpToMonth")&&!!s}});return e!=null&&e.isLoading?a.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:a.jsx(c,{children:a.jsxs(p,{children:[a.jsx(j,{}),a.jsx(j,{}),a.jsx(j,{})]})})}):a.jsxs(xa,{title:"Demand Update",children:[o.isLoading&&a.jsx(ha,{}),a.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[a.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[a.jsx(Y,{src:"/assets/image/category.png",alt:"Demand Update",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),a.jsxs("div",{className:"",children:[a.jsx("h1",{className:"font-semibold",children:"Demand Update"}),a.jsx("p",{className:"text-xs text-gray-500",children:"Solid west management system"})]})]}),a.jsx(Q,{}),a.jsx(c,{children:a.jsx(p,{children:a.jsxs("div",{className:"grid grid-cols-2 gap-3 py-6",children:[a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Apartment code:"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:(f=(g=e==null?void 0:e.data)==null?void 0:g.data[0])==null?void 0:f.apartmentCode})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Apartment Name:"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:(v=(b=e==null?void 0:e.data)==null?void 0:b.data[0])==null?void 0:v.apartmentName})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Mobile no:"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:(N=(y=e==null?void 0:e.data)==null?void 0:y.data[0])==null?void 0:N.mobileNo})}),((F=e==null?void 0:e.data)==null?void 0:F.totalAptMonthlyDemand)>0&&a.jsxs(a.Fragment,{children:[a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Monthly Demand/Rate:"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:(u=e==null?void 0:e.data)==null?void 0:u.totalAptMonthlyDemand})})]}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Outstanding Demand:"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:(M=e==null?void 0:e.data)==null?void 0:M.totalAptDemand})}),((A=e==null?void 0:e.data)==null?void 0:A.totalAptDemand)>0&&a.jsxs(a.Fragment,{children:[a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Demand from:"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:(U=(S=e==null?void 0:e.data)==null?void 0:S.data[0])==null?void 0:U.demandFrom})})]}),((L=e==null?void 0:e.data)==null?void 0:L.totalAptDemand)>0&&a.jsxs(a.Fragment,{children:[a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Demand upto:"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:(w=(R=e==null?void 0:e.data)==null?void 0:R.data[0])==null?void 0:w.demandUpto})})]}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Total flats:"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:(q=(T=e==null?void 0:e.data)==null?void 0:T.data)==null?void 0:q.length})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Address:"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:(k=(P=e==null?void 0:e.data)==null?void 0:P.data[0])==null?void 0:k.address})})]})})}),a.jsx(Q,{}),a.jsx(c,{children:a.jsx(p,{children:a.jsx(aa,{methods:r,onSubmit:r.handleSubmit(V),children:a.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[a.jsx("div",{children:a.jsx(ma,{name:"paymentUpToMonth",isRequired:!0,label:"Payment Upto Month",data:($=(B=(I=(C=x==null?void 0:x.data)==null?void 0:C.data)==null?void 0:I.demand)==null?void 0:B.map(d=>({label:d.payment_to,value:d.payment_to})))!=null?$:[]})}),a.jsx("div",{children:a.jsx(ia,{name:"remarks",label:"Remarks",isRequired:!0})}),a.jsx("div",{children:a.jsx(oa,{isRequired:!0,name:"billFile",label:"Bill File",type:"file",accept:".pdf"})}),a.jsx("div",{className:"flex justify-end mt-2",children:a.jsxs(ra,{type:"submit",size:"sm",isLoading:o.isLoading||t.isLoading,disabled:t.isLoading||o.isLoading,children:[t.isLoading?"Loading...":"SUBMIT"," ",((_=(z=t==null?void 0:t.data)==null?void 0:z.data)==null?void 0:_.totaldemand)&&((O=(H=t==null?void 0:t.data)==null?void 0:H.data)==null?void 0:O.totaldemand)]})})]})})})})]})]})}export{wa as default};
