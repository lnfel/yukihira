import{d as x,e as k,a as L,t as $,$ as w,c as d,b as a,f as E}from"../chunks/disclose-version.BdZn2vBI.js";import{j as S,k as T,E as A,l as N,p as Y,h as q}from"../chunks/runtime.BT8qFkc0.js";import{s as n}from"../chunks/attributes.C6oqUbTx.js";import{b as l}from"../chunks/paths.DJz7PBTT.js";import{o as z}from"../chunks/index-client.BdGKWncM.js";function I(o,s,...e){var t,r;S(o,A,()=>{t!==(t=s())&&(r&&(N(r),r=null),t&&(r=T(()=>t(o,...e))))})}const M=!0,G=Object.freeze(Object.defineProperty({__proto__:null,prerender:M},Symbol.toStringTag,{value:"Module"}));function O(o){const s=document.querySelectorAll("nav a"),e=document.querySelector(".overlay");o.currentTarget.checked?(e==null||e.classList.remove("stagger-fade-out"),e==null||e.classList.add("stagger-fade-in"),s.forEach(t=>{t.classList.remove("stagger-fade-out"),t.classList.add("stagger-fade-in")})):(e==null||e.classList.remove("stagger-fade-in"),e==null||e.classList.add("stagger-fade-out"),s.forEach(t=>{t.classList.remove("stagger-fade-in"),t.classList.add("stagger-fade-out")}))}var P=$(`<header class="group fixed top-0 z-10 w-full flex items-center justify-between gap-2 px-4 md:px-20 py-6 svelte-1b8jpa4"><a style="--animation-order: 7;" class="logo stagger-fade-in rounded-md outline-none border border-transparent hover:border-saddle-100 focus:border-saddle-100 svelte-1b8jpa4"><img alt="Yukihira logo" width="70" height="70" class="svelte-1b8jpa4"> <h1 class="sr-only svelte-1b8jpa4">Yukihira</h1></a> <label for="nav-toggle" class="svelte-1b8jpa4"><input type="checkbox" id="nav-toggle" class="svelte-1b8jpa4"> <span class="svelte-1b8jpa4"></span> <span class="svelte-1b8jpa4"></span> <span class="svelte-1b8jpa4"></span></label> <nav class="flex group-[&amp;:has(label>input[type='checkbox']:checked)]:flex md:group-[&amp;:has(label>input[type='checkbox']:not(:checked))]:flex w-full md:w-fit absolute md:static top-full left-0 md:flex flex-col md:flex-row items-end md:items-center gap-4 text-saddle-100 tracking-wider px-4 md:px-0 svelte-1b8jpa4"><a style="--animation-order: 7; --fade-out-order: 4;" class="stagger-fade-in relative outline-none svelte-1b8jpa4">About Yukihira</a> <a style="--animation-order: 8; --fade-out-order: 3;" class="stagger-fade-in relative outline-none svelte-1b8jpa4">Sushi</a> <a style="--animation-order: 9; --fade-out-order: 2;" class="stagger-fade-in relative outline-none svelte-1b8jpa4">Contact Us</a> <a style="--animation-order: 10; --fade-out-order: 1;" class="stagger-fade-in relative outline-none svelte-1b8jpa4">Order</a></nav></header> <div style="--animation-order: 6; --fade-out-order: 5;" class="overlay stagger-fade-in absolute inset-0 bg-slate-900/90 z-[1] svelte-1b8jpa4"></div> <!>`,1);function K(o,s){Y(s,!0);async function e(){const u=await navigator.serviceWorker.ready;u.addEventListener("updatefound",()=>{const i=u.installing;i==null||i.addEventListener("statechange",()=>{i.state==="installed"&&confirm("New update available! Reload the page to use the latest version of the app?")&&i.postMessage({type:"SKIP_WAITING"})})})}z(()=>{e()});var t=P();k(u=>{w.title="Sushiya | Yukihira"});var r=E(t),c=d(r);n(c,"href",`${l??""}/`);var h=d(c);n(h,"src",`${l??""}/img/yukihira_logo-square.png`);var p=a(a(c,!0)),m=d(p);m.__change=[O];var b=a(a(p,!0)),f=d(b);n(f,"href",`${l??""}#about`);var g=a(a(f,!0));n(g,"href",`${l??""}#sushi`);var v=a(a(g,!0));n(v,"href",`${l??""}#contact`);var j=a(a(v,!0));n(j,"href",`${l??""}#order`);var y=a(a(r,!0)),_=a(a(y,!0));I(_,()=>s.children),L(o,t),q()}x(["change"]);export{K as component,G as universal};
