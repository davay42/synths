import{u as T,r as b,K as O,j as h,H as j,L as D,M as P}from"./framework.e2d34bbf.js";function M(t){return D()?(P(t),!0):!1}function S(t){return typeof t=="function"?t():T(t)}const V=typeof window<"u"&&typeof document<"u",W=t=>t!=null,x=Object.prototype.toString,E=t=>x.call(t)==="[object Object]",w=()=>{};function d(t,e){function r(...o){return new Promise((n,s)=>{Promise.resolve(t(()=>e.apply(this,o),{fn:e,thisArg:this,args:o})).then(n).catch(s)})}return r}const v=t=>t();function A(t,e=!0,r=!0,o=!1){let n=0,s,i=!0,u=w,a;const l=()=>{s&&(clearTimeout(s),s=void 0,u(),u=w)};return F=>{const c=S(t),p=Date.now()-n,f=()=>a=F();return l(),c<=0?(n=Date.now(),f()):(p>c&&(r||!i)?(n=Date.now(),f()):e&&(a=new Promise((m,y)=>{u=o?y:m,s=setTimeout(()=>{n=Date.now(),i=!0,m(f()),l()},Math.max(0,c-p))})),!r&&!s&&(s=setTimeout(()=>i=!0,c)),i=!1,a)}}function g(t=v){const e=b(!0);function r(){e.value=!1}function o(){e.value=!0}const n=(...s)=>{e.value&&t(...s)};return{isActive:O(e),pause:r,resume:o,eventFilter:n}}function H(t,e=!1,r="Timeout"){return new Promise((o,n)=>{setTimeout(e?()=>n(r):o,t)})}function K(t){return t}function N(t,e=200,r=!1,o=!0,n=!1){return d(A(e,r,o,n),t)}function k(t,e,r={}){const{eventFilter:o=v,...n}=r;return h(t,d(o,e),n)}function R(t,e,r={}){const{eventFilter:o,...n}=r,{eventFilter:s,pause:i,resume:u,isActive:a}=g(o);return{stop:k(t,e,{...n,eventFilter:s}),pause:i,resume:u,isActive:a}}function q(t,e,r){const o=h(t,(...n)=>(j(()=>o()),e(...n)),r)}export{R as a,E as b,W as c,K as d,M as e,V as i,w as n,H as p,S as t,N as u,q as w};
