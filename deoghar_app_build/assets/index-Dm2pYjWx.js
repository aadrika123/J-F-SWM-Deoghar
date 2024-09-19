import{u as X,i as Y,h as Z,j as e,I as z,B as D,e as _,_ as l,C as ee}from"./index-CPXdmuH_.js";import{u as se,F as ae,c as te,e as de,a as k,o as ie}from"./switch-De4j3AD7.js";import{R as o}from"./RHFTextField-CLH3nO9j.js";import{r as re}from"./resizeImage-DShejzRF.js";import{e as ne,r as le,i as oe}from"./router-BsPcvcg3.js";import{P as ce}from"./index-D_E-W8CG.js";import{C as c,b as x}from"./card-QAEPK5e0.js";import{S as m}from"./separator-KMf3fRTH.js";import{S as h}from"./SkeletonLoader-DJyi06MM.js";import{O as xe}from"./OverLayLoader-Cshjxafs.js";import"./headlessui-DAvslveC.js";import"./axios-BrYcoDUu.js";import"./module-C35X1QSg.js";const me=te().shape({photo:de().required("Photo is required"),longitude:k().required("Longitude is required"),latitude:k().required("Latitude is required")});function we(){var p,u,f,N,v,b,y,C,L,S,w,F,P,R,T,G,I,q,A,O,U,$,E,B,M;const j=X({}),H=ne(),[g,J]=le.useState(""),{coords:r,isGeolocationEnabled:K}=Y(),{id:n}=oe(),s=Z({api:"".concat(_.getConsumerDetailsById,"/").concat(n),options:{enabled:!!n}}),t=se({resolver:ie(me),defaultValues:{photo:null,longitude:"",latitude:""}}),Q=async d=>{if(!K){l.error("Please enable your location");return}const a=new FormData;a.append("photo",d.photo),a.append("latitude",d.latitude),a.append("longitude",d.longitude),a.append("consumerId",String(n)),ee("Are you sure?","Please confirm",async()=>{try{const i=await j.mutateAsync({api:_.postGeoTagging,data:a});i.data.status?(l.success(i.data.msg),H("/deoghar-app/consumer-actions/".concat(n))):l.error(i.data.msg)}catch(i){l.error(i.msg)}})},W=async d=>{const a=d.target.files[0];if(!a)return;const i=await re(a),V=new File([i],a==null?void 0:a.name,{type:"image/*"});t.setValue("photo",V),t.setValue("latitude",String(r==null?void 0:r.latitude)),t.setValue("longitude",String(r==null?void 0:r.longitude)),J(URL.createObjectURL(V)||URL.createObjectURL(a))};return s!=null&&s.isLoading?e.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:e.jsx(c,{children:e.jsxs(x,{children:[e.jsx(h,{}),e.jsx(h,{}),e.jsx(h,{})]})})}):e.jsxs(ce,{title:"Geo Tagging Consumer",children:[j.isLoading&&e.jsx(xe,{}),e.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[e.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[e.jsx(z,{src:"/assets/image/category.png",alt:"Geo Tagging Consumer",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"font-semibold",children:"Geo Tagging Consumer"}),e.jsx("p",{className:"text-xs text-gray-500",children:"Solid west management system"})]})]}),e.jsx(m,{}),e.jsx(c,{children:e.jsx(x,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-3 py-6",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Consumer no:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(u=(p=s==null?void 0:s.data)==null?void 0:p.data[0])==null?void 0:u.consumerNo})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Consumer Name:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(N=(f=s==null?void 0:s.data)==null?void 0:f.data[0])==null?void 0:N.consumerName})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Mobile no:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(b=(v=s==null?void 0:s.data)==null?void 0:v.data[0])==null?void 0:b.mobileNo})}),((C=(y=s==null?void 0:s.data)==null?void 0:y.data[0])==null?void 0:C.monthlyDemand)>"0"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Monthly Demand/Rate:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(S=(L=s==null?void 0:s.data)==null?void 0:L.data[0])==null?void 0:S.monthlyDemand})})]}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Outstanding Demand:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(F=(w=s==null?void 0:s.data)==null?void 0:w.data[0])==null?void 0:F.totalDemand})}),((R=(P=s==null?void 0:s.data)==null?void 0:P.data[0])==null?void 0:R.totalDemand)>"0"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Demand from:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(G=(T=s==null?void 0:s.data)==null?void 0:T.data[0])==null?void 0:G.demandFrom})})]}),((q=(I=s==null?void 0:s.data)==null?void 0:I.data[0])==null?void 0:q.totalDemand)>"0"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Demand upto:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(O=(A=s==null?void 0:s.data)==null?void 0:A.data[0])==null?void 0:O.demandUpto})})]}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Total flats:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:($=(U=s==null?void 0:s.data)==null?void 0:U.data)==null?void 0:$.length})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Address:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(B=(E=s==null?void 0:s.data)==null?void 0:E.data[0])==null?void 0:B.Address})})]})})}),e.jsx(m,{}),e.jsx(c,{children:e.jsx(x,{children:e.jsx(ae,{methods:t,onSubmit:t.handleSubmit(Q),children:e.jsxs("div",{className:"grid grid-cols-2 gap-4 py-2 mt-1",children:[e.jsxs("div",{className:"col-span-2",children:[e.jsx(o,{isRequired:!0,type:"file",label:"Photo",accept:"image/*",onChange:d=>{W(d)}}),e.jsx("p",{className:"text-xs text-red-500",children:(M=t.formState.errors.photo)==null?void 0:M.message})]}),g&&e.jsx("div",{className:"flex justify-center col-span-2",children:e.jsx(z,{src:g,alt:"Geo Tagging Consumer",className:"w-32 h-32 object-cover rounded-lg bg-gray-200 p-2"})}),e.jsx("div",{children:e.jsx(o,{disabled:!0,value:t.watch("longitude"),label:"Longitude",placeholder:"Enter Longitude"})}),e.jsx("div",{children:e.jsx(o,{disabled:!0,value:t.watch("latitude"),label:"Latitude",placeholder:"Enter Latitude"})}),e.jsx(m,{className:"col-span-2"}),e.jsx("div",{className:"flex col-span-2 justify-end w-full",children:e.jsx(D,{className:"w-full",type:"submit",size:"sm",children:"SUBMIT"})})]})})})})]})]})}export{we as default};
