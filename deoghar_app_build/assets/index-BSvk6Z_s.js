import{h as V,j as e,B as E,e as R,C as $,_ as C,u as U,I as X}from"./index-UFBjW-l8.js";import{r as S,R as M,d as Y}from"./router-CTqkcgir.js";import{P as Z}from"./index-DjcmfKoK.js";import{C as L}from"./card-B9Snk98R.js";import{S as B}from"./separator-C9vPwRpg.js";import{u as W,o as _,F as G,S as F,c as H,a as l}from"./SelectField-DpbV965T.js";import{u as J,a as I,b as ee}from"./useComonData-DLuTHNoq.js";import{R as h}from"./RHFTextField-pKW9K7Za.js";import{B as K}from"./ButtonLoading-BGd8hqD9.js";import{R as Q}from"./RotatingLoader-s_AzSfrC.js";import{u as ae}from"./useMonthMap-C8hLMgQU.js";import{O as se}from"./OverLayLoader-0pVCHtUR.js";import"./headlessui-BV7w-sRG.js";import"./axios-DmypytPv.js";import"./module-BQPiM98L.js";import"./moment-BjLXg0w5.js";const re=H().shape({aptName:l().required("Apartment Name is required"),wardNo:l().required("Ward No is required"),aptCode:l().required("Apartment Type is required"),aptAddress:l().required("Apartment Category is required"),pinCode:l().required("Apartment Status is required")});function te({id:c,open:m,setOpen:g,title:i,isEdit:A,mutate:d,refetch:u}){var j,f,b,N,v,y;const{getAllUser:x}=J(),w=()=>g(!m),a=V({api:`${(j=R)==null?void 0:j.getApartmentById}?id=${c}`,options:{enabled:!!c}}),r=S.useMemo(()=>{var s,n,t,k,o,P,T,z,D,O;return{aptName:((n=(s=a==null?void 0:a.data)==null?void 0:s.data)==null?void 0:n.aptName)??"",wardNo:((k=(t=a==null?void 0:a.data)==null?void 0:t.data)==null?void 0:k.wardNo)??"",aptCode:((P=(o=a==null?void 0:a.data)==null?void 0:o.data)==null?void 0:P.aptCode)??"",aptAddress:((z=(T=a==null?void 0:a.data)==null?void 0:T.data)==null?void 0:z.aptAddress)??"",pinCode:((O=(D=a==null?void 0:a.data)==null?void 0:D.data)==null?void 0:O.pinCode)??""}},[(f=a==null?void 0:a.data)==null?void 0:f.data]),p=W({resolver:_(re),defaultValues:r});S.useEffect(()=>{var s;(s=a==null?void 0:a.data)!=null&&s.data&&p.reset(r)},[(b=a==null?void 0:a.data)==null?void 0:b.data]);const q=async s=>{g(!1),$("Are you sure?","Please confirm",async()=>{try{if(A){const n=await d.mutateAsync({api:R.updateApartment,data:{wardNo:s.wardNo,apartmentCode:s.aptCode,apartmentName:s.aptName,address:s.aptAddress,apartmentId:c,pinCode:s.pinCode}});n.data.status?(C.success(n.data.msg),u()):C.error(n.data.msg)}else{const n=await d.mutateAsync({api:R.addApartment,data:s});n.data.status?(C.success(n.data.msg),u()):C.error(n.data.msg)}}catch{C.error("Something went wrong")}})};return e.jsxs(M.Fragment,{children:[m&&e.jsx("div",{className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),e.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:`${m?"flex":"hidden"} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`,children:e.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full",children:e.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-900 dark:text-white",children:i??"Add Floor"}),e.jsxs("button",{style:{background:"none"},onClick:w,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[e.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),e.jsx("div",{className:"p-4 md:p-5",children:a.isLoading?e.jsx("div",{className:"flex justify-center items-center h-[450px]",children:e.jsx(Q,{})}):e.jsxs(G,{methods:p,onSubmit:p.handleSubmit(q),children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[e.jsx("div",{children:e.jsx(h,{name:"aptName",isRequired:!0,label:"Apartment Name",placeholder:"Enter Apartment Name",inputValidation:["removeDoubleSpace"]})}),e.jsx("div",{children:e.jsx(F,{name:"wardNo",isRequired:!0,label:"Ward No",data:((y=(v=(N=x==null?void 0:x.data)==null?void 0:N.data[0].ulbDetails[0])==null?void 0:v.wards)==null?void 0:y.map(s=>({label:String(s),value:String(s)})))??[]})}),e.jsx("div",{children:e.jsx(h,{name:"aptCode",isRequired:!0,label:"Apartment Code",placeholder:"Enter Apartment Code"})}),e.jsx("div",{children:e.jsx(h,{name:"aptAddress",isRequired:!0,label:"Apartment Address",placeholder:"Enter Apartment Address"})}),e.jsx("div",{children:e.jsx(h,{type:"number",isRequired:!0,name:"pinCode",label:"Pin Code",placeholder:"Enter Pin Code",inputValidation:["zip"]})})]}),e.jsxs("div",{className:"flex justify-end space-x-4 mt-6 mb-2",children:[e.jsx(E,{size:"sm",type:"button",onClick:w,className:"bg-gray-200 text-gray-900 w-20",children:"Cancel"}),e.jsx(K,{isLoading:d==null?void 0:d.isPending,disabled:d==null?void 0:d.isPending,size:"sm",type:"submit",className:"w-20",children:A?"Update":"Save"})]})]})})]})})})]})}const de=H().shape({aptName:l().required("Apartment Name is required"),wardNo:l().required("Ward No is required"),aptCode:l().required("Apartment Type is required"),aptAddress:l().required("Apartment Category is required"),pinCode:l().required("Apartment Status is required"),noOfFlat:l().required("No of Flat is required"),consumerCategory:l().required("Consumer Category is required"),consumerType:l().required("Consumer Type is required"),demandFrom:l().required("Demand From is required")});function ie({open:c,setOpen:m,title:g,mutate:i,refetch:A}){var q,j,f,b,N,v,y,s,n;const{getAllUser:d}=J(),{getConsumerAddFormData:u}=I(),{resultList:x}=ae("4-1-2022"),w=()=>m(!c),a=W({resolver:_(de),defaultValues:{aptName:"",wardNo:"",aptCode:"",aptAddress:"",pinCode:"",noOfFlat:"",consumerCategory:"",consumerType:"",demandFrom:""}}),r=async t=>{m(!1),$("Are you sure?","Please confirm",async()=>{var k;try{const o=await(i==null?void 0:i.mutateAsync({api:(k=R)==null?void 0:k.createDefaultConsumerApartment,data:t}));o!=null&&o.data.status?(C.success(o==null?void 0:o.data.msg),A()):C.error(o==null?void 0:o.data.msg)}catch{C.error("Something went wrong")}})},{consumerCategoryData:p}=ee(a.watch("consumerCategory"));return e.jsxs(M.Fragment,{children:[c&&e.jsx("div",{className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),e.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:`${c?"flex":"hidden"} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`,children:e.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full",children:e.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-900 dark:text-white",children:g??"Add Floor"}),e.jsxs("button",{style:{background:"none"},onClick:w,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[e.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),e.jsx("div",{className:"p-4 md:p-5",children:e.jsxs(G,{methods:a,onSubmit:a.handleSubmit(r),children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx("div",{children:e.jsx(h,{isRequired:!0,name:"aptName",label:"Apartment Name",placeholder:"Enter Apartment Name",inputValidation:["removeDoubleSpace"]})}),e.jsx("div",{children:e.jsx(h,{isRequired:!0,name:"aptCode",label:"Apartment Code",placeholder:"Enter Apartment Code"})}),e.jsx("div",{className:"col-span-2",children:e.jsx(F,{isRequired:!0,name:"wardNo",label:"Ward No",selectedText:"Select Ward No",data:((f=(j=(q=d==null?void 0:d.data)==null?void 0:q.data[0].ulbDetails[0])==null?void 0:j.wards)==null?void 0:f.map(t=>({label:String(t),value:String(t)})))??[]})}),e.jsx("div",{className:"col-span-2",children:e.jsx(h,{isRequired:!0,name:"aptAddress",label:"Apartment Address",placeholder:"Enter Apartment Address"})}),e.jsx("div",{children:e.jsx(h,{type:"number",isRequired:!0,name:"pinCode",label:"Pin Code",placeholder:"Enter Pin Code",inputValidation:["zip"]})}),e.jsx("div",{children:e.jsx(h,{type:"number",isRequired:!0,name:"noOfFlat",label:"No of Flat",placeholder:"Enter No of Flat"})}),e.jsx("div",{children:e.jsx(F,{name:"consumerCategory",isRequired:!0,label:"Consumer Category",selectedText:"Select Consumer Category",data:((v=(N=(b=u==null?void 0:u.data)==null?void 0:b.data)==null?void 0:N.consumerCategory)==null?void 0:v.map(t=>({label:String(t.name),value:String(t.id)})))??[]})}),e.jsx("div",{children:e.jsx(F,{name:"consumerType",isRequired:!0,label:"Consumer Type",selectedText:"Select Consumer Type",data:((n=(s=(y=p==null?void 0:p.data)==null?void 0:y.data)==null?void 0:s.consumerTypeList)==null?void 0:n.map(t=>({label:String(t.name),value:String(t.id)})))??[]})}),e.jsx("div",{className:"col-span-2",children:e.jsx(F,{name:"demandFrom",label:"Demand From",isRequired:!0,selectedText:"Select demand From",data:(x==null?void 0:x.map(t=>({label:String(t.str),value:String(t.str)})))??[]})})]}),e.jsxs("div",{className:"flex justify-end space-x-4 mt-6 mb-2",children:[e.jsx(E,{size:"sm",type:"button",onClick:w,className:"bg-gray-200 text-gray-900 w-20",children:"Cancel"}),e.jsx(K,{isLoading:i==null?void 0:i.isPending,disabled:i==null?void 0:i.isPending,size:"sm",type:"submit",className:"w-20",children:"SAVE"})]})]})})]})})})]})}function Ce(){var q,j,f,b,N,v,y;const c=U({}),[m,g]=S.useState(!1),[i,A]=S.useState(!1),[d,u]=S.useState(!1),x=Y(),[w,a]=S.useState(""),r=V({api:(q=R)==null?void 0:q.getApartList,options:{enabled:!0}}),p=s=>{a(s),A(!0),g(!0)};return r!=null&&r.isLoading?e.jsx("div",{className:"flex justify-center items-center h-screen",children:e.jsx(Q,{})}):e.jsxs(Z,{title:"Apartment List",children:[m&&e.jsx(te,{id:w,isEdit:i,open:m,setOpen:g,title:i?"Edit Apartment":"Add Apartment",mutate:c,refetch:r.refetch}),d&&e.jsx(ie,{open:d,setOpen:u,title:"Add Apartment with default",mutate:c,refetch:r.refetch}),c.isPending&&e.jsx(se,{}),e.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[e.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[e.jsx(X,{src:"/assets/image/category.png",alt:"Add Consumer",className:"w-12 h-12 rounded-lg bg-gray-200 p-2"}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"text-lg font-semibold",children:"Apartment List"}),e.jsx("p",{className:"text-sm text-gray-500",children:"Add apartment details here."})]})]}),e.jsxs("div",{className:"flex space-x-3 items-center justify-end",children:[e.jsx(E,{size:"sm",onClick:()=>{a(""),A(!1),g(!0)},children:"Add Apartment."}),e.jsx(E,{size:"sm",onClick:()=>u(!0),children:"Add with default"})]}),e.jsx(B,{}),((b=(f=(j=r==null?void 0:r.data)==null?void 0:j.data)==null?void 0:f.apartmentList)==null?void 0:b.length)>0?e.jsx(e.Fragment,{children:(y=(v=(N=r==null?void 0:r.data)==null?void 0:N.data)==null?void 0:v.apartmentList)==null?void 0:y.map(s=>e.jsx(L,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-2 px-4 py-6",children:[e.jsx("div",{className:"text-sm font-semibold",children:"Apartment Name:"}),e.jsx("div",{className:"text-sm font-semibold",children:s.apt_name}),e.jsx("div",{className:"text-sm font-semibold",children:"Ward No:"}),e.jsx("div",{className:"text-sm font-semibold",children:s.ward_no}),e.jsx("div",{className:"text-sm font-semibold",children:"Apartment Code:"}),e.jsx("div",{className:"text-sm font-semibold",children:s.apt_code}),e.jsx("div",{className:"text-sm font-semibold",children:"Apartment Address:"}),e.jsx("div",{className:"text-sm font-semibold",children:s.apt_address}),e.jsxs("div",{className:"flex space-x-4 items-center justify-end  col-span-2",children:[e.jsx("button",{style:{background:"none"},className:"text-sm font-semibold text-primary bg-none",onClick:()=>p(s.id),children:"Edit"}),e.jsx("button",{style:{background:"none"},onClick:()=>x(`/deoghar-app/apartment-actions/${s.id}`),className:"text-sm font-semibold text-blue-500",children:"View"})]})]})},s.id))}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex justify-center items-center h-[450px]",children:e.jsx("h1",{className:"text-lg font-semibold text-gray-500",children:"No Data Found"})})})]})]})}export{Ce as default};
