exports.id=5667,exports.ids=[5667],exports.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},953:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addBasePath",{enumerable:!0,get:function(){return i}});let n=r(475),o=r(8364);function i(e,t){return(0,o.normalizePathTrailingSlash)((0,n.addPathPrefix)(e,""))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1443:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return n}}),r(8364);let n=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return e};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6691:(e,t)=>{"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ACTION_FAST_REFRESH:function(){return s},ACTION_NAVIGATE:function(){return i},ACTION_PREFETCH:function(){return a},ACTION_REFRESH:function(){return o},ACTION_RESTORE:function(){return u},ACTION_SERVER_ACTION:function(){return f},ACTION_SERVER_PATCH:function(){return l},PrefetchCacheEntryStatus:function(){return n},PrefetchKind:function(){return r},isThenable:function(){return c}});let o="refresh",i="navigate",u="restore",l="server-patch",a="prefetch",s="fast-refresh",f="server-action";function c(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(function(e){e.AUTO="auto",e.FULL="full",e.TEMPORARY="temporary"})(r||(r={})),function(e){e.fresh="fresh",e.reusable="reusable",e.expired="expired",e.stale="stale"}(n||(n={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4318:(e,t,r)=>{"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(8364),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9142:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"hasBasePath",{enumerable:!0,get:function(){return o}});let n=r(8106);function o(e){return(0,n.pathHasPrefix)(e,"")}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6541:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return v}});let n=r(167),o=r(8760),i=r(997),u=o._(r(6689)),l=n._(r(6405)),a=n._(r(7828)),s=r(7367),f=r(7903),c=r(6218);r(1997);let d=r(5469),p=n._(r(6663)),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e,t,r,n,o,i,u){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function m(e){let[t,r]=u.version.split(".",2),n=parseInt(t,10),o=parseInt(r,10);return n>18||18===n&&o>=3?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let y=(0,u.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:o,height:l,width:a,decoding:s,className:f,style:c,fetchPriority:d,placeholder:p,loading:h,unoptimized:y,fill:b,onLoadRef:v,onLoadingCompleteRef:_,setBlurComplete:P,setShowAltText:j,sizesInput:O,onLoad:x,onError:M,...R}=e;return(0,i.jsx)("img",{...R,...m(d),loading:h,width:a,height:l,decoding:s,"data-nimg":b?"fill":"1",className:f,style:c,sizes:o,srcSet:n,src:r,ref:(0,u.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(M&&(e.src=e.src),e.complete&&g(e,p,v,_,P,y,O))},[r,p,v,_,P,M,y,O,t]),onLoad:e=>{g(e.currentTarget,p,v,_,P,y,O)},onError:e=>{j(!0),"empty"!==p&&P(!0),M&&M(e)}})});function b(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...m(r.fetchPriority)};return t&&l.default.preload?(l.default.preload(r.src,n),null):(0,i.jsx)(a.default,{children:(0,i.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let v=(0,u.forwardRef)((e,t)=>{let r=(0,u.useContext)(d.RouterContext),n=(0,u.useContext)(c.ImageConfigContext),o=(0,u.useMemo)(()=>{let e=h||n||f.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:l,onLoadingComplete:a}=e,g=(0,u.useRef)(l);(0,u.useEffect)(()=>{g.current=l},[l]);let m=(0,u.useRef)(a);(0,u.useEffect)(()=>{m.current=a},[a]);let[v,_]=(0,u.useState)(!1),[P,j]=(0,u.useState)(!1),{props:O,meta:x}=(0,s.getImgProps)(e,{defaultLoader:p.default,imgConf:o,blurComplete:v,showAltText:P});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(y,{...O,unoptimized:x.unoptimized,placeholder:x.placeholder,fill:x.fill,onLoadRef:g,onLoadingCompleteRef:m,setBlurComplete:_,setShowAltText:j,sizesInput:e.sizes,ref:t}),x.priority?(0,i.jsx)(b,{isAppRouter:!r,imgAttributes:O}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9577:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});let n=r(167),o=r(997),i=n._(r(6689)),u=r(1401),l=r(2045),a=r(7420),s=r(7201),f=r(1443),c=r(5469),d=r(7443),p=r(2905),h=r(4318),g=r(953),m=r(6691);function y(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let b=i.default.forwardRef(function(e,t){let r,n;let{href:a,as:b,children:v,prefetch:_=null,passHref:P,replace:j,shallow:O,scroll:x,locale:M,onClick:R,onMouseEnter:S,onTouchStart:w,legacyBehavior:C=!1,...E}=e;r=v,C&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let A=i.default.useContext(c.RouterContext),I=i.default.useContext(d.AppRouterContext),T=null!=A?A:I,k=!A,z=!1!==_,U=null===_?m.PrefetchKind.AUTO:m.PrefetchKind.FULL,{href:L,as:N}=i.default.useMemo(()=>{if(!A){let e=y(a);return{href:e,as:b?y(b):e}}let[e,t]=(0,u.resolveHref)(A,a,!0);return{href:e,as:b?(0,u.resolveHref)(A,b):t||e}},[A,a,b]),D=i.default.useRef(L),W=i.default.useRef(N);C&&(n=i.default.Children.only(r));let G=C?n&&"object"==typeof n&&n.ref:t,[F,H,q]=(0,p.useIntersection)({rootMargin:"200px"}),B=i.default.useCallback(e=>{(W.current!==N||D.current!==L)&&(q(),W.current=N,D.current=L),F(e),G&&("function"==typeof G?G(e):"object"==typeof G&&(G.current=e))},[N,G,L,q,F]);i.default.useEffect(()=>{},[N,L,H,M,z,null==A?void 0:A.locale,T,k,U]);let K={ref:B,onClick(e){C||"function"!=typeof R||R(e),C&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),T&&!e.defaultPrevented&&function(e,t,r,n,o,u,a,s,f){let{nodeName:c}=e.currentTarget;if("A"===c.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!f&&!(0,l.isLocalURL)(r)))return;e.preventDefault();let d=()=>{let e=null==a||a;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:u,locale:s,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})};f?i.default.startTransition(d):d()}(e,T,L,N,j,O,x,M,k)},onMouseEnter(e){C||"function"!=typeof S||S(e),C&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e)},onTouchStart:function(e){C||"function"!=typeof w||w(e),C&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e)}};if((0,s.isAbsoluteUrl)(N))K.href=N;else if(!C||P||"a"===n.type&&!("href"in n.props)){let e=void 0!==M?M:null==A?void 0:A.locale,t=(null==A?void 0:A.isLocaleDomain)&&(0,h.getDomainLocale)(N,e,null==A?void 0:A.locales,null==A?void 0:A.domainLocales);K.href=t||(0,g.addBasePath)((0,f.addLocale)(N,e,null==A?void 0:A.defaultLocale))}return C?i.default.cloneElement(n,K):(0,o.jsx)("a",{...E,...K,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8364:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"normalizePathTrailingSlash",{enumerable:!0,get:function(){return i}});let n=r(9362),o=r(2107),i=e=>{if(!e.startsWith("/"))return e;let{pathname:t,query:r,hash:i}=(0,o.parsePath)(e);return""+(0,n.removeTrailingSlash)(t)+r+i};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3815:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{cancelIdleCallback:function(){return n},requestIdleCallback:function(){return r}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1401:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"resolveHref",{enumerable:!0,get:function(){return c}});let n=r(8260),o=r(7420),i=r(3061),u=r(7201),l=r(8364),a=r(2045),s=r(5722),f=r(4321);function c(e,t,r){let c;let d="string"==typeof t?t:(0,o.formatWithValidation)(t),p=d.match(/^[a-zA-Z]{1,}:\/\//),h=p?d.slice(p[0].length):d;if((h.split("?",1)[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+d+"' passed to next/router in page: '"+e.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");let t=(0,u.normalizeRepeatedSlashes)(h);d=(p?p[0]:"")+t}if(!(0,a.isLocalURL)(d))return r?[d]:d;try{c=new URL(d.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(e){c=new URL("/","http://n")}try{let e=new URL(d,c);e.pathname=(0,l.normalizePathTrailingSlash)(e.pathname);let t="";if((0,s.isDynamicRoute)(e.pathname)&&e.searchParams&&r){let r=(0,n.searchParamsToUrlQuery)(e.searchParams),{result:u,params:l}=(0,f.interpolateAs)(e.pathname,e.pathname,r);u&&(t=(0,o.formatWithValidation)({pathname:u,hash:e.hash,query:(0,i.omit)(r,l)}))}let u=e.origin===c.origin?e.href.slice(e.origin.length):e.href;return r?[u,t||u]:u}catch(e){return r?[d]:d}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2905:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let n=r(6689),o=r(3815),i="function"==typeof IntersectionObserver,u=new Map,l=[];function a(e){let{rootRef:t,rootMargin:r,disabled:a}=e,s=a||!i,[f,c]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(i){if(s||f)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=l.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=u.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},l.push(r),u.set(r,t),t}(r);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),u.delete(n);let e=l.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&c(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!f){let e=(0,o.requestIdleCallback)(()=>c(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,r,t,f,d.current]),[p,f,(0,n.useCallback)(()=>{c(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5495:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},1885:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return o}});let r=/[|\\{}()[\]^$+*?.-]/,n=/[|\\{}()[\]^$+*?.-]/g;function o(e){return r.test(e)?e.replace(n,"\\$&"):e}},7367:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),r(1997);let n=r(9919),o=r(7903);function i(e){return void 0!==e.default}function u(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var r;let l,a,s,{src:f,sizes:c,unoptimized:d=!1,priority:p=!1,loading:h,className:g,quality:m,width:y,height:b,fill:v=!1,style:_,overrideSrc:P,onLoad:j,onLoadingComplete:O,placeholder:x="empty",blurDataURL:M,fetchPriority:R,layout:S,objectFit:w,objectPosition:C,lazyBoundary:E,lazyRoot:A,...I}=e,{imgConf:T,showAltText:k,blurComplete:z,defaultLoader:U}=t,L=T||o.imageConfigDefault;if("allSizes"in L)l=L;else{let e=[...L.deviceSizes,...L.imageSizes].sort((e,t)=>e-t),t=L.deviceSizes.sort((e,t)=>e-t);l={...L,allSizes:e,deviceSizes:t}}if(void 0===U)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let N=I.loader||U;delete I.loader,delete I.srcSet;let D="__next_img_default"in N;if(D){if("custom"===l.loader)throw Error('Image with src "'+f+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=N;N=t=>{let{config:r,...n}=t;return e(n)}}if(S){"fill"===S&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[S];e&&(_={..._,...e});let t={responsive:"100vw",fill:"100vw"}[S];t&&!c&&(c=t)}let W="",G=u(y),F=u(b);if("object"==typeof(r=f)&&(i(r)||void 0!==r.src)){let e=i(f)?f.default:f;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,s=e.blurHeight,M=M||e.blurDataURL,W=e.src,!v){if(G||F){if(G&&!F){let t=G/e.width;F=Math.round(e.height*t)}else if(!G&&F){let t=F/e.height;G=Math.round(e.width*t)}}else G=e.width,F=e.height}}let H=!p&&("lazy"===h||void 0===h);(!(f="string"==typeof f?f:W)||f.startsWith("data:")||f.startsWith("blob:"))&&(d=!0,H=!1),l.unoptimized&&(d=!0),D&&f.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(d=!0),p&&(R="high");let q=u(m),B=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:w,objectPosition:C}:{},k?{}:{color:"transparent"},_),K=z||"empty"===x?null:"blur"===x?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:G,heightInt:F,blurWidth:a,blurHeight:s,blurDataURL:M||"",objectFit:B.objectFit})+'")':'url("'+x+'")',V=K?{backgroundSize:B.objectFit||"cover",backgroundPosition:B.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:K}:{},$=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:i,sizes:u,loader:l}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:a,kind:s}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,u),f=a.length-1;return{sizes:u||"w"!==s?u:"100vw",srcSet:a.map((e,n)=>l({config:t,src:r,quality:i,width:e})+" "+("w"===s?e:n+1)+s).join(", "),src:l({config:t,src:r,quality:i,width:a[f]})}}({config:l,src:f,unoptimized:d,width:G,quality:q,sizes:c,loader:N});return{props:{...I,loading:H?"lazy":h,fetchPriority:R,width:G,height:F,decoding:"async",className:g,style:{...B,...V},sizes:$.sizes,srcSet:$.srcSet,src:P||$.src},meta:{unoptimized:d,priority:p,placeholder:x,fill:v}}}},7828:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return g},defaultHead:function(){return c}});let n=r(167),o=r(8760),i=r(997),u=o._(r(6689)),l=n._(r(7215)),a=r(8039),s=r(1988),f=r(5495);function c(e){void 0===e&&(e=!1);let t=[(0,i.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,i.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===u.default.Fragment?e.concat(u.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(1997);let p=["name","httpEquiv","charSet","itemProp"];function h(e,t){let{inAmpMode:r}=t;return e.reduce(d,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return o=>{let i=!0,u=!1;if(o.key&&"number"!=typeof o.key&&o.key.indexOf("$")>0){u=!0;let t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?i=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(o.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?i=!1:r.add(t);else{let e=o.props[t],r=n[t]||new Set;("name"!==t||!u)&&r.has(e)?i=!1:(r.add(e),n[t]=r)}}}}return i}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,u.default.cloneElement(e,t)}return u.default.cloneElement(e,{key:n})})}let g=function(e){let{children:t}=e,r=(0,u.useContext)(a.AmpStateContext),n=(0,u.useContext)(s.HeadManagerContext);return(0,i.jsx)(l.default,{reduceComponentsToState:h,headManager:n,inAmpMode:(0,f.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9919:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:i,objectFit:u}=e,l=n?40*n:t,a=o?40*o:r,s=l&&a?"viewBox='0 0 "+l+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+s+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(s?"none":"contain"===u?"xMidYMid":"cover"===u?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},7903:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},5666:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return a},getImageProps:function(){return l}});let n=r(167),o=r(7367),i=r(6541),u=n._(r(6663));function l(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:u.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let a=i.Image},6663:(e,t)=>{"use strict";function r(e){let{config:t,src:r,width:n,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},475:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addPathPrefix",{enumerable:!0,get:function(){return o}});let n=r(2107);function o(e,t){if(!e.startsWith("/")||!t)return e;let{pathname:r,query:o,hash:i}=(0,n.parsePath)(e);return""+t+r+o+i}},7420:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return i},formatWithValidation:function(){return l},urlObjectKeys:function(){return u}});let n=r(8760)._(r(8260)),o=/https?|ftp|gopher|file/;function i(e){let{auth:t,hostname:r}=e,i=e.protocol||"",u=e.pathname||"",l=e.hash||"",a=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:r&&(s=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(s+=":"+e.port)),a&&"object"==typeof a&&(a=String(n.urlQueryToSearchParams(a)));let f=e.search||a&&"?"+a||"";return i&&!i.endsWith(":")&&(i+=":"),e.slashes||(!i||o.test(i))&&!1!==s?(s="//"+(s||""),u&&"/"!==u[0]&&(u="/"+u)):s||(s=""),l&&"#"!==l[0]&&(l="#"+l),f&&"?"!==f[0]&&(f="?"+f),""+i+s+(u=u.replace(/[?#]/g,encodeURIComponent))+(f=f.replace("#","%23"))+l}let u=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function l(e){return i(e)}},4321:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"interpolateAs",{enumerable:!0,get:function(){return i}});let n=r(122),o=r(2437);function i(e,t,r){let i="",u=(0,o.getRouteRegex)(e),l=u.groups,a=(t!==e?(0,n.getRouteMatcher)(u)(t):"")||r;i=e;let s=Object.keys(l);return s.every(e=>{let t=a[e]||"",{repeat:r,optional:n}=l[e],o="["+(r?"...":"")+e+"]";return n&&(o=(t?"":"/")+"["+o+"]"),r&&!Array.isArray(t)&&(t=[t]),(n||e in a)&&(i=i.replace(o,r?t.map(e=>encodeURIComponent(e)).join("/"):encodeURIComponent(t))||"/")})||(i=""),{params:s,result:i}}},2045:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return i}});let n=r(7201),o=r(9142);function i(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},3061:(e,t)=>{"use strict";function r(e,t){let r={};return Object.keys(e).forEach(n=>{t.includes(n)||(r[n]=e[n])}),r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return r}})},2107:(e,t)=>{"use strict";function r(e){let t=e.indexOf("#"),r=e.indexOf("?"),n=r>-1&&(t<0||r<t);return n||t>-1?{pathname:e.substring(0,n?r:t),query:n?e.substring(r,t>-1?t:void 0):"",hash:t>-1?e.slice(t):""}:{pathname:e,query:"",hash:""}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"parsePath",{enumerable:!0,get:function(){return r}})},8106:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"pathHasPrefix",{enumerable:!0,get:function(){return o}});let n=r(2107);function o(e,t){if("string"!=typeof e)return!1;let{pathname:r}=(0,n.parsePath)(e);return r===t||r.startsWith(t+"/")}},8260:(e,t)=>{"use strict";function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function n(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,o]=e;Array.isArray(o)?o.forEach(e=>t.append(r,n(e))):t.set(r,n(o))}),t}function i(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return i},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return o}})},9362:(e,t)=>{"use strict";function r(e){return e.replace(/\/$/,"")||"/"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"removeTrailingSlash",{enumerable:!0,get:function(){return r}})},122:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return o}});let n=r(7201);function o(e){let{re:t,groups:r}=e;return e=>{let o=t.exec(e);if(!o)return!1;let i=e=>{try{return decodeURIComponent(e)}catch(e){throw new n.DecodeError("failed to decode param")}},u={};return Object.keys(r).forEach(e=>{let t=r[e],n=o[t.pos];void 0!==n&&(u[e]=~n.indexOf("/")?n.split("/").map(e=>i(e)):t.repeat?[i(n)]:i(n))}),u}}},2437:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getNamedMiddlewareRegex:function(){return d},getNamedRouteRegex:function(){return c},getRouteRegex:function(){return a}});let n=r(2407),o=r(1885),i=r(9362);function u(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let r=e.startsWith("...");return r&&(e=e.slice(3)),{key:e,repeat:r,optional:t}}function l(e){let t=(0,i.removeTrailingSlash)(e).slice(1).split("/"),r={},l=1;return{parameterizedRoute:t.map(e=>{let t=n.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t)),i=e.match(/\[((?:\[.*\])|.+)\]/);if(t&&i){let{key:e,optional:n,repeat:a}=u(i[1]);return r[e]={pos:l++,repeat:a,optional:n},"/"+(0,o.escapeStringRegexp)(t)+"([^/]+?)"}if(!i)return"/"+(0,o.escapeStringRegexp)(e);{let{key:e,repeat:t,optional:n}=u(i[1]);return r[e]={pos:l++,repeat:t,optional:n},t?n?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:r}}function a(e){let{parameterizedRoute:t,groups:r}=l(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:r}}function s(e){let{interceptionMarker:t,getSafeRouteKey:r,segment:n,routeKeys:i,keyPrefix:l}=e,{key:a,optional:s,repeat:f}=u(n),c=a.replace(/\W/g,"");l&&(c=""+l+c);let d=!1;(0===c.length||c.length>30)&&(d=!0),isNaN(parseInt(c.slice(0,1)))||(d=!0),d&&(c=r()),l?i[c]=""+l+a:i[c]=a;let p=t?(0,o.escapeStringRegexp)(t):"";return f?s?"(?:/"+p+"(?<"+c+">.+?))?":"/"+p+"(?<"+c+">.+?)":"/"+p+"(?<"+c+">[^/]+?)"}function f(e,t){let r;let u=(0,i.removeTrailingSlash)(e).slice(1).split("/"),l=(r=0,()=>{let e="",t=++r;for(;t>0;)e+=String.fromCharCode(97+(t-1)%26),t=Math.floor((t-1)/26);return e}),a={};return{namedParameterizedRoute:u.map(e=>{let r=n.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t)),i=e.match(/\[((?:\[.*\])|.+)\]/);if(r&&i){let[r]=e.split(i[0]);return s({getSafeRouteKey:l,interceptionMarker:r,segment:i[1],routeKeys:a,keyPrefix:t?"nxtI":void 0})}return i?s({getSafeRouteKey:l,segment:i[1],routeKeys:a,keyPrefix:t?"nxtP":void 0}):"/"+(0,o.escapeStringRegexp)(e)}).join(""),routeKeys:a}}function c(e,t){let r=f(e,t);return{...a(e),namedRegex:"^"+r.namedParameterizedRoute+"(?:/)?$",routeKeys:r.routeKeys}}function d(e,t){let{parameterizedRoute:r}=l(e),{catchAll:n=!0}=t;if("/"===r)return{namedRegex:"^/"+(n?".*":"")+"$"};let{namedParameterizedRoute:o}=f(e,!1);return{namedRegex:"^"+o+(n?"(?:(/.*)?)":"")+"$"}}},7215:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let n=r(6689),o=()=>{},i=()=>{};function u(e){var t;let{headManager:r,reduceComponentsToState:u}=e;function l(){if(r&&r.mountedInstances){let t=n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(u(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),l(),o(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),o(()=>(r&&(r._pendingUpdate=l),()=>{r&&(r._pendingUpdate=l)})),i(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},1997:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},3039:()=>{},7644:()=>{},5244:(e,t)=>{"use strict";var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},8039:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.AmpContext},7443:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.AppRouterContext},1988:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.HeadManagerContext},6218:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.ImageConfigContext},5469:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.RouterContext},5675:(e,t,r)=>{e.exports=r(5666)},1664:(e,t,r)=>{e.exports=r(9577)},8760:(e,t)=>{"use strict";function r(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}t._=t._interop_require_wildcard=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var o={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=i?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(o,u,l):o[u]=e[u]}return o.default=e,n&&n.set(e,o),o}}};