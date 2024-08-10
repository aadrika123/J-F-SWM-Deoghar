import{l as Be,m as ve,n as ze,o as b,p as _e,q as He,r as Ve,s as We,t as Qe,v as Ge,w as Je,x as Me,y as Ke,z as Xe,A as Ze,j as e,D as v,G as Re,B as qe,u as ea,H as aa,h as ta,g as je,e as y,I as sa,C as ra,k as ge,F as $e,_ as Ne}from"./index-806RzVmj.js";import{h as D}from"./moment-BjLXg0w5.js";import{u as da,o as oa,F as na,S as ye,c as ca,a as x}from"./SelectField-BQfgim-u.js";import{R as $}from"./RHFTextField-B_iTY4r2.js";import{r as n,d as la,h as ia,R as ma}from"./router-CTqkcgir.js";import{P as pa}from"./index-Bxcr3w61.js";import{C as M,b as R}from"./card-DM18b3lk.js";import{T as we,a as Ae,b as q,c as h,d as De,e as u,H as xa}from"./table-B8jLdTRH.js";import{S as C}from"./separator-Ma15OfAL.js";import{S as Y}from"./SkeletonLoader-CJkZKV-l.js";import{O as ha}from"./OverLayLoader-Rjn5IXP1.js";import"./headlessui-BV7w-sRG.js";import"./axios-DmypytPv.js";import"./module-Bnuzsac0.js";const ua="AlertDialog",[fa,et]=Be(ua,[ve]),j=ve(),ba=t=>{const{__scopeAlertDialog:r,...s}=t,l=j(r);return n.createElement(Xe,b({},l,s,{modal:!0}))},ja=n.forwardRef((t,r)=>{const{__scopeAlertDialog:s,...l}=t,o=j(s);return n.createElement(Ze,b({},o,l,{ref:r}))}),ga=t=>{const{__scopeAlertDialog:r,...s}=t,l=j(r);return n.createElement(Ke,b({},l,s))},$a=n.forwardRef((t,r)=>{const{__scopeAlertDialog:s,...l}=t,o=j(s);return n.createElement(ze,b({},o,l,{ref:r}))}),Ce="AlertDialogContent",[Na,ya]=fa(Ce),wa=n.forwardRef((t,r)=>{const{__scopeAlertDialog:s,children:l,...o}=t,d=j(s),p=n.useRef(null),w=_e(r,p),m=n.useRef(null);return n.createElement(He,{contentName:Ce,titleName:Aa,docsSlug:"alert-dialog"},n.createElement(Na,{scope:s,cancelRef:m},n.createElement(Ve,b({role:"alertdialog"},d,o,{ref:w,onOpenAutoFocus:We(o.onOpenAutoFocus,g=>{var _;g.preventDefault(),(_=m.current)===null||_===void 0||_.focus({preventScroll:!0})}),onPointerDownOutside:g=>g.preventDefault(),onInteractOutside:g=>g.preventDefault()}),n.createElement(Qe,null,l),!1)))}),Aa="AlertDialogTitle",Da=n.forwardRef((t,r)=>{const{__scopeAlertDialog:s,...l}=t,o=j(s);return n.createElement(Ge,b({},o,l,{ref:r}))}),va=n.forwardRef((t,r)=>{const{__scopeAlertDialog:s,...l}=t,o=j(s);return n.createElement(Je,b({},o,l,{ref:r}))}),_a=n.forwardRef((t,r)=>{const{__scopeAlertDialog:s,...l}=t,o=j(s);return n.createElement(Me,b({},o,l,{ref:r}))}),Ma="AlertDialogCancel",Ra=n.forwardRef((t,r)=>{const{__scopeAlertDialog:s,...l}=t,{cancelRef:o}=ya(Ma,s),d=j(s),p=_e(r,o);return n.createElement(Me,b({},d,l,{ref:p}))}),qa=ba,Ca=ja,Ya=ga,Ye=$a,Se=wa,Pe=_a,Ue=Ra,Ee=Da,Te=va,Sa=qa,Pa=Ca,Ua=Ya,Ie=n.forwardRef(({className:t,...r},s)=>e.jsx(Ye,{className:v("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...r,ref:s}));Ie.displayName=Ye.displayName;const ke=n.forwardRef(({className:t,...r},s)=>e.jsxs(Ua,{children:[e.jsx(Ie,{}),e.jsx(Se,{ref:s,className:v("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",t),...r})]}));ke.displayName=Se.displayName;const Oe=n.forwardRef(({className:t,...r},s)=>e.jsx(Ee,{ref:s,className:v("text-lg font-semibold",t),...r}));Oe.displayName=Ee.displayName;const Ea=n.forwardRef(({className:t,...r},s)=>e.jsx(Te,{ref:s,className:v("text-sm text-muted-foreground",t),...r}));Ea.displayName=Te.displayName;const Ta=n.forwardRef(({className:t,...r},s)=>e.jsx(Pe,{ref:s,className:v(Re(),t),...r}));Ta.displayName=Pe.displayName;const Le=n.forwardRef(({className:t,...r},s)=>e.jsx(Ue,{ref:s,className:v(Re({variant:"outline"}),"mt-2 sm:mt-0",t),...r}));Le.displayName=Ue.displayName;function Ia({children:t,buttonTitle:r,title:s}){return e.jsxs(Sa,{children:[e.jsx(Pa,{asChild:!0,children:e.jsx(qe,{variant:"outline",size:"sm",children:r??"Open"})}),e.jsxs(ke,{className:"rounded-lg w-[95%] p-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(Oe,{children:s??"Alert Dialog Title"}),e.jsx(Le,{className:"w-8 h-8 px-2 rounded-lg hover:bg-gray-200",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M10 8.586l3.293-3.293 1.414 1.414L11.414 10l3.293 3.293-1.414 1.414L10 11.414l-3.293 3.293-1.414-1.414L8.586 10 5.293 6.707l1.414-1.414L10 8.586z",clipRule:"evenodd"})})})]}),e.jsx("div",{className:"py-2 overflow-scroll",children:t})]})]})}const ka=ca().shape({paymentMode:x().required("Payment mode is required"),paidUpto:x().required("Payment amount is required"),bankName:x().when("paymentMode",{is:t=>t=="Cheque"||t=="Dd",then:()=>x().required("Bank name is required")}),branchName:x().when("paymentMode",{is:t=>t=="Cheque"||t=="Dd",then:()=>x().required("Branch name is required")}),chequeDate:x().when("paymentMode",{is:t=>t=="Cheque"||t=="Dd",then:()=>x().required("Cheque/DD date is required")}),chequeNo:x().when("paymentMode",{is:t=>t=="Cheque"||t=="Dd",then:()=>x().required("Cheque/DD number is required")})});function at(){var S,P,U,E,T,I,k,O,L,F,B,z,H,V,W,Q,G,J,K,X;const t=la(),{mutateAsync:r,isPending:s}=ea({}),{createGeoLocation:l}=aa(),{id:o}=ia(),d=ta({api:`${y.getApartmentDetailsById}/${o}`,options:{enabled:!!o}}),p=da({resolver:oa(ka)}),w=je({api:y.getPaymentData,config:{apartmentId:o},options:{enabled:!!o}}),m=je({api:y.getCalculatedAmount,config:{apartmentId:o,payUpto:p.watch("paidUpto")},value:[p.watch("paidUpto")],options:{enabled:!!p.watch("paidUpto")&&!!o}}),g=async()=>{var a,f,N;try{const i=await r({api:y.generateOrder,data:{amount:(f=(a=m.data)==null?void 0:a.data)==null?void 0:f.totaldemand,consumerId:o,consumerType:"apartment"}});return(N=i==null?void 0:i.data)!=null&&N.status,i}catch(i){return i}},_=async a=>{ra("Are you sure to pay?","Please confirm",async()=>{var f,N,i,A,Z,ee,ae,te,se,re,de,oe,ne,ce,le,ie,me,pe,xe,he,ue,fe,be;try{if((a==null?void 0:a.paymentMode)=="Card"){if(window.ReactNativeWebView){const c=await g();(f=c==null?void 0:c.data)!=null&&f.status&&window.ReactNativeWebView.postMessage(JSON.stringify({Key:"DO_SALE",keyData:{amount:(i=(N=m.data)==null?void 0:N.data)==null?void 0:i.totaldemand,apartmentId:o,paidUpto:a.paidUpto,paymentMode:a.paymentMode,api:ge+y.addOrder,token:localStorage.getItem("token"),tranId:(Z=(A=c.data)==null?void 0:A.data)==null?void 0:Z.order_id,redirectUrl:$e+"/deoghar-app/payment-receipt",payload:{amount:(ae=(ee=m.data)==null?void 0:ee.data)==null?void 0:ae.totaldemand,consumerId:o,consumerType:"apartment",orderId:(se=(te=c.data)==null?void 0:te.data)==null?void 0:se.order_id,payUpto:a.paidUpto}}}))}return}if((a==null?void 0:a.paymentMode)=="QR"){if(window.ReactNativeWebView){const c=await g();(re=c==null?void 0:c.data)!=null&&re.status&&window.ReactNativeWebView.postMessage(JSON.stringify({Key:"DO_SALE_WITH_QR",keyData:{amount:(oe=(de=m.data)==null?void 0:de.data)==null?void 0:oe.totaldemand,apartmentId:o,paidUpto:a.paidUpto,paymentMode:a.paymentMode,api:ge+y.addOrder,token:localStorage.getItem("token"),redirectUrl:$e+"/deoghar-app/payment-receipt",payload:{amount:(ce=(ne=m.data)==null?void 0:ne.data)==null?void 0:ce.totaldemand,consumerId:o,consumerType:"apartment",orderId:(ie=(le=c.data)==null?void 0:le.data)==null?void 0:ie.order_id,payUpto:a.paidUpto}}}))}return}else{const c=await r({api:y.apartmentPayment,data:a.paymentMode==="Cash"?{apartmentId:o,paidAmount:(me=m.data)==null?void 0:me.data.totaldemand,paymentMode:a.paymentMode,paidUpto:a.paidUpto}:{apartmentId:o,paidAmount:(pe=m.data)==null?void 0:pe.data.totaldemand,paymentMode:a.paymentMode,paidUpto:a.paidUpto,bankName:a.bankName,branchName:a.branchName,chequeNo:a.chequeNo,chequeDate:a.chequeDate}});(xe=c==null?void 0:c.data)!=null&&xe.status?(Ne.success((he=c==null?void 0:c.data)==null?void 0:he.msg),t(`/deoghar-app/payment-receipt/${(fe=(ue=c==null?void 0:c.data)==null?void 0:ue.data)==null?void 0:fe.transactionNo}`,{replace:!0})):Ne.error((be=c==null?void 0:c.data)==null?void 0:be.msg)}await l()}catch{}})},Fe=(a,f)=>{const N=a==null?void 0:a.reduce((i,A)=>i+Number(A.total_tax),0);return e.jsx(Ia,{title:`${f}-(${N})`,buttonTitle:"View",children:e.jsx("div",{className:"h-96",children:e.jsxs(we,{children:[e.jsx(Ae,{children:e.jsxs(q,{children:[e.jsx(h,{children:"Demand from"}),e.jsx(h,{children:"Demand upto"}),e.jsx(h,{children:"Amount"}),e.jsx(h,{children:"Status"})]})}),e.jsx(De,{children:a==null?void 0:a.map((i,A)=>e.jsxs(q,{children:[e.jsx(u,{children:D(i.payment_from,"DD-MM-YYYY").format("DD-MMM-YYYY")}),e.jsx(u,{children:D(i.payment_to,"DD-MM-YYYY").format("DD-MMM-YYYY")}),e.jsx(u,{children:i.total_tax}),e.jsx(u,{children:i.paid_status=="0"?e.jsx("span",{className:"text-red-500",children:"Unpaid"}):e.jsx("span",{className:"text-green-500",children:"Paid"})})]},A+1))})]})})})};return d!=null&&d.isLoading?e.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:e.jsx(M,{children:e.jsxs(R,{children:[e.jsx(Y,{}),e.jsx(Y,{}),e.jsx(Y,{})]})})}):e.jsxs(pa,{title:"Apartment Payment",children:[s&&e.jsx(ha,{}),e.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[e.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[e.jsx(sa,{src:"/assets/image/apartment.png",alt:"Add Consumer",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:" font-semibold",children:"Apartment Payment"}),e.jsx("p",{className:"text-xs text-gray-500",children:"Solid waste management reminder list."})]})]}),e.jsx(C,{}),e.jsx(M,{children:e.jsx(R,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-3 py-6",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Apartment code:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(P=(S=d==null?void 0:d.data)==null?void 0:S.data[0])==null?void 0:P.apartmentCode})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Apartment Name:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(E=(U=d==null?void 0:d.data)==null?void 0:U.data[0])==null?void 0:E.apartmentName})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Mobile no:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(I=(T=d==null?void 0:d.data)==null?void 0:T.data[0])==null?void 0:I.mobileNo})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Monthly Demand/Rate:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(k=d==null?void 0:d.data)==null?void 0:k.totalAptMonthlyDemand})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Outstanding Demand:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(O=d==null?void 0:d.data)==null?void 0:O.totalAptDemand})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Total flats:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(F=(L=d==null?void 0:d.data)==null?void 0:L.data)==null?void 0:F.length})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Address:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(z=(B=d==null?void 0:d.data)==null?void 0:B.data[0])==null?void 0:z.address})})]})})}),e.jsx(C,{}),((H=d==null?void 0:d.data)==null?void 0:H.totalAptDemand)>0?e.jsxs(ma.Fragment,{children:[e.jsx(M,{children:e.jsx(R,{children:e.jsxs("div",{className:"py-6",children:[e.jsx("div",{className:"px-4 mb-2",children:e.jsx("h1",{className:"text-xs font-semibold",children:"Demand Detail"})}),e.jsx(C,{}),e.jsx("div",{children:e.jsxs(we,{children:[e.jsx(Ae,{children:e.jsxs(q,{children:[e.jsx(h,{children:"Consumer"}),e.jsx(h,{children:"Demand from"}),e.jsx(h,{children:"Demand upto"}),e.jsx(h,{children:"Amount"}),e.jsx(h,{children:"Status"}),e.jsx(h,{children:"Action"})]})}),e.jsx(De,{children:(Q=(W=(V=d==null?void 0:d.data)==null?void 0:V.data)==null?void 0:W.filter(a=>a.paidStatus!=="Paid"))==null?void 0:Q.map((a,f)=>e.jsxs(q,{children:[e.jsx(u,{children:a.consumerName}),e.jsx(u,{children:D(a.demandFrom,"DD-MM-YYYY").format("DD-MMM-YYYY")}),e.jsx(u,{children:D(a.demandUpto,"DD-MM-YYYY").format("DD-MMM-YYYY")}),e.jsx(u,{children:a.totaldemand}),e.jsx(u,{children:a.paidStatus=="Unpaid"?e.jsx("span",{className:"text-red-500",children:"Unpaid"}):e.jsx("span",{className:"text-green-500",children:"Paid"})}),e.jsx(u,{children:Fe(a==null?void 0:a.activeDemandDetails,a.consumerName)})]},f+1))})]})})]})})}),e.jsx(C,{}),e.jsx(M,{"x-chunk":"dashboard-05-chunk-4",children:e.jsx(R,{children:e.jsxs(na,{methods:p,onSubmit:p.handleSubmit(_),children:[e.jsxs("div",{className:"grid gap-6",children:[e.jsx("div",{children:e.jsx(ye,{isRequired:!0,name:"paidUpto",label:"Payment Upto Month",className:"w-full",data:((K=(J=(G=w==null?void 0:w.data)==null?void 0:G.data)==null?void 0:J.demand)==null?void 0:K.map(a=>({label:String(a.payment_to),value:String(a.payment_to)})))??[]})}),e.jsx("div",{children:e.jsx(ye,{isRequired:!0,name:"paymentMode",label:"Payment Mode",className:"w-full",data:[{label:"Cash",value:"Cash"},{label:"Cheque",value:"Cheque"},{label:"DD",value:"Dd"},{label:"Card",value:"Card"},{label:"QR",value:"QR"}]})}),{Cheque:e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx($,{isRequired:!0,name:"bankName",label:"Bank Name",className:"w-full"})}),e.jsx("div",{children:e.jsx($,{isRequired:!0,name:"branchName",label:"Branch Name",className:"w-full"})}),e.jsx("div",{children:e.jsx($,{isRequired:!0,name:"chequeNo",label:"Cheque Number",className:"w-full"})}),e.jsx("div",{children:e.jsx($,{isRequired:!0,type:"date",min:D().format("YYYY-MM-DD"),name:"chequeDate",label:"Cheque Date",className:"w-full"})})]}),Dd:e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx($,{isRequired:!0,name:"bankName",label:"Bank Name",className:"w-full"})}),e.jsx("div",{children:e.jsx($,{isRequired:!0,name:"branchName",label:"Branch Name",className:"w-full"})}),e.jsx("div",{children:e.jsx($,{isRequired:!0,name:"chequeNo",label:"DD Number",className:"w-full"})}),e.jsx("div",{children:e.jsx($,{isRequired:!0,name:"chequeDate",min:D().format("YYYY-MM-DD"),type:"date",label:"DD Date",className:"w-full"})})]})}[p.watch("paymentMode")]]}),e.jsx("div",{className:"grid grid-cols-1 gap-6 mt-4",children:e.jsxs(qe,{type:"submit",className:"mx-auto",disabled:m.isLoading||w.isLoading,children:[e.jsx(xa,{className:"mr-2 h-4 w-4"}),m!=null&&m.isLoading?"Calculating...":`Pay Now ₹ ${((X=m.data)==null?void 0:X.data.totaldemand)??0}`]})})]})})})]}):e.jsx(M,{children:e.jsx(R,{children:e.jsx("div",{className:"py-2 flex justify-center items-center mt-4",children:e.jsx("h1",{className:"text-base font-semibold text-center text-green-600",children:"You have no outstanding demand"})})})})]})]})}export{at as default};
