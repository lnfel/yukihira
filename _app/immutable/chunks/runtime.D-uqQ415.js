var Zn=Array.isArray,Jn=Array.from,Qn=Object.isFrozen,Xn=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,Fn=Object.getOwnPropertyDescriptors,tt=Object.prototype,rt=Array.prototype,qn=Object.getPrototypeOf;const et=()=>{};function ut(n){return n()}function Dn(n){for(var t=0;t<n.length;t++)n[t]()}const T=2,tn=4,D=8,rn=16,y=32,G=64,k=128,M=256,E=512,g=1024,R=2048,q=4096,b=8192,Rn=16384,en=32768,lt=65536,bn=1<<18,W=Symbol("$state"),st=Symbol("$state.frozen"),ot=Symbol("");function un(n){return n===this.v}function Cn(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function ln(n){return!Cn(n,this.v)}function Nn(n){throw new Error("effect_in_teardown")}function jn(){throw new Error("effect_in_unowned_derived")}function Ln(n){throw new Error("effect_orphan")}function Mn(){throw new Error("effect_update_depth_exceeded")}function it(){throw new Error("hydration_failed")}function ft(n){throw new Error("props_invalid_value")}function Yn(){throw new Error("state_unsafe_mutation")}function sn(n){return{f:0,v:n,reactions:null,equals:un,version:0}}function at(n){var r;const t=sn(n);return t.equals=ln,v!==null&&v.l!==null&&((r=v.l).s??(r.s=[])).push(t),t}function _t(n,t){return f!==null&&z()&&f.f&T&&Yn(),n.equals(t)||(n.v=t,n.version=dn(),on(n,g),z()&&i!==null&&i.f&E&&!(i.f&y)&&(_!==null&&_.includes(n)?(h(i,g),H(i)):m===null?zn([n]):m.push(n))),t}function on(n,t){var r=n.reactions;if(r!==null)for(var e=z(),l=r.length,u=0;u<l;u++){var s=r[u],o=s.f;o&g||!e&&s===i||(h(s,t),o&(E|k)&&(o&T?on(s,R):H(s)))}}function fn(n){i===null&&f===null&&Ln(),f!==null&&f.f&k&&jn(),V&&Nn()}function Z(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function C(n,t,r,e=!0){var l=(n&G)!==0,u={ctx:v,deps:null,nodes:null,f:n|g,first:null,fn:t,last:null,next:null,parent:l?null:i,prev:null,teardown:null,transitions:null,version:0};if(r){var s=x;try{J(!0),B(u),u.f|=Rn}catch(a){throw I(u),a}finally{J(s)}}else t!==null&&H(u);var o=r&&u.deps===null&&u.first===null&&u.nodes===null&&u.teardown===null;return!o&&!l&&e&&(i!==null&&Z(u,i),f!==null&&f.f&T&&Z(u,f)),u}function ct(n){const t=C(D,null,!1);return h(t,E),t.teardown=n,t}function vt(n){fn();var t=i!==null&&(i.f&D)!==0&&v!==null&&!v.m;if(t){var r=v;(r.e??(r.e=[])).push(n)}else{var e=an(n);return e}}function pt(n){return fn(),_n(n)}function ht(n){const t=C(G,n,!0);return()=>{I(t)}}function an(n){return C(tn,n,!1)}function _n(n){return C(D,n,!0)}function wt(n){return _n(n)}function Et(n,t=0){return C(D|rn|t,n,!0)}function yt(n,t=!0){return C(D|y,n,!0,t)}function cn(n){var t=n.teardown;if(t!==null){const r=V,e=f;Q(!0),X(null);try{t.call(null)}finally{Q(r),X(e)}}}function I(n,t=!0){var r=!1;if((t||n.f&bn)&&n.nodes!==null){for(var e=n.nodes.start,l=n.nodes.end;e!==null;){var u=e===l?null:e.nextSibling;e.remove(),e=u}r=!0}if($(n,t&&!r),P(n,0),h(n,b),n.transitions)for(const o of n.transitions)o.stop();cn(n);var s=n.parent;s!==null&&n.f&y&&s.first!==null&&vn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.parent=n.fn=n.nodes=null}function vn(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function mt(n,t){var r=[];pn(n,r,!0),In(r,()=>{I(n),t&&t()})}function In(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var l of n)l.out(e)}else t()}function pn(n,t,r){if(!(n.f&q)){if(n.f^=q,n.transitions!==null)for(const s of n.transitions)(s.is_global||r)&&t.push(s);for(var e=n.first;e!==null;){var l=e.next,u=(e.f&en)!==0||(e.f&y)!==0;pn(e,t,u?r:!1),e=l}}}function gt(n){hn(n,!0)}function hn(n,t){if(n.f&q){n.f^=q,j(n)&&B(n);for(var r=n.first;r!==null;){var e=r.next,l=(r.f&en)!==0||(r.f&y)!==0;hn(r,l?t:!1),r=e}if(n.transitions!==null)for(const u of n.transitions)(u.is_global||t)&&u.in()}}let Y=!1,U=[];function wn(){Y=!1;const n=U.slice();U=[],Dn(n)}function dt(n){Y||(Y=!0,queueMicrotask(wn)),U.push(n)}function Pn(){Y&&wn()}function Bn(n){let t=T|g;i===null&&(t|=k);const r={deps:null,deriveds:null,equals:un,f:t,first:null,fn:n,last:null,reactions:null,v:null,version:0};if(f!==null&&f.f&T){var e=f;e.deriveds===null?e.deriveds=[r]:e.deriveds.push(r)}return r}function Tt(n){const t=Bn(n);return t.equals=ln,t}function En(n){$(n);var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)Hn(t[r])}}function yn(n){En(n);var t=Tn(n),r=(A||n.f&k)&&n.deps!==null?R:E;h(n,r),n.equals(t)||(n.v=t,n.version=dn())}function Hn(n){En(n),P(n,0),h(n,b),n.first=n.last=n.deps=n.reactions=n.fn=null}const mn=0,Un=1;let L=mn,N=!1,x=!1,V=!1;function J(n){x=n}function Q(n){V=n}let d=[],F=0,f=null;function X(n){f=n}let i=null,_=null,c=0,m=null;function zn(n){m=n}let gn=0,A=!1,v=null;function dn(){return gn++}function z(){return v!==null&&v.l===null}function j(n){var s,o;var t=n.f;if(t&g)return!0;if(t&R){var r=n.deps;if(r!==null){var e=(t&k)!==0,l;if(t&M){for(l=0;l<r.length;l++)((s=r[l]).reactions??(s.reactions=[])).push(n);n.f^=M}for(l=0;l<r.length;l++){var u=r[l];if(j(u)&&yn(u),u.version>n.version)return!0;e&&!A&&!((o=u==null?void 0:u.reactions)!=null&&o.includes(n))&&(u.reactions??(u.reactions=[])).push(n)}}h(n,E)}return!1}function Kn(n,t,r){throw n}function Tn(n){var t=_,r=c,e=m,l=f,u=A;_=null,c=0,m=null,f=n.f&(y|G)?null:n,A=!x&&(n.f&k)!==0;try{var s=(0,n.fn)(),o=n.deps;if(_!==null){var a,p;if(o!==null){var O=c===0?_:o.slice(0,c).concat(_),S=O.length>16?new Set(O):null;for(p=c;p<o.length;p++)a=o[p],(S!==null?!S.has(a):!O.includes(a))&&kn(n,a)}if(o!==null&&c>0)for(o.length=c+_.length,p=0;p<_.length;p++)o[c+p]=_[p];else n.deps=o=_;if(!A)for(p=c;p<o.length;p++){a=o[p];var w=a.reactions;w===null?a.reactions=[n]:w[w.length-1]!==n&&!w.includes(n)&&w.push(n)}}else o!==null&&c<o.length&&(P(n,c),o.length=c);return s}finally{_=t,c=r,m=e,f=l,A=u}}function kn(n,t){const r=t.reactions;let e=0;if(r!==null){e=r.length-1;const l=r.indexOf(n);l!==-1&&(e===0?t.reactions=null:(r[l]=r[e],r.pop()))}e===0&&t.f&T&&(h(t,R),t.f&(k|M)||(t.f^=M),P(t,0))}function P(n,t){var r=n.deps;if(r!==null)for(var e=t===0?null:r.slice(0,t),l=new Set,u=t;u<r.length;u++){var s=r[u];l.has(s)||(l.add(s),(e===null||!e.includes(s))&&kn(n,s))}}function $(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;I(r,t),r=e}}function B(n){var t=n.f;if(!(t&b)){h(n,E);var r=n.ctx,e=i,l=v;i=n,v=r;try{t&rn||$(n),cn(n);var u=Tn(n);n.teardown=typeof u=="function"?u:null,n.version=gn}catch(s){Kn(s)}finally{i=e,v=l}}}function On(){F>1e3&&(F=0,Mn()),F++}function Sn(n){var t=n.length;if(t!==0){On();var r=x;x=!0;try{for(var e=0;e<t;e++){var l=n[e];if(l.first===null&&!(l.f&y))nn([l]);else{var u=[];An(l,u),nn(u)}}}finally{x=r}}}function nn(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];!(e.f&(b|q))&&j(e)&&(B(e),e.deps===null&&e.first===null&&e.nodes===null&&(e.teardown===null?vn(e):e.fn=null))}}function Gn(){if(N=!1,F>1001)return;const n=d;d=[],Sn(n),N||(F=0)}function H(n){L===mn&&(N||(N=!0,queueMicrotask(Gn)));for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&y){if(!(r&E))return;h(t,R)}}d.push(t)}function An(n,t){var r=n.first,e=[];n:for(;r!==null;){var l=r.f,u=(l&(b|q))===0,s=l&y,o=(l&E)!==0,a=r.first;if(u&&(!s||!o)){if(s&&h(r,E),l&D){if(!s&&j(r)&&(B(r),a=r.first),a!==null){r=a;continue}}else if(l&tn)if(s||o){if(a!==null){r=a;continue}}else e.push(r)}var p=r.next;if(p===null){let w=r.parent;for(;w!==null;){if(n===w)break n;var O=w.next;if(O!==null){r=O;continue n}w=w.parent}}r=p}for(var S=0;S<e.length;S++)a=e[S],t.push(a),An(a,t)}function xn(n,t=!0){var r=L,e=d;try{On();const u=[];L=Un,d=u,N=!1,t&&Sn(e);var l=n==null?void 0:n();return Pn(),(d.length>0||u.length>0)&&xn(),F=0,l}finally{L=r,d=e}}async function kt(){await Promise.resolve(),xn()}function Vn(n){var t=n.f;if(t&b)return n.v;if(f!==null){var r=f.deps;_===null&&r!==null&&r[c]===n?c++:(r===null||c===0||r[c-1]!==n)&&(_===null?_=[n]:_[_.length-1]!==n&&_.push(n)),m!==null&&i!==null&&i.f&E&&!(i.f&y)&&m.includes(n)&&(h(i,g),H(i))}if(t&T){var e=n;j(e)&&yn(e)}return n.v}function Ot(n){const t=f;try{return f=null,n()}finally{f=t}}const $n=~(g|R|E);function h(n,t){n.f=n.f&$n|t}function Wn(n){return typeof n=="object"&&n!==null&&typeof n.f=="number"}function St(n,t=!1,r){v={p:v,c:null,e:null,m:!1,s:n,x:null,l:null},t||(v.l={s:null,u:null,r1:[],r2:sn(!1)})}function At(n){const t=v;if(t!==null){const e=t.e;if(e!==null){t.e=null;for(var r=0;r<e.length;r++)an(e[r])}v=t.p,t.m=!0}return{}}function xt(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(W in n)K(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&W in r&&K(r)}}}function K(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let e in n)try{K(n[e],t)}catch{}const r=qn(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Fn(r);for(let l in e){const u=e[l].get;if(u)try{u.call(n)}catch{}}}}}function Ft(n){return Wn(n)?Vn(n):n}export{yt as A,i as B,an as C,_n as D,Qn as E,W as F,tt as G,bn as H,rt as I,Xn as J,sn as K,lt as L,Zn as M,qn as N,dt as O,en as P,I as Q,gt as R,st as S,mt as T,kt as U,q as V,pn as W,In as X,Ft as Y,Cn as Z,At as a,ft as b,Vn as c,_t as d,Bn as e,Tt as f,nt as g,ot as h,pt as i,vt as j,v as k,ut as l,at as m,xt as n,et as o,St as p,ct as q,Dn as r,ln as s,wt as t,Ot as u,Et as v,xn as w,it as x,Jn as y,ht as z};
