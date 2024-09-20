!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return n};var r,n={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},l="function"==typeof Symbol?Symbol:{},u=l.iterator||"@@iterator",s=l.asyncIterator||"@@asyncIterator",c=l.toStringTag||"@@toStringTag";function d(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(r){d=function(e,t,r){return e[t]=r}}function h(e,t,r,n){var o=t&&t.prototype instanceof x?t:x,i=Object.create(o.prototype),l=new R(n||[]);return a(i,"_invoke",{value:_(e,r,l)}),i}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}n.wrap=h;var p="suspendedStart",v="suspendedYield",m="executing",y="completed",g={};function x(){}function b(){}function j(){}var w={};d(w,u,(function(){return this}));var N=Object.getPrototypeOf,L=N&&N(N(A([])));L&&L!==o&&i.call(L,u)&&(w=L);var E=j.prototype=x.prototype=Object.create(w);function S(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function C(t,r){function n(o,a,l,u){var s=f(t[o],t,a);if("throw"!==s.type){var c=s.arg,d=c.value;return d&&"object"==e(d)&&i.call(d,"__await")?r.resolve(d.__await).then((function(e){n("next",e,l,u)}),(function(e){n("throw",e,l,u)})):r.resolve(d).then((function(e){c.value=e,l(c)}),(function(e){return n("throw",e,l,u)}))}u(s.arg)}var o;a(this,"_invoke",{value:function(e,t){function i(){return new r((function(r,o){n(e,t,r,o)}))}return o=o?o.then(i,i):i()}})}function _(e,t,n){var o=p;return function(i,a){if(o===m)throw Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:r,done:!0}}for(n.method=i,n.arg=a;;){var l=n.delegate;if(l){var u=O(l,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var s=f(e,t,n);if("normal"===s.type){if(o=n.done?y:v,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=y,n.method="throw",n.arg=s.arg)}}}function O(e,t){var n=t.method,o=e.iterator[n];if(o===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=r,O(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=f(o,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,g;var a=i.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,g):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,g)}function q(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function R(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(q,this),this.reset(!0)}function A(t){if(t||""===t){var n=t[u];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(i.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}throw new TypeError(e(t)+" is not iterable")}return b.prototype=j,a(E,"constructor",{value:j,configurable:!0}),a(j,"constructor",{value:b,configurable:!0}),b.displayName=d(j,c,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,j):(e.__proto__=j,d(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},n.awrap=function(e){return{__await:e}},S(C.prototype),d(C.prototype,s,(function(){return this})),n.AsyncIterator=C,n.async=function(e,t,r,o,i){void 0===i&&(i=Promise);var a=new C(h(e,t,r,o),i);return n.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},S(E),d(E,c,"Generator"),d(E,u,(function(){return this})),d(E,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},n.values=A,R.prototype={constructor:R,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,o){return l.type="throw",l.arg=e,t.next=n,o&&(t.method="next",t.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],l=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),P(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:A(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),g}},n}function r(e,t,r,n,o,i,a){try{var l=e[i](a),u=l.value}catch(e){return void r(e)}l.done?t(u):Promise.resolve(u).then(n,o)}function n(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var a=e.apply(t,n);function l(e){r(a,o,i,l,u,"next",e)}function u(e){r(a,o,i,l,u,"throw",e)}l(void 0)}))}}System.register(["./index-legacy-BeMG4HbH.js","./router-legacy-BWed7M0P.js","./switch-legacy-CAMfHpiE.js","./useComonData-legacy-D0eTCenq.js","./RHFTextField-legacy-CMzNL7Ib.js","./ButtonLoading-legacy-CgNv0kJ9.js","./SelectField-legacy-CVgXy0yz.js","./RotatingLoader-legacy-SFJwAu99.js","./index-legacy-B1JxPvtC.js","./card-legacy-BvWcAh5i.js","./headlessui-legacy-BlMjWznQ.js","./axios-legacy-COJRtORB.js","./module-legacy-sLhwckVH.js"],(function(e,r){"use strict";var o,i,a,l,u,s,c,d,h,f,p,v,m,y,g,x,b,j,w,N,L,E,S,C;return{setters:[function(e){o=e.u,i=e.h,a=e.j,l=e.I,u=e.S,s=e.e,c=e.C,d=e._},function(e){h=e.u,f=e.i,p=e.r},function(e){v=e.u,m=e.F,y=e.c,g=e.a,x=e.o},function(e){b=e.u},function(e){j=e.R},function(e){w=e.B},function(e){N=e.R},function(e){L=e.R},function(e){E=e.P},function(e){S=e.C,C=e.b},null,null,null],execute:function(){e("default",(function(){var e,y,g,_,O=b().getAllUser,q=o({}),P=h(),R=f().id,A=i({api:"".concat(s.getConsumerDetailsById,"/").concat(R),options:{enabled:!!R}}),k=p.useMemo((function(){var e,t,r,n,o,i,a,l,u,s,c,d,h;return{wardNo:String(null==A||null===(e=A.data)||void 0===e||null===(e=e.data[0])||void 0===e?void 0:e.wardNo),holdingNo:null!==(t=String(null==A||null===(r=A.data)||void 0===r||null===(r=r.data[0])||void 0===r?void 0:r.holdingNo))&&void 0!==t?t:"",consumerNo:null!==(n=String(null==A||null===(o=A.data)||void 0===o||null===(o=o.data[0])||void 0===o?void 0:o.consumerNo))&&void 0!==n?n:"",consumerName:null!==(i=String(null==A||null===(a=A.data)||void 0===a||null===(a=a.data[0])||void 0===a?void 0:a.consumerName))&&void 0!==i?i:"",mobileNo:null!==(l=String(null==A||null===(u=A.data)||void 0===u||null===(u=u.data[0])||void 0===u?void 0:u.mobileNo))&&void 0!==l?l:"",Address:null!==(s=String(null==A||null===(c=A.data)||void 0===c||null===(c=c.data[0])||void 0===c?void 0:c.Address))&&void 0!==s?s:"",pinCode:null!==(d=String(null==A||null===(h=A.data)||void 0===h||null===(h=h.data[0])||void 0===h?void 0:h.pinCode))&&void 0!==d?d:""}}),[null==A||null===(e=A.data)||void 0===e?void 0:e.data[0]]),F=v({resolver:x(r),defaultValues:k});p.useEffect((function(){var e;null!=A&&null!==(e=A.data)&&void 0!==e&&e.data[0]&&F.reset(k)}),[null==A||null===(y=A.data)||void 0===y?void 0:y.data[0].id]);var T=function(){var e=n(t().mark((function e(r){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c("Are you sure?","Please confirm",n(t().mark((function e(){var n;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q.mutateAsync({api:s.postEditConsumerDetail,data:{address:r.Address,consumerId:R,mobileNo:r.mobileNo,name:r.consumerName,holdingNo:r.holdingNo,consumerTypeId:"",demandFrom:"",pincode:r.pinCode,wardNo:r.wardNo}});case 3:(n=e.sent).data.status?(d.success(n.data.msg),P("/deoghar-app/consumer-actions/".concat(R))):d.error(n.data.msg),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])}))));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a.jsx(E,{title:"Update Consumer",children:a.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[a.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[a.jsx(l,{src:"/assets/image/category.png",alt:"Update Consumer",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),a.jsxs("div",{className:"",children:[a.jsx("h1",{className:"font-semibold",children:"Update Consumer"}),a.jsx("p",{className:"text-xs text-gray-500",children:"solid west management system"})]})]}),a.jsx(u,{}),a.jsx(S,{children:a.jsx(C,{children:a.jsx("div",{className:"p-4 md:p-5",children:A.isLoading?a.jsx("div",{className:"flex justify-center items-center h-[450px]",children:a.jsx(L,{})}):a.jsxs(m,{methods:F,onSubmit:F.handleSubmit(T),children:[a.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[a.jsx("div",{children:a.jsx(j,{name:"holdingNo",label:"Holding No",placeholder:"Enter Holding No",isRequired:!0})}),a.jsx("div",{children:a.jsx(j,{name:"consumerName",disabled:!0,label:"Consumer Name",placeholder:"Enter Consumer Name",isRequired:!0})}),a.jsx("div",{children:a.jsx(N,{name:"wardNo",label:"Ward No",isRequired:!0,selectedText:"Select Ward No",data:null!==(g=null==O||null===(_=O.data)||void 0===_||null===(_=_.data[0].ulbDetails[0])||void 0===_||null===(_=_.wards)||void 0===_?void 0:_.map((function(e){return{label:String(e),value:String(e)}})))&&void 0!==g?g:[]})}),a.jsx("div",{children:a.jsx(j,{disabled:!0,isRequired:!0,name:"consumerNo",label:"Consumer No",placeholder:"Enter Consumer No"})}),a.jsx("div",{children:a.jsx(j,{name:"mobileNo",label:"Mobile No",type:"number",isRequired:!0,placeholder:"Enter Mobile No",inputValidation:["mobile"]})}),a.jsx("div",{children:a.jsx(j,{name:"Address",label:"Address",placeholder:"Enter Address",isRequired:!0})}),a.jsx("div",{children:a.jsx(j,{name:"pinCode",label:"Pin Code",placeholder:"Enter Pin Code",isRequired:!0,inputValidation:["zip"]})})]}),a.jsx("div",{className:"flex justify-end gap-3 mt-6 mb-2",children:a.jsx(w,{isLoading:q.isLoading,disabled:q.isLoading,size:"sm",type:"submit",className:"w-20",children:"Update"})})]})})})})]})})}));var r=y().shape({wardNo:g().required().label("Ward no"),holdingNo:g().required().label("Holding no"),consumerNo:g().required().label("Consumer no"),consumerName:g().notRequired().label("Consumer name"),mobileNo:g().required().label("Mobile no"),Address:g().required().label("Address"),pinCode:g().required().label("Pin code")})}}}))}();
