import{j as e,B as E,d as R,C as O,_ as y}from"./index-j9I82nQr.js";import{r as k,R as $,d as K}from"./router-CTqkcgir.js";import{P as Q}from"./index-CforZJnI.js";import{I as U}from"./Image-C6UstR7o.js";import{C as X}from"./card-DHBbtegN.js";import{S as Y}from"./separator-CzaTWi1P.js";import{b as W,u as Z}from"./useCustomQuery-n4GyWQha.js";import{u as M,o as _,F as G,S as F,c as L,a as o}from"./SelectField-D_iHSFip.js";import{u as H,a as B,b as I}from"./useComonData-h_M00ST6.js";import{R as h}from"./RHFTextField-kqcFzDVf.js";import{B as J}from"./ButtonLoading-xzbaRAEx.js";import{R as ee}from"./RotatingLoader-Cqi2AHJv.js";import{u as ae}from"./useMonthMap-C8hLMgQU.js";import{O as se}from"./OverLayLoader-Dyo6puCE.js";import"./headlessui-BV7w-sRG.js";import"./axios-DmypytPv.js";import"./module-CTPC1BkT.js";import"./moment-BjLXg0w5.js";const re=L().shape({aptName:o().required("Apartment Name is required"),wardNo:o().required("Ward No is required"),aptCode:o().required("Apartment Type is required"),aptAddress:o().required("Apartment Category is required"),pinCode:o().required("Apartment Status is required")});function te({id:m,open:u,setOpen:g,title:n,isEdit:f,mutate:r,refetch:p}){var j,b,N,v,d,w;const{getAllUser:x}=H(),C=()=>g(!u),a=W({api:`${(j=R)==null?void 0:j.getApartmentById}?id=${m}`,options:{enabled:!!m}}),t=M({resolver:_(re),defaultValues:{aptName:((N=(b=a==null?void 0:a.data)==null?void 0:b.data)==null?void 0:N.aptName)??"",wardNo:"",aptCode:"",aptAddress:"",pinCode:""}});k.useEffect(()=>{var i,l,q,s,S,c,P,T,V,z,D;(i=a==null?void 0:a.data)!=null&&i.data&&f&&(t.setValue("aptName",((q=(l=a==null?void 0:a.data)==null?void 0:l.data)==null?void 0:q.aptName)??""),t.setValue("wardNo",((S=(s=a==null?void 0:a.data)==null?void 0:s.data)==null?void 0:S.wardNo)??""),t.setValue("aptCode",((P=(c=a==null?void 0:a.data)==null?void 0:c.data)==null?void 0:P.aptCode)??""),t.setValue("aptAddress",((V=(T=a==null?void 0:a.data)==null?void 0:T.data)==null?void 0:V.aptAddress)??""),t.setValue("pinCode",((D=(z=a==null?void 0:a.data)==null?void 0:z.data)==null?void 0:D.pinCode)??""))},[a]);const A=async i=>{g(!1),O("Are you sure?","Please confirm",async()=>{try{if(f){const l=await r.mutateAsync({api:R.updateApartment,data:{wardNo:i.wardNo,apartmentCode:i.aptCode,apartmentName:i.aptName,address:i.aptAddress,apartmentId:m,pinCode:i.pinCode}});l.data.status?(y.success(l.data.msg),p()):y.error(l.data.msg)}else{const l=await r.mutateAsync({api:R.addApartment,data:i});l.data.status?(y.success(l.data.msg),p()):y.error(l.data.msg)}}catch{y.error("Something went wrong")}})};return e.jsxs($.Fragment,{children:[u&&e.jsx("div",{className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),e.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:`${u?"flex":"hidden"} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`,children:e.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full",children:e.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-900 dark:text-white",children:n??"Add Floor"}),e.jsxs("button",{style:{background:"none"},onClick:C,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[e.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),e.jsx("div",{className:"p-4 md:p-5",children:a.isLoading?e.jsx("div",{className:"flex justify-center items-center h-[450px]",children:e.jsx(ee,{})}):e.jsxs(G,{methods:t,onSubmit:t.handleSubmit(A),children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[e.jsx("div",{children:e.jsx(h,{name:"aptName",isRequired:!0,label:"Apartment Name",placeholder:"Enter Apartment Name",inputValidation:["removeDoubleSpace"]})}),e.jsx("div",{children:e.jsx(F,{name:"wardNo",isRequired:!0,label:"Ward No",data:((w=(d=(v=x==null?void 0:x.data)==null?void 0:v.data[0].ulbDetails[0])==null?void 0:d.wards)==null?void 0:w.map(i=>({label:String(i),value:String(i)})))??[]})}),e.jsx("div",{children:e.jsx(h,{name:"aptCode",isRequired:!0,label:"Apartment Code",placeholder:"Enter Apartment Code"})}),e.jsx("div",{children:e.jsx(h,{name:"aptAddress",isRequired:!0,label:"Apartment Address",placeholder:"Enter Apartment Address"})}),e.jsx("div",{children:e.jsx(h,{type:"number",isRequired:!0,name:"pinCode",label:"Pin Code",placeholder:"Enter Pin Code",inputValidation:["zip"]})})]}),e.jsxs("div",{className:"flex justify-end space-x-4 mt-6 mb-2",children:[e.jsx(E,{size:"sm",type:"button",onClick:C,className:"bg-gray-200 text-gray-900 w-20",children:"Cancel"}),e.jsx(J,{isLoading:r==null?void 0:r.isPending,disabled:r==null?void 0:r.isPending,size:"sm",type:"submit",className:"w-20",children:f?"Update":"Save"})]})]})})]})})})]})}const de=L().shape({aptName:o().required("Apartment Name is required"),wardNo:o().required("Ward No is required"),aptCode:o().required("Apartment Type is required"),aptAddress:o().required("Apartment Category is required"),pinCode:o().required("Apartment Status is required"),noOfFlat:o().required("No of Flat is required"),consumerCategory:o().required("Consumer Category is required"),consumerType:o().required("Consumer Type is required"),demandFrom:o().required("Demand From is required")});function ie({open:m,setOpen:u,title:g,mutate:n,refetch:f}){var j,b,N,v,d,w,i,l,q;const{getAllUser:r}=H(),{getConsumerAddFormData:p}=B(),{resultList:x}=ae("4-1-2022"),C=()=>u(!m),a=M({resolver:_(de),defaultValues:{aptName:"",wardNo:"",aptCode:"",aptAddress:"",pinCode:"",noOfFlat:"",consumerCategory:"",consumerType:"",demandFrom:""}}),t=async s=>{u(!1),O("Are you sure?","Please confirm",async()=>{var S;try{const c=await(n==null?void 0:n.mutateAsync({api:(S=R)==null?void 0:S.createDefaultConsumerApartment,data:s}));c!=null&&c.data.status?(y.success(c==null?void 0:c.data.msg),f()):y.error(c==null?void 0:c.data.msg)}catch{y.error("Something went wrong")}})},{consumerCategoryData:A}=I(a.watch("consumerCategory"));return e.jsxs($.Fragment,{children:[m&&e.jsx("div",{className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),e.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:`${m?"flex":"hidden"} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`,children:e.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full",children:e.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-900 dark:text-white",children:g??"Add Floor"}),e.jsxs("button",{style:{background:"none"},onClick:C,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[e.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),e.jsx("div",{className:"p-4 md:p-5",children:e.jsxs(G,{methods:a,onSubmit:a.handleSubmit(t),children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx("div",{children:e.jsx(h,{isRequired:!0,name:"aptName",label:"Apartment Name",placeholder:"Enter Apartment Name",inputValidation:["removeDoubleSpace"]})}),e.jsx("div",{children:e.jsx(h,{isRequired:!0,name:"aptCode",label:"Apartment Code",placeholder:"Enter Apartment Code"})}),e.jsx("div",{className:"col-span-2",children:e.jsx(F,{isRequired:!0,name:"wardNo",label:"Ward No",selectedText:"Select Ward No",data:((N=(b=(j=r==null?void 0:r.data)==null?void 0:j.data[0].ulbDetails[0])==null?void 0:b.wards)==null?void 0:N.map(s=>({label:String(s),value:String(s)})))??[]})}),e.jsx("div",{className:"col-span-2",children:e.jsx(h,{isRequired:!0,name:"aptAddress",label:"Apartment Address",placeholder:"Enter Apartment Address"})}),e.jsx("div",{children:e.jsx(h,{type:"number",isRequired:!0,name:"pinCode",label:"Pin Code",placeholder:"Enter Pin Code",inputValidation:["zip"]})}),e.jsx("div",{children:e.jsx(h,{type:"number",isRequired:!0,name:"noOfFlat",label:"No of Flat",placeholder:"Enter No of Flat"})}),e.jsx("div",{children:e.jsx(F,{name:"consumerCategory",isRequired:!0,label:"Consumer Category",selectedText:"Select Consumer Category",data:((w=(d=(v=p==null?void 0:p.data)==null?void 0:v.data)==null?void 0:d.consumerCategory)==null?void 0:w.map(s=>({label:String(s.name),value:String(s.id)})))??[]})}),e.jsx("div",{children:e.jsx(F,{name:"consumerType",isRequired:!0,label:"Consumer Type",selectedText:"Select Consumer Type",data:((q=(l=(i=A==null?void 0:A.data)==null?void 0:i.data)==null?void 0:l.consumerTypeList)==null?void 0:q.map(s=>({label:String(s.name),value:String(s.id)})))??[]})}),e.jsx("div",{className:"col-span-2",children:e.jsx(F,{name:"demandFrom",label:"Demand From",isRequired:!0,selectedText:"Select demand From",data:(x==null?void 0:x.map(s=>({label:String(s.str),value:String(s.str)})))??[]})})]}),e.jsxs("div",{className:"flex justify-end space-x-4 mt-6 mb-2",children:[e.jsx(E,{size:"sm",type:"button",onClick:C,className:"bg-gray-200 text-gray-900 w-20",children:"Cancel"}),e.jsx(J,{isLoading:n==null?void 0:n.isPending,disabled:n==null?void 0:n.isPending,size:"sm",type:"submit",className:"w-20",children:"SAVE"})]})]})})]})})})]})}function we(){var j,b,N,v;const m=Z({}),[u,g]=k.useState(!1),[n,f]=k.useState(!1),[r,p]=k.useState(!1),x=K(),[C,a]=k.useState(""),t=W({api:(j=R)==null?void 0:j.getApartList,options:{enabled:!0}}),A=d=>{a(d),f(!0),g(!0)};return e.jsxs(Q,{title:"Apartment List",children:[u&&e.jsx(te,{id:C,isEdit:n,open:u,setOpen:g,title:n?"Edit Apartment":"Add Apartment",mutate:m,refetch:t.refetch}),r&&e.jsx(ie,{open:r,setOpen:p,title:"Add Apartment with default",mutate:m,refetch:t.refetch}),m.isPending&&e.jsx(se,{}),e.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[e.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[e.jsx(U,{src:"/assets/image/category.png",alt:"Add Consumer",className:"w-12 h-12 rounded-lg bg-gray-200 p-2"}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"text-lg font-semibold",children:"Apartment List"}),e.jsx("p",{className:"text-sm text-gray-500",children:"Add apartment details here."})]})]}),e.jsxs("div",{className:"flex space-x-3 items-center justify-end",children:[e.jsx(E,{size:"sm",onClick:()=>{a(""),f(!1),g(!0)},children:"Add Apartment."}),e.jsx(E,{size:"sm",onClick:()=>p(!0),children:"Add with default"})]}),e.jsx(Y,{}),(v=(N=(b=t==null?void 0:t.data)==null?void 0:b.data)==null?void 0:N.apartmentList)==null?void 0:v.map(d=>e.jsx(X,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-2 px-4 py-6",children:[e.jsx("div",{className:"text-sm font-semibold",children:"Apartment Name:"}),e.jsx("div",{className:"text-sm font-semibold",children:d.apt_name}),e.jsx("div",{className:"text-sm font-semibold",children:"Ward No:"}),e.jsx("div",{className:"text-sm font-semibold",children:d.ward_no}),e.jsx("div",{className:"text-sm font-semibold",children:"Apartment Code:"}),e.jsx("div",{className:"text-sm font-semibold",children:d.apt_code}),e.jsx("div",{className:"text-sm font-semibold",children:"Apartment Address:"}),e.jsx("div",{className:"text-sm font-semibold",children:d.apt_address}),e.jsxs("div",{className:"flex space-x-4 items-center justify-end  col-span-2",children:[e.jsx("button",{style:{background:"none"},className:"text-sm font-semibold text-primary bg-none",onClick:()=>A(d.id),children:"Edit"}),e.jsx("button",{style:{background:"none"},onClick:()=>x(`/deoghar-app/apartment-actions/${d.id}`),className:"text-sm font-semibold text-blue-500",children:"View"})]})]})},d.id))]})]})}export{we as default};
