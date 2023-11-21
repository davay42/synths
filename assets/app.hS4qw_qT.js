import{o as c,c as p,a as e,_ as N,r as O,y as R,x as h,u as t,O as j,w as b,t as y,b as f,A as P,Q as E,i as T,R as S,v as V,j as L,P as B,p as D,q as I,g as v,S as w,U,V as Y,W as z,X as G,Y as H,Z as K,$ as W,a0 as q,a1 as J,a2 as Q,a3 as X,a4 as Z,e as ee,a5 as te,a6 as ae,a7 as se,a8 as oe,a9 as ne}from"./chunks/framework.LP-A4y3_.js";import{u as F}from"./chunks/useForm.7IRkuX7A.js";const le={class:"flex items-center gap-1 p-4 bg-light-100 bg-opacity-70 dark-bg-dark-400 dark-bg-opacity-40 w-full justify-center"},ie=e("div",{class:"p-0"},"Made with 🧡 by",-1),re=e("a",{href:"https://shop.playtronica.com",target:"_blank"},"Playtronica ",-1),ce=e("span",null,"&",-1),de=e("a",{href:"https://chromatone.center",target:"_blank"},"Chromatone",-1),pe=[ie,re,ce,de];function ue(a,s){return c(),p("div",le,pe)}const me={},fe=N(me,[["render",ue]]),_e={key:0,class:"fixed z-1000 min-h-40dvh bottom-0 w-full bg-light-800 bg-opacity-80 backdrop-blur flex flex-col items-center gap-4 justify-center dark-bg-dark-200 dark-bg-opacity-80 p-8 shadow max-w-180 bottom-0 rounded-xl"},he={key:0,class:"flex flex-col gap-4 max-w-45ch text-center"},ge={class:"text-3xl font-bold"},xe=e("div",{class:"text-xl"},"You are part of web-musicians community",-1),be={class:"text-sm flex gap-2 justify-center"},ve={key:1,class:"flex flex-col gap-8 relative pt-8 items-center"},ye={class:"text-center max-w-55ch",for:"email"},we={class:"flex gap-4 flex-col w-full"},ke={class:"flex items-center gap-2"},$e=e("div",{class:"p-2 w-24 font-bold text-right"},"E-mail *",-1),Ce=["maxlength"],Ae={class:"flex items-center gap-2"},Pe=e("div",{class:"p-2 w-24 font-bold text-right"},"Name",-1),Ee=["maxlength","placeholder"],Te=["disabled"],Se={__name:"FormMain",setup(a){const{name:s,email:o,isValidEmail:l,isFormOpen:r,grantAccess:d,storedEmail:k,storedName:u,resetEmail:_,isAccessGranted:g,namePlaceholder:x,passwordPlaceholder:$,password:qe,generatePassword:Je,maxLength:C,claimInvite:Qe,invited:Xe}=F();return O(),(A,n)=>(c(),R(B,{name:"panel"},{default:h(()=>[t(r)?(c(),p("div",_e,[b(e("button",{class:"i-la-times absolute top-4 right-4 text-2xl hover-opacity-90 opacity-50 transition",onClick:n[0]||(n[0]=i=>r.value=!1)},null,512),[[j,t(r)]]),t(g)?(c(),p("div",he,[e("div",ge,"Hello, "+y(t(u))+"!",1),xe,e("div",be,[f(y(t(k)),1),e("span",{class:"opacity-20 hover-opacity-50 transition cursor-pointer",onClick:n[1]||(n[1]=(...i)=>t(_)&&t(_)(...i))},"Log out")])])):(c(),p("div",ve,[e("label",ye,[P(A.$slots,"default")]),e("div",we,[e("label",ke,[$e,b(e("input",{class:E(["flex-1 p-4 md-p-4 rounded-xl bg-light-200 shadow-md dark-bg-dark-400 flex-1 border-2 border-solid border-opacity-60 dark-border-opacity-40",{"border-red-700 dark-border-red-300":t(o)&&!t(l),"border-green-700 dark-border-green-800":t(o)&&t(l),"border-light-300":!t(o)}]),ref:"target",maxlength:t(C),"onUpdate:modelValue":n[2]||(n[2]=i=>T(o)?o.value=i:null),id:"email",name:"email",type:"email",onKeydown:n[3]||(n[3]=S(i=>t(d)(),["enter"])),placeholder:"your@gmail.com"},null,42,Ce),[[V,t(o)]])]),e("label",Ae,[Pe,b(e("input",{class:"flex-1 p-4 md-p-4 rounded-xl bg-light-200 shadow-md dark-bg-dark-400","onUpdate:modelValue":n[4]||(n[4]=i=>T(s)?s.value=i:null),id:"name",maxlength:t(C),name:"name",type:"text",onKeydown:n[5]||(n[5]=S(i=>t(d)(),["enter"])),placeholder:t(x)},null,40,Ee),[[V,t(s)]])])]),e("button",{class:E(["text-sm md-text-md p-4 font-bold md-p-4 rounded-xl shadow-xl hover-shadow-2xl transition -hover-translate-y-2px disabled-opacity-40 active-translate-y-0 active-shadow-md bg-green-400 dark-bg-green-700",{"grayscale-50":!t(l)}]),onClick:n[6]||(n[6]=i=>t(d)()),disabled:!t(l),title:"Your access status will be saved per device and you won't need to enter your e-mail again."},[P(A.$slots,"button",{},()=>[f("GET ACCESS")])],10,Te)]))])):L("",!0)]),_:3}))}},Ve={class:"flex flex-col noise items-center relative min-h-100svh"},De={class:"w-full backdrop-blur-xl sticky top-0 z-100 bg-light-200 bg-opacity-60 dark-bg-dark-300 dark-bg-opacity-60"},Fe={class:"flex flex items-center w-full max-w-180 mx-auto gap-4 px-2"},Me={class:"p-2 flex items-center gap-4",href:"/"},Ne=["src"],Oe={class:"text-xl font-600"},Re=e("div",{class:"flex-1"},null,-1),je={key:0,class:"i-la-sun"},Le={key:1,class:"i-tabler-moon-2"},Be=e("div",{class:"i-ph-user-circle-duotone p-5"},null,-1),Ie=[Be],Ue={class:"flex flex-wrap w-full mx-auto flex-auto justify-center"},Ye={__name:"MainLayout",setup(a){const{isFormOpen:s,searchParams:o}=F(),{theme:l,site:r,isDark:d}=D();return(k,u)=>{const _=I("content"),g=Se,x=fe;return c(),p("div",Ve,[e("div",De,[e("div",Fe,[e("a",Me,[e("img",{class:"w-12",src:t(l).logo,alt:"Web-synths collection logo"},null,8,Ne),e("div",Oe,y(t(r).title),1)]),Re,e("button",{class:"text-xl",onClick:u[0]||(u[0]=$=>d.value=!t(d)),"aria-label":"Dark mode toggle"},[t(d)?(c(),p("div",Le)):(c(),p("div",je))]),e("button",{class:"p-4 z-2000 cursor-pointer","aria-label":"Player profile",onClick:u[1]||(u[1]=$=>s.value=!t(s))},Ie)])]),e("div",Ue,[v(_,{class:"w-full",id:"content"})]),v(g,null,{button:h(()=>[f("JOIN THE COMMUNITY")]),notice:h(()=>[f("Your access status will be saved per device and you won't need to enter your e-mail again.")]),default:h(()=>[f("We are building a community of web-based musicians. Type in your e-mail to instantly gain full access to the collection and receive occasional community updates from us. Stay tuned! ")]),_:1}),v(x)])}}},ze={Layout:Ye,enhanceApp({app:a}){}};function M(a){if(a.extends){const s=M(a.extends);return{...s,...a,async enhanceApp(o){s.enhanceApp&&await s.enhanceApp(o),a.enhanceApp&&await a.enhanceApp(o)}}}return a}const m=M(ze),Ge=Z({name:"VitePressApp",setup(){const{site:a}=D();return ee(()=>{te(()=>{document.documentElement.lang=a.value.lang,document.documentElement.dir=a.value.dir})}),a.value.router.prefetchLinks&&ae(),se(),oe(),m.setup&&m.setup(),()=>ne(m.Layout)}});async function He(){const a=We(),s=Ke();s.provide(Y,a);const o=z(a.route);return s.provide(G,o),s.component("Content",H),s.component("ClientOnly",K),Object.defineProperties(s.config.globalProperties,{$frontmatter:{get(){return o.frontmatter.value}},$params:{get(){return o.page.value.params}}}),m.enhanceApp&&await m.enhanceApp({app:s,router:a,siteData:W}),{app:s,router:a,data:o}}function Ke(){return q(Ge)}function We(){let a=w,s;return J(o=>{let l=Q(o),r=null;return l&&(a&&(s=l),(a||s===l)&&(l=l.replace(/\.js$/,".lean.js")),r=X(()=>import(l),__vite__mapDeps([]))),w&&(a=!1),r},m.NotFound)}w&&He().then(({app:a,router:s,data:o})=>{s.go().then(()=>{U(s.route,o.site),a.mount("#app")})});export{He as createApp};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}