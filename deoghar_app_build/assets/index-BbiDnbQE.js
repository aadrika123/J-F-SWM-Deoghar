import{u as Q,h as V,g as H,e as m,j as e,I as W,C as X,_ as h}from"./index-CFEcPPam.js";import{u as Y,o as Z,F as D,S as ee,c as ae,a as G,e as se}from"./SelectField-D_AZBRzD.js";import{g as te}from"./services-KQnp_8oA.js";import{R as de}from"./RHFTextArea-CBlrlPNE.js";import{B as ie}from"./ButtonLoading-BXOdbgRq.js";import{d as re,h as ne}from"./router-CTqkcgir.js";import{R as le}from"./RHFUploadFiled-B4tKeUKn.js";import{P as oe}from"./index-BOVhejvd.js";import{C as c,b as p}from"./card-BNt_tNx1.js";import{S as J}from"./separator-DiOkaWo3.js";import{S as j}from"./SkeletonLoader-DaoLwrOR.js";import{O as me}from"./OverLayLoader-DVfFTbyR.js";import"./headlessui-BV7w-sRG.js";import"./axios-DmypytPv.js";import"./module-C5MiFBOp.js";const xe=ae().shape({paymentUpToMonth:G().required("Month is required"),remarks:G().required("Remark is required"),billFile:se().required("Bill File is required").test("fileSize","File Size is too large. Max 900kb allowed.",l=>l&&l.size<=9e5)});function Ue(){var g,f,b,v,y,N,u,F,M,S,A,U,P,R,w,L,T,q,k,C,I,B,$,z,_;const l=re(),o=Q({}),{id:t}=ne(),a=V({api:`${m.getApartmentDetailsById}/${t}`,options:{enabled:!!t}}),x=H({api:m.getPaymentData,config:{apartmentId:t},options:{enabled:!!t}}),r=Y({resolver:Z(xe)}),K=async d=>{var O,E;const i=new FormData;i.append("apartmentId",String(t)),i.append("adjustUpto",d.paymentUpToMonth),i.append("adjustAmount",String((E=(O=s==null?void 0:s.data)==null?void 0:O.data)==null?void 0:E.totaldemand)),i.append("remarks",d.remarks),i.append("billFile",d.billFile),X("Are you sure?","Please confirm",async()=>{try{const n=await o.mutateAsync({api:m.paymentAdjustment,data:i});n.data.status?(h.success(n.data.msg),l(`/deoghar-app/apartment-actions/${t}`)):h.error(n.data.msg)}catch(n){h.error(te(n))}})},s=H({api:m.getCalculatedAmount,config:{apartmentId:t,payUpto:r.watch("paymentUpToMonth")},value:[r.watch("paymentUpToMonth")],options:{enabled:!!r.watch("paymentUpToMonth")&&!!t}});return a!=null&&a.isLoading?e.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:e.jsx(c,{children:e.jsxs(p,{children:[e.jsx(j,{}),e.jsx(j,{}),e.jsx(j,{})]})})}):e.jsxs(oe,{title:"Demand Update",children:[o.isPending&&e.jsx(me,{}),e.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[e.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[e.jsx(W,{src:"/assets/image/category.png",alt:"Demand Update",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"font-semibold",children:"Demand Update"}),e.jsx("p",{className:"text-xs text-gray-500",children:"Solid west management system"})]})]}),e.jsx(J,{}),e.jsx(c,{children:e.jsx(p,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-3 py-6",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Apartment code:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(f=(g=a==null?void 0:a.data)==null?void 0:g.data[0])==null?void 0:f.apartmentCode})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Apartment Name:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(v=(b=a==null?void 0:a.data)==null?void 0:b.data[0])==null?void 0:v.apartmentName})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Mobile no:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(N=(y=a==null?void 0:a.data)==null?void 0:y.data[0])==null?void 0:N.mobileNo})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Monthly Demand/Rate:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(u=a==null?void 0:a.data)==null?void 0:u.totalAptMonthlyDemand})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Outstanding Demand:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(F=a==null?void 0:a.data)==null?void 0:F.totalAptDemand})}),((M=a==null?void 0:a.data)==null?void 0:M.totalAptDemand)>0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Demand from:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(A=(S=a==null?void 0:a.data)==null?void 0:S.data[0])==null?void 0:A.demandFrom})})]}),((U=a==null?void 0:a.data)==null?void 0:U.totalAptDemand)>0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Demand upto:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(R=(P=a==null?void 0:a.data)==null?void 0:P.data[0])==null?void 0:R.demandUpto})})]}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Total flats:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(L=(w=a==null?void 0:a.data)==null?void 0:w.data)==null?void 0:L.length})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Address:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(q=(T=a==null?void 0:a.data)==null?void 0:T.data[0])==null?void 0:q.address})})]})})}),e.jsx(J,{}),e.jsx(c,{children:e.jsx(p,{children:e.jsx(D,{methods:r,onSubmit:r.handleSubmit(K),children:e.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[e.jsx("div",{children:e.jsx(ee,{name:"paymentUpToMonth",isRequired:!0,label:"Payment Upto Month",data:((I=(C=(k=x==null?void 0:x.data)==null?void 0:k.data)==null?void 0:C.demand)==null?void 0:I.map(d=>({label:d.payment_to,value:d.payment_to})))??[]})}),e.jsx("div",{children:e.jsx(de,{name:"remarks",label:"Remarks",isRequired:!0})}),e.jsx("div",{children:e.jsx(le,{isRequired:!0,name:"billFile",label:"Bill File",type:"file",accept:".pdf"})}),e.jsx("div",{className:"flex justify-end mt-2",children:e.jsxs(ie,{type:"submit",size:"sm",isLoading:o.isPending||s.isLoading,disabled:s.isLoading||o.isPending,children:[s.isLoading?"Loading...":"SUBMIT"," ",(($=(B=s==null?void 0:s.data)==null?void 0:B.data)==null?void 0:$.totaldemand)&&((_=(z=s==null?void 0:s.data)==null?void 0:z.data)==null?void 0:_.totaldemand)]})})]})})})})]})]})}export{Ue as default};
