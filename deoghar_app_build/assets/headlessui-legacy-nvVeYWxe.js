!function(){var t=["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"],e=["strategy"],n=["mainAxis","crossAxis","limiter"],r=["apply"];function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,u=[],c=!0,f=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(u.push(r.value),u.length!==e);c=!0);}catch(t){f=!0,o=t}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(f)throw o}}return u}}(t,e)||a(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||a(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){if(t){if("string"==typeof t)return u(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.includes(r))continue;n[r]=t[r]}return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.includes(n)||{}.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function f(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */f=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var i=e&&e.prototype instanceof x?e:x,a=Object.create(i.prototype),u=new D(r||[]);return o(a,"_invoke",{value:P(t,n,u)}),a}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var d="suspendedStart",h="suspendedYield",m="executing",y="completed",g={};function x(){}function b(){}function w(){}var k={};l(k,a,(function(){return this}));var O=Object.getPrototypeOf,L=O&&O(O(C([])));L&&L!==n&&r.call(L,a)&&(k=L);var E=w.prototype=x.prototype=Object.create(k);function A(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function n(o,i,a,u){var c=p(t[o],t,i);if("throw"!==c.type){var f=c.arg,l=f.value;return l&&"object"==v(l)&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):e.resolve(l).then((function(t){f.value=t,a(f)}),(function(t){return n("throw",t,a,u)}))}u(c.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function P(e,n,r){var o=d;return function(i,a){if(o===m)throw Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var u=r.delegate;if(u){var c=R(u,r);if(c){if(c===g)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===d)throw o=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=m;var f=p(e,n,r);if("normal"===f.type){if(o=r.done?y:h,f.arg===g)continue;return{value:f.arg,done:r.done}}"throw"===f.type&&(o=y,r.method="throw",r.arg=f.arg)}}}function R(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,R(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var i=p(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function C(e){if(e||""===e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(v(e)+" is not iterable")}return b.prototype=w,o(E,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:b,configurable:!0}),b.displayName=l(w,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,l(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},A(S.prototype),l(S.prototype,u,(function(){return this})),e.AsyncIterator=S,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new S(s(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},A(E),l(E,c,"Generator"),l(E,a,(function(){return this})),l(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=C,D.prototype={constructor:D,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return u.type="throw",u.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),f=r.call(a,"finallyLoc");if(c&&f){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!f)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:C(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}function l(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){l(i,r,o,a,u,"next",t)}function u(t){l(i,r,o,a,u,"throw",t)}a(void 0)}))}}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){h(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function h(t,e,n){return(e=function(t){var e=function(t,e){if("object"!=v(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==v(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}System.register(["./router-legacy-DXU_NOBA.js"],(function(a,u){"use strict";var l,p;return{setters:[function(t){l=t.r,p=t.a}],execute:function(){function u(t){var e,n,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==v(t))if(Array.isArray(t)){var o=t.length;for(e=0;e<o;e++)t[e]&&(n=u(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}a({a:function(t,e,n,r){void 0===r&&(r={});var a=r,u=a.ancestorScroll,c=void 0===u||u,f=a.ancestorResize,l=void 0===f||f,s=a.elementResize,p=void 0===s?"function"==typeof ResizeObserver:s,h=a.layoutShift,v=void 0===h?"function"==typeof IntersectionObserver:h,m=a.animationFrame,x=void 0!==m&&m,w=ht(t),k=c||l?[].concat(i(w?st(w):[]),i(st(e))):[];k.forEach((function(t){c&&t.addEventListener("scroll",n,{passive:!0}),l&&t.addEventListener("resize",n)}));var O,L=w&&v?function(t,e){var n,r=null,o=J(t);function i(){var t;clearTimeout(n),null==(t=r)||t.disconnect(),r=null}function a(u,c){void 0===u&&(u=!1),void 0===c&&(c=1),i();var f=t.getBoundingClientRect(),l=f.left,s=f.top,p=f.width,h=f.height;if(u||e(),p&&h){var v={rootMargin:-b(s)+"px "+-b(o.clientWidth-(l+p))+"px "+-b(o.clientHeight-(s+h))+"px "+-b(l)+"px",threshold:g(0,y(1,c))||1},m=!0;try{r=new IntersectionObserver(x,d(d({},v),{},{root:o.ownerDocument}))}catch(w){r=new IntersectionObserver(x,v)}r.observe(t)}function x(t){var e=t[0].intersectionRatio;if(e!==c){if(!m)return a();e?a(!1,e):n=setTimeout((function(){a(!1,1e-7)}),1e3)}m=!1}}return a(!0),i}(w,n):null,E=-1,A=null;p&&(A=new ResizeObserver((function(t){var r=o(t,1)[0];r&&r.target===w&&A&&(A.unobserve(e),cancelAnimationFrame(E),E=requestAnimationFrame((function(){var t;null==(t=A)||t.observe(e)}))),n()})),w&&!x&&A.observe(w),A.observe(e));var S=x?gt(t):null;x&&function e(){var r=gt(t);!S||r.x===S.x&&r.y===S.y&&r.width===S.width&&r.height===S.height||n();S=r,O=requestAnimationFrame(e)}();return n(),function(){var t;k.forEach((function(t){c&&t.removeEventListener("scroll",n),l&&t.removeEventListener("resize",n)})),null==L||L(),null==(t=A)||t.disconnect(),A=null,x&&cancelAnimationFrame(O)}},c:function(){for(var t,e,n=0,r="",o=arguments.length;n<o;n++)(t=arguments[n])&&(e=u(t))&&(r&&(r+=" "),r+=e);return r},u:function(t){void 0===t&&(t={});var e=t,n=e.placement,r=void 0===n?"bottom":n,i=e.strategy,a=void 0===i?"absolute":i,u=e.middleware,c=void 0===u?[]:u,f=e.platform,s=e.elements,h=void 0===s?{}:s,v=h.reference,m=h.floating,y=e.transform,g=void 0===y||y,x=e.whileElementsMounted,b=e.open,w=o(l.useState({x:0,y:0,strategy:a,placement:r,middlewareData:{},isPositioned:!1}),2),k=w[0],O=w[1],L=o(l.useState(c),2),E=L[0],A=L[1];Mt(E,c)||A(c);var S=o(l.useState(null),2),P=S[0],R=S[1],T=o(l.useState(null),2),j=T[0],D=T[1],C=l.useCallback((function(t){t!==M.current&&(M.current=t,R(t))}),[]),F=l.useCallback((function(t){t!==N.current&&(N.current=t,D(t))}),[]),_=v||P,H=m||j,M=l.useRef(null),N=l.useRef(null),I=l.useRef(k),W=null!=x,B=Wt(x),V=Wt(f),G=Wt(b),z=l.useCallback((function(){if(M.current&&N.current){var t={placement:r,strategy:a,middleware:E};V.current&&(t.platform=V.current),_t(M.current,N.current,t).then((function(t){var e=d(d({},t),{},{isPositioned:!1!==G.current});$.current&&!Mt(I.current,e)&&(I.current=e,p.flushSync((function(){O(e)})))}))}}),[E,r,a,V,G]);Ht((function(){!1===b&&I.current.isPositioned&&(I.current.isPositioned=!1,O((function(t){return d(d({},t),{},{isPositioned:!1})})))}),[b]);var $=l.useRef(!1);Ht((function(){return $.current=!0,function(){$.current=!1}}),[]),Ht((function(){if(_&&(M.current=_),H&&(N.current=H),_&&H){if(B.current)return B.current(_,H,z);z()}}),[_,H,z,B,W]);var Y=l.useMemo((function(){return{reference:M,floating:N,setReference:C,setFloating:F}}),[C,F]),q=l.useMemo((function(){return{reference:_,floating:H}}),[_,H]),X=l.useMemo((function(){var t={position:a,left:0,top:0};if(!q.floating)return t;var e=It(q.floating,k.x),n=It(q.floating,k.y);return g?d(d({},t),{},{transform:"translate("+e+"px, "+n+"px)"},Nt(q.floating)>=1.5&&{willChange:"transform"}):{position:a,left:e,top:n}}),[a,g,q.floating,k.x,k.y]);return l.useMemo((function(){return d(d({},k),{},{update:z,refs:Y,elements:q,floatingStyles:X})}),[k,z,Y,q,X])}});var m=["top","right","bottom","left"],y=Math.min,g=Math.max,x=Math.round,b=Math.floor,w=function(t){return{x:t,y:t}},k={left:"right",right:"left",bottom:"top",top:"bottom"},O={start:"end",end:"start"};function L(t,e,n){return g(t,y(e,n))}function E(t,e){return"function"==typeof t?t(e):t}function A(t){return t.split("-")[0]}function S(t){return t.split("-")[1]}function P(t){return"x"===t?"y":"x"}function R(t){return"y"===t?"height":"width"}function T(t){return["top","bottom"].includes(A(t))?"y":"x"}function j(t){return P(T(t))}function D(t,e,n){void 0===n&&(n=!1);var r=S(t),o=j(t),i=R(o),a="x"===o?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return e.reference[i]>e.floating[i]&&(a=H(a)),[a,H(a)]}function C(t){var e=H(t);return[F(t),e,F(e)]}function F(t){return t.replace(/start|end/g,(function(t){return O[t]}))}function _(t,e,n,r){var o=S(t),i=function(t,e,n){var r=["left","right"],o=["right","left"];switch(t){case"top":case"bottom":return n?e?o:r:e?r:o;case"left":case"right":return e?["top","bottom"]:["bottom","top"];default:return[]}}(A(t),"start"===n,r);return o&&(i=i.map((function(t){return t+"-"+o})),e&&(i=i.concat(i.map(F)))),i}function H(t){return t.replace(/left|right|bottom|top/g,(function(t){return k[t]}))}function M(t){return"number"!=typeof t?function(t){return d({top:0,right:0,bottom:0,left:0},t)}(t):{top:t,right:t,bottom:t,left:t}}function N(t){var e=t.x,n=t.y,r=t.width,o=t.height;return{width:r,height:o,top:n,left:e,right:e+r,bottom:n+o,x:e,y:n}}function I(t,e,n){var r,o=t.reference,i=t.floating,a=T(e),u=j(e),c=R(u),f=A(e),l="y"===a,s=o.x+o.width/2-i.width/2,p=o.y+o.height/2-i.height/2,d=o[c]/2-i[c]/2;switch(f){case"top":r={x:s,y:o.y-i.height};break;case"bottom":r={x:s,y:o.y+o.height};break;case"right":r={x:o.x+o.width,y:p};break;case"left":r={x:o.x-i.width,y:p};break;default:r={x:o.x,y:o.y}}switch(S(e)){case"start":r[u]-=d*(n&&l?-1:1);break;case"end":r[u]+=d*(n&&l?-1:1)}return r}var W=function(){var t=s(f().mark((function t(e,n,r){var o,i,a,u,c,l,s,p,m,y,g,x,b,w,k,O,L,E,A,S,P,R,T,j,D,C;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=r.placement,i=void 0===o?"bottom":o,a=r.strategy,u=void 0===a?"absolute":a,c=r.middleware,l=void 0===c?[]:c,s=r.platform,p=l.filter(Boolean),t.next=4,null==s.isRTL?void 0:s.isRTL(n);case 4:return m=t.sent,t.next=7,s.getElementRects({reference:e,floating:n,strategy:u});case 7:y=t.sent,g=I(y,i,m),x=g.x,b=g.y,w=i,k={},O=0,L=0;case 13:if(!(L<p.length)){t.next=45;break}return E=p[L],A=E.name,S=E.fn,t.next=17,S({x:x,y:b,initialPlacement:i,placement:w,strategy:u,middlewareData:k,rects:y,platform:s,elements:{reference:e,floating:n}});case 17:if(P=t.sent,R=P.x,T=P.y,j=P.data,D=P.reset,x=null!=R?R:x,b=null!=T?T:b,k=d(d({},k),{},h({},A,d(d({},k[A]),j))),!(D&&O<=50)){t.next=42;break}if(O++,"object"!==v(D)){t.next=41;break}if(D.placement&&(w=D.placement),!D.rects){t.next=38;break}if(!0!==D.rects){t.next=36;break}return t.next=33,s.getElementRects({reference:e,floating:n,strategy:u});case 33:t.t0=t.sent,t.next=37;break;case 36:t.t0=D.rects;case 37:y=t.t0;case 38:C=I(y,w,m),x=C.x,b=C.y;case 41:L=-1;case 42:L++,t.next=13;break;case 45:return t.abrupt("return",{x:x,y:b,placement:w,strategy:u,middlewareData:k});case 46:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}();function B(t,e){return V.apply(this,arguments)}function V(){return V=s(f().mark((function t(e,n){var r,o,i,a,u,c,l,s,p,d,h,v,m,y,g,x,b,w,k,O,L,A,S,P,R;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return void 0===n&&(n={}),o=e.x,i=e.y,a=e.platform,u=e.rects,c=e.elements,l=e.strategy,s=E(n,e),p=s.boundary,d=void 0===p?"clippingAncestors":p,h=s.rootBoundary,v=void 0===h?"viewport":h,m=s.elementContext,y=void 0===m?"floating":m,g=s.altBoundary,x=void 0!==g&&g,b=s.padding,w=M(void 0===b?0:b),k="floating"===y?"reference":"floating",O=c[x?k:y],t.t0=N,t.t1=a,t.next=10,null==a.isElement?void 0:a.isElement(O);case 10:if(t.t2=r=t.sent,null==t.t2){t.next=15;break}t.t3=r,t.next=16;break;case 15:t.t3=!0;case 16:if(!t.t3){t.next=20;break}t.t4=O,t.next=26;break;case 20:if(t.t5=O.contextElement,t.t5){t.next=25;break}return t.next=24,null==a.getDocumentElement?void 0:a.getDocumentElement(c.floating);case 24:t.t5=t.sent;case 25:t.t4=t.t5;case 26:return t.t6=t.t4,t.t7=d,t.t8=v,t.t9=l,t.t10={element:t.t6,boundary:t.t7,rootBoundary:t.t8,strategy:t.t9},t.next=33,t.t1.getClippingRect.call(t.t1,t.t10);case 33:return t.t11=t.sent,L=(0,t.t0)(t.t11),A="floating"===y?{x:o,y:i,width:u.floating.width,height:u.floating.height}:u.reference,t.next=38,null==a.getOffsetParent?void 0:a.getOffsetParent(c.floating);case 38:return S=t.sent,t.next=41,null==a.isElement?void 0:a.isElement(S);case 41:if(!t.sent){t.next=50;break}return t.next=44,null==a.getScale?void 0:a.getScale(S);case 44:if(t.t13=t.sent,t.t13){t.next=47;break}t.t13={x:1,y:1};case 47:t.t12=t.t13,t.next=51;break;case 50:t.t12={x:1,y:1};case 51:if(P=t.t12,t.t14=N,!a.convertOffsetParentRelativeRectToViewportRelativeRect){t.next=59;break}return t.next=56,a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:A,offsetParent:S,strategy:l});case 56:t.t15=t.sent,t.next=60;break;case 59:t.t15=A;case 60:return t.t16=t.t15,R=(0,t.t14)(t.t16),t.abrupt("return",{top:(L.top-R.top+w.top)/P.y,bottom:(R.bottom-L.bottom+w.bottom)/P.y,left:(L.left-R.left+w.left)/P.x,right:(R.right-L.right+w.right)/P.x});case 63:case"end":return t.stop()}}),t)}))),V.apply(this,arguments)}function G(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function z(t){return m.some((function(e){return t[e]>=0}))}function $(t,e){return Y.apply(this,arguments)}function Y(){return Y=s(f().mark((function t(e,n){var r,o,i,a,u,c,l,s,p,d,h,v,m,y;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.placement,o=e.platform,i=e.elements,t.next=3,null==o.isRTL?void 0:o.isRTL(i.floating);case 3:return a=t.sent,u=A(r),c=S(r),l="y"===T(r),s=["left","top"].includes(u)?-1:1,p=a&&l?-1:1,d=E(n,e),h="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis},v=h.mainAxis,m=h.crossAxis,y=h.alignmentAxis,c&&"number"==typeof y&&(m="end"===c?-1*y:y),t.abrupt("return",l?{x:m*p,y:v*s}:{x:v*s,y:m*p});case 13:case"end":return t.stop()}}),t)}))),Y.apply(this,arguments)}function q(){return"undefined"!=typeof window}function X(t){return K(t)?(t.nodeName||"").toLowerCase():"#document"}function U(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function J(t){var e;return null==(e=(K(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function K(t){return!!q()&&(t instanceof Node||t instanceof U(t).Node)}function Q(t){return!!q()&&(t instanceof Element||t instanceof U(t).Element)}function Z(t){return!!q()&&(t instanceof HTMLElement||t instanceof U(t).HTMLElement)}function tt(t){return!(!q()||"undefined"==typeof ShadowRoot)&&(t instanceof ShadowRoot||t instanceof U(t).ShadowRoot)}function et(t){var e=ut(t),n=e.overflow,r=e.overflowX,o=e.overflowY,i=e.display;return/auto|scroll|overlay|hidden|clip/.test(n+o+r)&&!["inline","contents"].includes(i)}function nt(t){return["table","td","th"].includes(X(t))}function rt(t){return[":popover-open",":modal"].some((function(e){try{return t.matches(e)}catch(n){return!1}}))}function ot(t){var e=it(),n=Q(t)?ut(t):t;return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((function(t){return(n.willChange||"").includes(t)}))||["paint","layout","strict","content"].some((function(t){return(n.contain||"").includes(t)}))}function it(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function at(t){return["html","body","#document"].includes(X(t))}function ut(t){return U(t).getComputedStyle(t)}function ct(t){return Q(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function ft(t){if("html"===X(t))return t;var e=t.assignedSlot||t.parentNode||tt(t)&&t.host||J(t);return tt(e)?e.host:e}function lt(t){var e=ft(t);return at(e)?t.ownerDocument?t.ownerDocument.body:t.body:Z(e)&&et(e)?e:lt(e)}function st(t,e,n){var r;void 0===e&&(e=[]),void 0===n&&(n=!0);var o=lt(t),i=o===(null==(r=t.ownerDocument)?void 0:r.body),a=U(o);if(i){var u=pt(a);return e.concat(a,a.visualViewport||[],et(o)?o:[],u&&n?st(u):[])}return e.concat(o,st(o,[],n))}function pt(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function dt(t){var e=ut(t),n=parseFloat(e.width)||0,r=parseFloat(e.height)||0,o=Z(t),i=o?t.offsetWidth:n,a=o?t.offsetHeight:r,u=x(n)!==i||x(r)!==a;return u&&(n=i,r=a),{width:n,height:r,$:u}}function ht(t){return Q(t)?t:t.contextElement}function vt(t){var e=ht(t);if(!Z(e))return w(1);var n=e.getBoundingClientRect(),r=dt(e),o=r.width,i=r.height,a=r.$,u=(a?x(n.width):n.width)/o,c=(a?x(n.height):n.height)/i;return u&&Number.isFinite(u)||(u=1),c&&Number.isFinite(c)||(c=1),{x:u,y:c}}var mt=w(0);function yt(t){var e=U(t);return it()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:mt}function gt(t,e,n,r){void 0===e&&(e=!1),void 0===n&&(n=!1);var o=t.getBoundingClientRect(),i=ht(t),a=w(1);e&&(r?Q(r)&&(a=vt(r)):a=vt(t));var u=function(t,e,n){return void 0===e&&(e=!1),!(!n||e&&n!==U(t))&&e}(i,n,r)?yt(i):w(0),c=(o.left+u.x)/a.x,f=(o.top+u.y)/a.y,l=o.width/a.x,s=o.height/a.y;if(i)for(var p=U(i),d=r&&Q(r)?U(r):r,h=p,v=pt(h);v&&r&&d!==h;){var m=vt(v),y=v.getBoundingClientRect(),g=ut(v),x=y.left+(v.clientLeft+parseFloat(g.paddingLeft))*m.x,b=y.top+(v.clientTop+parseFloat(g.paddingTop))*m.y;c*=m.x,f*=m.y,l*=m.x,s*=m.y,c+=x,f+=b,v=pt(h=U(v))}return N({width:l,height:s,x:c,y:f})}function xt(t,e){var n=ct(t).scrollLeft;return e?e.left+n:gt(J(t)).left+n}function bt(t,e,n){var r;if("viewport"===e)r=function(t,e){var n=U(t),r=J(t),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,u=0,c=0;if(o){i=o.width,a=o.height;var f=it();(!f||f&&"fixed"===e)&&(u=o.offsetLeft,c=o.offsetTop)}return{width:i,height:a,x:u,y:c}}(t,n);else if("document"===e)r=function(t){var e=J(t),n=ct(t),r=t.ownerDocument.body,o=g(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),i=g(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight),a=-n.scrollLeft+xt(t),u=-n.scrollTop;return"rtl"===ut(r).direction&&(a+=g(e.clientWidth,r.clientWidth)-o),{width:o,height:i,x:a,y:u}}(J(t));else if(Q(e))r=function(t,e){var n=gt(t,!0,"fixed"===e),r=n.top+t.clientTop,o=n.left+t.clientLeft,i=Z(t)?vt(t):w(1);return{width:t.clientWidth*i.x,height:t.clientHeight*i.y,x:o*i.x,y:r*i.y}}(e,n);else{var o=yt(t);r=d(d({},e),{},{x:e.x-o.x,y:e.y-o.y})}return N(r)}function wt(t,e){var n=ft(t);return!(n===e||!Q(n)||at(n))&&("fixed"===ut(n).position||wt(n,e))}function kt(t,e,n){var r=Z(e),o=J(e),i="fixed"===n,a=gt(t,!0,i,e),u={scrollLeft:0,scrollTop:0},c=w(0);if(r||!r&&!i)if(("body"!==X(e)||et(o))&&(u=ct(e)),r){var f=gt(e,!0,i,e);c.x=f.x+e.clientLeft,c.y=f.y+e.clientTop}else o&&(c.x=xt(o));var l=0,s=0;if(o&&!r&&!i){var p=o.getBoundingClientRect();s=p.top+u.scrollTop,l=p.left+u.scrollLeft-xt(o,p)}return{x:a.left+u.scrollLeft-c.x-l,y:a.top+u.scrollTop-c.y-s,width:a.width,height:a.height}}function Ot(t){return"static"===ut(t).position}function Lt(t,e){if(!Z(t)||"fixed"===ut(t).position)return null;if(e)return e(t);var n=t.offsetParent;return J(t)===n&&(n=n.ownerDocument.body),n}function Et(t,e){var n=U(t);if(rt(t))return n;if(!Z(t)){for(var r=ft(t);r&&!at(r);){if(Q(r)&&!Ot(r))return r;r=ft(r)}return n}for(var o=Lt(t,e);o&&nt(o)&&Ot(o);)o=Lt(o,e);return o&&at(o)&&Ot(o)&&!ot(o)?n:o||function(t){for(var e=ft(t);Z(e)&&!at(e);){if(ot(e))return e;if(rt(e))return null;e=ft(e)}return null}(t)||n}var At=function(){var t=s(f().mark((function t(e){var n,r,o;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.getOffsetParent||Et,r=this.getDimensions,t.next=4,r(e.floating);case 4:return o=t.sent,t.t0=kt,t.t1=e.reference,t.next=9,n(e.floating);case 9:return t.t2=t.sent,t.t3=e.strategy,t.t4=(0,t.t0)(t.t1,t.t2,t.t3),t.t5={x:0,y:0,width:o.width,height:o.height},t.abrupt("return",{reference:t.t4,floating:t.t5});case 14:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}();var St={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){var e=t.elements,n=t.rect,r=t.offsetParent,o="fixed"===t.strategy,i=J(r),a=!!e&&rt(e.floating);if(r===i||a&&o)return n;var u={scrollLeft:0,scrollTop:0},c=w(1),f=w(0),l=Z(r);if((l||!l&&!o)&&(("body"!==X(r)||et(i))&&(u=ct(r)),Z(r))){var s=gt(r);c=vt(r),f.x=s.x+r.clientLeft,f.y=s.y+r.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-u.scrollLeft*c.x+f.x,y:n.y*c.y-u.scrollTop*c.y+f.y}},getDocumentElement:J,getClippingRect:function(t){var e=t.element,n=t.boundary,r=t.rootBoundary,o=t.strategy,a="clippingAncestors"===n?rt(e)?[]:function(t,e){var n=e.get(t);if(n)return n;for(var r=st(t,[],!1).filter((function(t){return Q(t)&&"body"!==X(t)})),o=null,i="fixed"===ut(t).position,a=i?ft(t):t;Q(a)&&!at(a);){var u=ut(a),c=ot(a);c||"fixed"!==u.position||(o=null),(i?!c&&!o:!c&&"static"===u.position&&o&&["absolute","fixed"].includes(o.position)||et(a)&&!c&&wt(t,a))?r=r.filter((function(t){return t!==a})):o=u,a=ft(a)}return e.set(t,r),r}(e,this._c):[].concat(n),u=[].concat(i(a),[r]),c=u[0],f=u.reduce((function(t,n){var r=bt(e,n,o);return t.top=g(r.top,t.top),t.right=y(r.right,t.right),t.bottom=y(r.bottom,t.bottom),t.left=g(r.left,t.left),t}),bt(e,c,o));return{width:f.right-f.left,height:f.bottom-f.top,x:f.left,y:f.top}},getOffsetParent:Et,getElementRects:At,getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){var e=dt(t);return{width:e.width,height:e.height}},getScale:vt,isElement:Q,isRTL:function(t){return"rtl"===ut(t).direction}};var Pt=function(t){return void 0===t&&(t=0),{name:"offset",options:t,fn:function(e){return s(f().mark((function n(){var r,o,i,a,u,c,l;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=e.x,a=e.y,u=e.placement,c=e.middlewareData,n.next=3,$(e,t);case 3:if(l=n.sent,u!==(null==(r=c.offset)?void 0:r.placement)||null==(o=c.arrow)||!o.alignmentOffset){n.next=6;break}return n.abrupt("return",{});case 6:return n.abrupt("return",{x:i+l.x,y:a+l.y,data:d(d({},l),{},{placement:u})});case 7:case"end":return n.stop()}}),n)})))()}}},Rt=function(t){return void 0===t&&(t={}),{name:"shift",options:t,fn:function(e){return s(f().mark((function r(){var o,i,a,u,l,s,p,v,m,y,g,x,b,w,k,O,S,R,j,D,C,F,_,H;return f().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=e.x,i=e.y,a=e.placement,u=E(t,e),l=u.mainAxis,s=void 0===l||l,p=u.crossAxis,v=void 0!==p&&p,m=u.limiter,y=void 0===m?{fn:function(t){return{x:t.x,y:t.y}}}:m,g=c(u,n),x={x:o,y:i},r.next=5,B(e,g);case 5:return b=r.sent,w=T(A(a)),k=P(w),O=x[k],S=x[w],s&&(R="y"===k?"bottom":"right",j=O+b["y"===k?"top":"left"],D=O-b[R],O=L(j,O,D)),v&&(C="y"===w?"bottom":"right",F=S+b["y"===w?"top":"left"],_=S-b[C],S=L(F,S,_)),H=y.fn(d(d({},e),{},h(h({},k,O),w,S))),r.abrupt("return",d(d({},H),{},{data:{x:H.x-o,y:H.y-i,enabled:h(h({},k,s),w,v)}}));case 14:case"end":return r.stop()}}),r)})))()}}},Tt=function(e){return void 0===e&&(e={}),{name:"flip",options:e,fn:function(n){return s(f().mark((function r(){var o,a,u,l,s,p,d,h,v,m,y,g,x,b,w,k,O,L,S,P,R,j,F,M,N,I,W,V,G,z,$,Y,q,X,U,J,K,Q,Z;return f().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(u=n.placement,l=n.middlewareData,s=n.rects,p=n.initialPlacement,d=n.platform,h=n.elements,v=E(e,n),m=v.mainAxis,y=void 0===m||m,g=v.crossAxis,x=void 0===g||g,b=v.fallbackPlacements,w=v.fallbackStrategy,k=void 0===w?"bestFit":w,O=v.fallbackAxisSideDirection,L=void 0===O?"none":O,S=v.flipAlignment,P=void 0===S||S,R=c(v,t),null==(o=l.arrow)||!o.alignmentOffset){r.next=4;break}return r.abrupt("return",{});case 4:return j=A(u),F=T(p),M=A(p)===p,r.next=9,null==d.isRTL?void 0:d.isRTL(h.floating);case 9:return N=r.sent,I=b||(M||!P?[H(p)]:C(p)),W="none"!==L,!b&&W&&I.push.apply(I,i(_(p,P,L,N))),V=[p].concat(i(I)),r.next=16,B(n,R);case 16:if(G=r.sent,z=[],$=(null==(a=l.flip)?void 0:a.overflows)||[],y&&z.push(G[j]),x&&(Y=D(u,s,N),z.push(G[Y[0]],G[Y[1]])),$=[].concat(i($),[{placement:u,overflows:z}]),z.every((function(t){return t<=0}))){r.next=39;break}if(U=((null==(q=l.flip)?void 0:q.index)||0)+1,!(J=V[U])){r.next=27;break}return r.abrupt("return",{data:{index:U,overflows:$},reset:{placement:J}});case 27:if(K=null==(X=$.filter((function(t){return t.overflows[0]<=0})).sort((function(t,e){return t.overflows[1]-e.overflows[1]}))[0])?void 0:X.placement){r.next=37;break}r.t0=k,r.next="bestFit"===r.t0?32:"initialPlacement"===r.t0?35:37;break;case 32:return Z=null==(Q=$.filter((function(t){if(W){var e=T(t.placement);return e===F||"y"===e}return!0})).map((function(t){return[t.placement,t.overflows.filter((function(t){return t>0})).reduce((function(t,e){return t+e}),0)]})).sort((function(t,e){return t[1]-e[1]}))[0])?void 0:Q[0],Z&&(K=Z),r.abrupt("break",37);case 35:return K=p,r.abrupt("break",37);case 37:if(u===K){r.next=39;break}return r.abrupt("return",{reset:{placement:K}});case 39:return r.abrupt("return",{});case 40:case"end":return r.stop()}}),r)})))()}}},jt=function(t){return void 0===t&&(t={}),{name:"size",options:t,fn:function(e){return s(f().mark((function n(){var o,i,a,u,l,s,p,h,v,m,x,b,w,k,O,L,P,R,j,D,C,F,_,H,M,N,I,W,V,G,z;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=e.placement,u=e.rects,l=e.platform,s=e.elements,p=E(t,e),h=p.apply,v=void 0===h?function(){}:h,m=c(p,r),n.next=4,B(e,m);case 4:if(x=n.sent,b=A(a),w=S(a),k="y"===T(a),O=u.floating,L=O.width,P=O.height,"top"!==b&&"bottom"!==b){n.next=28;break}return R=b,n.t0=w,n.next=14,null==l.isRTL?void 0:l.isRTL(s.floating);case 14:if(!n.sent){n.next=18;break}n.t1="start",n.next=19;break;case 18:n.t1="end";case 19:if(n.t2=n.t1,n.t0!==n.t2){n.next=24;break}n.t3="left",n.next=25;break;case 24:n.t3="right";case 25:j=n.t3,n.next=30;break;case 28:j=b,R="end"===w?"top":"bottom";case 30:return D=P-x.top-x.bottom,C=L-x.left-x.right,F=y(P-x[R],D),_=y(L-x[j],C),H=!e.middlewareData.shift,M=F,N=_,null!=(o=e.middlewareData.shift)&&o.enabled.x&&(N=C),null!=(i=e.middlewareData.shift)&&i.enabled.y&&(M=D),H&&!w&&(I=g(x.left,0),W=g(x.right,0),V=g(x.top,0),G=g(x.bottom,0),k?N=L-2*(0!==I||0!==W?I+W:g(x.left,x.right)):M=P-2*(0!==V||0!==G?V+G:g(x.top,x.bottom))),n.next=42,v(d(d({},e),{},{availableWidth:N,availableHeight:M}));case 42:return n.next=44,l.getDimensions(s.floating);case 44:if(z=n.sent,L===z.width&&P===z.height){n.next=47;break}return n.abrupt("return",{reset:{rects:!0}});case 47:return n.abrupt("return",{});case 48:case"end":return n.stop()}}),n)})))()}}},Dt=function(t){return void 0===t&&(t={}),{name:"hide",options:t,fn:function(n){return s(f().mark((function r(){var o,i,a,u,l,s,p,h,v;return f().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:o=n.rects,i=E(t,n),a=i.strategy,u=void 0===a?"referenceHidden":a,l=c(i,e),r.t0=u,r.next="referenceHidden"===r.t0?5:"escaped"===r.t0?10:15;break;case 5:return r.next=7,B(n,d(d({},l),{},{elementContext:"reference"}));case 7:return s=r.sent,p=G(s,o.reference),r.abrupt("return",{data:{referenceHiddenOffsets:p,referenceHidden:z(p)}});case 10:return r.next=12,B(n,d(d({},l),{},{altBoundary:!0}));case 12:return h=r.sent,v=G(h,o.floating),r.abrupt("return",{data:{escapedOffsets:v,escaped:z(v)}});case 15:return r.abrupt("return",{});case 16:case"end":return r.stop()}}),r)})))()}}},Ct=function(t){return{name:"arrow",options:t,fn:function(e){return s(f().mark((function n(){var r,o,i,a,u,c,l,s,p,v,m,g,x,b,w,k,O,A,P,T,D,C,F,_,H,N,I,W,B,V,G,z,$,Y;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=e.x,o=e.y,i=e.placement,a=e.rects,u=e.platform,c=e.elements,l=e.middlewareData,s=E(t,e)||{},p=s.element,v=s.padding,m=void 0===v?0:v,null!=p){n.next=4;break}return n.abrupt("return",{});case 4:return g=M(m),x={x:r,y:o},b=j(i),w=R(b),n.next=10,u.getDimensions(p);case 10:return k=n.sent,A=(O="y"===b)?"top":"left",P=O?"bottom":"right",T=O?"clientHeight":"clientWidth",D=a.reference[w]+a.reference[b]-x[b]-a.floating[w],C=x[b]-a.reference[b],n.next=19,null==u.getOffsetParent?void 0:u.getOffsetParent(p);case 19:if(F=n.sent,_=F?F[T]:0,n.t0=!_,n.t0){n.next=26;break}return n.next=25,null==u.isElement?void 0:u.isElement(F);case 25:n.t0=!n.sent;case 26:if(!n.t0){n.next=28;break}_=c.floating[T]||a.floating[w];case 28:return H=D/2-C/2,N=_/2-k[w]/2-1,I=y(g[A],N),W=y(g[P],N),B=I,V=_-k[w]-W,G=_/2-k[w]/2+H,z=L(B,G,V),$=!l.arrow&&null!=S(i)&&G!==z&&a.reference[w]/2-(G<B?I:W)-k[w]/2<0,Y=$?G<B?G-B:G-V:0,n.abrupt("return",h(h(h({},b,x[b]+Y),"data",d(h(h({},b,z),"centerOffset",G-z-Y),$&&{alignmentOffset:Y})),"reset",$));case 39:case"end":return n.stop()}}),n)})))()}}},Ft=function(t){return void 0===t&&(t={}),{options:t,fn:function(e){var n=e.x,r=e.y,o=e.placement,i=e.rects,a=e.middlewareData,u=E(t,e),c=u.offset,f=void 0===c?0:c,l=u.mainAxis,s=void 0===l||l,p=u.crossAxis,v=void 0===p||p,m={x:n,y:r},y=T(o),g=P(y),x=m[g],b=m[y],w=E(f,e),k="number"==typeof w?{mainAxis:w,crossAxis:0}:d({mainAxis:0,crossAxis:0},w);if(s){var O="y"===g?"height":"width",L=i.reference[g]-i.floating[O]+k.mainAxis,S=i.reference[g]+i.reference[O]-k.mainAxis;x<L?x=L:x>S&&(x=S)}if(v){var R,j,D="y"===g?"width":"height",C=["top","left"].includes(A(o)),F=i.reference[y]-i.floating[D]+(C&&(null==(R=a.offset)?void 0:R[y])||0)+(C?0:k.crossAxis),_=i.reference[y]+i.reference[D]+(C?0:(null==(j=a.offset)?void 0:j[y])||0)-(C?k.crossAxis:0);b<F?b=F:b>_&&(b=_)}return h(h({},g,x),y,b)}}},_t=function(t,e,n){var r=new Map,o=d({platform:St},n),i=d(d({},o.platform),{},{_c:r});return W(t,e,d(d({},o),{},{platform:i}))},Ht="undefined"!=typeof document?l.useLayoutEffect:l.useEffect;function Mt(t,e){if(t===e)return!0;if(v(t)!==v(e))return!1;if("function"==typeof t&&t.toString()===e.toString())return!0;var n,r,o;if(t&&e&&"object"===v(t)){if(Array.isArray(t)){if((n=t.length)!==e.length)return!1;for(r=n;0!=r--;)if(!Mt(t[r],e[r]))return!1;return!0}if((n=(o=Object.keys(t)).length)!==Object.keys(e).length)return!1;for(r=n;0!=r--;)if(!{}.hasOwnProperty.call(e,o[r]))return!1;for(r=n;0!=r--;){var i=o[r];if(("_owner"!==i||!t.$$typeof)&&!Mt(t[i],e[i]))return!1}return!0}return t!=t&&e!=e}function Nt(t){return"undefined"==typeof window?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function It(t,e){var n=Nt(t);return Math.round(e*n)/n}function Wt(t){var e=l.useRef(t);return Ht((function(){e.current=t})),e}a("o",(function(t,e){return d(d({},Pt(t)),{},{options:[t,e]})})),a("s",(function(t,e){return d(d({},Rt(t)),{},{options:[t,e]})})),a("l",(function(t,e){return d(d({},Ft(t)),{},{options:[t,e]})})),a("f",(function(t,e){return d(d({},Tt(t)),{},{options:[t,e]})})),a("b",(function(t,e){return d(d({},jt(t)),{},{options:[t,e]})})),a("h",(function(t,e){return d(d({},Dt(t)),{},{options:[t,e]})})),a("d",(function(t,e){return d(d({},function(t){return{name:"arrow",options:t,fn:function(e){var n,r="function"==typeof t?t(e):t,o=r.element,i=r.padding;return o&&(n=o,{}.hasOwnProperty.call(n,"current"))?null!=o.current?Ct({element:o.current,padding:i}).fn(e):{}:o?Ct({element:o,padding:i}).fn(e):{}}}}(t)),{},{options:[t,e]})}))}}}))}();
