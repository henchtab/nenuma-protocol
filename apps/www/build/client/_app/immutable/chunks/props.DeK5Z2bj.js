import{c as E,j as y,k as g,L as q,P as D,l as A,b as l,s as K,u as L,m as d,n as j,q as T,r as U,v as m,x as z,y as M,z as N}from"./index.mbo8UwIt.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="498dfd07-d68c-4e29-a5db-70745ad301be",e._sentryDebugIdIdentifier="sentry-dbid-498dfd07-d68c-4e29-a5db-70745ad301be")}catch{}})();const Y={get(e,r){if(!e.exclude.includes(r))return e.props[r]},set(e,r){return!1},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function V(e,r,n){return new Proxy({props:e,exclude:r},Y)}const $={get(e,r){if(!e.exclude.includes(r))return l(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,n){return r in e.special||(e.special[r]=C({get[r](){return e.props[r]}},r,D)),e.special[r](n),L(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function Z(e,r){return new Proxy({props:e,exclude:r,special:{},version:E(0)},$)}const B={get(e,r){let n=e.props.length;for(;n--;){let s=e.props[n];if(d(s)&&(s=s()),typeof s=="object"&&s!==null&&r in s)return s[r]}},getOwnPropertyDescriptor(e,r){let n=e.props.length;for(;n--;){let s=e.props[n];if(d(s)&&(s=s()),typeof s=="object"&&s!==null&&r in s)return y(s,r)}},has(e,r){for(let n of e.props)if(d(n)&&(n=n()),n!=null&&r in n)return!0;return!1},ownKeys(e){const r=[];for(let n of e.props){d(n)&&(n=n());for(const s in n)r.includes(s)||r.push(s)}return r}};function F(...e){return new Proxy({props:e},B)}function C(e,r,n,s){var I;var w=(n&j)!==0,c=(n&T)!==0,R=(n&M)!==0,o=e[r],a=(I=y(e,r))==null?void 0:I.set,p=s,_=!0,P=()=>(R&&_&&(_=!1,p=U(s)),p);o===void 0&&s!==void 0&&(a&&c&&g(),o=P(),a&&a(o));var i;if(c)i=()=>{var u=e[r];return u===void 0?P():(_=!0,u)};else{var h=(w?m:z)(()=>e[r]);h.f|=q,i=()=>{var u=l(h);return u!==void 0&&(p=void 0),u===void 0?p:u}}if(!(n&D))return i;if(a){var S=e.$$legacy;return function(u,t){return arguments.length>0?((!c||!t||S)&&a(t?i():u),u):i()}}var v=!1,b=N(o),f=m(()=>{var u=i(),t=l(b);return v?(v=!1,t):b.v=u});return w||(f.equals=A),function(u,t){var O=l(f);if(arguments.length>0){const x=t?l(f):u;return f.equals(x)||(v=!0,K(b,x),l(f)),u}return O}}export{Z as l,C as p,V as r,F as s};
//# sourceMappingURL=props.DeK5Z2bj.js.map
