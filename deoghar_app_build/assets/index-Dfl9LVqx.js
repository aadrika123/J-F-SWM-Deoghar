import{j as e,u,a as x,b as p,_ as t}from"./index-DXAP7HMK.js";import{u as g,F as f,c as h,a as n,o as j}from"./switch-BZUTkljd.js";import{R as y}from"./RHFTextField-BtYS6x_Q.js";import{g as N}from"./services-KQnp_8oA.js";import{B as w}from"./ButtonLoading-BzFd636v.js";import{R as b}from"./RHFPasswordField-LRSBMvQI.js";import{P as v}from"./index-B7ott4wP.js";import"./router-DWxcwEcu.js";import"./headlessui-DlCzxctq.js";import"./axios-BrYcoDUu.js";function L(){return e.jsxs("div",{className:"px-6 lg:px-0 mx-auto max-w-sm py-6",children:[e.jsx("div",{className:"flex justify-center"}),e.jsx("h1",{className:"text-3xl font-bold text-center mt-4 text-green-400",children:"SWM DEOGHAR"}),e.jsx("p",{className:"text-center mt-2 text-muted-foreground",children:"Login to your account"})]})}const F=h({userName:n().required(),password:n().min(3)});function S(){const m=u({}),{login:l}=x(),a=g({defaultValues:{userName:"",password:""},resolver:j(F)}),c=async d=>{var r,o,i;try{const s=await m.mutateAsync({api:p.login,data:d});(r=s==null?void 0:s.data)!=null&&r.status?(await l(s),t.success((o=s==null?void 0:s.data)==null?void 0:o.msg)):t.error((i=s==null?void 0:s.data)==null?void 0:i.msg)}catch(s){t.error(N(s.msg))}};return e.jsx(f,{methods:a,onSubmit:a.handleSubmit(c),children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"space-y-2",children:e.jsx(y,{className:"rounded-xl py-6 px-5 w-full bg-background",name:"userName",inputValidation:["removeSpace"],placeholder:"Enter your User Name"})}),e.jsx("div",{className:"space-y-2",children:e.jsx(b,{className:"rounded-xl py-6 px-5 w-full bg-background",name:"password",placeholder:"Enter your password"})}),e.jsx("div",{children:e.jsx(w,{type:"submit",isLoading:a.formState.isSubmitting,className:"w-full rounded-xl py-6 px-4 mt-2 shadow-none",variant:"outline",children:"Login"})})]})})}function _(){return e.jsx(v,{title:"Login",children:e.jsxs("div",{className:"flex flex-col w-full justify-center mt-5 px-6 lg:px-0 mx-auto max-w-sm",children:[e.jsx(L,{}),e.jsx(S,{})]})})}export{_ as default};
