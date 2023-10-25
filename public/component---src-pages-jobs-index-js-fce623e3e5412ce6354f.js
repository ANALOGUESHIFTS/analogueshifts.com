(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[622],{9669:function(e,t,r){e.exports=r(1609)},5448:function(e,t,r){"use strict";var n=r(4867),a=r(6026),o=r(4372),s=r(5327),i=r(4097),c=r(4109),l=r(7985),u=r(5061);e.exports=function(e){return new Promise((function(t,r){var d=e.data,f=e.headers,m=e.responseType;n.isFormData(d)&&delete f["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",g=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";f.Authorization="Basic "+btoa(h+":"+g)}var b=i(e.baseURL,e.url);function x(){if(p){var n="getAllResponseHeaders"in p?c(p.getAllResponseHeaders()):null,o={data:m&&"text"!==m&&"json"!==m?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:n,config:e,request:p};a(t,r,o),p=null}}if(p.open(e.method.toUpperCase(),s(b,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,"onloadend"in p?p.onloadend=x:p.onreadystatechange=function(){p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))&&setTimeout(x)},p.onabort=function(){p&&(r(u("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){r(u("Network Error",e,null,p)),p=null},p.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(u(t,e,e.transitional&&e.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",p)),p=null},n.isStandardBrowserEnv()){var y=(e.withCredentials||l(b))&&e.xsrfCookieName?o.read(e.xsrfCookieName):void 0;y&&(f[e.xsrfHeaderName]=y)}"setRequestHeader"in p&&n.forEach(f,(function(e,t){void 0===d&&"content-type"===t.toLowerCase()?delete f[t]:p.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),m&&"json"!==m&&(p.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),r(e),p=null)})),d||(d=null),p.send(d)}))}},1609:function(e,t,r){"use strict";var n=r(4867),a=r(1849),o=r(321),s=r(7185);function i(e){var t=new o(e),r=a(o.prototype.request,t);return n.extend(r,o.prototype,t),n.extend(r,t),r}var c=i(r(5655));c.Axios=o,c.create=function(e){return i(s(c.defaults,e))},c.Cancel=r(5263),c.CancelToken=r(4972),c.isCancel=r(6502),c.all=function(e){return Promise.all(e)},c.spread=r(8713),c.isAxiosError=r(6268),e.exports=c,e.exports.default=c},5263:function(e){"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},4972:function(e,t,r){"use strict";var n=r(5263);function a(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}a.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},a.source=function(){var e;return{token:new a((function(t){e=t})),cancel:e}},e.exports=a},6502:function(e){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},321:function(e,t,r){"use strict";var n=r(4867),a=r(5327),o=r(782),s=r(3572),i=r(7185),c=r(4875),l=c.validators;function u(e){this.defaults=e,this.interceptors={request:new o,response:new o}}u.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=i(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;void 0!==t&&c.assertOptions(t,{silentJSONParsing:l.transitional(l.boolean,"1.0.0"),forcedJSONParsing:l.transitional(l.boolean,"1.0.0"),clarifyTimeoutError:l.transitional(l.boolean,"1.0.0")},!1);var r=[],n=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(n=n&&t.synchronous,r.unshift(t.fulfilled,t.rejected))}));var a,o=[];if(this.interceptors.response.forEach((function(e){o.push(e.fulfilled,e.rejected)})),!n){var u=[s,void 0];for(Array.prototype.unshift.apply(u,r),u=u.concat(o),a=Promise.resolve(e);u.length;)a=a.then(u.shift(),u.shift());return a}for(var d=e;r.length;){var f=r.shift(),m=r.shift();try{d=f(d)}catch(p){m(p);break}}try{a=s(d)}catch(p){return Promise.reject(p)}for(;o.length;)a=a.then(o.shift(),o.shift());return a},u.prototype.getUri=function(e){return e=i(this.defaults,e),a(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(e){u.prototype[e]=function(t,r){return this.request(i(r||{},{method:e,url:t,data:(r||{}).data}))}})),n.forEach(["post","put","patch"],(function(e){u.prototype[e]=function(t,r,n){return this.request(i(n||{},{method:e,url:t,data:r}))}})),e.exports=u},782:function(e,t,r){"use strict";var n=r(4867);function a(){this.handlers=[]}a.prototype.use=function(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1},a.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},a.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=a},4097:function(e,t,r){"use strict";var n=r(1793),a=r(7303);e.exports=function(e,t){return e&&!n(t)?a(e,t):t}},5061:function(e,t,r){"use strict";var n=r(481);e.exports=function(e,t,r,a,o){var s=new Error(e);return n(s,t,r,a,o)}},3572:function(e,t,r){"use strict";var n=r(4867),a=r(8527),o=r(6502),s=r(5655);function i(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return i(e),e.headers=e.headers||{},e.data=a.call(e,e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||s.adapter)(e).then((function(t){return i(e),t.data=a.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return o(t)||(i(e),t&&t.response&&(t.response.data=a.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},481:function(e){"use strict";e.exports=function(e,t,r,n,a){return e.config=t,r&&(e.code=r),e.request=n,e.response=a,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},7185:function(e,t,r){"use strict";var n=r(4867);e.exports=function(e,t){t=t||{};var r={},a=["url","method","data"],o=["headers","auth","proxy","params"],s=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],i=["validateStatus"];function c(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function l(a){n.isUndefined(t[a])?n.isUndefined(e[a])||(r[a]=c(void 0,e[a])):r[a]=c(e[a],t[a])}n.forEach(a,(function(e){n.isUndefined(t[e])||(r[e]=c(void 0,t[e]))})),n.forEach(o,l),n.forEach(s,(function(a){n.isUndefined(t[a])?n.isUndefined(e[a])||(r[a]=c(void 0,e[a])):r[a]=c(void 0,t[a])})),n.forEach(i,(function(n){n in t?r[n]=c(e[n],t[n]):n in e&&(r[n]=c(void 0,e[n]))}));var u=a.concat(o).concat(s).concat(i),d=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===u.indexOf(e)}));return n.forEach(d,l),r}},6026:function(e,t,r){"use strict";var n=r(5061);e.exports=function(e,t,r){var a=r.config.validateStatus;r.status&&a&&!a(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},8527:function(e,t,r){"use strict";var n=r(4867),a=r(5655);e.exports=function(e,t,r){var o=this||a;return n.forEach(r,(function(r){e=r.call(o,e,t)})),e}},5655:function(e,t,r){"use strict";var n=r(4867),a=r(6016),o=r(481),s={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var c,l={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(c=r(5448)),c),transformRequest:[function(e,t){return a(t,"Accept"),a(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)||t&&"application/json"===t["Content-Type"]?(i(t,"application/json"),function(e,t,r){if(n.isString(e))try{return(t||JSON.parse)(e),n.trim(e)}catch(a){if("SyntaxError"!==a.name)throw a}return(r||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional,r=t&&t.silentJSONParsing,a=t&&t.forcedJSONParsing,s=!r&&"json"===this.responseType;if(s||a&&n.isString(e)&&e.length)try{return JSON.parse(e)}catch(i){if(s){if("SyntaxError"===i.name)throw o(i,this,"E_JSON_PARSE");throw i}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};l.headers={common:{Accept:"application/json, text/plain, */*"}},n.forEach(["delete","get","head"],(function(e){l.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){l.headers[e]=n.merge(s)})),e.exports=l},1849:function(e){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},5327:function(e,t,r){"use strict";var n=r(4867);function a(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var o;if(r)o=r(t);else if(n.isURLSearchParams(t))o=t.toString();else{var s=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),s.push(a(t)+"="+a(e))})))})),o=s.join("&")}if(o){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},7303:function(e){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},4372:function(e,t,r){"use strict";var n=r(4867);e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,a,o,s){var i=[];i.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),n.isString(a)&&i.push("path="+a),n.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},1793:function(e){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},6268:function(e){"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},7985:function(e,t,r){"use strict";var n=r(4867);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function a(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=a(window.location.href),function(t){var r=n.isString(t)?a(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},6016:function(e,t,r){"use strict";var n=r(4867);e.exports=function(e,t){n.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}},4109:function(e,t,r){"use strict";var n=r(4867),a=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,o,s={};return e?(n.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=n.trim(e.substr(0,o)).toLowerCase(),r=n.trim(e.substr(o+1)),t){if(s[t]&&a.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([r]):s[t]?s[t]+", "+r:r}})),s):s}},8713:function(e){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},4875:function(e,t,r){"use strict";var n=r(8593),a={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){a[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}}));var o={},s=n.version.split(".");function i(e,t){for(var r=t?t.split("."):s,n=e.split("."),a=0;a<3;a++){if(r[a]>n[a])return!0;if(r[a]<n[a])return!1}return!1}a.transitional=function(e,t,r){var a=t&&i(t);function s(e,t){return"[Axios v"+n.version+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return function(r,n,i){if(!1===e)throw new Error(s(n," has been removed in "+t));return a&&!o[n]&&(o[n]=!0,console.warn(s(n," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,n,i)}},e.exports={isOlderVersion:i,assertOptions:function(e,t,r){if("object"!=typeof e)throw new TypeError("options must be an object");for(var n=Object.keys(e),a=n.length;a-- >0;){var o=n[a],s=t[o];if(s){var i=e[o],c=void 0===i||s(i,o,e);if(!0!==c)throw new TypeError("option "+o+" must be "+c)}else if(!0!==r)throw Error("Unknown option "+o)}},validators:a}},4867:function(e,t,r){"use strict";var n=r(1849),a=Object.prototype.toString;function o(e){return"[object Array]"===a.call(e)}function s(e){return void 0===e}function i(e){return null!==e&&"object"==typeof e}function c(e){if("[object Object]"!==a.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function l(e){return"[object Function]"===a.call(e)}function u(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),o(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(null,e[a],a,e)}e.exports={isArray:o,isArrayBuffer:function(e){return"[object ArrayBuffer]"===a.call(e)},isBuffer:function(e){return null!==e&&!s(e)&&null!==e.constructor&&!s(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:i,isPlainObject:c,isUndefined:s,isDate:function(e){return"[object Date]"===a.call(e)},isFile:function(e){return"[object File]"===a.call(e)},isBlob:function(e){return"[object Blob]"===a.call(e)},isFunction:l,isStream:function(e){return i(e)&&l(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:u,merge:function e(){var t={};function r(r,n){c(t[n])&&c(r)?t[n]=e(t[n],r):c(r)?t[n]=e({},r):o(r)?t[n]=r.slice():t[n]=r}for(var n=0,a=arguments.length;n<a;n++)u(arguments[n],r);return t},extend:function(e,t,r){return u(t,(function(t,a){e[a]=r&&"function"==typeof t?n(t,r):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},1173:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(7294),a=r(1883),o=r.p+"static/logo-428c3d061458542e72f69cecb0e2614b.png";var s=()=>n.createElement("div",{className:"flex gap-3"},n.createElement("img",{src:o,className:"w-10 h-10",alt:""}),n.createElement("h3",{className:"text-lg font-bold uppercase text-zinc-600 leading-5"},n.createElement("span",{className:"tracking-widest text-yellow-400"},"Analogue"),n.createElement("br",null),n.createElement("span",{className:"tracking-[1rem]"},"Shifts")));var i=e=>{let{active:t=!1,children:r,...o}=e;return n.createElement(a.Link,Object.assign({},o,{className:"inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out "+(t?"border-yellow-400 text-gray-900 focus:border-yellow-700":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300")}),r)};var c=e=>{let{active:t=!1,children:r,...o}=e;return n.createElement(a.Link,Object.assign({},o,{className:"block pl-4 pr-4 py-3 border-l-4 text-base font-medium leading-5 focus:outline-none transition duration-150 ease-in-out "+(t?"border-yellow-400 text-yellow-700 bg-yellow-50 focus:text-yellow-800 focus:bg-yellow-100 focus:border-yellow-700":"border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300")}),r)};var l=()=>{const{0:e,1:t}=(0,n.useState)(!1);return n.createElement("div",{className:"flex justify-center pt-3 pb-20 px-3"},n.createElement("nav",{className:"bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg border border-gray-100 w-full lg:rounded-full fixed z-30"},n.createElement("div",{className:"w-full mx-auto px-4 lg:px-6 xl:px-8"},n.createElement("div",{className:"flex justify-between h-16"},n.createElement("div",{className:"flex items-center"},n.createElement("div",{className:"flex-shrink-0 flex items-center"},n.createElement(a.Link,{to:"/"},n.createElement(s,{className:"block h-10 w-auto fill-current text-gray-600"})))),n.createElement("div",{className:"hidden space-x-8 lg:-my-px lg:ml-10 lg:flex"},n.createElement(i,{to:"/"},"Home"),n.createElement(i,{to:"/blog"},"Blog"),n.createElement(i,{to:"/jobs"},"Jobs"),n.createElement(i,{to:"/about"},"About"),n.createElement(i,{to:"/contact"},"Contact")),n.createElement("div",{className:"hidden lg:flex lg:items-center lg:ml-6"},n.createElement(a.Link,{className:"text-lg py-1.5 px-3 rounded-full bg-yellow-500 text-white hover:bg-transparent hover:text-yellow-500 hover:ring-2 ring-yellow-500",href:"https://app.analogueshifts.com"},"Get Started")),n.createElement("div",{className:"-mr-2 flex items-center lg:hidden"},n.createElement("button",{onClick:()=>t((e=>!e)),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"},n.createElement("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},e?n.createElement("path",{className:"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"}):n.createElement("path",{className:"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})))))),e&&n.createElement("div",{className:"bg-white block lg:hidden"},n.createElement("div",{className:"pt-2 pb-3 space-y-1"},n.createElement(c,{to:"/"},"Home"),n.createElement(c,{to:"/blog"},"Blog"),n.createElement(c,{to:"/jobs"},"Jobs"),n.createElement(c,{to:"/about"},"About"),n.createElement(c,{to:"/contact"},"Contact"),n.createElement(c,{href:"https://app.analogueshifts.com"},"Get Started")))))};var u=function(){return n.createElement("div",null,n.createElement("footer",{className:"bg-black-500 py-4 mt-auto"},n.createElement("div",{className:"container mx-auto py-5 px-3 md:px-9 xl:px-28"},n.createElement("div",{className:"grid xl:flex justify-between gap-3"},n.createElement("div",{className:"flex gap-3"},n.createElement("a",{className:"text-slate-900",href:"/about"},"Privacy"),n.createElement("a",{className:"link-light small",href:"/about"},"Terms"),n.createElement("a",{className:"link-light small",href:"/contact"},"Contact")),n.createElement("div",{className:"text-slate-900"},n.createElement("div",{className:"text-slate-900"},"Copyright © ",(new Date).getFullYear()," ·"," ",n.createElement("a",{href:"https://www.analogueshifts.com"},"AnalogueShifts"))),n.createElement("div",{className:"flex gap-3"},n.createElement("a",{className:"text-slate-900",href:"https://www.linkedin.com/company/analogue-shifts/",target:"_blank",rel:"noreferrer"},"LinkIn"),n.createElement("a",{className:"text-slate-900",href:"https://www.instagram.com/analogueshifts_/?igshid=MzRlODBiNWFlZA%3D%3D",target:"_blank",rel:"noreferrer"},"Instagram"),n.createElement("a",{className:"text-slate-900",href:"https://twitter.com/AnalogueShifts?t=vfspjJw0TwePEcAGydIHdQ&s=09",target:"_blank",rel:"noreferrer"},"Twitter"))))))};var d=e=>{let{children:t}=e;(0,a.useStaticQuery)("3649515864");return n.createElement(n.Fragment,null,n.createElement("div",{className:"min-h-screen bg-gray-50"},n.createElement(l,null),n.createElement("main",null,t),n.createElement(u,null)))}},6534:function(e,t,r){"use strict";var n=r(7294),a=r(1883);t.Z=function(e){var t,r;let{seoData:o,children:s}=e;const{site:i}=(0,a.useStaticQuery)("63159454"),c=o.description||i.siteMetadata.description,l=null===(t=i.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(n.Fragment,null,n.createElement("title",null,l?`${o.title} | ${l}`:o.title),n.createElement("meta",{name:"description",content:c}),n.createElement("meta",{property:"og:title",content:o.title}),n.createElement("meta",{property:"og:description",content:c}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:creator",content:(null===(r=i.siteMetadata)||void 0===r?void 0:r.author)||""}),n.createElement("meta",{name:"twitter:title",content:o.title}),n.createElement("meta",{name:"twitter:description",content:c}),s)}},2711:function(e,t,r){"use strict";r.r(t),r.d(t,{Head:function(){return d},default:function(){return m}});var n=r(1883),a=r(7294),o=r(5716),s=r(9669);var i=r.n(s)().create({baseURL:{}.AS_PUBLIC_BACKEND_URL,headers:{"X-Requested-With":"XMLHttpRequest"},withCredentials:!0}),c=r(1173),l=r.p+"static/1-21a361eb17d079a36cdc3bd8e527df3e.jpg",u=r(6534);const d=()=>a.createElement(u.Z,{seoData:f}),f={title:"Jobs in Tech",description:"Looking for the best tech jobs worldwide? AnalogueShifts has you covered. We work with top employers to bring you the latest opportunities in the tech industry. Visit our jobs page today to start your search.",canonical:"https://www.analogueshifts.com/jobs",ogImage:"/images/a4.jpg"};function m(){const{0:e,1:t}=(0,a.useState)([]),{0:r,1:s}=(0,a.useState)("");return console.log(`${{}.AS_PUBLIC_BACKEND_URL}`),(0,a.useEffect)((()=>{i.get("/jobs").then((e=>{const r=e.data.jobs.data;t(r)})).catch((e=>{alert(e)})),o.p8.from(".animate-fade-in-head",{opacity:0,y:20,duration:.5}),o.p8.from("#intro",{opacity:0,y:50,duration:1,delay:1,stagger:.2}),o.p8.from(".animate-fade-in-job",{opacity:0,y:20,duration:.5,stagger:.2})}),[]),a.createElement(c.Z,null,a.createElement("div",null,a.createElement("section",{className:""},a.createElement("div",{className:"container mx-auto py-5 px-3 md:px-9 xl:px-28"},a.createElement("h1",{className:"font-bold text-2xl mb-9 animate-fade-in-head"},"AnalogueShifts Jobs"),a.createElement("div",{className:"bg-white border-0 shadow rounded-lg overflow-hidden"},a.createElement("div",{id:"intro",className:"grid lg:grid-cols-12"},a.createElement("div",{className:"grid lg:col-span-6 py-16 px-3 lg:px-9"},a.createElement("div",{className:"grid gap-5 lg:w-96 p-4"},a.createElement("div",{className:"flex justify-start mb-2"},a.createElement("span",{className:"bg-as text-white text-xs font-bold rounded-full py-1 px-3"},"Jobs")),a.createElement("div",{className:"text-3xl font-bold"},"AnalogueShifts featured job posts."),a.createElement("p",null,"Clear and concise job listings, The job search page contains detailed descriptions of the available positions, including the job title, location, and required qualifications. Here, you'll find the latest updates and developments from our recruitment company."))),a.createElement("div",{className:"grid lg:col-span-6"},a.createElement("img",{className:"object-cover h-full w-full",src:l,alt:"Jobs"})))))),a.createElement("section",{className:""},a.createElement("div",{className:"container mx-auto py-5 px-3 md:px-9 xl:px-28"},a.createElement("div",{className:"flex w-full py-5"},a.createElement("input",{placeholder:"Search Jobs",value:r,onChange:e=>s(e.target.value),className:"w-full outline-none border border-gray-300 rounded-md px-3 py-2"})),a.createElement("div",{className:"grid lg:grid-cols-2 gap-3 mb-3"},e.filter((e=>e.role.toLowerCase().includes(r.toLowerCase()))).map(((e,t)=>a.createElement(n.Link,{href:`/jobs/${e.display}`,as:`/jobs/${e.display}`,className:"mb-5 animate-fade-in-job",key:t},a.createElement("div",{className:"bg-white h-full shadow border-0"},a.createElement("div",{className:"p-5"},a.createElement("div",{className:"flex flex-wrap gap-2"},a.createElement("span",{className:"inline-block bg-yellow-500 text-white text-xs font-bold rounded-full py-1 px-3"},"Job"),a.createElement("span",{className:"inline-block bg-yellow-500 text-white text-xs font-bold rounded-full py-1 px-3"},"Location: ",e.hire_type),a.createElement("span",{className:"inline-block bg-yellow-500 text-white text-xs font-bold rounded-full py-1 px-3"},"Experience: ",e.experience),a.createElement("span",{className:"inline-block bg-yellow-500 text-white text-xs font-bold rounded-full py-1 px-3"},"Salary: ",e.range),a.createElement("span",{className:"inline-block bg-yellow-500 text-white text-xs font-bold rounded-full py-1 px-3"},"Duration: ",e.duration)),a.createElement("h5",{className:"h-16 overflow-hidden font-bold text-lg mb-3"},e.role),a.createElement("div",{className:"h-fit mb-0 overflow-hidden"},a.createElement("p",{dangerouslySetInnerHTML:{__html:e.description.substring(0,350)+"..."}}))),a.createElement("div",{className:"p-4 pt-0 bg-transparent border-t-0"},a.createElement("div",{className:"flex items-end justify-start"},a.createElement("div",{className:"flex gap-5 items-center"},a.createElement("div",{className:"small"},a.createElement("div",{className:"font-bold"}),a.createElement("div",{className:"text-gray-500"})))))))))),a.createElement("aside",{className:"flex justify-center py-16"},a.createElement("div",{className:"bg-yellow-500 grid lg:flex items-center justify-center gap-5 w-full p-9 rounded-lg"},a.createElement("div",{className:"grid gap-5 text-center lg:text-start"},a.createElement("div",{className:"text-2xl font-bold text-white"},"New products, delivered to you."),a.createElement("div",{className:"text-gray-100 text-sm"},"Sign up for our Jobsletter for the latest updates.")),a.createElement("div",{className:"grid gap-5 text-center lg:text-start"},a.createElement("form",{className:"flex mb-2 min-w-full"},a.createElement("input",{className:"text-sm lg:text-md placeholder:text-sm outline-none w-full py-2 px-5 rounded-l-md",type:"email",placeholder:"Email address...","aria-label":"Email address...","aria-describedby":"button-Jobsletter"}),a.createElement("button",{className:"bg-transparent text-sm border outline-none w-full py-2 px-5 rounded-r-md",type:"button"},"Sign up")),a.createElement("div",{className:"text-gray-100 text-sm"},"We care about privacy, and will never share your data."))))))))}},8593:function(e){"use strict";e.exports=JSON.parse('{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}')}}]);
//# sourceMappingURL=component---src-pages-jobs-index-js-fce623e3e5412ce6354f.js.map