import{a as d,b as k}from"../chunk-EQ4WYGC6.js";import{a as n}from"../chunk-2MND2S7W.js";import"../chunk-UTPPOZFZ.js";import{a as s,e as o,f as i,h as t,i as p,j as x,k as l,l as m,m as f,n as r,p as u}from"../chunk-SJH6G6HZ.js";f();u();k();var{Link:v}=m,e=class extends p{render(){return this.props.error?t(d,s({},this.props.error)):t(l,null,t(x,null,t("title",null,this.props.data.title)),t("div",{class:r`bg-white flex h-screen dark:bg-gray-800`},t("div",{class:r`max-w-5xl mx-auto px-4 pb-28 mt-10 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl`},t("div",null,t("div",{class:r`text-sm sm:text-center dark:text-white`},"January, 12 2030"),t("h1",{class:r`col-span-full text-3xl sm:text-4xl sm:text-center xl:mb-16 font-extrabold tracking-tight dark:text-white`},this.props.data.title),t("p",{class:r`mb-20 dark:text-white`},this.props.data.body),t(v,{to:"/blog",class:r`px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100 dark:(bg-gray-900 text-gray-200)`},"Back")))))}};e=o([n(C=>i(void 0,[C],function*({fetchApi:a,params:c}){let{data:g,error:b}=yield a("/api/blog/"+c.title.replace(/\-/g," "));return{data:g,error:b}}))],e);var H=e;export{H as default};
