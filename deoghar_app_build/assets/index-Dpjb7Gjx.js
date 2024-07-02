import{j as e,$ as q,g as w,_ as P}from"./index-DpLc_VBb.js";import{b as I,f as M,r as E}from"./router-DQohkvhc.js";import{a as R,o as B,F as H,S as L,c as U,b as o}from"./SelectField-x3wuE_96.js";import{u as T}from"./useComonData-CebNVlkw.js";import{R as r}from"./RHFTextField-C8Nb3w9R.js";import{B as V}from"./ButtonLoading-9ZZdeyNF.js";import{u as W,b as _}from"./useCustomQuery-_o8NWOw0.js";import{R as z}from"./RotatingLoader-ABhRyy5z.js";import{P as G}from"./index-DXYI66RA.js";import{I as k}from"./Image-BiAIlPq9.js";import{C as J,b as K}from"./card-BXyQteIV.js";import{C as O}from"./index-YNpgorTJ.js";import"./headlessui-qWRqSxHB.js";import"./axios-DmypytPv.js";import"./button-CQD3R9tk.js";import"./module-DNEd04lU.js";const Q=U().shape({wardNo:o().required().label("Ward no"),holdingNo:o().required().label("Holding no"),consumerNo:o().required().label("Consumer no"),mobileNo:o().required().label("Mobile no"),Address:o().required().label("Address"),pinCode:o().required().label("Pin code")});function pe(){var c,p,g,x,u;const{getAllUser:i}=T(),l=W({}),$=I(),{id:t}=M(),a=_({api:`${w.getConsumerDetailsById}/${t}`,options:{enabled:!!t}}),m=E.useMemo(()=>{var d,s,N,h,b,f,j,C,v,y,S,A;return{wardNo:String((s=(d=a==null?void 0:a.data)==null?void 0:d.data[0])==null?void 0:s.wardNo),holdingNo:String((h=(N=a==null?void 0:a.data)==null?void 0:N.data[0])==null?void 0:h.holdingNo)??"",consumerNo:String((f=(b=a==null?void 0:a.data)==null?void 0:b.data[0])==null?void 0:f.consumerNo)??"",mobileNo:String((C=(j=a==null?void 0:a.data)==null?void 0:j.data[0])==null?void 0:C.mobileNo)??"",Address:String((y=(v=a==null?void 0:a.data)==null?void 0:v.data[0])==null?void 0:y.Address)??"",pinCode:String((A=(S=a==null?void 0:a.data)==null?void 0:S.data[0])==null?void 0:A.pinCode)??""}},[(c=a==null?void 0:a.data)==null?void 0:c.data[0]]),n=R({resolver:B(Q),defaultValues:m});E.useEffect(()=>{var d;(d=a==null?void 0:a.data)!=null&&d.data[0]&&n.reset(m)},[(p=a==null?void 0:a.data)==null?void 0:p.data[0].id]);const F=async d=>{O("Are you sure?","Please confirm",async()=>{try{const s=await l.mutateAsync({api:w.postEditConsumerDetail,data:{address:d.Address,consumerId:t,mobileNo:d.mobileNo,name:d.consumerNo,holdingNo:d.holdingNo,consumerTypeId:"",demandFrom:"",pincode:d.pinCode,wardNo:d.wardNo}});s.data.status?(P.success(s.data.msg),$(`/deoghar-app/consumer-actions/${t}`)):P.error(s.data.msg)}catch{}})};return e.jsx(G,{title:"Update Consumer",children:e.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[e.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[e.jsx(k,{src:"/assets/image/category.png",alt:"Update Consumer",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"font-semibold",children:"Update Consumer"}),e.jsx("p",{className:"text-xs text-gray-500",children:"solid west management system"})]})]}),e.jsx(q,{}),e.jsx(J,{children:e.jsx(K,{children:e.jsx("div",{className:"p-4 md:p-5",children:a.isLoading?e.jsx("div",{className:"flex justify-center items-center h-[450px]",children:e.jsx(z,{})}):e.jsxs(H,{methods:n,onSubmit:n.handleSubmit(F),children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[e.jsx("div",{children:e.jsx(r,{name:"holdingNo",label:"Holding No",placeholder:"Enter Holding No"})}),e.jsx("div",{children:e.jsx(L,{name:"wardNo",label:"Ward No",selectedText:"Select Ward No",data:((u=(x=(g=i==null?void 0:i.data)==null?void 0:g.data[0].ulbDetails[0])==null?void 0:x.wards)==null?void 0:u.map(d=>({label:String(d),value:String(d)})))??[]})}),e.jsx("div",{children:e.jsx(r,{disabled:!0,name:"consumerNo",label:"Consumer No",placeholder:"Enter Consumer No"})}),e.jsx("div",{children:e.jsx(r,{name:"mobileNo",label:"Mobile No",placeholder:"Enter Mobile No",inputValidation:["phone"]})}),e.jsx("div",{children:e.jsx(r,{name:"Address",label:"Address",placeholder:"Enter Address"})}),e.jsx("div",{children:e.jsx(r,{name:"pinCode",label:"Pin Code",placeholder:"Enter Pin Code"})})]}),e.jsx("div",{className:"flex justify-end gap-3 mt-6 mb-2",children:e.jsx(V,{isLoading:l.isPending,size:"sm",type:"submit",className:"w-20",children:"Update"})})]})})})})]})})}export{pe as default};
