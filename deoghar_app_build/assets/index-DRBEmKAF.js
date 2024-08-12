import{l as Ge,m as Ye,n as Je,o as j,p as Se,q as Ke,r as Xe,s as Ze,t as ea,v as aa,w as ta,x as Pe,y as sa,z as da,A as ra,j as e,D,G as Ue,B as Ee,u as oa,H as na,h as ca,g as Ae,e as y,I as la,C as ia,k as we,F as De,_ as _e}from"./index-CFEcPPam.js";import{h as w}from"./moment-BjLXg0w5.js";import{u as ma,o as xa,F as pa,S as Me,c as ha,a as p}from"./SelectField-D_AZBRzD.js";import{R as $}from"./RHFTextField-Br2DcHct.js";import{r as n,d as fa,h as ua,R as ja}from"./router-CTqkcgir.js";import{P as ba}from"./index-BOVhejvd.js";import{C as M,b as R}from"./card-BNt_tNx1.js";import{T as Re,a as qe,b as q,c as h,d as Ce,e as f,H as ga}from"./table-D8xQvTjs.js";import{S as C}from"./separator-DiOkaWo3.js";import{S as Y}from"./SkeletonLoader-DaoLwrOR.js";import{O as $a}from"./OverLayLoader-DVfFTbyR.js";import"./headlessui-BV7w-sRG.js";import"./axios-DmypytPv.js";import"./module-C5MiFBOp.js";const Na="AlertDialog",[ya,ot]=Ge(Na,[Ye]),b=Ye(),va=s=>{const{__scopeAlertDialog:r,...d}=s,l=b(r);return n.createElement(da,j({},l,d,{modal:!0}))},Aa=n.forwardRef((s,r)=>{const{__scopeAlertDialog:d,...l}=s,o=b(d);return n.createElement(ra,j({},o,l,{ref:r}))}),wa=s=>{const{__scopeAlertDialog:r,...d}=s,l=b(r);return n.createElement(sa,j({},l,d))},Da=n.forwardRef((s,r)=>{const{__scopeAlertDialog:d,...l}=s,o=b(d);return n.createElement(Je,j({},o,l,{ref:r}))}),Te="AlertDialogContent",[_a,Ma]=ya(Te),Ra=n.forwardRef((s,r)=>{const{__scopeAlertDialog:d,children:l,...o}=s,a=b(d),x=n.useRef(null),v=Se(r,x),m=n.useRef(null);return n.createElement(Ke,{contentName:Te,titleName:qa,docsSlug:"alert-dialog"},n.createElement(_a,{scope:d,cancelRef:m},n.createElement(Xe,j({role:"alertdialog"},a,o,{ref:v,onOpenAutoFocus:Ze(o.onOpenAutoFocus,g=>{var _;g.preventDefault(),(_=m.current)===null||_===void 0||_.focus({preventScroll:!0})}),onPointerDownOutside:g=>g.preventDefault(),onInteractOutside:g=>g.preventDefault()}),n.createElement(ea,null,l),!1)))}),qa="AlertDialogTitle",Ca=n.forwardRef((s,r)=>{const{__scopeAlertDialog:d,...l}=s,o=b(d);return n.createElement(aa,j({},o,l,{ref:r}))}),Ya=n.forwardRef((s,r)=>{const{__scopeAlertDialog:d,...l}=s,o=b(d);return n.createElement(ta,j({},o,l,{ref:r}))}),Sa=n.forwardRef((s,r)=>{const{__scopeAlertDialog:d,...l}=s,o=b(d);return n.createElement(Pe,j({},o,l,{ref:r}))}),Pa="AlertDialogCancel",Ua=n.forwardRef((s,r)=>{const{__scopeAlertDialog:d,...l}=s,{cancelRef:o}=Ma(Pa,d),a=b(d),x=Se(r,o);return n.createElement(Pe,j({},a,l,{ref:x}))}),Ea=va,Ta=Aa,Ia=wa,Ie=Da,ke=Ra,Oe=Sa,Fe=Ua,Le=Ca,Be=Ya,ka=Ea,Oa=Ta,Fa=Ia,ze=n.forwardRef(({className:s,...r},d)=>e.jsx(Ie,{className:D("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",s),...r,ref:d}));ze.displayName=Ie.displayName;const He=n.forwardRef(({className:s,...r},d)=>e.jsxs(Fa,{children:[e.jsx(ze,{}),e.jsx(ke,{ref:d,className:D("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",s),...r})]}));He.displayName=ke.displayName;const Ve=n.forwardRef(({className:s,...r},d)=>e.jsx(Le,{ref:d,className:D("text-lg font-semibold",s),...r}));Ve.displayName=Le.displayName;const La=n.forwardRef(({className:s,...r},d)=>e.jsx(Be,{ref:d,className:D("text-sm text-muted-foreground",s),...r}));La.displayName=Be.displayName;const Ba=n.forwardRef(({className:s,...r},d)=>e.jsx(Oe,{ref:d,className:D(Ue(),s),...r}));Ba.displayName=Oe.displayName;const We=n.forwardRef(({className:s,...r},d)=>e.jsx(Fe,{ref:d,className:D(Ue({variant:"outline"}),"mt-2 sm:mt-0",s),...r}));We.displayName=Fe.displayName;function za({children:s,buttonTitle:r,title:d}){return e.jsxs(ka,{children:[e.jsx(Oa,{asChild:!0,children:e.jsx(Ee,{variant:"outline",size:"sm",children:r??"Open"})}),e.jsxs(He,{className:"rounded-lg w-[95%] p-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(Ve,{children:d??"Alert Dialog Title"}),e.jsx(We,{className:"w-8 h-8 px-2 rounded-lg hover:bg-gray-200",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M10 8.586l3.293-3.293 1.414 1.414L11.414 10l3.293 3.293-1.414 1.414L10 11.414l-3.293 3.293-1.414-1.414L8.586 10 5.293 6.707l1.414-1.414L10 8.586z",clipRule:"evenodd"})})})]}),e.jsx("div",{className:"py-2 overflow-scroll",children:s})]})]})}const Ha=ha().shape({paymentMode:p().required("Payment mode is required"),paidUpto:p().required("Payment amount is required"),bankName:p().when("paymentMode",{is:s=>s=="Cheque"||s=="Dd",then:()=>p().required("Bank name is required")}),branchName:p().when("paymentMode",{is:s=>s=="Cheque"||s=="Dd",then:()=>p().required("Branch name is required")}),chequeDate:p().when("paymentMode",{is:s=>s=="Cheque"||s=="Dd",then:()=>p().required("Cheque/DD date is required")}),chequeNo:p().when("paymentMode",{is:s=>s=="Cheque"||s=="Dd",then:()=>p().required("Cheque/DD number is required")})});function nt(){var S,P,U,E,T,I,k,O,F,L,B,z,H,V,W,Q,G,J,K,X,Z,ee,ae,te,se,de;const s=fa(),{mutateAsync:r,isPending:d}=oa({}),{createGeoLocation:l}=na(),{id:o}=ua(),a=ca({api:`${y.getApartmentDetailsById}/${o}`,options:{enabled:!!o}}),x=ma({resolver:xa(Ha)}),v=Ae({api:y.getPaymentData,config:{apartmentId:o},options:{enabled:!!o}}),m=Ae({api:y.getCalculatedAmount,config:{apartmentId:o,payUpto:x.watch("paidUpto")},value:[x.watch("paidUpto")],options:{enabled:!!x.watch("paidUpto")&&!!o}}),g=async()=>{var t,u,N;try{const i=await r({api:y.generateOrder,data:{amount:(u=(t=m.data)==null?void 0:t.data)==null?void 0:u.totaldemand,consumerId:o,consumerType:"apartment"}});return(N=i==null?void 0:i.data)!=null&&N.status,i}catch(i){return i}},_=async t=>{ia("Are you sure to pay?","Please confirm",async()=>{var u,N,i,A,re,oe,ne,ce,le,ie,me,xe,pe,he,fe,ue,je,be,ge,$e,Ne,ye,ve;try{if((t==null?void 0:t.paymentMode)=="Card"){if(window.ReactNativeWebView){const c=await g();(u=c==null?void 0:c.data)!=null&&u.status&&window.ReactNativeWebView.postMessage(JSON.stringify({Key:"DO_SALE",keyData:{amount:(i=(N=m.data)==null?void 0:N.data)==null?void 0:i.totaldemand,apartmentId:o,paidUpto:t.paidUpto,paymentMode:t.paymentMode,api:we+y.addOrder,token:localStorage.getItem("token"),tranId:(re=(A=c.data)==null?void 0:A.data)==null?void 0:re.order_id,redirectUrl:De+"/deoghar-app/payment-receipt",payload:{amount:(ne=(oe=m.data)==null?void 0:oe.data)==null?void 0:ne.totaldemand,consumerId:o,consumerType:"apartment",orderId:(le=(ce=c.data)==null?void 0:ce.data)==null?void 0:le.order_id,payUpto:t.paidUpto}}}))}return}if((t==null?void 0:t.paymentMode)=="QR"){if(window.ReactNativeWebView){const c=await g();(ie=c==null?void 0:c.data)!=null&&ie.status&&window.ReactNativeWebView.postMessage(JSON.stringify({Key:"DO_SALE_WITH_QR",keyData:{amount:(xe=(me=m.data)==null?void 0:me.data)==null?void 0:xe.totaldemand,apartmentId:o,paidUpto:t.paidUpto,paymentMode:t.paymentMode,api:we+y.addOrder,token:localStorage.getItem("token"),redirectUrl:De+"/deoghar-app/payment-receipt",payload:{amount:(he=(pe=m.data)==null?void 0:pe.data)==null?void 0:he.totaldemand,consumerId:o,consumerType:"apartment",orderId:(ue=(fe=c.data)==null?void 0:fe.data)==null?void 0:ue.order_id,payUpto:t.paidUpto}}}))}return}else{const c=await r({api:y.apartmentPayment,data:t.paymentMode==="Cash"?{apartmentId:o,paidAmount:(je=m.data)==null?void 0:je.data.totaldemand,paymentMode:t.paymentMode,paidUpto:t.paidUpto}:{apartmentId:o,paidAmount:(be=m.data)==null?void 0:be.data.totaldemand,paymentMode:t.paymentMode,paidUpto:t.paidUpto,bankName:t.bankName,branchName:t.branchName,chequeNo:t.chequeNo,chequeDate:t.chequeDate}});(ge=c==null?void 0:c.data)!=null&&ge.status?(_e.success(($e=c==null?void 0:c.data)==null?void 0:$e.msg),s(`/deoghar-app/payment-receipt/${(ye=(Ne=c==null?void 0:c.data)==null?void 0:Ne.data)==null?void 0:ye.transactionNo}`,{replace:!0})):_e.error((ve=c==null?void 0:c.data)==null?void 0:ve.msg)}await l()}catch{}})},Qe=(t,u)=>{const N=t==null?void 0:t.reduce((i,A)=>i+Number(A.total_tax),0);return e.jsx(za,{title:`${u}-(${N})`,buttonTitle:"View",children:e.jsx("div",{className:"h-96",children:e.jsxs(Re,{children:[e.jsx(qe,{children:e.jsxs(q,{children:[e.jsx(h,{children:"Demand from"}),e.jsx(h,{children:"Demand upto"}),e.jsx(h,{children:"Amount"}),e.jsx(h,{children:"Status"})]})}),e.jsx(Ce,{children:t==null?void 0:t.map((i,A)=>e.jsxs(q,{children:[e.jsx(f,{children:w(i.payment_from,"DD-MM-YYYY").format("DD-MMM-YYYY")}),e.jsx(f,{children:w(i.payment_to,"DD-MM-YYYY").format("DD-MMM-YYYY")}),e.jsx(f,{children:i.total_tax}),e.jsx(f,{children:i.paid_status=="0"?e.jsx("span",{className:"text-red-500",children:"Unpaid"}):e.jsx("span",{className:"text-green-500",children:"Paid"})})]},A+1))})]})})})};return a!=null&&a.isLoading?e.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:e.jsx(M,{children:e.jsxs(R,{children:[e.jsx(Y,{}),e.jsx(Y,{}),e.jsx(Y,{})]})})}):e.jsxs(ba,{title:"Apartment Payment",children:[d&&e.jsx($a,{}),e.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[e.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[e.jsx(la,{src:"/assets/image/apartment.png",alt:"Add Consumer",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:" font-semibold",children:"Apartment Payment"}),e.jsx("p",{className:"text-xs text-gray-500",children:"Solid waste management reminder list."})]})]}),e.jsx(C,{}),e.jsx(M,{children:e.jsx(R,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-3 py-6",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Apartment code:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(P=(S=a==null?void 0:a.data)==null?void 0:S.data[0])==null?void 0:P.apartmentCode})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Apartment Name:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(E=(U=a==null?void 0:a.data)==null?void 0:U.data[0])==null?void 0:E.apartmentName})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Mobile no:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(I=(T=a==null?void 0:a.data)==null?void 0:T.data[0])==null?void 0:I.mobileNo})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Monthly Demand/Rate:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(k=a==null?void 0:a.data)==null?void 0:k.totalAptMonthlyDemand})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Outstanding Demand:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(O=a==null?void 0:a.data)==null?void 0:O.totalAptDemand})}),((F=a==null?void 0:a.data)==null?void 0:F.totalAptDemand)>0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Demand from:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(B=(L=a==null?void 0:a.data)==null?void 0:L.data[0])==null?void 0:B.demandFrom})})]}),((z=a==null?void 0:a.data)==null?void 0:z.totalAptDemand)>0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Demand upto:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(V=(H=a==null?void 0:a.data)==null?void 0:H.data[0])==null?void 0:V.demandUpto})})]}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Total flats:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(Q=(W=a==null?void 0:a.data)==null?void 0:W.data)==null?void 0:Q.length})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Address:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(J=(G=a==null?void 0:a.data)==null?void 0:G.data[0])==null?void 0:J.address})})]})})}),e.jsx(C,{}),((K=a==null?void 0:a.data)==null?void 0:K.totalAptDemand)>0?e.jsxs(ja.Fragment,{children:[e.jsx(M,{children:e.jsx(R,{children:e.jsxs("div",{className:"py-6",children:[e.jsx("div",{className:"px-4 mb-2",children:e.jsx("h1",{className:"text-xs font-semibold",children:"Demand Detail"})}),e.jsx(C,{}),e.jsx("div",{children:e.jsxs(Re,{children:[e.jsx(qe,{children:e.jsxs(q,{children:[e.jsx(h,{children:"Consumer"}),e.jsx(h,{children:"Demand from"}),e.jsx(h,{children:"Demand upto"}),e.jsx(h,{children:"Amount"}),e.jsx(h,{children:"Status"}),e.jsx(h,{children:"Action"})]})}),e.jsx(Ce,{children:(ee=(Z=(X=a==null?void 0:a.data)==null?void 0:X.data)==null?void 0:Z.filter(t=>t.paidStatus!=="Paid"))==null?void 0:ee.map((t,u)=>e.jsxs(q,{children:[e.jsx(f,{children:t.consumerName}),e.jsx(f,{children:w(t.demandFrom,"DD-MM-YYYY").format("DD-MMM-YYYY")}),e.jsx(f,{children:w(t.demandUpto,"DD-MM-YYYY").format("DD-MMM-YYYY")}),e.jsx(f,{children:t.totaldemand}),e.jsx(f,{children:t.paidStatus=="Unpaid"?e.jsx("span",{className:"text-red-500",children:"Unpaid"}):e.jsx("span",{className:"text-green-500",children:"Paid"})}),e.jsx(f,{children:Qe(t==null?void 0:t.activeDemandDetails,t.consumerName)})]},u+1))})]})})]})})}),e.jsx(C,{}),e.jsx(M,{"x-chunk":"dashboard-05-chunk-4",children:e.jsx(R,{children:e.jsxs(pa,{methods:x,onSubmit:x.handleSubmit(_),children:[e.jsxs("div",{className:"grid gap-6",children:[e.jsx("div",{children:e.jsx(Me,{isRequired:!0,name:"paidUpto",label:"Payment Upto Month",className:"w-full",data:((se=(te=(ae=v==null?void 0:v.data)==null?void 0:ae.data)==null?void 0:te.demand)==null?void 0:se.map(t=>({label:String(t.payment_to),value:String(t.payment_to)})))??[]})}),e.jsx("div",{children:e.jsx(Me,{isRequired:!0,name:"paymentMode",label:"Payment Mode",className:"w-full",data:[{label:"Cash",value:"Cash"},{label:"Cheque",value:"Cheque"},{label:"DD",value:"Dd"},{label:"Card",value:"Card"},{label:"QR",value:"QR"}]})}),{Cheque:e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx($,{isRequired:!0,name:"bankName",label:"Bank Name",className:"w-full"})}),e.jsx("div",{children:e.jsx($,{isRequired:!0,name:"branchName",label:"Branch Name",className:"w-full"})}),e.jsx("div",{children:e.jsx($,{isRequired:!0,name:"chequeNo",label:"Cheque Number",className:"w-full"})}),e.jsx("div",{children:e.jsx($,{isRequired:!0,type:"date",min:w().format("YYYY-MM-DD"),name:"chequeDate",label:"Cheque Date",className:"w-full"})})]}),Dd:e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx($,{isRequired:!0,name:"bankName",label:"Bank Name",className:"w-full"})}),e.jsx("div",{children:e.jsx($,{isRequired:!0,name:"branchName",label:"Branch Name",className:"w-full"})}),e.jsx("div",{children:e.jsx($,{isRequired:!0,name:"chequeNo",label:"DD Number",className:"w-full"})}),e.jsx("div",{children:e.jsx($,{isRequired:!0,name:"chequeDate",min:w().format("YYYY-MM-DD"),type:"date",label:"DD Date",className:"w-full"})})]})}[x.watch("paymentMode")]]}),e.jsx("div",{className:"grid grid-cols-1 gap-6 mt-4",children:e.jsxs(Ee,{type:"submit",className:"mx-auto",disabled:m.isLoading||v.isLoading,children:[e.jsx(ga,{className:"mr-2 h-4 w-4"}),m!=null&&m.isLoading?"Calculating...":`Pay Now ₹ ${((de=m.data)==null?void 0:de.data.totaldemand)??0}`]})})]})})})]}):e.jsx(M,{children:e.jsx(R,{children:e.jsx("div",{className:"py-2 flex justify-center items-center mt-4",children:e.jsx("h1",{className:"text-base font-semibold text-center text-green-600",children:"You have no outstanding demand"})})})})]})]})}export{nt as default};
