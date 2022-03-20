import{initApp as xt}from"https://raw.githubusercontent.com/herudi/maze/master/core/server_prod.ts";import{h as p,Helmet as Y}from"https://deno.land/x/nano_jsx@v0.0.30/mod.ts";import{tw as u}from"https://cdn.skypack.dev/twind@0.16.16";function x({message:e="something went wrong",status:t=500}){return p("div",null,p(Y,null,p("script",{src:"/assets/theme.js"}),p("title",null,t," ",e)),p("div",{class:u`flex justify-center w-full h-screen bg-white dark:bg-gray-800`},p("div",{class:u`px-40 py-20 rounded-md`},p("div",{class:u`flex flex-col items-center`},p("h1",{class:u`font-bold text-blue-600 text-9xl`},t),p("h6",{class:u`mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl dark:text-white`},p("span",{class:u`text-red-500`},"Oops!")," Error"),p("p",{class:u`mb-8 text-center text-gray-500 md:text-lg  dark:text-white`},e)))))}import{h as tt}from"https://deno.land/x/nano_jsx@v0.0.30/mod.ts";import{h as i,Helmet as Z}from"https://deno.land/x/nano_jsx@v0.0.30/mod.ts";import{Component as K,h as n,Router as Q}from"https://deno.land/x/nano_jsx@v0.0.30/mod.ts";import{tw as m}from"https://cdn.skypack.dev/twind@0.16.16";var{Link:E}=Q,S="bg-gray-200 text-gray-900 dark:(bg-gray-900 text-white) px-3 py-2 rounded-md text-sm font-medium",y="text-gray-900 hover:bg-gray-300 hover:text-gray-900 dark:(text-gray-300 hover:bg-gray-700 hover:text-white) px-3 py-2 rounded-md text-sm font-medium",X="bg-gray-300 text-gray-900 dark:(bg-gray-700 text-white) px-3 py-2 rounded-md text-sm font-medium",h=class extends K{constructor(t){super(t);this.text_switch=".";t.isServer||(this.text_switch=window.__btn_switch)}didMount(){addEventListener("page:end",()=>{this.update(location.pathname)})}onSwitch(){let t=document.documentElement.classList;t&&t.value==="dark"?(document.documentElement.classList.remove("dark"),localStorage.removeItem("theme"),this.text_switch="Light"):(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark"),this.text_switch="Dark"),this.update(location.pathname)}render(t){let o=t||this.props.route.pathname;return o==="/sign"?n("div",null):n("nav",{class:m`bg-white lg:border-b dark:(bg-gray-800 lg:border-gray-900) sticky top-0 z-10`},n("div",{class:m`max-w-7xl mx-auto px-2 sm:px-6 lg:px-8`},n("div",{class:m`relative flex items-center justify-between h-16`},n("div",{class:m`flex-1 flex items-center justify-center sm:items-stretch sm:justify-start`},n("div",{class:m`sm:block sm:ml-6`},n("div",{class:m`flex space-x-4`},n(E,{to:"/",class:m`${o==="/"?S:y}`},"Home"),n(E,{to:"/blog",class:m`${o.startsWith("/blog")?S:y}`},"Blog"),n(E,{to:"/sign",class:m`${y}`},"Sign Form")))),n("div",{class:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"},n("a",{class:m`${y}`,href:"https://github.com/herudi/maze",target:"_blank"},"Github"),n("button",{style:"width: 80px",onClick:this.onSwitch.bind(this),class:m`${X}`},this.text_switch)))))}};function P(e){let t=document.getElementById("loading");t.style.display=e?"block":"none"}function f({Page:e,props:t}){return i("div",null,i(Z,null,i("html",{lang:"en"}),i("meta",{charset:"utf-8"}),i("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),i("link",{rel:"icon",href:"data:,"}),i("script",{src:"/assets/theme.js"}),i("link",{href:"/assets/loading.css",rel:"stylesheet"})),i("div",{id:"loading",class:"center-div-loading",style:"display: none;"},i("div",{class:"linear-progress-material"},i("div",{class:"bar bar1"}),i("div",{class:"bar bar2"}))),i(h,{...t}),i("div",{id:"__MY_PAGE__"},i(e,{...t})))}var _;f.event={onStart(e){e.isFirst||(_=setTimeout(()=>{P(!0)},300))},onEnd({isFirst:e}){_&&clearTimeout(_),P(!1),e||(dispatchEvent(new Event("page:end")),window.scrollTo(0,0))},onError(e){P(!1),console.error(e)}};function R({Page:e,initData:t,route:o,isServer:b}){return tt(f,{Page:e,props:{...t,route:o,isServer:b}})}R.initProps=f.initProps;R.event=f.event||{};var T=R;import{Router as st}from"https://deno.land/x/nhttp@1.1.10/mod.ts";import{HttpError as et}from"https://deno.land/x/nhttp@1.1.10/mod.ts";async function q(e){if(e.request.method=="GET")return await(await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")).json();throw new et(405,"method not allowed")}import{HttpError as B}from"https://deno.land/x/nhttp@1.1.10/mod.ts";async function H(e){if(e.request.method=="GET"){let t=await(await fetch(`https://jsonplaceholder.typicode.com/posts?title=${e.params.title.replace(/\-/g," ")}`)).json();if(!t[0])throw new B(404,"Data not found");return t[0]}throw new B(405,"method not allowed")}import{HttpError as rt}from"https://deno.land/x/nhttp@1.1.10/mod.ts";async function j(e){if(e.request.method=="GET")return{};if(e.request.method=="POST"){let{username:t,password:o}=e.body;return t==="deno"&&o==="deno"?{message:"success"}:{message:"wrong username and password"}}throw new rt(405,"method not allowed")}var k=new st;k.any("/blog",q);k.any("/blog/:title",H);k.any("/sign",j);var I=k;var D={darkMode:"class"};var G=[{path:"/blog",page:"./blog/index.js"},{path:"/blog/:title",page:"./blog/[title].js"},{path:"/",page:"./index.js"},{path:"/sign",page:"./sign.js"}];var M="1647817501510";import{Component as ot,h as s,Helmet as at,Router as it}from"https://deno.land/x/nano_jsx@v0.0.30/mod.ts";import{tw as l}from"https://cdn.skypack.dev/twind@0.16.16";var{Link:O}=it,z=class extends ot{static async initProps({fetchApi:t}){let{data:o,error:b}=await t("/api/blog");return{data:o,error:b}}render(){return this.props.error?s(x,{...this.props.error}):s("div",null,s(at,null,s("title",null,"Hello Blog Page")),s("div",{class:l`bg-white min-h-screen dark:bg-gray-800`},s("main",{class:l`max-w-5xl mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl`},s("header",{class:l`pt-10 pb-9 sm:pb-16 sm:text-center`},s("h1",{class:l`mb-4 text-3xl sm:text-4xl tracking-tight font-extrabold dark:text-white`},"Blog"),s("p",{class:l`text-lg dark:text-white`},"Example blog page with dummy data from ",s("a",{target:"_blank",href:"https://jsonplaceholder.typicode.com/"},"https://jsonplaceholder.typicode.com/"))),s("div",{class:l`space-y-16`},this.props.data.map(t=>s("article",{class:l`relative flex flex-col max-w-3xl lg:ml-auto xl:max-w-none xl:w-[50rem]`},s("h3",{class:l`mb-4 text-xl tracking-tight font-bold dark:text-white`},s(O,{to:"/blog/"+t.title},t.title)),s("div",{class:l`mb-6 dark:text-white`},s("p",null,t.body)),s("div",{class:l`mt-auto flex flex-row-reverse items-center justify-end`},s("div",{class:l`text-sm leading-6 lg:absolute lg:top-0 lg:right-full lg:mr-8 lg:whitespace-nowrap dark:text-white`},"January, 12 2030"),s(O,{to:"/blog/"+t.title.replace(/\s/g,"-"),class:l`px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100 dark:(bg-gray-900 text-gray-200)`},"Read More"))))))))}},L=z;import{Component as nt,h as c,Helmet as lt,Router as dt}from"https://deno.land/x/nano_jsx@v0.0.30/mod.ts";import{tw as v}from"https://cdn.skypack.dev/twind@0.16.16";var{Link:pt}=dt,U=class extends nt{static async initProps({fetchApi:t,params:o}){let{data:b,error:J}=await t("/api/blog/"+o.title.replace(/\-/g," "));return{data:b,error:J}}render(){return this.props.error?c(x,{...this.props.error}):c("div",null,c(lt,null,c("title",null,this.props.data.title)),c("div",{class:v`bg-white flex h-screen dark:bg-gray-800`},c("div",{class:v`max-w-5xl mx-auto px-4 pb-28 mt-10 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl`},c("div",null,c("div",{class:v`text-sm sm:text-center dark:text-white`},"January, 12 2030"),c("h1",{class:v`col-span-full text-3xl sm:text-4xl sm:text-center xl:mb-16 font-extrabold tracking-tight dark:text-white`},this.props.data.title),c("p",{class:v`mb-20 dark:text-white`},this.props.data.body),c(pt,{to:"/blog",class:v`px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100 dark:(bg-gray-900 text-gray-200)`},"Back")))))}},$=U;import{Component as mt,h as d,Helmet as ct}from"https://deno.land/x/nano_jsx@v0.0.30/mod.ts";import{tw as g}from"https://cdn.skypack.dev/twind@0.16.16";var N={button:"text-2xl px-6 py-2 font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},w=class extends mt{constructor(){super(...arguments);this.value=0}changeValue(t){this.value+=t,this.update()}render(){return d("div",null,d(ct,null,d("title",null,"Hello Home Page")),d("div",{class:g`bg-white dark:bg-gray-800 flex justify-center h-screen`},d("div",null,d("div",{class:g`text-center mt-20 mb-10 text-gray-600 dark:text-white`},d("h3",{class:g`text-5xl`},"Welcome Home"),d("p",{class:g`text-2xl dark:text-white`},"Example Counter App")),d("div",{class:g`text-center`},d("button",{class:g`${N.button}`,onClick:()=>this.changeValue(1)},"+"),d("span",{class:g`p-5 text-2xl font-bold text-blue-800 dark:text-white`},this.value),d("button",{class:g`${N.button}`,onClick:()=>this.changeValue(-1)},"-")))))}};import{Component as gt,h as r,Helmet as ut}from"https://deno.land/x/nano_jsx@v0.0.30/mod.ts";import{tw as a}from"https://cdn.skypack.dev/twind@0.16.16";var V={input:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"},A=class extends gt{static async initProps(t){if(t.isServer&&t.request.method==="POST"){let{data:o}=await t.fetchApi("/api/sign");return o.message==="success"?t.response.redirect("/"):{message:o.message}}return{}}render(){return r("div",null,r(ut,null,r("title",null,"Sign Page")),r("div",{class:a`h-screen flex justify-center py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-800`},r("div",{class:a`max-w-sm w-full space-y-8`},r("div",null,r("h2",{class:a`mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white`},"Sign Page"),r("p",{class:a`text-center dark:text-white`},"(Example handle formData)"),this.props.message&&r("div",{class:a`mt-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative`,role:"alert"},r("strong",{class:a`font-bold`},"Error"),r("span",{class:a`block sm:inline`},this.props.message),r("span",{class:a`absolute top-0 bottom-0 right-0 px-4 py-3`},r("svg",{class:a`fill-current h-6 w-6 text-red-500`,role:"button",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r("title",null,"Close"),r("path",{d:"M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"})))),r("form",{class:a`mt-8 space-y-6`,action:"/sign",method:"POST"},r("div",{class:a`rounded-md shadow-sm -space-y-px`},r("div",null,r("label",{class:a`sr-only`},"Username"),r("input",{name:"username",type:"text",class:a`${V.input}`,placeholder:"Username = deno",requied:!0})),r("div",null,r("label",{class:a`sr-only`},"Password"),r("input",{name:"password",type:"password",class:a`${V.input}`,placeholder:"Password = deno",requied:!0}))),r("div",null,r("button",{type:"submit",class:a`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`},"Sign in")))))))}};A.methods=["GET","POST"];var C=A;var W=[{path:"/blog",page:L,methods:L.methods},{path:"/blog/:title",page:$,methods:$.methods},{path:"/",page:w,methods:w.methods},{path:"/sign",page:C,methods:C.methods}];var F=(e,{appCallback:t,staticConfig:o}={})=>xt({twind_setup:D,root:T,error_page:x,pages:G,server_pages:W,apis:I,meta_url:e,build_id:M,static_config:o},t);F(import.meta.url,{staticConfig:({response:e,env:t})=>{t==="production"&&e.header("cache-control","public, max-age=7200, immutable")}}).listen(8080,()=>{console.log("> Running on http://localhost:8080")});
