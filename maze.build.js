var Y=Object.defineProperty;var Z=Object.getOwnPropertyDescriptor;var g=(e,t,o,l)=>{for(var i=l>1?void 0:l?Z(t,o):t,b=e.length-1,y;b>=0;b--)(y=e[b])&&(i=(l?y(t,o,i):y(i))||i);return l&&i&&Y(t,o,i),i};import{initApp as Ct}from"https://raw.githubusercontent.com/herudi/maze/dev-0.0.7/core/server_prod.ts";import{h as d,Helmet as K,Fragment as Q}from"https://deno.land/x/nano_jsx@v0.0.30/mod.ts";function h({message:e="something went wrong",status:t=500}){return d(Q,null,d(K,null,d("script",{src:"/assets/theme.js"}),d("title",null,t," ",e)),d("div",{class:"flex justify-center w-full h-screen bg-white dark:bg-gray-800"},d("div",{class:"px-40 py-20 rounded-md"},d("div",{class:"flex flex-col items-center"},d("h1",{class:"font-bold text-blue-600 text-9xl"},t),d("h6",{class:"mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl dark:text-white"},d("span",{class:"text-red-500"},"Oops!")," Error"),d("p",{class:"mb-8 text-center text-gray-500 md:text-lg  dark:text-white"},e)))))}import{Helmet as X,renderSSR as tt}from"https://deno.land/x/nano_jsx@v0.0.30/mod.ts";var A={darkMode:"class"};import{setup as et}from"https://jspm.dev/twind@0.16.17";import{shim as rt,virtualSheet as st,getStyleTag as ot}from"https://jspm.dev/twind@0.16.17/shim/server";var _=st();et({sheet:_,...A});function H(e,t,o={}){_.reset();let l=tt(e,o);rt(l);let{body:i,head:b,footer:y,attributes:T}=X.SSR(l),W=ot(_,void 0);return`<!DOCTYPE html>
<html ${T.html.toString()}>
  <head>
    ${b.join(`
    `)}
    ${W}
  </head>
  <body ${T.body.toString()}>
    ${i}
    ${y.join("")}${t}
  </body>
</html>`}var I="1650723027856",z="production";var L={cache_control:"public, max-age=31536000, immutable",etag:z==="production"};import{h as pt}from"https://deno.land/x/nano_jsx@v0.0.30/mod.ts";import{h as m,Helmet as lt,Fragment as dt}from"https://deno.land/x/nano_jsx@v0.0.30/mod.ts";import{Component as at,h as n,Router as it}from"https://deno.land/x/nano_jsx@v0.0.30/mod.ts";var{Link:R}=it,M="bg-gray-200 text-gray-900 dark:(bg-gray-900 text-white) px-3 py-2 rounded-md text-sm font-medium",S="text-gray-900 hover:bg-gray-300 hover:text-gray-900 dark:(text-gray-300 hover:bg-gray-700 hover:text-white) px-3 py-2 rounded-md text-sm font-medium",nt="bg-gray-300 text-gray-900 dark:(bg-gray-700 text-white) px-3 py-2 rounded-md text-sm font-medium",w=class extends at{constructor(t){super(t);this.text_switch=".";t.isServer||(this.text_switch=window.__btn_switch)}didMount(){addEventListener("page:end",()=>{this.update(location.pathname)})}onSwitch(){let t=document.documentElement.classList;t&&t.value==="dark"?(document.documentElement.classList.remove("dark"),localStorage.removeItem("theme"),this.text_switch="Light"):(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark"),this.text_switch="Dark"),this.update(location.pathname)}render(t){let o=t||this.props.route.pathname;return o==="/sign"?n("div",null):n("nav",{class:"bg-white lg:border-b dark:(bg-gray-800 lg:border-gray-900) sticky top-0 z-10"},n("div",{class:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"},n("div",{class:"relative flex items-center justify-between h-16"},n("div",{class:"flex-1 flex items-center justify-start"},n("div",{class:"sm:block sm:ml-6"},n("div",{class:"flex space-x-4"},n(R,{to:"/",class:o==="/"?M:S},"Home"),n(R,{to:"/blog",class:o.startsWith("/blog")?M:S},"Blog"),n(R,{to:"/sign",class:S},"Sign Form")))),n("div",{class:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"},n("button",{style:"width: 80px",onClick:this.onSwitch.bind(this),class:nt},this.text_switch)))))}};var mt=`<div class="fixed top-0 left-0 right-0 z-10">
<div class="w-full"><div class="animate-pulse flex"><div class="flex-1"><div class="h-0.5 bg-blue-700"></div></div></div></div>
</div>`;function j(e){let t=document.getElementById("loading");t.innerHTML=e?mt:""}function x({Page:e,props:t}){return m(dt,null,m(lt,null,m("html",{lang:"en"}),m("meta",{charset:"utf-8"}),m("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),m("link",{rel:"icon",href:"data:,"}),m("script",{src:"/assets/theme.js"})),m(w,{...t}),m("div",{id:"__MAZE_PAGE__"},m(e,{...t})),m("div",{id:"loading"}))}var $;x.event={onStart(e){e.isFirst||($=setTimeout(()=>{j(!0)},300))},onEnd({isFirst:e}){$&&clearTimeout($),j(!1),e||(dispatchEvent(new Event("page:end")),window.scrollTo(0,0))},onError(e){j(!1),console.error(e)}};function C({Page:e,initData:t,route:o,isServer:l}){return pt(x,{Page:e,props:{...t,route:o,isServer:l}})}C.initProps=x.initProps;C.event=x.event||{};var O=C;import{Router as gt}from"https://deno.land/x/nhttp@1.1.10/mod.ts";import{HttpError as ct}from"https://deno.land/x/nhttp@1.1.11/mod.ts";async function q(e){if(e.request.method=="GET")return{};if(e.request.method=="POST"){let{username:t,password:o}=e.body;return t==="deno"&&o==="nanojsx"?{message:"success"}:{message:"wrong username and password"}}throw new ct(405,"method not allowed")}var B=new gt;B.any("/sign",q);var D=B;import{Component as xt,Fragment as ut,h as s,Helmet as ft,Router as vt}from"https://deno.land/x/nano_jsx@v0.0.30/mod.ts";import{InitProps as bt}from"https://raw.githubusercontent.com/herudi/maze/dev-0.0.7/mod.ts";var{Link:N}=vt,k=class extends xt{render(){return s(ut,null,s(ft,null,s("title",null,"Hello Blog Page")),s("div",{class:"bg-white min-h-screen dark:bg-gray-800"},s("main",{class:"max-w-5xl mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl"},s("header",{class:"pt-10 pb-9 sm:pb-16 sm:text-center"},s("h1",{class:"mb-4 text-3xl sm:text-4xl tracking-tight font-extrabold dark:text-white"},"Blog"),s("p",{class:"text-lg dark:text-white"},"Example blog page with dummy data from ",s("a",{target:"_blank",href:"https://jsonplaceholder.typicode.com/"},"https://jsonplaceholder.typicode.com/"))),s("div",{class:"space-y-16"},this.props.data.map(t=>s("article",{class:"relative flex flex-col max-w-3xl lg:ml-auto xl:max-w-none xl:w-[50rem]"},s("h3",{class:"mb-4 text-xl tracking-tight font-bold dark:text-white"},s(N,{to:"/blog/"+t.title.replace(/\s/g,"-")},t.title)),s("div",{class:"mb-6 dark:text-white"},s("p",null,t.body)),s("div",{class:"mt-auto flex flex-row-reverse items-center justify-end"},s("div",{class:"text-sm leading-6 lg:absolute lg:top-0 lg:right-full lg:mr-8 lg:whitespace-nowrap dark:text-white"},"January, 12 2030"),s(N,{to:"/blog/"+t.title.replace(/\s/g,"-"),class:"px-6 py-2 text-sm font-semibold bg-blue-100 text-blue-600 dark:(bg-gray-900 text-gray-200)"},"Read More"))))))))}};k=g([bt(async()=>({data:await(await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")).json()}))],k);var u=k;import{Component as yt,Fragment as ht,h as p,Helmet as wt,Router as kt}from"https://deno.land/x/nano_jsx@v0.0.30/mod.ts";import{InitProps as Pt}from"https://raw.githubusercontent.com/herudi/maze/dev-0.0.7/mod.ts";var{Link:Et}=kt,P=class extends yt{render(){return this.props.error?p(h,{...this.props.error}):p(ht,null,p(wt,null,p("title",null,this.props.data.title)),p("div",{class:"bg-white flex h-screen dark:bg-gray-800"},p("div",{class:"max-w-5xl mx-auto px-4 pb-28 mt-10 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl"},p("div",null,p("div",{class:"text-sm sm:text-center dark:text-white"},"January, 12 2030"),p("h1",{class:"col-span-full text-3xl sm:text-4xl sm:text-center xl:mb-16 font-extrabold tracking-tight dark:text-white"},this.props.data.title),p("p",{class:"mb-20 dark:text-white"},this.props.data.body),p(Et,{to:"/blog",class:"px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100 dark:(bg-gray-900 text-gray-200)"},"Back")))))}};P=g([Pt(async({params:e})=>{let t=await(await fetch(`https://jsonplaceholder.typicode.com/posts?title=${e.title.replace(/\-/g," ")}`)).json();return t[0]?{data:t[0]}:{error:{status:404,message:"blog not found"}}})],P);var f=P;import{Component as _t,h as a,Helmet as Ht,Fragment as Lt}from"https://deno.land/x/nano_jsx@v0.0.30/mod.ts";var F={gh_button:"text-gray-900 hover:bg-gray-300 hover:text-gray-900 dark:(text-gray-300 hover:bg-gray-700 hover:text-white) px-3 py-2 rounded-md text-sm font-medium",button:"text-2xl px-6 py-2 font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},c=class extends _t{constructor(){super(...arguments);this.value=0}changeValue(t){this.value+=t,this.update()}render(){return a(Lt,null,a(Ht,null,a("title",null,"Hello Home Page")),a("div",{class:"bg-white dark:bg-gray-800 flex justify-center h-screen"},a("div",null,a("div",{class:"text-center mt-20 mb-10 text-gray-600 dark:text-white"},a("h3",{class:"text-5xl"},"Welcome Home"),a("p",{class:"text-2xl dark:text-white"},"Example Counter App")),a("div",{class:"text-center"},a("button",{class:F.button,onClick:()=>this.changeValue(1)},"+"),a("span",{class:"p-5 text-2xl font-bold text-blue-800 dark:text-white"},this.value),a("button",{class:F.button,onClick:()=>this.changeValue(-1)},"-"),a("div",{class:"mt-10"},a("a",{class:F.gh_button,href:"https://github.com/herudi/maze",target:"_blank"},"-= GITHUB =-"))))))}};import{Component as Rt,Fragment as St,h as r,Helmet as jt}from"https://deno.land/x/nano_jsx@v0.0.30/mod.ts";import{InitProps as $t}from"https://raw.githubusercontent.com/herudi/maze/dev-0.0.7/mod.ts";var U={input:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"},E=class extends Rt{render(){return r(St,null,r(jt,null,r("title",null,"Sign Page")),r("div",{class:"h-screen flex justify-center py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-800"},r("div",{class:"max-w-sm w-full space-y-8"},r("div",null,r("h2",{class:"mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white"},"Sign Page"),r("p",{class:"text-center dark:text-white"},"(Example handle formData)"),this.props.message&&r("div",{class:"mt-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative",role:"alert"},r("strong",{class:"font-bold"},"Error"),r("span",{class:"block sm:inline"},this.props.message),r("span",{class:"absolute top-0 bottom-0 right-0 px-4 py-3"},r("svg",{class:"fill-current h-6 w-6 text-red-500",role:"button",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r("title",null,"Close"),r("path",{d:"M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"})))),r("form",{class:"mt-8 space-y-6",action:"/sign",method:"POST"},r("div",{class:"rounded-md shadow-sm -space-y-px"},r("div",null,r("label",{class:"sr-only"},"Username"),r("input",{name:"username",type:"text",class:U.input,placeholder:"Username = deno",requied:!0})),r("div",null,r("label",{class:"sr-only"},"Password"),r("input",{name:"password",type:"password",class:U.input,placeholder:"Password = nanojsx",requied:!0}))),r("div",null,r("button",{type:"submit",class:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"Sign in")))))))}};E=g([$t(async({isServer:e,request:t,response:o,fetchApi:l})=>{if(e&&t.method==="POST"){let{data:i}=await l("/api/sign");return i.message==="success"?o.redirect("/"):{message:i.message}}return{}},["GET","POST"])],E);var v=E;var V=[{path:"/blog",page:u,methods:u.methods},{path:"/blog/:title",page:f,methods:f.methods},{path:"/",page:c,methods:c.methods},{path:"/sign",page:v,methods:v.methods}];var G=[{path:"/blog",page:u,methods:u.methods},{path:"/blog/:title",page:f,methods:f.methods},{path:"/",page:c,methods:c.methods},{path:"/sign",page:v,methods:v.methods}];var J=(e,{routeCallback:t,staticConfig:o}={})=>Ct({root:O,error_page:h,pages:V,server_pages:G,apis:D,meta_url:e,build_id:I,ssr:H,static_config:o,etag:L.etag,cache_control:L.cache_control},t);var De=e=>J(e);export{De as default};
