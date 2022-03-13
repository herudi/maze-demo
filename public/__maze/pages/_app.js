import{a as w}from"./chunk-COIZOWAR.js";import{a as j,b as r,c as R,d as P,e as $,f as p,g as k}from"./chunk-I4SUQYDM.js";var h=[{path:"/blog",page:"./blog/index.js"},{path:"/blog/:title",page:"./blog/[title].js"},{path:"/",page:"./index.js"},{path:"/sign",page:"./sign.js"}],A="1647170690931";var{Link:y}=$,q="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium",g="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",v=class extends R{didMount(){addEventListener("page:end",()=>{this.update(location.pathname)})}render(t){let i=t||this.props.route.pathname;return i==="/sign"?r("div",null):r("nav",{class:p`bg-gray-800 sticky top-0 z-10`},r("div",{class:p`max-w-7xl mx-auto px-2 sm:px-6 lg:px-8`},r("div",{class:p`relative flex items-center justify-between h-16`},r("div",{class:p`flex-1 flex items-center justify-center sm:items-stretch sm:justify-start`},r("div",{class:p`sm:block sm:ml-6`},r("div",{class:p`flex space-x-4`},r(y,{to:"/",class:p`${i==="/"?q:g}`},"Home"),r(y,{to:"/blog",class:p`${i.startsWith("/blog")?q:g}`},"Blog"),r(y,{to:"/sign",class:p`${g}`},"Sign Form")))),r("div",{class:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"},r("a",{class:p`${g}`,href:"https://github.com/herudi/maze",target:"__blank"},"Github")))))}};function f({Page:n,props:t}){return r("div",null,r(P,null,r("html",{lang:"en"}),r("meta",{charset:"utf-8"}),r("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),r("link",{rel:"icon",href:"data:,"}),r("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js"}),r("link",{href:"https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css",rel:"stylesheet"})),r(v,{route:t.route}),r("div",{id:"__MY_PAGE__"},r(n,{...t})))}var x;f.event={onStart(n){n.NProgress=window.NProgress,n.isFirst||(x=setTimeout(()=>{n.NProgress.start()},300))},onEnd({isFirst:n,NProgress:t}){x&&clearTimeout(x),t.done(),n||(dispatchEvent(new Event("page:end")),window.scrollTo(0,0))},onError(n){console.error(n)}};function E({Page:n,initData:t,route:i,isServer:o}){return r(f,{Page:n,props:{...t,route:i,isServer:o}})}E.initProps=f.initProps;E.event=f.event||{};var l=E;var L={},N=({pathname:n})=>{if(n.startsWith("/"))return"__MY_PAGE__"};function T(n,t,i){let o=i.groups||{};if(!t)return o;if(n.indexOf("*")!==-1){i.shift();let d=i.filter(a=>a!==void 0).filter(a=>a.startsWith("/")).join("").split("/");d.shift();let e={...o,wild:d.filter(a=>a!=="")};if(n==="*"||n.indexOf("/*")!==-1)return e;let s=n.split("/").find(a=>a.startsWith(":")&&a.endsWith("*"));return s&&(s=s.slice(1,-1),e[s]=[e[s]].concat(e.wild).filter(a=>a!==""),delete e.wild),e}return o}function S(n){try{return decodeURI(n)}catch{return n}}var _=class{constructor(){this.routes=[]}add(t,i){let o=!1,d=t.replace(/\/$/,"").replace(/:(\w+)(\?)?(\.)?/g,"$2(?<$1>[^/]+)$2$3").replace(/(\/?)\*/g,(s,a)=>(o=!0,`(${a}.*)?`)).replace(/\.(?=[\w(])/,"\\."),e=new RegExp(`^${d}/*$`);return this.routes.push({path:t,fn:i,regex:e,wild:o}),this}find(t){let i,o={},d=0,e,s=this.routes,a=s.length;for(t=S(t);d<a;){if(e=s[d],e.regex.test(t)){let c=e.regex.exec(t);i=e.fn,o=T(e.path,e.wild,c);break}d++}return{fn:i,params:o}}handle(){let{pathname:t,search:i,origin:o}=window.location;if(this.current===t+i)return;let{fn:d,params:e}=this.find(t);this.current=t+i;let s={};if(s.pathname=t,s.url=this.current,s.path=t,s.isServer=!1,s.getBaseUrl=()=>o,s.params=e,s.fetchApi=async(a,c)=>{try{let m=await fetch(o+a,c);if(!m.ok)throw m;return{data:await m.json(),error:void 0}}catch(m){let u=await m.json();return u.message=S(u.message),{data:void 0,error:u}}},s.render=(a,c)=>{j(a,c?document.getElementById(c):document.body)},!d)return s.render(r(w,{message:"Not Found",status:404}));d(s)}resolve(){let t=()=>this.handle();t(),window.addEventListener("pushstate",i=>{i.preventDefault(),t()}),window.addEventListener("replacestate",i=>{i.preventDefault(),t()}),window.addEventListener("popstate",()=>{t()})}};async function D(n){return(await import(n+"?v="+A)).default}window.addEventListener("load",()=>{k(L);let n=!0,t=document.getElementById("__INIT_DATA__");t&&(t=JSON.parse(t.textContent||"{}"));let i=new _;for(let o=0;o<h.length;o++){let d=h[o];i.add(d.path,async e=>{e.isFirst=n;try{let s={};n||(s=l.initProps?await l.initProps(e):{}),l.event.onStart!==void 0&&await l.event.onStart(e);let a=typeof d.page=="string"?await D(d.page):d.page,c=n?t||{}:a.initProps?await a.initProps(e):{},m=()=>{e.render(r(l,{Page:a,initData:{...c,...s},route:{pathname:e.pathname,url:e.url,path:d.path,params:e.params},isServer:!1}))};if(n)m();else{let u={...c,...s},b=N(e);b?e.render(r(a,{...u,route:{pathname:e.pathname,url:e.url,path:d.path,params:e.params},isServer:!1}),b):e.render(r(w,{message:"Not Found",status:404}))}l.event.onEnd!==void 0&&l.event.onEnd(e)}catch(s){l.event.onError!==void 0&&l.event.onError(s,e)}n=!1})}i.resolve()});export{_ as default};
