import{u as U,i as B,h as V,j as e,I as T,B as z,e as G,_ as l,C as _}from"./index-CPXdmuH_.js";import{u as k,F as H,c as J,e as K,a as I,o as Q}from"./switch-De4j3AD7.js";import{R as o}from"./RHFTextField-CLH3nO9j.js";import{r as W}from"./resizeImage-DShejzRF.js";import{e as X,r as Y,i as Z}from"./router-BsPcvcg3.js";import{P as D}from"./index-D_E-W8CG.js";import{C as c,b as x}from"./card-QAEPK5e0.js";import{S as m}from"./separator-KMf3fRTH.js";import{S as h}from"./SkeletonLoader-DJyi06MM.js";import{O as ee}from"./OverLayLoader-Cshjxafs.js";import"./headlessui-DAvslveC.js";import"./axios-BrYcoDUu.js";import"./module-C35X1QSg.js";const ae=J().shape({photo:K().required("Photo is required"),longitude:I().required("Longitude is required"),latitude:I().required("Latitude is required")});function ge(){var j,u,f,N,b,v,y,A,L,S,w,C,F,P;const q=X(),p=U({}),[g,M]=Y.useState(""),{coords:r,isGeolocationEnabled:O}=B(),{id:n}=Z(),a=V({api:"".concat(G.getApartmentDetailsById,"/").concat(n),options:{enabled:!!n}}),s=k({resolver:Q(ae),defaultValues:{photo:null,longitude:"",latitude:""}}),$=async i=>{if(!O){l.error("Please enable your location");return}const t=new FormData;t.append("photo",i.photo),t.append("latitude",i.latitude),t.append("longitude",i.longitude),t.append("apartmentId",String(n)),_("Are you sure?","Please confirm",async()=>{try{const d=await p.mutateAsync({api:G.postGeoTagging,data:t});d.data.status?(l.success(d.data.msg),q("/deoghar-app/apartment-actions/".concat(n))):l.error(d.data.msg)}catch(d){l.error(d.msg)}})},E=async i=>{const t=i.target.files[0];if(!t)return;const d=await W(t),R=new File([d],t==null?void 0:t.name,{type:"image/*"});s.setValue("photo",R),s.setValue("latitude",String(r==null?void 0:r.latitude)),s.setValue("longitude",String(r==null?void 0:r.longitude)),M(URL.createObjectURL(R)||URL.createObjectURL(t))};return a!=null&&a.isLoading?e.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:e.jsx(c,{children:e.jsxs(x,{children:[e.jsx(h,{}),e.jsx(h,{}),e.jsx(h,{})]})})}):e.jsxs(D,{title:"Geo Tagging Apartment",children:[p.isLoading&&e.jsx(ee,{}),e.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[e.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[e.jsx(T,{src:"/assets/image/category.png",alt:"Geo Tagging Apartment",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"font-semibold",children:"Geo Tagging Apartment"}),e.jsx("p",{className:"text-xs text-gray-500",children:"Solid west management system"})]})]}),e.jsx(m,{}),e.jsx(c,{children:e.jsx(x,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-3 py-6",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Apartment code:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(u=(j=a==null?void 0:a.data)==null?void 0:j.data[0])==null?void 0:u.apartmentCode})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Apartment Name:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(N=(f=a==null?void 0:a.data)==null?void 0:f.data[0])==null?void 0:N.apartmentName})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Mobile no:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(v=(b=a==null?void 0:a.data)==null?void 0:b.data[0])==null?void 0:v.mobileNo})}),((y=a==null?void 0:a.data)==null?void 0:y.totalAptMonthlyDemand)>0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Monthly Demand/Rate:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(A=a==null?void 0:a.data)==null?void 0:A.totalAptMonthlyDemand})})]}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Outstanding Demand:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(L=a==null?void 0:a.data)==null?void 0:L.totalAptDemand})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Total flats:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(w=(S=a==null?void 0:a.data)==null?void 0:S.data)==null?void 0:w.length})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Address:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(F=(C=a==null?void 0:a.data)==null?void 0:C.data[0])==null?void 0:F.address})})]})})}),e.jsx(m,{}),e.jsx(c,{children:e.jsx(x,{children:e.jsx(H,{methods:s,onSubmit:s.handleSubmit($),children:e.jsxs("div",{className:"grid grid-cols-2 gap-4 py-2 mt-1",children:[e.jsxs("div",{className:"col-span-2",children:[e.jsx(o,{isRequired:!0,type:"file",label:"Photo",accept:"image/*",onChange:i=>{E(i)}}),e.jsx("p",{className:"text-xs text-red-500",children:(P=s.formState.errors.photo)==null?void 0:P.message})]}),g&&e.jsx("div",{className:"flex justify-center col-span-2",children:e.jsx(T,{src:g,alt:"Geo Tagging Apartment",className:"w-32 h-32 object-cover rounded-lg bg-gray-200 p-2"})}),e.jsx("div",{children:e.jsx(o,{disabled:!0,value:s.watch("longitude"),label:"Longitude",placeholder:"Enter Longitude"})}),e.jsx("div",{children:e.jsx(o,{disabled:!0,value:s.watch("latitude"),label:"Latitude",placeholder:"Enter Latitude"})}),e.jsx(m,{className:"col-span-2"}),e.jsx("div",{className:"flex col-span-2 justify-end w-full",children:e.jsx(z,{className:"w-full",type:"submit",size:"sm",children:"SUBMIT"})})]})})})})]})]})}export{ge as default};
