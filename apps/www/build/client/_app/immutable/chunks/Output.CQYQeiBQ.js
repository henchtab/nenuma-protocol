import{b as et,a as W,t as k,c as C,s as E,f as nt,d as H}from"./disclose-version.B_3xlfoo.js";import{p as ot,a as it,A,t as rt}from"./index.mbo8UwIt.js";import{i as st}from"./this.5ZPbIZBj.js";import{e as at}from"./misc.DsIM4tTz.js";import{B as dt,a as ct}from"./index.BTn3vRik.js";import{p as lt}from"./props.DeK5Z2bj.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="52b808bd-d873-431a-8f97-db218831702d",t._sentryDebugIdIdentifier="sentry-dbid-52b808bd-d873-431a-8f97-db218831702d")}catch{}})();const Q=new Set,u=new WeakMap,O=new WeakMap,b=new WeakMap,j=new WeakMap,ft=new WeakMap,T=new WeakMap,S=new WeakMap,$=new WeakSet;let w,I=0,X=0;const m="__aa_tgt",N="__aa_del",B="__aa_new",ut=t=>{const e=wt(t);e&&e.forEach(n=>bt(n))},pt=t=>{t.forEach(e=>{e.target===w&&gt(),u.has(e.target)&&y(e.target)})};function ht(t){const e=j.get(t);e==null||e.disconnect();let n=u.get(t),o=0;const i=5;n||(n=M(t),u.set(t,n));const{offsetWidth:r,offsetHeight:s}=w,a=[n.top-i,r-(n.left+i+n.width),s-(n.top+i+n.height),n.left-i].map(l=>`${-1*Math.floor(l)}px`).join(" "),c=new IntersectionObserver(()=>{++o>1&&y(t)},{root:w,threshold:1,rootMargin:a});c.observe(t),j.set(t,c)}function y(t){clearTimeout(S.get(t));const e=L(t),n=P(e)?500:e.duration;S.set(t,setTimeout(async()=>{const o=b.get(t);try{await(o==null?void 0:o.finished),u.set(t,M(t)),ht(t)}catch{}},n))}function gt(){clearTimeout(S.get(w)),S.set(w,setTimeout(()=>{Q.forEach(t=>J(t,e=>U(()=>y(e))))},100))}function mt(t){setTimeout(()=>{ft.set(t,setInterval(()=>U(y.bind(null,t)),2e3))},Math.round(2e3*Math.random()))}function U(t){typeof requestIdleCallback=="function"?requestIdleCallback(()=>t()):requestAnimationFrame(()=>t())}let z,_;const vt=typeof window<"u"&&"ResizeObserver"in window;vt&&(w=document.documentElement,z=new MutationObserver(ut),_=new ResizeObserver(pt),window.addEventListener("scroll",()=>{X=window.scrollY,I=window.scrollX}),_.observe(w));function wt(t){return t.reduce((o,i)=>[...o,...Array.from(i.addedNodes),...Array.from(i.removedNodes)],[]).every(o=>o.nodeName==="#comment")?!1:t.reduce((o,i)=>{if(o===!1)return!1;if(i.target instanceof Element){if(D(i.target),!o.has(i.target)){o.add(i.target);for(let r=0;r<i.target.children.length;r++){const s=i.target.children.item(r);if(s){if(N in s)return!1;D(i.target,s),o.add(s)}}}if(i.removedNodes.length)for(let r=0;r<i.removedNodes.length;r++){const s=i.removedNodes[r];if(N in s)return!1;s instanceof Element&&(o.add(s),D(i.target,s),O.set(s,[i.previousSibling,i.nextSibling]))}}return o},new Set)}function D(t,e){!e&&!(m in t)?Object.defineProperty(t,m,{value:t}):e&&!(m in e)&&Object.defineProperty(e,m,{value:t})}function bt(t){var e;const n=t.isConnected,o=u.has(t);n&&O.has(t)&&O.delete(t),b.has(t)&&((e=b.get(t))===null||e===void 0||e.cancel()),B in t?F(t):o&&n?xt(t):o&&!n?Et(t):F(t)}function h(t){return Number(t.replace(/[^0-9.\-]/g,""))}function yt(t){let e=t.parentElement;for(;e;){if(e.scrollLeft||e.scrollTop)return{x:e.scrollLeft,y:e.scrollTop};e=e.parentElement}return{x:0,y:0}}function M(t){const e=t.getBoundingClientRect(),{x:n,y:o}=yt(t);return{top:e.top+o,left:e.left+n,width:e.width,height:e.height}}function G(t,e,n){let o=e.width,i=e.height,r=n.width,s=n.height;const d=getComputedStyle(t);if(d.getPropertyValue("box-sizing")==="content-box"){const c=h(d.paddingTop)+h(d.paddingBottom)+h(d.borderTopWidth)+h(d.borderBottomWidth),l=h(d.paddingLeft)+h(d.paddingRight)+h(d.borderRightWidth)+h(d.borderLeftWidth);o-=l,r-=l,i-=c,s-=c}return[o,r,i,s].map(Math.round)}function L(t){return m in t&&T.has(t[m])?T.get(t[m]):{duration:250,easing:"ease-in-out"}}function V(t){if(m in t)return t[m]}function Y(t){const e=V(t);return e?$.has(e):!1}function J(t,...e){e.forEach(n=>n(t,T.has(t)));for(let n=0;n<t.children.length;n++){const o=t.children.item(n);o&&e.forEach(i=>i(o,T.has(o)))}}function R(t){return Array.isArray(t)?t:[t]}function P(t){return typeof t=="function"}function xt(t){const e=u.get(t),n=M(t);if(!Y(t))return u.set(t,n);let o;if(!e)return;const i=L(t);if(typeof i!="function"){const r=e.left-n.left,s=e.top-n.top,[d,a,c,l]=G(t,e,n),p={transform:`translate(${r}px, ${s}px)`},f={transform:"translate(0, 0)"};d!==a&&(p.width=`${d}px`,f.width=`${a}px`),c!==l&&(p.height=`${c}px`,f.height=`${l}px`),o=t.animate([p,f],{duration:i.duration,easing:i.easing})}else{const[r]=R(i(t,"remain",e,n));o=new Animation(r),o.play()}b.set(t,o),u.set(t,n),o.addEventListener("finish",y.bind(null,t))}function F(t){B in t&&delete t[B];const e=M(t);u.set(t,e);const n=L(t);if(!Y(t))return;let o;if(typeof n!="function")o=t.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:n.duration*1.5,easing:"ease-in"});else{const[i]=R(n(t,"add",e));o=new Animation(i),o.play()}b.set(t,o),o.addEventListener("finish",y.bind(null,t))}function q(t,e){var n;t.remove(),u.delete(t),O.delete(t),b.delete(t),(n=j.get(t))===null||n===void 0||n.disconnect(),setTimeout(()=>{if(N in t&&delete t[N],Object.defineProperty(t,B,{value:!0,configurable:!0}),e&&t instanceof HTMLElement)for(const o in e)t.style[o]=""},0)}function Et(t){var e;if(!O.has(t)||!u.has(t))return;const[n,o]=O.get(t);Object.defineProperty(t,N,{value:!0,configurable:!0});const i=window.scrollX,r=window.scrollY;if(o&&o.parentNode&&o.parentNode instanceof Element?o.parentNode.insertBefore(t,o):n&&n.parentNode?n.parentNode.appendChild(t):(e=V(t))===null||e===void 0||e.appendChild(t),!Y(t))return q(t);const[s,d,a,c]=Ot(t),l=L(t),p=u.get(t);(i!==I||r!==X)&&_t(t,i,r,l);let f,v={position:"absolute",top:`${s}px`,left:`${d}px`,width:`${a}px`,height:`${c}px`,margin:"0",pointerEvents:"none",transformOrigin:"center",zIndex:"100"};if(!P(l))Object.assign(t.style,v),f=t.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:l.duration,easing:"ease-out"});else{const[x,g]=R(l(t,"remove",p));(g==null?void 0:g.styleReset)!==!1&&(v=(g==null?void 0:g.styleReset)||v,Object.assign(t.style,v)),f=new Animation(x),f.play()}b.set(t,f),f.addEventListener("finish",q.bind(null,t,v))}function _t(t,e,n,o){const i=I-e,r=X-n,s=document.documentElement.style.scrollBehavior;if(getComputedStyle(w).scrollBehavior==="smooth"&&(document.documentElement.style.scrollBehavior="auto"),window.scrollTo(window.scrollX+i,window.scrollY+r),!t.parentElement)return;const a=t.parentElement;let c=a.clientHeight,l=a.clientWidth;const p=performance.now();function f(){requestAnimationFrame(()=>{if(!P(o)){const v=c-a.clientHeight,x=l-a.clientWidth;p+o.duration>performance.now()?(window.scrollTo({left:window.scrollX-x,top:window.scrollY-v}),c=a.clientHeight,l=a.clientWidth,f()):document.documentElement.style.scrollBehavior=s}})}f()}function Ot(t){const e=u.get(t),[n,,o]=G(t,e,M(t));let i=t.parentElement;for(;i&&(getComputedStyle(i).position==="static"||i instanceof HTMLBodyElement);)i=i.parentElement;i||(i=document.body);const r=getComputedStyle(i),s=u.get(i)||M(i),d=Math.round(e.top-s.top)-h(r.borderTopWidth),a=Math.round(e.left-s.left)-h(r.borderLeftWidth);return[d,a,n,o]}function Tt(t,e={}){return z&&_&&(window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!P(e)&&!e.disrespectUserMotionPreference||($.add(t),getComputedStyle(t).position==="static"&&Object.assign(t.style,{position:"relative"}),J(t,y,mt,i=>_==null?void 0:_.observe(i)),P(e)?T.set(t,e):T.set(t,{duration:250,easing:"ease-in-out",...e}),z.observe(t,{childList:!0}),Q.add(t))),Object.freeze({parent:t,enable:()=>{$.add(t)},disable:()=>{$.delete(t)},isEnabled:()=>$.has(t)})}var Mt=k('<li class="h-8 text-ds-gray-900 inline-flex items-center pt-4">Logs will appear here...</li>'),Wt=k('<li class="flex h-8 gap-2 w-full items-center"><span class="text-ds-green-900 pr-2 border-r"> </span> <span class="text-ds-green-900"> </span></li>'),Ct=k("Clear Output",1),$t=k('<div class="flex flex-col gap-4 mt-6"><h3 class="text-ds-gray-1000 font-medium text-xl">Output</h3> <ul class=" border-b border-t font-mono max-h-40 min-h-40 m-0 text-[13px] leading-5 whitespace-nowrap overflow-auto py-4"><!></ul> <!></div>');function At(t,e){ot(e,!0);let n=lt(e,"output",7);var o=$t(),i=C(o),r=E(E(i,!0)),s=C(r);st(s,()=>n().length===0,a=>{var c=Mt();W(a,c)},a=>{var c=et(),l=nt(c);at(l,69,n,(p,f)=>A(p).date,(p,f,v)=>{var x=Wt(),g=C(x),K=C(g),Z=E(E(g,!0)),tt=C(Z);rt(()=>{H(K,`${A(f).date??""}:`),H(tt,A(f).message)}),W(p,x)}),W(a,c)});var d=E(E(r,!0));dt(d,{variant:"destructive",onclick:()=>n([]),children:(a,c)=>{var l=Ct();W(a,l)},$$slots:{default:!0}}),ct(r,a=>Tt(a)),W(t,o),it()}export{At as O};
//# sourceMappingURL=Output.CQYQeiBQ.js.map
