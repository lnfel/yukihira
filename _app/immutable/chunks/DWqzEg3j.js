import{S as h,z as R,A,B as v,C as K,D as w,U as u,F as l,G as x,H as S,I as T,J as j,K as B}from"./CgfHf3bl.js";function g(s,I=null,E){if(typeof s!="object"||s===null||h in s)return s;const P=j(s);if(P!==R&&P!==A)return s;var i=new Map,b=B(s),o=v(0);b&&i.set("length",v(s.length));var y;return new Proxy(s,{defineProperty(f,e,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&T();var n=i.get(e);return n===void 0?(n=v(t.value),i.set(e,n)):l(n,g(t.value,y)),!0},deleteProperty(f,e){var t=i.get(e);if(t===void 0)e in f&&i.set(e,v(u));else{if(b&&typeof e=="string"){var n=i.get("length"),r=Number(e);Number.isInteger(r)&&r<n.v&&l(n,r)}l(t,u),O(o)}return!0},get(f,e,t){var d;if(e===h)return s;var n=i.get(e),r=e in f;if(n===void 0&&(!r||(d=x(f,e))!=null&&d.writable)&&(n=v(g(r?f[e]:u,y)),i.set(e,n)),n!==void 0){var a=w(n);return a===u?void 0:a}return Reflect.get(f,e,t)},getOwnPropertyDescriptor(f,e){var t=Reflect.getOwnPropertyDescriptor(f,e);if(t&&"value"in t){var n=i.get(e);n&&(t.value=w(n))}else if(t===void 0){var r=i.get(e),a=r==null?void 0:r.v;if(r!==void 0&&a!==u)return{enumerable:!0,configurable:!0,value:a,writable:!0}}return t},has(f,e){var a;if(e===h)return!0;var t=i.get(e),n=t!==void 0&&t.v!==u||Reflect.has(f,e);if(t!==void 0||S!==null&&(!n||(a=x(f,e))!=null&&a.writable)){t===void 0&&(t=v(n?g(f[e],y):u),i.set(e,t));var r=w(t);if(r===u)return!1}return n},set(f,e,t,n){var D;var r=i.get(e),a=e in f;if(b&&e==="length")for(var d=t;d<r.v;d+=1){var _=i.get(d+"");_!==void 0?l(_,u):d in f&&(_=v(u),i.set(d+"",_))}r===void 0?(!a||(D=x(f,e))!=null&&D.writable)&&(r=v(void 0),l(r,g(t,y)),i.set(e,r)):(a=r.v!==u,l(r,g(t,y)));var c=Reflect.getOwnPropertyDescriptor(f,e);if(c!=null&&c.set&&c.set.call(n,t),!a){if(b&&typeof e=="string"){var N=i.get("length"),m=Number(e);Number.isInteger(m)&&m>=N.v&&l(N,m+1)}O(o)}return!0},ownKeys(f){w(o);var e=Reflect.ownKeys(f).filter(r=>{var a=i.get(r);return a===void 0||a.v!==u});for(var[t,n]of i)n.v!==u&&!(t in f)&&e.push(t);return e},setPrototypeOf(){K()}})}function O(s,I=1){l(s,s.v+I)}export{g as p};
