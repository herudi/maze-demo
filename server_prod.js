import{initApp as ct}from"https://raw.githubusercontent.com/herudi/maze/master/core/server.tsx";import{h as d,Helmet as J}from"https://deno.land/x/nano_jsx@v0.0.30/mod.ts";import{tw as x}from"https://cdn.skypack.dev/twind@0.16.16";function g({message:e="something went wrong",status:t=500}){return d("div",null,d(J,null,d("title",null,t," ",e)),d("div",{class:x`flex items-center justify-center w-screen h-screen`},d("div",{class:x`px-40 py-20 bg-white rounded-md`},d("div",{class:x`flex flex-col items-center`},d("h1",{class:x`font-bold text-blue-600 text-9xl`},t),d("h6",{class:x`mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl`},d("span",{class:x`text-red-500`},"Oops!")," Error"),d("p",{class:x`mb-8 text-center text-gray-500 md:text-lg`},e)))))}import{h as K}from"https://deno.land/x/nano_jsx@v0.0.30/mod.ts";import{h as p,Helmet as I}from"https://deno.land/x/nano_jsx@v0.0.30/mod.ts";import{Component as U,h as i,Router as Y}from"https://deno.land/x/nano_jsx@v0.0.30/mod.ts";import{tw as c}from"https://cdn.skypack.dev/twind@0.16.16";var{Link:P}=Y,T="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium",y="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",E=class extends U{didMount(){addEventListener("page:end",()=>{this.update(location.pathname)})}render(t){let a=t||this.props.route.pathname;return a==="/sign"?i("div",null):i("nav",{class:c`bg-gray-800 sticky top-0 z-10`},i("div",{class:c`max-w-7xl mx-auto px-2 sm:px-6 lg:px-8`},i("div",{class:c`relative flex items-center justify-between h-16`},i("div",{class:c`flex-1 flex items-center justify-center sm:items-stretch sm:justify-start`},i("div",{class:c`sm:block sm:ml-6`},i("div",{class:c`flex space-x-4`},i(P,{to:"/",class:c`${a==="/"?T:y}`},"Home"),i(P,{to:"/blog",class:c`${a.startsWith("/blog")?T:y}`},"Blog"),i(P,{to:"/sign",class:c`${y}`},"Sign Form")))),i("div",{class:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"},i("a",{class:c`${y}`,href:"https://github.com/herudi/maze",target:"__blank"},"Github")))))}};function f({Page:e,props:t}){return p("div",null,p(I,null,p("html",{lang:"en"}),p("meta",{charset:"utf-8"}),p("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),p("link",{rel:"icon",href:"data:,"}),p("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js"}),p("link",{href:"https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css",rel:"stylesheet"})),p(E,{route:t.route}),p("div",{id:"__MY_PAGE__"},p(e,{...t})))}var R;f.event={onStart(e){e.NProgress=window.NProgress,e.isFirst||(R=setTimeout(()=>{e.NProgress.start()},300))},onEnd({isFirst:e,NProgress:t}){R&&clearTimeout(R),t.done(),e||(dispatchEvent(new Event("page:end")),window.scrollTo(0,0))},onError(e){console.error(e)}};function q({Page:e,initData:t,route:a,isServer:b}){return K(f,{Page:e,props:{...t,route:a,isServer:b}})}q.initProps=f.initProps;q.event=f.event||{};var C=q;import{Router as tt}from"https://deno.land/x/nhttp@1.1.10/mod.ts";import{HttpError as Q}from"https://deno.land/x/nhttp@1.1.10/mod.ts";async function j(e){if(e.request.method=="GET")return await(await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")).json();throw new Q(405,"method not allowed")}import{HttpError as X}from"https://deno.land/x/nhttp@1.1.10/mod.ts";async function k(e){if(e.request.method=="GET")return(await(await fetch(`https://jsonplaceholder.typicode.com/posts?title=${e.params.title}`)).json())[0]||{};throw new X(405,"method not allowed")}import{HttpError as Z}from"https://deno.land/x/nhttp@1.1.10/mod.ts";async function H(e){if(e.request.method=="GET")return{};if(e.request.method=="POST"){let{username:t,password:a}=e.body;return t==="deno"&&a==="deno"?{message:"success"}:{message:"wrong username and password"}}throw new Z(405,"method not allowed")}var h=new tt;h.any("/blog",j);h.any("/blog/:title",k);h.any("/sign",H);var S=h;var G={};var N=[{path:"/blog",page:"./blog/index.js"},{path:"/blog/:title",page:"./blog/[title].js"},{path:"/",page:"./index.js"},{path:"/sign",page:"./sign.js"}];import{Component as et,h as r,Helmet as st,Router as rt}from"https://deno.land/x/nano_jsx@v0.0.30/mod.ts";import{tw as n}from"https://cdn.skypack.dev/twind@0.16.16";var{Link:B}=rt,M=class extends et{static async initProps({fetchApi:t}){let{data:a,error:b}=await t("/api/blog");return{data:a,error:b}}render(){return this.props.error?r(g,{...this.props.error}):r("div",null,r(st,null,r("title",null,"Hello Blog Page")),r("div",{class:n`bg-white min-h-screen`},r("main",{class:n`max-w-5xl mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl`},r("header",{class:n`pt-10 pb-9 sm:pb-16 sm:text-center`},r("h1",{class:n`mb-4 text-3xl sm:text-4xl tracking-tight font-extrabold`},"Blog"),r("p",{class:n`text-lg`},"Example blog page with dummy data from ",r("a",{target:"_blank",href:"https://jsonplaceholder.typicode.com/"},"https://jsonplaceholder.typicode.com/"))),r("div",{class:n`space-y-16`},this.props.data.map(t=>r("article",{class:n`relative flex flex-col max-w-3xl lg:ml-auto xl:max-w-none xl:w-[50rem]`},r("h3",{class:n`mb-4 text-xl tracking-tight font-bold`},r(B,{to:"/blog/"+t.title},t.title)),r("div",{class:n`mb-6`},r("p",null,t.body)),r("div",{class:n`mt-auto flex flex-row-reverse items-center justify-end`},r("div",{class:n`text-sm leading-6 lg:absolute lg:top-0 lg:right-full lg:mr-8 lg:whitespace-nowrap`},"January, 12 2030"),r(B,{to:"/blog/"+t.title,class:n`px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100`},"Read More"))))))))}},_=M;import{Component as ot,h as m,Helmet as at,Router as it}from"https://deno.land/x/nano_jsx@v0.0.30/mod.ts";import{tw as v}from"https://cdn.skypack.dev/twind@0.16.16";var{Link:nt}=it,O=class extends ot{static async initProps({fetchApi:t,params:a}){let{data:b,error:F}=await t("/api/blog/"+a.title);return{data:b,error:F}}render(){if(this.props.error)return m(g,{...this.props.error});let t=this.props.route;return m("div",null,m(at,null,m("title",null,t.params.title)),m("div",{class:v`bg-white flex h-screen`},m("div",{class:v`max-w-5xl mx-auto px-4 pb-28 mt-10 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl`},m("div",null,m("div",{class:v`text-sm sm:text-center`},"January, 12 2030"),m("h1",{class:v`col-span-full text-3xl sm:text-4xl sm:text-center xl:mb-16 font-extrabold tracking-tight`},t.params.title),m("p",{class:v`mb-20`},this.props.data.body),m(nt,{to:"/blog",class:v`px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100`},"Back")))))}},$=O;import{Component as lt,h as l,Helmet as pt}from"https://deno.land/x/nano_jsx@v0.0.30/mod.ts";import{tw as u}from"https://cdn.skypack.dev/twind@0.16.16";var z={button:"text-2xl px-6 py-2 font-semibold text-white bg-gray-800"},w=class extends lt{constructor(){super(...arguments);this.value=0}changeValue(t){this.value+=t,this.update()}render(){return l("div",null,l(pt,null,l("title",null,"Hello Home Page")),l("div",{class:u`bg-white flex justify-center h-screen`},l("div",null,l("div",{class:u`text-center mt-20 mb-10 text-gray-600`},l("h3",{class:u`text-5xl`},"Welcome Home"),l("p",{class:u`text-2xl`},"Example Counter App")),l("div",{class:u`text-center`},l("button",{class:u`${z.button}`,onClick:()=>this.changeValue(1)},"+"),l("span",{class:u`p-5 text-2xl font-bold text-blue-800`},this.value),l("button",{class:u`${z.button}`,onClick:()=>this.changeValue(-1)},"-")))))}};import{Component as mt,h as s,Helmet as dt}from"https://deno.land/x/nano_jsx@v0.0.30/mod.ts";import{tw as o}from"https://cdn.skypack.dev/twind@0.16.16";var V={input:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"},A=class extends mt{static async initProps(t){if(t.isServer&&t.request.method==="POST"){let{data:a}=await t.fetchApi("/api/sign");return a.message==="success"?t.response.redirect("/"):{message:a.message}}return{}}render(){return s("div",null,s(dt,null,s("title",null,"Sign Page")),s("div",{class:o`min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8`},s("div",{class:o`max-w-sm w-full space-y-8`},s("div",null,s("h2",{class:o`mt-6 text-center text-3xl font-extrabold text-gray-900`},"Sign Page"),s("p",{class:o`text-center`},"(Example handle formData)"),this.props.message&&s("div",{class:o`mt-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative`,role:"alert"},s("strong",{class:o`font-bold`},"Error"),s("span",{class:o`block sm:inline`},this.props.message),s("span",{class:o`absolute top-0 bottom-0 right-0 px-4 py-3`},s("svg",{class:o`fill-current h-6 w-6 text-red-500`,role:"button",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},s("title",null,"Close"),s("path",{d:"M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"})))),s("form",{class:o`mt-8 space-y-6`,action:"/sign",method:"POST"},s("div",{class:o`rounded-md shadow-sm -space-y-px`},s("div",null,s("label",{class:o`sr-only`},"Username"),s("input",{name:"username",type:"text",class:o`${V.input}`,placeholder:"Username = deno",requied:!0})),s("div",null,s("label",{class:o`sr-only`},"Password"),s("input",{name:"password",type:"password",class:o`${V.input}`,placeholder:"Password = deno",requied:!0}))),s("div",null,s("button",{type:"submit",class:o`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`},"Sign in")))))))}};A.methods=["GET","POST"];var L=A;var W=[{path:"/blog",page:_,methods:_.methods},{path:"/blog/:title",page:$,methods:$.methods},{path:"/",page:w,methods:w.methods},{path:"/sign",page:L,methods:L.methods}];var D=async e=>await ct({twind_setup:G,root:C,error_page:g,pages:N,server_pages:W,apis:S,cwd:Deno.cwd()},e);var ut=await D();ut.listen(8080,()=>{console.log("> Running on http://localhost:8080")});
