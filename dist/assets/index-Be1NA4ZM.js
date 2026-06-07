import{c as l,r as Se,b as Ee,a as Ae,C as Me,X as $e,Y as ie,T as Re,A as Oe,L as ze,R as Le}from"./recharts-F0Dac_3a.js";import{c as Ie}from"./supabase-CwrFKnKJ.js";import"./chart-vendor-DMp3CC2k.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();var he={exports:{}},B={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Te=l,Pe=Symbol.for("react.element"),De=Symbol.for("react.fragment"),qe=Object.prototype.hasOwnProperty,Fe=Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ze={key:!0,ref:!0,__self:!0,__source:!0};function ge(t,a,r){var i,n={},o=null,s=null;r!==void 0&&(o=""+r),a.key!==void 0&&(o=""+a.key),a.ref!==void 0&&(s=a.ref);for(i in a)qe.call(a,i)&&!Ze.hasOwnProperty(i)&&(n[i]=a[i]);if(t&&t.defaultProps)for(i in a=t.defaultProps,a)n[i]===void 0&&(n[i]=a[i]);return{$$typeof:Pe,type:t,key:o,ref:s,props:n,_owner:Fe.current}}B.Fragment=De;B.jsx=ge;B.jsxs=ge;he.exports=B;var e=he.exports,ee={},ne=Se;ee.createRoot=ne.createRoot,ee.hydrateRoot=ne.hydrateRoot;let He={data:""},Ye=t=>{if(typeof window=="object"){let a=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return a.nonce=window.__nonce__,a.parentNode||(t||document.head).appendChild(a),a.firstChild}return t||He},Ve=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,We=/\/\*[^]*?\*\/|  +/g,oe=/\n+/g,I=(t,a)=>{let r="",i="",n="";for(let o in t){let s=t[o];o[0]=="@"?o[1]=="i"?r=o+" "+s+";":i+=o[1]=="f"?I(s,o):o+"{"+I(s,o[1]=="k"?"":a)+"}":typeof s=="object"?i+=I(s,a?a.replace(/([^,])+/g,c=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,m=>/&/.test(m)?m.replace(/&/g,c):c?c+" "+m:m)):o):s!=null&&(o=o[1]=="-"?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=I.p?I.p(o,s):o+":"+s+";")}return r+(a&&n?a+"{"+n+"}":n)+i},L={},fe=t=>{if(typeof t=="object"){let a="";for(let r in t)a+=r+fe(t[r]);return a}return t},Ue=(t,a,r,i,n)=>{let o=fe(t),s=L[o]||(L[o]=(m=>{let u=0,h=11;for(;u<m.length;)h=101*h+m.charCodeAt(u++)>>>0;return"go"+h})(o));if(!L[s]){let m=o!==t?t:(u=>{let h,d,x=[{}];for(;h=Ve.exec(u.replace(We,""));)h[4]?x.shift():h[3]?(d=h[3].replace(oe," ").trim(),x.unshift(x[0][d]=x[0][d]||{})):x[0][h[1]]=h[2].replace(oe," ").trim();return x[0]})(t);L[s]=I(n?{["@keyframes "+s]:m}:m,r?"":"."+s)}let c=r&&L.g;return r&&(L.g=L[s]),((m,u,h,d)=>{d?u.data=u.data.replace(d,m):u.data.indexOf(m)===-1&&(u.data=h?m+u.data:u.data+m)})(L[s],a,i,c),s},Be=(t,a,r)=>t.reduce((i,n,o)=>{let s=a[o];if(s&&s.call){let c=s(r),m=c&&c.props&&c.props.className||/^go/.test(c)&&c;s=m?"."+m:c&&typeof c=="object"?c.props?"":I(c,""):c===!1?"":c}return i+n+(s??"")},"");function G(t){let a=this||{},r=t.call?t(a.p):t;return Ue(r.unshift?r.raw?Be(r,[].slice.call(arguments,1),a.p):r.reduce((i,n)=>Object.assign(i,n&&n.call?n(a.p):n),{}):r,Ye(a.target),a.g,a.o,a.k)}let be,te,ae;G.bind({g:1});let O=G.bind({k:1});function Ge(t,a,r,i){I.p=a,be=t,te=r,ae=i}function P(t,a){let r=this||{};return function(){let i=arguments;function n(o,s){let c=Object.assign({},o),m=c.className||n.className;r.p=Object.assign({theme:te&&te()},c),r.o=/go\d/.test(m),c.className=G.apply(r,i)+(m?" "+m:"");let u=t;return t[0]&&(u=c.as||t,delete c.as),ae&&u[0]&&ae(c),be(u,c)}return n}}var Xe=t=>typeof t=="function",U=(t,a)=>Xe(t)?t(a):t,Je=(()=>{let t=0;return()=>(++t).toString()})(),ye=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let a=matchMedia("(prefers-reduced-motion: reduce)");t=!a||a.matches}return t}})(),Ke=20,se="default",ve=(t,a)=>{let{toastLimit:r}=t.settings;switch(a.type){case 0:return{...t,toasts:[a.toast,...t.toasts].slice(0,r)};case 1:return{...t,toasts:t.toasts.map(s=>s.id===a.toast.id?{...s,...a.toast}:s)};case 2:let{toast:i}=a;return ve(t,{type:t.toasts.find(s=>s.id===i.id)?1:0,toast:i});case 3:let{toastId:n}=a;return{...t,toasts:t.toasts.map(s=>s.id===n||n===void 0?{...s,dismissed:!0,visible:!1}:s)};case 4:return a.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(s=>s.id!==a.toastId)};case 5:return{...t,pausedAt:a.time};case 6:let o=a.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+o}))}}},Y=[],je={toasts:[],pausedAt:void 0,settings:{toastLimit:Ke}},R={},Ne=(t,a=se)=>{R[a]=ve(R[a]||je,t),Y.forEach(([r,i])=>{r===a&&i(R[a])})},ke=t=>Object.keys(R).forEach(a=>Ne(t,a)),Qe=t=>Object.keys(R).find(a=>R[a].toasts.some(r=>r.id===t)),X=(t=se)=>a=>{Ne(a,t)},et={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},tt=(t={},a=se)=>{let[r,i]=l.useState(R[a]||je),n=l.useRef(R[a]);l.useEffect(()=>(n.current!==R[a]&&i(R[a]),Y.push([a,i]),()=>{let s=Y.findIndex(([c])=>c===a);s>-1&&Y.splice(s,1)}),[a]);let o=r.toasts.map(s=>{var c,m,u;return{...t,...t[s.type],...s,removeDelay:s.removeDelay||((c=t[s.type])==null?void 0:c.removeDelay)||(t==null?void 0:t.removeDelay),duration:s.duration||((m=t[s.type])==null?void 0:m.duration)||(t==null?void 0:t.duration)||et[s.type],style:{...t.style,...(u=t[s.type])==null?void 0:u.style,...s.style}}});return{...r,toasts:o}},at=(t,a="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:a,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...r,id:(r==null?void 0:r.id)||Je()}),Z=t=>(a,r)=>{let i=at(a,t,r);return X(i.toasterId||Qe(i.id))({type:2,toast:i}),i.id},w=(t,a)=>Z("blank")(t,a);w.error=Z("error");w.success=Z("success");w.loading=Z("loading");w.custom=Z("custom");w.dismiss=(t,a)=>{let r={type:3,toastId:t};a?X(a)(r):ke(r)};w.dismissAll=t=>w.dismiss(void 0,t);w.remove=(t,a)=>{let r={type:4,toastId:t};a?X(a)(r):ke(r)};w.removeAll=t=>w.remove(void 0,t);w.promise=(t,a,r)=>{let i=w.loading(a.loading,{...r,...r==null?void 0:r.loading});return typeof t=="function"&&(t=t()),t.then(n=>{let o=a.success?U(a.success,n):void 0;return o?w.success(o,{id:i,...r,...r==null?void 0:r.success}):w.dismiss(i),n}).catch(n=>{let o=a.error?U(a.error,n):void 0;o?w.error(o,{id:i,...r,...r==null?void 0:r.error}):w.dismiss(i)}),t};var rt=1e3,st=(t,a="default")=>{let{toasts:r,pausedAt:i}=tt(t,a),n=l.useRef(new Map).current,o=l.useCallback((d,x=rt)=>{if(n.has(d))return;let g=setTimeout(()=>{n.delete(d),s({type:4,toastId:d})},x);n.set(d,g)},[]);l.useEffect(()=>{if(i)return;let d=Date.now(),x=r.map(g=>{if(g.duration===1/0)return;let p=(g.duration||0)+g.pauseDuration-(d-g.createdAt);if(p<0){g.visible&&w.dismiss(g.id);return}return setTimeout(()=>w.dismiss(g.id,a),p)});return()=>{x.forEach(g=>g&&clearTimeout(g))}},[r,i,a]);let s=l.useCallback(X(a),[a]),c=l.useCallback(()=>{s({type:5,time:Date.now()})},[s]),m=l.useCallback((d,x)=>{s({type:1,toast:{id:d,height:x}})},[s]),u=l.useCallback(()=>{i&&s({type:6,time:Date.now()})},[i,s]),h=l.useCallback((d,x)=>{let{reverseOrder:g=!1,gutter:p=8,defaultPosition:f}=x||{},C=r.filter(b=>(b.position||f)===(d.position||f)&&b.height),v=C.findIndex(b=>b.id===d.id),E=C.filter((b,k)=>k<v&&b.visible).length;return C.filter(b=>b.visible).slice(...g?[E+1]:[0,E]).reduce((b,k)=>b+(k.height||0)+p,0)},[r]);return l.useEffect(()=>{r.forEach(d=>{if(d.dismissed)o(d.id,d.removeDelay);else{let x=n.get(d.id);x&&(clearTimeout(x),n.delete(d.id))}})},[r,o]),{toasts:r,handlers:{updateHeight:m,startPause:c,endPause:u,calculateOffset:h}}},it=O`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,nt=O`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ot=O`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,lt=P("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${it} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${nt} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${ot} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,dt=O`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,ct=P("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${dt} 1s linear infinite;
`,mt=O`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ut=O`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,xt=P("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${mt} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ut} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,pt=P("div")`
  position: absolute;
`,ht=P("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,gt=O`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ft=P("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${gt} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,bt=({toast:t})=>{let{icon:a,type:r,iconTheme:i}=t;return a!==void 0?typeof a=="string"?l.createElement(ft,null,a):a:r==="blank"?null:l.createElement(ht,null,l.createElement(ct,{...i}),r!=="loading"&&l.createElement(pt,null,r==="error"?l.createElement(lt,{...i}):l.createElement(xt,{...i})))},yt=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,vt=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,jt="0%{opacity:0;} 100%{opacity:1;}",Nt="0%{opacity:1;} 100%{opacity:0;}",kt=P("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,wt=P("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,_t=(t,a)=>{let r=t.includes("top")?1:-1,[i,n]=ye()?[jt,Nt]:[yt(r),vt(r)];return{animation:a?`${O(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${O(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Ct=l.memo(({toast:t,position:a,style:r,children:i})=>{let n=t.height?_t(t.position||a||"top-center",t.visible):{opacity:0},o=l.createElement(bt,{toast:t}),s=l.createElement(wt,{...t.ariaProps},U(t.message,t));return l.createElement(kt,{className:t.className,style:{...n,...r,...t.style}},typeof i=="function"?i({icon:o,message:s}):l.createElement(l.Fragment,null,o,s))});Ge(l.createElement);var St=({id:t,className:a,style:r,onHeightUpdate:i,children:n})=>{let o=l.useCallback(s=>{if(s){let c=()=>{let m=s.getBoundingClientRect().height;i(t,m)};c(),new MutationObserver(c).observe(s,{subtree:!0,childList:!0,characterData:!0})}},[t,i]);return l.createElement("div",{ref:o,className:a,style:r},n)},Et=(t,a)=>{let r=t.includes("top"),i=r?{top:0}:{bottom:0},n=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:ye()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${a*(r?1:-1)}px)`,...i,...n}},At=G`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,H=16,le=({reverseOrder:t,position:a="top-center",toastOptions:r,gutter:i,children:n,toasterId:o,containerStyle:s,containerClassName:c})=>{let{toasts:m,handlers:u}=st(r,o);return l.createElement("div",{"data-rht-toaster":o||"",style:{position:"fixed",zIndex:9999,top:H,left:H,right:H,bottom:H,pointerEvents:"none",...s},className:c,onMouseEnter:u.startPause,onMouseLeave:u.endPause},m.map(h=>{let d=h.position||a,x=u.calculateOffset(h,{reverseOrder:t,gutter:i,defaultPosition:a}),g=Et(d,x);return l.createElement(St,{id:h.id,key:h.id,onHeightUpdate:u.updateHeight,className:h.visible?At:"",style:g},h.type==="custom"?U(h.message,h):n?n(h):l.createElement(Ct,{toast:h,position:d}))}))},M=w;/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Mt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),_=(t,a)=>{const r=l.forwardRef(({color:i="currentColor",size:n=24,strokeWidth:o=2,absoluteStrokeWidth:s,className:c="",children:m,...u},h)=>l.createElement("svg",{ref:h,...Mt,width:n,height:n,stroke:i,strokeWidth:s?Number(o)*24/Number(n):o,className:["lucide",`lucide-${$t(t)}`,c].join(" "),...u},[...a.map(([d,x])=>l.createElement(d,x)),...Array.isArray(m)?m:[m]]));return r.displayName=`${t}`,r};/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=_("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=_("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=_("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=_("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=_("CloudRain",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v6",key:"1j4efv"}],["path",{d:"M8 14v6",key:"17c4r9"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=_("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=_("Droplet",[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=_("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lt=_("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=_("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=_("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pt=_("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dt=_("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=_("Thermometer",[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ft=_("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=_("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ht=_("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=_("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=_("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=_("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),Wt="https://ukcqkanwyimgdrlapftl.supabase.co",Ut="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrY3FrYW53eWltZ2RybGFwZnRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkzNzM4MTYsImV4cCI6MjA5NDk0OTgxNn0.pyJx6XlbbS_pC89WtLHBCNqgqVWl5Yxqal-isR8yQXA",j=Ie(Wt,Ut),me=()=>typeof window<"u"&&"Notification"in window;function Bt({session:t,zonaId:a}){var g;const[r,i]=l.useState([]),[n,o]=l.useState(!0),[s,c]=l.useState(!1);l.useEffect(()=>{var C;if(!((C=t==null?void 0:t.user)!=null&&C.id))return;(async()=>{o(!0);let v=j.from("alertas").select("*").eq("user_id",t.user.id).order("created_at",{ascending:!1}).limit(20);a&&(v=v.eq("zona_id",a));const{data:E}=await v;E&&i(E),o(!1)})();const f=j.channel("alertas-channel").on("postgres_changes",{event:"INSERT",schema:"public",table:"alertas",filter:`user_id=eq.${t.user.id}`},v=>{i(E=>[v.new,...E].slice(0,20)),me()&&Notification.permission==="granted"&&new Notification(v.new.titulo,{body:v.new.mensaje,icon:"/vite.svg"})}).subscribe();return me()&&Notification.permission==="default"&&Notification.requestPermission(),()=>{f.unsubscribe()}},[(g=t==null?void 0:t.user)==null?void 0:g.id,a]);const m=async p=>{await j.from("alertas").update({leida:!0}).eq("id",p),i(r.map(f=>f.id===p?{...f,leida:!0}:f))},u=async()=>{const p=r.filter(f=>!f.leida).map(f=>f.id);p.length!==0&&(await j.from("alertas").update({leida:!0}).in("id",p),i(r.map(f=>({...f,leida:!0}))))},h=p=>{switch(p){case"humedad":return e.jsx(_e,{className:"w-5 h-5 text-blue-500"});case"temperatura":return e.jsx(qt,{className:"w-5 h-5 text-orange-500"});case"riego":return e.jsx(re,{className:"w-5 h-5 text-emerald-500"});default:return e.jsx(we,{className:"w-5 h-5 text-yellow-500"})}},d=p=>{switch(p){case"alta":return"border-red-500 bg-red-50 dark:bg-red-900/20";case"media":return"border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20";default:return"border-blue-500 bg-blue-50 dark:bg-blue-900/20"}},x=r.filter(p=>!p.leida).length;return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>c(!s),className:"fixed bottom-6 right-6 z-50 bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110",children:e.jsxs("div",{className:"relative",children:[e.jsx(de,{className:"w-6 h-6"}),x>0&&e.jsx("span",{className:"absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center",children:x})]})}),s&&e.jsxs("div",{className:"fixed bottom-24 right-6 z-50 w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden animate-slide-up",children:[e.jsxs("div",{className:"bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-3 flex justify-between items-center",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(de,{className:"w-5 h-5 text-white"}),e.jsx("h3",{className:"text-white font-semibold",children:"Centro de Alertas"}),x>0&&e.jsxs("span",{className:"bg-red-500 text-white text-xs px-2 py-0.5 rounded-full",children:[x," nuevas"]})]}),e.jsxs("div",{className:"flex gap-2",children:[x>0&&e.jsx("button",{onClick:u,className:"text-white/80 hover:text-white text-xs",children:"Leer todas"}),e.jsx("button",{onClick:()=>c(!1),className:"text-white/80 hover:text-white",children:e.jsx(Vt,{className:"w-4 h-4"})})]})]}),e.jsx("div",{className:"max-h-96 overflow-y-auto",children:n?e.jsxs("div",{className:"p-8 text-center text-gray-500",children:[e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500 mx-auto mb-2"}),e.jsx("p",{className:"text-sm",children:"Cargando alertas..."})]}):r.length===0?e.jsxs("div",{className:"p-8 text-center text-gray-500",children:[e.jsx(Rt,{className:"w-12 h-12 mx-auto mb-2 text-emerald-500 opacity-50"}),e.jsx("p",{className:"text-sm",children:"No hay alertas"}),e.jsx("p",{className:"text-xs mt-1",children:"Las alertas aparecerán aquí"})]}):r.map(p=>e.jsx("div",{className:`p-4 border-l-4 transition-all duration-300 ${p.leida?"opacity-60":""} ${d(p.severidad)}`,children:e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsxs("div",{className:"flex gap-3 flex-1",children:[h(p.tipo),e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:"font-semibold text-gray-800 dark:text-gray-200 text-sm",children:p.titulo}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 text-xs mt-1",children:p.mensaje}),e.jsx("p",{className:"text-gray-400 dark:text-gray-500 text-xs mt-2",children:new Date(p.created_at).toLocaleString()})]})]}),!p.leida&&e.jsx("button",{onClick:()=>m(p.id),className:"text-gray-400 hover:text-emerald-500 text-xs",children:"✓ Leer"})]})},p.id))})]}),e.jsx("style",{children:`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `})]})}function Gt({mediciones:t}){const a=t.slice().reverse().map(r=>({time:new Date(r.created_at).toLocaleTimeString(),humedad:r.humedad_suelo??r.humedad??null,temperatura:r.temperatura_ambiente??r.temperatura??null}));return e.jsxs("div",{className:"card-modern p-6",children:[e.jsxs("div",{className:"flex justify-between items-center mb-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Monitoreo en Tiempo Real"}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Últimas 24 horas"})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-emerald-500"}),e.jsx("span",{className:"text-xs text-gray-600 dark:text-gray-400",children:"Humedad"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-orange-500"}),e.jsx("span",{className:"text-xs text-gray-600 dark:text-gray-400",children:"Temperatura"})]})]})]}),a.length===0?e.jsx("div",{className:"h-80 flex items-center justify-center text-sm text-gray-500 dark:text-gray-400",children:"Sin mediciones para esta zona"}):e.jsx(Ee,{width:"100%",height:320,children:e.jsxs(Ae,{data:a,children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"humedadGradient",x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"5%",stopColor:"#10b981",stopOpacity:.3}),e.jsx("stop",{offset:"95%",stopColor:"#10b981",stopOpacity:0})]})}),e.jsx(Me,{strokeDasharray:"3 3",stroke:"#374151",opacity:.1}),e.jsx($e,{dataKey:"time",tick:{fontSize:12}}),e.jsx(ie,{yAxisId:"left",tick:{fontSize:12},domain:[0,100]}),e.jsx(ie,{yAxisId:"right",orientation:"right",tick:{fontSize:12},domain:[0,50]}),e.jsx(Re,{contentStyle:{backgroundColor:"rgba(0,0,0,0.8)",borderRadius:"8px",border:"none",color:"white"}}),e.jsx(Oe,{type:"monotone",dataKey:"humedad",stroke:"#10b981",strokeWidth:2,fill:"url(#humedadGradient)",yAxisId:"left"}),e.jsx(ze,{type:"monotone",dataKey:"temperatura",stroke:"#f97316",strokeWidth:2,dot:!1,yAxisId:"right"})]})})]})}let D=null,$=18,q=-1,F=!1,T=[];const Ce=(...t)=>{},V=(t,a)=>Number((Math.random()*(a-t)+t).toFixed(1)),Xt=()=>{if(T.length<3)return{valor:$,tendencia:"estable",confianza:"baja"};const t=T.slice(-5);t.reduce((g,p)=>g+p,0)/t.length;const r=t.map((g,p)=>p),i=t,n=r.length,o=r.reduce((g,p)=>g+p,0),s=i.reduce((g,p)=>g+p,0),c=r.reduce((g,p,f)=>g+p*i[f],0),m=r.reduce((g,p)=>g+p*p,0),u=(n*c-o*s)/(n*m-o*o);let h=t[t.length-1]+u*1.5;h=Math.max(8,Math.min(32,h));let d="estable";u>.3?d="subiendo":u<-.3&&(d="bajando");let x="media";return T.length>10?x="alta":T.length<5&&(x="baja"),{valor:Number(h.toFixed(1)),tendencia:d,confianza:x,pendiente:Number(u.toFixed(2))}},Jt=async(t,a,r,i)=>{if(r.valor<i&&r.tendencia==="bajando"){const{data:n}=await j.from("alertas").select("id").eq("zona_id",t).eq("tipo","predictiva").gte("created_at",new Date(Date.now()-36e5).toISOString()).limit(1);(!n||n.length===0)&&(await j.from("alertas").insert({user_id:a,zona_id:t,tipo:"predictiva",severidad:"media",titulo:"🔮 Alerta Predictiva",mensaje:`Se estima que la humedad descenderá a ${r.valor}% en las próximas horas (Tendencia: ${r.tendencia}).`}),Ce(`🔔 Alerta predictiva: Humedad estimada en ${r.valor}%`))}},ue=async(t,a)=>{if(!t)return;q===-1?$-=V(.1,.4):$+=V(.3,.8),$=Math.max(8,Math.min(32,$)),Math.random()<.08&&(q=q*-1),T.push($),T.length>20&&T.shift();const r=new Date().getHours(),i=Math.sin((r-12)*Math.PI/12)*3,n=V(6+i,14+i),o=Xt(),s=(a==null?void 0:a.umbral_humedad_min)??15;a!=null&&a.user_id&&await Jt(t,a.user_id,o,s);let c=!1;(a==null?void 0:a.modo_automatico)!==!1&&$<s&&!F&&(c=!0,F=!0,q=1,setTimeout(()=>{F=!1,q=-1},((a==null?void 0:a.tiempo_riego_segundos)??180)*1e3));const{error:u}=await j.from("mediciones").insert({zona_id:t,humedad_suelo:$,temperatura_ambiente:n,riego_activo:c||F});if(!u){const h=$<s?"⚠️ SECO":"✅ NORMAL";Ce(`📊 ${h} | H:${$.toFixed(1)}% | T:${n.toFixed(1)}C | Riego:${c||F?"ON":"OFF"} | 🔮 Pred:${o.valor}% (${o.tendencia})`)}},Kt=async(t,a)=>{if(D&&(clearInterval(D),D=null),!t)return;const{data:r}=await j.from("configuracion_zona").select("*").eq("zona_id",t).maybeSingle();$=V(12,22),q=-1,F=!1,T=[],await ue(t,{...r,user_id:a}),D=setInterval(async()=>{const{data:i}=await j.from("configuracion_zona").select("*").eq("zona_id",t).maybeSingle();await ue(t,{...i,user_id:a})},3e4)},xe=()=>{D&&(clearInterval(D),D=null)},W={umbral_humedad_min:15,tiempo_riego_segundos:180,modo_automatico:!0},Q=t=>({...W,...t||{}});function Qt({zonaId:t,session:a}){var E;const[r,i]=l.useState(null),[n,o]=l.useState(!0),[s,c]=l.useState(!1),[m,u]=l.useState(!1),[h,d]=l.useState(null),x=l.useRef(null);l.useEffect(()=>()=>{x.current&&clearTimeout(x.current)},[]),l.useEffect(()=>{if(!t){i(W),d(null),u(!1),o(!1),xe();return}return(async()=>{var A;o(!0),i(W),d(null),u(!1);const{data:k,error:y}=await j.from("configuracion_zona").select("*").eq("zona_id",t).maybeSingle();let S=Q(k);if(!k&&!y){const{data:z}=await j.from("configuracion_zona").upsert({zona_id:t,...W},{onConflict:"zona_id"}).select().maybeSingle();S=Q(z)}i(S),t&&((A=a==null?void 0:a.user)!=null&&A.id)&&await Kt(t,a.user.id);const{data:N}=await j.from("mediciones").select("*").eq("zona_id",t).order("created_at",{ascending:!1}).limit(1);N&&N.length>0&&(d(N[0]),u(N[0].riego_activo||!1)),o(!1)})(),()=>{xe()}},[t,(E=a==null?void 0:a.user)==null?void 0:E.id]);const g=async()=>{if(!t||!r)return;c(!0);const b={zona_id:t,umbral_humedad_min:r.umbral_humedad_min,tiempo_riego_segundos:r.tiempo_riego_segundos,modo_automatico:r.modo_automatico,updated_at:new Date().toISOString()},{error:k,data:y}=await j.from("configuracion_zona").upsert(b,{onConflict:"zona_id"}).select().maybeSingle();k?M.error("Error al guardar"):(i(Q(y||b)),M.success("Configuracion guardada",{icon:"💾",duration:3e3})),c(!1)},p=async()=>{if(m){M.info("El riego ya esta activo");return}const{data:b}=await j.from("mediciones").select("id").eq("zona_id",t).order("created_at",{ascending:!1}).limit(1);if(!b||b.length===0){M.error("Aun no hay mediciones para esta zona");return}const k=b[0].id,y=(r==null?void 0:r.tiempo_riego_segundos)??180,{error:S}=await j.from("mediciones").update({riego_activo:!0}).eq("id",k);if(S){M.error("Error al activar el riego");return}u(!0),d(N=>(N==null?void 0:N.id)===k?{...N,riego_activo:!0}:N),M.success(`Riego activado por ${y}s`,{icon:"💧",duration:4e3}),x.current&&clearTimeout(x.current),x.current=setTimeout(async()=>{await j.from("mediciones").update({riego_activo:!1}).eq("id",k),u(!1),d(N=>(N==null?void 0:N.id)===k?{...N,riego_activo:!1}:N),M.success("Riego finalizado",{icon:"🌱",duration:3e3}),x.current=null},y*1e3)};if(!t)return e.jsxs("div",{className:"card-modern p-12 text-center",children:[e.jsx(re,{className:"w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4"}),e.jsx("p",{className:"text-gray-500 dark:text-gray-400",children:"Selecciona una zona para controlar el riego"})]});if(n)return e.jsx("div",{className:"card-modern p-12 text-center",children:e.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mx-auto"})});const f=(h==null?void 0:h.humedad_suelo)??18,C=(r==null?void 0:r.umbral_humedad_min)??15,v=f<C;return e.jsxs("div",{className:"card-modern overflow-hidden",children:[e.jsxs("div",{className:"gradient-primary px-6 py-4",children:[e.jsxs("h3",{className:"text-white font-semibold flex items-center gap-2",children:[e.jsx(re,{className:"w-5 h-5"}),"Panel de Control Inteligente"]}),e.jsx("p",{className:"text-white/80 text-sm mt-1",children:"Gestion avanzada del sistema de riego"})]}),e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"grid grid-cols-3 gap-4 mb-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 mb-1",children:"Humedad"}),e.jsxs("p",{className:`text-2xl font-bold ${v?"text-red-500":"text-emerald-500"}`,children:[f,"%"]}),v&&e.jsx("p",{className:"text-xs text-red-500",children:"Critica"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 mb-1",children:"Riego"}),e.jsx("p",{className:`text-2xl font-bold ${m?"text-emerald-500":"text-gray-500"}`,children:m?"ON":"OFF"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 mb-1",children:"Modo"}),e.jsx("p",{className:"text-2xl font-bold text-blue-500",children:r!=null&&r.modo_automatico?"🤖":"👆"})]})]}),v&&!m&&(r==null?void 0:r.modo_automatico)&&e.jsx("div",{className:"mb-4 p-3 bg-amber-50 dark:bg-amber-900/30 rounded-xl border-l-4 border-amber-500",children:e.jsxs("p",{className:"text-sm text-amber-700 dark:text-amber-400",children:["⚠️ Humedad baja (",f,"%). El sistema activara el riego."]})}),e.jsxs("button",{onClick:p,disabled:m,className:`w-full mb-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${m?"bg-gray-200 dark:bg-gray-700 text-gray-500 cursor-not-allowed":"bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:shadow-lg hover:scale-105"}`,children:[m?e.jsx(Lt,{className:"w-5 h-5"}):e.jsx(It,{className:"w-5 h-5"}),m?"RIEGO ACTIVO":"ACTIVAR RIEGO MANUAL"]}),e.jsxs("div",{className:"border-t border-gray-200 dark:border-gray-700 pt-6",children:[e.jsxs("h4",{className:"font-semibold text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-2",children:[e.jsx(Pt,{className:"w-4 h-4"}),"Configuracion Avanzada"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-sm mb-2",children:[e.jsx("span",{className:"text-gray-600 dark:text-gray-400",children:"Umbral de humedad"}),e.jsxs("span",{className:"font-medium text-emerald-600 dark:text-emerald-400",children:[r==null?void 0:r.umbral_humedad_min,"%"]})]}),e.jsx("input",{type:"range",min:"8",max:"25",step:"1",value:(r==null?void 0:r.umbral_humedad_min)??15,onChange:b=>i({...r,umbral_humedad_min:parseInt(b.target.value)}),className:"w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"}),e.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Recomendado: 12-18% para La Paz"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-sm mb-2",children:[e.jsx("span",{className:"text-gray-600 dark:text-gray-400",children:"Duracion del riego"}),e.jsxs("span",{className:"font-medium text-emerald-600 dark:text-emerald-400",children:[r==null?void 0:r.tiempo_riego_segundos,"s"]})]}),e.jsx("input",{type:"range",min:"60",max:"300",step:"10",value:(r==null?void 0:r.tiempo_riego_segundos)??180,onChange:b=>i({...r,tiempo_riego_segundos:parseInt(b.target.value)}),className:"w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"})]}),e.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-gray-700 dark:text-gray-300",children:"Modo Automatico"}),e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:r!=null&&r.modo_automatico?"Control IA activado":"Control manual requerido"})]}),e.jsx("button",{onClick:()=>i({...r,modo_automatico:!(r!=null&&r.modo_automatico)}),className:`relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-300 ${r!=null&&r.modo_automatico?"bg-emerald-500":"bg-gray-400"}`,children:e.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition-all duration-300 ${r!=null&&r.modo_automatico?"translate-x-6":"translate-x-1"}`})})]}),e.jsx("button",{onClick:g,disabled:s,className:"w-full mt-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-2 rounded-xl font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 disabled:opacity-50",children:s?"Guardando...":"💾 Guardar Cambios"})]})]})]})]})}function ea({zonaId:t}){const[a,r]=l.useState(null),[i,n]=l.useState(!0),[o,s]=l.useState("");return l.useEffect(()=>{if(!t){r(null),n(!1),s("");return}const c=async()=>{try{n(!0),s("");const{data:u,error:h}=await j.from("mediciones").select("humedad_suelo, created_at").eq("zona_id",t).order("created_at",{ascending:!1}).limit(10);if(h)throw h;const d=(u||[]).map(x=>x.humedad_suelo??x.humedad).filter(Number.isFinite).reverse();if(d.length>=3){const x=d.slice(-5),g=(x[x.length-1]-x[0])/Math.max(1,x.length-1);let p="estable";g>.2?p="subiendo":g<-.2&&(p="bajando");const f=d[d.length-1];let C=f+g*2;C=Math.max(8,Math.min(32,C));const{data:v}=await j.from("configuracion_zona").select("umbral_humedad_min").eq("zona_id",t).maybeSingle(),E=(v==null?void 0:v.umbral_humedad_min)??15;r({actual:Number(f.toFixed(1)),valor:Number(C.toFixed(1)),tendencia:p,pendiente:Number(g.toFixed(2)),esCritica:C<E,confianza:u.length>=8?"alta":"media"})}else r(null),s("Se necesitan al menos 3 mediciones para predecir")}catch(u){console.error("Error en predicción:",u),r(null),s("No se pudo calcular la prediccion")}finally{n(!1)}};c();const m=setInterval(c,3e4);return()=>clearInterval(m)},[t]),t?i?e.jsx("div",{className:"card-modern p-4",children:e.jsxs("div",{className:"animate-pulse flex items-center gap-3",children:[e.jsx(K,{className:"w-8 h-8 text-gray-300"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"h-3 bg-gray-200 rounded w-24 mb-2"}),e.jsx("div",{className:"h-4 bg-gray-200 rounded w-16"})]})]})}):a?e.jsxs("div",{className:"card-modern p-4 border-l-4 border-purple-500",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2 rounded-xl bg-purple-100 dark:bg-purple-900/30",children:e.jsx(K,{className:"w-5 h-5 text-purple-600 dark:text-purple-400"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-gray-500 dark:text-gray-400",children:"Predicción IA"}),e.jsxs("div",{className:"flex items-baseline gap-2",children:[e.jsxs("p",{className:"text-2xl font-bold",children:[a.valor,"%"]}),e.jsx("span",{className:"text-xs text-gray-400",children:"en 1-2 horas"})]}),e.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[a.tendencia==="subiendo"?e.jsx(Ht,{className:"w-3 h-3 text-green-500"}):a.tendencia==="bajando"?e.jsx(Zt,{className:"w-3 h-3 text-red-500"}):null,e.jsxs("span",{className:"text-xs text-gray-500",children:["Tendencia: ",a.tendencia," (",a.pendiente>0?"+":"",a.pendiente,"%/hora)"]})]})]})]}),a.esCritica&&e.jsxs("div",{className:"flex items-center gap-1 px-2 py-1 rounded-lg bg-red-100 dark:bg-red-900/30",children:[e.jsx(we,{className:"w-3 h-3 text-red-500"}),e.jsx("span",{className:"text-xs font-medium text-red-600 dark:text-red-400",children:"Alerta preventiva"})]}),e.jsx("div",{className:"text-right",children:e.jsxs("span",{className:`text-xs px-2 py-1 rounded-full ${a.confianza==="alta"?"bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400":"bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"}`,children:["Confianza: ",a.confianza]})})]}),a.esCritica&&e.jsx("div",{className:"mt-3 p-2 rounded-lg bg-amber-50 dark:bg-amber-900/20 text-xs text-amber-700 dark:text-amber-400",children:"⚠️ Se recomienda preparar el riego. La humedad podría bajar del umbral crítico."})]}):e.jsx("div",{className:"card-modern p-4",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2 rounded-xl bg-purple-100 dark:bg-purple-900/30",children:e.jsx(K,{className:"w-5 h-5 text-purple-600 dark:text-purple-400"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-gray-500 dark:text-gray-400",children:"Predicción IA"}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:o||"Sin datos suficientes"})]})]})}):null}function ta({humedad:t,temperatura:a,riegoActivo:r,modoAutomatico:i,umbral:n}){const o=(s,c="")=>Number.isFinite(s)?`${s}${c}`:"Sin datos";return e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8",children:[e.jsx("h2",{className:"text-xl font-bold mb-4",children:"Panel de Estadísticas"}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-gray-500 text-sm",children:"Humedad"}),e.jsx("p",{className:"text-2xl font-bold",children:o(t,"%")})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-gray-500 text-sm",children:"Temperatura"}),e.jsx("p",{className:"text-2xl font-bold",children:o(a,"°C")})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-gray-500 text-sm",children:"Riego"}),e.jsx("p",{className:"text-2xl font-bold",children:r?"ON":"OFF"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-gray-500 text-sm",children:"Modo"}),e.jsx("p",{className:"text-2xl font-bold",children:i?"Auto":"Manual"})]})]})]})}const pe="250172dc6a573b60b5b417e469eb56d4",aa=-16.5,ra=-68.15;function sa(){var m,u,h;const[t,a]=l.useState(null),[r,i]=l.useState(!0),[n,o]=l.useState(null);if(l.useEffect(()=>{(async()=>{var x;try{const g=`https://api.openweathermap.org/data/2.5/weather?lat=${aa}&lon=${ra}&appid=${pe}&units=metric&lang=es`,p=await fetch(g);if(!p.ok)throw new Error("No se pudo cargar el clima");const f=await p.json();if(!(f!=null&&f.main)||!((x=f==null?void 0:f.weather)!=null&&x.length))throw new Error("Respuesta de clima invalida");a(f)}catch(g){o(g.message)}finally{i(!1)}})()},[]),r)return e.jsx("div",{className:"card-modern p-4 text-center",children:"Cargando clima..."});if(n)return e.jsxs("div",{className:"card-modern p-4 text-center text-red-500",children:["Error: ",n]});if(!t)return null;const s=Math.round((((m=t.wind)==null?void 0:m.speed)||0)*3.6),c=()=>{var x,g;const d=(g=(x=t.weather)==null?void 0:x[0])==null?void 0:g.main;return d==="Rain"?e.jsx(Ot,{className:"w-8 h-8 text-blue-500"}):d==="Clouds"?e.jsx(zt,{className:"w-8 h-8 text-gray-500"}):e.jsx(Dt,{className:"w-8 h-8 text-yellow-500"})};return e.jsx("div",{className:"card-modern p-4",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[c(),e.jsxs("div",{children:[e.jsxs("p",{className:"text-2xl font-bold",children:[Math.round(t.main.temp),"°C"]}),e.jsx("p",{className:"text-xs text-gray-500 capitalize",children:(h=(u=t.weather)==null?void 0:u[0])==null?void 0:h.description})]})]}),e.jsxs("div",{className:"text-right text-xs",children:[e.jsxs("p",{className:"flex items-center justify-end gap-1",children:[e.jsx(_e,{className:"w-3 h-3"})," ",t.main.humidity,"%"]}),e.jsxs("p",{className:"flex items-center justify-end gap-1 mt-1",children:[e.jsx(Yt,{className:"w-3 h-3"})," ",s," km/h"]})]})]})})}const ia={umbral_humedad_min:15,tiempo_riego_segundos:180,modo_automatico:!0};function na({session:t}){const[a,r]=l.useState([]),[i,n]=l.useState([]),[o,s]=l.useState(!0),[c,m]=l.useState(!1),[u,h]=l.useState(null),[d,x]=l.useState({nombre:"",tipo_cultivo:"",area_metros:""}),g=l.useCallback(async()=>{s(!0);const{data:y,error:S}=await j.from("zonas").select("*").eq("user_id",t.user.id).order("created_at",{ascending:!1});if(S){M.error("Error al cargar las zonas"),r([]),h(null),s(!1);return}const N=y||[];r(N),h(A=>N.length?N.some(z=>z.id===A)?A:N[0].id:null),s(!1)},[t.user.id]),p=l.useCallback(async()=>{if(!u){n([]);return}const{data:y,error:S}=await j.from("mediciones").select("*").eq("zona_id",u).order("created_at",{ascending:!1}).limit(50);if(S){M.error("Error al cargar las mediciones");return}n(y||[])},[u]);l.useEffect(()=>{g()},[g]),l.useEffect(()=>{p();const y=setInterval(p,3e4);return()=>clearInterval(y)},[p]);const f=async y=>{y.preventDefault();const S=Number.parseFloat(d.area_metros),{error:N,data:A}=await j.from("zonas").insert({user_id:t.user.id,nombre:d.nombre,tipo_cultivo:d.tipo_cultivo,area_metros:Number.isFinite(S)&&S>0?S:null}).select().maybeSingle();!N&&A?(await j.from("configuracion_zona").upsert({zona_id:A.id,...ia},{onConflict:"zona_id"}),m(!1),x({nombre:"",tipo_cultivo:"",area_metros:""}),r(z=>[A,...z.filter(J=>J.id!==A.id)]),h(A.id),M.success(`🌱 Zona "${d.nombre}" creada correctamente`,{icon:"✅",duration:3e3,style:{background:"#10b981",color:"#fff"}})):M.error("❌ Error al crear la zona",{duration:4e3,style:{background:"#ef4444",color:"#fff"}})},C=async(y,S)=>{var N;if(window.confirm(`¿Eliminar la zona "${S}"? Se borrarán todas sus mediciones y configuraciones.`)){const{error:A}=await j.from("zonas").delete().eq("id",y);if(A)M.error("❌ Error al eliminar la zona",{duration:4e3,style:{background:"#ef4444",color:"#fff"}});else{const z=a.filter(J=>J.id!==y);r(z),u===y&&h(((N=z[0])==null?void 0:N.id)||null),M.success(`🗑️ Zona "${S}" eliminada correctamente`,{icon:"✅",duration:3e3,style:{background:"#10b981",color:"#fff"}})}}},v=i[0]||null,E=(v==null?void 0:v.humedad_suelo)??(v==null?void 0:v.humedad)??null,b=(v==null?void 0:v.temperatura_ambiente)??(v==null?void 0:v.temperatura)??null,k=(v==null?void 0:v.riego_activo)||!1;return o?e.jsx("div",{className:"flex items-center justify-center h-64",children:e.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500"})}):e.jsxs("div",{children:[e.jsx(ta,{humedad:E,temperatura:b,riegoActivo:k,modoAutomatico:!0,umbral:15}),e.jsx("div",{className:"mb-6",children:e.jsx(sa,{})}),e.jsx("div",{className:"mb-6",children:e.jsx(ea,{zonaId:u})}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8",children:[e.jsxs("div",{className:"card-modern p-4",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsxs("h3",{className:"font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2",children:[e.jsx(ce,{className:"w-4 h-4"}),"Mis Zonas"]}),e.jsx("button",{onClick:()=>m(!0),className:"p-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-200 transition",children:e.jsx(Tt,{className:"w-4 h-4"})})]}),e.jsxs("div",{className:"space-y-2 max-h-96 overflow-y-auto",children:[a.map(y=>e.jsx("div",{onClick:()=>h(y.id),className:`p-3 rounded-xl cursor-pointer transition-all duration-200 ${u===y.id?"bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-l-4 border-emerald-500":"hover:bg-gray-50 dark:hover:bg-gray-800"}`,children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-gray-800 dark:text-gray-200",children:y.nombre}),y.tipo_cultivo&&e.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:y.tipo_cultivo}),y.area_metros&&e.jsxs("p",{className:"text-xs text-gray-400 dark:text-gray-500",children:[y.area_metros," m²"]})]}),e.jsx("button",{onClick:S=>{S.stopPropagation(),C(y.id,y.nombre)},className:"p-1 rounded-lg text-gray-400 hover:text-red-500 transition",children:e.jsx(Ft,{className:"w-4 h-4"})})]})},y.id)),a.length===0&&e.jsxs("div",{className:"text-center py-8 text-gray-500 dark:text-gray-400",children:[e.jsx(ce,{className:"w-12 h-12 mx-auto mb-2 opacity-50"}),e.jsx("p",{className:"text-sm",children:"No hay zonas creadas"}),e.jsx("button",{onClick:()=>m(!0),className:"mt-2 text-emerald-600 text-sm hover:underline",children:"Crear primera zona"})]})]}),e.jsxs("div",{className:"mt-4 pt-3 border-t border-gray-200 dark:border-gray-700",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs text-gray-500 dark:text-gray-400",children:"🤖 Simulador IA:"}),e.jsx("span",{className:"text-xs px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400",children:"🟢 Activo"})]}),e.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Predicción activa | Datos cada 30s"})]})]}),e.jsx("div",{className:"lg:col-span-2",children:e.jsx(Qt,{zonaId:u,session:t})})]}),e.jsx(Gt,{mediciones:i}),e.jsx(Bt,{session:t,zonaId:u}),c&&e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-md",children:[e.jsx("h3",{className:"text-xl font-bold mb-4 text-gray-800 dark:text-white",children:"Nueva Zona de Riego"}),e.jsxs("form",{onSubmit:f,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2",children:"Nombre *"}),e.jsx("input",{type:"text",required:!0,value:d.nombre,onChange:y=>x({...d,nombre:y.target.value}),className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white",placeholder:"Ej: Huerta Principal"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2",children:"Tipo de Cultivo"}),e.jsx("input",{type:"text",value:d.tipo_cultivo,onChange:y=>x({...d,tipo_cultivo:y.target.value}),className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white",placeholder:"Ej: Tomates, Lechugas"})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{className:"block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2",children:"Área (m²)"}),e.jsx("input",{type:"number",step:"0.1",value:d.area_metros,onChange:y=>x({...d,area_metros:y.target.value}),className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white",placeholder:"50"})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("button",{type:"button",onClick:()=>m(!1),className:"flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition",children:"Cancelar"}),e.jsx("button",{type:"submit",className:"flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-lg hover:from-emerald-600 hover:to-teal-700 transition",children:"Crear Zona"})]})]})]})})]})}function oa(){const[t,a]=l.useState(null),[r,i]=l.useState(!0),[n,o]=l.useState(!0),[s,c]=l.useState(()=>localStorage.getItem("theme")==="dark"),[m,u]=l.useState(""),[h,d]=l.useState(""),[x,g]=l.useState(""),[p,f]=l.useState("");l.useEffect(()=>{s?(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light"))},[s]),l.useEffect(()=>{j.auth.getSession().then(({data:{session:k}})=>{a(k),i(!1)});const{data:{subscription:b}}=j.auth.onAuthStateChange((k,y)=>{a(y)});return()=>b.unsubscribe()},[]);const C=async b=>{b.preventDefault(),f("");const{error:k}=await j.auth.signInWithPassword({email:m,password:h});k?(f(k.message),w.error("❌ Credenciales incorrectas",{duration:3e3,style:{background:"#ef4444",color:"#fff"}})):w.success("✅ ¡Bienvenido de vuelta!",{duration:3e3,icon:"🌱",style:{background:"#10b981",color:"#fff"}})},v=async b=>{b.preventDefault(),f("");const{error:k}=await j.auth.signUp({email:m,password:h,options:{data:{nombre:x}}});k?(f(k.message),w.error("❌ Error al registrarse: "+k.message,{duration:4e3,style:{background:"#ef4444",color:"#fff"}})):(w.success("✅ ¡Registro exitoso! Revisa tu correo para confirmar",{duration:5e3,icon:"📧",style:{background:"#10b981",color:"#fff"}}),o(!0),u(""),d(""),g(""))},E=async()=>{await j.auth.signOut(),w.success("👋 Sesión cerrada correctamente",{duration:2e3,icon:"🌱",style:{background:"#10b981",color:"#fff"}})};return r?e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mx-auto"}),e.jsx("p",{className:"mt-4 text-gray-600 dark:text-gray-400",children:"Cargando..."})]})}):t?e.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300",children:[e.jsx(le,{position:"top-right",reverseOrder:!1,gutter:8,toastOptions:{duration:3e3,style:{background:"#363636",color:"#fff",borderRadius:"12px",padding:"12px 16px",fontSize:"14px",fontWeight:"500"},success:{iconTheme:{primary:"#10b981",secondary:"#fff"}},error:{iconTheme:{primary:"#ef4444",secondary:"#fff"}}}}),e.jsx("nav",{className:"bg-white dark:bg-gray-800 shadow-md p-4 sticky top-0 z-50",children:e.jsxs("div",{className:"max-w-7xl mx-auto flex justify-between items-center",children:[e.jsx("h1",{className:"text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent",children:"🌱 AgroControl"}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("button",{onClick:()=>c(!s),className:"p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition",children:s?"☀️":"🌙"}),e.jsx("span",{className:"text-gray-600 dark:text-gray-300 hidden sm:inline",children:t.user.email}),e.jsx("button",{onClick:E,className:"bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition",children:"Cerrar Sesión"})]})]})}),e.jsx("main",{className:"max-w-7xl mx-auto p-4 sm:p-6 lg:p-8",children:e.jsx(na,{session:t})})]}):e.jsxs("div",{className:`min-h-screen flex items-center justify-center transition-colors duration-300 ${s?"bg-gray-900":"bg-gradient-to-br from-emerald-50 to-teal-50"}`,children:[e.jsx(le,{position:"top-center",toastOptions:{duration:4e3,style:{borderRadius:"12px",padding:"12px 16px"}}}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 w-full max-w-md transition-colors duration-300",children:[e.jsxs("div",{className:"text-center mb-8",children:[e.jsx("div",{className:"text-5xl mb-4",children:"🌱"}),e.jsx("h1",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:"AgroControl"}),e.jsx("p",{className:"text-gray-500 dark:text-gray-400 mt-2",children:n?"Inicia sesión en tu cuenta":"Crea una cuenta nueva"})]}),e.jsx("div",{className:"flex justify-end mb-4",children:e.jsx("button",{onClick:()=>c(!s),className:"p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition",children:s?"☀️ Modo claro":"🌙 Modo oscuro"})}),p&&e.jsx("div",{className:"bg-red-100 dark:bg-red-900/30 border border-red-400 text-red-700 dark:text-red-400 px-4 py-2 rounded mb-4 text-sm",children:p}),e.jsxs("form",{onSubmit:n?C:v,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2",children:"Correo Electrónico"}),e.jsx("input",{type:"email",value:m,onChange:b=>u(b.target.value),className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white",placeholder:"tu@email.com",required:!0})]}),!n&&e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2",children:"Nombre"}),e.jsx("input",{type:"text",value:x,onChange:b=>g(b.target.value),className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white",placeholder:"Tu nombre",required:!0})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{className:"block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2",children:"Contraseña"}),e.jsx("input",{type:"password",value:h,onChange:b=>d(b.target.value),className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-white",placeholder:"••••••••",required:!0})]}),e.jsx("button",{type:"submit",className:"w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold py-2 px-4 rounded-lg hover:from-emerald-600 hover:to-teal-700 transition duration-200",children:n?"Iniciar Sesión":"Registrarse"})]}),e.jsx("div",{className:"mt-6 text-center",children:e.jsx("button",{onClick:()=>{o(!n),f(""),u(""),d(""),g("")},className:"text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 text-sm",children:n?"¿No tienes cuenta? Regístrate":"¿Ya tienes cuenta? Inicia sesión"})})]})]})}ee.createRoot(document.getElementById("root")).render(e.jsx(Le.StrictMode,{children:e.jsx(oa,{})}));
