import{a as C,b as V}from"./chunk-EQ4WYGC6.js";import{a as X}from"./chunk-NWPCBNDU.js";import{a as c,b as v,c as u,d as Q,f as y,g as A,h as e,i as S,j as $,k as I,l as H,m as b,n as m,o as q,p as D}from"./chunk-SJH6G6HZ.js";var W,F=u(()=>{W=[{path:"/blog",page:"./blog/index.js"},{path:"/blog/:title",page:"./blog/[title].js"},{path:"/",page:"./index.js"},{path:"/sign",page:"./sign.js"}]});var k,M,E,Y,_,z=u(()=>{b();D();({Link:k}=H),M="bg-gray-200 text-gray-900 dark:(bg-gray-900 text-white) px-3 py-2 rounded-md text-sm font-medium",E="text-gray-900 hover:bg-gray-300 hover:text-gray-900 dark:(text-gray-300 hover:bg-gray-700 hover:text-white) px-3 py-2 rounded-md text-sm font-medium",Y="bg-gray-300 text-gray-900 dark:(bg-gray-700 text-white) px-3 py-2 rounded-md text-sm font-medium",_=class extends S{constructor(t){super(t);this.text_switch=".";t.isServer||(this.text_switch=window.__btn_switch)}didMount(){addEventListener("page:end",()=>{this.update(location.pathname)})}onSwitch(){let t=document.documentElement.classList;t&&t.value==="dark"?(document.documentElement.classList.remove("dark"),localStorage.removeItem("theme"),this.text_switch="Light"):(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark"),this.text_switch="Dark"),this.update(location.pathname)}render(t){let n=t||this.props.route.pathname;return n==="/sign"?e("div",null):e("nav",{class:m`bg-white lg:border-b dark:(bg-gray-800 lg:border-gray-900) sticky top-0 z-10`},e("div",{class:m`max-w-7xl mx-auto px-2 sm:px-6 lg:px-8`},e("div",{class:m`relative flex items-center justify-between h-16`},e("div",{class:m`flex-1 flex items-center justify-center sm:items-stretch sm:justify-start`},e("div",{class:m`sm:block sm:ml-6`},e("div",{class:m`flex space-x-4`},e(k,{to:"/",class:m`${n==="/"?M:E}`},"Home"),e(k,{to:"/blog",class:m`${n.startsWith("/blog")?M:E}`},"Blog"),e(k,{to:"/sign",class:m`${E}`},"Sign Form")))),e("div",{class:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"},e("a",{class:m`${E}`,href:"https://github.com/herudi/maze",target:"_blank"},"Github"),e("button",{style:"width: 80px",onClick:this.onSwitch.bind(this),class:m`${Y}`},this.text_switch)))))}}});function T(i){let t=document.getElementById("loading");t.style.display=i?"block":"none"}function w({Page:i,props:t}){return e(I,null,e($,null,e("html",{lang:"en"}),e("meta",{charset:"utf-8"}),e("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),e("link",{rel:"icon",href:"data:,"}),e("script",{src:"/assets/theme.js"}),e("link",{href:"/assets/loading.css",rel:"stylesheet"})),e(_,c({},t)),e("div",{id:"__MAZE_PAGE__"},e(i,c({},t))),e("div",{id:"loading",class:"center-div-loading",style:"display: none;"},e("div",{class:"linear-progress-material"},e("div",{class:"bar bar1"}),e("div",{class:"bar bar2"}))))}var j,B=u(()=>{b();z();w.event={onStart(i){i.isFirst||(j=setTimeout(()=>{T(!0)},300))},onEnd({isFirst:i}){j&&clearTimeout(j),T(!1),i||(dispatchEvent(new Event("page:end")),window.scrollTo(0,0))},onError(i){T(!1),console.error(i)}}});function L({Page:i,initData:t,route:n,isServer:o}){return e(w,{Page:i,props:v(c({},t),{route:n,isServer:o})})}var p,N=u(()=>{b();B();L.initProps=w.initProps;L.event=w.event||{};p=L});var G,O=u(()=>{G={darkMode:"class"}});var R,U=u(()=>{D();O();R={onHydrate:()=>{q(G)}}});function tt(i,t,n){let o=n.groups||{};if(!t)return o;if(i.indexOf("*")!==-1){n.shift();let d=n.filter(a=>a!==void 0).filter(a=>a.startsWith("/")).join("").split("/");d.shift();let s=v(c({},o),{wild:d.filter(a=>a!=="")});if(i==="*"||i.indexOf("/*")!==-1)return s;let r=i.split("/").find(a=>a.startsWith(":")&&a.endsWith("*"));return r&&(r=r.slice(1,-1),s[r]=[s[r]].concat(s.wild).filter(a=>a!==""),delete s.wild),s}return o}function Z(i){try{return decodeURI(i)}catch(t){return i}}var P,J=u(()=>{X();P=class{constructor(t){this.routes=[];this.is_reload=!1;this.ErrorPage=t}buildPages(t,n,o){if(this.is_reload=n.length!==0,n.length===0)return o;let d=o,s=!1;for(let r=0;r<n.length;r++){let a=n[r];t.startsWith(a)&&(d=o.filter(l=>l.path.startsWith(a)),s=!0)}return s||(d=o.filter(r=>!n.some(a=>r.path.startsWith(a)))),d}add(t,n){let o=!1,d=t.replace(/\/$/,"").replace(/:(\w+)(\?)?(\.)?/g,"$2(?<$1>[^/]+)$2$3").replace(/(\/?)\*/g,(r,a)=>(o=!0,`(${a}.*)?`)).replace(/\.(?=[\w(])/,"\\."),s=new RegExp(`^${d}/*$`);return this.routes.push({path:t,fn:n,regex:s,wild:o}),this}find(t){let n,o={},d=0,s,r=this.routes,a=r.length;for(t=Z(t);d<a;){if(s=r[d],s.regex.test(t)){let l=s.regex.exec(t);n=s.fn,o=tt(s.path,s.wild,l);break}d++}return{fn:n,params:o}}handle(){let{pathname:t,search:n,origin:o}=window.location;if(this.current===t+n)return;let{fn:d,params:s}=this.find(t),r=this.ErrorPage,a=this.is_reload;this.current=t+n;let l={};if(l.pathname=t,l.url=this.current,l.path=t,l.isServer=!1,l.getBaseUrl=()=>o,l.params=s,l.fetchApi=(f,h)=>y(this,null,function*(){try{let g=yield fetch(o+f,h);if(!g.ok)throw g;return{data:yield g.json(),error:void 0}}catch(g){let x=yield g.json();return x.message=Z(x.message),{data:void 0,error:x}}}),l.render=(f,h)=>{A(f,h?document.getElementById(h):document.body)},!d)return a?location.reload():l.render(e(r,{message:"Not Found",status:404}));d(l)}resolve(){let t=()=>this.handle();t(),window.addEventListener("pushstate",n=>{n.preventDefault(),t()}),window.addEventListener("replacestate",n=>{n.preventDefault(),t()}),window.addEventListener("popstate",()=>{t()})}}});var rt=Q(K=>{b();F();N();U();V();J();function et(i){return y(this,null,function*(){return(yield import(i)).default})}window.addEventListener("load",()=>{R.onHydrate&&R.onHydrate();let i=!0,t=document.getElementById("__INIT_DATA__");t&&(t=JSON.parse(t.textContent||"{}"));let n=new P(C),o=n.buildPages(location.pathname,R.zones||[],W);for(let d=0;d<o.length;d++){let s=o[d];n.add(s.path,r=>y(K,null,function*(){r.isFirst=i;try{let a={};i||(a=p.initProps?yield p.initProps(r):{}),p.event.onStart!==void 0&&(yield p.event.onStart(r));let l=typeof s.page=="string"?yield et(s.page):s.page,f=i?t||{}:l.initProps?yield l.initProps(r):{},h=()=>{r.render(e(p,{Page:l,initData:c(c({},f),a),route:{pathname:r.pathname,url:r.url,path:s.path,params:r.params},isServer:!1}))};if(i)h();else{let g=c(c({},f),a);r.render(e(l,v(c({},g),{route:{pathname:r.pathname,url:r.url,path:s.path,params:r.params},isServer:!1})),"__MAZE_PAGE__")}p.event.onEnd!==void 0&&p.event.onEnd(r)}catch(a){p.event.onError!==void 0&&p.event.onError(a,r)}i=!1}))}n.resolve()})});export default rt();
