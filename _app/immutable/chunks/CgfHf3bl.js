var te=Array.isArray,pn=Array.prototype.indexOf,ne=Array.from,ee=Object.defineProperty,At=Object.getOwnPropertyDescriptor,hn=Object.getOwnPropertyDescriptors,re=Object.prototype,se=Array.prototype,dn=Object.getPrototypeOf;function ae(t){return typeof t=="function"}const L=()=>{};function le(t){return t()}function yt(t){for(var n=0;n<t.length;n++)t[n]()}const E=2,Ot=4,G=8,Et=16,I=32,B=64,X=128,A=256,J=512,h=1024,S=2048,N=4096,H=8192,at=16384,yn=32768,Dt=65536,ue=1<<17,En=1<<19,Nt=1<<20,xt=Symbol("$state"),oe=Symbol("legacy props"),fe=Symbol("");function Ct(t){return t===this.v}function qt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function ie(t,n){return t!==n}function Pt(t){return!qt(t,this.v)}function wn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function mn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function gn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function Tn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ce(){throw new Error("https://svelte.dev/e/hydration_failed")}function _e(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function ve(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function pe(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function bn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function An(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let K=!1;function he(){K=!0}const de=1,ye=2,Ee=4,we=8,me=16,ge=1,Te=2,be=4,Ae=8,xe=16,Ie=1,ke=2,Re=4,Se=1,Oe=2,xn="[",In="[!",kn="]",Ft={},De=Symbol();function Lt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}function Mt(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let o=null;function It(t){o=t}function Ne(t){return ut().get(t)}function Ce(t,n){return ut().set(t,n),n}function qe(t){return ut().has(t)}function Pe(){return ut()}function Fe(t,n=!1,e){o={p:o,c:null,e:null,m:!1,s:t,x:null,l:null},K&&!n&&(o.l={s:null,u:null,r1:[],r2:wt(!1)})}function Le(t){const n=o;if(n!==null){t!==void 0&&(n.x=t);const l=n.e;if(l!==null){var e=_,r=i;n.e=null;try{for(var s=0;s<l.length;s++){var a=l[s];et(a.effect),nt(a.reaction),zt(a.fn)}}finally{et(e),nt(r)}}o=n.p,n.m=!0}return t||{}}function lt(){return!K||o!==null&&o.l===null}function ut(t){return o===null&&Mt(),o.c??(o.c=new Map(Rn(o)||void 0))}function Rn(t){let n=t.p;for(;n!==null;){const e=n.c;if(e!==null)return e;n=n.p}return null}function wt(t,n){var e={f:0,v:t,reactions:null,equals:Ct,rv:0,wv:0};return e}function Me(t){return Yt(wt(t))}function Sn(t,n=!1){var r;const e=wt(t);return n||(e.equals=Pt),K&&o!==null&&o.l!==null&&((r=o.l).s??(r.s=[])).push(e),e}function Ye(t,n=!1){return Yt(Sn(t,n))}function Yt(t){return i!==null&&!T&&i.f&E&&(b===null?jn([t]):b.push(t)),t}function Ht(t,n){return i!==null&&!T&&lt()&&i.f&(E|Et)&&(b===null||!b.includes(t))&&An(),On(t,n)}function On(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=sn(),Bt(t,S),lt()&&_!==null&&_.f&h&&!(_.f&(I|B))&&(x===null?Vn([t]):x.push(t))),n}function He(t,n=1){var e=Tt(t),r=n===1?e++:e--;return Ht(t,e),r}function Bt(t,n){var e=t.reactions;if(e!==null)for(var r=lt(),s=e.length,a=0;a<s;a++){var l=e[a],f=l.f;f&S||!r&&l===_||(m(l,n),f&(h|A)&&(f&E?Bt(l,N):it(l)))}}let D=!1;function Be(t){D=t}let w;function j(t){if(t===null)throw Lt(),Ft;return w=t}function Ue(){return j(C(w))}function je(t){if(D){if(C(w)!==null)throw Lt(),Ft;w=t}}function Ve(t=1){if(D){for(var n=t,e=w;n--;)e=C(e);w=e}}function $e(){for(var t=0,n=w;;){if(n.nodeType===8){var e=n.data;if(e===kn){if(t===0)return n;t-=1}else(e===xn||e===In)&&(t+=1)}var r=C(n);n.remove(),n=r}}var kt,Dn,Ut,jt;function Ge(){if(kt===void 0){kt=window,Dn=document;var t=Element.prototype,n=Node.prototype;Ut=At(n,"firstChild").get,jt=At(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function _t(t=""){return document.createTextNode(t)}function vt(t){return Ut.call(t)}function C(t){return jt.call(t)}function Ke(t,n){if(!D)return vt(t);var e=vt(w);if(e===null)e=w.appendChild(_t());else if(n&&e.nodeType!==3){var r=_t();return e==null||e.before(r),j(r),r}return j(e),e}function ze(t,n){if(!D){var e=vt(t);return e instanceof Comment&&e.data===""?C(e):e}return w}function Ze(t,n=1,e=!1){let r=D?w:t;for(var s;n--;)s=r,r=C(r);if(!D)return r;var a=r==null?void 0:r.nodeType;if(e&&a!==3){var l=_t();return r===null?s==null||s.after(l):r.before(l),j(l),l}return j(r),r}function We(t){t.textContent=""}function Vt(t){var n=E|S,e=i!==null&&i.f&E?i:null;return _===null||e!==null&&e.f&A?n|=A:_.f|=Nt,{ctx:o,deps:null,effects:null,equals:Ct,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:e??_}}function Xe(t){const n=Vt(t);return n.equals=Pt,n}function $t(t){var n=t.effects;if(n!==null){t.effects=null;for(var e=0;e<n.length;e+=1)R(n[e])}}function Nn(t){for(var n=t.parent;n!==null;){if(!(n.f&E))return n;n=n.parent}return null}function Cn(t){var n,e=_;et(Nn(t));try{$t(t),n=ln(t)}finally{et(e)}return n}function Gt(t){var n=Cn(t),e=(k||t.f&A)&&t.deps!==null?N:h;m(t,e),t.equals(n)||(t.v=n,t.wv=sn())}function Kt(t){_===null&&i===null&&gn(),i!==null&&i.f&A&&_===null&&mn(),gt&&wn()}function qn(t,n){var e=n.last;e===null?n.last=n.first=t:(e.next=t,t.prev=e,n.last=t)}function q(t,n,e,r=!0){var s=(t&B)!==0,a=_,l={ctx:o,deps:null,nodes_start:null,nodes_end:null,f:t|S,first:null,fn:n,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,wv:0};if(e){var f=M;try{Rt(!0),ft(l),l.f|=yn}catch(g){throw R(l),g}finally{Rt(f)}}else n!==null&&it(l);var v=e&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&(Nt|X))===0;if(!v&&!s&&r&&(a!==null&&qn(l,a),i!==null&&i.f&E)){var u=i;(u.effects??(u.effects=[])).push(l)}return l}function Je(){return i===null||T?!1:!k}function Qe(t){const n=q(G,null,!1);return m(n,h),n.teardown=t,n}function Pn(t){Kt();var n=_!==null&&(_.f&I)!==0&&o!==null&&!o.m;if(n){var e=o;(e.e??(e.e=[])).push({fn:t,effect:_,reaction:i})}else{var r=zt(t);return r}}function tr(t){return Kt(),mt(t)}function nr(t){const n=q(B,t,!0);return()=>{R(n)}}function er(t){const n=q(B,t,!0);return(e={})=>new Promise(r=>{e.outro?Mn(n,()=>{R(n),r(void 0)}):(R(n),r(void 0))})}function zt(t){return q(Ot,t,!1)}function rr(t,n){var e=o,r={effect:null,ran:!1};e.l.r1.push(r),r.effect=mt(()=>{t(),!r.ran&&(r.ran=!0,Ht(e.l.r2,!0),bt(n))})}function sr(){var t=o;mt(()=>{if(Tt(t.l.r2)){for(var n of t.l.r1){var e=n.effect;e.f&h&&m(e,N),U(e)&&ft(e),n.ran=!1}t.l.r2.v=!1}})}function mt(t){return q(G,t,!0)}function ar(t,n=[],e=Vt){const r=n.map(e);return Fn(()=>t(...r.map(Tt)))}function Fn(t,n=0){return q(G|Et|n,t,!0)}function lr(t,n=!0){return q(G|I,t,!0,n)}function Zt(t){var n=t.teardown;if(n!==null){const e=gt,r=i;St(!0),nt(null);try{n.call(null)}finally{St(e),nt(r)}}}function Wt(t,n=!1){var e=t.first;for(t.first=t.last=null;e!==null;){var r=e.next;R(e,n),e=r}}function Ln(t){for(var n=t.first;n!==null;){var e=n.next;n.f&I||R(n),n=e}}function R(t,n=!0){var e=!1;if((n||t.f&En)&&t.nodes_start!==null){for(var r=t.nodes_start,s=t.nodes_end;r!==null;){var a=r===s?null:C(r);r.remove(),r=a}e=!0}Wt(t,n&&!e),st(t,0),m(t,at);var l=t.transitions;if(l!==null)for(const v of l)v.stop();Zt(t);var f=t.parent;f!==null&&f.first!==null&&Xt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Xt(t){var n=t.parent,e=t.prev,r=t.next;e!==null&&(e.next=r),r!==null&&(r.prev=e),n!==null&&(n.first===t&&(n.first=r),n.last===t&&(n.last=e))}function Mn(t,n){var e=[];Jt(t,e,!0),Yn(e,()=>{R(t),n&&n()})}function Yn(t,n){var e=t.length;if(e>0){var r=()=>--e||n();for(var s of t)s.out(r)}else n()}function Jt(t,n,e){if(!(t.f&H)){if(t.f^=H,t.transitions!==null)for(const l of t.transitions)(l.is_global||e)&&n.push(l);for(var r=t.first;r!==null;){var s=r.next,a=(r.f&Dt)!==0||(r.f&I)!==0;Jt(r,n,a?e:!1),r=s}}}function ur(t){Qt(t,!0)}function Qt(t,n){if(t.f&H){t.f^=H,t.f&h||(t.f^=h),U(t)&&(m(t,S),it(t));for(var e=t.first;e!==null;){var r=e.next,s=(e.f&Dt)!==0||(e.f&I)!==0;Qt(e,s?n:!1),e=r}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}const Hn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let Q=!1,tt=!1,pt=[],ht=[];function tn(){Q=!1;const t=pt.slice();pt=[],yt(t)}function nn(){tt=!1;const t=ht.slice();ht=[],yt(t)}function or(t){Q||(Q=!0,queueMicrotask(tn)),pt.push(t)}function fr(t){tt||(tt=!0,Hn(nn)),ht.push(t)}function Bn(){Q&&tn(),tt&&nn()}const en=0,Un=1;let Z=!1,W=en,V=!1,$=null,M=!1,gt=!1;function Rt(t){M=t}function St(t){gt=t}let O=[],Y=0;let i=null,T=!1;function nt(t){i=t}let _=null;function et(t){_=t}let b=null;function jn(t){b=t}let d=null,y=0,x=null;function Vn(t){x=t}let rn=1,rt=0,k=!1;function sn(){return++rn}function U(t){var u;var n=t.f;if(n&S)return!0;if(n&N){var e=t.deps,r=(n&A)!==0;if(e!==null){var s,a,l=(n&J)!==0,f=r&&_!==null&&!k,v=e.length;if(l||f){for(s=0;s<v;s++)a=e[s],(l||!((u=a==null?void 0:a.reactions)!=null&&u.includes(t)))&&(a.reactions??(a.reactions=[])).push(t);l&&(t.f^=J)}for(s=0;s<v;s++)if(a=e[s],U(a)&&Gt(a),a.wv>t.wv)return!0}(!r||_!==null&&!k)&&m(t,h)}return!1}function $n(t,n){for(var e=n;e!==null;){if(e.f&X)try{e.fn(t);return}catch{e.f^=X}e=e.parent}throw Z=!1,t}function Gn(t){return(t.f&at)===0&&(t.parent===null||(t.parent.f&X)===0)}function ot(t,n,e,r){if(Z){if(e===null&&(Z=!1),Gn(n))throw t;return}e!==null&&(Z=!0);{$n(t,n);return}}function an(t,n,e=0){var r=t.reactions;if(r!==null)for(var s=0;s<r.length;s++){var a=r[s];a.f&E?an(a,n,e+1):n===a&&(e===0?m(a,S):a.f&h&&m(a,N),it(a))}}function ln(t){var z;var n=d,e=y,r=x,s=i,a=k,l=b,f=o,v=T,u=t.f;d=null,y=0,x=null,i=u&(I|B)?null:t,k=(u&A)!==0&&(!M||(s===null||v)&&t.parent!==null),b=null,It(t.ctx),T=!1,rt++;try{var g=(0,t.fn)(),p=t.deps;if(d!==null){var c;if(st(t,y),p!==null&&y>0)for(p.length=y+d.length,c=0;c<d.length;c++)p[y+c]=d[c];else t.deps=p=d;if(!k)for(c=y;c<p.length;c++)((z=p[c]).reactions??(z.reactions=[])).push(t)}else p!==null&&y<p.length&&(st(t,y),p.length=y);if(lt()&&x!==null&&!(t.f&(E|N|S)))for(c=0;c<x.length;c++)an(x[c],t);return s!==null&&rt++,g}finally{d=n,y=e,x=r,i=s,k=a,b=l,It(f),T=v}}function Kn(t,n){let e=n.reactions;if(e!==null){var r=pn.call(e,t);if(r!==-1){var s=e.length-1;s===0?e=n.reactions=null:(e[r]=e[s],e.pop())}}e===null&&n.f&E&&(d===null||!d.includes(n))&&(m(n,N),n.f&(A|J)||(n.f^=J),$t(n),st(n,0))}function st(t,n){var e=t.deps;if(e!==null)for(var r=n;r<e.length;r++)Kn(t,e[r])}function ft(t){var n=t.f;if(!(n&at)){m(t,h);var e=_,r=o;_=t;try{n&Et?Ln(t):Wt(t),Zt(t);var s=ln(t);t.teardown=typeof s=="function"?s:null,t.wv=rn;var a=t.deps,l}catch(f){ot(f,t,e,r||t.ctx)}finally{_=e}}}function un(){if(Y>1e3){Y=0;try{Tn()}catch(t){if($!==null)ot(t,$,null);else throw t}}Y++}function on(t){var n=t.length;if(n!==0){un();var e=M;M=!0;try{for(var r=0;r<n;r++){var s=t[r];s.f&h||(s.f^=h);var a=[];fn(s,a),zn(a)}}finally{M=e}}}function zn(t){var n=t.length;if(n!==0)for(var e=0;e<n;e++){var r=t[e];if(!(r.f&(at|H)))try{U(r)&&(ft(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Xt(r):r.fn=null))}catch(s){ot(s,r,null,r.ctx)}}}function Zn(){if(V=!1,Y>1001)return;const t=O;O=[],on(t),V||(Y=0,$=null)}function it(t){W===en&&(V||(V=!0,queueMicrotask(Zn))),$=t;for(var n=t;n.parent!==null;){n=n.parent;var e=n.f;if(e&(B|I)){if(!(e&h))return;n.f^=h}}O.push(n)}function fn(t,n){var e=t.first,r=[];t:for(;e!==null;){var s=e.f,a=(s&I)!==0,l=a&&(s&h)!==0,f=e.next;if(!l&&!(s&H))if(s&G){if(a)e.f^=h;else{var v=i;try{i=e,U(e)&&ft(e)}catch(c){ot(c,e,null,e.ctx)}finally{i=v}}var u=e.first;if(u!==null){e=u;continue}}else s&Ot&&r.push(e);if(f===null){let c=e.parent;for(;c!==null;){if(t===c)break t;var g=c.next;if(g!==null){e=g;continue t}c=c.parent}}e=f}for(var p=0;p<r.length;p++)u=r[p],n.push(u),fn(u,n)}function cn(t){var n=W,e=O;try{un();const s=[];W=Un,O=s,V=!1,on(e);var r=t==null?void 0:t();return Bn(),(O.length>0||s.length>0)&&cn(),Y=0,$=null,r}finally{W=n,O=e}}async function ir(){await Promise.resolve(),cn()}function Tt(t){var n=t.f,e=(n&E)!==0;if(i!==null&&!T){b!==null&&b.includes(t)&&bn();var r=i.deps;t.rv<rt&&(t.rv=rt,d===null&&r!==null&&r[y]===t?y++:d===null?d=[t]:d.push(t))}else if(e&&t.deps===null&&t.effects===null){var s=t,a=s.parent;a!==null&&!(a.f&A)&&(s.f^=A)}return e&&(s=t,U(s)&&Gt(s)),t.v}function bt(t){var n=T;try{return T=!0,t()}finally{T=n}}const Wn=-7169;function m(t,n){t.f=t.f&Wn|n}function cr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(xt in t)dt(t);else if(!Array.isArray(t))for(let n in t){const e=t[n];typeof e=="object"&&e&&xt in e&&dt(e)}}}function dt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let r in t)try{dt(t[r],n)}catch{}const e=dn(t);if(e!==Object.prototype&&e!==Array.prototype&&e!==Map.prototype&&e!==Set.prototype&&e!==Date.prototype){const r=hn(e);for(let s in r){const a=r[s].get;if(a)try{a.call(t)}catch{}}}}}function _n(t,n,e){if(t==null)return n(void 0),e&&e(void 0),L;const r=bt(()=>t.subscribe(n,e));return r.unsubscribe?()=>r.unsubscribe():r}const F=[];function Xn(t,n){return{subscribe:Jn(t,n).subscribe}}function Jn(t,n=L){let e=null;const r=new Set;function s(f){if(qt(t,f)&&(t=f,e)){const v=!F.length;for(const u of r)u[1](),F.push(u,t);if(v){for(let u=0;u<F.length;u+=2)F[u][0](F[u+1]);F.length=0}}}function a(f){s(f(t))}function l(f,v=L){const u=[f,v];return r.add(u),r.size===1&&(e=n(s,a)||L),f(t),()=>{r.delete(u),r.size===0&&e&&(e(),e=null)}}return{set:s,update:a,subscribe:l}}function _r(t,n,e){const r=!Array.isArray(t),s=r?[t]:t;if(!s.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const a=n.length<2;return Xn(e,(l,f)=>{let v=!1;const u=[];let g=0,p=L;const c=()=>{if(g)return;p();const P=n(r?u[0]:u,l,f);a?l(P):p=typeof P=="function"?P:L},z=s.map((P,ct)=>_n(P,vn=>{u[ct]=vn,g&=~(1<<ct),v&&c()},()=>{g|=1<<ct}));return v=!0,c(),function(){yt(z),p(),v=!1}})}function vr(t){let n;return _n(t,e=>n=e)(),n}function pr(t){o===null&&Mt(),K&&o.l!==null?Qn(o).m.push(t):Pn(()=>{const n=bt(t);if(typeof n=="function")return n})}function Qn(t){var n=t.l;return n.u??(n.u={a:[],b:[],m:[]})}export{We as $,se as A,wt as B,pe as C,Tt as D,Dt as E,Ht as F,At as G,_ as H,ve as I,dn as J,te as K,lt as L,ie as M,In as N,$e as O,j as P,Be as Q,kn as R,xt as S,ur as T,De as U,H as V,ne as W,On as X,Sn as Y,ye as Z,Jt as _,Le as a,qe as a$,Yn as a0,de as a1,me as a2,C as a3,_t as a4,Ee as a5,we as a6,o as a7,tr as a8,Pn as a9,ge as aA,xe as aB,ae as aC,He as aD,fe as aE,hn as aF,fr as aG,pr as aH,Me as aI,cn as aJ,ir as aK,nt as aL,i as aM,Se as aN,Oe as aO,Et as aP,yn as aQ,Re as aR,Ie as aS,ke as aT,_r as aU,Jn as aV,Xn as aW,rr as aX,sr as aY,Ye as aZ,Je as a_,yt as aa,le as ab,Vt as ac,he as ad,En as ae,xn as af,Ge as ag,Ft as ah,Lt as ai,ce as aj,er as ak,Dn as al,ee as am,_n as an,vr as ao,_e as ap,ue as aq,be as ar,Pt as as,Ae as at,oe as au,K as av,Te as aw,I as ax,B as ay,et as az,mt as b,Ne as b0,Ce as b1,Pe as b2,nr as b3,Ke as c,cr as d,zt as e,ze as f,qt as g,Fn as h,D as i,Ue as j,lr as k,Mn as l,w as m,L as n,R as o,Fe as p,Qe as q,je as r,Ze as s,ar as t,bt as u,vt as v,or as w,Xe as x,Ve as y,re as z};
