!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i,o,l=[],s=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(e){c=!0,a=e}finally{try{if(!s&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function r(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return n};var t,n={},a=Object.prototype,i=a.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},l="function"==typeof Symbol?Symbol:{},s=l.iterator||"@@iterator",c=l.asyncIterator||"@@asyncIterator",d=l.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(t){u=function(e,t,n){return e[t]=n}}function m(e,t,n,r){var a=t&&t.prototype instanceof y?t:y,i=Object.create(a.prototype),l=new P(r||[]);return o(i,"_invoke",{value:D(e,n,l)}),i}function h(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}n.wrap=m;var f="suspendedStart",x="suspendedYield",p="executing",v="completed",g={};function y(){}function j(){}function b(){}var w={};u(w,s,(function(){return this}));var N=Object.getPrototypeOf,k=N&&N(N(S([])));k&&k!==a&&i.call(k,s)&&(w=k);var F=b.prototype=y.prototype=Object.create(w);function C(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function L(t,n){function r(a,o,l,s){var c=h(t[a],t,o);if("throw"!==c.type){var d=c.arg,u=d.value;return u&&"object"==e(u)&&i.call(u,"__await")?n.resolve(u.__await).then((function(e){r("next",e,l,s)}),(function(e){r("throw",e,l,s)})):n.resolve(u).then((function(e){d.value=e,l(d)}),(function(e){return r("throw",e,l,s)}))}s(c.arg)}var a;o(this,"_invoke",{value:function(e,t){function i(){return new n((function(n,a){r(e,t,n,a)}))}return a=a?a.then(i,i):i()}})}function D(e,n,r){var a=f;return function(i,o){if(a===p)throw Error("Generator is already running");if(a===v){if("throw"===i)throw o;return{value:t,done:!0}}for(r.method=i,r.arg=o;;){var l=r.delegate;if(l){var s=E(l,r);if(s){if(s===g)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===f)throw a=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=p;var c=h(e,n,r);if("normal"===c.type){if(a=r.done?v:x,c.arg===g)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a=v,r.method="throw",r.arg=c.arg)}}}function E(e,n){var r=n.method,a=e.iterator[r];if(a===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,E(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var i=h(a,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var o=i.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function S(n){if(n||""===n){var r=n[s];if(r)return r.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var a=-1,o=function e(){for(;++a<n.length;)if(i.call(n,a))return e.value=n[a],e.done=!1,e;return e.value=t,e.done=!0,e};return o.next=o}}throw new TypeError(e(n)+" is not iterable")}return j.prototype=b,o(F,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:j,configurable:!0}),j.displayName=u(b,d,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===j||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,u(e,d,"GeneratorFunction")),e.prototype=Object.create(F),e},n.awrap=function(e){return{__await:e}},C(L.prototype),u(L.prototype,c,(function(){return this})),n.AsyncIterator=L,n.async=function(e,t,r,a,i){void 0===i&&(i=Promise);var o=new L(m(e,t,r,a),i);return n.isGeneratorFunction(t)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},C(F),u(F,d,"Generator"),u(F,s,(function(){return this})),u(F,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=S,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,a){return l.type="throw",l.arg=e,n.next=r,a&&(n.method="next",n.arg=t),!!a}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],l=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=i.call(o,"catchLoc"),c=i.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),A(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;A(n)}return a}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:S(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},n}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(t,n,r){return(n=function(t){var n=function(t,n){if("object"!=e(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var a=r.call(t,n||"default");if("object"!=e(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==e(n)?n:n+""}(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function l(e,t,n,r,a,i,o){try{var l=e[i](o),s=l.value}catch(e){return void n(e)}l.done?t(s):Promise.resolve(s).then(r,a)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){l(i,r,a,o,s,"next",e)}function s(e){l(i,r,a,o,s,"throw",e)}o(void 0)}))}}System.register(["./index-legacy-DmfGzkcu.js","./router-legacy-BWed7M0P.js","./index-legacy-QFO1p0Ha.js","./card-legacy-C87ivp8b.js","./separator-legacy-DrRdDRMI.js","./SkeletonLoader-legacy-Cu-uk8jE.js","./switch-legacy-D4qWeVgW.js","./RHFTextField-legacy-DqqOXlfs.js","./RHFTextArea-legacy-VuIgN83Q.js","./ButtonLoading-legacy-DKM_ASK_.js","./SelectField-legacy-C_K2ITOI.js","./headlessui-legacy-BlMjWznQ.js","./axios-legacy-COJRtORB.js"],(function(e,n){"use strict";var a,o,l,c,d,u,m,h,f,x,p,v,g,y,j,b,w,N,k,F,C,L,D,E,O,A,P;return{setters:[function(e){a=e.a,o=e.u,l=e.j,c=e.B,d=e.C,u=e.e,m=e._,h=e.i,f=e.h,x=e.I},function(e){p=e.r,v=e.u,g=e.i},function(e){y=e.P},function(e){j=e.C,b=e.b},function(e){w=e.S},function(e){N=e.S},function(e){k=e.u,F=e.F,C=e.c,L=e.a,D=e.o},function(e){E=e.R},function(e){O=e.R},function(e){A=e.B},function(e){P=e.R},null,null],execute:function(){e("default",(function(){var e,n,r,i,o,s,c,d,h,k,F,C,L,D,E,O,A,P,R,M,_,z,G=a().user,q=t(p.useState(!1),2),B=q[0],U=q[1],V=t(p.useState(!1),2),W=V[0],H=V[1],Y=v(),Q=g().id,X=f({api:"".concat(u.getConsumerDetailsById,"/").concat(Q),options:{enabled:!!Q}});if(null!=X&&X.isLoading)return l.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:l.jsx(j,{children:l.jsxs(b,{children:[l.jsx(N,{}),l.jsx(N,{}),l.jsx(N,{})]})})});return l.jsxs(y,{title:"Consumer Action",children:[B&&l.jsx(S,{open:B,setOpen:U,aptData:null==X||null===(e=X.data)||void 0===e?void 0:e.data[0].id}),W&&l.jsx(T,{open:W,setOpen:H,aptData:null==X||null===(n=X.data)||void 0===n?void 0:n.data[0].id}),l.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[l.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[l.jsx(x,{src:"/assets/image/category.png",alt:"Add Consumer",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),l.jsxs("div",{className:"",children:[l.jsx("h1",{className:"font-semibold",children:"Consumer Action"}),l.jsx("p",{className:"text-xs text-gray-500",children:"Consumer action details here."})]})]}),l.jsx(w,{}),l.jsx(j,{children:l.jsx(b,{children:l.jsxs("div",{className:"flex flex-wrap",children:[l.jsx("div",{className:"flex flex-col cursor-pointer mt-3 w-1/2",children:l.jsx("h1",{className:"text-xs font-semibold",children:"Consumer No:"})}),l.jsx("div",{className:"flex flex-col cursor-pointer mt-3 w-1/2",children:l.jsx("h1",{className:"text-xs",children:null==X||null===(r=X.data)||void 0===r||null===(r=r.data[0])||void 0===r?void 0:r.consumerNo})}),l.jsx("div",{className:"flex flex-col cursor-pointer mt-3 w-1/2",children:l.jsx("h1",{className:"text-xs font-semibold",children:"Consumer Name:"})}),l.jsx("div",{className:"flex flex-col cursor-pointer mt-3 w-1/2",children:l.jsx("h1",{className:"text-xs",children:null==X||null===(i=X.data)||void 0===i||null===(i=i.data[0])||void 0===i?void 0:i.consumerName})}),""!=(null==X||null===(o=X.data)||void 0===o||null===(o=o.data[0])||void 0===o?void 0:o.holdingNo)&&null!=(null==X||null===(s=X.data)||void 0===s||null===(s=s.data[0])||void 0===s?void 0:s.holdingNo)&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"flex flex-col cursor-pointer mt-3 w-1/2",children:l.jsx("h1",{className:"text-xs font-semibold",children:"Holding No:"})}),l.jsx("div",{className:"flex flex-col cursor-pointer mt-3 w-1/2",children:l.jsx("h1",{className:"text-xs",children:null!==(c=null==X||null===(d=X.data)||void 0===d||null===(d=d.data[0])||void 0===d?void 0:d.holdingNo)&&void 0!==c?c:"--"})})]}),l.jsx("div",{className:"flex flex-col cursor-pointer mt-3 w-1/2",children:l.jsx("h1",{className:"text-xs font-semibold",children:"Consumer Mobile:"})}),l.jsx("div",{className:"flex flex-col cursor-pointer mt-3 w-1/2",children:l.jsx("h1",{className:"text-xs",children:null==X||null===(h=X.data)||void 0===h||null===(h=h.data[0])||void 0===h?void 0:h.mobileNo})}),(null==X||null===(k=X.data)||void 0===k||null===(k=k.data[0])||void 0===k?void 0:k.monthlyDemand)>"0"&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"flex flex-col cursor-pointer mt-3 w-1/2",children:l.jsx("h1",{className:"text-xs font-semibold",children:"Monthly Demand/Rate:"})}),l.jsx("div",{className:"flex flex-col cursor-pointer mt-3 w-1/2",children:l.jsx("h1",{className:"text-xs",children:null==X||null===(F=X.data)||void 0===F||null===(F=F.data[0])||void 0===F?void 0:F.monthlyDemand})})]}),l.jsx("div",{className:"flex flex-col cursor-pointer mt-3 w-1/2",children:l.jsx("h1",{className:"text-xs font-semibold",children:"Outstanding Demand:"})}),l.jsx("div",{className:"flex flex-col cursor-pointer mt-3 w-1/2",children:l.jsx("h1",{className:"text-xs",children:null==X||null===(C=X.data)||void 0===C||null===(C=C.data[0])||void 0===C?void 0:C.totalDemand})}),(null==X||null===(L=X.data)||void 0===L||null===(L=L.data[0])||void 0===L?void 0:L.totalDemand)>"0"&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"flex flex-col cursor-pointer mt-3 w-1/2",children:l.jsx("h1",{className:"text-xs font-semibold",children:"Demand from:"})}),l.jsx("div",{className:"flex flex-col cursor-pointer mt-3 w-1/2",children:l.jsx("h1",{className:"text-xs",children:null==X||null===(D=X.data)||void 0===D||null===(D=D.data[0])||void 0===D?void 0:D.demandFrom})})]}),(null==X||null===(E=X.data)||void 0===E||null===(E=E.data[0])||void 0===E?void 0:E.totalDemand)>"0"&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"flex flex-col cursor-pointer mt-3 w-1/2",children:l.jsx("h1",{className:"text-xs font-semibold",children:"Demand upto:"})}),l.jsx("div",{className:"flex flex-col cursor-pointer mt-3 w-1/2",children:l.jsx("h1",{className:"text-xs",children:null==X||null===(O=X.data)||void 0===O||null===(O=O.data[0])||void 0===O?void 0:O.demandUpto})})]}),l.jsx("div",{className:"flex flex-col cursor-pointer mt-3 w-1/2",children:l.jsx("h1",{className:"text-xs font-semibold",children:"Consumer type:"})}),l.jsx("div",{className:"flex flex-col cursor-pointer mt-3 w-1/2",children:l.jsx("h1",{className:"text-xs",children:null==X||null===(A=X.data)||void 0===A||null===(A=A.data[0])||void 0===A?void 0:A.cansumerType})}),l.jsx("div",{className:"flex flex-col cursor-pointer mt-3 w-1/2",children:l.jsx("h1",{className:"text-xs font-semibold",children:"Address:"})}),l.jsx("div",{className:"flex flex-col cursor-pointer mt-3 w-1/2",children:l.jsx("h1",{className:"text-xs",children:null==X||null===(P=X.data)||void 0===P||null===(P=P.data[0])||void 0===P?void 0:P.Address})}),null!=(null==X||null===(R=X.data)||void 0===R||null===(R=R.data[0])||void 0===R?void 0:R.applyDate)&&""!=(null==X||null===(M=X.data)||void 0===M||null===(M=M.data[0])||void 0===M?void 0:M.applyDate)&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"flex flex-col cursor-pointer mt-3 w-1/2",children:l.jsx("h1",{className:"text-xs font-semibold",children:"Apply date:"})}),l.jsx("div",{className:"flex flex-col cursor-pointer mt-3 w-1/2",children:l.jsx("h1",{className:"text-xs",children:null==X||null===(_=X.data)||void 0===_||null===(_=_.data[0])||void 0===_?void 0:_.applyDate})}),l.jsx("div",{className:"flex flex-col cursor-pointer mt-3 w-1/2",children:l.jsx("h1",{className:"text-xs font-semibold",children:"Apply By:"})}),l.jsx("div",{className:"flex flex-col cursor-pointer mt-3 w-1/2",children:l.jsx("h1",{className:"text-xs",children:null==X||null===(z=X.data)||void 0===z||null===(z=z.data[0])||void 0===z?void 0:z.applyBy})})]})]})})}),l.jsx(w,{}),l.jsx("div",{className:"flex flex-wrap",children:I.map((function(e,t){return e.accessMenu.includes("".concat(null==G?void 0:G.userTypeId))&&l.jsxs("div",{className:"flex items-center flex-col cursor-pointer mt-4 w-1/3",children:[l.jsx(j,{onClick:function(){var t;("View & Pay"===e.title&&Y("".concat(e.link,"/").concat(Q)),"Update Consumer"==e.title&&Y("".concat(e.link,"/").concat(Q)),"All Flats List"==e.title&&Y("".concat(e.link,"/").concat(Q)),"Transaction History"==e.title&&Y("".concat(e.link,"?id=").concat(Q,"&tranType=consumerId")),"Update Apartment"==e.title&&Y("".concat(e.link,"/").concat(Q)),"Payment Adjustment"==e.title&&Y("".concat(e.link,"/").concat(Q)),"Deactivate Apartment"==e.title&&Y("".concat(e.link,"/").concat(Q)),"Geo Tagging"==e.title&&Y("".concat(e.link,"/").concat(Q)),"Geo Map"==e.title&&Y("".concat(e.link,"/").concat(Q)),"Reminder"==e.title&&U(!0),"Deny"==e.title&&H(!0),"Adjust Demand"==e.title&&Y("".concat(e.link,"/").concat(Q)),"Add Renter"==e.title&&Y("".concat(e.link,"/").concat(Q)),"Deactivate Consumer"==e.title&&Y("".concat(e.link,"/").concat(Q)),"Print Demand"==e.title)&&((null==X||null===(t=X.data)||void 0===t||null===(t=t.data[0])||void 0===t?void 0:t.totalDemand)>"0"?Y("".concat(e.link,"/").concat(Q)):m.error("Outstanding demand is 0, so you can not print demand."))},className:"w-[52px] h-[52px] flex items-center justify-center bg-[#12743B] rounded-2xl",children:l.jsx(x,{src:e.icon,alt:"icon"})}),l.jsx("p",{className:"text-xs font-bold text-gray-800 mt-2 text-center",children:e.title})]},t+1)}))})]})]})}));var n=C().shape({reminderDate:L().required().label("Reminder Date"),reminderTime:L().required().label("Reminder Time"),remarks:L().required().label("Remarks")});function S(e){var t=e.open,h=e.setOpen,f=e.title,x=e.aptData,p=a().user,v=o({}),g=function(){return h(!t)},y=k({resolver:D(n),defaultValues:{reminderDate:"",reminderTime:"",remarks:""}}),j=function(){var e=s(r().mark((function e(t){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d("Are you sure?","Please confirm",s(r().mark((function e(){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.mutateAsync({api:u.postReminder,data:i(i({},t),{},{userId:null==p?void 0:p.id,consumerId:x})});case 3:(n=e.sent).data.status?(m.success(n.data.msg),h(!1)):m.error(n.data.msg),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),m.error(e.t0.msg);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return l.jsxs("div",{children:[t&&l.jsx("div",{className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),l.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:"".concat(t?"flex":"hidden"," overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"),children:l.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full",children:l.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[l.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[l.jsx("h3",{className:"text-base font-semibold text-gray-900 dark:text-white",children:null!=f?f:"Add Reminder"}),l.jsxs("button",{style:{background:"none"},onClick:g,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[l.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:l.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),l.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),l.jsx("div",{className:"p-4 md:p-5",children:l.jsxs(F,{methods:y,onSubmit:y.handleSubmit(j),children:[l.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[l.jsx("div",{children:l.jsx(E,{name:"reminderDate",label:"Reminder Date",type:"date",isRequired:!0,min:(new Date).toISOString().split("T")[0]})}),l.jsx("div",{children:l.jsx(E,{name:"reminderTime",label:"Reminder Time",type:"time",isRequired:!0})}),l.jsx("div",{className:"col-span-2",children:l.jsx(O,{name:"remarks",label:"Remarks",isRequired:!0})})]}),l.jsxs("div",{className:"flex justify-end gap-3 mt-6 mb-2",children:[l.jsx(c,{size:"sm",type:"button",onClick:g,className:"bg-gray-200 text-gray-900 w-20",children:"Cancel"}),l.jsx(A,{isLoading:v.isLoading,disabled:v.isLoading,size:"sm",type:"submit",className:"w-20",children:"SUBMIT"})]})]})})]})})})]})}var R=[{value:"Door Closed",label:"Door Closed"},{value:"No Response from CitizenCitizen Will Pay Next Month",label:"No Response from Citizen"},{value:"Citizen Will Pay Next Day",label:"Citizen Will Pay Next Day"},{value:"Citizen Will Pay Next Month",label:"Citizen Will Pay Next Month"},{value:"Refuses to Pay",label:"Refuses to Pay"},{value:"other",label:"Other"}],M=C().shape({denyList:L().required("Deny List is required"),latitude:L(),longitude:L(),remarks:L().required("Remarks is required")});function T(e){var t=e.open,n=e.setOpen,f=e.title,x=e.aptData,v=o({}),g=a().user,y=h(),j=y.coords,b=y.isGeolocationEnabled,w=function(){return n(!t)},N=k({resolver:D(M),defaultValues:{denyList:"",latitude:"",longitude:"",remarks:""}}),C=function(){var e=s(r().mark((function e(t){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(!1),d("Are you sure?","Please confirm",s(r().mark((function e(){var a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.mutateAsync({api:u.postPaymentDeny,data:i(i({},t),{},{userId:null==g?void 0:g.id,consumerId:x})});case 3:(a=e.sent).data.status?(m.success(a.data.msg),n(!1)):m.error(a.data.msg),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),m.error(e.t0.msg);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return p.useEffect((function(){x&&(N.setValue("latitude",String(null==j?void 0:j.latitude)),N.setValue("longitude",String(null==j?void 0:j.longitude))),"other"!==N.watch("denyList")&&N.setValue("remarks",N.watch("denyList")),"other"===N.watch("denyList")&&N.setValue("remarks","")}),[N.watch("denyList")]),l.jsxs("div",{children:[t&&l.jsx("div",{className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),l.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:"".concat(t?"flex":"hidden"," overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"),children:l.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full",children:l.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[l.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[l.jsx("h3",{className:"text-base font-semibold text-gray-900 dark:text-white",children:null!=f?f:"Add Deny"}),l.jsxs("button",{style:{background:"none"},onClick:w,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[l.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:l.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),l.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),l.jsx("div",{className:"p-4 md:p-5",children:b?l.jsxs(F,{methods:N,onSubmit:N.handleSubmit(C),children:[l.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[l.jsx("div",{className:"col-span-2",children:l.jsx(P,{name:"denyList",label:"Deny List",data:R,isRequired:!0})}),"other"===N.watch("denyList")&&l.jsx("div",{className:"col-span-2",children:l.jsx(O,{name:"remarks",label:"Remarks",isRequired:!0})})]}),l.jsxs("div",{className:"flex justify-end gap-3 mt-6 mb-2",children:[l.jsx(c,{size:"sm",type:"button",onClick:w,className:"bg-gray-200 text-gray-900 w-20",children:"Cancel"}),l.jsx(A,{isLoading:v.isLoading,disabled:v.isLoading,size:"sm",type:"submit",className:"w-20",children:"SUBMIT"})]})]}):l.jsx("div",{className:"text-center py-4",children:l.jsx("h1",{className:"text-sm font-semibold text-red-600",children:"Please enable location to continue"})})})]})})})]})}var I=[{title:"View & Pay",icon:"/icons/grid.svg",link:"/deoghar-app/consumer-payment",bg:"bg-gradient-to-tl from-[#EEF2FF] to-[#9CC6F7]",accessMenu:["4","5"]},{title:"Transaction History",icon:"/icons/history.svg",link:"/deoghar-app/tran-history",bg:"bg-gradient-to-tl from-[#FFEFE4] to-[#FFBC96]",accessMenu:["4","5"]},{title:"Geo Map",icon:"/icons/location.svg",link:"/deoghar-app/con-geo-map",bg:"bg-gradient-to-tl from-[#E4F6FF] to-[#9ADCFF]",accessMenu:["4","5"]},{title:"Reminder",icon:"/icons/bells.svg",link:"/deoghar-app/details",bg:"bg-gradient-to-tl from-[#FEE8FF] to-[#E4AFFF]",accessMenu:["4","5"]},{title:"Deny",icon:"/icons/deniel2.svg",link:"/deoghar-app/details",bg:"bg-gradient-to-tl from-[#FFECEC] to-[#FECACA]",accessMenu:["4","5"]},{title:"Geo Tagging",icon:"/icons/location.svg",link:"/deoghar-app/con-geo-tagging",bg:"bg-gradient-to-tl from-[#E1FFC3] to-[#C9F98D]",accessMenu:["4","5"]},{title:"Update Consumer",icon:"/icons/update.svg",link:"/deoghar-app/update-consumer",bg:"bg-gradient-to-tl from-[#EAD9FF] to-[#C291FF]",accessMenu:["4"]},{title:"Deactivate Consumer",icon:"/icons/deactivate.svg",link:"/deoghar-app/con-deactivated",bg:"bg-gradient-to-tl from-[#FFECEC] to-[#FECACA]",accessMenu:["4"]},{title:"Payment Adjustment",icon:"/icons/cur.svg",bg:"bg-gradient-to-tl from-[#FFF5CE] to-[#FCD451]",link:"/deoghar-app/demand-con-adjust",accessMenu:["4"]},{title:"Print Demand",icon:"/icons/denial.svg",bg:"bg-gradient-to-tl from-[#E1FFC3] to-[#C9F98D]",link:"/deoghar-app/print-demand-con",accessMenu:["4"]},{title:"Add Renter",icon:"/icons/add-consumer.svg",bg:"bg-gradient-to-tl from-[#E4F6FF] to-[#9ADCFF]",link:"/deoghar-app/add-renter",accessMenu:["4"]}]}}}))}();
