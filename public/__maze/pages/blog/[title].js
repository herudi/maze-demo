import{a as o}from"../chunk-AKKJA6YM.js";import{b as t,c as s,d as a,e as i,f as e}from"../chunk-I4SUQYDM.js";var{Link:d}=i,l=class extends s{static async initProps({fetchApi:r,params:p}){let{data:x,error:m}=await r("/api/blog/"+p.title);return{data:x,error:m}}render(){if(this.props.error)return t(o,{...this.props.error});let r=this.props.route;return t("div",null,t(a,null,t("title",null,r.params.title)),t("div",{class:e`bg-white flex h-screen dark:bg-gray-800`},t("div",{class:e`max-w-5xl mx-auto px-4 pb-28 mt-10 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl`},t("div",null,t("div",{class:e`text-sm sm:text-center dark:text-white`},"January, 12 2030"),t("h1",{class:e`col-span-full text-3xl sm:text-4xl sm:text-center xl:mb-16 font-extrabold tracking-tight dark:text-white`},r.params.title),t("p",{class:e`mb-20 dark:text-white`},this.props.data.body),t(d,{to:"/blog",class:e`px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100 dark:(bg-gray-900 text-gray-200)`},"Back")))))}},u=l;export{u as default};
