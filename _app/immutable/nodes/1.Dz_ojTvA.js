import{b as d,t as m,e as o,c,f as v,s as b}from"../chunks/disclose-version.BDTvEX8u.js";import{n as a,k as h,b as $,g as x,U as f,s as l,m as I,p as y,t as k,j as E}from"../chunks/runtime.DlGaw317.js";import{i as N}from"../chunks/lifecycle.BiL2bqCf.js";import{s as U}from"../chunks/entry.pjNrvsfb.js";function j(s,t,n){if(s==null)return t(void 0),a;const e=s.subscribe(t,n);return e.unsubscribe?()=>e.unsubscribe():e}function w(s,t,n){let e=n[t];const r=e===void 0;r&&(e={store:null,last_value:null,value:I(f),unsubscribe:a},n[t]=e),(r||e.store!==s)&&(e.unsubscribe(),e.store=s??null,e.unsubscribe=A(s,e.value));const u=x(e.value);return u===f?e.last_value:u}function A(s,t){return s==null?(l(t,void 0),a):j(s,n=>l(t,n))}function D(s){L(()=>{let t;for(t in s)s[t].unsubscribe()})}function L(s){h(()=>()=>$(s))}const S=()=>{const s=U;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},T={subscribe(s){return S().page.subscribe(s)}};var Z=m("<h1> </h1> <p> </p>",1);function F(s,t){y(t,!1);const n={};D(n);const e=()=>w(T,"$page",n);N();var r=Z(),u=v(r),p=c(u),g=b(b(u,!0)),_=c(g);k(()=>{var i;o(p,e().status),o(_,(i=e().error)==null?void 0:i.message)}),d(s,r),E()}export{F as component};
