import{a4 as N,h as j,ae as I,i as h,af as k,a3 as T,Q as _,P as p,m as f,v as C,ag as R,ah as E,j as Y,R as $,ai as F,aj as M,$ as P,W as S,ak as V,k as W,p as Q,a7 as q,H as z,a as B}from"./CgfHf3bl.js";import{d as G,r as D,h as v,i as J,b as K}from"./E0mSXvHj.js";let n;function U(){n=void 0}function ee(a){let e=null,t=h;var o;if(h){for(e=f,n===void 0&&(n=C(document.head));n!==null&&(n.nodeType!==8||n.data!==k);)n=T(n);n===null?_(!1):n=p(T(n))}h||(o=document.head.appendChild(N()));try{j(()=>a(o),I)}finally{t&&(_(!0),n=f,p(e))}}let H=!0;function ae(a,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(a.__t??(a.__t=a.nodeValue))&&(a.__t=t,a.nodeValue=t+"")}function X(a,e){return L(a,e)}function te(a,e){R(),e.intro=e.intro??!1;const t=e.target,o=h,y=f;try{for(var r=C(t);r&&(r.nodeType!==8||r.data!==k);)r=T(r);if(!r)throw E;_(!0),p(r),Y();const l=L(a,{...e,anchor:r});if(f===null||f.nodeType!==8||f.data!==$)throw F(),E;return _(!1),l}catch(l){if(l===E)return e.recover===!1&&M(),R(),P(t),_(!1),X(a,e);throw l}finally{_(o),p(y),U()}}const u=new Map;function L(a,{target:e,anchor:t,props:o={},events:y,context:r,intro:l=!0}){R();var g=new Set,m=i=>{for(var s=0;s<i.length;s++){var d=i[s];if(!g.has(d)){g.add(d);var c=J(d);e.addEventListener(d,v,{passive:c});var A=u.get(d);A===void 0?(document.addEventListener(d,v,{passive:c}),u.set(d,1)):u.set(d,A+1)}}};m(S(G)),D.add(m);var w=void 0,O=V(()=>{var i=t??e.appendChild(N());return W(()=>{if(r){Q({});var s=q;s.c=r}y&&(o.$$events=y),h&&K(i,null),H=l,w=a(i,o)||{},H=!0,h&&(z.nodes_end=f),r&&B()}),()=>{var c;for(var s of g){e.removeEventListener(s,v);var d=u.get(s);--d===0?(document.removeEventListener(s,v),u.delete(s)):u.set(s,d)}D.delete(m),i!==t&&((c=i.parentNode)==null||c.removeChild(i))}});return b.set(w,O),w}let b=new WeakMap;function re(a,e){const t=b.get(a);return t?(b.delete(a),t(e)):Promise.resolve()}export{te as a,H as b,ee as h,X as m,ae as s,re as u};
