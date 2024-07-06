import{j as e,B as E,d as R,C as V,_ as v}from"./index-D4tcPZKh.js";import{r as w,R as $,d as L}from"./router-CTqkcgir.js";import{P as Q}from"./index-ByoGyj-F.js";import{I as U}from"./Image-DybC7N7P.js";import{C as X}from"./card-azg1s1Sk.js";import{S as Y}from"./separator-CVn_ld_L.js";import{b as M,u as Z}from"./useCustomQuery-CtoH5cJV.js";import{u as W,o as _,F as G,S as F,c as H,a as o}from"./SelectField-nPvC-_S9.js";import{u as J,a as B,b as I}from"./useComonData-BK2KdJXR.js";import{R as g}from"./RHFTextField-C1C-4v5v.js";import{B as K}from"./ButtonLoading-D3Fgl0pj.js";import{R as ee}from"./RotatingLoader-00YBr1I9.js";import{u as ae}from"./useMonthMap-C8hLMgQU.js";import{O as se}from"./OverLayLoader-CSYuZ4jr.js";import"./headlessui-BV7w-sRG.js";import"./axios-DmypytPv.js";import"./module-B9AE2nUJ.js";import"./moment-BjLXg0w5.js";const re=H().shape({aptName:o().required("Apartment Name is required"),wardNo:o().required("Ward No is required"),aptCode:o().required("Apartment Type is required"),aptAddress:o().required("Apartment Category is required"),pinCode:o().required("Apartment Status is required")});function te({id:c,open:u,setOpen:f,title:i,isEdit:y,mutate:t,refetch:p}){var j,b,N,d,q,S;const{getAllUser:x}=J(),C=()=>f(!u),a=M({api:`${(j=R)==null?void 0:j.getApartmentById}?id=${c}`,options:{enabled:!!c}}),m=w.useMemo(()=>{var s,n,r,k,l,P,T,z,D,O;return{aptName:((n=(s=a==null?void 0:a.data)==null?void 0:s.data)==null?void 0:n.aptName)??"",wardNo:((k=(r=a==null?void 0:a.data)==null?void 0:r.data)==null?void 0:k.wardNo)??"",aptCode:((P=(l=a==null?void 0:a.data)==null?void 0:l.data)==null?void 0:P.aptCode)??"",aptAddress:((z=(T=a==null?void 0:a.data)==null?void 0:T.data)==null?void 0:z.aptAddress)??"",pinCode:((O=(D=a==null?void 0:a.data)==null?void 0:D.data)==null?void 0:O.pinCode)??""}},[(b=a==null?void 0:a.data)==null?void 0:b.data]),h=W({resolver:_(re),defaultValues:m});w.useEffect(()=>{var s;(s=a==null?void 0:a.data)!=null&&s.data&&h.reset(m)},[(N=a==null?void 0:a.data)==null?void 0:N.data]);const A=async s=>{f(!1),V("Are you sure?","Please confirm",async()=>{try{if(y){const n=await t.mutateAsync({api:R.updateApartment,data:{wardNo:s.wardNo,apartmentCode:s.aptCode,apartmentName:s.aptName,address:s.aptAddress,apartmentId:c,pinCode:s.pinCode}});n.data.status?(v.success(n.data.msg),p()):v.error(n.data.msg)}else{const n=await t.mutateAsync({api:R.addApartment,data:s});n.data.status?(v.success(n.data.msg),p()):v.error(n.data.msg)}}catch{v.error("Something went wrong")}})};return e.jsxs($.Fragment,{children:[u&&e.jsx("div",{className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),e.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:`${u?"flex":"hidden"} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`,children:e.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full",children:e.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-900 dark:text-white",children:i??"Add Floor"}),e.jsxs("button",{style:{background:"none"},onClick:C,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[e.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),e.jsx("div",{className:"p-4 md:p-5",children:a.isLoading?e.jsx("div",{className:"flex justify-center items-center h-[450px]",children:e.jsx(ee,{})}):e.jsxs(G,{methods:h,onSubmit:h.handleSubmit(A),children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[e.jsx("div",{children:e.jsx(g,{name:"aptName",isRequired:!0,label:"Apartment Name",placeholder:"Enter Apartment Name",inputValidation:["removeDoubleSpace"]})}),e.jsx("div",{children:e.jsx(F,{name:"wardNo",isRequired:!0,label:"Ward No",data:((S=(q=(d=x==null?void 0:x.data)==null?void 0:d.data[0].ulbDetails[0])==null?void 0:q.wards)==null?void 0:S.map(s=>({label:String(s),value:String(s)})))??[]})}),e.jsx("div",{children:e.jsx(g,{name:"aptCode",isRequired:!0,label:"Apartment Code",placeholder:"Enter Apartment Code"})}),e.jsx("div",{children:e.jsx(g,{name:"aptAddress",isRequired:!0,label:"Apartment Address",placeholder:"Enter Apartment Address"})}),e.jsx("div",{children:e.jsx(g,{type:"number",isRequired:!0,name:"pinCode",label:"Pin Code",placeholder:"Enter Pin Code",inputValidation:["zip"]})})]}),e.jsxs("div",{className:"flex justify-end space-x-4 mt-6 mb-2",children:[e.jsx(E,{size:"sm",type:"button",onClick:C,className:"bg-gray-200 text-gray-900 w-20",children:"Cancel"}),e.jsx(K,{isLoading:t==null?void 0:t.isPending,disabled:t==null?void 0:t.isPending,size:"sm",type:"submit",className:"w-20",children:y?"Update":"Save"})]})]})})]})})})]})}const de=H().shape({aptName:o().required("Apartment Name is required"),wardNo:o().required("Ward No is required"),aptCode:o().required("Apartment Type is required"),aptAddress:o().required("Apartment Category is required"),pinCode:o().required("Apartment Status is required"),noOfFlat:o().required("No of Flat is required"),consumerCategory:o().required("Consumer Category is required"),consumerType:o().required("Consumer Type is required"),demandFrom:o().required("Demand From is required")});function ie({open:c,setOpen:u,title:f,mutate:i,refetch:y}){var A,j,b,N,d,q,S,s,n;const{getAllUser:t}=J(),{getConsumerAddFormData:p}=B(),{resultList:x}=ae("4-1-2022"),C=()=>u(!c),a=W({resolver:_(de),defaultValues:{aptName:"",wardNo:"",aptCode:"",aptAddress:"",pinCode:"",noOfFlat:"",consumerCategory:"",consumerType:"",demandFrom:""}}),m=async r=>{u(!1),V("Are you sure?","Please confirm",async()=>{var k;try{const l=await(i==null?void 0:i.mutateAsync({api:(k=R)==null?void 0:k.createDefaultConsumerApartment,data:r}));l!=null&&l.data.status?(v.success(l==null?void 0:l.data.msg),y()):v.error(l==null?void 0:l.data.msg)}catch{v.error("Something went wrong")}})},{consumerCategoryData:h}=I(a.watch("consumerCategory"));return e.jsxs($.Fragment,{children:[c&&e.jsx("div",{className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),e.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:`${c?"flex":"hidden"} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`,children:e.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full",children:e.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-900 dark:text-white",children:f??"Add Floor"}),e.jsxs("button",{style:{background:"none"},onClick:C,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[e.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),e.jsx("div",{className:"p-4 md:p-5",children:e.jsxs(G,{methods:a,onSubmit:a.handleSubmit(m),children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx("div",{children:e.jsx(g,{isRequired:!0,name:"aptName",label:"Apartment Name",placeholder:"Enter Apartment Name",inputValidation:["removeDoubleSpace"]})}),e.jsx("div",{children:e.jsx(g,{isRequired:!0,name:"aptCode",label:"Apartment Code",placeholder:"Enter Apartment Code"})}),e.jsx("div",{className:"col-span-2",children:e.jsx(F,{isRequired:!0,name:"wardNo",label:"Ward No",selectedText:"Select Ward No",data:((b=(j=(A=t==null?void 0:t.data)==null?void 0:A.data[0].ulbDetails[0])==null?void 0:j.wards)==null?void 0:b.map(r=>({label:String(r),value:String(r)})))??[]})}),e.jsx("div",{className:"col-span-2",children:e.jsx(g,{isRequired:!0,name:"aptAddress",label:"Apartment Address",placeholder:"Enter Apartment Address"})}),e.jsx("div",{children:e.jsx(g,{type:"number",isRequired:!0,name:"pinCode",label:"Pin Code",placeholder:"Enter Pin Code",inputValidation:["zip"]})}),e.jsx("div",{children:e.jsx(g,{type:"number",isRequired:!0,name:"noOfFlat",label:"No of Flat",placeholder:"Enter No of Flat"})}),e.jsx("div",{children:e.jsx(F,{name:"consumerCategory",isRequired:!0,label:"Consumer Category",selectedText:"Select Consumer Category",data:((q=(d=(N=p==null?void 0:p.data)==null?void 0:N.data)==null?void 0:d.consumerCategory)==null?void 0:q.map(r=>({label:String(r.name),value:String(r.id)})))??[]})}),e.jsx("div",{children:e.jsx(F,{name:"consumerType",isRequired:!0,label:"Consumer Type",selectedText:"Select Consumer Type",data:((n=(s=(S=h==null?void 0:h.data)==null?void 0:S.data)==null?void 0:s.consumerTypeList)==null?void 0:n.map(r=>({label:String(r.name),value:String(r.id)})))??[]})}),e.jsx("div",{className:"col-span-2",children:e.jsx(F,{name:"demandFrom",label:"Demand From",isRequired:!0,selectedText:"Select demand From",data:(x==null?void 0:x.map(r=>({label:String(r.str),value:String(r.str)})))??[]})})]}),e.jsxs("div",{className:"flex justify-end space-x-4 mt-6 mb-2",children:[e.jsx(E,{size:"sm",type:"button",onClick:C,className:"bg-gray-200 text-gray-900 w-20",children:"Cancel"}),e.jsx(K,{isLoading:i==null?void 0:i.isPending,disabled:i==null?void 0:i.isPending,size:"sm",type:"submit",className:"w-20",children:"SAVE"})]})]})})]})})})]})}function we(){var A,j,b,N;const c=Z({}),[u,f]=w.useState(!1),[i,y]=w.useState(!1),[t,p]=w.useState(!1),x=L(),[C,a]=w.useState(""),m=M({api:(A=R)==null?void 0:A.getApartList,options:{enabled:!0}}),h=d=>{a(d),y(!0),f(!0)};return e.jsxs(Q,{title:"Apartment List",children:[u&&e.jsx(te,{id:C,isEdit:i,open:u,setOpen:f,title:i?"Edit Apartment":"Add Apartment",mutate:c,refetch:m.refetch}),t&&e.jsx(ie,{open:t,setOpen:p,title:"Add Apartment with default",mutate:c,refetch:m.refetch}),c.isPending&&e.jsx(se,{}),e.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[e.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[e.jsx(U,{src:"/assets/image/category.png",alt:"Add Consumer",className:"w-12 h-12 rounded-lg bg-gray-200 p-2"}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"text-lg font-semibold",children:"Apartment List"}),e.jsx("p",{className:"text-sm text-gray-500",children:"Add apartment details here."})]})]}),e.jsxs("div",{className:"flex space-x-3 items-center justify-end",children:[e.jsx(E,{size:"sm",onClick:()=>{a(""),y(!1),f(!0)},children:"Add Apartment."}),e.jsx(E,{size:"sm",onClick:()=>p(!0),children:"Add with default"})]}),e.jsx(Y,{}),(N=(b=(j=m==null?void 0:m.data)==null?void 0:j.data)==null?void 0:b.apartmentList)==null?void 0:N.map(d=>e.jsx(X,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-2 px-4 py-6",children:[e.jsx("div",{className:"text-sm font-semibold",children:"Apartment Name:"}),e.jsx("div",{className:"text-sm font-semibold",children:d.apt_name}),e.jsx("div",{className:"text-sm font-semibold",children:"Ward No:"}),e.jsx("div",{className:"text-sm font-semibold",children:d.ward_no}),e.jsx("div",{className:"text-sm font-semibold",children:"Apartment Code:"}),e.jsx("div",{className:"text-sm font-semibold",children:d.apt_code}),e.jsx("div",{className:"text-sm font-semibold",children:"Apartment Address:"}),e.jsx("div",{className:"text-sm font-semibold",children:d.apt_address}),e.jsxs("div",{className:"flex space-x-4 items-center justify-end  col-span-2",children:[e.jsx("button",{style:{background:"none"},className:"text-sm font-semibold text-primary bg-none",onClick:()=>h(d.id),children:"Edit"}),e.jsx("button",{style:{background:"none"},onClick:()=>x(`/deoghar-app/apartment-actions/${d.id}`),className:"text-sm font-semibold text-blue-500",children:"View"})]})]})},d.id))]})]})}export{we as default};
