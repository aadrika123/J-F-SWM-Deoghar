System.register(["./index-legacy-BeMG4HbH.js","./index-legacy-B1JxPvtC.js","./router-legacy-BWed7M0P.js","./separator-legacy-CqoVRYEt.js","./headlessui-legacy-BlMjWznQ.js","./axios-legacy-COJRtORB.js"],(function(e,s){"use strict";var t,a,i,d,l,r,n,c,o;return{setters:[function(e){t=e.g,a=e.e,i=e.j,d=e.I,l=e.B},function(e){r=e.P},function(e){n=e.i,c=e.L},function(e){o=e.S},null,null],execute:function(){e("default",(function(){var e,s=n().id,m=t({api:"".concat(a.getRouteDataById),config:{routeId:s},options:{enabled:!!s}});return i.jsx(r,{title:"Route List Details",children:i.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[i.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[i.jsx(d,{src:"/assets/image/category.png",alt:"Route List Details",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),i.jsxs("div",{className:"",children:[i.jsx("h1",{className:"font-semibold",children:"Route List Details"}),i.jsx("p",{className:"text-xs text-gray-500",children:"Solid west management system"})]})]}),i.jsx(o,{}),i.jsx("div",{className:"grid grid-cols-1 gap-4",children:null===(e=m.data)||void 0===e?void 0:e.data.map((function(e){return i.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:i.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"Consumer Name :"}),i.jsx("div",{className:"text-sm font-semibold text-gray-500 w-30 truncate",children:e.consumerName})]}),i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"Ward No :"}),i.jsx("div",{className:"text-sm font-semibold text-gray-500",children:e.wardNo})]}),i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"Category :"}),i.jsx("div",{className:"text-sm font-semibold text-gray-500",children:e.cansumerCategory})]}),i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"Type :"}),i.jsx("div",{className:"text-sm font-semibold text-gray-500",children:e.cansumerType})]}),i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"Paid Status :"}),i.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"Paid"===e.paidStatus?i.jsx("span",{className:"px-2 py-1 text-xs font-semibold flex justify-start items-center border border-green-500 text-green-500 rounded-lg",children:e.paidStatus}):i.jsx("span",{className:"px-2 py-1 text-xs font-semibold flex justify-start items-center border border-red-500 text-red-500 rounded-lg",children:e.paidStatus})})]}),i.jsx(o,{}),"Unpaid"===e.paidStatus&&i.jsx("div",{className:"col-span-1 w-full",children:i.jsx(c,{to:"".concat(""==e.apartmentCode?"/deoghar-app/consumer-payment/".concat(e.id):"/deoghar-app/apartment-payment/".concat(e.id)),children:i.jsx(l,{variant:"outline",className:"w-full rounded-lg ",size:"sm",children:i.jsx("h1",{className:"text-xs font-semibold text-gray-600",children:"PAY"})})})})]})},e.id)}))})]})})}))}}}));
