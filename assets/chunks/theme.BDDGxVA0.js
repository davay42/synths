const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/virtual_pwa-register.B-dKHeTj.js","assets/chunks/framework.DxBzwDjy.js"])))=>i.map(i=>d[i]);
import{u as g,o as ae,n as oe,r as k,a as Te,w as V,g as he,i as X,b as Ce,c as Fe,s as Ne,d as ie,e as M,f as O,h as T,j as Z,v as Pe,k as v,t as Q,l as R,m as le,p as ce,q as ue,x as de,_ as Ve,y as je,z as De,A as ge,B as Re,C as We,D as L,E as J,T as Me,F as ze}from"./framework.DxBzwDjy.js";function se(e){return Ce()?(Fe(e),!0):!1}function S(e){return typeof e=="function"?e():g(e)}const ye=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Ie=e=>e!=null,Le=Object.prototype.toString,Je=e=>Le.call(e)==="[object Object]",j=()=>{};function be(e,t){function n(...a){return new Promise((r,o)=>{Promise.resolve(e(()=>t.apply(this,a),{fn:t,thisArg:this,args:a})).then(r).catch(o)})}return n}const we=e=>e();function Be(...e){let t=0,n,a=!0,r=j,o,u,s,d,p;!X(e[0])&&typeof e[0]=="object"?{delay:u,trailing:s=!0,leading:d=!0,rejectOnCancel:p=!1}=e[0]:[u,s=!0,d=!0,p=!1]=e;const l=()=>{n&&(clearTimeout(n),n=void 0,r(),r=j)};return y=>{const b=S(u),w=Date.now()-t,x=()=>o=y();return l(),b<=0?(t=Date.now(),x()):(w>b&&(d||!a)?(t=Date.now(),x()):s&&(o=new Promise((_,f)=>{r=p?f:_,n=setTimeout(()=>{t=Date.now(),a=!0,_(x()),l()},Math.max(0,b-w))})),!d&&!n&&(n=setTimeout(()=>a=!0,b)),a=!1,o)}}function Ue(e=we){const t=k(!0);function n(){t.value=!1}function a(){t.value=!0}const r=(...o)=>{t.value&&e(...o)};return{isActive:Te(t),pause:n,resume:a,eventFilter:r}}function Ge(e,t=!1,n="Timeout"){return new Promise((a,r)=>{setTimeout(t?()=>r(n):a,e)})}function Ke(e){return e}function He(e){return he()}function Ht(e,t=200,n=!1,a=!0,r=!1){return be(Be(t,n,a,r),e)}function Ye(e,t,n={}){const{eventFilter:a=we,...r}=n;return V(e,be(a,t),r)}function xe(e,t,n={}){const{eventFilter:a,...r}=n,{eventFilter:o,pause:u,resume:s,isActive:d}=Ue(a);return{stop:Ye(e,t,{...r,eventFilter:o}),pause:u,resume:s,isActive:d}}function Ze(e,t=!0,n){He()?ae(e,n):t?e():oe(e)}function Yt(e,t,n){const a=V(e,(...r)=>(oe(()=>a()),t(...r)),n);return a}const D=ye?window:void 0,qe=ye?window.navigator:void 0;function G(e){var t;const n=S(e);return(t=n==null?void 0:n.$el)!=null?t:n}function K(...e){let t,n,a,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,a,r]=e,t=D):[t,n,a,r]=e,!t)return j;Array.isArray(n)||(n=[n]),Array.isArray(a)||(a=[a]);const o=[],u=()=>{o.forEach(l=>l()),o.length=0},s=(l,c,y,b)=>(l.addEventListener(c,y,b),()=>l.removeEventListener(c,y,b)),d=V(()=>[G(t),S(r)],([l,c])=>{if(u(),!l)return;const y=Je(c)?{...c}:c;o.push(...n.flatMap(b=>a.map(w=>s(l,b,w,y))))},{immediate:!0,flush:"post"}),p=()=>{d(),u()};return se(p),p}function Xe(){const e=k(!1),t=he();return t&&ae(()=>{e.value=!0},t),e}function _e(e){const t=Xe();return M(()=>(t.value,!!e()))}const B=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},U="__vueuse_ssr_handlers__",Qe=et();function et(){return U in B||(B[U]=B[U]||{}),B[U]}function tt(e,t){return Qe[e]||t}function nt(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const rt={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},fe="vueuse-storage";function Se(e,t,n,a={}){var r;const{flush:o="pre",deep:u=!0,listenToStorageChanges:s=!0,writeDefaults:d=!0,mergeDefaults:p=!1,shallow:l,window:c=D,eventFilter:y,onError:b=h=>{console.error(h)},initOnMounted:w}=a,x=(l?Ne:k)(typeof t=="function"?t():t);if(!n)try{n=tt("getDefaultStorage",()=>{var h;return(h=D)==null?void 0:h.localStorage})()}catch(h){b(h)}if(!n)return x;const _=S(t),f=nt(_),i=(r=a.serializer)!=null?r:rt[f],{pause:m,resume:$}=xe(x,()=>F(x.value),{flush:o,deep:u,eventFilter:y});c&&s&&Ze(()=>{n instanceof Storage?K(c,"storage",N):K(c,fe,Oe),w&&N()}),w||N();function z(h,A){if(c){const E={key:e,oldValue:h,newValue:A,storageArea:n};c.dispatchEvent(n instanceof Storage?new StorageEvent("storage",E):new CustomEvent(fe,{detail:E}))}}function F(h){try{const A=n.getItem(e);if(h==null)z(A,null),n.removeItem(e);else{const E=i.write(h);A!==E&&(n.setItem(e,E),z(A,E))}}catch(A){b(A)}}function I(h){const A=h?h.newValue:n.getItem(e);if(A==null)return d&&_!=null&&n.setItem(e,i.write(_)),_;if(!h&&p){const E=i.read(A);return typeof p=="function"?p(E,_):f==="object"&&!Array.isArray(E)?{..._,...E}:E}else return typeof A!="string"?A:i.read(A)}function N(h){if(!(h&&h.storageArea!==n)){if(h&&h.key==null){x.value=_;return}if(!(h&&h.key!==e)){m();try{(h==null?void 0:h.newValue)!==i.write(x.value)&&(x.value=I(h))}catch(A){b(A)}finally{h?oe($):$()}}}}function Oe(h){N(h.detail)}return x}function at(e,t,n={}){const{root:a,rootMargin:r="0px",threshold:o=0,window:u=D,immediate:s=!0}=n,d=_e(()=>u&&"IntersectionObserver"in u),p=M(()=>{const w=S(e);return(Array.isArray(w)?w:[w]).map(G).filter(Ie)});let l=j;const c=k(s),y=d.value?V(()=>[p.value,G(a),c.value],([w,x])=>{if(l(),!c.value||!w.length)return;const _=new IntersectionObserver(t,{root:G(x),rootMargin:r,threshold:o});w.forEach(f=>f&&_.observe(f)),l=()=>{_.disconnect(),l=j}},{immediate:s,flush:"post"}):j,b=()=>{l(),y(),c.value=!1};return se(b),{isSupported:d,isActive:c,pause(){l(),c.value=!1},resume(){c.value=!0},stop:b}}function Zt(e,t={}){const{window:n=D,scrollTarget:a,threshold:r=0}=t,o=k(!1);return at(e,u=>{let s=o.value,d=0;for(const p of u)p.time>=d&&(d=p.time,s=p.isIntersecting);o.value=s},{root:a,window:n,threshold:r}),o}function qt(e={},t={}){const{navigator:n=qe}=t,a=n,r=_e(()=>a&&"canShare"in a);return{isSupported:r,share:async(u={})=>{if(r.value){const s={...S(e),...S(u)};let d=!0;if(s.files&&a.canShare&&(d=a.canShare({files:s.files})),d)return a.share(s)}}}}function ot([e,t,n,a]){const r=(l,c)=>1-3*c+3*l,o=(l,c)=>3*c-6*l,u=l=>3*l,s=(l,c,y)=>((r(c,y)*l+o(c,y))*l+u(c))*l,d=(l,c,y)=>3*r(c,y)*l*l+2*o(c,y)*l+u(c),p=l=>{let c=l;for(let y=0;y<4;++y){const b=d(c,e,n);if(b===0)return c;const w=s(c,e,n)-l;c-=w/b}return c};return l=>e===t&&n===a?l:s(p(l),t,a)}function me(e,t,n){return e+n*(t-e)}function q(e){return(typeof e=="number"?[e]:e)||[]}function st(e,t,n,a={}){var r,o;const u=S(t),s=S(n),d=q(u),p=q(s),l=(r=S(a.duration))!=null?r:1e3,c=Date.now(),y=Date.now()+l,b=typeof a.transition=="function"?a.transition:(o=S(a.transition))!=null?o:Ke,w=typeof b=="function"?b:ot(b);return new Promise(x=>{e.value=u;const _=()=>{var f;if((f=a.abort)!=null&&f.call(a)){x();return}const i=Date.now(),m=w((i-c)/l),$=q(e.value).map((z,F)=>me(d[F],p[F],m));Array.isArray(e.value)?e.value=$.map((z,F)=>{var I,N;return me((I=d[F])!=null?I:0,(N=p[F])!=null?N:0,m)}):typeof e.value=="number"&&(e.value=$[0]),i<y?requestAnimationFrame(_):(e.value=s,x())};_()})}function Xt(e,t={}){let n=0;const a=()=>{const o=S(e);return typeof o=="number"?o:o.map(S)},r=k(a());return V(a,async o=>{var u,s;if(S(t.disabled))return;const d=++n;if(t.delay&&await Ge(S(t.delay)),d!==n)return;const p=Array.isArray(o)?o.map(S):S(o);(u=t.onStarted)==null||u.call(t),await st(r,r.value,p,{...t,abort:()=>{var l;return d!==n||((l=t.abort)==null?void 0:l.call(t))}}),(s=t.onFinished)==null||s.call(t)},{deep:!0}),V(()=>S(t.disabled),o=>{o&&(n++,r.value=a())}),se(()=>{n++}),M(()=>S(t.disabled)?a():r.value)}function it(e="history",t={}){const{initialValue:n={},removeNullishValues:a=!0,removeFalsyValues:r=!1,write:o=!0,window:u=D}=t;if(!u)return ie(n);const s=ie({});function d(){if(e==="history")return u.location.search||"";if(e==="hash"){const f=u.location.hash||"",i=f.indexOf("?");return i>0?f.slice(i):""}else return(u.location.hash||"").replace(/^#/,"")}function p(f){const i=f.toString();if(e==="history")return`${i?`?${i}`:""}${u.location.hash||""}`;if(e==="hash-params")return`${u.location.search||""}${i?`#${i}`:""}`;const m=u.location.hash||"#",$=m.indexOf("?");return $>0?`${u.location.search||""}${m.slice(0,$)}${i?`?${i}`:""}`:`${u.location.search||""}${m}${i?`?${i}`:""}`}function l(){return new URLSearchParams(d())}function c(f){const i=new Set(Object.keys(s));for(const m of f.keys()){const $=f.getAll(m);s[m]=$.length>1?$:f.get(m)||"",i.delete(m)}Array.from(i).forEach(m=>delete s[m])}const{pause:y,resume:b}=xe(s,()=>{const f=new URLSearchParams("");Object.keys(s).forEach(i=>{const m=s[i];Array.isArray(m)?m.forEach($=>f.append(i,$)):a&&m==null||r&&!m?f.delete(i):f.set(i,m)}),w(f)},{deep:!0});function w(f,i){y(),i&&c(f),u.history.replaceState(u.history.state,u.document.title,u.location.pathname+p(f)),b()}function x(){o&&w(l(),!0)}K(u,"popstate",x,!1),e!=="history"&&K(u,"hashchange",x,!1);const _=l();return _.keys().next().value?c(_):Object.assign(s,n),s}const ee=it("history"),ke=/^([a-zA-Z0-9._%+-]{1,64})@[a-zA-Z0-9.-]{1,255}\.[a-zA-Z]{2,10}$/,Ae=100,W=k(!1),pe=k(!1),lt=k(!1),C=Se("storedEmail",""),Y=Se("storedName",""),H=k(!1),P=k(C),te=k(Y),ne=M(()=>{var e;return ft((e=P.value.match(ke))==null?void 0:e[1])}),ct=k(""),ut=k(""),dt=M(()=>$e(P.value)),ve=k(!1),re=k(!1);function $e(e){return ke.test(e)}function ft(e=""){return e.charAt(0).toUpperCase()+e.slice(1)}function mt(){C.value="",Y.value="",H.value=!1,W.value=!1}function Ee(){return ve.value||(V(W,e=>{e&&(pe.value=!1)}),ae(()=>{C.value&&(W.value=!0),ee.token&&pt()}),ve.value=!0),{searchParams:ee,isAccessGranted:W,isValidEmail:dt,email:P,name:te,grantAccess:ht,isSent:H,isFormOpen:pe,checkAvailability:lt,storedEmail:C,storedName:Y,resetEmail:mt,namePlaceholder:ne,password:ct,passwordPlaceholder:ut,generatePassword:gt,maxLength:Ae,claimInvite:vt,invited:re}}async function pt(){console.log(ee.token,C.value)}async function vt(){var e,t,n;if(C.value&&!re.value){const a={email:C.value};try{const r=await fetch("https://dbs.chromatone.center/flows/trigger/164bb1bb-3745-423f-8239-703198dfbac5",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(a)});console.log(await(r==null?void 0:r.json()))}catch(r){console.error(r,(t=(e=r==null?void 0:r.errors)==null?void 0:e[0])==null?void 0:t.message,(n=r==null?void 0:r.response)==null?void 0:n.status)}re.value=!0}}async function ht(){var e,t,n;if(!(!P.value&&!$e(P.value))&&(W.value=!0,!H.value)){H.value=!0;const a={email:P.value,name:(te.value||ne.value||"").slice(0,Ae)};try{C.value=P.value,Y.value=te.value||ne.value;const r=await fetch("https://dbs.chromatone.center/flows/trigger/51cc7591-219e-4b56-ad6d-c39a34f7cf2f",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(a)});console.log(await(r==null?void 0:r.json()))}catch(r){console.error(r,(t=(e=r==null?void 0:r.errors)==null?void 0:e[0])==null?void 0:t.message,(n=r==null?void 0:r.response)==null?void 0:n.status)}}}function gt(){return[...window.crypto.getRandomValues(new Uint8Array(16))].map(e=>"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_.,!?$%&*#@".charAt(e%72)).join("").slice(0,10)}const yt={class:"min-h-40dvh bottom-0 w-full bg-light-800 bg-opacity-80 backdrop-blur flex flex-col items-center gap-4 justify-center dark-bg-dark-200 dark-bg-opacity-80 p-8 shadow max-w-180 bottom-0 rounded-xl"},bt={key:0,class:"flex flex-col gap-4 max-w-45ch text-center"},wt={class:"text-3xl font-bold"},xt={class:"text-sm flex gap-2 justify-center"},_t={key:1,class:"flex flex-col gap-8 relative pt-8 items-center"},St={class:"text-center max-w-55ch",for:"email"},kt={class:"flex gap-4 flex-col w-full"},At={class:"flex items-center gap-2"},$t=["maxlength"],Et={class:"flex items-center gap-2"},Ot=["maxlength","placeholder"],Tt=["disabled"],Ct={__name:"FormMain",setup(e){const{name:t,email:n,isValidEmail:a,isFormOpen:r,grantAccess:o,storedEmail:u,storedName:s,resetEmail:d,isAccessGranted:p,namePlaceholder:l,passwordPlaceholder:c,password:y,generatePassword:b,maxLength:w,claimInvite:x,invited:_}=Ee();return k(),(f,i)=>(O(),T("div",yt,[Z(v("button",{class:"i-la-times absolute top-4 right-4 text-2xl hover-opacity-90 opacity-50 transition",onClick:i[0]||(i[0]=m=>r.value=!1)},null,512),[[Pe,g(r)]]),g(p)?(O(),T("div",bt,[v("div",wt,"Hello, "+Q(g(s))+"!",1),i[7]||(i[7]=v("div",{class:"text-xl"},"You are part of web-musicians community",-1)),v("div",xt,[R(Q(g(u)),1),v("span",{class:"opacity-20 hover-opacity-50 transition cursor-pointer",onClick:i[1]||(i[1]=(...m)=>g(d)&&g(d)(...m))},"Log out")])])):(O(),T("div",_t,[v("label",St,[le(f.$slots,"default")]),v("div",kt,[v("label",At,[i[8]||(i[8]=v("div",{class:"p-2 w-24 font-bold text-right"},"E-mail *",-1)),Z(v("input",{class:ue(["flex-1 p-4 md-p-4 rounded-xl bg-light-200 shadow-md dark-bg-dark-400 flex-1 border-2 border-solid border-opacity-60 dark-border-opacity-40",{"border-red-700 dark-border-red-300":g(n)&&!g(a),"border-green-700 dark-border-green-800":g(n)&&g(a),"border-light-300":!g(n)}]),ref:"target",maxlength:g(w),"onUpdate:modelValue":i[2]||(i[2]=m=>X(n)?n.value=m:null),id:"email",name:"email",type:"email",onKeydown:i[3]||(i[3]=de(m=>g(o)(),["enter"])),placeholder:"your@gmail.com"},null,42,$t),[[ce,g(n)]])]),v("label",Et,[i[9]||(i[9]=v("div",{class:"p-2 w-24 font-bold text-right"},"Name",-1)),Z(v("input",{class:"flex-1 p-4 md-p-4 rounded-xl bg-light-200 shadow-md dark-bg-dark-400","onUpdate:modelValue":i[4]||(i[4]=m=>X(t)?t.value=m:null),id:"name",maxlength:g(w),name:"name",type:"text",onKeydown:i[5]||(i[5]=de(m=>g(o)(),["enter"])),placeholder:g(l)},null,40,Ot),[[ce,g(t)]])])]),v("button",{class:ue(["text-sm md-text-md p-4 font-bold md-p-4 rounded-xl shadow-xl hover-shadow-2xl transition -hover-translate-y-2px disabled-opacity-40 active-translate-y-0 active-shadow-md bg-green-400 dark-bg-green-700",{"grayscale-50":!g(a)}]),onClick:i[6]||(i[6]=m=>g(o)()),disabled:!g(a),title:"Your access status will be saved per device and you won't need to enter your e-mail again."},[le(f.$slots,"button",{},()=>[i[10]||(i[10]=R("GET ACCESS"))])],10,Tt)]))]))}},Ft={class:"flex items-center gap-1 p-1 bg-light-100 bg-opacity-90 dark-bg-dark-900 dark-bg-opacity-90 w-full justify-center op-70"};function Nt(e,t){return O(),T("div",Ft,t[0]||(t[0]=[v("div",{class:"p-0"},"Curated with ❤️‍🔥 by",-1),v("a",{href:"https://shop.playtronica.com",target:"_blank"},"Playtronica ",-1),v("span",null,"& ",-1),v("a",{href:"https://chromatone.center",target:"_blank"},"Chromatone",-1)]))}const Pt={},Vt=Ve(Pt,[["render",Nt]]),jt={key:0,class:"pwa-toast",role:"alertdialog","aria-labelledby":"pwa-message"},Dt={__name:"RegisterSW",setup(e){const t=k(!1);function n(){t.value=!0}async function a(){t.value=!1}return je(async()=>{const{registerSW:r}=await De(async()=>{const{registerSW:o}=await import("./virtual_pwa-register.B-dKHeTj.js");return{registerSW:o}},__vite__mapDeps([0,1]));r({immediate:!0,onOfflineReady:n,onRegistered(){console.info("Service Worker registered")},onRegisterError(o){console.error("Service Worker registration error!",o)}})}),(r,o)=>t.value?(O(),T("div",jt,[o[0]||(o[0]=v("div",{class:"mb-3",id:"pwa-message"},"App ready to work offline",-1)),v("button",{class:"pwa-cancel",type:"button",onClick:a},"Close")])):ge("",!0)}},Rt={class:"flex flex-col noise items-center relative min-h-100svh"},Wt={class:"w-full backdrop-blur-xl fixed bottom-0 bg-light-200 bg-opacity-60 dark-bg-dark-300 dark-bg-opacity-60 z-200"},Mt={class:"flex flex items-center w-full max-w-160 mx-auto gap-2 p-1"},zt={class:"p-2 flex items-center gap-4",href:"/"},It=["src"],Lt={class:"text-lg font-600"},Jt={key:0,class:"i-la-sun"},Bt={key:1,class:"i-tabler-moon-2"},Ut={class:"flex flex-wrap w-full mx-auto flex-auto justify-center pb-20"},Gt={__name:"MainLayout",setup(e){const{isFormOpen:t,searchParams:n}=Ee(),{theme:a,site:r,isDark:o}=Re();return(u,s)=>{const d=Dt,p=Vt,l=We("content"),c=Ct;return O(),T("div",Rt,[L(d),v("div",Wt,[v("div",Mt,[v("a",zt,[v("img",{class:"w-8",src:g(a).logo,alt:"Web-synths collection logo"},null,8,It),v("div",Lt,Q(g(r).title),1)]),s[3]||(s[3]=v("div",{class:"flex-1"},null,-1)),v("button",{class:"text-xl",onClick:s[0]||(s[0]=y=>o.value=!g(o)),"aria-label":"Dark mode toggle"},[g(o)?(O(),T("div",Bt)):(O(),T("div",Jt))]),v("button",{class:"p-2 z-2000 cursor-pointer text-2xl","aria-label":"Player profile",onClick:s[1]||(s[1]=y=>t.value=!g(t))},s[2]||(s[2]=[v("div",{class:"i-ph-user-circle-duotone"},null,-1)]))]),L(p,{class:"z-100"})]),v("div",Ut,[L(l,{class:"w-full",id:"content"})]),L(Me,{name:"panel"},{default:J(()=>[g(t)?(O(),ze(c,{key:0,class:"fixed z-1000"},{button:J(()=>s[4]||(s[4]=[R("JOIN THE COMMUNITY")])),notice:J(()=>s[5]||(s[5]=[R("Your access status will be saved per device and you won't need to enter your e-mail again.")])),default:J(()=>[s[6]||(s[6]=R("We are building a community of web-based musicians. Type in your e-mail to instantly gain full access to the collection and receive occasional community updates from us. Stay tuned! "))]),_:1})):ge("",!0)]),_:1})])}}},Qt={Layout:Gt,enhanceApp({app:e}){}};export{Qt as R,Ct as _,Xt as a,Zt as b,Ee as c,Se as d,Ht as e,qt as u,Yt as w};
