import{h as G,j as e,B as P,e as D,C as H,_ as A,u as I,I as ee}from"./index-CPXdmuH_.js";import{r as k,b as J,e as ae}from"./router-BsPcvcg3.js";import{P as se}from"./index-D_E-W8CG.js";import{C as re}from"./card-QAEPK5e0.js";import{S as te}from"./separator-KMf3fRTH.js";import{u as K,F as Q,c as U,a as l,o as X}from"./switch-De4j3AD7.js";import{u as Y,a as de,b as ie}from"./useComonData-BmaNrPH6.js";import{R as j}from"./RHFTextField-CLH3nO9j.js";import{B as Z}from"./ButtonLoading-Cr7ZS66a.js";import{R as z}from"./SelectField-CQdndHpI.js";import{R as B}from"./RotatingLoader-BUvM7oqM.js";import{u as ne}from"./useMonthMap-DqC9yJdg.js";import{O as oe}from"./OverLayLoader-Cshjxafs.js";import"./headlessui-DAvslveC.js";import"./axios-BrYcoDUu.js";import"./module-C35X1QSg.js";import"./moment-CbGOrKEH.js";const le=U().shape({aptName:l().required("Apartment Name is required"),wardNo:l().required("Ward No is required"),aptCode:l().required("Apartment Type is required"),aptAddress:l().required("Apartment Category is required"),pinCode:l().required("Apartment Status is required")});function ce({id:m,open:x,setOpen:u,title:r,isEdit:w,mutate:i,refetch:p}){var f,b,N,v,y,C,n;const{getAllUser:h}=Y(),q=()=>u(!x),a=G({api:"".concat((f=D)==null?void 0:f.getApartmentById,"?id=").concat(m),options:{enabled:!!m}}),t=k.useMemo(()=>{var s,o,F,R,E,d,T,c,O,V,$,M,W,_,L;return{aptName:(F=(o=(s=a==null?void 0:a.data)==null?void 0:s.data)==null?void 0:o.aptName)!=null?F:"",wardNo:(d=(E=(R=a==null?void 0:a.data)==null?void 0:R.data)==null?void 0:E.wardNo)!=null?d:"",aptCode:(O=(c=(T=a==null?void 0:a.data)==null?void 0:T.data)==null?void 0:c.aptCode)!=null?O:"",aptAddress:(M=($=(V=a==null?void 0:a.data)==null?void 0:V.data)==null?void 0:$.aptAddress)!=null?M:"",pinCode:(L=(_=(W=a==null?void 0:a.data)==null?void 0:W.data)==null?void 0:_.pinCode)!=null?L:""}},[(b=a==null?void 0:a.data)==null?void 0:b.data]),g=K({resolver:X(le),defaultValues:t});k.useEffect(()=>{var s;(s=a==null?void 0:a.data)!=null&&s.data&&g.reset(t)},[(N=a==null?void 0:a.data)==null?void 0:N.data]);const S=async s=>{u(!1),H("Are you sure?","Please confirm",async()=>{try{if(w){const o=await i.mutateAsync({api:D.updateApartment,data:{wardNo:s.wardNo,apartmentCode:s.aptCode,apartmentName:s.aptName,address:s.aptAddress,apartmentId:m,pinCode:s.pinCode}});o.data.status?(A.success(o.data.msg),p()):A.error(o.data.msg)}else{const o=await i.mutateAsync({api:D.addApartment,data:s});o.data.status?(A.success(o.data.msg),p()):A.error(o.data.msg)}}catch(o){A.error("Something went wrong")}})};return e.jsxs(J.Fragment,{children:[x&&e.jsx("div",{className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),e.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:"".concat(x?"flex":"hidden"," overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"),children:e.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full",children:e.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-900 dark:text-white",children:r!=null?r:"Add Floor"}),e.jsxs("button",{style:{background:"none"},onClick:q,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[e.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),e.jsx("div",{className:"p-4 md:p-5",children:a.isLoading?e.jsx("div",{className:"flex justify-center items-center h-[450px]",children:e.jsx(B,{})}):e.jsxs(Q,{methods:g,onSubmit:g.handleSubmit(S),children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[e.jsx("div",{children:e.jsx(j,{name:"aptName",isRequired:!0,label:"Apartment Name",placeholder:"Enter Apartment Name",inputValidation:["removeDoubleSpace"]})}),e.jsx("div",{children:e.jsx(z,{name:"wardNo",isRequired:!0,label:"Ward No",data:(n=(C=(y=(v=h==null?void 0:h.data)==null?void 0:v.data[0].ulbDetails[0])==null?void 0:y.wards)==null?void 0:C.map(s=>({label:String(s),value:String(s)})))!=null?n:[]})}),e.jsx("div",{children:e.jsx(j,{name:"aptCode",isRequired:!0,label:"Apartment Code",placeholder:"Enter Apartment Code"})}),e.jsx("div",{children:e.jsx(j,{name:"aptAddress",isRequired:!0,label:"Apartment Address",placeholder:"Enter Apartment Address"})}),e.jsx("div",{children:e.jsx(j,{type:"number",isRequired:!0,name:"pinCode",label:"Pin Code",placeholder:"Enter Pin Code",inputValidation:["zip"]})})]}),e.jsxs("div",{className:"flex justify-end space-x-4 mt-6 mb-2",children:[e.jsx(P,{size:"sm",type:"button",onClick:q,className:"bg-gray-200 text-gray-900 w-20",children:"Cancel"}),e.jsx(Z,{isLoading:i==null?void 0:i.isLoading,disabled:i==null?void 0:i.isLoading,size:"sm",type:"submit",className:"w-20",children:w?"Update":"Save"})]})]})})]})})})]})}const me=U().shape({aptName:l().required("Apartment Name is required"),wardNo:l().required("Ward No is required"),aptCode:l().required("Apartment Type is required"),aptAddress:l().required("Apartment Category is required"),pinCode:l().required("Apartment Status is required"),noOfFlat:l().required("No of Flat is required"),consumerCategory:l().required("Consumer Category is required"),consumerType:l().required("Consumer Type is required"),demandFrom:l().required("Demand From is required")});function ue({open:m,setOpen:x,title:u,mutate:r,refetch:w}){var S,f,b,N,v,y,C,n,s,o,F,R,E;const{getAllUser:i}=Y(),{getConsumerAddFormData:p}=de(),{resultList:h}=ne("4-1-2022"),q=()=>x(!m),a=K({resolver:X(me),defaultValues:{aptName:"",wardNo:"",aptCode:"",aptAddress:"",pinCode:"",noOfFlat:"",consumerCategory:"",consumerType:"",demandFrom:""}}),t=async d=>{x(!1),H("Are you sure?","Please confirm",async()=>{var T;try{const c=await(r==null?void 0:r.mutateAsync({api:(T=D)==null?void 0:T.createDefaultConsumerApartment,data:d}));c!=null&&c.data.status?(A.success(c==null?void 0:c.data.msg),w()):A.error(c==null?void 0:c.data.msg)}catch(c){A.error("Something went wrong")}})},{consumerCategoryData:g}=ie(a.watch("consumerCategory"));return e.jsxs(J.Fragment,{children:[m&&e.jsx("div",{className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),e.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:"".concat(m?"flex":"hidden"," overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"),children:e.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full",children:e.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-900 dark:text-white",children:u!=null?u:"Add Floor"}),e.jsxs("button",{style:{background:"none"},onClick:q,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[e.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),e.jsx("div",{className:"p-4 md:p-5",children:e.jsxs(Q,{methods:a,onSubmit:a.handleSubmit(t),children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx("div",{children:e.jsx(j,{isRequired:!0,name:"aptName",label:"Apartment Name",placeholder:"Enter Apartment Name",inputValidation:["removeDoubleSpace"]})}),e.jsx("div",{children:e.jsx(j,{isRequired:!0,name:"aptCode",label:"Apartment Code",placeholder:"Enter Apartment Code"})}),e.jsx("div",{className:"col-span-2",children:e.jsx(z,{isRequired:!0,name:"wardNo",label:"Ward No",selectedText:"Select Ward No",data:(N=(b=(f=(S=i==null?void 0:i.data)==null?void 0:S.data[0].ulbDetails[0])==null?void 0:f.wards)==null?void 0:b.map(d=>({label:String(d),value:String(d)})))!=null?N:[]})}),e.jsx("div",{className:"col-span-2",children:e.jsx(j,{isRequired:!0,name:"aptAddress",label:"Apartment Address",placeholder:"Enter Apartment Address"})}),e.jsx("div",{children:e.jsx(j,{type:"number",isRequired:!0,name:"pinCode",label:"Pin Code",placeholder:"Enter Pin Code",inputValidation:["zip"]})}),e.jsx("div",{children:e.jsx(j,{type:"number",isRequired:!0,name:"noOfFlat",label:"No of Flat",placeholder:"Enter No of Flat"})}),e.jsx("div",{children:e.jsx(z,{name:"consumerCategory",isRequired:!0,label:"Consumer Category",selectedText:"Select Consumer Category",data:(n=(C=(y=(v=p==null?void 0:p.data)==null?void 0:v.data)==null?void 0:y.consumerCategory)==null?void 0:C.map(d=>({label:String(d.name),value:String(d.id)})))!=null?n:[]})}),e.jsx("div",{children:e.jsx(z,{name:"consumerType",isRequired:!0,label:"Consumer Type",selectedText:"Select Consumer Type",data:(R=(F=(o=(s=g==null?void 0:g.data)==null?void 0:s.data)==null?void 0:o.consumerTypeList)==null?void 0:F.map(d=>({label:String(d.name),value:String(d.id)})))!=null?R:[]})}),e.jsx("div",{className:"col-span-2",children:e.jsx(z,{name:"demandFrom",label:"Demand From",isRequired:!0,selectedText:"Select demand From",data:(E=h==null?void 0:h.map(d=>({label:String(d.str),value:String(d.str)})))!=null?E:[]})})]}),e.jsxs("div",{className:"flex justify-end space-x-4 mt-6 mb-2",children:[e.jsx(P,{size:"sm",type:"button",onClick:q,className:"bg-gray-200 text-gray-900 w-20",children:"Cancel"}),e.jsx(Z,{isLoading:r==null?void 0:r.isLoading,disabled:r==null?void 0:r.isLoading,size:"sm",type:"submit",className:"w-20",children:"SAVE"})]})]})})]})})})]})}function Re(){var S,f,b,N,v,y,C;const m=I({}),[x,u]=k.useState(!1),[r,w]=k.useState(!1),[i,p]=k.useState(!1),h=ae(),[q,a]=k.useState(""),t=G({api:(S=D)==null?void 0:S.getApartList,options:{enabled:!0}}),g=n=>{a(n),w(!0),u(!0)};return t!=null&&t.isLoading?e.jsx("div",{className:"flex justify-center items-center h-screen",children:e.jsx(B,{})}):e.jsxs(se,{title:"Apartment List",children:[x&&e.jsx(ce,{id:q,isEdit:r,open:x,setOpen:u,title:r?"Edit Apartment":"Add Apartment",mutate:m,refetch:t.refetch}),i&&e.jsx(ue,{open:i,setOpen:p,title:"Add Apartment with default",mutate:m,refetch:t.refetch}),m.isLoading&&e.jsx(oe,{}),e.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[e.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[e.jsx(ee,{src:"/assets/image/category.png",alt:"Add Consumer",className:"w-12 h-12 rounded-lg bg-gray-200 p-2"}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"text-lg font-semibold",children:"Apartment List"}),e.jsx("p",{className:"text-sm text-gray-500",children:"Add apartment details here."})]})]}),e.jsxs("div",{className:"flex space-x-3 items-center justify-end",children:[e.jsx(P,{size:"sm",onClick:()=>{a(""),w(!1),u(!0)},children:"Add Apartment."}),e.jsx(P,{size:"sm",onClick:()=>p(!0),children:"Add with default"})]}),e.jsx(te,{}),((N=(b=(f=t==null?void 0:t.data)==null?void 0:f.data)==null?void 0:b.apartmentList)==null?void 0:N.length)>0?e.jsx(e.Fragment,{children:(C=(y=(v=t==null?void 0:t.data)==null?void 0:v.data)==null?void 0:y.apartmentList)==null?void 0:C.map(n=>e.jsx(re,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-2 px-4 py-6",children:[e.jsx("div",{className:"text-sm font-semibold",children:"Apartment Name:"}),e.jsx("div",{className:"text-sm font-semibold",children:n.apt_name}),e.jsx("div",{className:"text-sm font-semibold",children:"Ward No:"}),e.jsx("div",{className:"text-sm font-semibold",children:n.ward_no}),e.jsx("div",{className:"text-sm font-semibold",children:"Apartment Code:"}),e.jsx("div",{className:"text-sm font-semibold",children:n.apt_code}),e.jsx("div",{className:"text-sm font-semibold",children:"Apartment Address:"}),e.jsx("div",{className:"text-sm font-semibold",children:n.apt_address}),e.jsxs("div",{className:"flex space-x-4 items-center justify-end  col-span-2",children:[e.jsx("button",{style:{background:"none"},className:"text-sm font-semibold text-primary bg-none",onClick:()=>g(n.id),children:"Edit"}),e.jsx("button",{style:{background:"none"},onClick:()=>h("/deoghar-app/apartment-actions/".concat(n.id)),className:"text-sm font-semibold text-blue-500",children:"View"})]})]})},n.id))}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex justify-center items-center h-[450px]",children:e.jsx("h1",{className:"text-lg font-semibold text-gray-500",children:"No Data Found"})})})]})]})}export{Re as default};
