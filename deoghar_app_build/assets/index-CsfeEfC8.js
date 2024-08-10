import{h as w,g as C,e as v,j as s,I as G}from"./index-UFBjW-l8.js";import{h as S,r as L}from"./router-CTqkcgir.js";import{P}from"./index-DjcmfKoK.js";import{C as y,b as u}from"./card-B9Snk98R.js";import{S as A}from"./separator-C9vPwRpg.js";import{S as i}from"./SkeletonLoader-DyzsHgmv.js";import{V as R}from"./index-DnxMxdZJ.js";import{R as V}from"./index-C8QBGun7.js";import"./headlessui-BV7w-sRG.js";import"./axios-DmypytPv.js";function J(){var r,n,o,l,x,c,m,h,p,j,g,f,N,b;const{id:t}=S(),[I,d]=L.useState(!1),e=w({api:`${v.getApartmentDetailsById}/${t}`,options:{enabled:!!t}}),a=C({api:`${v.getGeoLocation}`,config:{apartmentId:t},options:{enabled:!!((n=(r=e==null?void 0:e.data)==null?void 0:r.data[0])!=null&&n.id)}});return e!=null&&e.isLoading?s.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:s.jsx(y,{children:s.jsxs(u,{children:[s.jsx(i,{}),s.jsx(i,{}),s.jsx(i,{})]})})}):s.jsxs(P,{title:"GeoMap",children:[s.jsx(V,{slides:[{src:((l=(o=a==null?void 0:a.data)==null?void 0:o.data)==null?void 0:l.photo)??"",title:"Geo Tagging Image"}],open:I,close:()=>d(!1)}),s.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[s.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[s.jsx(G,{src:"/assets/image/category.png",alt:"GeoMap",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),s.jsxs("div",{className:"",children:[s.jsx("h1",{className:"font-semibold",children:"GeoMap"}),s.jsx("p",{className:"text-xs text-gray-500",children:"Solid west management system"})]})]}),s.jsx(A,{}),s.jsx(y,{children:s.jsxs(u,{children:[s.jsxs("div",{className:"grid grid-cols-2 gap-3 py-6",children:[s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Apartment code:"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:(c=(x=e==null?void 0:e.data)==null?void 0:x.data[0])==null?void 0:c.apartmentCode})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Apartment Name:"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:(h=(m=e==null?void 0:e.data)==null?void 0:m.data[0])==null?void 0:h.apartmentName})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs font-semibold",children:"Mobile no:"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-xs",children:(j=(p=e==null?void 0:e.data)==null?void 0:p.data[0])==null?void 0:j.mobileNo})})]}),s.jsx("div",{className:"flex justify-center items-center",children:s.jsx("button",{onClick:()=>d(!0),type:"button",className:"text-blue-600 text-sm font-bold",children:"View Geo Tagging Image"})})]})}),s.jsx(A,{}),s.jsx(R,{lat:(f=(g=a==null?void 0:a.data)==null?void 0:g.data)==null?void 0:f.latitude,lng:(b=(N=a==null?void 0:a.data)==null?void 0:N.data)==null?void 0:b.longitude,height:"500px"})]})]})}export{J as default};
