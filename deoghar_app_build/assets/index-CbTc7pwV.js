import{u as ee,h as ae,g as W,e as o,j as e,I as se,B as de,C as te,_ as x}from"./index-BLF-aM29.js";import{u as ie,F as re,c as ne,a as X,e as le,o as oe}from"./switch-CbKpx9LQ.js";import{g as me}from"./services-KQnp_8oA.js";import{R as xe}from"./RHFTextArea-DGHLXIKL.js";import{u as he,i as ce}from"./router-DWxcwEcu.js";import{R as pe}from"./RHFUploadFiled-DXiBsZQq.js";import{R as je}from"./SelectField-Bj-EMklb.js";import{P as ge}from"./index-CArvYltL.js";import{C as h,b as c}from"./card-Cfkmh3Tw.js";import{S as Y}from"./separator-BSNFH_6v.js";import{S as p}from"./SkeletonLoader-C-GreAn0.js";import{O as fe}from"./OverLayLoader-B9t7dFkG.js";import"./headlessui-DlCzxctq.js";import"./axios-BrYcoDUu.js";import"./module-CAf7QMvp.js";const be=ne().shape({paymentUpToMonth:X().required("Month is required"),remarks:X().required("Remark is required"),billFile:le().required("Bill File is required").test("fileSize","File Size is too large. Max 900kb allowed.",r=>r&&r.size<=9e5)});function Ae(){var j,g,f,b,v,y,N,u,F,S,M,R,U,C,w,T,q,P,k,A,I,L,B,$,z,_,H,O,E,G,J,K;const r=ee({}),Z=he(),{id:d}=ce(),a=ae({api:"".concat(o.getConsumerDetailsById,"/").concat(d),options:{enabled:!!d}}),m=W({api:o.getPaymentData,config:{consumerId:d},options:{enabled:!!d}}),n=ie({resolver:oe(be)}),D=async t=>{var Q,V;const i=new FormData;i.append("consumerId",String(d)),i.append("adjustUpto",t.paymentUpToMonth),i.append("adjustAmount",String((V=(Q=s==null?void 0:s.data)==null?void 0:Q.data)==null?void 0:V.totaldemand)),i.append("remarks",t.remarks),i.append("billFile",t.billFile),te("Are you sure?","Please confirm",async()=>{try{const l=await r.mutateAsync({api:o.paymentAdjustment,data:i});l.data.status?(x.success(l.data.msg),Z("/deoghar-app/consumer-actions/".concat(d))):x.error(l.data.msg)}catch(l){x.error(me(l))}})},s=W({api:o.getCalculatedAmount,config:{consumerId:d,payUpto:n.watch("paymentUpToMonth")},value:[n.watch("paymentUpToMonth")],options:{enabled:!!n.watch("paymentUpToMonth")&&!!d}});return a!=null&&a.isLoading?e.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:e.jsx(h,{children:e.jsxs(c,{children:[e.jsx(p,{}),e.jsx(p,{}),e.jsx(p,{})]})})}):e.jsxs(ge,{title:"Demand Update",children:[r.isLoading&&e.jsx(fe,{}),e.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[e.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[e.jsx(se,{src:"/assets/image/category.png",alt:"Demand Update",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"font-semibold",children:"Demand Update"}),e.jsx("p",{className:"text-xs text-gray-500",children:"Solid waste management system"})]})]}),e.jsx(Y,{}),e.jsx(h,{children:e.jsx(c,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-3 py-6",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Consumer no:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(g=(j=a==null?void 0:a.data)==null?void 0:j.data[0])==null?void 0:g.consumerNo})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Consumer Name:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(b=(f=a==null?void 0:a.data)==null?void 0:f.data[0])==null?void 0:b.consumerName})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Mobile no:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(y=(v=a==null?void 0:a.data)==null?void 0:v.data[0])==null?void 0:y.mobileNo})}),((u=(N=a==null?void 0:a.data)==null?void 0:N.data[0])==null?void 0:u.monthlyDemand)>"0"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Monthly Demand/Rate:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(S=(F=a==null?void 0:a.data)==null?void 0:F.data[0])==null?void 0:S.monthlyDemand})})]}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Outstanding Demand:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(R=(M=a==null?void 0:a.data)==null?void 0:M.data[0])==null?void 0:R.totalDemand})}),((C=(U=a==null?void 0:a.data)==null?void 0:U.data[0])==null?void 0:C.totalDemand)>"0"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Demand from:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(T=(w=a==null?void 0:a.data)==null?void 0:w.data[0])==null?void 0:T.demandFrom})})]}),((P=(q=a==null?void 0:a.data)==null?void 0:q.data[0])==null?void 0:P.totalDemand)>"0"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Demand upto:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(A=(k=a==null?void 0:a.data)==null?void 0:k.data[0])==null?void 0:A.demandUpto})})]}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Total flats:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(L=(I=a==null?void 0:a.data)==null?void 0:I.data)==null?void 0:L.length})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Address:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:($=(B=a==null?void 0:a.data)==null?void 0:B.data[0])==null?void 0:$.Address})})]})})}),e.jsx(Y,{}),e.jsx(h,{children:e.jsx(c,{children:e.jsx(re,{methods:n,onSubmit:n.handleSubmit(D),children:e.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[e.jsx("div",{children:e.jsx(je,{isRequired:!0,name:"paymentUpToMonth",label:"Payment upto month",data:(O=(H=(_=(z=m==null?void 0:m.data)==null?void 0:z.data)==null?void 0:_.demand)==null?void 0:H.map(t=>({label:t.payment_to,value:t.payment_to})))!=null?O:[]})}),e.jsx("div",{children:e.jsx(xe,{name:"remarks",label:"Remarks",isRequired:!0})}),e.jsx("div",{children:e.jsx(pe,{isRequired:!0,name:"billFile",label:"Bill File",type:"file",accept:".pdf"})}),e.jsx("div",{className:"flex justify-end mt-2",children:e.jsxs(de,{type:"submit",size:"sm",children:[s.isLoading?"Loading...":"SUBMIT"," ",((G=(E=s==null?void 0:s.data)==null?void 0:E.data)==null?void 0:G.totaldemand)&&((K=(J=s==null?void 0:s.data)==null?void 0:J.data)==null?void 0:K.totaldemand)]})})]})})})})]})]})}export{Ae as default};
