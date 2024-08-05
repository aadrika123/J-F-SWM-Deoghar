import{f as F,j as e,B as O,C as W,d as v,_ as d}from"./index-DwHfpNlX.js";import{d as k,r as B}from"./router-CxMlH8iW.js";import{P as V}from"./index-B1FKUPV7.js";import{C as G,b as U}from"./card-CP_wK8K2.js";import{c as T,a as t,e as M,u as _,F as $,S as y,o as z}from"./SelectField-DCQpvyE5.js";import{R as m}from"./RHFTextField-C7tJVrRN.js";import{R as C}from"./RHFTextArea-Bi2Av3mx.js";import{u as E}from"./useComonData-WfKdZXcd.js";import{u as S}from"./useCustomQuery-CJHa6I0o.js";import{r as H}from"./resizeImage-LElSD41C.js";import{I as w}from"./Image-C1aMTGBV.js";import{S as J}from"./separator-BoijPV8d.js";import{O as R}from"./OverLayLoader-8kHSgIe9.js";import"./headlessui-BRR0nG4s.js";import"./axios-BR179gNb.js";import"./module-BOCHwcoi.js";function ue(){var b,h,x,j,N,f;const q=k(),[p,A]=B.useState(""),{coords:i}=F(),g=S({}),u=S({}),{getAllUser:c}=E(),D=T().shape({latitude:t().required().label("Latitude"),longitude:t().required().label("Longitude"),remarks:t().required().label("Remarks"),complain:t().required().label("Complain"),consumerNo:t().required().label("Consumer no"),consumerWard:t().required().label("Ward no"),consumerName:t().required().label("Consumer name"),mobileNo:t().required().label("Mobile no"),consumerAddress:t().required().label("consumerAddress"),photo:M().required().label("Photo").nullable()}),r=_({resolver:z(D),defaultValues:{latitude:"",longitude:"",remarks:"",complain:"",consumerNo:"",consumerWard:"",consumerName:"",mobileNo:"",consumerAddress:"",photo:null}}),I=async a=>{W("Are you sure?","Please confirm",async()=>{try{const s=new FormData;s.append("photo",a.photo),s.append("latitude",a.latitude),s.append("longitude",a.longitude),s.append("remarks",a.remarks),s.append("complain",a.complain),s.append("consumerNo",a.consumerNo),s.append("consumerWard",a.consumerWard),s.append("consumerName",a.consumerName),s.append("mobileNo",a.mobileNo),s.append("consumerAddress",a.consumerAddress);const o=await g.mutateAsync({api:v.postTcComplain,data:s});o.data.status?(d.success(o.data.msg),r.reset({...r.getValues(),latitude:"",longitude:"",remarks:"",complain:"",consumerNo:"",consumerWard:"",consumerName:"",mobileNo:"",consumerAddress:"",photo:""}),q("/deoghar-app/view-complain-list")):d.error(o.data.msg)}catch(s){}})},P=async()=>{var a,s,o,n;try{const l=await u.mutateAsync({api:v.consumerDetails,data:{consumerNo:r.watch("consumerNo")}});l.data.status?(d.success(l.data.msg),r.reset({...r.getValues(),consumerWard:String((a=l.data.data.ward_no)!=null?a:""),consumerName:String((s=l.data.data.name)!=null?s:""),mobileNo:String((o=l.data.data.mobile_no)!=null?o:""),consumerAddress:String((n=l.data.data.address)!=null?n:"")})):(r.reset({...r.getValues(),consumerWard:"",consumerName:"",mobileNo:"",consumerAddress:""}),d.error(l.data.msg))}catch(l){d.error("Something went wrong")}},L=async a=>{const s=a.target.files[0];if(!s)return;const o=await H(s),n=new File([o],s==null?void 0:s.name,{type:"image/*"});r.setValue("photo",n),r.setValue("latitude",String(i==null?void 0:i.latitude)),r.setValue("longitude",String(i==null?void 0:i.longitude)),A(URL.createObjectURL(n)||URL.createObjectURL(s))};return e.jsxs(V,{title:"Grievances Post Complain",children:[g.isLoading&&e.jsx(R,{}),u.isLoading&&e.jsx(R,{}),e.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[e.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[e.jsx(w,{src:"/assets/image/category.png",alt:"Grievances Post Complain",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"font-semibold",children:"Grievances Post Complain"}),e.jsx("p",{className:"text-xs text-gray-500",children:"Solid west management system"})]})]}),e.jsx(J,{}),e.jsx(G,{children:e.jsx(U,{children:e.jsxs($,{methods:r,onSubmit:r.handleSubmit(I),children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[e.jsx("div",{children:e.jsx(m,{isRequired:!0,name:"consumerNo",label:"Consumer No",onBlur:P})}),e.jsx("div",{children:e.jsx(y,{isRequired:!0,name:"consumerWard",label:"Ward No",disabled:!0,data:(j=(x=(h=(b=c==null?void 0:c.data)==null?void 0:b.data[0].ulbDetails[0])==null?void 0:h.wards)==null?void 0:x.map(a=>({label:String(a),value:String(a)})))!=null?j:[]})}),e.jsx("div",{children:e.jsx(m,{name:"consumerName",isRequired:!0,label:"Consumer Name",disabled:!0})}),e.jsx("div",{children:e.jsx(m,{disabled:!0,name:"mobileNo",label:"Mobile No",isRequired:!0,type:"number",inputValidation:["mobile"]})}),e.jsx("div",{children:e.jsx(C,{disabled:!0,name:"consumerAddress",isRequired:!0,label:"Consumer Address"})}),e.jsx("div",{children:e.jsx(y,{name:"complain",label:"Complain",isRequired:!0,data:[{label:"Delayed Collection",value:"Delayed Collection"},{label:"Improper Disposal",value:"Improper Disposal"},{label:"Overflowing Bins",value:"Overflowing Bins"},{label:"Unhygienic Conditions",value:"Unhygienic Conditions"},{label:"Damaged Bins",value:"Damaged Bins"},{label:"Non-Collection of Recyclables",value:"Non-Collection of Recyclables"},{label:"Illegal Dumping",value:"Illegal Dumping"},{label:"Odor Issues",value:"Odor Issues"},{label:"Pest Problems",value:"Pest Problems"},{label:"Customer Service Issues",value:"Customer Service Issues"},{label:"Others",value:"Others"}]})}),e.jsxs("div",{children:[e.jsx(m,{type:"file",isRequired:!0,label:"Photo",accept:"image/*",onChange:a=>{L(a)}}),e.jsx("p",{className:"text-xs text-red-500",children:(N=r.formState.errors.photo)==null?void 0:N.message}),r.watch("latitude")&&r.watch("longitude")&&e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("h1",{className:"text-xs font-semibold",children:["Latitude: ",r.watch("latitude")]}),e.jsxs("h1",{className:"text-xs font-semibold",children:["Longitude: ",r.watch("longitude")]})]})]}),e.jsx("div",{className:"flex justify-center",children:p&&e.jsx(w,{src:p,alt:"Geo Tagging Consumer",className:"object-cover rounded-lg bg-gray-200 p-0.5"})}),e.jsx("div",{children:e.jsx(C,{name:"remarks",label:"Remarks",isRequired:!0})})]}),e.jsx("div",{className:"flex justify-center mt-6",children:e.jsx(O,{disabled:!((f=u.data)!=null&&f.data.status),type:"submit",variant:"default",size:"sm",className:"rounded-md w-24",children:"SUBMIT"})})]})})})]})]})}export{ue as default};
