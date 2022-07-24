var C=Object.defineProperty,M=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var x=(t,e,o)=>e in t?C(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,b=(t,e)=>{for(var o in e||(e={}))V.call(e,o)&&x(t,o,e[o]);if(v)for(var o of v(e))j.call(e,o)&&x(t,o,e[o]);return t},y=(t,e)=>M(t,T(e));import{N as w,c as S,o as c,a as d,b as k,d as n,u as L,e as A,f as m,r as h,g as u,w as D,h as p,n as f,i as O,j as z,V as P}from"./vendor.27327011.js";const R=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}};R();const I=({isClient:t,router:e})=>{t&&(e.beforeEach(()=>{w.start()}),e.afterEach(()=>{w.done()}))};var N=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:I});const B=({isClient:t,initialState:e,app:o})=>{const s=S();o.use(s),t?s.state.value=e.pinia||{}:e.pinia=s.state.value};var H=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:B});const F="modulepreload",E={},J="/",l=function(e,o){return!o||o.length===0?e():Promise.all(o.map(s=>{if(s=`${J}${s}`,s in E)return;E[s]=!0;const r=s.endsWith(".css"),a=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${a}`))return;const i=document.createElement("link");if(i.rel=r?"stylesheet":F,r||(i.as="script",i.crossOrigin=""),i.href=s,document.head.appendChild(i),r)return new Promise((g,$)=>{i.addEventListener("load",g),i.addEventListener("error",$)})})).then(()=>e())},G={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},Z=k('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),Y=[Z];function q(t,e){return c(),d("svg",G,Y)}var K={name:"carbon-sun",render:q};const W={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},Q=n("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),U=[Q];function X(t,e){return c(),d("svg",W,U)}var ee={name:"carbon-moon",render:X};const te={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256"},oe=n("path",{d:"M128 0C57.221 0 0 57.221 0 128c0 70.778 57.221 128 128 128c70.778 0 128-57.222 128-128V0H128z",fill:"#F0047F"},null,-1),re=n("path",{d:"M121.04 134.96v93.312c-49.663-2.837-89.64-42.345-93.215-91.81l-.097-1.502h93.312zm90.962 0c-2.6 49.664-38.816 89.64-84.159 93.215l-1.377.097V134.96h85.536zm.112-91.074v85.648h-85.648V43.886h85.648z",fill:"#FFF"},null,-1),se=[oe,re];function ne(t,e){return c(),d("svg",te,se)}var ae={name:"logos-jamstack-icon",render:ne};const _=L(),ie=A(_),le={class:"border-b border-gray-200 pr-3"},ce={class:"flex flex-wrap items-center"},ue={class:"flex-shrink flex-grow-0"},de={class:"p-4 cursor-pointer flex"},pe=n("span",{class:"text-3xl font-bold"},"Jamstacks",-1),_e=n("div",null,[n("div",{class:"ml-2 text-xl bg-purple-600 text-white py-0.5 px-1.5 rounded"},".NET")],-1),me={class:"flex flex-grow flex-shrink flex-nowrap justify-end items-center"},he={class:"relative flex flex-grow"},fe={class:"flex flex-wrap items-center justify-end w-full m-0"},ge={class:"ml-2"},ve=m({setup(t){return(e,o)=>{const s=ae,r=h("router-link"),a=ee,i=K;return c(),d("header",le,[n("div",ce,[n("div",ue,[u(r,{to:"/"},{default:D(()=>[n("div",de,[u(s,{class:"w-8 h-8 mr-2 mt-0.5",alt:"Jamstacks logo"}),pe,_e])]),_:1})]),n("div",me,[n("nav",he,[n("ul",fe,[n("li",ge,[n("button",{type:"button",class:"bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",role:"switch","aria-checked":"false",onClick:o[0]||(o[0]=g=>p(ie)())},[n("span",{class:f(`${p(_)?"translate-x-0":"translate-x-5"} pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white dark:bg-gray-900 shadow transform ring-0 transition ease-in-out duration-200`)},[n("span",{class:f(`${p(_)?"opacity-100 ease-in duration-200":"opacity-0 ease-out duration-100"} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`),"aria-hidden":"true"},[u(a,{class:"h-4 w-4 text-gray-400"})],2),n("span",{class:f(`${p(_)?"opacity-0 ease-out duration-100":"opacity-100 ease-in duration-200"} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`),"aria-hidden":"true"},[u(i,{class:"h-4 w-4 text-indigo-600"})],2)],2)])])])])])])])}}});var xe=(t,e)=>{const o=t.__vccOpts||t;for(const[s,r]of e)o[s]=r;return o};const be={},ye={class:"bg-accent-1 border-t border-accent-2"},we=k('<div class="container mx-auto px-5"><div class="py-28 flex flex-col lg:flex-row items-center"><h3 class="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2"> A ServiceStack Project </h3><div class="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2"><a href="https://docs.servicestack.net" class="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"> Read Documentation </a><a href="https://github.com/NetCoreApps/Jamstacks" class="mx-3 font-bold hover:underline"> View on GitHub </a></div></div></div>',1),ke=[we];function Ee(t,e){return c(),d("footer",ye,ke)}var $e=xe(be,[["render",Ee]]);const Ce={class:"text-gray-700 dark:bg-gray-900"},Me=m({setup(t){return(e,o)=>{const s=h("router-view");return c(),d("main",Ce,[u(ve),u(s),u($e)])}}}),Te={default:Me,empty:()=>l(()=>import("./empty.3ecc412e.js"),["assets/empty.3ecc412e.js","assets/vendor.27327011.js"])};function Ve(t){return t.map(e=>{var o;return{path:e.path,component:Te[((o=e.meta)==null?void 0:o.layout)||"default"],children:[y(b({},e),{path:""})]}})}const je=[{name:"Index",path:"/",component:()=>l(()=>import("./Index.b87e823f.js"),["assets/Index.b87e823f.js","assets/vendor.27327011.js","assets/vue.aa47ef7d.js","assets/Index.c0465a10.js","assets/AppBreadcrumb.4414bdb6.js"]),props:!0},{name:"Todos",path:"/todos",component:()=>l(()=>import("./Todos.d4520bf5.js"),["assets/Todos.d4520bf5.js","assets/vue.aa47ef7d.js","assets/vendor.27327011.js","assets/AppBreadcrumb.4414bdb6.js"]),props:!0},{name:"posts-deploy",path:"/posts/deploy",component:()=>l(()=>import("./deploy.a08d02a9.js"),["assets/deploy.a08d02a9.js","assets/MarkdownPage.f8f3da68.js","assets/vendor.27327011.js","assets/AppBreadcrumb.4414bdb6.js"]),props:!0,meta:{crumbs:[{name:"posts",href:"/posts"}],frontmatter:{title:"Deployment with GitHub Actions",summary:"Configuring your GitHub repo for SSH and CDN deployments",date:"2021-12-03T00:00:00.000Z"}}},{name:"posts-hosting",path:"/posts/hosting",component:()=>l(()=>import("./hosting.19901bca.js"),["assets/hosting.19901bca.js","assets/MarkdownPage.f8f3da68.js","assets/vendor.27327011.js","assets/AppBreadcrumb.4414bdb6.js"]),props:!0,meta:{crumbs:[{name:"posts",href:"/posts"}],frontmatter:{title:"Jamstacks Hosting Costs @ $0.40 /mo",summary:"Exploring cost & scalability benefits of hybrid CDN & .NET Apps",date:"2021-12-04T00:00:00.000Z"}}},{name:"posts-Index",path:"/posts",component:()=>l(()=>import("./Index.c0465a10.js"),["assets/Index.c0465a10.js","assets/AppBreadcrumb.4414bdb6.js","assets/vendor.27327011.js"]),props:!0},{name:"posts-rider",path:"/posts/rider",component:()=>l(()=>import("./rider.c52ff349.js"),["assets/rider.c52ff349.js","assets/MarkdownPage.f8f3da68.js","assets/vendor.27327011.js","assets/AppBreadcrumb.4414bdb6.js"]),props:!0,meta:{crumbs:[{name:"posts",href:"/posts"}],frontmatter:{title:"Develop using JetBrains Rider",summary:"Setting up & exploring development workflow in Rider",date:"2021-12-02T00:00:00.000Z"}}},{name:"posts-vs",path:"/posts/vs",component:()=>l(()=>import("./vs.a44dd7a7.js"),["assets/vs.a44dd7a7.js","assets/MarkdownPage.f8f3da68.js","assets/vendor.27327011.js","assets/AppBreadcrumb.4414bdb6.js"]),props:!0,meta:{crumbs:[{name:"posts",href:"/posts"}],frontmatter:{title:"Develop using Visual Studio",summary:"Exploring development workflow in VS Code and Visual Studio .NET",date:"2021-12-02T00:00:00.000Z"}}},{name:"all",path:"/:all(.*)*",component:()=>l(()=>import("./_...all_.21c56c5c.js"),["assets/_...all_.21c56c5c.js","assets/vendor.27327011.js"]),props:!0,meta:{layout:"empty"}}],Se=m({setup(t){return O({title:"Jamstacks",meta:[{name:"description",content:"Vite SSG Starter Template"}]}),(e,o)=>{const s=h("router-view");return c(),z(s)}}});function Le(t){return t}const Ae=Ve(je);P(Se,{routes:Ae},t=>{Le(t.router),Object.values({"./modules/nprogress.ts":N,"./modules/pinia.ts":H}).map(e=>{var o;return(o=e.install)==null?void 0:o.call(e,t)})});export{xe as _,ae as a};