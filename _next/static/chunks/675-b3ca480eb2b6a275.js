(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[675],{8045:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(l){c=!0,o=l}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}t.default=function(e){var t=e.src,r=e.sizes,n=e.unoptimized,a=void 0!==n&&n,c=e.priority,l=void 0!==c&&c,f=e.loading,p=e.lazyRoot,h=void 0===p?null:p,v=e.lazyBoundary,w=void 0===v?"200px":v,A=e.className,S=e.quality,j=e.width,O=e.height,z=e.objectFit,I=e.objectPosition,L=e.onLoadingComplete,R=e.loader,_=void 0===R?x:R,P=e.placeholder,M=void 0===P?"empty":P,C=e.blurDataURL,D=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),q=u.useRef(null),U=D,N=r?"responsive":"intrinsic";"layout"in U&&(U.layout&&(N=U.layout),delete U.layout);var T="";if(function(e){return"object"===typeof e&&(b(e)||function(e){return void 0!==e.src}(e))}(t)){var W=b(t)?t.default:t;if(!W.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(W)));if(C=C||W.blurDataURL,T=W.src,(!N||"fill"!==N)&&(O=O||W.height,j=j||W.width,!W.height||!W.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(W)))}t="string"===typeof t?t:T;var H=E(j),B=E(O),K=E(S),F=!l&&("lazy"===f||"undefined"===typeof f);(t.startsWith("data:")||t.startsWith("blob:"))&&(a=!0,F=!1);m.has(t)&&(F=!1);0;var V,$=i(d.useIntersection({rootRef:h,rootMargin:w,disabled:!F}),2),J=$[0],G=$[1],Q=!F||G,X={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},Y={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},Z=!1,ee={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:z,objectPosition:I},te="blur"===M?{filter:"blur(20px)",backgroundSize:z||"cover",backgroundImage:'url("'.concat(C,'")'),backgroundPosition:I||"0% 0%"}:{};if("fill"===N)X.display="block",X.position="absolute",X.top=0,X.left=0,X.bottom=0,X.right=0;else if("undefined"!==typeof H&&"undefined"!==typeof B){var re=B/H,ne=isNaN(re)?"100%":"".concat(100*re,"%");"responsive"===N?(X.display="block",X.position="relative",Z=!0,Y.paddingTop=ne):"intrinsic"===N?(X.display="inline-block",X.position="relative",X.maxWidth="100%",Z=!0,Y.maxWidth="100%",V="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(H,"%27%20height=%27").concat(B,"%27/%3e")):"fixed"===N&&(X.display="inline-block",X.position="relative",X.width=H,X.height=B)}else 0;var oe={src:g,srcSet:void 0,sizes:void 0};Q&&(oe=k({src:t,unoptimized:a,layout:N,width:H,quality:K,sizes:r,loader:_}));var ie=t;0;var ae;0;var ce=(o(ae={},"imagesrcset",oe.srcSet),o(ae,"imagesizes",oe.sizes),ae),le=u.default.useLayoutEffect,ue=u.useRef(L);return u.useEffect((function(){ue.current=L}),[L]),le((function(){J(q.current)}),[J]),u.useEffect((function(){!function(e,t,r,n,o){var i=function(){var r=e.current;r&&(r.src!==g&&("decode"in r?r.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.current&&(m.add(t),"blur"===n&&(r.style.filter="",r.style.backgroundSize="",r.style.backgroundImage="",r.style.backgroundPosition=""),o.current)){var i=r.naturalWidth,a=r.naturalHeight;o.current({naturalWidth:i,naturalHeight:a})}})))};e.current&&(e.current.complete?i():e.current.onload=i)}(q,ie,0,M,ue)}),[ie,N,M,Q]),u.default.createElement("span",{style:X},Z?u.default.createElement("span",{style:Y},V?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:V}):null):null,u.default.createElement("img",Object.assign({},U,oe,{decoding:"async","data-nimg":N,className:A,ref:q,style:y({},ee,te)})),F&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},U,k({src:t,unoptimized:a,layout:N,width:H,quality:K,sizes:r,loader:_}),{decoding:"async","data-nimg":N,style:ee,className:A,loading:f||"lazy"}))),l?u.default.createElement(s.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+oe.src+oe.srcSet+oe.sizes,rel:"preload",as:"image",href:oe.srcSet?void 0:oe.src},ce))):null)};var l,u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294)),s=(l=r(5443))&&l.__esModule?l:{default:l},f=r(5809),d=r(7190);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e){for(var t=arguments,r=function(r){var n=null!=t[r]?t[r]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){p(e,t,n[t])}))},n=1;n<arguments.length;n++)r(n);return e}var m=new Set,g=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var h=new Map([["default",function(e){var t=e.root,r=e.src,n=e.width,o=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(o||75)}],["imgix",function(e){var t=e.root,r=e.src,n=e.width,o=e.quality,i=new URL("".concat(t).concat(z(r))),a=i.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||n.toString()),o&&a.set("q",o.toString());return i.href}],["cloudinary",function(e){var t=e.root,r=e.src,n=e.width,o=e.quality,i=["f_auto","c_limit","w_"+n,"q_"+(o||"auto")].join(",")+"/";return"".concat(t).concat(i).concat(z(r))}],["akamai",function(e){var t=e.root,r=e.src,n=e.width;return"".concat(t).concat(z(r),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function b(e){return void 0!==e.default}var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai"}||f.imageConfigDefault,w=v.deviceSizes,A=v.imageSizes,S=v.loader,j=v.path,O=(v.domains,a(w).concat(a(A)));function k(e){var t=e.src,r=e.unoptimized,n=e.layout,o=e.width,i=e.quality,c=e.sizes,l=e.loader;if(r)return{src:t,srcSet:void 0,sizes:void 0};var u=function(e,t,r){if(r&&("fill"===t||"responsive"===t)){for(var n,o=/(^|\s)(1?\d?\d)vw/g,i=[];n=o.exec(r);n)i.push(parseInt(n[2]));if(i.length){var c,l=.01*(c=Math).min.apply(c,a(i));return{widths:O.filter((function(e){return e>=w[0]*l})),kind:"w"}}return{widths:O,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:w,kind:"w"}:{widths:a(new Set([e,2*e].map((function(e){return O.find((function(t){return t>=e}))||O[O.length-1]})))),kind:"x"}}(o,n,c),s=u.widths,f=u.kind,d=s.length-1;return{sizes:c||"w"!==f?c:"100vw",srcSet:s.map((function(e,r){return"".concat(l({src:t,quality:i,width:e})," ").concat("w"===f?e:r+1).concat(f)})).join(", "),src:l({src:t,quality:i,width:s[d]})}}function E(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function x(e){var t=h.get(S);if(t)return t(y({root:j},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(S))}function z(e){return"/"===e[0]?e.slice(1):e}w.sort((function(e,t){return e-t})),O.sort((function(e,t){return e-t}))},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(l){c=!0,o=l}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var i,a=(i=r(7294))&&i.__esModule?i:{default:i},c=r(6273),l=r(387),u=r(7190);var s={};function f(e,t,r,n){if(e&&c.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=l.useRouter(),i=a.default.useMemo((function(){var t=o(c.resolveHref(n,e.href,!0),2),r=t[0],i=t[1];return{href:r,as:e.as?c.resolveHref(n,e.as):i||r}}),[n,e.href,e.as]),d=i.href,p=i.as,y=e.children,m=e.replace,g=e.shallow,h=e.scroll,b=e.locale;"string"===typeof y&&(y=a.default.createElement("a",null,y));var v=(t=a.default.Children.only(y))&&"object"===typeof t&&t.ref,w=o(u.useIntersection({rootMargin:"200px"}),2),A=w[0],S=w[1],j=a.default.useCallback((function(e){A(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,A]);a.default.useEffect((function(){var e=S&&r&&c.isLocalURL(d),t="undefined"!==typeof b?b:n&&n.locale,o=s[d+"%"+p+(t?"%"+t:"")];e&&!o&&f(n,d,p,{locale:t})}),[p,d,S,b,r,n]);var O={ref:j,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,i,a,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(r))&&(e.preventDefault(),null==a&&n.indexOf("#")>=0&&(a=!1),t[o?"replace":"push"](r,n,{shallow:i,locale:l,scroll:a}))}(e,n,d,p,m,g,h,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof b?b:n&&n.locale,E=n&&n.isLocaleDomain&&c.getDomainLocale(p,k,n&&n.locales,n&&n.domainLocales);O.href=E||c.addBasePath(c.addLocale(p,k,n&&n.defaultLocale))}return a.default.cloneElement(t,O)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(l){c=!0,o=l}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!c,u=i.useRef(),s=o(i.useState(!1),2),f=s[0],d=s[1],p=o(i.useState(t?t.current:null),2),y=p[0],m=p[1],g=i.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||f||e&&e.tagName&&(u.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=l.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,i=n.observer,a=n.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),l.delete(o))}}(e,(function(e){return e&&d(e)}),{root:y,rootMargin:r}))}),[n,y,r,f]);return i.useEffect((function(){if(!c&&!f){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),i.useEffect((function(){t&&m(t.current)}),[t]),[g,f]};var i=r(7294),a=r(9311),c="undefined"!==typeof IntersectionObserver;var l=new Map},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},9008:function(e,t,r){r(5443)},5675:function(e,t,r){e.exports=r(8045)},1664:function(e,t,r){e.exports=r(8418)},1163:function(e,t,r){e.exports=r(387)}}]);