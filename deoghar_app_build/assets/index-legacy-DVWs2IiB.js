!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var r,n={},a=Object.prototype,o=a.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},s="function"==typeof Symbol?Symbol:{},l=s.iterator||"@@iterator",c=s.asyncIterator||"@@asyncIterator",u=s.toStringTag||"@@toStringTag";function d(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(r){d=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var a=e&&e.prototype instanceof g?e:g,o=Object.create(a.prototype),s=new P(n||[]);return i(o,"_invoke",{value:E(t,r,s)}),o}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=h;var m="suspendedStart",y="suspendedYield",p="executing",v="completed",x={};function g(){}function j(){}function b(){}var w={};d(w,l,(function(){return this}));var N=Object.getPrototypeOf,L=N&&N(N(F([])));L&&L!==a&&o.call(L,l)&&(w=L);var T=b.prototype=g.prototype=Object.create(w);function S(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function D(e,r){function n(a,i,s,l){var c=f(e[a],e,i);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==t(d)&&o.call(d,"__await")?r.resolve(d.__await).then((function(t){n("next",t,s,l)}),(function(t){n("throw",t,s,l)})):r.resolve(d).then((function(t){u.value=t,s(u)}),(function(t){return n("throw",t,s,l)}))}l(c.arg)}var a;i(this,"_invoke",{value:function(t,e){function o(){return new r((function(r,a){n(t,e,r,a)}))}return a=a?a.then(o,o):o()}})}function E(t,e,n){var a=m;return function(o,i){if(a===p)throw Error("Generator is already running");if(a===v){if("throw"===o)throw i;return{value:r,done:!0}}for(n.method=o,n.arg=i;;){var s=n.delegate;if(s){var l=C(s,n);if(l){if(l===x)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===m)throw a=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=p;var c=f(t,e,n);if("normal"===c.type){if(a=n.done?v:y,c.arg===x)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(a=v,n.method="throw",n.arg=c.arg)}}}function C(t,e){var n=e.method,a=t.iterator[n];if(a===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,C(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),x;var o=f(a,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,x;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,x):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,x)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function F(e){if(e||""===e){var n=e[l];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function t(){for(;++a<e.length;)if(o.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=r,t.done=!0,t};return i.next=i}}throw new TypeError(t(e)+" is not iterable")}return j.prototype=b,i(T,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:j,configurable:!0}),j.displayName=d(b,u,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===j||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,d(t,u,"GeneratorFunction")),t.prototype=Object.create(T),t},n.awrap=function(t){return{__await:t}},S(D.prototype),d(D.prototype,c,(function(){return this})),n.AsyncIterator=D,n.async=function(t,e,r,a,o){void 0===o&&(o=Promise);var i=new D(h(t,e,r,a),o);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},S(T),d(T,u,"Generator"),d(T,l,(function(){return this})),d(T,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=F,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,a){return s.type="throw",s.arg=t,e.next=n,a&&(e.method="next",e.arg=r),!!a}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var l=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,x):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),x},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),x}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:F(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),x}},n}function r(t,e,r,n,a,o,i){try{var s=t[o](i),l=s.value}catch(t){return void r(t)}s.done?e(l):Promise.resolve(l).then(n,a)}function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,a,o,i,s=[],l=!0,c=!1;try{if(o=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=o.call(r)).done)&&(s.push(n.value),s.length!==e);l=!0);}catch(t){c=!0,a=t}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw a}}return s}}(t,e)||function(t,e){if(t){if("string"==typeof t)return a(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}System.register(["./index-legacy-D_qsdVeQ.js","./router-legacy-DXU_NOBA.js","./card-legacy-DKwMwXOO.js","./index-legacy-AFyER7dj.js","./index-legacy-ClJS1nJ_.js","./moment-legacy-D_pKkeqh.js","./switch-legacy-DGjKCe4R.js","./RHFTextField-legacy-BB43MshU.js","./SelectField-legacy-4bSQ8aNE.js","./useComonData-legacy-Dekupe_L.js","./separator-legacy-DJE9qL8j.js","./headlessui-legacy-nvVeYWxe.js","./axios-legacy-COJRtORB.js"],(function(t,a){"use strict";var o,i,s,l,c,u,d,h,f,m,y,p,v,x,g,j,b,w,N,L,T,S,D;return{setters:[function(t){o=t.j,i=t.a,s=t.g,l=t.e,c=t.I,u=t.B},function(t){d=t.L,h=t.r},function(t){f=t.C,m=t.b},function(t){y=t.P},function(t){p=t.P},function(t){v=t.h},function(t){x=t.u,g=t.o,j=t.F,b=t.c,w=t.a,N=t.g},function(t){L=t.R},function(t){T=t.R},function(t){S=t.c},function(t){D=t.S},null,null],execute:function(){function a(t){var e,r,n=t.collectionData;return null!=n&&n.isFetching?o.jsx(o.Fragment,{children:Array.from({length:10}).map((function(t,e){return o.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:o.jsx("div",{className:"animate-pulse flex space-x-4",children:o.jsxs("div",{className:"flex-1 space-y-4 py-1",children:[o.jsx("div",{className:"h-4 bg-gray-200 rounded w-3/4"}),o.jsxs("div",{className:"space-y-2",children:[o.jsx("div",{className:"h-4 bg-gray-200 rounded"}),o.jsx("div",{className:"h-4 bg-gray-200 rounded w-5/6"})]})]})})},e+1)}))}):o.jsx("div",{children:"success"===n.status&&(null==n||null===(e=n.data)||void 0===e||null===(e=e.data)||void 0===e||null===(e=e.details)||void 0===e||null===(e=e.transactions)||void 0===e?void 0:e.length)>0?null===(r=n.data.data)||void 0===r||null===(r=r.details)||void 0===r?void 0:r.transactions.map((function(t,e){return o.jsxs("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm mt-4",children:[o.jsxs("div",{className:"grid grid-cols-2 gap-4 justify-center items-center",children:[o.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"Consumer no/APT no :"}),o.jsx("div",{className:"text-sm font-semibold text-gray-500 w-30 truncate",children:null!=t&&t.apartmentCode?null==t?void 0:t.apartmentCode:null==t?void 0:t.consumerNo}),o.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"Consumer Name / APT Name :"}),o.jsx("div",{className:"text-sm font-semibold text-gray-500",children:null!=t&&t.apartmentName?null==t?void 0:t.apartmentName:null==t?void 0:t.consumerName}),o.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"Ward :"}),o.jsx("div",{className:"text-sm font-semibold text-gray-500",children:t.wardNo}),o.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"Amount :"}),o.jsx("div",{className:"text-sm font-semibold text-gray-500",children:t.amount}),o.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"Mode :"}),o.jsx("div",{className:"text-sm font-semibold text-gray-500",children:t.transactionMode}),o.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"Payment from :"}),o.jsx("div",{className:"text-sm font-semibold text-gray-500",children:t.demandFrom}),o.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"Payment upto :"}),o.jsx("div",{className:"text-sm font-semibold text-gray-500",children:t.demandUpto})]}),o.jsx("div",{className:"flex justify-end mt-4",children:o.jsx(d,{to:"/deoghar-app/payment-receipt/".concat(null==t?void 0:t.transactionNo),className:"text-sm text-blue-500",children:"View Receipt"})})]},e+1)})):o.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:o.jsx("div",{className:"flex items-center justify-center",children:o.jsx("div",{className:"text-sm font-semibold text-gray-500",children:"No Data Found"})})})})}t("default",(function(){var t,d,b,w,N,C,I=i().user,O=S().getTcList,P=n(h.useState(1),2),F=P[0],_=P[1],A=n(h.useState(10),2),k=A[0],Y=A[1],M=x({resolver:g(E),defaultValues:{fromDate:v().format("YYYY-MM-DD"),toDate:v().format("YYYY-MM-DD"),tcId:"",consumerCategory:"",consumerType:"",buildingType:"",mode:"",wardNo:null,reportType:"dailyCollection",userId:null==I?void 0:I.id}}),R=s({api:l.getReportData,config:{fromDate:M.watch("fromDate"),toDate:M.watch("toDate"),tcId:5==(null==I?void 0:I.userTypeId)||""!=M.watch("tcId")?M.watch("tcId"):"",consumerCategory:M.watch("consumerCategory"),consumerType:M.watch("consumerType"),buildingType:M.watch("buildingType"),mode:M.watch("mode"),wardNo:M.watch("wardNo"),reportType:M.watch("reportType"),userId:M.watch("userId")},options:{enabled:!0}}),G=function(){var t,n=(t=e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:_(1),Y(10),R.refetch();case 3:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(a,o){var i=t.apply(e,n);function s(t){r(i,a,o,s,l,"next",t)}function l(t){r(i,a,o,s,l,"throw",t)}s(void 0)}))});return function(t){return n.apply(this,arguments)}}();return o.jsx(p,{title:"Collection Report",children:o.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[o.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[o.jsx(c,{src:"/assets/icons/coins.svg",alt:"Add Consumer",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),o.jsxs("div",{className:"",children:[o.jsx("h1",{className:" font-semibold",children:"Collection Report"}),o.jsx("p",{className:"text-xs text-gray-500",children:"Solid waste management system"})]})]}),o.jsx(D,{}),o.jsx(f,{className:"overflow-hidden py-4","x-chunk":"dashboard-05-chunk-4",children:o.jsx(m,{className:"px-6 text-sm",children:o.jsx(j,{methods:M,onSubmit:M.handleSubmit(G),children:o.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[o.jsx("div",{children:o.jsx(L,{name:"fromDate",label:"From Date",className:"w-full",type:"date"})}),o.jsx("div",{children:o.jsx(L,{name:"toDate",label:"To Date",className:"w-full",type:"date"})}),4==(null==I?void 0:I.userTypeId)&&o.jsx("div",{className:"col-span-2",children:o.jsx(T,{name:"tcId",label:"TC",className:"w-full",data:null!==(t=null==O||null===(d=O.data)||void 0===d||null===(d=d.data)||void 0===d?void 0:d.map((function(t){return{label:String(t.tcName),value:String(t.tcId)}})))&&void 0!==t?t:[]})}),o.jsx("div",{className:"col-span-2",children:o.jsx(T,{name:"mode",label:"Mode",className:"w-full",data:[{label:"Cash",value:"Cash"},{label:"Cheque",value:"Cheque"},{label:"Dd",value:"DD"},{label:"Online",value:"Online"}]})}),o.jsx("div",{className:"col-span-2 mt-2",children:o.jsx(u,{type:"submit",variant:"default",size:"sm",className:"rounded-md w-24",children:"Search"})})]})})})}),o.jsx(D,{}),o.jsxs("div",{className:"flex justify-between item-center",children:[o.jsxs("div",{className:"flex gap-2",children:[o.jsx("h1",{className:"text-xs font-semibold",children:"Total Transaction:"}),o.jsx("h1",{className:"text-xs text-green-800 font-bold",children:null!==(b=null==R||null===(w=R.data)||void 0===w||null===(w=w.data.details)||void 0===w?void 0:w.transactions.length)&&void 0!==b?b:0})]}),o.jsxs("div",{className:"flex gap-2",children:[o.jsx("h1",{className:"text-xs font-semibold",children:"Total Collection:"}),o.jsxs("h1",{className:"text-xs text-green-800 font-bold",children:["Rs. ",null!==(N=null==R||null===(C=R.data)||void 0===C||null===(C=C.data.details)||void 0===C?void 0:C.totalCollection)&&void 0!==N?N:0]})]})]}),o.jsx(a,{collectionData:R}),"success"===(null==R?void 0:R.status)&&o.jsxs(o.Fragment,{children:[o.jsx(y,{page:F,perPage:k,totalPage:10,setPage:function(t){return _(t)}}),o.jsx(D,{})]})]})})}));var E=b().shape({fromDate:w(),toDate:w(),tcId:w(),consumerCategory:w(),consumerType:w(),buildingType:w(),mode:w(),wardNo:w().nullable(),reportType:w(),userId:N()})}}}))}();
