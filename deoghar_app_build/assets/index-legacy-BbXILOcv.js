!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return n};var r,n={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},l="function"==typeof Symbol?Symbol:{},u=l.iterator||"@@iterator",s=l.asyncIterator||"@@asyncIterator",c=l.toStringTag||"@@toStringTag";function d(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(r){d=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var o=t&&t.prototype instanceof x?t:x,i=Object.create(o.prototype),l=new O(n||[]);return a(i,"_invoke",{value:q(e,r,l)}),i}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}n.wrap=f;var m="suspendedStart",p="suspendedYield",y="executing",v="completed",g={};function x(){}function b(){}function j(){}var w={};d(w,u,(function(){return this}));var N=Object.getPrototypeOf,L=N&&N(N(A([])));L&&L!==o&&i.call(L,u)&&(w=L);var C=j.prototype=x.prototype=Object.create(w);function S(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function E(t,r){function n(o,a,l,u){var s=h(t[o],t,a);if("throw"!==s.type){var c=s.arg,d=c.value;return d&&"object"==e(d)&&i.call(d,"__await")?r.resolve(d.__await).then((function(e){n("next",e,l,u)}),(function(e){n("throw",e,l,u)})):r.resolve(d).then((function(e){c.value=e,l(c)}),(function(e){return n("throw",e,l,u)}))}u(s.arg)}var o;a(this,"_invoke",{value:function(e,t){function i(){return new r((function(r,o){n(e,t,r,o)}))}return o=o?o.then(i,i):i()}})}function q(e,t,n){var o=m;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:r,done:!0}}for(n.method=i,n.arg=a;;){var l=n.delegate;if(l){var u=F(l,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===m)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var s=h(e,t,n);if("normal"===s.type){if(o=n.done?v:p,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=v,n.method="throw",n.arg=s.arg)}}}function F(e,t){var n=t.method,o=e.iterator[n];if(o===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=r,F(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=h(o,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,g;var a=i.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,g):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,g)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function A(t){if(t||""===t){var n=t[u];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(i.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}throw new TypeError(e(t)+" is not iterable")}return b.prototype=j,a(C,"constructor",{value:j,configurable:!0}),a(j,"constructor",{value:b,configurable:!0}),b.displayName=d(j,c,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,j):(e.__proto__=j,d(e,c,"GeneratorFunction")),e.prototype=Object.create(C),e},n.awrap=function(e){return{__await:e}},S(E.prototype),d(E.prototype,s,(function(){return this})),n.AsyncIterator=E,n.async=function(e,t,r,o,i){void 0===i&&(i=Promise);var a=new E(f(e,t,r,o),i);return n.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},S(C),d(C,c,"Generator"),d(C,u,(function(){return this})),d(C,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},n.values=A,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,o){return l.type="throw",l.arg=e,t.next=n,o&&(t.method="next",t.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],l=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),_(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:A(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),g}},n}function r(e,t,r,n,o,i,a){try{var l=e[i](a),u=l.value}catch(e){return void r(e)}l.done?t(u):Promise.resolve(u).then(n,o)}function n(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var a=e.apply(t,n);function l(e){r(a,o,i,l,u,"next",e)}function u(e){r(a,o,i,l,u,"throw",e)}l(void 0)}))}}System.register(["./index-legacy-D_qsdVeQ.js","./index-legacy-ClJS1nJ_.js","./card-legacy-DKwMwXOO.js","./switch-legacy-DGjKCe4R.js","./RHFTextField-legacy-BB43MshU.js","./ButtonLoading-legacy-Cyo2Zv4W.js","./router-legacy-DXU_NOBA.js","./SelectField-legacy-4bSQ8aNE.js","./useComonData-legacy-Dekupe_L.js","./separator-legacy-DJE9qL8j.js","./useMonthMap-legacy-DuUhcaKT.js","./headlessui-legacy-nvVeYWxe.js","./axios-legacy-COJRtORB.js","./moment-legacy-D_pKkeqh.js"],(function(e,r){"use strict";var o,i,a,l,u,s,c,d,f,h,m,p,y,v,g,x,b,j,w,N,L,C,S;return{setters:[function(e){o=e.u,i=e.j,a=e.I,l=e.C,u=e.e,s=e._},function(e){c=e.P},function(e){d=e.C,f=e.b},function(e){h=e.c,m=e.a,p=e.u,y=e.F,v=e.o},function(e){g=e.R},function(e){x=e.B},function(e){b=e.e},function(e){j=e.R},function(e){w=e.a,N=e.u,L=e.b},function(e){C=e.S},function(e){S=e.u},null,null,null],execute:function(){e("default",(function(){var e,r,E,q,F,T,_,O=b(),A=o({}),R=S("4-1-2022").resultList,P=w().getConsumerAddFormData,k=N().getAllUser,G=h().shape({wardNo:m().required().label("Ward no"),holdingNo:m(),consumerName:m().required().label("Consumer name"),mobileNo:m().required().label("Mobile no"),address:m().required().label("Address"),pinCode:m().required().label("Pin code"),consumerCategory:m().required().label("Consumer category"),consumerType:m().required().label("Consumer type"),demandFrom:m().required().label("Demand from"),firmName:m().when("consumerCategory",{is:"2",then:function(){return m().required().label("Firm name")}}),licenseNo:m().when("consumerCategory",{is:"2",then:function(){return m().required().label("License no")}}),selectText:m()}),D=p({resolver:v(G),defaultValues:{wardNo:"",holdingNo:"",consumerName:"",mobileNo:"",address:"",pinCode:"",consumerCategory:"",consumerType:"",demandFrom:"",firmName:"",licenseNo:"",selectText:""}}),V=L(String(D.watch("consumerCategory"))).consumerCategoryData,I=function(){var e=n(t().mark((function e(r){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l("Are you sure?","Please confirm",n(t().mark((function e(){var n,o,i;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,null==A?void 0:A.mutateAsync({api:null===(n=u)||void 0===n?void 0:n.postConsumerAdd,data:r});case 3:null!=(o=e.sent)&&o.data.status?(s.success(null==o?void 0:o.data.msg),O("/deoghar-app/consumer-actions/".concat(null==o||null===(i=o.data)||void 0===i||null===(i=i.data)||void 0===i?void 0:i.consumerId))):s.error(null==o?void 0:o.data.msg),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),s.error("Something went wrong");case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return i.jsx(c,{title:"Add Consumer",children:i.jsxs("main",{className:"py-6 grid grid-cols-1 gap-4 px-4",children:[i.jsxs("div",{className:"flex space-x-3 items-center justify-start",children:[i.jsx(a,{src:"/assets/image/category.png",alt:"Add Consumer",className:"w-11 h-11 rounded-lg bg-gray-200 p-2"}),i.jsxs("div",{className:"",children:[i.jsx("h1",{className:"font-semibold",children:"Add Consumer"}),i.jsx("p",{className:"text-xs text-gray-500",children:"Add consumer details here."})]})]}),i.jsx(C,{}),i.jsx(d,{children:i.jsx(f,{children:i.jsxs(y,{methods:D,onSubmit:D.handleSubmit(I),children:[i.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[i.jsx("div",{children:i.jsx(j,{selectedText:"selectText",isRequired:!0,name:"consumerCategory",label:"Consumer Category",data:null!==(e=null==P||null===(r=P.data)||void 0===r||null===(r=r.data)||void 0===r||null===(r=r.consumerCategory)||void 0===r?void 0:r.map((function(e){return{label:String(e.name),value:String(e.id)}})))&&void 0!==e?e:[]})}),i.jsx("div",{children:i.jsx(j,{name:"consumerType",isRequired:!0,label:"Consumer Type",data:null!==(E=null==V||null===(q=V.data)||void 0===q||null===(q=q.data)||void 0===q||null===(q=q.consumerTypeList)||void 0===q?void 0:q.map((function(e){return{label:String(e.name),value:String(e.id)}})))&&void 0!==E?E:[]})}),{2:i.jsxs(i.Fragment,{children:[i.jsx("div",{children:i.jsx(g,{isRequired:!0,name:"firmName",label:"Firm Name",type:"text"})}),i.jsx("div",{children:i.jsx(g,{isRequired:!0,name:"licenseNo",label:"License No",type:"text"})})]})}[D.watch("consumerCategory")],i.jsx("div",{children:i.jsx(j,{name:"wardNo",isRequired:!0,label:"Ward No",data:null!==(F=null==k||null===(T=k.data)||void 0===T||null===(T=T.data[0].ulbDetails[0])||void 0===T||null===(T=T.wards)||void 0===T?void 0:T.map((function(e){return{label:String(e),value:String(e)}})))&&void 0!==F?F:[]})}),i.jsx("div",{children:i.jsx(g,{name:"holdingNo",label:"Holding No",type:"text",inputValidation:["removeSpace"]})}),i.jsx("div",{children:i.jsx(g,{name:"consumerName",isRequired:!0,label:"Consumer Name",type:"text",inputValidation:["removeDoubleSpace"]})}),i.jsx("div",{children:i.jsx(g,{name:"mobileNo",isRequired:!0,type:"number",label:"Mobile No",inputValidation:["mobile","number"]})}),i.jsx("div",{children:i.jsx(g,{name:"address",label:"Address",type:"text",isRequired:!0})}),i.jsx("div",{children:i.jsx(g,{isRequired:!0,name:"pinCode",label:"Pin Code",type:"text",inputValidation:["zip"]})}),i.jsx("div",{children:i.jsx(j,{name:"demandFrom",isRequired:!0,label:"Demand From",data:null!==(_=R.map((function(e){return{label:String(e.str),value:String(e.str)}})))&&void 0!==_?_:[]})})]}),i.jsx("div",{className:"flex justify-center mt-6",children:i.jsx(x,{isLoading:A.isLoading,disabled:A.isLoading,type:"submit",variant:"default",size:"sm",className:"rounded-md w-24",children:"Add Consumer"})})]})})})]})})}))}}}))}();
