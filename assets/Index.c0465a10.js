import{_ as p}from"./AppBreadcrumb.4414bdb6.js";import{f as _,p as d,r as f,o,a as r,d as c,g as l,F as u,q as h,h as x,w as g,s as y,t as i,x as v}from"./vendor.27327011.js";const k={class:"min-h-screen"},B={class:"flex justify-center"},C={class:"mx-auto px-5"},b={class:"mb-8"},N={key:0,class:"text-gray-500"},F=_({setup(V){const n=d().getRoutes().filter(t=>{var e;return t.path.startsWith("/posts/")&&((e=t.meta)==null?void 0:e.frontmatter)}).map(t=>{var e;return{path:t.path,name:t.name,frontmatter:(e=t.meta)==null?void 0:e.frontmatter}}).sort((t,e)=>{var a,s,m;return(m=(a=e.frontmatter.date)!=null?a:"")==null?void 0:m.localeCompare((s=t.frontmatter.date)!=null?s:"")});return console.log(n),(t,e)=>{const a=f("router-link");return o(),r("div",k,[c("main",B,[c("div",C,[l(p,{class:"my-8",name:"Blog"}),(o(!0),r(u,null,h(x(n),s=>(o(),r("div",b,[l(a,{class:"text-2xl hover:text-green-600",to:s.path},{default:g(()=>[y(i(s.frontmatter.title),1)]),_:2},1032,["to"]),s.frontmatter.summary?(o(),r("p",N,i(s.frontmatter.summary),1)):v("",!0)]))),256))])])])}}});export{F as default};
