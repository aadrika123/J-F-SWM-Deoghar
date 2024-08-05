!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return n};var r,n={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},s="function"==typeof Symbol?Symbol:{},l=s.iterator||"@@iterator",c=s.asyncIterator||"@@asyncIterator",u=s.toStringTag||"@@toStringTag";function d(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(r){d=function(e,t,r){return e[t]=r}}function h(e,t,r,n){var o=t&&t.prototype instanceof g?t:g,i=Object.create(o.prototype),s=new G(n||[]);return a(i,"_invoke",{value:_(e,r,s)}),i}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}n.wrap=h;var p="suspendedStart",v="suspendedYield",m="executing",x="completed",y={};function g(){}function j(){}function b(){}var w={};d(w,l,(function(){return this}));var N=Object.getPrototypeOf,L=N&&N(N(A([])));L&&L!==o&&i.call(L,l)&&(w=L);var S=b.prototype=g.prototype=Object.create(w);function E(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function O(t,r){function n(o,a,s,l){var c=f(t[o],t,a);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==e(d)&&i.call(d,"__await")?r.resolve(d.__await).then((function(e){n("next",e,s,l)}),(function(e){n("throw",e,s,l)})):r.resolve(d).then((function(e){u.value=e,s(u)}),(function(e){return n("throw",e,s,l)}))}l(c.arg)}var o;a(this,"_invoke",{value:function(e,t){function i(){return new r((function(r,o){n(e,t,r,o)}))}return o=o?o.then(i,i):i()}})}function _(e,t,n){var o=p;return function(i,a){if(o===m)throw Error("Generator is already running");if(o===x){if("throw"===i)throw a;return{value:r,done:!0}}for(n.method=i,n.arg=a;;){var s=n.delegate;if(s){var l=T(s,n);if(l){if(l===y)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=x,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var c=f(e,t,n);if("normal"===c.type){if(o=n.done?x:v,c.arg===y)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(o=x,n.method="throw",n.arg=c.arg)}}}function T(e,t){var n=t.method,o=e.iterator[n];if(o===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=r,T(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=f(o,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,y;var a=i.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,y):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,y)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function G(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function A(t){if(t||""===t){var n=t[l];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(i.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}throw new TypeError(e(t)+" is not iterable")}return j.prototype=b,a(S,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:j,configurable:!0}),j.displayName=d(b,u,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===j||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,d(e,u,"GeneratorFunction")),e.prototype=Object.create(S),e},n.awrap=function(e){return{__await:e}},E(O.prototype),d(O.prototype,c,(function(){return this})),n.AsyncIterator=O,n.async=function(e,t,r,o,i){void 0===i&&(i=Promise);var a=new O(h(e,t,r,o),i);return n.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(S),d(S,u,"Generator"),d(S,l,(function(){return this})),d(S,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},n.values=A,G.prototype={constructor:G,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,o){return s.type="throw",s.arg=e,t.next=n,o&&(t.method="next",t.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=i.call(a,"catchLoc"),c=i.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),P(r),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:A(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),y}},n}function r(e,t,r,n,o,i,a){try{var s=e[i](a),l=s.value}catch(e){return void r(e)}s.done?t(l):Promise.resolve(l).then(n,o)}function n(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var a=e.apply(t,n);function s(e){r(a,o,i,s,l,"next",e)}function l(e){r(a,o,i,s,l,"throw",e)}s(void 0)}))}}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,s=[],l=!0,c=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(s.push(n.value),s.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return s}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}System.register(["./index-legacy-DNKTp0nq.js","./SelectField-legacy-CDe210nZ.js","./RHFTextField-legacy-D04IV6kK.js","./resizeImage-legacy-CG0W2WRB.js","./router-legacy-DYc8ozZp.js","./index-legacy-BBXE4eys.js","./card-legacy-lAtMyrsJ.js","./Image-legacy-CzfxQAMc.js","./useCustomQuery-legacy-kyMEKemC.js","./separator-legacy-BndLkwaE.js","./SkeletonLoader-legacy-CaPiPJMm.js","./OverLayLoader-legacy-BRJeWcMG.js","./headlessui-legacy-D7WMeg35.js","./axios-legacy-DkcwMedN.js","./module-legacy-BCMopcEa.js"],(function(e,r){"use strict";var i,a,s,l,c,u,d,h,f,p,v,m,x,y,g,j,b,w,N,L,S,E,O,_,T,k;return{setters:[function(e){i=e.f,a=e.j,s=e.B,l=e.d,c=e._,u=e.C},function(e){d=e.u,h=e.o,f=e.F,p=e.c,v=e.e,m=e.a},function(e){x=e.R},function(e){y=e.r},function(e){g=e.d,j=e.r,b=e.h},function(e){w=e.P},function(e){N=e.C,L=e.b},function(e){S=e.I},function(e){E=e.u,O=e.b},function(e){_=e.S},function(e){T=e.S},function(e){k=e.O},null,null,null],execute:function(){e("default",(function(){var e,p,v,m,P,G,A,C,F,I,R=E({}),D=g(),q=o(j.useState(""),2),U=q[0],M=q[1],V=i(),B=V.coords,z=V.isGeolocationEnabled,Q=b().id,Y=O({api:"".concat(l.getConsumerDetailsById,"/").concat(Q),options:{enabled:!!Q}}),$=d({resolver:h(r),defaultValues:{photo:null,longitude:"",latitude:""}}),H=function(){var e=n(t().mark((function e(r){var o;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(z){e.next=3;break}return c.error("Please enable your location"),e.abrupt("return");case 3:(o=new FormData).append("photo",r.photo),o.append("latitude",r.latitude),o.append("longitude",r.longitude),o.append("consumerId",String(Q)),u("Are you sure?","Please confirm",n(t().mark((function e(){var r;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.mutateAsync({api:l.postGeoTagging,data:o});case 3:(r=e.sent).data.status?(c.success(r.data.msg),D("/deoghar-app/consumer-actions/".concat(Q))):c.error(r.data.msg),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),c.error(e.t0.msg);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=n(t().mark((function e(r){var n,o,i;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r.target.files[0]){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,y(n);case 5:o=e.sent,i=new File([o],null==n?void 0:n.name,{type:"image/*"}),$.setValue("photo",i),$.setValue("latitude",String(null==B?void 0:B.latitude)),$.setValue("longitude",String(null==B?void 0:B.longitude)),M(URL.createObjectURL(i)||URL.createObjectURL(n));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();if(null!=Y&&Y.isLoading)return a.jsx("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow-sm",children:a.jsx(N,{children:a.jsxs(L,{children:[a.jsx(T,{}),a.jsx(T,{}),a.jsx(T,{})]})})});return a.jsxs(w,{title:"Geo Tagging Consumer",children:[R.isLoading&&a.jsx(k,{}),a.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[a.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[a.jsx(S,{src:"/assets/image/category.png",alt:"Geo Tagging Consumer",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),a.jsxs("div",{className:"",children:[a.jsx("h1",{className:"font-semibold",children:"Geo Tagging Consumer"}),a.jsx("p",{className:"text-xs text-gray-500",children:"Solid west management system"})]})]}),a.jsx(_,{}),a.jsx(N,{children:a.jsx(L,{children:a.jsxs("div",{className:"grid grid-cols-2 gap-3 py-6",children:[a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Consumer no:"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:null==Y||null===(e=Y.data)||void 0===e||null===(e=e.data[0])||void 0===e?void 0:e.consumerNo})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Consumer Name:"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:null==Y||null===(p=Y.data)||void 0===p||null===(p=p.data[0])||void 0===p?void 0:p.consumerName})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Mobile no:"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:null==Y||null===(v=Y.data)||void 0===v||null===(v=v.data[0])||void 0===v?void 0:v.mobileNo})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Monthly Demand/Rate:"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:null==Y||null===(m=Y.data)||void 0===m||null===(m=m.data[0])||void 0===m?void 0:m.monthlyDemand})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Outstanding Demand:"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:null==Y||null===(P=Y.data)||void 0===P||null===(P=P.data[0])||void 0===P?void 0:P.totalDemand})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Demand from:"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:null==Y||null===(G=Y.data)||void 0===G||null===(G=G.data[0])||void 0===G?void 0:G.demandFrom})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Demand upto:"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:null==Y||null===(A=Y.data)||void 0===A||null===(A=A.data[0])||void 0===A?void 0:A.demandUpto})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Total flats:"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:null==Y||null===(C=Y.data)||void 0===C||null===(C=C.data)||void 0===C?void 0:C.length})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Address:"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:null==Y||null===(F=Y.data)||void 0===F||null===(F=F.data[0])||void 0===F?void 0:F.Address})})]})})}),a.jsx(_,{}),a.jsx(N,{children:a.jsx(L,{children:a.jsx(f,{methods:$,onSubmit:$.handleSubmit(H),children:a.jsxs("div",{className:"grid grid-cols-2 gap-4 py-2 mt-1",children:[a.jsxs("div",{className:"col-span-2",children:[a.jsx(x,{isRequired:!0,type:"file",label:"Photo",accept:"image/*",onChange:function(e){K(e)}}),a.jsx("p",{className:"text-xs text-red-500",children:null===(I=$.formState.errors.photo)||void 0===I?void 0:I.message})]}),U&&a.jsx("div",{className:"flex justify-center col-span-2",children:a.jsx(S,{src:U,alt:"Geo Tagging Consumer",className:"w-32 h-32 object-cover rounded-lg bg-gray-200 p-2"})}),a.jsx("div",{children:a.jsx(x,{disabled:!0,value:$.watch("longitude"),label:"Longitude",placeholder:"Enter Longitude"})}),a.jsx("div",{children:a.jsx(x,{disabled:!0,value:$.watch("latitude"),label:"Latitude",placeholder:"Enter Latitude"})}),a.jsx(_,{className:"col-span-2"}),a.jsx("div",{className:"flex col-span-2 justify-end w-full",children:a.jsx(s,{className:"w-full",type:"submit",size:"sm",children:"SUBMIT"})})]})})})})]})]})}));var r=p().shape({photo:v().required("Photo is required"),longitude:m().required("Longitude is required"),latitude:m().required("Latitude is required")})}}}))}();
