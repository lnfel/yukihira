import{J as R,M as g,B as A}from"./runtime.D-uqQ415.js";const B=1,k=2,F=4,V=8,$=16,q=64,G=1,J=2,Z=4,j=8,N=1,w=2,D="[",b="[!",O="]",z={},K=Symbol(),Q=["touchstart","touchmove","touchend"];let i=!1;function W(e){i=e}let a;function p(e){return a=e}function P(){return a=a.nextSibling}function X(e){i&&(a=e)}function ee(){for(var e=0,n=a;;){if(n.nodeType===8){var t=n.data;if(t===O){if(e===0)return n;e-=1}else(t===D||t===b)&&(e+=1)}var u=n.nextSibling;n.remove(),n=u}}var S,H;function ne(){if(S===void 0){S=window,H=document;var e=Element.prototype;e.__click=void 0,e.__className="",e.__attributes=null,e.__e=void 0,Text.prototype.__t=void 0}}function _(){return document.createTextNode("")}function te(e){if(!i)return e.firstChild;var n=a.firstChild;return n===null&&(n=a.appendChild(_())),p(n),n}function re(e,n){if(!i){var t=e.firstChild;return t instanceof Comment&&t.data===""?t.nextSibling:t}return a}function ae(e,n=!1){if(!i)return e.nextSibling;var t=a.nextSibling,u=t.nodeType;if(n&&u!==3){var r=_();return t==null||t.before(r),p(r),r}return p(t),t}function oe(e){e.textContent=""}const L=new Set,x=new Set;function ie(e){for(var n=0;n<e.length;n++)L.add(e[n]);for(var t of x)t(e)}function se(e){var I;var n=this,t=n.ownerDocument,u=e.type,r=((I=e.composedPath)==null?void 0:I.call(e))||[],o=r[0]||e.target,s=0,d=e.__root;if(d){var c=r.indexOf(d);if(c!==-1&&(n===document||n===window)){e.__root=n;return}var h=r.indexOf(n);if(h===-1)return;c<=h&&(s=c)}if(o=r[s]||e.target,o!==n){R(e,"currentTarget",{configurable:!0,get(){return o||t}});try{for(var l,T=[];o!==null;){var E=o.parentNode||o.host||null;try{var m=o["__"+u];if(m!==void 0&&!o.disabled)if(g(m)){var[y,...C]=m;y.apply(o,[e,...C])}else m.call(o,e)}catch(v){l?T.push(v):l=v}if(e.cancelBubble||E===n||E===null)break;o=E}if(l){for(let v of T)queueMicrotask(()=>{throw v});throw l}}finally{e.__root=n,o=n}}}function M(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function f(e,n){var t;(t=A).nodes??(t.nodes={start:e,end:n})}function ue(e,n){var t=(n&N)!==0,u=(n&w)!==0,r,o=!e.startsWith("<!>");return()=>{if(i)return f(a,null),a;r||(r=M(o?e:"<!>"+e),t||(r=r.firstChild));var s=u?document.importNode(r,!0):r.cloneNode(!0);if(t){var d=s.firstChild,c=s.lastChild;f(d,c)}else f(s,s);return s}}function fe(){if(!i){var e=_();return f(e,e),e}var n=a;return n.nodeType!==3&&(n.before(n=_()),p(n)),f(n,n),n}function ce(){if(i)return f(a,null),a;var e=document.createDocumentFragment(),n=document.createComment(""),t=_();return e.append(n,t),f(n,t),e}function _e(e,n){if(i){A.nodes.end=a,P();return}e!==null&&e.before(n)}const U="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(U);export{H as $,ee as A,ce as B,fe as C,k as D,B as E,q as F,$ as G,D as H,F as I,V as J,Z as P,K as U,_e as a,G as b,te as c,J as d,j as e,re as f,_ as g,i as h,p as i,a as j,z as k,W as l,P as m,O as n,ne as o,oe as p,L as q,X as r,ae as s,ue as t,x as u,se as v,f as w,Q as x,ie as y,b as z};