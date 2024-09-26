import{u as T,h as _,j as s,I as z,B as H,e as M,C as U,_ as t}from"./index-BLF-aM29.js";import{u as V,F as G,c as J,a as K,o as Q}from"./switch-CbKpx9LQ.js";import{g as W}from"./services-KQnp_8oA.js";import{R as X}from"./RHFTextArea-DGHLXIKL.js";import{u as Y,i as Z}from"./router-DWxcwEcu.js";import{P as D}from"./index-CArvYltL.js";import{C as r,b as i}from"./card-Cfkmh3Tw.js";import{S as q}from"./separator-BSNFH_6v.js";import{S as n}from"./SkeletonLoader-C-GreAn0.js";import{O as ss}from"./OverLayLoader-B9t7dFkG.js";import"./headlessui-DlCzxctq.js";import"./axios-BrYcoDUu.js";import"./module-CAf7QMvp.js";const as=J().shape({remarks:K().required("Remark is required")});function gs(){var m,c,o,h,j,g,p,v,N,f,u,b,y,C,k,F,S,A,R,P,w,L,$,I;const x=T({}),B=Y(),{id:d}=Z(),a=_({api:"".concat(M.getConsumerDetailsById,"/").concat(d),options:{enabled:!!d}}),l=V({resolver:Q(as),defaultValues:{remarks:""}}),O=async E=>{U("Are you sure?","Please confirm",async()=>{try{const e=await x.mutateAsync({api:M.postDeactivateConsumer,data:{consumerId:d,remarks:E.remarks}});e.data.status?(t.success(e.data.msg),B("/deoghar-app/consumer-actions/".concat(d))):t.error(e.data.msg)}catch(e){t.error(W(e))}})};return a!=null&&a.isLoading?s.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:s.jsx(r,{children:s.jsxs(i,{children:[s.jsx(n,{}),s.jsx(n,{}),s.jsx(n,{})]})})}):s.jsxs(D,{title:"Deactivate Consumer",children:[x.isLoading&&s.jsx(ss,{}),s.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[s.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[s.jsx(z,{src:"/assets/image/category.png",alt:"Deactivate Consumer",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),s.jsxs("div",{className:"",children:[s.jsx("h1",{className:"font-semibold",children:"Deactivate Consumer"}),s.jsx("p",{className:"text-xs text-gray-500",children:"Solid waste management system"})]})]}),s.jsx(q,{}),s.jsx(r,{children:s.jsx(i,{children:s.jsxs("div",{className:"grid grid-cols-2 gap-3 py-6",children:[s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Consumer No:"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:(c=(m=a==null?void 0:a.data)==null?void 0:m.data[0])==null?void 0:c.consumerNo})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Consumer Name:"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:(h=(o=a==null?void 0:a.data)==null?void 0:o.data[0])==null?void 0:h.consumerName})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Mobile no:"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:(g=(j=a==null?void 0:a.data)==null?void 0:j.data[0])==null?void 0:g.mobileNo})}),((v=(p=a==null?void 0:a.data)==null?void 0:p.data[0])==null?void 0:v.monthlyDemand)>"0"&&s.jsxs(s.Fragment,{children:[s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Monthly Demand/Rate:"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:(f=(N=a==null?void 0:a.data)==null?void 0:N.data[0])==null?void 0:f.monthlyDemand})})]}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Outstanding Demand:"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:(b=(u=a==null?void 0:a.data)==null?void 0:u.data[0])==null?void 0:b.totalDemand})}),((C=(y=a==null?void 0:a.data)==null?void 0:y.data[0])==null?void 0:C.totalDemand)>"0"&&s.jsxs(s.Fragment,{children:[s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Demand from:"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:(F=(k=a==null?void 0:a.data)==null?void 0:k.data[0])==null?void 0:F.demandFrom})})]}),((A=(S=a==null?void 0:a.data)==null?void 0:S.data[0])==null?void 0:A.totalDemand)>"0"&&s.jsxs(s.Fragment,{children:[s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Demand upto:"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:(P=(R=a==null?void 0:a.data)==null?void 0:R.data[0])==null?void 0:P.demandUpto})})]}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Total flats:"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:(L=(w=a==null?void 0:a.data)==null?void 0:w.data)==null?void 0:L.length})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Address:"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:(I=($=a==null?void 0:a.data)==null?void 0:$.data[0])==null?void 0:I.Address})})]})})}),s.jsx(q,{}),s.jsx(r,{children:s.jsx(i,{children:s.jsx(G,{methods:l,onSubmit:l.handleSubmit(O),children:s.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[s.jsx("div",{children:s.jsx(X,{name:"remarks",label:"Remarks",isRequired:!0})}),s.jsx("div",{className:"flex justify-end",children:s.jsx(H,{type:"submit",size:"sm",variant:"destructive",children:"Deactivate"})})]})})})})]})]})}export{gs as default};
