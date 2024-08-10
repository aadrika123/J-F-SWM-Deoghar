import{u as z,i as _,h as k,j as e,I as q,B as H,e as O,_ as l,C as J}from"./index-UFBjW-l8.js";import{u as K,o as Q,F as W,c as X,e as Y,a as U}from"./SelectField-DpbV965T.js";import{R as o}from"./RHFTextField-pKW9K7Za.js";import{r as Z}from"./resizeImage-uYrLUA3x.js";import{d as D,r as ee,h as ae}from"./router-CTqkcgir.js";import{P as se}from"./index-DjcmfKoK.js";import{C as c,b as x}from"./card-B9Snk98R.js";import{S as m}from"./separator-C9vPwRpg.js";import{S as h}from"./SkeletonLoader-DyzsHgmv.js";import{O as te}from"./OverLayLoader-0pVCHtUR.js";import"./headlessui-BV7w-sRG.js";import"./axios-DmypytPv.js";import"./module-BQPiM98L.js";const de=X().shape({photo:Y().required("Photo is required"),longitude:U().required("Longitude is required"),latitude:U().required("Latitude is required")});function fe(){var g,u,f,N,v,b,y,A,L,S,w,C,F,P,R,T,G;const $=D(),j=z({}),[p,E]=ee.useState(""),{coords:r,isGeolocationEnabled:M}=_(),{id:n}=ae(),a=k({api:`${O.getApartmentDetailsById}/${n}`,options:{enabled:!!n}}),t=K({resolver:Q(de),defaultValues:{photo:null,longitude:"",latitude:""}}),B=async d=>{if(!M){l.error("Please enable your location");return}const s=new FormData;s.append("photo",d.photo),s.append("latitude",d.latitude),s.append("longitude",d.longitude),s.append("apartmentId",String(n)),J("Are you sure?","Please confirm",async()=>{try{const i=await j.mutateAsync({api:O.postGeoTagging,data:s});i.data.status?(l.success(i.data.msg),$(`/deoghar-app/apartment-actions/${n}`)):l.error(i.data.msg)}catch(i){l.error(i.msg)}})},V=async d=>{const s=d.target.files[0];if(!s)return;const i=await Z(s),I=new File([i],s==null?void 0:s.name,{type:"image/*"});t.setValue("photo",I),t.setValue("latitude",String(r==null?void 0:r.latitude)),t.setValue("longitude",String(r==null?void 0:r.longitude)),E(URL.createObjectURL(I)||URL.createObjectURL(s))};return a!=null&&a.isLoading?e.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:e.jsx(c,{children:e.jsxs(x,{children:[e.jsx(h,{}),e.jsx(h,{}),e.jsx(h,{})]})})}):e.jsxs(se,{title:"Geo Tagging Apartment",children:[j.isPending&&e.jsx(te,{}),e.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[e.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[e.jsx(q,{src:"/assets/image/category.png",alt:"Geo Tagging Apartment",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"font-semibold",children:"Geo Tagging Apartment"}),e.jsx("p",{className:"text-xs text-gray-500",children:"Solid west management system"})]})]}),e.jsx(m,{}),e.jsx(c,{children:e.jsx(x,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-3 py-6",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Apartment code:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(u=(g=a==null?void 0:a.data)==null?void 0:g.data[0])==null?void 0:u.apartmentCode})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Apartment Name:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(N=(f=a==null?void 0:a.data)==null?void 0:f.data[0])==null?void 0:N.apartmentName})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Mobile no:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(b=(v=a==null?void 0:a.data)==null?void 0:v.data[0])==null?void 0:b.mobileNo})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Monthly Demand/Rate:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(y=a==null?void 0:a.data)==null?void 0:y.totalAptMonthlyDemand})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Outstanding Demand:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(A=a==null?void 0:a.data)==null?void 0:A.totalAptDemand})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Demand from:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(S=(L=a==null?void 0:a.data)==null?void 0:L.data[0])==null?void 0:S.demandFrom})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Demand upto:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(C=(w=a==null?void 0:a.data)==null?void 0:w.data[0])==null?void 0:C.demandUpto})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Total flats:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(P=(F=a==null?void 0:a.data)==null?void 0:F.data)==null?void 0:P.length})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Address:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(T=(R=a==null?void 0:a.data)==null?void 0:R.data[0])==null?void 0:T.address})})]})})}),e.jsx(m,{}),e.jsx(c,{children:e.jsx(x,{children:e.jsx(W,{methods:t,onSubmit:t.handleSubmit(B),children:e.jsxs("div",{className:"grid grid-cols-2 gap-4 py-2 mt-1",children:[e.jsxs("div",{className:"col-span-2",children:[e.jsx(o,{isRequired:!0,type:"file",label:"Photo",accept:"image/*",onChange:d=>{V(d)}}),e.jsx("p",{className:"text-xs text-red-500",children:(G=t.formState.errors.photo)==null?void 0:G.message})]}),p&&e.jsx("div",{className:"flex justify-center col-span-2",children:e.jsx(q,{src:p,alt:"Geo Tagging Apartment",className:"w-32 h-32 object-cover rounded-lg bg-gray-200 p-2"})}),e.jsx("div",{children:e.jsx(o,{disabled:!0,value:t.watch("longitude"),label:"Longitude",placeholder:"Enter Longitude"})}),e.jsx("div",{children:e.jsx(o,{disabled:!0,value:t.watch("latitude"),label:"Latitude",placeholder:"Enter Latitude"})}),e.jsx(m,{className:"col-span-2"}),e.jsx("div",{className:"flex col-span-2 justify-end w-full",children:e.jsx(H,{className:"w-full",type:"submit",size:"sm",children:"SUBMIT"})})]})})})})]})]})}export{fe as default};
