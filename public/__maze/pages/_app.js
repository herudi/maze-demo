import{a as w}from"./chunk-PV3TOJ4E.js";import{a as k,b as r,c as j,d as R,e as P,f as l,g as L}from"./chunk-I4SUQYDM.js";var v=[{path:"/blog",page:"./blog/index.js"},{path:"/blog/:title",page:"./blog/[title].js"},{path:"/",page:"./index.js"},{path:"/sign",page:"./sign.js"}],$="1647241850618";var{Link:y}=P,S="bg-gray-200 text-gray-900 dark:(bg-gray-900 text-white) px-3 py-2 rounded-md text-sm font-medium",f="text-gray-900 hover:bg-gray-300 hover:text-gray-900 dark:(text-gray-300 hover:bg-gray-700 hover:text-white) px-3 py-2 rounded-md text-sm font-medium",D="bg-gray-300 text-gray-900 dark:(bg-gray-700 text-white) px-3 py-2 rounded-md text-sm font-medium",h=class extends j{constructor(){super(...arguments);this.text_switch=window.__btn_switch||"."}didMount(){addEventListener("page:end",()=>{this.update(location.pathname)})}onSwitch(){let t=document.documentElement.classList;t&&t.value==="dark"?(document.documentElement.classList.remove("dark"),localStorage.removeItem("theme"),this.text_switch="Light"):(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark"),this.text_switch="Dark"),this.update(location.pathname)}render(t){let i=t||this.props.route.pathname;return i==="/sign"?r("div",null):r("nav",{class:l`bg-white lg:border-b dark:(bg-gray-800 lg:border-gray-900) sticky top-0 z-10`},r("div",{class:l`max-w-7xl mx-auto px-2 sm:px-6 lg:px-8`},r("div",{class:l`relative flex items-center justify-between h-16`},r("div",{class:l`flex-1 flex items-center justify-center sm:items-stretch sm:justify-start`},r("div",{class:l`sm:block sm:ml-6`},r("div",{class:l`flex space-x-4`},r(y,{to:"/",class:l`${i==="/"?S:f}`},"Home"),r(y,{to:"/blog",class:l`${i.startsWith("/blog")?S:f}`},"Blog"),r(y,{to:"/sign",class:l`${f}`},"Sign Form")))),r("div",{class:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"},r("a",{class:l`${f}`,href:"https://github.com/herudi/maze",target:"__blank"},"Github"),r("button",{style:"width: 80px",onClick:this.onSwitch.bind(this),class:l`${D}`},this.text_switch)))))}};function g({Page:n,props:t}){return r("div",null,r(R,null,r("html",{lang:"en"}),r("meta",{charset:"utf-8"}),r("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),r("link",{rel:"icon",href:"data:,"}),r("script",{src:"/assets/theme.js"}),r("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js"}),r("link",{href:"https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css",rel:"stylesheet"})),r(h,{route:t.route}),r("div",{id:"__MY_PAGE__"},r(n,{...t})))}var x;g.event={onStart(n){n.NProgress=window.NProgress,n.isFirst||(x=setTimeout(()=>{n.NProgress.start()},300))},onEnd({isFirst:n,NProgress:t}){x&&clearTimeout(x),t.done(),n||(dispatchEvent(new Event("page:end")),window.scrollTo(0,0))},onError(n){console.error(n)}};function b({Page:n,initData:t,route:i,isServer:o}){return r(g,{Page:n,props:{...t,route:i,isServer:o}})}b.initProps=g.initProps;b.event=g.event||{};var c=b;var A={darkMode:"class"},q=({pathname:n})=>{if(n.startsWith("/"))return"__MY_PAGE__"};function N(n,t,i){let o=i.groups||{};if(!t)return o;if(n.indexOf("*")!==-1){i.shift();let d=i.filter(a=>a!==void 0).filter(a=>a.startsWith("/")).join("").split("/");d.shift();let e={...o,wild:d.filter(a=>a!=="")};if(n==="*"||n.indexOf("/*")!==-1)return e;let s=n.split("/").find(a=>a.startsWith(":")&&a.endsWith("*"));return s&&(s=s.slice(1,-1),e[s]=[e[s]].concat(e.wild).filter(a=>a!==""),delete e.wild),e}return o}function I(n){try{return decodeURI(n)}catch{return n}}var E=class{constructor(){this.routes=[]}add(t,i){let o=!1,d=t.replace(/\/$/,"").replace(/:(\w+)(\?)?(\.)?/g,"$2(?<$1>[^/]+)$2$3").replace(/(\/?)\*/g,(s,a)=>(o=!0,`(${a}.*)?`)).replace(/\.(?=[\w(])/,"\\."),e=new RegExp(`^${d}/*$`);return this.routes.push({path:t,fn:i,regex:e,wild:o}),this}find(t){let i,o={},d=0,e,s=this.routes,a=s.length;for(t=I(t);d<a;){if(e=s[d],e.regex.test(t)){let p=e.regex.exec(t);i=e.fn,o=N(e.path,e.wild,p);break}d++}return{fn:i,params:o}}handle(){let{pathname:t,search:i,origin:o}=window.location;if(this.current===t+i)return;let{fn:d,params:e}=this.find(t);this.current=t+i;let s={};if(s.pathname=t,s.url=this.current,s.path=t,s.isServer=!1,s.getBaseUrl=()=>o,s.params=e,s.fetchApi=async(a,p)=>{try{let m=await fetch(o+a,p);if(!m.ok)throw m;return{data:await m.json(),error:void 0}}catch(m){let u=await m.json();return u.message=I(u.message),{data:void 0,error:u}}},s.render=(a,p)=>{k(a,p?document.getElementById(p):document.body)},!d)return s.render(r(w,{message:"Not Found",status:404}));d(s)}resolve(){let t=()=>this.handle();t(),window.addEventListener("pushstate",i=>{i.preventDefault(),t()}),window.addEventListener("replacestate",i=>{i.preventDefault(),t()}),window.addEventListener("popstate",()=>{t()})}};async function T(n){return(await import(n+"?v="+$)).default}window.addEventListener("load",()=>{L(A);let n=!0,t=document.getElementById("__INIT_DATA__");t&&(t=JSON.parse(t.textContent||"{}"));let i=new E;for(let o=0;o<v.length;o++){let d=v[o];i.add(d.path,async e=>{e.isFirst=n;try{let s={};n||(s=c.initProps?await c.initProps(e):{}),c.event.onStart!==void 0&&await c.event.onStart(e);let a=typeof d.page=="string"?await T(d.page):d.page,p=n?t||{}:a.initProps?await a.initProps(e):{},m=()=>{e.render(r(c,{Page:a,initData:{...p,...s},route:{pathname:e.pathname,url:e.url,path:d.path,params:e.params},isServer:!1}))};if(n)m();else{let u={...p,...s},_=q(e);_?e.render(r(a,{...u,route:{pathname:e.pathname,url:e.url,path:d.path,params:e.params},isServer:!1}),_):e.render(r(w,{message:"Not Found",status:404}))}c.event.onEnd!==void 0&&c.event.onEnd(e)}catch(s){c.event.onError!==void 0&&c.event.onError(s,e)}n=!1})}i.resolve()});export{E as default};
