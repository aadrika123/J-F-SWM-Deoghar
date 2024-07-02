import{j as e,g as T,_ as c}from"./index-DpLc_VBb.js";import{P as q}from"./index-DXYI66RA.js";import{C as P,b as M}from"./card-BXyQteIV.js";import{c as V,b as a,a as L,F as B,S as n,o as D}from"./SelectField-x3wuE_96.js";import{R as t}from"./RHFTextField-C8Nb3w9R.js";import{B as I}from"./button-CQD3R9tk.js";import{b as R}from"./router-DQohkvhc.js";import{a as $,u as z,b as G}from"./useComonData-CebNVlkw.js";import{I as H}from"./Image-BiAIlPq9.js";import{S as W}from"./separator-DMdG5SbB.js";import{u as _}from"./useMonthMap-C8hLMgQU.js";import{C as E}from"./index-YNpgorTJ.js";import{u as k}from"./useCustomQuery-_o8NWOw0.js";import"./headlessui-qWRqSxHB.js";import"./axios-DmypytPv.js";import"./moment-BjLXg0w5.js";function de(){var u,p,x,g,h,b,j,y,N;const S=R(),i=k({}),{resultList:w}=_("4-1-2022"),{getConsumerAddFormData:d}=$(),{getAllUser:m}=z(),F=V().shape({wardNo:a().required().label("Ward no"),holdingNo:a(),consumerName:a().required().label("Consumer name"),mobileNo:a().required().label("Mobile no"),address:a().required().label("Address"),pinCode:a().required().label("Pin code"),consumerCategory:a().required().label("Consumer category"),consumerType:a().required().label("Consumer type"),demandFrom:a().required().label("Demand from"),firmName:a().when("consumerCategory",{is:"2",then:()=>a().required().label("Firm name")}),licenseNo:a().when("consumerCategory",{is:"2",then:()=>a().required().label("License no")}),selectText:a()}),o=L({resolver:D(F),defaultValues:{wardNo:"",holdingNo:"",consumerName:"",mobileNo:"",address:"",pinCode:"",consumerCategory:"",consumerType:"",demandFrom:"",firmName:"",licenseNo:"",selectText:""}}),{consumerCategoryData:l}=G(String(o.watch("consumerCategory"))),A=async r=>{E("Are you sure?","Please confirm",async()=>{var C,f,v;try{const s=await(i==null?void 0:i.mutateAsync({api:(C=T)==null?void 0:C.postConsumerAdd,data:r}));s!=null&&s.data.status?(c.success(s==null?void 0:s.data.msg),S(`/deoghar-app/consumer-actions/${(v=(f=s==null?void 0:s.data)==null?void 0:f.data)==null?void 0:v.consumerId}`)):c.error(s==null?void 0:s.data.msg)}catch{c.error("Something went wrong")}})};return e.jsx(q,{title:"Add Consumer",children:e.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[e.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[e.jsx(H,{src:"/assets/image/category.png",alt:"Add Consumer",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"font-semibold",children:"Add Consumer"}),e.jsx("p",{className:"text-xs text-gray-500",children:"Add consumer details here."})]})]}),e.jsx(W,{}),e.jsx(P,{children:e.jsx(M,{children:e.jsxs(B,{methods:o,onSubmit:o.handleSubmit(A),children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[e.jsx("div",{children:e.jsx(n,{selectedText:"selectText",name:"consumerCategory",label:"Consumer Category",data:((x=(p=(u=d==null?void 0:d.data)==null?void 0:u.data)==null?void 0:p.consumerCategory)==null?void 0:x.map(r=>({label:String(r.name),value:String(r.id)})))??[]})}),e.jsx("div",{children:e.jsx(n,{name:"consumerType",label:"Consumer Type",data:((b=(h=(g=l==null?void 0:l.data)==null?void 0:g.data)==null?void 0:h.consumerTypeList)==null?void 0:b.map(r=>({label:String(r.name),value:String(r.id)})))??[]})}),{2:e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx(t,{name:"firmName",label:"Firm Name",type:"text"})}),e.jsx("div",{children:e.jsx(t,{name:"licenseNo",label:"License No",type:"text"})})]})}[o.watch("consumerCategory")],e.jsx("div",{children:e.jsx(n,{name:"wardNo",label:"Ward No",data:((N=(y=(j=m==null?void 0:m.data)==null?void 0:j.data[0].ulbDetails[0])==null?void 0:y.wards)==null?void 0:N.map(r=>({label:String(r),value:String(r)})))??[]})}),e.jsx("div",{children:e.jsx(t,{name:"holdingNo",label:"Holding No",type:"text",inputValidation:["removeSpace"]})}),e.jsx("div",{children:e.jsx(t,{name:"consumerName",label:"Consumer Name",type:"text",inputValidation:["removeDoubleSpace"]})}),e.jsx("div",{children:e.jsx(t,{name:"mobileNo",label:"Mobile No",inputValidation:["mobile","number"]})}),e.jsx("div",{children:e.jsx(t,{name:"address",label:"Address",type:"text"})}),e.jsx("div",{children:e.jsx(t,{name:"pinCode",label:"Pin Code",type:"text",inputValidation:["zip"]})}),e.jsx("div",{children:e.jsx(n,{name:"demandFrom",label:"Demand From",data:w.map(r=>({label:String(r.str),value:String(r.str)}))??[]})})]}),e.jsx("div",{className:"flex justify-center mt-6",children:e.jsx(I,{type:"submit",variant:"default",size:"sm",className:"rounded-md w-24",children:"Add"})})]})})})]})})}export{de as default};
