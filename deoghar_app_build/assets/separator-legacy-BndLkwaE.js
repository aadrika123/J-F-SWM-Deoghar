!function(){function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},r(t)}var t=["decorative","orientation"],e=["className","orientation","decorative"];function n(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function o(t,e,n){return(e=function(t){var e=function(t,e){if("object"!=r(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==r(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(r,t){if(null==r)return{};var e,n,o=function(r,t){if(null==r)return{};var e={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(t.includes(n))continue;e[n]=r[n]}return e}(r,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);for(n=0;n<i.length;n++)e=i[n],t.includes(e)||{}.propertyIsEnumerable.call(r,e)&&(o[e]=r[e])}return o}System.register(["./index-legacy-DNKTp0nq.js","./router-legacy-DYc8ozZp.js"],(function(r,a){"use strict";var c,u,l,f,s;return{setters:[function(r){c=r.I,u=r.l,l=r.j,f=r.y},function(r){s=r.r}],execute:function(){var a="horizontal",p=["horizontal","vertical"],y=s.forwardRef((function(r,e){var n=r.decorative,o=r.orientation,l=void 0===o?a:o,f=i(r,t),p=v(l)?l:a,y=n?{role:"none"}:{"aria-orientation":"vertical"===p?p:void 0,role:"separator"};return s.createElement(c.div,u({"data-orientation":p},y,f,{ref:e}))}));function v(r){return p.includes(r)}y.propTypes={orientation:function(r,t,e){var n=r[t],o=String(n);return n&&!v(n)?new Error(function(r,t){return"Invalid prop `orientation` of value `".concat(r,"` supplied to `").concat(t,"`, expected one of:\n  - horizontal\n  - vertical\n\nDefaulting to `").concat(a,"`.")}(o,e)):null}};var b=y,d=r("S",s.forwardRef((function(r,t){var a=r.className,c=r.orientation,u=void 0===c?"horizontal":c,s=r.decorative,p=void 0===s||s,y=i(r,e);return l.jsx(b,function(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?n(Object(e),!0).forEach((function(t){o(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):n(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}({ref:t,decorative:p,orientation:u,className:f("shrink-0 bg-zinc-200 dark:bg-zinc-800","horizontal"===u?"h-[1px] w-full":"h-full w-[1px]",a)},y))})));d.displayName=b.displayName}}}))}();
