import{f as z,j as e,B as _,d as q,_ as n,C as k}from"./index-DwHfpNlX.js";import{u as H,o as J,F as K,c as Q,e as W,a as O}from"./SelectField-DCQpvyE5.js";import{R as o}from"./RHFTextField-C7tJVrRN.js";import{r as X}from"./resizeImage-LElSD41C.js";import{d as Y,r as Z,h as D}from"./router-CxMlH8iW.js";import{P as ee}from"./index-B1FKUPV7.js";import{C as c,b as x}from"./card-CP_wK8K2.js";import{I as U}from"./Image-C1aMTGBV.js";import{u as ae,b as se}from"./useCustomQuery-CJHa6I0o.js";import{S as m}from"./separator-BoijPV8d.js";import{S as h}from"./SkeletonLoader-B2orm8Zf.js";import{O as te}from"./OverLayLoader-8kHSgIe9.js";import"./headlessui-BRR0nG4s.js";import"./axios-BR179gNb.js";import"./module-BOCHwcoi.js";const de=Q().shape({photo:W().required("Photo is required"),longitude:O().required("Longitude is required"),latitude:O().required("Latitude is required")});function be(){var g,u,f,N,b,v,y,L,A,S,w,C,F,P,R,T,G;const $=Y(),p=ae({}),[j,E]=Z.useState(""),{coords:r,isGeolocationEnabled:M}=z(),{id:l}=D(),a=se({api:"".concat(q.getApartmentDetailsById,"/").concat(l),options:{enabled:!!l}}),t=H({resolver:J(de),defaultValues:{photo:null,longitude:"",latitude:""}}),B=async d=>{if(!M){n.error("Please enable your location");return}const s=new FormData;s.append("photo",d.photo),s.append("latitude",d.latitude),s.append("longitude",d.longitude),s.append("apartmentId",String(l)),k("Are you sure?","Please confirm",async()=>{try{const i=await p.mutateAsync({api:q.postGeoTagging,data:s});i.data.status?(n.success(i.data.msg),$("/deoghar-app/apartment-actions/".concat(l))):n.error(i.data.msg)}catch(i){n.error(i.msg)}})},V=async d=>{const s=d.target.files[0];if(!s)return;const i=await X(s),I=new File([i],s==null?void 0:s.name,{type:"image/*"});t.setValue("photo",I),t.setValue("latitude",String(r==null?void 0:r.latitude)),t.setValue("longitude",String(r==null?void 0:r.longitude)),E(URL.createObjectURL(I)||URL.createObjectURL(s))};return a!=null&&a.isLoading?e.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:e.jsx(c,{children:e.jsxs(x,{children:[e.jsx(h,{}),e.jsx(h,{}),e.jsx(h,{})]})})}):e.jsxs(ee,{title:"Geo Tagging Apartment",children:[p.isLoading&&e.jsx(te,{}),e.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[e.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[e.jsx(U,{src:"/assets/image/category.png",alt:"Geo Tagging Apartment",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"font-semibold",children:"Geo Tagging Apartment"}),e.jsx("p",{className:"text-xs text-gray-500",children:"Solid west management system"})]})]}),e.jsx(m,{}),e.jsx(c,{children:e.jsx(x,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-3 py-6",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Apartment code:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(u=(g=a==null?void 0:a.data)==null?void 0:g.data[0])==null?void 0:u.apartmentCode})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Apartment Name:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(N=(f=a==null?void 0:a.data)==null?void 0:f.data[0])==null?void 0:N.apartmentName})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Mobile no:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(v=(b=a==null?void 0:a.data)==null?void 0:b.data[0])==null?void 0:v.mobileNo})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Monthly Demand/Rate:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(y=a==null?void 0:a.data)==null?void 0:y.totalAptMonthlyDemand})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Outstanding Demand:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(L=a==null?void 0:a.data)==null?void 0:L.totalAptDemand})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Demand from:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(S=(A=a==null?void 0:a.data)==null?void 0:A.data[0])==null?void 0:S.demandFrom})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Demand upto:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(C=(w=a==null?void 0:a.data)==null?void 0:w.data[0])==null?void 0:C.demandUpto})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Total flats:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(P=(F=a==null?void 0:a.data)==null?void 0:F.data)==null?void 0:P.length})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Address:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(T=(R=a==null?void 0:a.data)==null?void 0:R.data[0])==null?void 0:T.address})})]})})}),e.jsx(m,{}),e.jsx(c,{children:e.jsx(x,{children:e.jsx(K,{methods:t,onSubmit:t.handleSubmit(B),children:e.jsxs("div",{className:"grid grid-cols-2 gap-4 py-2 mt-1",children:[e.jsxs("div",{className:"col-span-2",children:[e.jsx(o,{isRequired:!0,type:"file",label:"Photo",accept:"image/*",onChange:d=>{V(d)}}),e.jsx("p",{className:"text-xs text-red-500",children:(G=t.formState.errors.photo)==null?void 0:G.message})]}),j&&e.jsx("div",{className:"flex justify-center col-span-2",children:e.jsx(U,{src:j,alt:"Geo Tagging Apartment",className:"w-32 h-32 object-cover rounded-lg bg-gray-200 p-2"})}),e.jsx("div",{children:e.jsx(o,{disabled:!0,value:t.watch("longitude"),label:"Longitude",placeholder:"Enter Longitude"})}),e.jsx("div",{children:e.jsx(o,{disabled:!0,value:t.watch("latitude"),label:"Latitude",placeholder:"Enter Latitude"})}),e.jsx(m,{className:"col-span-2"}),e.jsx("div",{className:"flex col-span-2 justify-end w-full",children:e.jsx(_,{className:"w-full",type:"submit",size:"sm",children:"SUBMIT"})})]})})})})]})]})}export{be as default};
