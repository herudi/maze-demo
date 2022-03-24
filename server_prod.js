var rt=Object.defineProperty;var st=Object.getOwnPropertyDescriptor;var v=(e,t,s,g)=>{for(var u=g>1?void 0:g?st(t,s):t,h=e.length-1,k;h>=0;h--)(k=e[h])&&(u=(g?k(t,s,u):k(u))||u);return g&&u&&rt(t,s,u),u};import{initApp as Dt}from"https://raw.githubusercontent.com/herudi/maze/master/core/server_prod.ts";import{h as d,Helmet as ot,Fragment as at}from"https://deno.land/x/nano_jsx@v0.0.30/mod.ts";import{tw as f}from"https://cdn.skypack.dev/twind@0.16.16";function b({message:e="something went wrong",status:t=500}){return d(at,null,d(ot,null,d("script",{src:"/assets/theme.js"}),d("title",null,t," ",e)),d("div",{class:f`flex justify-center w-full h-screen bg-white dark:bg-gray-800`},d("div",{class:f`px-40 py-20 rounded-md`},d("div",{class:f`flex flex-col items-center`},d("h1",{class:f`font-bold text-blue-600 text-9xl`},t),d("h6",{class:f`mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl dark:text-white`},d("span",{class:f`text-red-500`},"Oops!")," Error"),d("p",{class:f`mb-8 text-center text-gray-500 md:text-lg  dark:text-white`},e)))))}import{Helmet as it,renderSSR as nt}from"https://deno.land/x/nano_jsx@v0.0.30/mod.ts";import{setup as lt}from"https://cdn.skypack.dev/twind@0.16.16";import{virtualSheet as mt,getStyleTag as dt}from"https://cdn.skypack.dev/twind@0.16.16/sheets";var B={darkMode:"class"};var q=mt();lt({...B,sheet:q});function S(e,t,s={}){q.reset();let g=nt(e,s),{body:u,head:h,footer:k,attributes:M}=it.SSR(g),et=dt(q);return`<!DOCTYPE html>
<html ${M.html.toString()}>
  <head>
    ${h.join(`
    `)}
    ${et}
  </head>
  <body ${M.body.toString()}>
    ${u}
    ${k.join("")}${t}
  </body>
</html>`}import{h as ft}from"https://deno.land/x/nano_jsx@v0.0.30/mod.ts";import{h as i,Helmet as ut,Fragment as xt}from"https://deno.land/x/nano_jsx@v0.0.30/mod.ts";import{Component as pt,h as n,Router as ct}from"https://deno.land/x/nano_jsx@v0.0.30/mod.ts";import{tw as p}from"https://cdn.skypack.dev/twind@0.16.16";var{Link:L}=ct,U="bg-gray-200 text-gray-900 dark:(bg-gray-900 text-white) px-3 py-2 rounded-md text-sm font-medium",E="text-gray-900 hover:bg-gray-300 hover:text-gray-900 dark:(text-gray-300 hover:bg-gray-700 hover:text-white) px-3 py-2 rounded-md text-sm font-medium",gt="bg-gray-300 text-gray-900 dark:(bg-gray-700 text-white) px-3 py-2 rounded-md text-sm font-medium",_=class extends pt{constructor(t){super(t);this.text_switch=".";t.isServer||(this.text_switch=window.__btn_switch)}didMount(){addEventListener("page:end",()=>{this.update(location.pathname)})}onSwitch(){let t=document.documentElement.classList;t&&t.value==="dark"?(document.documentElement.classList.remove("dark"),localStorage.removeItem("theme"),this.text_switch="Light"):(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark"),this.text_switch="Dark"),this.update(location.pathname)}render(t){let s=t||this.props.route.pathname;return s==="/sign"?n("div",null):n("nav",{class:p`bg-white lg:border-b dark:(bg-gray-800 lg:border-gray-900) sticky top-0 z-10`},n("div",{class:p`max-w-7xl mx-auto px-2 sm:px-6 lg:px-8`},n("div",{class:p`relative flex items-center justify-between h-16`},n("div",{class:p`flex-1 flex items-center justify-center sm:items-stretch sm:justify-start`},n("div",{class:p`sm:block sm:ml-6`},n("div",{class:p`flex space-x-4`},n(L,{to:"/",class:p`${s==="/"?U:E}`},"Home"),n(L,{to:"/blog",class:p`${s.startsWith("/blog")?U:E}`},"Blog"),n(L,{to:"/sign",class:p`${E}`},"Sign Form")))),n("div",{class:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"},n("a",{class:p`${E}`,href:"https://github.com/herudi/maze",target:"_blank"},"Github"),n("button",{style:"width: 80px",onClick:this.onSwitch.bind(this),class:p`${gt}`},this.text_switch)))))}};function C(e){let t=document.getElementById("loading");t.style.display=e?"block":"none"}function y({Page:e,props:t}){return i(xt,null,i(ut,null,i("html",{lang:"en"}),i("meta",{charset:"utf-8"}),i("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),i("link",{rel:"icon",href:"data:,"}),i("script",{src:"/assets/theme.js"}),i("link",{href:"/assets/loading.css",rel:"stylesheet"})),i(_,{...t}),i("div",{id:"__MY_PAGE__"},i(e,{...t})),i("div",{id:"loading",class:"center-div-loading",style:"display: none;"},i("div",{class:"linear-progress-material"},i("div",{class:"bar bar1"}),i("div",{class:"bar bar2"}))))}var F;y.event={onStart(e){e.isFirst||(F=setTimeout(()=>{C(!0)},300))},onEnd({isFirst:e}){F&&clearTimeout(F),C(!1),e||(dispatchEvent(new Event("page:end")),window.scrollTo(0,0))},onError(e){C(!1),console.error(e)}};function T({Page:e,initData:t,route:s,isServer:g}){return ft(y,{Page:e,props:{...t,route:s,isServer:g}})}T.initProps=y.initProps;T.event=y.event||{};var N=T;import{Router as yt}from"https://deno.land/x/nhttp@1.1.10/mod.ts";import{HttpError as bt}from"https://deno.land/x/nhttp@1.1.10/mod.ts";async function A(e){if(e.request.method=="GET")return await(await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")).json();throw new bt(405,"method not allowed")}import{HttpError as V}from"https://deno.land/x/nhttp@1.1.10/mod.ts";async function I(e){if(e.request.method=="GET"){let t=await(await fetch(`https://jsonplaceholder.typicode.com/posts?title=${e.params.title.replace(/\-/g," ")}`)).json();if(!t[0])throw new V(404,"Data not found");return t[0]}throw new V(405,"method not allowed")}import{HttpError as vt}from"https://deno.land/x/nhttp@1.1.10/mod.ts";async function D(e){if(e.request.method=="GET")return{};if(e.request.method=="POST"){let{username:t,password:s}=e.body;return t==="deno"&&s==="nanojsx"?{message:"success"}:{message:"wrong username and password"}}throw new vt(405,"method not allowed")}var R=new yt;R.any("/blog",A);R.any("/blog/:title",I);R.any("/sign",D);var J=R;var W=[{path:"/blog",page:"./blog/index.js"},{path:"/blog/:title",page:"./blog/[title].js"},{path:"/",page:"./index.js"},{path:"/sign",page:"./sign.js"}];var Y="1648133630588";import{Component as wt,Fragment as ht,h as o,Helmet as kt,Router as Pt}from"https://deno.land/x/nano_jsx@v0.0.30/mod.ts";import{tw as l}from"https://cdn.skypack.dev/twind@0.16.16";import{InitProps as Et}from"https://raw.githubusercontent.com/herudi/maze/master/mod.ts";var{Link:K}=Pt,j=class extends wt{render(){return this.props.error?o(b,{...this.props.error}):o(ht,null,o(kt,null,o("title",null,"Hello Blog Page")),o("div",{class:l`bg-white min-h-screen dark:bg-gray-800`},o("main",{class:l`max-w-5xl mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl`},o("header",{class:l`pt-10 pb-9 sm:pb-16 sm:text-center`},o("h1",{class:l`mb-4 text-3xl sm:text-4xl tracking-tight font-extrabold dark:text-white`},"Blog"),o("p",{class:l`text-lg dark:text-white`},"Example blog page with dummy data from ",o("a",{target:"_blank",href:"https://jsonplaceholder.typicode.com/"},"https://jsonplaceholder.typicode.com/"))),o("div",{class:l`space-y-16`},this.props.data.map(t=>o("article",{class:l`relative flex flex-col max-w-3xl lg:ml-auto xl:max-w-none xl:w-[50rem]`},o("h3",{class:l`mb-4 text-xl tracking-tight font-bold dark:text-white`},o(K,{to:"/blog/"+t.title},t.title)),o("div",{class:l`mb-6 dark:text-white`},o("p",null,t.body)),o("div",{class:l`mt-auto flex flex-row-reverse items-center justify-end`},o("div",{class:l`text-sm leading-6 lg:absolute lg:top-0 lg:right-full lg:mr-8 lg:whitespace-nowrap dark:text-white`},"January, 12 2030"),o(K,{to:"/blog/"+t.title.replace(/\s/g,"-"),class:l`px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100 dark:(bg-gray-900 text-gray-200)`},"Read More"))))))))}};j=v([Et(async({fetchApi:e})=>{let{data:t,error:s}=await e("/api/blog");return{data:t,error:s}})],j);var G=j;import{Component as _t,Fragment as Rt,h as c,Helmet as jt,Router as $t}from"https://deno.land/x/nano_jsx@v0.0.30/mod.ts";import{tw as w}from"https://cdn.skypack.dev/twind@0.16.16";import{InitProps as Ht}from"https://raw.githubusercontent.com/herudi/maze/master/mod.ts";var{Link:qt}=$t,$=class extends _t{render(){return this.props.error?c(b,{...this.props.error}):c(Rt,null,c(jt,null,c("title",null,this.props.data.title)),c("div",{class:w`bg-white flex h-screen dark:bg-gray-800`},c("div",{class:w`max-w-5xl mx-auto px-4 pb-28 mt-10 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl`},c("div",null,c("div",{class:w`text-sm sm:text-center dark:text-white`},"January, 12 2030"),c("h1",{class:w`col-span-full text-3xl sm:text-4xl sm:text-center xl:mb-16 font-extrabold tracking-tight dark:text-white`},this.props.data.title),c("p",{class:w`mb-20 dark:text-white`},this.props.data.body),c(qt,{to:"/blog",class:w`px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100 dark:(bg-gray-900 text-gray-200)`},"Back")))))}};$=v([Ht(async({fetchApi:e,params:t})=>{let{data:s,error:g}=await e("/api/blog/"+t.title.replace(/\-/g," "));return{data:s,error:g}})],$);var O=$;import{Component as St,h as m,Helmet as Lt,Fragment as Ct}from"https://deno.land/x/nano_jsx@v0.0.30/mod.ts";import{tw as x}from"https://cdn.skypack.dev/twind@0.16.16";var Q={button:"text-2xl px-6 py-2 font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},P=class extends St{constructor(){super(...arguments);this.value=0}changeValue(t){this.value+=t,this.update()}render(){return m(Ct,null,m(Lt,null,m("title",null,"Hello Home Page")),m("div",{class:x`bg-white dark:bg-gray-800 flex justify-center h-screen`},m("div",null,m("div",{class:x`text-center mt-20 mb-10 text-gray-600 dark:text-white`},m("h3",{class:x`text-5xl`},"Welcome Home"),m("p",{class:x`text-2xl dark:text-white`},"Example Counter App")),m("div",{class:x`text-center`},m("button",{class:x`${Q.button}`,onClick:()=>this.changeValue(1)},"+"),m("span",{class:x`p-5 text-2xl font-bold text-blue-800 dark:text-white`},this.value),m("button",{class:x`${Q.button}`,onClick:()=>this.changeValue(-1)},"-")))))}};import{Component as Ft,Fragment as Tt,h as r,Helmet as At}from"https://deno.land/x/nano_jsx@v0.0.30/mod.ts";import{tw as a}from"https://cdn.skypack.dev/twind@0.16.16";import{InitProps as It}from"https://raw.githubusercontent.com/herudi/maze/master/mod.ts";var X={input:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"},H=class extends Ft{render(){return r(Tt,null,r(At,null,r("title",null,"Sign Page")),r("div",{class:a`h-screen flex justify-center py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-800`},r("div",{class:a`max-w-sm w-full space-y-8`},r("div",null,r("h2",{class:a`mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white`},"Sign Page"),r("p",{class:a`text-center dark:text-white`},"(Example handle formData)"),this.props.message&&r("div",{class:a`mt-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative`,role:"alert"},r("strong",{class:a`font-bold`},"Error"),r("span",{class:a`block sm:inline`},this.props.message),r("span",{class:a`absolute top-0 bottom-0 right-0 px-4 py-3`},r("svg",{class:a`fill-current h-6 w-6 text-red-500`,role:"button",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r("title",null,"Close"),r("path",{d:"M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"})))),r("form",{class:a`mt-8 space-y-6`,action:"/sign",method:"POST"},r("div",{class:a`rounded-md shadow-sm -space-y-px`},r("div",null,r("label",{class:a`sr-only`},"Username"),r("input",{name:"username",type:"text",class:a`${X.input}`,placeholder:"Username = deno",requied:!0})),r("div",null,r("label",{class:a`sr-only`},"Password"),r("input",{name:"password",type:"password",class:a`${X.input}`,placeholder:"Password = nanojsx",requied:!0}))),r("div",null,r("button",{type:"submit",class:a`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`},"Sign in")))))))}};H=v([It(async e=>{if(e.isServer&&e.request.method==="POST"){let{data:t}=await e.fetchApi("/api/sign");return t.message==="success"?e.response.redirect("/"):{message:t.message}}return{}},["GET","POST"])],H);var z=H;var Z=[{path:"/blog",page:G,methods:G.methods},{path:"/blog/:title",page:O,methods:O.methods},{path:"/",page:P,methods:P.methods},{path:"/sign",page:z,methods:z.methods}];var tt=(e,{appCallback:t,staticConfig:s}={})=>Dt({root:N,error_page:b,pages:W,server_pages:Z,apis:J,meta_url:e,build_id:Y,ssr:S,static_config:s},t);tt(import.meta.url,{staticConfig:({response:e,env:t})=>{t==="production"&&e.header("cache-control","public, max-age=7200, immutable")}}).listen(8080,()=>{console.log("> Running on http://localhost:8080")});
