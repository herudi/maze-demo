import{a as F,b as V}from"./chunk-EQ4WYGC6.js";import{a as X}from"./chunk-UTPPOZFZ.js";import{a as l,b as v,c as f,d as Q,f as w,g as $,h as e,i as A,j as I,k as q,l as D,m as x,n as c,o as H,p as T}from"./chunk-SJH6G6HZ.js";var P,B=f(()=>{P=[{path:"/blog",page:"./blog/index.js"},{path:"/blog/:title",page:"./blog/[title].js"},{path:"/",page:"./index.js"},{path:"/sign",page:"./sign.js"}]});var k,C,b,Z,E,M=f(()=>{x();T();({Link:k}=D),C="bg-gray-200 text-gray-900 dark:(bg-gray-900 text-white) px-3 py-2 rounded-md text-sm font-medium",b="text-gray-900 hover:bg-gray-300 hover:text-gray-900 dark:(text-gray-300 hover:bg-gray-700 hover:text-white) px-3 py-2 rounded-md text-sm font-medium",Z="bg-gray-300 text-gray-900 dark:(bg-gray-700 text-white) px-3 py-2 rounded-md text-sm font-medium",E=class extends A{constructor(t){super(t);this.text_switch=".";t.isServer||(this.text_switch=window.__btn_switch)}didMount(){addEventListener("page:end",()=>{this.update(location.pathname)})}onSwitch(){let t=document.documentElement.classList;t&&t.value==="dark"?(document.documentElement.classList.remove("dark"),localStorage.removeItem("theme"),this.text_switch="Light"):(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark"),this.text_switch="Dark"),this.update(location.pathname)}render(t){let s=t||this.props.route.pathname;return s==="/sign"?e("div",null):e("nav",{class:c`bg-white lg:border-b dark:(bg-gray-800 lg:border-gray-900) sticky top-0 z-10`},e("div",{class:c`max-w-7xl mx-auto px-2 sm:px-6 lg:px-8`},e("div",{class:c`relative flex items-center justify-between h-16`},e("div",{class:c`flex-1 flex items-center justify-center sm:items-stretch sm:justify-start`},e("div",{class:c`sm:block sm:ml-6`},e("div",{class:c`flex space-x-4`},e(k,{to:"/",class:c`${s==="/"?C:b}`},"Home"),e(k,{to:"/blog",class:c`${s.startsWith("/blog")?C:b}`},"Blog"),e(k,{to:"/sign",class:c`${b}`},"Sign Form")))),e("div",{class:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"},e("a",{class:c`${b}`,href:"https://github.com/herudi/maze",target:"_blank"},"Github"),e("button",{style:"width: 80px",onClick:this.onSwitch.bind(this),class:c`${Z}`},this.text_switch)))))}}});function R(n){let t=document.getElementById("loading");t.style.display=n?"block":"none"}function y({Page:n,props:t}){return e(q,null,e(I,null,e("html",{lang:"en"}),e("meta",{charset:"utf-8"}),e("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),e("link",{rel:"icon",href:"data:,"}),e("script",{src:"/assets/theme.js"}),e("link",{href:"/assets/loading.css",rel:"stylesheet"})),e(E,l({},t)),e("div",{id:"__MY_PAGE__"},e(n,l({},t))),e("div",{id:"loading",class:"center-div-loading",style:"display: none;"},e("div",{class:"linear-progress-material"},e("div",{class:"bar bar1"}),e("div",{class:"bar bar2"}))))}var j,N=f(()=>{x();M();y.event={onStart(n){n.isFirst||(j=setTimeout(()=>{R(!0)},300))},onEnd({isFirst:n}){j&&clearTimeout(j),R(!1),n||(dispatchEvent(new Event("page:end")),window.scrollTo(0,0))},onError(n){R(!1),console.error(n)}}});function L({Page:n,initData:t,route:s,isServer:i}){return e(y,{Page:n,props:v(l({},t),{route:s,isServer:i})})}var m,W=f(()=>{x();N();L.initProps=y.initProps;L.event=y.event||{};m=L});var z,G=f(()=>{z={darkMode:"class"}});var O,U=f(()=>{T();G();O={target:"__MY_PAGE__",onHydrate:()=>{H(z)}}});function tt(n,t,s){let i=s.groups||{};if(!t)return i;if(n.indexOf("*")!==-1){s.shift();let o=s.filter(a=>a!==void 0).filter(a=>a.startsWith("/")).join("").split("/");o.shift();let r=v(l({},i),{wild:o.filter(a=>a!=="")});if(n==="*"||n.indexOf("/*")!==-1)return r;let d=n.split("/").find(a=>a.startsWith(":")&&a.endsWith("*"));return d&&(d=d.slice(1,-1),r[d]=[r[d]].concat(r.wild).filter(a=>a!==""),delete r.wild),r}return i}function Y(n){try{return decodeURI(n)}catch(t){return n}}var _,J=f(()=>{X();_=class{constructor(t){this.routes=[];this.ErrorPage=t}add(t,s){let i=!1,o=t.replace(/\/$/,"").replace(/:(\w+)(\?)?(\.)?/g,"$2(?<$1>[^/]+)$2$3").replace(/(\/?)\*/g,(d,a)=>(i=!0,`(${a}.*)?`)).replace(/\.(?=[\w(])/,"\\."),r=new RegExp(`^${o}/*$`);return this.routes.push({path:t,fn:s,regex:r,wild:i}),this}find(t){let s,i={},o=0,r,d=this.routes,a=d.length;for(t=Y(t);o<a;){if(r=d[o],r.regex.test(t)){let p=r.regex.exec(t);s=r.fn,i=tt(r.path,r.wild,p);break}o++}return{fn:s,params:i}}handle(){let{pathname:t,search:s,origin:i}=window.location;if(this.current===t+s)return;let{fn:o,params:r}=this.find(t),d=this.ErrorPage;this.current=t+s;let a={};if(a.pathname=t,a.url=this.current,a.path=t,a.isServer=!1,a.getBaseUrl=()=>i,a.params=r,a.fetchApi=(p,g)=>w(this,null,function*(){try{let u=yield fetch(i+p,g);if(!u.ok)throw u;return{data:yield u.json(),error:void 0}}catch(u){let h=yield u.json();return h.message=Y(h.message),{data:void 0,error:h}}}),a.render=(p,g)=>{$(p,g?document.getElementById(g):document.body)},!o)return a.render(e(d,{message:"Not Found",status:404}));o(a)}resolve(){let t=()=>this.handle();t(),window.addEventListener("pushstate",s=>{s.preventDefault(),t()}),window.addEventListener("replacestate",s=>{s.preventDefault(),t()}),window.addEventListener("popstate",()=>{t()})}}});var nt=Q(K=>{x();B();W();U();V();J();function et(n){return w(this,null,function*(){return(yield import(n)).default})}var{target:S,onHydrate:rt}=O;window.addEventListener("load",()=>{rt();let n=!0,t=document.getElementById("__INIT_DATA__");t&&(t=JSON.parse(t.textContent||"{}"));let s=new _(F);for(let i=0;i<P.length;i++){let o=P[i];s.add(o.path,r=>w(K,null,function*(){r.isFirst=n;try{let d=typeof S=="string"?S:S(r);if(!d&&!n)return window.location.href=r.url;let a={};n||(a=m.initProps?yield m.initProps(r):{}),m.event.onStart!==void 0&&(yield m.event.onStart(r));let p=typeof o.page=="string"?yield et(o.page):o.page,g=n?t||{}:p.initProps?yield p.initProps(r):{},u=()=>{r.render(e(m,{Page:p,initData:l(l({},g),a),route:{pathname:r.pathname,url:r.url,path:o.path,params:r.params},isServer:!1}))};if(n)u();else{let h=l(l({},g),a);r.render(e(p,v(l({},h),{route:{pathname:r.pathname,url:r.url,path:o.path,params:r.params},isServer:!1})),d)}m.event.onEnd!==void 0&&m.event.onEnd(r)}catch(d){m.event.onError!==void 0&&m.event.onError(d,r)}n=!1}))}s.resolve()})});export default nt();
