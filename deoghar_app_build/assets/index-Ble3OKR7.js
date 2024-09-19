import{u as G,h as J,j as e,I as K,e as _,C as O,_ as b}from"./index-CPXdmuH_.js";import{e as Q,i as U,r as k}from"./router-BsPcvcg3.js";import{u as X,F as Y,c as Z,a as d,o as D}from"./switch-De4j3AD7.js";import{P as ee}from"./index-D_E-W8CG.js";import{C as ae,b as re}from"./card-QAEPK5e0.js";import{S as se}from"./separator-KMf3fRTH.js";import{a as de,b as oe}from"./useComonData-BmaNrPH6.js";import{u as te}from"./useMonthMap-DqC9yJdg.js";import{g as ne}from"./services-KQnp_8oA.js";import{R as i}from"./RHFTextField-CLH3nO9j.js";import{R as ie}from"./RHFTextArea-DV1gI94e.js";import{B as me}from"./ButtonLoading-Cr7ZS66a.js";import{R as x}from"./SelectField-CQdndHpI.js";import"./headlessui-DAvslveC.js";import"./axios-BrYcoDUu.js";import"./moment-CbGOrKEH.js";const le=Z().shape({wardNo:d().required().label("Ward no"),holdingNo:d().required().label("Holding no"),consumerNo:d().required().label("Consumer no"),mobileNo:d().required().label("Mobile no"),demandFrom:d().required().label("Demand from"),consumerCategory:d().required().label("Consumer category"),consumerType:d().required().label("Consumer type"),renterName:d().required().label("Renter name"),pinCode:d().notRequired().label("Pin code"),address:d().required().label("Address")});function Fe(){var N,y,j,C,f,R,v,S,q;const l=G({}),W=Q(),{id:u}=U(),{getConsumerAddFormData:c}=de(),{resultList:p}=te("4-1-2022"),a=J({api:"".concat(_.getConsumerDetailsById,"/").concat(u),options:{enabled:!!u}}),h=k.useMemo(()=>{var r,o,t,n,s,F,A,w,T,P,M,H,$,B,E,I,L,V;return{wardNo:(t=String((o=(r=a==null?void 0:a.data)==null?void 0:r.data[0])==null?void 0:o.wardNo))!=null?t:"",holdingNo:(F=String((s=(n=a==null?void 0:a.data)==null?void 0:n.data[0])==null?void 0:s.holdingNo))!=null?F:"",consumerNo:(T=String((w=(A=a==null?void 0:a.data)==null?void 0:A.data[0])==null?void 0:w.consumerNo))!=null?T:"",consumerName:(H=String((M=(P=a==null?void 0:a.data)==null?void 0:P.data[0])==null?void 0:M.consumerName))!=null?H:"",mobileNo:"",demandFrom:"",consumerCategory:"",consumerType:"",renterName:"",address:(E=String((B=($=a==null?void 0:a.data)==null?void 0:$.data[0])==null?void 0:B.Address))!=null?E:"",pinCode:(V=String((L=(I=a==null?void 0:a.data)==null?void 0:I.data[0])==null?void 0:L.pinCode))!=null?V:""}},[(N=a==null?void 0:a.data)==null?void 0:N.data[0]]),m=X({resolver:D(le),defaultValues:h}),z=async r=>{O("Are you sure?","Please confirm",async()=>{var o,t,n;try{const s=await l.mutateAsync({api:_.postRenterForn,data:{consumerId:u,consumerCategory:r.consumerCategory,consumerName:r.renterName,consumerType:r.consumerType,demandFrom:r.demandFrom,holdingNo:r.holdingNo,mobileNo:r.mobileNo,pinCode:r.pinCode,address:r.address,wardNo:r.wardNo}});s.data.status?(b.success(s.data.msg),W("/deoghar-app/consumer-actions/".concat((n=(t=(o=s==null?void 0:s.data)==null?void 0:o.data)==null?void 0:t.demandDetails[0])==null?void 0:n.consumer_id))):b.error(s.data.msg)}catch(s){b.error(ne(s))}})};k.useEffect(()=>{var r;(r=a==null?void 0:a.data)!=null&&r.data[0]&&m.reset(h)},[(y=a==null?void 0:a.data)==null?void 0:y.data[0].id]);const{consumerCategoryData:g}=oe(m.watch("consumerCategory"));return e.jsx(ee,{title:"Add Renter",children:e.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[e.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[e.jsx(K,{src:"/assets/icons/searchConsumer.svg",alt:"Add Consumer",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:" font-semibold",children:"Add Renter"}),e.jsx("p",{className:"text-xs text-gray-500",children:"Solid west management system"})]})]}),e.jsx(se,{}),e.jsx(ae,{className:"overflow-hidden py-4","x-chunk":"dashboard-05-chunk-4",children:e.jsx(re,{className:"px-6 text-sm",children:e.jsx(Y,{methods:m,onSubmit:m.handleSubmit(z),children:e.jsxs("div",{className:"grid grid-cols-1 gap-3 space-x-1",children:[e.jsx(i,{name:"wardNo",label:"Ward no",disabled:!0,isRequired:!0}),e.jsx(i,{name:"holdingNo",label:"Holding no",disabled:!0,isRequired:!0}),e.jsx("div",{children:e.jsx(x,{name:"consumerCategory",label:"Consumer Category",isRequired:!0,data:(R=(f=(C=(j=c==null?void 0:c.data)==null?void 0:j.data)==null?void 0:C.consumerCategory)==null?void 0:f.map(r=>({label:String(r.name),value:String(r.id)})))!=null?R:[]})}),e.jsx("div",{children:e.jsx(x,{name:"consumerType",label:"Consumer Type",isRequired:!0,data:(S=(v=g==null?void 0:g.data)==null?void 0:v.data.consumerTypeList.map(r=>({label:String(r.name),value:String(r.id)})))!=null?S:[]})}),e.jsx("div",{children:e.jsx(i,{name:"renterName",label:"Renter Name",isRequired:!0})}),e.jsx("div",{children:e.jsx(i,{type:"number",isRequired:!0,name:"mobileNo",label:"Mobile no",inputValidation:["mobile"]})}),e.jsx("div",{children:e.jsx(ie,{name:"address",label:"Address",disabled:!0})}),e.jsx("div",{children:e.jsx(i,{type:"number",name:"pinCode",label:"Pin Code",inputValidation:["zip"],disabled:!0})}),e.jsx("div",{children:e.jsx(x,{name:"demandFrom",label:"Demand From",isRequired:!0,data:(q=p==null?void 0:p.map(r=>({label:String(r.str),value:String(r.str)})))!=null?q:[]})}),e.jsx("div",{children:e.jsx(me,{isLoading:l.isLoading,disabled:l.isLoading,type:"submit",className:"w-full mt-4",children:"Add Renter"})})]})})})})]})})}export{Fe as default};
