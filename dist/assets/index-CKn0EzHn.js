const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AuthView-22UnfhwN.js","assets/AuthView-D9g32PSc.css","assets/HomeView-BdEQE_rs.js","assets/ConvoItem-DMxsAJD6.js","assets/ConvoItem-u5u_IdF3.css","assets/HomeView-FmjVoV7Z.css","assets/ChatsView-BD3-i_uw.js","assets/ChatsView-BCVOROGw.css","assets/ProfileView-B9juooVk.js","assets/ProfileView-BszYxaRG.css","assets/UsersView-DHCFb90C.js","assets/UsersView-vE2cvnWW.css","assets/AdminView-B7JscFKQ.js","assets/AdminView-UxWs-Z-7.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function lf(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ye={},wr=[],Qn=()=>{},wv=()=>!1,Qc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Yc=t=>t.startsWith("onUpdate:"),Ct=Object.assign,cf=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},gA=Object.prototype.hasOwnProperty,qe=(t,e)=>gA.call(t,e),de=Array.isArray,Tr=t=>Wa(t)==="[object Map]",eo=t=>Wa(t)==="[object Set]",r_=t=>Wa(t)==="[object Date]",we=t=>typeof t=="function",lt=t=>typeof t=="string",bn=t=>typeof t=="symbol",We=t=>t!==null&&typeof t=="object",Tv=t=>(We(t)||we(t))&&we(t.then)&&we(t.catch),Iv=Object.prototype.toString,Wa=t=>Iv.call(t),_A=t=>Wa(t).slice(8,-1),Cv=t=>Wa(t)==="[object Object]",Xc=t=>lt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Qo=lf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Jc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},mA=/-\w/g,on=Jc(t=>t.replace(mA,e=>e.slice(1).toUpperCase())),yA=/\B([A-Z])/g,pi=Jc(t=>t.replace(yA,"-$1").toLowerCase()),Zc=Jc(t=>t.charAt(0).toUpperCase()+t.slice(1)),fh=Jc(t=>t?`on${Zc(t)}`:""),Kn=(t,e)=>!Object.is(t,e),Hl=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Av=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},eu=t=>{const e=parseFloat(t);return isNaN(e)?t:e},vA=t=>{const e=lt(t)?Number(t):NaN;return isNaN(e)?t:e};let o_;const tu=()=>o_||(o_=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ha(t){if(de(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=lt(s)?IA(s):Ha(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(lt(t)||We(t))return t}const EA=/;(?![^(]*\))/g,wA=/:([^]+)/,TA=/\/\*[^]*?\*\//g;function IA(t){const e={};return t.replace(TA,"").split(EA).forEach(n=>{if(n){const s=n.split(wA);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ot(t){let e="";if(lt(t))e=t;else if(de(t))for(let n=0;n<t.length;n++){const s=Ot(t[n]);s&&(e+=s+" ")}else if(We(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const CA="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",AA=lf(CA);function Rv(t){return!!t||t===""}function RA(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=ri(t[s],e[s]);return n}function ri(t,e){if(t===e)return!0;let n=r_(t),s=r_(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=bn(t),s=bn(e),n||s)return t===e;if(n=de(t),s=de(e),n||s)return n&&s?RA(t,e):!1;if(n=We(t),s=We(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!ri(t[o],e[o]))return!1}}return String(t)===String(e)}function uf(t,e){return t.findIndex(n=>ri(n,e))}const bv=t=>!!(t&&t.__v_isRef===!0),ot=t=>lt(t)?t:t==null?"":de(t)||We(t)&&(t.toString===Iv||!we(t.toString))?bv(t)?ot(t.value):JSON.stringify(t,Sv,2):String(t),Sv=(t,e)=>bv(e)?Sv(t,e.value):Tr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[ph(s,r)+" =>"]=i,n),{})}:eo(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ph(n))}:bn(e)?ph(e):We(e)&&!de(e)&&!Cv(e)?String(e):e,ph=(t,e="")=>{var n;return bn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Wt;class Pv{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Wt,!e&&Wt&&(this.index=(Wt.scopes||(Wt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Wt;try{return Wt=this,e()}finally{Wt=n}}}on(){++this._on===1&&(this.prevScope=Wt,Wt=this)}off(){this._on>0&&--this._on===0&&(Wt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function kv(t){return new Pv(t)}function Nv(){return Wt}function bA(t,e=!1){Wt&&Wt.cleanups.push(t)}let Ze;const gh=new WeakSet;class xv{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Wt&&Wt.active&&Wt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,gh.has(this)&&(gh.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Dv(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,a_(this),Mv(this);const e=Ze,n=Dn;Ze=this,Dn=!0;try{return this.fn()}finally{Lv(this),Ze=e,Dn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ff(e);this.deps=this.depsTail=void 0,a_(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?gh.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Jh(this)&&this.run()}get dirty(){return Jh(this)}}let Ov=0,Yo,Xo;function Dv(t,e=!1){if(t.flags|=8,e){t.next=Xo,Xo=t;return}t.next=Yo,Yo=t}function hf(){Ov++}function df(){if(--Ov>0)return;if(Xo){let e=Xo;for(Xo=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Yo;){let e=Yo;for(Yo=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Mv(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Lv(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),ff(s),SA(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function Jh(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Vv(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Vv(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ma)||(t.globalVersion=ma,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Jh(t))))return;t.flags|=2;const e=t.dep,n=Ze,s=Dn;Ze=t,Dn=!0;try{Mv(t);const i=t.fn(t._value);(e.version===0||Kn(i,t._value))&&(t.flags|=128,t._value=i,e.version++)}catch(i){throw e.version++,i}finally{Ze=n,Dn=s,Lv(t),t.flags&=-3}}function ff(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)ff(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function SA(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Dn=!0;const Fv=[];function As(){Fv.push(Dn),Dn=!1}function Rs(){const t=Fv.pop();Dn=t===void 0?!0:t}function a_(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ze;Ze=void 0;try{e()}finally{Ze=n}}}let ma=0;class PA{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class pf{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ze||!Dn||Ze===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ze)n=this.activeLink=new PA(Ze,this),Ze.deps?(n.prevDep=Ze.depsTail,Ze.depsTail.nextDep=n,Ze.depsTail=n):Ze.deps=Ze.depsTail=n,Uv(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=Ze.depsTail,n.nextDep=void 0,Ze.depsTail.nextDep=n,Ze.depsTail=n,Ze.deps===n&&(Ze.deps=s)}return n}trigger(e){this.version++,ma++,this.notify(e)}notify(e){hf();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{df()}}}function Uv(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Uv(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ac=new WeakMap,Bi=Symbol(""),Zh=Symbol(""),ya=Symbol("");function Gt(t,e,n){if(Dn&&Ze){let s=ac.get(t);s||ac.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new pf),i.map=s,i.key=n),i.track()}}function hs(t,e,n,s,i,r){const o=ac.get(t);if(!o){ma++;return}const a=c=>{c&&c.trigger()};if(hf(),e==="clear")o.forEach(a);else{const c=de(t),u=c&&Xc(n);if(c&&n==="length"){const h=Number(s);o.forEach((d,p)=>{(p==="length"||p===ya||!bn(p)&&p>=h)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(ya)),e){case"add":c?u&&a(o.get("length")):(a(o.get(Bi)),Tr(t)&&a(o.get(Zh)));break;case"delete":c||(a(o.get(Bi)),Tr(t)&&a(o.get(Zh)));break;case"set":Tr(t)&&a(o.get(Bi));break}}df()}function kA(t,e){const n=ac.get(t);return n&&n.get(e)}function ur(t){const e=De(t);return e===t?e:(Gt(e,"iterate",ya),vn(t)?e:e.map(Fn))}function nu(t){return Gt(t=De(t),"iterate",ya),t}function Hn(t,e){return bs(t)?Or(ws(t)?Fn(e):e):Fn(e)}const NA={__proto__:null,[Symbol.iterator](){return _h(this,Symbol.iterator,t=>Hn(this,t))},concat(...t){return ur(this).concat(...t.map(e=>de(e)?ur(e):e))},entries(){return _h(this,"entries",t=>(t[1]=Hn(this,t[1]),t))},every(t,e){return is(this,"every",t,e,void 0,arguments)},filter(t,e){return is(this,"filter",t,e,n=>n.map(s=>Hn(this,s)),arguments)},find(t,e){return is(this,"find",t,e,n=>Hn(this,n),arguments)},findIndex(t,e){return is(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return is(this,"findLast",t,e,n=>Hn(this,n),arguments)},findLastIndex(t,e){return is(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return is(this,"forEach",t,e,void 0,arguments)},includes(...t){return mh(this,"includes",t)},indexOf(...t){return mh(this,"indexOf",t)},join(t){return ur(this).join(t)},lastIndexOf(...t){return mh(this,"lastIndexOf",t)},map(t,e){return is(this,"map",t,e,void 0,arguments)},pop(){return bo(this,"pop")},push(...t){return bo(this,"push",t)},reduce(t,...e){return l_(this,"reduce",t,e)},reduceRight(t,...e){return l_(this,"reduceRight",t,e)},shift(){return bo(this,"shift")},some(t,e){return is(this,"some",t,e,void 0,arguments)},splice(...t){return bo(this,"splice",t)},toReversed(){return ur(this).toReversed()},toSorted(t){return ur(this).toSorted(t)},toSpliced(...t){return ur(this).toSpliced(...t)},unshift(...t){return bo(this,"unshift",t)},values(){return _h(this,"values",t=>Hn(this,t))}};function _h(t,e,n){const s=nu(t),i=s[e]();return s!==t&&!vn(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.done||(r.value=n(r.value)),r}),i}const xA=Array.prototype;function is(t,e,n,s,i,r){const o=nu(t),a=o!==t&&!vn(t),c=o[e];if(c!==xA[e]){const d=c.apply(t,r);return a?Fn(d):d}let u=n;o!==t&&(a?u=function(d,p){return n.call(this,Hn(t,d),p,t)}:n.length>2&&(u=function(d,p){return n.call(this,d,p,t)}));const h=c.call(o,u,s);return a&&i?i(h):h}function l_(t,e,n,s){const i=nu(t),r=i!==t&&!vn(t);let o=n,a=!1;i!==t&&(r?(a=s.length===0,o=function(u,h,d){return a&&(a=!1,u=Hn(t,u)),n.call(this,u,Hn(t,h),d,t)}):n.length>3&&(o=function(u,h,d){return n.call(this,u,h,d,t)}));const c=i[e](o,...s);return a?Hn(t,c):c}function mh(t,e,n){const s=De(t);Gt(s,"iterate",ya);const i=s[e](...n);return(i===-1||i===!1)&&su(n[0])?(n[0]=De(n[0]),s[e](...n)):i}function bo(t,e,n=[]){As(),hf();const s=De(t)[e].apply(t,n);return df(),Rs(),s}const OA=lf("__proto__,__v_isRef,__isVue"),Bv=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(bn));function DA(t){bn(t)||(t=String(t));const e=De(this);return Gt(e,"has",t),e.hasOwnProperty(t)}class $v{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?WA:Hv:r?Wv:qv).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=de(e);if(!i){let c;if(o&&(c=NA[n]))return c;if(n==="hasOwnProperty")return DA}const a=Reflect.get(e,n,ht(e)?e:s);if((bn(n)?Bv.has(n):OA(n))||(i||Gt(e,"get",n),r))return a;if(ht(a)){const c=o&&Xc(n)?a:a.value;return i&&We(c)?td(c):c}return We(a)?i?td(a):Ga(a):a}}class jv extends $v{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];const o=de(e)&&Xc(n);if(!this._isShallow){const u=bs(r);if(!vn(s)&&!bs(s)&&(r=De(r),s=De(s)),!o&&ht(r)&&!ht(s))return u||(r.value=s),!0}const a=o?Number(n)<e.length:qe(e,n),c=Reflect.set(e,n,s,ht(e)?e:i);return e===De(i)&&(a?Kn(s,r)&&hs(e,"set",n,s):hs(e,"add",n,s)),c}deleteProperty(e,n){const s=qe(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&hs(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!bn(n)||!Bv.has(n))&&Gt(e,"has",n),s}ownKeys(e){return Gt(e,"iterate",de(e)?"length":Bi),Reflect.ownKeys(e)}}class MA extends $v{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const LA=new jv,VA=new MA,FA=new jv(!0);const ed=t=>t,kl=t=>Reflect.getPrototypeOf(t);function UA(t,e,n){return function(...s){const i=this.__v_raw,r=De(i),o=Tr(r),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=i[t](...s),h=n?ed:e?Or:Fn;return!e&&Gt(r,"iterate",c?Zh:Bi),Ct(Object.create(u),{next(){const{value:d,done:p}=u.next();return p?{value:d,done:p}:{value:a?[h(d[0]),h(d[1])]:h(d),done:p}}})}}function Nl(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function BA(t,e){const n={get(i){const r=this.__v_raw,o=De(r),a=De(i);t||(Kn(i,a)&&Gt(o,"get",i),Gt(o,"get",a));const{has:c}=kl(o),u=e?ed:t?Or:Fn;if(c.call(o,i))return u(r.get(i));if(c.call(o,a))return u(r.get(a));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&Gt(De(i),"iterate",Bi),i.size},has(i){const r=this.__v_raw,o=De(r),a=De(i);return t||(Kn(i,a)&&Gt(o,"has",i),Gt(o,"has",a)),i===a?r.has(i):r.has(i)||r.has(a)},forEach(i,r){const o=this,a=o.__v_raw,c=De(a),u=e?ed:t?Or:Fn;return!t&&Gt(c,"iterate",Bi),a.forEach((h,d)=>i.call(r,u(h),u(d),o))}};return Ct(n,t?{add:Nl("add"),set:Nl("set"),delete:Nl("delete"),clear:Nl("clear")}:{add(i){const r=De(this),o=kl(r),a=De(i),c=!e&&!vn(i)&&!bs(i)?a:i;return o.has.call(r,c)||Kn(i,c)&&o.has.call(r,i)||Kn(a,c)&&o.has.call(r,a)||(r.add(c),hs(r,"add",c,c)),this},set(i,r){!e&&!vn(r)&&!bs(r)&&(r=De(r));const o=De(this),{has:a,get:c}=kl(o);let u=a.call(o,i);u||(i=De(i),u=a.call(o,i));const h=c.call(o,i);return o.set(i,r),u?Kn(r,h)&&hs(o,"set",i,r):hs(o,"add",i,r),this},delete(i){const r=De(this),{has:o,get:a}=kl(r);let c=o.call(r,i);c||(i=De(i),c=o.call(r,i)),a&&a.call(r,i);const u=r.delete(i);return c&&hs(r,"delete",i,void 0),u},clear(){const i=De(this),r=i.size!==0,o=i.clear();return r&&hs(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=UA(i,t,e)}),n}function gf(t,e){const n=BA(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(qe(n,i)&&i in s?n:s,i,r)}const $A={get:gf(!1,!1)},jA={get:gf(!1,!0)},qA={get:gf(!0,!1)};const qv=new WeakMap,Wv=new WeakMap,Hv=new WeakMap,WA=new WeakMap;function HA(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function GA(t){return t.__v_skip||!Object.isExtensible(t)?0:HA(_A(t))}function Ga(t){return bs(t)?t:_f(t,!1,LA,$A,qv)}function Gv(t){return _f(t,!1,FA,jA,Wv)}function td(t){return _f(t,!0,VA,qA,Hv)}function _f(t,e,n,s,i){if(!We(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=GA(t);if(r===0)return t;const o=i.get(t);if(o)return o;const a=new Proxy(t,r===2?s:n);return i.set(t,a),a}function ws(t){return bs(t)?ws(t.__v_raw):!!(t&&t.__v_isReactive)}function bs(t){return!!(t&&t.__v_isReadonly)}function vn(t){return!!(t&&t.__v_isShallow)}function su(t){return t?!!t.__v_raw:!1}function De(t){const e=t&&t.__v_raw;return e?De(e):t}function mf(t){return!qe(t,"__v_skip")&&Object.isExtensible(t)&&Av(t,"__v_skip",!0),t}const Fn=t=>We(t)?Ga(t):t,Or=t=>We(t)?td(t):t;function ht(t){return t?t.__v_isRef===!0:!1}function Le(t){return Kv(t,!1)}function KA(t){return Kv(t,!0)}function Kv(t,e){return ht(t)?t:new zA(t,e)}class zA{constructor(e,n){this.dep=new pf,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:De(e),this._value=n?e:Fn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||vn(e)||bs(e);e=s?e:De(e),Kn(e,n)&&(this._rawValue=e,this._value=s?e:Fn(e),this.dep.trigger())}}function Ce(t){return ht(t)?t.value:t}const QA={get:(t,e,n)=>e==="__v_raw"?t:Ce(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return ht(i)&&!ht(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function zv(t){return ws(t)?t:new Proxy(t,QA)}function YA(t){const e=de(t)?new Array(t.length):{};for(const n in t)e[n]=JA(t,n);return e}class XA{constructor(e,n,s){this._object=e,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0,this._key=bn(n)?n:String(n),this._raw=De(e);let i=!0,r=e;if(!de(e)||bn(this._key)||!Xc(this._key))do i=!su(r)||vn(r);while(i&&(r=r.__v_raw));this._shallow=i}get value(){let e=this._object[this._key];return this._shallow&&(e=Ce(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&ht(this._raw[this._key])){const n=this._object[this._key];if(ht(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return kA(this._raw,this._key)}}function JA(t,e,n){return new XA(t,e,n)}class ZA{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new pf(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ma-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Ze!==this)return Dv(this,!0),!0}get value(){const e=this.dep.track();return Vv(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function eR(t,e,n=!1){let s,i;return we(t)?s=t:(s=t.get,i=t.set),new ZA(s,i,n)}const xl={},lc=new WeakMap;let Pi;function tR(t,e=!1,n=Pi){if(n){let s=lc.get(n);s||lc.set(n,s=[]),s.push(t)}}function nR(t,e,n=Ye){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:a,call:c}=n,u=x=>i?x:vn(x)||i===!1||i===0?ds(x,1):ds(x);let h,d,p,_,T=!1,S=!1;if(ht(t)?(d=()=>t.value,T=vn(t)):ws(t)?(d=()=>u(t),T=!0):de(t)?(S=!0,T=t.some(x=>ws(x)||vn(x)),d=()=>t.map(x=>{if(ht(x))return x.value;if(ws(x))return u(x);if(we(x))return c?c(x,2):x()})):we(t)?e?d=c?()=>c(t,2):t:d=()=>{if(p){As();try{p()}finally{Rs()}}const x=Pi;Pi=h;try{return c?c(t,3,[_]):t(_)}finally{Pi=x}}:d=Qn,e&&i){const x=d,z=i===!0?1/0:i;d=()=>ds(x(),z)}const P=Nv(),V=()=>{h.stop(),P&&P.active&&cf(P.effects,h)};if(r&&e){const x=e;e=(...z)=>{x(...z),V()}}let O=S?new Array(t.length).fill(xl):xl;const D=x=>{if(!(!(h.flags&1)||!h.dirty&&!x))if(e){const z=h.run();if(i||T||(S?z.some((j,C)=>Kn(j,O[C])):Kn(z,O))){p&&p();const j=Pi;Pi=h;try{const C=[z,O===xl?void 0:S&&O[0]===xl?[]:O,_];O=z,c?c(e,3,C):e(...C)}finally{Pi=j}}}else h.run()};return a&&a(D),h=new xv(d),h.scheduler=o?()=>o(D,!1):D,_=x=>tR(x,!1,h),p=h.onStop=()=>{const x=lc.get(h);if(x){if(c)c(x,4);else for(const z of x)z();lc.delete(h)}},e?s?D(!0):O=h.run():o?o(D.bind(null,!0),!0):h.run(),V.pause=h.pause.bind(h),V.resume=h.resume.bind(h),V.stop=V,V}function ds(t,e=1/0,n){if(e<=0||!We(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,ht(t))ds(t.value,e,n);else if(de(t))for(let s=0;s<t.length;s++)ds(t[s],e,n);else if(eo(t)||Tr(t))t.forEach(s=>{ds(s,e,n)});else if(Cv(t)){for(const s in t)ds(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&ds(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ka(t,e,n,s){try{return s?t(...s):t()}catch(i){iu(i,e,n)}}function Un(t,e,n,s){if(we(t)){const i=Ka(t,e,n,s);return i&&Tv(i)&&i.catch(r=>{iu(r,e,n)}),i}if(de(t)){const i=[];for(let r=0;r<t.length;r++)i.push(Un(t[r],e,n,s));return i}}function iu(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ye;if(e){let a=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const h=a.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](t,c,u)===!1)return}a=a.parent}if(r){As(),Ka(r,null,10,[t,c,u]),Rs();return}}sR(t,n,i,s,o)}function sR(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const sn=[];let qn=-1;const Ir=[];let Ks=null,pr=0;const Qv=Promise.resolve();let cc=null;function Dr(t){const e=cc||Qv;return t?e.then(this?t.bind(this):t):e}function iR(t){let e=qn+1,n=sn.length;for(;e<n;){const s=e+n>>>1,i=sn[s],r=va(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function yf(t){if(!(t.flags&1)){const e=va(t),n=sn[sn.length-1];!n||!(t.flags&2)&&e>=va(n)?sn.push(t):sn.splice(iR(e),0,t),t.flags|=1,Yv()}}function Yv(){cc||(cc=Qv.then(Jv))}function rR(t){de(t)?Ir.push(...t):Ks&&t.id===-1?Ks.splice(pr+1,0,t):t.flags&1||(Ir.push(t),t.flags|=1),Yv()}function c_(t,e,n=qn+1){for(;n<sn.length;n++){const s=sn[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;sn.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Xv(t){if(Ir.length){const e=[...new Set(Ir)].sort((n,s)=>va(n)-va(s));if(Ir.length=0,Ks){Ks.push(...e);return}for(Ks=e,pr=0;pr<Ks.length;pr++){const n=Ks[pr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ks=null,pr=0}}const va=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Jv(t){try{for(qn=0;qn<sn.length;qn++){const e=sn[qn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ka(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;qn<sn.length;qn++){const e=sn[qn];e&&(e.flags&=-2)}qn=-1,sn.length=0,Xv(),cc=null,(sn.length||Ir.length)&&Jv()}}let gn=null,Zv=null;function uc(t){const e=gn;return gn=t,Zv=t&&t.type.__scopeId||null,e}function pn(t,e=gn,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&fc(-1);const r=uc(e);let o;try{o=t(...i)}finally{uc(r),s._d&&fc(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function eE(t,e){if(gn===null)return t;const n=uu(gn),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,c=Ye]=e[i];r&&(we(r)&&(r={mounted:r,updated:r}),r.deep&&ds(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Ci(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let c=a.dir[s];c&&(As(),Un(c,n,8,[t.el,a,t,e]),Rs())}}function Gl(t,e){if(zt){let n=zt.provides;const s=zt.parent&&zt.parent.provides;s===n&&(n=zt.provides=Object.create(s)),n[t]=e}}function Mn(t,e,n=!1){const s=If();if(s||$i){let i=$i?$i._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&we(e)?e.call(s&&s.proxy):e}}function oR(){return!!(If()||$i)}const aR=Symbol.for("v-scx"),lR=()=>Mn(aR);function Cr(t,e,n){return tE(t,e,n)}function tE(t,e,n=Ye){const{immediate:s,deep:i,flush:r,once:o}=n,a=Ct({},n),c=e&&s||!e&&r!=="post";let u;if(Ta){if(r==="sync"){const _=lR();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=Qn,_.resume=Qn,_.pause=Qn,_}}const h=zt;a.call=(_,T,S)=>Un(_,h,T,S);let d=!1;r==="post"?a.scheduler=_=>{tn(_,h&&h.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(_,T)=>{T?_():yf(_)}),a.augmentJob=_=>{e&&(_.flags|=4),d&&(_.flags|=2,h&&(_.id=h.uid,_.i=h))};const p=nR(t,e,a);return Ta&&(u?u.push(p):c&&p()),p}function cR(t,e,n){const s=this.proxy,i=lt(t)?t.includes(".")?nE(s,t):()=>s[t]:t.bind(s,s);let r;we(e)?r=e:(r=e.handler,n=e);const o=Qa(this),a=tE(i,r.bind(s),n);return o(),a}function nE(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const Ai=new WeakMap,sE=Symbol("_vte"),iE=t=>t.__isTeleport,xi=t=>t&&(t.disabled||t.disabled===""),uR=t=>t&&(t.defer||t.defer===""),u_=t=>typeof SVGElement<"u"&&t instanceof SVGElement,h_=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,nd=(t,e)=>{const n=t&&t.to;return lt(n)?e?e(n):null:n},hR={name:"Teleport",__isTeleport:!0,process(t,e,n,s,i,r,o,a,c,u){const{mc:h,pc:d,pbc:p,o:{insert:_,querySelector:T,createText:S,createComment:P}}=u,V=xi(e.props);let{dynamicChildren:O}=e;const D=(j,C,m)=>{j.shapeFlag&16&&h(j.children,C,m,i,r,o,a,c)},x=(j=e)=>{const C=xi(j.props),m=j.target=nd(j.props,T),v=sd(m,j,S,_);m&&(o!=="svg"&&u_(m)?o="svg":o!=="mathml"&&h_(m)&&(o="mathml"),i&&i.isCE&&(i.ce._teleportTargets||(i.ce._teleportTargets=new Set)).add(m),C||(D(j,m,v),Fo(j,!1)))},z=j=>{const C=()=>{Ai.get(j)===C&&(Ai.delete(j),xi(j.props)&&(D(j,n,j.anchor),Fo(j,!0)),x(j))};Ai.set(j,C),tn(C,r)};if(t==null){const j=e.el=S(""),C=e.anchor=S("");if(_(j,n,s),_(C,n,s),uR(e.props)||r&&r.pendingBranch){z(e);return}V&&(D(e,n,C),Fo(e,!0)),x()}else{e.el=t.el;const j=e.anchor=t.anchor,C=Ai.get(t);if(C){C.flags|=8,Ai.delete(t),z(e);return}e.targetStart=t.targetStart;const m=e.target=t.target,v=e.targetAnchor=t.targetAnchor,w=xi(t.props),R=w?n:m,I=w?j:v;if(o==="svg"||u_(m)?o="svg":(o==="mathml"||h_(m))&&(o="mathml"),O?(p(t.dynamicChildren,O,R,i,r,o,a),wf(t,e,!0)):c||d(t,e,R,I,i,r,o,a,!1),V)w?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Ol(e,n,j,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const E=e.target=nd(e.props,T);E&&Ol(e,E,null,u,0)}else w&&Ol(e,m,v,u,1);Fo(e,V)}},remove(t,e,n,{um:s,o:{remove:i}},r){const{shapeFlag:o,children:a,anchor:c,targetStart:u,targetAnchor:h,target:d,props:p}=t;let _=r||!xi(p);const T=Ai.get(t);if(T&&(T.flags|=8,Ai.delete(t),_=!1),d&&(i(u),i(h)),r&&i(c),o&16)for(let S=0;S<a.length;S++){const P=a[S];s(P,e,n,_,!!P.dynamicChildren)}},move:Ol,hydrate:dR};function Ol(t,e,n,{o:{insert:s},m:i},r=2){r===0&&s(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:u,props:h}=t,d=r===2;if(d&&s(o,e,n),(!d||xi(h))&&c&16)for(let p=0;p<u.length;p++)i(u[p],e,n,2);d&&s(a,e,n)}function dR(t,e,n,s,i,r,{o:{nextSibling:o,parentNode:a,querySelector:c,insert:u,createText:h}},d){function p(P,V){let O=V;for(;O;){if(O&&O.nodeType===8){if(O.data==="teleport start anchor")e.targetStart=O;else if(O.data==="teleport anchor"){e.targetAnchor=O,P._lpa=e.targetAnchor&&o(e.targetAnchor);break}}O=o(O)}}function _(P,V){V.anchor=d(o(P),V,a(P),n,s,i,r)}const T=e.target=nd(e.props,c),S=xi(e.props);if(T){const P=T._lpa||T.firstChild;e.shapeFlag&16&&(S?(_(t,e),p(T,P),e.targetAnchor||sd(T,e,h,u,a(t)===T?t:null)):(e.anchor=o(t),p(T,P),e.targetAnchor||sd(T,e,h,u),d(P&&o(P),e,T,n,s,i,r))),Fo(e,S)}else S&&e.shapeFlag&16&&(_(t,e),e.targetStart=t,e.targetAnchor=o(t));return e.anchor&&o(e.anchor)}const rE=hR;function Fo(t,e){const n=t.ctx;if(n&&n.ut){let s,i;for(e?(s=t.el,i=t.anchor):(s=t.targetStart,i=t.targetAnchor);s&&s!==i;)s.nodeType===1&&s.setAttribute("data-v-owner",n.uid),s=s.nextSibling;n.ut()}}function sd(t,e,n,s,i=null){const r=e.targetStart=n(""),o=e.targetAnchor=n("");return r[sE]=o,t&&(s(r,t,i),s(o,t,i)),o}const Wn=Symbol("_leaveCb"),So=Symbol("_enterCb");function fR(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return za(()=>{t.isMounted=!0}),pE(()=>{t.isUnmounting=!0}),t}const Tn=[Function,Array],oE={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Tn,onEnter:Tn,onAfterEnter:Tn,onEnterCancelled:Tn,onBeforeLeave:Tn,onLeave:Tn,onAfterLeave:Tn,onLeaveCancelled:Tn,onBeforeAppear:Tn,onAppear:Tn,onAfterAppear:Tn,onAppearCancelled:Tn},aE=t=>{const e=t.subTree;return e.component?aE(e.component):e},pR={name:"BaseTransition",props:oE,setup(t,{slots:e}){const n=If(),s=fR();return()=>{const i=e.default&&uE(e.default(),!0);if(!i||!i.length)return;const r=lE(i),o=De(t),{mode:a}=o;if(s.isLeaving)return yh(r);const c=d_(r);if(!c)return yh(r);let u=id(c,o,s,n,d=>u=d);c.type!==rn&&Ea(c,u);let h=n.subTree&&d_(n.subTree);if(h&&h.type!==rn&&!Oi(h,c)&&aE(n).type!==rn){let d=id(h,o,s,n);if(Ea(h,d),a==="out-in"&&c.type!==rn)return s.isLeaving=!0,d.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,h=void 0},yh(r);a==="in-out"&&c.type!==rn?d.delayLeave=(p,_,T)=>{const S=cE(s,h);S[String(h.key)]=h,p[Wn]=()=>{_(),p[Wn]=void 0,delete u.delayedLeave,h=void 0},u.delayedLeave=()=>{T(),delete u.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return r}}};function lE(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==rn){e=n;break}}return e}const gR=pR;function cE(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function id(t,e,n,s,i){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:p,onLeave:_,onAfterLeave:T,onLeaveCancelled:S,onBeforeAppear:P,onAppear:V,onAfterAppear:O,onAppearCancelled:D}=e,x=String(t.key),z=cE(n,t),j=(v,w)=>{v&&Un(v,s,9,w)},C=(v,w)=>{const R=w[1];j(v,w),de(v)?v.every(I=>I.length<=1)&&R():v.length<=1&&R()},m={mode:o,persisted:a,beforeEnter(v){let w=c;if(!n.isMounted)if(r)w=P||c;else return;v[Wn]&&v[Wn](!0);const R=z[x];R&&Oi(t,R)&&R.el[Wn]&&R.el[Wn](),j(w,[v])},enter(v){if(z[x]===t)return;let w=u,R=h,I=d;if(!n.isMounted)if(r)w=V||u,R=O||h,I=D||d;else return;let E=!1;v[So]=he=>{E||(E=!0,he?j(I,[v]):j(R,[v]),m.delayedLeave&&m.delayedLeave(),v[So]=void 0)};const oe=v[So].bind(null,!1);w?C(w,[v,oe]):oe()},leave(v,w){const R=String(t.key);if(v[So]&&v[So](!0),n.isUnmounting)return w();j(p,[v]);let I=!1;v[Wn]=oe=>{I||(I=!0,w(),oe?j(S,[v]):j(T,[v]),v[Wn]=void 0,z[R]===t&&delete z[R])};const E=v[Wn].bind(null,!1);z[R]=t,_?C(_,[v,E]):E()},clone(v){const w=id(v,e,n,s,i);return i&&i(w),w}};return m}function yh(t){if(ru(t))return t=oi(t),t.children=null,t}function d_(t){if(!ru(t))return iE(t.type)&&t.children?lE(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&we(n.default))return n.default()}}function Ea(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ea(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function uE(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Dt?(o.patchFlag&128&&i++,s=s.concat(uE(o.children,e,a))):(e||o.type!==rn)&&s.push(a!=null?oi(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function hE(t,e){return we(t)?Ct({name:t.name},e,{setup:t}):t}function dE(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function f_(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const hc=new WeakMap;function Jo(t,e,n,s,i=!1){if(de(t)){t.forEach((S,P)=>Jo(S,e&&(de(e)?e[P]:e),n,s,i));return}if(Zo(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Jo(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?uu(s.component):s.el,o=i?null:r,{i:a,r:c}=t,u=e&&e.r,h=a.refs===Ye?a.refs={}:a.refs,d=a.setupState,p=De(d),_=d===Ye?wv:S=>f_(h,S)?!1:qe(p,S),T=(S,P)=>!(P&&f_(h,P));if(u!=null&&u!==c){if(p_(e),lt(u))h[u]=null,_(u)&&(d[u]=null);else if(ht(u)){const S=e;T(u,S.k)&&(u.value=null),S.k&&(h[S.k]=null)}}if(we(c))Ka(c,a,12,[o,h]);else{const S=lt(c),P=ht(c);if(S||P){const V=()=>{if(t.f){const O=S?_(c)?d[c]:h[c]:T()||!t.k?c.value:h[t.k];if(i)de(O)&&cf(O,r);else if(de(O))O.includes(r)||O.push(r);else if(S)h[c]=[r],_(c)&&(d[c]=h[c]);else{const D=[r];T(c,t.k)&&(c.value=D),t.k&&(h[t.k]=D)}}else S?(h[c]=o,_(c)&&(d[c]=o)):P&&(T(c,t.k)&&(c.value=o),t.k&&(h[t.k]=o))};if(o){const O=()=>{V(),hc.delete(t)};O.id=-1,hc.set(t,O),tn(O,n)}else p_(t),V()}}}function p_(t){const e=hc.get(t);e&&(e.flags|=8,hc.delete(t))}tu().requestIdleCallback;tu().cancelIdleCallback;const Zo=t=>!!t.type.__asyncLoader,ru=t=>t.type.__isKeepAlive;function _R(t,e){fE(t,"a",e)}function mR(t,e){fE(t,"da",e)}function fE(t,e,n=zt){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(ou(e,s,n),n){let i=n.parent;for(;i&&i.parent;)ru(i.parent.vnode)&&yR(s,e,n,i),i=i.parent}}function yR(t,e,n,s){const i=ou(e,t,s,!0);au(()=>{cf(s[e],i)},n)}function ou(t,e,n=zt,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{As();const a=Qa(n),c=Un(e,n,t,o);return a(),Rs(),c});return s?i.unshift(r):i.push(r),r}}const Ls=t=>(e,n=zt)=>{(!Ta||t==="sp")&&ou(t,(...s)=>e(...s),n)},vR=Ls("bm"),za=Ls("m"),ER=Ls("bu"),wR=Ls("u"),pE=Ls("bum"),au=Ls("um"),TR=Ls("sp"),IR=Ls("rtg"),CR=Ls("rtc");function AR(t,e=zt){ou("ec",t,e)}const gE="components";function rd(t,e){return mE(gE,t,!0,e)||t}const _E=Symbol.for("v-ndc");function RR(t){return lt(t)?mE(gE,t,!1)||t:t||_E}function mE(t,e,n=!0,s=!1){const i=gn||zt;if(i){const r=i.type;{const a=ub(r,!1);if(a&&(a===e||a===on(e)||a===Zc(on(e))))return r}const o=g_(i[t]||r[t],e)||g_(i.appContext[t],e);return!o&&s?r:o}}function g_(t,e){return t&&(t[e]||t[on(e)]||t[Zc(on(e))])}function Uo(t,e,n,s){let i;const r=n,o=de(t);if(o||lt(t)){const a=o&&ws(t);let c=!1,u=!1;a&&(c=!vn(t),u=bs(t),t=nu(t)),i=new Array(t.length);for(let h=0,d=t.length;h<d;h++)i[h]=e(c?u?Or(Fn(t[h])):Fn(t[h]):t[h],h,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let a=0;a<t;a++)i[a]=e(a+1,a,void 0,r)}else if(We(t))if(t[Symbol.iterator])i=Array.from(t,(a,c)=>e(a,c,void 0,r));else{const a=Object.keys(t);i=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const h=a[c];i[c]=e(t[h],h,c,r)}}else i=[];return i}const od=t=>t?LE(t)?uu(t):od(t.parent):null,ea=Ct(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>od(t.parent),$root:t=>od(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>vE(t),$forceUpdate:t=>t.f||(t.f=()=>{yf(t.update)}),$nextTick:t=>t.n||(t.n=Dr.bind(t.proxy)),$watch:t=>cR.bind(t)}),vh=(t,e)=>t!==Ye&&!t.__isScriptSetup&&qe(t,e),bR={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:c}=t;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(vh(s,e))return o[e]=1,s[e];if(i!==Ye&&qe(i,e))return o[e]=2,i[e];if(qe(r,e))return o[e]=3,r[e];if(n!==Ye&&qe(n,e))return o[e]=4,n[e];ad&&(o[e]=0)}}const u=ea[e];let h,d;if(u)return e==="$attrs"&&Gt(t.attrs,"get",""),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ye&&qe(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,qe(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return vh(i,e)?(i[e]=n,!0):s!==Ye&&qe(s,e)?(s[e]=n,!0):qe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,props:r,type:o}},a){let c;return!!(n[a]||t!==Ye&&a[0]!=="$"&&qe(t,a)||vh(e,a)||qe(r,a)||qe(s,a)||qe(ea,a)||qe(i.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:qe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function __(t){return de(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ad=!0;function SR(t){const e=vE(t),n=t.proxy,s=t.ctx;ad=!1,e.beforeCreate&&m_(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:c,inject:u,created:h,beforeMount:d,mounted:p,beforeUpdate:_,updated:T,activated:S,deactivated:P,beforeDestroy:V,beforeUnmount:O,destroyed:D,unmounted:x,render:z,renderTracked:j,renderTriggered:C,errorCaptured:m,serverPrefetch:v,expose:w,inheritAttrs:R,components:I,directives:E,filters:oe}=e;if(u&&PR(u,s,null),o)for(const L in o){const H=o[L];we(H)&&(s[L]=H.bind(n))}if(i){const L=i.call(n,n);We(L)&&(t.data=Ga(L))}if(ad=!0,r)for(const L in r){const H=r[L],Ae=we(H)?H.bind(n,n):we(H.get)?H.get.bind(n,n):Qn,Ue=!we(H)&&we(H.set)?H.set.bind(n):Qn,Ge=st({get:Ae,set:Ue});Object.defineProperty(s,L,{enumerable:!0,configurable:!0,get:()=>Ge.value,set:Re=>Ge.value=Re})}if(a)for(const L in a)yE(a[L],s,n,L);if(c){const L=we(c)?c.call(n):c;Reflect.ownKeys(L).forEach(H=>{Gl(H,L[H])})}h&&m_(h,t,"c");function Q(L,H){de(H)?H.forEach(Ae=>L(Ae.bind(n))):H&&L(H.bind(n))}if(Q(vR,d),Q(za,p),Q(ER,_),Q(wR,T),Q(_R,S),Q(mR,P),Q(AR,m),Q(CR,j),Q(IR,C),Q(pE,O),Q(au,x),Q(TR,v),de(w))if(w.length){const L=t.exposed||(t.exposed={});w.forEach(H=>{Object.defineProperty(L,H,{get:()=>n[H],set:Ae=>n[H]=Ae,enumerable:!0})})}else t.exposed||(t.exposed={});z&&t.render===Qn&&(t.render=z),R!=null&&(t.inheritAttrs=R),I&&(t.components=I),E&&(t.directives=E),v&&dE(t)}function PR(t,e,n=Qn){de(t)&&(t=ld(t));for(const s in t){const i=t[s];let r;We(i)?"default"in i?r=Mn(i.from||s,i.default,!0):r=Mn(i.from||s):r=Mn(i),ht(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function m_(t,e,n){Un(de(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function yE(t,e,n,s){let i=s.includes(".")?nE(n,s):()=>n[s];if(lt(t)){const r=e[t];we(r)&&Cr(i,r)}else if(we(t))Cr(i,t.bind(n));else if(We(t))if(de(t))t.forEach(r=>yE(r,e,n,s));else{const r=we(t.handler)?t.handler.bind(n):e[t.handler];we(r)&&Cr(i,r,t)}}function vE(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let c;return a?c=a:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(u=>dc(c,u,o,!0)),dc(c,e,o)),We(e)&&r.set(e,c),c}function dc(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&dc(t,r,n,!0),i&&i.forEach(o=>dc(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=kR[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const kR={data:y_,props:v_,emits:v_,methods:Bo,computed:Bo,beforeCreate:en,created:en,beforeMount:en,mounted:en,beforeUpdate:en,updated:en,beforeDestroy:en,beforeUnmount:en,destroyed:en,unmounted:en,activated:en,deactivated:en,errorCaptured:en,serverPrefetch:en,components:Bo,directives:Bo,watch:xR,provide:y_,inject:NR};function y_(t,e){return e?t?function(){return Ct(we(t)?t.call(this,this):t,we(e)?e.call(this,this):e)}:e:t}function NR(t,e){return Bo(ld(t),ld(e))}function ld(t){if(de(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function en(t,e){return t?[...new Set([].concat(t,e))]:e}function Bo(t,e){return t?Ct(Object.create(null),t,e):e}function v_(t,e){return t?de(t)&&de(e)?[...new Set([...t,...e])]:Ct(Object.create(null),__(t),__(e??{})):e}function xR(t,e){if(!t)return e;if(!e)return t;const n=Ct(Object.create(null),t);for(const s in e)n[s]=en(t[s],e[s]);return n}function EE(){return{app:null,config:{isNativeTag:wv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let OR=0;function DR(t,e){return function(s,i=null){we(s)||(s=Ct({},s)),i!=null&&!We(i)&&(i=null);const r=EE(),o=new WeakSet,a=[];let c=!1;const u=r.app={_uid:OR++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:db,get config(){return r.config},set config(h){},use(h,...d){return o.has(h)||(h&&we(h.install)?(o.add(h),h.install(u,...d)):we(h)&&(o.add(h),h(u,...d))),u},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),u},component(h,d){return d?(r.components[h]=d,u):r.components[h]},directive(h,d){return d?(r.directives[h]=d,u):r.directives[h]},mount(h,d,p){if(!c){const _=u._ceVNode||et(s,i);return _.appContext=r,p===!0?p="svg":p===!1&&(p=void 0),t(_,h,p),c=!0,u._container=h,h.__vue_app__=u,uu(_.component)}},onUnmount(h){a.push(h)},unmount(){c&&(Un(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,d){return r.provides[h]=d,u},runWithContext(h){const d=$i;$i=u;try{return h()}finally{$i=d}}};return u}}let $i=null;const MR=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${on(e)}Modifiers`]||t[`${pi(e)}Modifiers`];function LR(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ye;let i=n;const r=e.startsWith("update:"),o=r&&MR(s,e.slice(7));o&&(o.trim&&(i=n.map(h=>lt(h)?h.trim():h)),o.number&&(i=n.map(eu)));let a,c=s[a=fh(e)]||s[a=fh(on(e))];!c&&r&&(c=s[a=fh(pi(e))]),c&&Un(c,t,6,i);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Un(u,t,6,i)}}const VR=new WeakMap;function wE(t,e,n=!1){const s=n?VR:e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!we(t)){const c=u=>{const h=wE(u,e,!0);h&&(a=!0,Ct(o,h))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!a?(We(t)&&s.set(t,null),null):(de(r)?r.forEach(c=>o[c]=null):Ct(o,r),We(t)&&s.set(t,o),o)}function lu(t,e){return!t||!Qc(e)?!1:(e=e.slice(2).replace(/Once$/,""),qe(t,e[0].toLowerCase()+e.slice(1))||qe(t,pi(e))||qe(t,e))}function E_(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:c,render:u,renderCache:h,props:d,data:p,setupState:_,ctx:T,inheritAttrs:S}=t,P=uc(t);let V,O;try{if(n.shapeFlag&4){const x=i||s,z=x;V=Gn(u.call(z,x,h,d,_,p,T)),O=a}else{const x=e;V=Gn(x.length>1?x(d,{attrs:a,slots:o,emit:c}):x(d,null)),O=e.props?a:FR(a)}}catch(x){ta.length=0,iu(x,t,1),V=et(rn)}let D=V;if(O&&S!==!1){const x=Object.keys(O),{shapeFlag:z}=D;x.length&&z&7&&(r&&x.some(Yc)&&(O=UR(O,r)),D=oi(D,O,!1,!0))}return n.dirs&&(D=oi(D,null,!1,!0),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&Ea(D,n.transition),V=D,uc(P),V}const FR=t=>{let e;for(const n in t)(n==="class"||n==="style"||Qc(n))&&((e||(e={}))[n]=t[n]);return e},UR=(t,e)=>{const n={};for(const s in t)(!Yc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function BR(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:c}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?w_(s,o,u):!!o;if(c&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const p=h[d];if(TE(o,s,p)&&!lu(u,p))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?w_(s,o,u):!0:!!o;return!1}function w_(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(TE(e,t,r)&&!lu(n,r))return!0}return!1}function TE(t,e,n){const s=t[n],i=e[n];return n==="style"&&We(s)&&We(i)?!ri(s,i):s!==i}function $R({vnode:t,parent:e,suspense:n},s){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.suspense.vnode.el=i.el=s,t=i),i===t)(t=e.vnode).el=s,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=s)}const IE={},CE=()=>Object.create(IE),AE=t=>Object.getPrototypeOf(t)===IE;function jR(t,e,n,s=!1){const i={},r=CE();t.propsDefaults=Object.create(null),RE(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Gv(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function qR(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=De(i),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let d=0;d<h.length;d++){let p=h[d];if(lu(t.emitsOptions,p))continue;const _=e[p];if(c)if(qe(r,p))_!==r[p]&&(r[p]=_,u=!0);else{const T=on(p);i[T]=cd(c,a,T,_,t,!1)}else _!==r[p]&&(r[p]=_,u=!0)}}}else{RE(t,e,i,r)&&(u=!0);let h;for(const d in a)(!e||!qe(e,d)&&((h=pi(d))===d||!qe(e,h)))&&(c?n&&(n[d]!==void 0||n[h]!==void 0)&&(i[d]=cd(c,a,d,void 0,t,!0)):delete i[d]);if(r!==a)for(const d in r)(!e||!qe(e,d))&&(delete r[d],u=!0)}u&&hs(t.attrs,"set","")}function RE(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Qo(c))continue;const u=e[c];let h;i&&qe(i,h=on(c))?!r||!r.includes(h)?n[h]=u:(a||(a={}))[h]=u:lu(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(r){const c=De(n),u=a||Ye;for(let h=0;h<r.length;h++){const d=r[h];n[d]=cd(i,c,d,u[d],t,!qe(u,d))}}return o}function cd(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=qe(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&we(c)){const{propsDefaults:u}=i;if(n in u)s=u[n];else{const h=Qa(i);s=u[n]=c.call(null,e),h()}}else s=c;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===pi(n))&&(s=!0))}return s}const WR=new WeakMap;function bE(t,e,n=!1){const s=n?WR:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let c=!1;if(!we(t)){const h=d=>{c=!0;const[p,_]=bE(d,e,!0);Ct(o,p),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!r&&!c)return We(t)&&s.set(t,wr),wr;if(de(r))for(let h=0;h<r.length;h++){const d=on(r[h]);T_(d)&&(o[d]=Ye)}else if(r)for(const h in r){const d=on(h);if(T_(d)){const p=r[h],_=o[d]=de(p)||we(p)?{type:p}:Ct({},p),T=_.type;let S=!1,P=!0;if(de(T))for(let V=0;V<T.length;++V){const O=T[V],D=we(O)&&O.name;if(D==="Boolean"){S=!0;break}else D==="String"&&(P=!1)}else S=we(T)&&T.name==="Boolean";_[0]=S,_[1]=P,(S||qe(_,"default"))&&a.push(d)}}const u=[o,a];return We(t)&&s.set(t,u),u}function T_(t){return t[0]!=="$"&&!Qo(t)}const vf=t=>t==="_"||t==="_ctx"||t==="$stable",Ef=t=>de(t)?t.map(Gn):[Gn(t)],HR=(t,e,n)=>{if(e._n)return e;const s=pn((...i)=>Ef(e(...i)),n);return s._c=!1,s},SE=(t,e,n)=>{const s=t._ctx;for(const i in t){if(vf(i))continue;const r=t[i];if(we(r))e[i]=HR(i,r,s);else if(r!=null){const o=Ef(r);e[i]=()=>o}}},PE=(t,e)=>{const n=Ef(e);t.slots.default=()=>n},kE=(t,e,n)=>{for(const s in e)(n||!vf(s))&&(t[s]=e[s])},GR=(t,e,n)=>{const s=t.slots=CE();if(t.vnode.shapeFlag&32){const i=e._;i?(kE(s,e,n),n&&Av(s,"_",i,!0)):SE(e,s)}else e&&PE(t,e)},KR=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Ye;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:kE(i,e,n):(r=!e.$stable,SE(e,i)),o=e}else e&&(PE(t,e),o={default:1});if(r)for(const a in i)!vf(a)&&o[a]==null&&delete i[a]},tn=JR;function zR(t){return QR(t)}function QR(t,e){const n=tu();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:c,setText:u,setElementText:h,parentNode:d,nextSibling:p,setScopeId:_=Qn,insertStaticContent:T}=t,S=(A,b,k,B=null,W=null,$=null,te=void 0,Z=null,Y=!!b.dynamicChildren)=>{if(A===b)return;A&&!Oi(A,b)&&(B=U(A),Re(A,W,$,!0),A=null),b.patchFlag===-2&&(Y=!1,b.dynamicChildren=null);const{type:G,ref:pe,shapeFlag:ne}=b;switch(G){case cu:P(A,b,k,B);break;case rn:V(A,b,k,B);break;case Kl:A==null&&O(b,k,B,te);break;case Dt:I(A,b,k,B,W,$,te,Z,Y);break;default:ne&1?z(A,b,k,B,W,$,te,Z,Y):ne&6?E(A,b,k,B,W,$,te,Z,Y):(ne&64||ne&128)&&G.process(A,b,k,B,W,$,te,Z,Y,ae)}pe!=null&&W?Jo(pe,A&&A.ref,$,b||A,!b):pe==null&&A&&A.ref!=null&&Jo(A.ref,null,$,A,!0)},P=(A,b,k,B)=>{if(A==null)s(b.el=a(b.children),k,B);else{const W=b.el=A.el;b.children!==A.children&&u(W,b.children)}},V=(A,b,k,B)=>{A==null?s(b.el=c(b.children||""),k,B):b.el=A.el},O=(A,b,k,B)=>{[A.el,A.anchor]=T(A.children,b,k,B,A.el,A.anchor)},D=({el:A,anchor:b},k,B)=>{let W;for(;A&&A!==b;)W=p(A),s(A,k,B),A=W;s(b,k,B)},x=({el:A,anchor:b})=>{let k;for(;A&&A!==b;)k=p(A),i(A),A=k;i(b)},z=(A,b,k,B,W,$,te,Z,Y)=>{if(b.type==="svg"?te="svg":b.type==="math"&&(te="mathml"),A==null)j(b,k,B,W,$,te,Z,Y);else{const G=A.el&&A.el._isVueCE?A.el:null;try{G&&G._beginPatch(),v(A,b,W,$,te,Z,Y)}finally{G&&G._endPatch()}}},j=(A,b,k,B,W,$,te,Z)=>{let Y,G;const{props:pe,shapeFlag:ne,transition:ce,dirs:ge}=A;if(Y=A.el=o(A.type,$,pe&&pe.is,pe),ne&8?h(Y,A.children):ne&16&&m(A.children,Y,null,B,W,Eh(A,$),te,Z),ge&&Ci(A,null,B,"created"),C(Y,A,A.scopeId,te,B),pe){for(const Ie in pe)Ie!=="value"&&!Qo(Ie)&&r(Y,Ie,null,pe[Ie],$,B);"value"in pe&&r(Y,"value",null,pe.value,$),(G=pe.onVnodeBeforeMount)&&jn(G,B,A)}ge&&Ci(A,null,B,"beforeMount");const _e=YR(W,ce);_e&&ce.beforeEnter(Y),s(Y,b,k),((G=pe&&pe.onVnodeMounted)||_e||ge)&&tn(()=>{try{G&&jn(G,B,A),_e&&ce.enter(Y),ge&&Ci(A,null,B,"mounted")}finally{}},W)},C=(A,b,k,B,W)=>{if(k&&_(A,k),B)for(let $=0;$<B.length;$++)_(A,B[$]);if(W){let $=W.subTree;if(b===$||OE($.type)&&($.ssContent===b||$.ssFallback===b)){const te=W.vnode;C(A,te,te.scopeId,te.slotScopeIds,W.parent)}}},m=(A,b,k,B,W,$,te,Z,Y=0)=>{for(let G=Y;G<A.length;G++){const pe=A[G]=Z?us(A[G]):Gn(A[G]);S(null,pe,b,k,B,W,$,te,Z)}},v=(A,b,k,B,W,$,te)=>{const Z=b.el=A.el;let{patchFlag:Y,dynamicChildren:G,dirs:pe}=b;Y|=A.patchFlag&16;const ne=A.props||Ye,ce=b.props||Ye;let ge;if(k&&Ri(k,!1),(ge=ce.onVnodeBeforeUpdate)&&jn(ge,k,b,A),pe&&Ci(b,A,k,"beforeUpdate"),k&&Ri(k,!0),(ne.innerHTML&&ce.innerHTML==null||ne.textContent&&ce.textContent==null)&&h(Z,""),G?w(A.dynamicChildren,G,Z,k,B,Eh(b,W),$):te||H(A,b,Z,null,k,B,Eh(b,W),$,!1),Y>0){if(Y&16)R(Z,ne,ce,k,W);else if(Y&2&&ne.class!==ce.class&&r(Z,"class",null,ce.class,W),Y&4&&r(Z,"style",ne.style,ce.style,W),Y&8){const _e=b.dynamicProps;for(let Ie=0;Ie<_e.length;Ie++){const Be=_e[Ie],rt=ne[Be],mt=ce[Be];(mt!==rt||Be==="value")&&r(Z,Be,rt,mt,W,k)}}Y&1&&A.children!==b.children&&h(Z,b.children)}else!te&&G==null&&R(Z,ne,ce,k,W);((ge=ce.onVnodeUpdated)||pe)&&tn(()=>{ge&&jn(ge,k,b,A),pe&&Ci(b,A,k,"updated")},B)},w=(A,b,k,B,W,$,te)=>{for(let Z=0;Z<b.length;Z++){const Y=A[Z],G=b[Z],pe=Y.el&&(Y.type===Dt||!Oi(Y,G)||Y.shapeFlag&198)?d(Y.el):k;S(Y,G,pe,null,B,W,$,te,!0)}},R=(A,b,k,B,W)=>{if(b!==k){if(b!==Ye)for(const $ in b)!Qo($)&&!($ in k)&&r(A,$,b[$],null,W,B);for(const $ in k){if(Qo($))continue;const te=k[$],Z=b[$];te!==Z&&$!=="value"&&r(A,$,Z,te,W,B)}"value"in k&&r(A,"value",b.value,k.value,W)}},I=(A,b,k,B,W,$,te,Z,Y)=>{const G=b.el=A?A.el:a(""),pe=b.anchor=A?A.anchor:a("");let{patchFlag:ne,dynamicChildren:ce,slotScopeIds:ge}=b;ge&&(Z=Z?Z.concat(ge):ge),A==null?(s(G,k,B),s(pe,k,B),m(b.children||[],k,pe,W,$,te,Z,Y)):ne>0&&ne&64&&ce&&A.dynamicChildren&&A.dynamicChildren.length===ce.length?(w(A.dynamicChildren,ce,k,W,$,te,Z),(b.key!=null||W&&b===W.subTree)&&wf(A,b,!0)):H(A,b,k,pe,W,$,te,Z,Y)},E=(A,b,k,B,W,$,te,Z,Y)=>{b.slotScopeIds=Z,A==null?b.shapeFlag&512?W.ctx.activate(b,k,B,te,Y):oe(b,k,B,W,$,te,Y):he(A,b,Y)},oe=(A,b,k,B,W,$,te)=>{const Z=A.component=rb(A,B,W);if(ru(A)&&(Z.ctx.renderer=ae),ob(Z,!1,te),Z.asyncDep){if(W&&W.registerDep(Z,Q,te),!A.el){const Y=Z.subTree=et(rn);V(null,Y,b,k),A.placeholder=Y.el}}else Q(Z,A,b,k,W,$,te)},he=(A,b,k)=>{const B=b.component=A.component;if(BR(A,b,k))if(B.asyncDep&&!B.asyncResolved){L(B,b,k);return}else B.next=b,B.update();else b.el=A.el,B.vnode=b},Q=(A,b,k,B,W,$,te)=>{const Z=()=>{if(A.isMounted){let{next:ne,bu:ce,u:ge,parent:_e,vnode:Ie}=A;{const Bt=NE(A);if(Bt){ne&&(ne.el=Ie.el,L(A,ne,te)),Bt.asyncDep.then(()=>{tn(()=>{A.isUnmounted||G()},W)});return}}let Be=ne,rt;Ri(A,!1),ne?(ne.el=Ie.el,L(A,ne,te)):ne=Ie,ce&&Hl(ce),(rt=ne.props&&ne.props.onVnodeBeforeUpdate)&&jn(rt,_e,ne,Ie),Ri(A,!0);const mt=E_(A),En=A.subTree;A.subTree=mt,S(En,mt,d(En.el),U(En),A,W,$),ne.el=mt.el,Be===null&&$R(A,mt.el),ge&&tn(ge,W),(rt=ne.props&&ne.props.onVnodeUpdated)&&tn(()=>jn(rt,_e,ne,Ie),W)}else{let ne;const{el:ce,props:ge}=b,{bm:_e,m:Ie,parent:Be,root:rt,type:mt}=A,En=Zo(b);Ri(A,!1),_e&&Hl(_e),!En&&(ne=ge&&ge.onVnodeBeforeMount)&&jn(ne,Be,b),Ri(A,!0);{rt.ce&&rt.ce._hasShadowRoot()&&rt.ce._injectChildStyle(mt,A.parent?A.parent.type:void 0);const Bt=A.subTree=E_(A);S(null,Bt,k,B,A,W,$),b.el=Bt.el}if(Ie&&tn(Ie,W),!En&&(ne=ge&&ge.onVnodeMounted)){const Bt=b;tn(()=>jn(ne,Be,Bt),W)}(b.shapeFlag&256||Be&&Zo(Be.vnode)&&Be.vnode.shapeFlag&256)&&A.a&&tn(A.a,W),A.isMounted=!0,b=k=B=null}};A.scope.on();const Y=A.effect=new xv(Z);A.scope.off();const G=A.update=Y.run.bind(Y),pe=A.job=Y.runIfDirty.bind(Y);pe.i=A,pe.id=A.uid,Y.scheduler=()=>yf(pe),Ri(A,!0),G()},L=(A,b,k)=>{b.component=A;const B=A.vnode.props;A.vnode=b,A.next=null,qR(A,b.props,B,k),KR(A,b.children,k),As(),c_(A),Rs()},H=(A,b,k,B,W,$,te,Z,Y=!1)=>{const G=A&&A.children,pe=A?A.shapeFlag:0,ne=b.children,{patchFlag:ce,shapeFlag:ge}=b;if(ce>0){if(ce&128){Ue(G,ne,k,B,W,$,te,Z,Y);return}else if(ce&256){Ae(G,ne,k,B,W,$,te,Z,Y);return}}ge&8?(pe&16&&Pt(G,W,$),ne!==G&&h(k,ne)):pe&16?ge&16?Ue(G,ne,k,B,W,$,te,Z,Y):Pt(G,W,$,!0):(pe&8&&h(k,""),ge&16&&m(ne,k,B,W,$,te,Z,Y))},Ae=(A,b,k,B,W,$,te,Z,Y)=>{A=A||wr,b=b||wr;const G=A.length,pe=b.length,ne=Math.min(G,pe);let ce;for(ce=0;ce<ne;ce++){const ge=b[ce]=Y?us(b[ce]):Gn(b[ce]);S(A[ce],ge,k,null,W,$,te,Z,Y)}G>pe?Pt(A,W,$,!0,!1,ne):m(b,k,B,W,$,te,Z,Y,ne)},Ue=(A,b,k,B,W,$,te,Z,Y)=>{let G=0;const pe=b.length;let ne=A.length-1,ce=pe-1;for(;G<=ne&&G<=ce;){const ge=A[G],_e=b[G]=Y?us(b[G]):Gn(b[G]);if(Oi(ge,_e))S(ge,_e,k,null,W,$,te,Z,Y);else break;G++}for(;G<=ne&&G<=ce;){const ge=A[ne],_e=b[ce]=Y?us(b[ce]):Gn(b[ce]);if(Oi(ge,_e))S(ge,_e,k,null,W,$,te,Z,Y);else break;ne--,ce--}if(G>ne){if(G<=ce){const ge=ce+1,_e=ge<pe?b[ge].el:B;for(;G<=ce;)S(null,b[G]=Y?us(b[G]):Gn(b[G]),k,_e,W,$,te,Z,Y),G++}}else if(G>ce)for(;G<=ne;)Re(A[G],W,$,!0),G++;else{const ge=G,_e=G,Ie=new Map;for(G=_e;G<=ce;G++){const kt=b[G]=Y?us(b[G]):Gn(b[G]);kt.key!=null&&Ie.set(kt.key,G)}let Be,rt=0;const mt=ce-_e+1;let En=!1,Bt=0;const Us=new Array(mt);for(G=0;G<mt;G++)Us[G]=0;for(G=ge;G<=ne;G++){const kt=A[G];if(rt>=mt){Re(kt,W,$,!0);continue}let wn;if(kt.key!=null)wn=Ie.get(kt.key);else for(Be=_e;Be<=ce;Be++)if(Us[Be-_e]===0&&Oi(kt,b[Be])){wn=Be;break}wn===void 0?Re(kt,W,$,!0):(Us[wn-_e]=G+1,wn>=Bt?Bt=wn:En=!0,S(kt,b[wn],k,null,W,$,te,Z,Y),rt++)}const po=En?XR(Us):wr;for(Be=po.length-1,G=mt-1;G>=0;G--){const kt=_e+G,wn=b[kt],pl=b[kt+1],rr=kt+1<pe?pl.el||xE(pl):B;Us[G]===0?S(null,wn,k,rr,W,$,te,Z,Y):En&&(Be<0||G!==po[Be]?Ge(wn,k,rr,2):Be--)}}},Ge=(A,b,k,B,W=null)=>{const{el:$,type:te,transition:Z,children:Y,shapeFlag:G}=A;if(G&6){Ge(A.component.subTree,b,k,B);return}if(G&128){A.suspense.move(b,k,B);return}if(G&64){te.move(A,b,k,ae);return}if(te===Dt){s($,b,k);for(let ne=0;ne<Y.length;ne++)Ge(Y[ne],b,k,B);s(A.anchor,b,k);return}if(te===Kl){D(A,b,k);return}if(B!==2&&G&1&&Z)if(B===0)Z.beforeEnter($),s($,b,k),tn(()=>Z.enter($),W);else{const{leave:ne,delayLeave:ce,afterLeave:ge}=Z,_e=()=>{A.ctx.isUnmounted?i($):s($,b,k)},Ie=()=>{$._isLeaving&&$[Wn](!0),ne($,()=>{_e(),ge&&ge()})};ce?ce($,_e,Ie):Ie()}else s($,b,k)},Re=(A,b,k,B=!1,W=!1)=>{const{type:$,props:te,ref:Z,children:Y,dynamicChildren:G,shapeFlag:pe,patchFlag:ne,dirs:ce,cacheIndex:ge,memo:_e}=A;if(ne===-2&&(W=!1),Z!=null&&(As(),Jo(Z,null,k,A,!0),Rs()),ge!=null&&(b.renderCache[ge]=void 0),pe&256){b.ctx.deactivate(A);return}const Ie=pe&1&&ce,Be=!Zo(A);let rt;if(Be&&(rt=te&&te.onVnodeBeforeUnmount)&&jn(rt,b,A),pe&6)Ut(A.component,k,B);else{if(pe&128){A.suspense.unmount(k,B);return}Ie&&Ci(A,null,b,"beforeUnmount"),pe&64?A.type.remove(A,b,k,ae,B):G&&!G.hasOnce&&($!==Dt||ne>0&&ne&64)?Pt(G,b,k,!1,!0):($===Dt&&ne&384||!W&&pe&16)&&Pt(Y,b,k),B&&Je(A)}const mt=_e!=null&&ge==null;(Be&&(rt=te&&te.onVnodeUnmounted)||Ie||mt)&&tn(()=>{rt&&jn(rt,b,A),Ie&&Ci(A,null,b,"unmounted"),mt&&(A.el=null)},k)},Je=A=>{const{type:b,el:k,anchor:B,transition:W}=A;if(b===Dt){Pn(k,B);return}if(b===Kl){x(A);return}const $=()=>{i(k),W&&!W.persisted&&W.afterLeave&&W.afterLeave()};if(A.shapeFlag&1&&W&&!W.persisted){const{leave:te,delayLeave:Z}=W,Y=()=>te(k,$);Z?Z(A.el,$,Y):Y()}else $()},Pn=(A,b)=>{let k;for(;A!==b;)k=p(A),i(A),A=k;i(b)},Ut=(A,b,k)=>{const{bum:B,scope:W,job:$,subTree:te,um:Z,m:Y,a:G}=A;I_(Y),I_(G),B&&Hl(B),W.stop(),$&&($.flags|=8,Re(te,A,b,k)),Z&&tn(Z,b),tn(()=>{A.isUnmounted=!0},b)},Pt=(A,b,k,B=!1,W=!1,$=0)=>{for(let te=$;te<A.length;te++)Re(A[te],b,k,B,W)},U=A=>{if(A.shapeFlag&6)return U(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const b=p(A.anchor||A.el),k=b&&b[sE];return k?p(k):b};let se=!1;const ee=(A,b,k)=>{let B;A==null?b._vnode&&(Re(b._vnode,null,null,!0),B=b._vnode.component):S(b._vnode||null,A,b,null,null,null,k),b._vnode=A,se||(se=!0,c_(B),Xv(),se=!1)},ae={p:S,um:Re,m:Ge,r:Je,mt:oe,mc:m,pc:H,pbc:w,n:U,o:t};return{render:ee,hydrate:void 0,createApp:DR(ee)}}function Eh({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ri({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function YR(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function wf(t,e,n=!1){const s=t.children,i=e.children;if(de(s)&&de(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=us(i[r]),a.el=o.el),!n&&a.patchFlag!==-2&&wf(o,a)),a.type===cu&&(a.patchFlag===-1&&(a=i[r]=us(a)),a.el=o.el),a.type===rn&&!a.el&&(a.el=o.el)}}function XR(t){const e=t.slice(),n=[0];let s,i,r,o,a;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(i=n[n.length-1],t[i]<u){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<u?r=a+1:o=a;u<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function NE(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:NE(e)}function I_(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function xE(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?xE(e.subTree):null}const OE=t=>t.__isSuspense;function JR(t,e){e&&e.pendingBranch?de(t)?e.effects.push(...t):e.effects.push(t):rR(t)}const Dt=Symbol.for("v-fgt"),cu=Symbol.for("v-txt"),rn=Symbol.for("v-cmt"),Kl=Symbol.for("v-stc"),ta=[];let _n=null;function re(t=!1){ta.push(_n=t?null:[])}function ZR(){ta.pop(),_n=ta[ta.length-1]||null}let wa=1;function fc(t,e=!1){wa+=t,t<0&&_n&&e&&(_n.hasOnce=!0)}function DE(t){return t.dynamicChildren=wa>0?_n||wr:null,ZR(),wa>0&&_n&&_n.push(t),t}function ue(t,e,n,s,i,r){return DE(F(t,e,n,s,i,r,!0))}function ji(t,e,n,s,i){return DE(et(t,e,n,s,i,!0))}function pc(t){return t?t.__v_isVNode===!0:!1}function Oi(t,e){return t.type===e.type&&t.key===e.key}const ME=({key:t})=>t??null,zl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?lt(t)||ht(t)||we(t)?{i:gn,r:t,k:e,f:!!n}:t:null);function F(t,e=null,n=null,s=0,i=null,r=t===Dt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ME(e),ref:e&&zl(e),scopeId:Zv,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:gn};return a?(Tf(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=lt(n)?8:16),wa>0&&!o&&_n&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&_n.push(c),c}const et=eb;function eb(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===_E)&&(t=rn),pc(t)){const a=oi(t,e,!0);return n&&Tf(a,n),wa>0&&!r&&_n&&(a.shapeFlag&6?_n[_n.indexOf(t)]=a:_n.push(a)),a.patchFlag=-2,a}if(hb(t)&&(t=t.__vccOpts),e){e=tb(e);let{class:a,style:c}=e;a&&!lt(a)&&(e.class=Ot(a)),We(c)&&(su(c)&&!de(c)&&(c=Ct({},c)),e.style=Ha(c))}const o=lt(t)?1:OE(t)?128:iE(t)?64:We(t)?4:we(t)?2:0;return F(t,e,n,s,i,o,r,!0)}function tb(t){return t?su(t)||AE(t)?Ct({},t):t:null}function oi(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:c}=t,u=e?nb(i||{},e):i,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&ME(u),ref:e&&e.ref?n&&r?de(r)?r.concat(zl(e)):[r,zl(e)]:zl(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Dt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&oi(t.ssContent),ssFallback:t.ssFallback&&oi(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&Ea(h,c.clone(h)),h}function Di(t=" ",e=0){return et(cu,null,t,e)}function Ql(t,e){const n=et(Kl,null,t);return n.staticCount=e,n}function Me(t="",e=!1){return e?(re(),ji(rn,null,t)):et(rn,null,t)}function Gn(t){return t==null||typeof t=="boolean"?et(rn):de(t)?et(Dt,null,t.slice()):pc(t)?us(t):et(cu,null,String(t))}function us(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:oi(t)}function Tf(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(de(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Tf(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!AE(e)?e._ctx=gn:i===3&&gn&&(gn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else we(e)?(e={default:e,_ctx:gn},n=32):(e=String(e),s&64?(n=16,e=[Di(e)]):n=8);t.children=e,t.shapeFlag|=n}function nb(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Ot([e.class,s.class]));else if(i==="style")e.style=Ha([e.style,s.style]);else if(Qc(i)){const r=e[i],o=s[i];o&&r!==o&&!(de(r)&&r.includes(o))?e[i]=r?[].concat(r,o):o:o==null&&r==null&&!Yc(i)&&(e[i]=o)}else i!==""&&(e[i]=s[i])}return e}function jn(t,e,n,s=null){Un(t,e,7,[n,s])}const sb=EE();let ib=0;function rb(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||sb,r={uid:ib++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Pv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bE(s,i),emitsOptions:wE(s,i),emit:null,emitted:null,propsDefaults:Ye,inheritAttrs:s.inheritAttrs,ctx:Ye,data:Ye,props:Ye,attrs:Ye,slots:Ye,refs:Ye,setupState:Ye,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=LR.bind(null,r),t.ce&&t.ce(r),r}let zt=null;const If=()=>zt||gn;let gc,ud;{const t=tu(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};gc=e("__VUE_INSTANCE_SETTERS__",n=>zt=n),ud=e("__VUE_SSR_SETTERS__",n=>Ta=n)}const Qa=t=>{const e=zt;return gc(t),t.scope.on(),()=>{t.scope.off(),gc(e)}},C_=()=>{zt&&zt.scope.off(),gc(null)};function LE(t){return t.vnode.shapeFlag&4}let Ta=!1;function ob(t,e=!1,n=!1){e&&ud(e);const{props:s,children:i}=t.vnode,r=LE(t);jR(t,s,r,e),GR(t,i,n||e);const o=r?ab(t,e):void 0;return e&&ud(!1),o}function ab(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,bR);const{setup:s}=n;if(s){As();const i=t.setupContext=s.length>1?cb(t):null,r=Qa(t),o=Ka(s,t,0,[t.props,i]),a=Tv(o);if(Rs(),r(),(a||t.sp)&&!Zo(t)&&dE(t),a){if(o.then(C_,C_),e)return o.then(c=>{A_(t,c)}).catch(c=>{iu(c,t,0)});t.asyncDep=o}else A_(t,o)}else VE(t)}function A_(t,e,n){we(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:We(e)&&(t.setupState=zv(e)),VE(t)}function VE(t,e,n){const s=t.type;t.render||(t.render=s.render||Qn);{const i=Qa(t);As();try{SR(t)}finally{Rs(),i()}}}const lb={get(t,e){return Gt(t,"get",""),t[e]}};function cb(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,lb),slots:t.slots,emit:t.emit,expose:e}}function uu(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(zv(mf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ea)return ea[n](t)},has(e,n){return n in e||n in ea}})):t.proxy}function ub(t,e=!0){return we(t)?t.displayName||t.name:t.name||e&&t.__name}function hb(t){return we(t)&&"__vccOpts"in t}const st=(t,e)=>eR(t,e,Ta);function Cf(t,e,n){try{fc(-1);const s=arguments.length;return s===2?We(e)&&!de(e)?pc(e)?et(t,null,[e]):et(t,e):et(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&pc(n)&&(n=[n]),et(t,e,n))}finally{fc(1)}}const db="3.5.32";/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let hd;const R_=typeof window<"u"&&window.trustedTypes;if(R_)try{hd=R_.createPolicy("vue",{createHTML:t=>t})}catch{}const FE=hd?t=>hd.createHTML(t):t=>t,fb="http://www.w3.org/2000/svg",pb="http://www.w3.org/1998/Math/MathML",ls=typeof document<"u"?document:null,b_=ls&&ls.createElement("template"),gb={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?ls.createElementNS(fb,t):e==="mathml"?ls.createElementNS(pb,t):n?ls.createElement(t,{is:n}):ls.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>ls.createTextNode(t),createComment:t=>ls.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ls.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{b_.innerHTML=FE(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=b_.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},qs="transition",Po="animation",Ia=Symbol("_vtc"),UE={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},_b=Ct({},oE,UE),mb=t=>(t.displayName="Transition",t.props=_b,t),Mr=mb((t,{slots:e})=>Cf(gR,yb(t),e)),bi=(t,e=[])=>{de(t)?t.forEach(n=>n(...e)):t&&t(...e)},S_=t=>t?de(t)?t.some(e=>e.length>1):t.length>1:!1;function yb(t){const e={};for(const I in t)I in UE||(e[I]=t[I]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=r,appearActiveClass:u=o,appearToClass:h=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,T=vb(i),S=T&&T[0],P=T&&T[1],{onBeforeEnter:V,onEnter:O,onEnterCancelled:D,onLeave:x,onLeaveCancelled:z,onBeforeAppear:j=V,onAppear:C=O,onAppearCancelled:m=D}=e,v=(I,E,oe,he)=>{I._enterCancelled=he,Si(I,E?h:a),Si(I,E?u:o),oe&&oe()},w=(I,E)=>{I._isLeaving=!1,Si(I,d),Si(I,_),Si(I,p),E&&E()},R=I=>(E,oe)=>{const he=I?C:O,Q=()=>v(E,I,oe);bi(he,[E,Q]),P_(()=>{Si(E,I?c:r),rs(E,I?h:a),S_(he)||k_(E,s,S,Q)})};return Ct(e,{onBeforeEnter(I){bi(V,[I]),rs(I,r),rs(I,o)},onBeforeAppear(I){bi(j,[I]),rs(I,c),rs(I,u)},onEnter:R(!1),onAppear:R(!0),onLeave(I,E){I._isLeaving=!0;const oe=()=>w(I,E);rs(I,d),I._enterCancelled?(rs(I,p),O_(I)):(O_(I),rs(I,p)),P_(()=>{I._isLeaving&&(Si(I,d),rs(I,_),S_(x)||k_(I,s,P,oe))}),bi(x,[I,oe])},onEnterCancelled(I){v(I,!1,void 0,!0),bi(D,[I])},onAppearCancelled(I){v(I,!0,void 0,!0),bi(m,[I])},onLeaveCancelled(I){w(I),bi(z,[I])}})}function vb(t){if(t==null)return null;if(We(t))return[wh(t.enter),wh(t.leave)];{const e=wh(t);return[e,e]}}function wh(t){return vA(t)}function rs(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Ia]||(t[Ia]=new Set)).add(e)}function Si(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[Ia];n&&(n.delete(e),n.size||(t[Ia]=void 0))}function P_(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Eb=0;function k_(t,e,n,s){const i=t._endId=++Eb,r=()=>{i===t._endId&&s()};if(n!=null)return setTimeout(r,n);const{type:o,timeout:a,propCount:c}=wb(t,e);if(!o)return s();const u=o+"end";let h=0;const d=()=>{t.removeEventListener(u,p),r()},p=_=>{_.target===t&&++h>=c&&d()};setTimeout(()=>{h<c&&d()},a+1),t.addEventListener(u,p)}function wb(t,e){const n=window.getComputedStyle(t),s=T=>(n[T]||"").split(", "),i=s(`${qs}Delay`),r=s(`${qs}Duration`),o=N_(i,r),a=s(`${Po}Delay`),c=s(`${Po}Duration`),u=N_(a,c);let h=null,d=0,p=0;e===qs?o>0&&(h=qs,d=o,p=r.length):e===Po?u>0&&(h=Po,d=u,p=c.length):(d=Math.max(o,u),h=d>0?o>u?qs:Po:null,p=h?h===qs?r.length:c.length:0);const _=h===qs&&/\b(?:transform|all)(?:,|$)/.test(s(`${qs}Property`).toString());return{type:h,timeout:d,propCount:p,hasTransform:_}}function N_(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>x_(n)+x_(t[s])))}function x_(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function O_(t){return(t?t.ownerDocument:document).body.offsetHeight}function Tb(t,e,n){const s=t[Ia];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const D_=Symbol("_vod"),Ib=Symbol("_vsh"),Cb=Symbol(""),Ab=/(?:^|;)\s*display\s*:/;function Rb(t,e,n){const s=t.style,i=lt(n);let r=!1;if(n&&!i){if(e)if(lt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Yl(s,a,"")}else for(const o in e)n[o]==null&&Yl(s,o,"");for(const o in n)o==="display"&&(r=!0),Yl(s,o,n[o])}else if(i){if(e!==n){const o=s[Cb];o&&(n+=";"+o),s.cssText=n,r=Ab.test(n)}}else e&&t.removeAttribute("style");D_ in t&&(t[D_]=r?s.display:"",t[Ib]&&(s.display="none"))}const M_=/\s*!important$/;function Yl(t,e,n){if(de(n))n.forEach(s=>Yl(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=bb(t,e);M_.test(n)?t.setProperty(pi(s),n.replace(M_,""),"important"):t[s]=n}}const L_=["Webkit","Moz","ms"],Th={};function bb(t,e){const n=Th[e];if(n)return n;let s=on(e);if(s!=="filter"&&s in t)return Th[e]=s;s=Zc(s);for(let i=0;i<L_.length;i++){const r=L_[i]+s;if(r in t)return Th[e]=r}return e}const V_="http://www.w3.org/1999/xlink";function F_(t,e,n,s,i,r=AA(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(V_,e.slice(6,e.length)):t.setAttributeNS(V_,e,n):n==null||r&&!Rv(n)?t.removeAttribute(e):t.setAttribute(e,r?"":bn(n)?String(n):n)}function U_(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?FE(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Rv(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function fs(t,e,n,s){t.addEventListener(e,n,s)}function Sb(t,e,n,s){t.removeEventListener(e,n,s)}const B_=Symbol("_vei");function Pb(t,e,n,s,i=null){const r=t[B_]||(t[B_]={}),o=r[e];if(s&&o)o.value=s;else{const[a,c]=kb(e);if(s){const u=r[e]=Ob(s,i);fs(t,a,u,c)}else o&&(Sb(t,a,o,c),r[e]=void 0)}}const $_=/(?:Once|Passive|Capture)$/;function kb(t){let e;if($_.test(t)){e={};let s;for(;s=t.match($_);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):pi(t.slice(2)),e]}let Ih=0;const Nb=Promise.resolve(),xb=()=>Ih||(Nb.then(()=>Ih=0),Ih=Date.now());function Ob(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Un(Db(s,n.value),e,5,[s])};return n.value=t,n.attached=xb(),n}function Db(t,e){if(de(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const j_=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Mb=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?Tb(t,s,o):e==="style"?Rb(t,n,s):Qc(e)?Yc(e)||Pb(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Lb(t,e,s,o))?(U_(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&F_(t,e,s,o,r,e!=="value")):t._isVueCE&&(Vb(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!lt(s)))?U_(t,on(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),F_(t,e,s,o))};function Lb(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&j_(e)&&we(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return j_(e)&&lt(n)?!1:e in t}function Vb(t,e){const n=t._def.props;if(!n)return!1;const s=on(e);return Array.isArray(n)?n.some(i=>on(i)===s):Object.keys(n).some(i=>on(i)===s)}const ai=t=>{const e=t.props["onUpdate:modelValue"]||!1;return de(e)?n=>Hl(e,n):e};function Fb(t){t.target.composing=!0}function q_(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Cn=Symbol("_assign");function W_(t,e,n){return e&&(t=t.trim()),n&&(t=eu(t)),t}const _c={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[Cn]=ai(i);const r=s||i.props&&i.props.type==="number";fs(t,e?"change":"input",o=>{o.target.composing||t[Cn](W_(t.value,n,r))}),(n||r)&&fs(t,"change",()=>{t.value=W_(t.value,n,r)}),e||(fs(t,"compositionstart",Fb),fs(t,"compositionend",q_),fs(t,"change",q_))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[Cn]=ai(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?eu(t.value):t.value,c=e??"";if(a===c)return;const u=t.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===c)||(t.value=c)}},Ub={deep:!0,created(t,e,n){t[Cn]=ai(n),fs(t,"change",()=>{const s=t._modelValue,i=Lr(t),r=t.checked,o=t[Cn];if(de(s)){const a=uf(s,i),c=a!==-1;if(r&&!c)o(s.concat(i));else if(!r&&c){const u=[...s];u.splice(a,1),o(u)}}else if(eo(s)){const a=new Set(s);r?a.add(i):a.delete(i),o(a)}else o(BE(t,r))})},mounted:H_,beforeUpdate(t,e,n){t[Cn]=ai(n),H_(t,e,n)}};function H_(t,{value:e,oldValue:n},s){t._modelValue=e;let i;if(de(e))i=uf(e,s.props.value)>-1;else if(eo(e))i=e.has(s.props.value);else{if(e===n)return;i=ri(e,BE(t,!0))}t.checked!==i&&(t.checked=i)}const Bb={created(t,{value:e},n){t.checked=ri(e,n.props.value),t[Cn]=ai(n),fs(t,"change",()=>{t[Cn](Lr(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t[Cn]=ai(s),e!==n&&(t.checked=ri(e,s.props.value))}},$b={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=eo(e);fs(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?eu(Lr(o)):Lr(o));t[Cn](t.multiple?i?new Set(r):r:r[0]),t._assigning=!0,Dr(()=>{t._assigning=!1})}),t[Cn]=ai(s)},mounted(t,{value:e}){G_(t,e)},beforeUpdate(t,e,n){t[Cn]=ai(n)},updated(t,{value:e}){t._assigning||G_(t,e)}};function G_(t,e){const n=t.multiple,s=de(e);if(!(n&&!s&&!eo(e))){for(let i=0,r=t.options.length;i<r;i++){const o=t.options[i],a=Lr(o);if(n)if(s){const c=typeof a;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(a)):o.selected=uf(e,a)>-1}else o.selected=e.has(a);else if(ri(Lr(o),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Lr(t){return"_value"in t?t._value:t.value}function BE(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const RU={created(t,e,n){Dl(t,e,n,null,"created")},mounted(t,e,n){Dl(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){Dl(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){Dl(t,e,n,s,"updated")}};function jb(t,e){switch(t){case"SELECT":return $b;case"TEXTAREA":return _c;default:switch(e){case"checkbox":return Ub;case"radio":return Bb;default:return _c}}}function Dl(t,e,n,s,i){const o=jb(t.tagName,n.props&&n.props.type)[i];o&&o(t,e,n,s)}const qb=["ctrl","shift","alt","meta"],Wb={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>qb.some(n=>t[`${n}Key`]&&!e.includes(n))},dd=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(i,...r)=>{for(let o=0;o<e.length;o++){const a=Wb[e[o]];if(a&&a(i,e))return}return t(i,...r)})},Hb={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Gb=(t,e)=>{const n=t._withKeys||(t._withKeys={}),s=e.join(".");return n[s]||(n[s]=i=>{if(!("key"in i))return;const r=pi(i.key);if(e.some(o=>o===r||Hb[o]===r))return t(i)})},Kb=Ct({patchProp:Mb},gb);let K_;function zb(){return K_||(K_=zR(Kb))}const Qb=(...t)=>{const e=zb().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Xb(s);if(!i)return;const r=e._component;!we(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Yb(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Yb(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Xb(t){return lt(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let $E;const hu=t=>$E=t,jE=Symbol();function fd(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var na;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(na||(na={}));function Jb(){const t=kv(!0),e=t.run(()=>Le({}));let n=[],s=[];const i=mf({install(r){hu(i),i._a=r,r.provide(jE,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return this._a?n.push(r):s.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const qE=()=>{};function z_(t,e,n,s=qE){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&Nv()&&bA(i),i}function hr(t,...e){t.slice().forEach(n=>{n(...e)})}const Zb=t=>t(),Q_=Symbol(),Ch=Symbol();function pd(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];fd(i)&&fd(s)&&t.hasOwnProperty(n)&&!ht(s)&&!ws(s)?t[n]=pd(i,s):t[n]=s}return t}const e0=Symbol();function t0(t){return!fd(t)||!t.hasOwnProperty(e0)}const{assign:Gs}=Object;function n0(t){return!!(ht(t)&&t.effect)}function s0(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let c;function u(){a||(n.state.value[t]=i?i():{});const h=YA(n.state.value[t]);return Gs(h,r,Object.keys(o||{}).reduce((d,p)=>(d[p]=mf(st(()=>{hu(n);const _=n._s.get(t);return o[p].call(_,_)})),d),{}))}return c=WE(t,u,e,n,s,!0),c}function WE(t,e,n={},s,i,r){let o;const a=Gs({actions:{}},n),c={deep:!0};let u,h,d=[],p=[],_;const T=s.state.value[t];!r&&!T&&(s.state.value[t]={});let S;function P(m){let v;u=h=!1,typeof m=="function"?(m(s.state.value[t]),v={type:na.patchFunction,storeId:t,events:_}):(pd(s.state.value[t],m),v={type:na.patchObject,payload:m,storeId:t,events:_});const w=S=Symbol();Dr().then(()=>{S===w&&(u=!0)}),h=!0,hr(d,v,s.state.value[t])}const V=r?function(){const{state:v}=n,w=v?v():{};this.$patch(R=>{Gs(R,w)})}:qE;function O(){o.stop(),d=[],p=[],s._s.delete(t)}const D=(m,v="")=>{if(Q_ in m)return m[Ch]=v,m;const w=function(){hu(s);const R=Array.from(arguments),I=[],E=[];function oe(L){I.push(L)}function he(L){E.push(L)}hr(p,{args:R,name:w[Ch],store:z,after:oe,onError:he});let Q;try{Q=m.apply(this&&this.$id===t?this:z,R)}catch(L){throw hr(E,L),L}return Q instanceof Promise?Q.then(L=>(hr(I,L),L)).catch(L=>(hr(E,L),Promise.reject(L))):(hr(I,Q),Q)};return w[Q_]=!0,w[Ch]=v,w},x={_p:s,$id:t,$onAction:z_.bind(null,p),$patch:P,$reset:V,$subscribe(m,v={}){const w=z_(d,m,v.detached,()=>R()),R=o.run(()=>Cr(()=>s.state.value[t],I=>{(v.flush==="sync"?h:u)&&m({storeId:t,type:na.direct,events:_},I)},Gs({},c,v)));return w},$dispose:O},z=Ga(x);s._s.set(t,z);const C=(s._a&&s._a.runWithContext||Zb)(()=>s._e.run(()=>(o=kv()).run(()=>e({action:D}))));for(const m in C){const v=C[m];if(ht(v)&&!n0(v)||ws(v))r||(T&&t0(v)&&(ht(v)?v.value=T[m]:pd(v,T[m])),s.state.value[t][m]=v);else if(typeof v=="function"){const w=D(v,m);C[m]=w,a.actions[m]=v}}return Gs(z,C),Gs(De(z),C),Object.defineProperty(z,"$state",{get:()=>s.state.value[t],set:m=>{P(v=>{Gs(v,m)})}}),s._p.forEach(m=>{Gs(z,o.run(()=>m({store:z,app:s._a,pinia:s,options:a})))}),T&&r&&n.hydrate&&n.hydrate(z.$state,T),u=!0,h=!0,z}/*! #__NO_SIDE_EFFECTS__ */function HE(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(a,c){const u=oR();return a=a||(u?Mn(jE,null):null),a&&hu(a),a=$E,a._s.has(s)||(r?WE(s,e,i,a):s0(s,i,a)),a._s.get(s)}return o.$id=s,o}const i0="modulepreload",r0=function(t){return"/"+t},Y_={},dr=function(e,n,s){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=r0(c),c in Y_)return;Y_[c]=!0;const u=c.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":i0,u||(d.as="script"),d.crossOrigin="",d.href=c,a&&d.setAttribute("nonce",a),document.head.appendChild(d),u)return new Promise((p,_)=>{d.addEventListener("load",p),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const gr=typeof document<"u";function GE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function o0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&GE(t.default)}const je=Object.assign;function Ah(t,e){const n={};for(const s in e){const i=e[s];n[s]=Bn(i)?i.map(t):t(i)}return n}const sa=()=>{},Bn=Array.isArray;function X_(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}const KE=/#/g,a0=/&/g,l0=/\//g,c0=/=/g,u0=/\?/g,zE=/\+/g,h0=/%5B/g,d0=/%5D/g,QE=/%5E/g,f0=/%60/g,YE=/%7B/g,p0=/%7C/g,XE=/%7D/g,g0=/%20/g;function Af(t){return t==null?"":encodeURI(""+t).replace(p0,"|").replace(h0,"[").replace(d0,"]")}function _0(t){return Af(t).replace(YE,"{").replace(XE,"}").replace(QE,"^")}function gd(t){return Af(t).replace(zE,"%2B").replace(g0,"+").replace(KE,"%23").replace(a0,"%26").replace(f0,"`").replace(YE,"{").replace(XE,"}").replace(QE,"^")}function m0(t){return gd(t).replace(c0,"%3D")}function y0(t){return Af(t).replace(KE,"%23").replace(u0,"%3F")}function v0(t){return y0(t).replace(l0,"%2F")}function Ca(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const E0=/\/$/,w0=t=>t.replace(E0,"");function Rh(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return c=a>=0&&c>a?-1:c,c>=0&&(s=e.slice(0,c),r=e.slice(c,a>0?a:e.length),i=t(r.slice(1))),a>=0&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=A0(s??e,n),{fullPath:s+r+o,path:s,query:i,hash:Ca(o)}}function T0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function J_(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function I0(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Vr(e.matched[s],n.matched[i])&&JE(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Vr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function JE(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!C0(t[n],e[n]))return!1;return!0}function C0(t,e){return Bn(t)?Z_(t,e):Bn(e)?Z_(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function Z_(t,e){return Bn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function A0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const Ws={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let _d=function(t){return t.pop="pop",t.push="push",t}({}),bh=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function R0(t){if(!t)if(gr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),w0(t)}const b0=/^[^#]+#/;function S0(t,e){return t.replace(b0,"#")+e}function P0(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const du=()=>({left:window.scrollX,top:window.scrollY});function k0(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=P0(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function em(t,e){return(history.state?history.state.position-e:-1)+t}const md=new Map;function N0(t,e){md.set(t,e)}function x0(t){const e=md.get(t);return md.delete(t),e}function O0(t){return typeof t=="string"||t&&typeof t=="object"}function ZE(t){return typeof t=="string"||typeof t=="symbol"}let ut=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const ew=Symbol("");ut.MATCHER_NOT_FOUND+"",ut.NAVIGATION_GUARD_REDIRECT+"",ut.NAVIGATION_ABORTED+"",ut.NAVIGATION_CANCELLED+"",ut.NAVIGATION_DUPLICATED+"";function Fr(t,e){return je(new Error,{type:t,[ew]:!0},e)}function os(t,e){return t instanceof Error&&ew in t&&(e==null||!!(t.type&e))}const D0=["params","query","hash"];function M0(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of D0)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function L0(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<n.length;++s){const i=n[s].replace(zE," "),r=i.indexOf("="),o=Ca(r<0?i:i.slice(0,r)),a=r<0?null:Ca(i.slice(r+1));if(o in e){let c=e[o];Bn(c)||(c=e[o]=[c]),c.push(a)}else e[o]=a}return e}function tm(t){let e="";for(let n in t){const s=t[n];if(n=m0(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Bn(s)?s.map(i=>i&&gd(i)):[s&&gd(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function V0(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Bn(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const F0=Symbol(""),nm=Symbol(""),fu=Symbol(""),tw=Symbol(""),yd=Symbol("");function ko(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function zs(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((a,c)=>{const u=p=>{p===!1?c(Fr(ut.NAVIGATION_ABORTED,{from:n,to:e})):p instanceof Error?c(p):O0(p)?c(Fr(ut.NAVIGATION_GUARD_REDIRECT,{from:e,to:p})):(o&&s.enterCallbacks[i]===o&&typeof p=="function"&&o.push(p),a())},h=r(()=>t.call(s&&s.instances[i],e,n,u));let d=Promise.resolve(h);t.length<3&&(d=d.then(u)),d.catch(p=>c(p))})}function Sh(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(GE(c)){const u=(c.__vccOpts||c)[e];u&&r.push(zs(u,n,s,o,a,i))}else{let u=c();r.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=o0(h)?h.default:h;o.mods[a]=h,o.components[a]=d;const p=(d.__vccOpts||d)[e];return p&&zs(p,n,s,o,a,i)()}))}}return r}function U0(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(u=>Vr(u,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>Vr(u,c))||i.push(c))}return[n,s,i]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let B0=()=>location.protocol+"//"+location.host;function nw(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let o=i.includes(t.slice(r))?t.slice(r).length:1,a=i.slice(o);return a[0]!=="/"&&(a="/"+a),J_(a,"")}return J_(n,t)+s+i}function $0(t,e,n,s){let i=[],r=[],o=null;const a=({state:p})=>{const _=nw(t,location),T=n.value,S=e.value;let P=0;if(p){if(n.value=_,e.value=p,o&&o===T){o=null;return}P=S?p.position-S.position:0}else s(_);i.forEach(V=>{V(n.value,T,{delta:P,type:_d.pop,direction:P?P>0?bh.forward:bh.back:bh.unknown})})};function c(){o=n.value}function u(p){i.push(p);const _=()=>{const T=i.indexOf(p);T>-1&&i.splice(T,1)};return r.push(_),_}function h(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(je({},p.state,{scroll:du()}),"")}}function d(){for(const p of r)p();r=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",h),document.removeEventListener("visibilitychange",h)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",h),document.addEventListener("visibilitychange",h),{pauseListeners:c,listen:u,destroy:d}}function sm(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?du():null}}function j0(t){const{history:e,location:n}=window,s={value:nw(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,u,h){const d=t.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:B0()+t+c;try{e[h?"replaceState":"pushState"](u,"",p),i.value=u}catch(_){console.error(_),n[h?"replace":"assign"](p)}}function o(c,u){r(c,je({},e.state,sm(i.value.back,c,i.value.forward,!0),u,{position:i.value.position}),!0),s.value=c}function a(c,u){const h=je({},i.value,e.state,{forward:c,scroll:du()});r(h.current,h,!0),r(c,je({},sm(s.value,c,null),{position:h.position+1},u),!1),s.value=c}return{location:s,state:i,push:a,replace:o}}function q0(t){t=R0(t);const e=j0(t),n=$0(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=je({location:"",base:t,go:s,createHref:S0.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}let Mi=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var Tt=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}(Tt||{});const W0={type:Mi.Static,value:""},H0=/[a-zA-Z0-9_]/;function G0(t){if(!t)return[[]];if(t==="/")return[[W0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=Tt.Static,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,c,u="",h="";function d(){u&&(n===Tt.Static?r.push({type:Mi.Static,value:u}):n===Tt.Param||n===Tt.ParamRegExp||n===Tt.ParamRegExpEnd?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:Mi.Param,value:u,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==Tt.ParamRegExp){s=n,n=Tt.EscapeNext;continue}switch(n){case Tt.Static:c==="/"?(u&&d(),o()):c===":"?(d(),n=Tt.Param):p();break;case Tt.EscapeNext:p(),n=s;break;case Tt.Param:c==="("?n=Tt.ParamRegExp:H0.test(c)?p():(d(),n=Tt.Static,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case Tt.ParamRegExp:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:n=Tt.ParamRegExpEnd:h+=c;break;case Tt.ParamRegExpEnd:d(),n=Tt.Static,c!=="*"&&c!=="?"&&c!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===Tt.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),i}const im="[^/]+?",K0={sensitive:!1,strict:!1,start:!0,end:!0};var nn=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}(nn||{});const z0=/[.+*?^${}()[\]/\\]/g;function Q0(t,e){const n=je({},K0,e),s=[];let i=n.start?"^":"";const r=[];for(const u of t){const h=u.length?[]:[nn.Root];n.strict&&!u.length&&(i+="/");for(let d=0;d<u.length;d++){const p=u[d];let _=nn.Segment+(n.sensitive?nn.BonusCaseSensitive:0);if(p.type===Mi.Static)d||(i+="/"),i+=p.value.replace(z0,"\\$&"),_+=nn.Static;else if(p.type===Mi.Param){const{value:T,repeatable:S,optional:P,regexp:V}=p;r.push({name:T,repeatable:S,optional:P});const O=V||im;if(O!==im){_+=nn.BonusCustomRegExp;try{`${O}`}catch(x){throw new Error(`Invalid custom RegExp for param "${T}" (${O}): `+x.message)}}let D=S?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;d||(D=P&&u.length<2?`(?:/${D})`:"/"+D),P&&(D+="?"),i+=D,_+=nn.Dynamic,P&&(_+=nn.BonusOptional),S&&(_+=nn.BonusRepeatable),O===".*"&&(_+=nn.BonusWildcard)}h.push(_)}s.push(h)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=nn.BonusStrict}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(u){const h=u.match(o),d={};if(!h)return null;for(let p=1;p<h.length;p++){const _=h[p]||"",T=r[p-1];d[T.name]=_&&T.repeatable?_.split("/"):_}return d}function c(u){let h="",d=!1;for(const p of t){(!d||!h.endsWith("/"))&&(h+="/"),d=!1;for(const _ of p)if(_.type===Mi.Static)h+=_.value;else if(_.type===Mi.Param){const{value:T,repeatable:S,optional:P}=_,V=T in u?u[T]:"";if(Bn(V)&&!S)throw new Error(`Provided param "${T}" is an array but it is not repeatable (* or + modifiers)`);const O=Bn(V)?V.join("/"):V;if(!O)if(P)p.length<2&&(h.endsWith("/")?h=h.slice(0,-1):d=!0);else throw new Error(`Missing required param "${T}"`);h+=O}}return h||"/"}return{re:o,score:s,keys:r,parse:a,stringify:c}}function Y0(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===nn.Static+nn.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===nn.Static+nn.Segment?1:-1:0}function sw(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=Y0(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(rm(s))return 1;if(rm(i))return-1}return i.length-s.length}function rm(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const X0={strict:!1,end:!0,sensitive:!1};function J0(t,e,n){const s=Q0(G0(t.path),n),i=je(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function Z0(t,e){const n=[],s=new Map;e=X_(X0,e);function i(d){return s.get(d)}function r(d,p,_){const T=!_,S=am(d);S.aliasOf=_&&_.record;const P=X_(e,d),V=[S];if("alias"in d){const x=typeof d.alias=="string"?[d.alias]:d.alias;for(const z of x)V.push(am(je({},S,{components:_?_.record.components:S.components,path:z,aliasOf:_?_.record:S})))}let O,D;for(const x of V){const{path:z}=x;if(p&&z[0]!=="/"){const j=p.record.path,C=j[j.length-1]==="/"?"":"/";x.path=p.record.path+(z&&C+z)}if(O=J0(x,p,P),_?_.alias.push(O):(D=D||O,D!==O&&D.alias.push(O),T&&d.name&&!lm(O)&&o(d.name)),iw(O)&&c(O),S.children){const j=S.children;for(let C=0;C<j.length;C++)r(j[C],O,_&&_.children[C])}_=_||O}return D?()=>{o(D)}:sa}function o(d){if(ZE(d)){const p=s.get(d);p&&(s.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&s.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function c(d){const p=nS(d,n);n.splice(p,0,d),d.record.name&&!lm(d)&&s.set(d.record.name,d)}function u(d,p){let _,T={},S,P;if("name"in d&&d.name){if(_=s.get(d.name),!_)throw Fr(ut.MATCHER_NOT_FOUND,{location:d});P=_.record.name,T=je(om(p.params,_.keys.filter(D=>!D.optional).concat(_.parent?_.parent.keys.filter(D=>D.optional):[]).map(D=>D.name)),d.params&&om(d.params,_.keys.map(D=>D.name))),S=_.stringify(T)}else if(d.path!=null)S=d.path,_=n.find(D=>D.re.test(S)),_&&(T=_.parse(S),P=_.record.name);else{if(_=p.name?s.get(p.name):n.find(D=>D.re.test(p.path)),!_)throw Fr(ut.MATCHER_NOT_FOUND,{location:d,currentLocation:p});P=_.record.name,T=je({},p.params,d.params),S=_.stringify(T)}const V=[];let O=_;for(;O;)V.unshift(O.record),O=O.parent;return{name:P,path:S,params:T,matched:V,meta:tS(V)}}t.forEach(d=>r(d));function h(){n.length=0,s.clear()}return{addRoute:r,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:i}}function om(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function am(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:eS(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function eS(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function lm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function tS(t){return t.reduce((e,n)=>je(e,n.meta),{})}function nS(t,e){let n=0,s=e.length;for(;n!==s;){const r=n+s>>1;sw(t,e[r])<0?s=r:n=r+1}const i=sS(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function sS(t){let e=t;for(;e=e.parent;)if(iw(e)&&sw(t,e)===0)return e}function iw({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function cm(t){const e=Mn(fu),n=Mn(tw),s=st(()=>{const c=Ce(t.to);return e.resolve(c)}),i=st(()=>{const{matched:c}=s.value,{length:u}=c,h=c[u-1],d=n.matched;if(!h||!d.length)return-1;const p=d.findIndex(Vr.bind(null,h));if(p>-1)return p;const _=um(c[u-2]);return u>1&&um(h)===_&&d[d.length-1].path!==_?d.findIndex(Vr.bind(null,c[u-2])):p}),r=st(()=>i.value>-1&&lS(n.params,s.value.params)),o=st(()=>i.value>-1&&i.value===n.matched.length-1&&JE(n.params,s.value.params));function a(c={}){if(aS(c)){const u=e[Ce(t.replace)?"replace":"push"](Ce(t.to)).catch(sa);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:st(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}function iS(t){return t.length===1?t[0]:t}const rS=hE({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:cm,setup(t,{slots:e}){const n=Ga(cm(t)),{options:s}=Mn(fu),i=st(()=>({[hm(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[hm(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&iS(e.default(n));return t.custom?r:Cf("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),oS=rS;function aS(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function lS(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Bn(i)||i.length!==s.length||s.some((r,o)=>r.valueOf()!==i[o].valueOf()))return!1}return!0}function um(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const hm=(t,e,n)=>t??e??n,cS=hE({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Mn(yd),i=st(()=>t.route||s.value),r=Mn(nm,0),o=st(()=>{let u=Ce(r);const{matched:h}=i.value;let d;for(;(d=h[u])&&!d.components;)u++;return u}),a=st(()=>i.value.matched[o.value]);Gl(nm,st(()=>o.value+1)),Gl(F0,a),Gl(yd,i);const c=Le();return Cr(()=>[c.value,a.value,t.name],([u,h,d],[p,_,T])=>{h&&(h.instances[d]=u,_&&_!==h&&u&&u===p&&(h.leaveGuards.size||(h.leaveGuards=_.leaveGuards),h.updateGuards.size||(h.updateGuards=_.updateGuards))),u&&h&&(!_||!Vr(h,_)||!p)&&(h.enterCallbacks[d]||[]).forEach(S=>S(u))},{flush:"post"}),()=>{const u=i.value,h=t.name,d=a.value,p=d&&d.components[h];if(!p)return dm(n.default,{Component:p,route:u});const _=d.props[h],T=_?_===!0?u.params:typeof _=="function"?_(u):_:null,P=Cf(p,je({},T,e,{onVnodeUnmounted:V=>{V.component.isUnmounted&&(d.instances[h]=null)},ref:c}));return dm(n.default,{Component:P,route:u})||P}}});function dm(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const uS=cS;function hS(t){const e=Z0(t.routes,t),n=t.parseQuery||L0,s=t.stringifyQuery||tm,i=t.history,r=ko(),o=ko(),a=ko(),c=KA(Ws);let u=Ws;gr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Ah.bind(null,U=>""+U),d=Ah.bind(null,v0),p=Ah.bind(null,Ca);function _(U,se){let ee,ae;return ZE(U)?(ee=e.getRecordMatcher(U),ae=se):ae=U,e.addRoute(ae,ee)}function T(U){const se=e.getRecordMatcher(U);se&&e.removeRoute(se)}function S(){return e.getRoutes().map(U=>U.record)}function P(U){return!!e.getRecordMatcher(U)}function V(U,se){if(se=je({},se||c.value),typeof U=="string"){const k=Rh(n,U,se.path),B=e.resolve({path:k.path},se),W=i.createHref(k.fullPath);return je(k,B,{params:p(B.params),hash:Ca(k.hash),redirectedFrom:void 0,href:W})}let ee;if(U.path!=null)ee=je({},U,{path:Rh(n,U.path,se.path).path});else{const k=je({},U.params);for(const B in k)k[B]==null&&delete k[B];ee=je({},U,{params:d(k)}),se.params=d(se.params)}const ae=e.resolve(ee,se),be=U.hash||"";ae.params=h(p(ae.params));const A=T0(s,je({},U,{hash:_0(be),path:ae.path})),b=i.createHref(A);return je({fullPath:A,hash:be,query:s===tm?V0(U.query):U.query||{}},ae,{redirectedFrom:void 0,href:b})}function O(U){return typeof U=="string"?Rh(n,U,c.value.path):je({},U)}function D(U,se){if(u!==U)return Fr(ut.NAVIGATION_CANCELLED,{from:se,to:U})}function x(U){return C(U)}function z(U){return x(je(O(U),{replace:!0}))}function j(U,se){const ee=U.matched[U.matched.length-1];if(ee&&ee.redirect){const{redirect:ae}=ee;let be=typeof ae=="function"?ae(U,se):ae;return typeof be=="string"&&(be=be.includes("?")||be.includes("#")?be=O(be):{path:be},be.params={}),je({query:U.query,hash:U.hash,params:be.path!=null?{}:U.params},be)}}function C(U,se){const ee=u=V(U),ae=c.value,be=U.state,A=U.force,b=U.replace===!0,k=j(ee,ae);if(k)return C(je(O(k),{state:typeof k=="object"?je({},be,k.state):be,force:A,replace:b}),se||ee);const B=ee;B.redirectedFrom=se;let W;return!A&&I0(s,ae,ee)&&(W=Fr(ut.NAVIGATION_DUPLICATED,{to:B,from:ae}),Ge(ae,ae,!0,!1)),(W?Promise.resolve(W):w(B,ae)).catch($=>os($)?os($,ut.NAVIGATION_GUARD_REDIRECT)?$:Ue($):H($,B,ae)).then($=>{if($){if(os($,ut.NAVIGATION_GUARD_REDIRECT))return C(je({replace:b},O($.to),{state:typeof $.to=="object"?je({},be,$.to.state):be,force:A}),se||B)}else $=I(B,ae,!0,b,be);return R(B,ae,$),$})}function m(U,se){const ee=D(U,se);return ee?Promise.reject(ee):Promise.resolve()}function v(U){const se=Pn.values().next().value;return se&&typeof se.runWithContext=="function"?se.runWithContext(U):U()}function w(U,se){let ee;const[ae,be,A]=U0(U,se);ee=Sh(ae.reverse(),"beforeRouteLeave",U,se);for(const k of ae)k.leaveGuards.forEach(B=>{ee.push(zs(B,U,se))});const b=m.bind(null,U,se);return ee.push(b),Pt(ee).then(()=>{ee=[];for(const k of r.list())ee.push(zs(k,U,se));return ee.push(b),Pt(ee)}).then(()=>{ee=Sh(be,"beforeRouteUpdate",U,se);for(const k of be)k.updateGuards.forEach(B=>{ee.push(zs(B,U,se))});return ee.push(b),Pt(ee)}).then(()=>{ee=[];for(const k of A)if(k.beforeEnter)if(Bn(k.beforeEnter))for(const B of k.beforeEnter)ee.push(zs(B,U,se));else ee.push(zs(k.beforeEnter,U,se));return ee.push(b),Pt(ee)}).then(()=>(U.matched.forEach(k=>k.enterCallbacks={}),ee=Sh(A,"beforeRouteEnter",U,se,v),ee.push(b),Pt(ee))).then(()=>{ee=[];for(const k of o.list())ee.push(zs(k,U,se));return ee.push(b),Pt(ee)}).catch(k=>os(k,ut.NAVIGATION_CANCELLED)?k:Promise.reject(k))}function R(U,se,ee){a.list().forEach(ae=>v(()=>ae(U,se,ee)))}function I(U,se,ee,ae,be){const A=D(U,se);if(A)return A;const b=se===Ws,k=gr?history.state:{};ee&&(ae||b?i.replace(U.fullPath,je({scroll:b&&k&&k.scroll},be)):i.push(U.fullPath,be)),c.value=U,Ge(U,se,ee,b),Ue()}let E;function oe(){E||(E=i.listen((U,se,ee)=>{if(!Ut.listening)return;const ae=V(U),be=j(ae,Ut.currentRoute.value);if(be){C(je(be,{replace:!0,force:!0}),ae).catch(sa);return}u=ae;const A=c.value;gr&&N0(em(A.fullPath,ee.delta),du()),w(ae,A).catch(b=>os(b,ut.NAVIGATION_ABORTED|ut.NAVIGATION_CANCELLED)?b:os(b,ut.NAVIGATION_GUARD_REDIRECT)?(C(je(O(b.to),{force:!0}),ae).then(k=>{os(k,ut.NAVIGATION_ABORTED|ut.NAVIGATION_DUPLICATED)&&!ee.delta&&ee.type===_d.pop&&i.go(-1,!1)}).catch(sa),Promise.reject()):(ee.delta&&i.go(-ee.delta,!1),H(b,ae,A))).then(b=>{b=b||I(ae,A,!1),b&&(ee.delta&&!os(b,ut.NAVIGATION_CANCELLED)?i.go(-ee.delta,!1):ee.type===_d.pop&&os(b,ut.NAVIGATION_ABORTED|ut.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),R(ae,A,b)}).catch(sa)}))}let he=ko(),Q=ko(),L;function H(U,se,ee){Ue(U);const ae=Q.list();return ae.length?ae.forEach(be=>be(U,se,ee)):console.error(U),Promise.reject(U)}function Ae(){return L&&c.value!==Ws?Promise.resolve():new Promise((U,se)=>{he.add([U,se])})}function Ue(U){return L||(L=!U,oe(),he.list().forEach(([se,ee])=>U?ee(U):se()),he.reset()),U}function Ge(U,se,ee,ae){const{scrollBehavior:be}=t;if(!gr||!be)return Promise.resolve();const A=!ee&&x0(em(U.fullPath,0))||(ae||!ee)&&history.state&&history.state.scroll||null;return Dr().then(()=>be(U,se,A)).then(b=>b&&k0(b)).catch(b=>H(b,U,se))}const Re=U=>i.go(U);let Je;const Pn=new Set,Ut={currentRoute:c,listening:!0,addRoute:_,removeRoute:T,clearRoutes:e.clearRoutes,hasRoute:P,getRoutes:S,resolve:V,options:t,push:x,replace:z,go:Re,back:()=>Re(-1),forward:()=>Re(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Q.add,isReady:Ae,install(U){U.component("RouterLink",oS),U.component("RouterView",uS),U.config.globalProperties.$router=Ut,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>Ce(c)}),gr&&!Je&&c.value===Ws&&(Je=!0,x(i.location).catch(ae=>{}));const se={};for(const ae in Ws)Object.defineProperty(se,ae,{get:()=>c.value[ae],enumerable:!0});U.provide(fu,Ut),U.provide(tw,Gv(se)),U.provide(yd,c);const ee=U.unmount;Pn.add(U),U.unmount=function(){Pn.delete(U),Pn.size<1&&(u=Ws,E&&E(),E=null,c.value=Ws,Je=!1,L=!1),ee()}}};function Pt(U){return U.reduce((se,ee)=>se.then(()=>v(ee)),Promise.resolve())}return Ut}function bU(){return Mn(fu)}var fm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X=function(t,e){if(!t)throw to(e)},to=function(t){return new Error("Firebase Database ("+rw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},dS=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Rf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,h=r>>2,d=(r&3)<<4|a>>4;let p=(a&15)<<2|u>>6,_=u&63;c||(_=64,o||(p=64)),s.push(n[h],n[d],n[p],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ow(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||u==null||d==null)throw new fS;const p=r<<2|a>>4;if(s.push(p),u!==64){const _=a<<4&240|u>>2;if(s.push(_),d!==64){const T=u<<6&192|d;s.push(T)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class fS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const aw=function(t){const e=ow(t);return Rf.encodeByteArray(e,!0)},mc=function(t){return aw(t).replace(/\./g,"")},yc=function(t){try{return Rf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(t){return lw(void 0,t)}function lw(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!gS(n)||(t[n]=lw(t[n],e[n]));return t}function gS(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _S(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS=()=>_S().__FIREBASE_DEFAULTS__,yS=()=>{if(typeof process>"u"||typeof fm>"u")return;const t=fm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},vS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&yc(t[1]);return e&&JSON.parse(e)},pu=()=>{try{return mS()||yS()||vS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},cw=t=>{var e,n;return(n=(e=pu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},bf=t=>{const e=cw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},uw=()=>{var t;return(t=pu())===null||t===void 0?void 0:t.config},hw=t=>{var e;return(e=pu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sf(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[mc(JSON.stringify(n)),mc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Yt())}function ES(){var t;const e=(t=pu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function wS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function TS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function dw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function IS(){const t=Yt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function CS(){return rw.NODE_ADMIN===!0}function AS(){return!ES()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function RS(){try{return typeof indexedDB=="object"}catch{return!1}}function bS(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS="FirebaseError";class es extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=SS,Object.setPrototypeOf(this,es.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ya.prototype.create)}}class Ya{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?PS(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new es(i,a,s)}}function PS(t,e){return t.replace(kS,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const kS=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(t){return JSON.parse(t)}function St(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Aa(yc(r[0])||""),n=Aa(yc(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},NS=function(t){const e=fw(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},xS=function(t){const e=fw(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ur(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function vc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ec(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Ra(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(pm(r)&&pm(o)){if(!Ra(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function pm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function $o(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function jo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const p=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(p<<1|p>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],u,h;for(let d=0;d<80;d++){d<40?d<20?(u=a^r&(o^a),h=1518500249):(u=r^o^a,h=1859775393):d<60?(u=r&o|a&(r|o),h=2400959708):(u=r^o^a,h=3395469782);const p=(i<<5|i>>>27)+u+c+h+s[d]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=p}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function DS(t,e){const n=new MS(t,e);return n.subscribe.bind(n)}class MS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");LS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Ph),i.error===void 0&&(i.error=Ph),i.complete===void 0&&(i.complete=Ph);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function LS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ph(){}function Br(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,X(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},gu=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(t){return t&&t._delegate?t._delegate:t}class Ss{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ps;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(BS(e))try{this.getOrInitializeService({instanceIdentifier:ki})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=ki){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ki){return this.instances.has(e)}getOptions(e=ki){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:US(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ki){return this.component?this.component.multipleInstances?e:ki:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function US(t){return t===ki?void 0:t}function BS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new FS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ne||(Ne={}));const jS={debug:Ne.DEBUG,verbose:Ne.VERBOSE,info:Ne.INFO,warn:Ne.WARN,error:Ne.ERROR,silent:Ne.SILENT},qS=Ne.INFO,WS={[Ne.DEBUG]:"log",[Ne.VERBOSE]:"log",[Ne.INFO]:"info",[Ne.WARN]:"warn",[Ne.ERROR]:"error"},HS=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=WS[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _u{constructor(e){this.name=e,this._logLevel=qS,this._logHandler=HS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ne.DEBUG,...e),this._logHandler(this,Ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ne.VERBOSE,...e),this._logHandler(this,Ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ne.INFO,...e),this._logHandler(this,Ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ne.WARN,...e),this._logHandler(this,Ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ne.ERROR,...e),this._logHandler(this,Ne.ERROR,...e)}}const GS=(t,e)=>e.some(n=>t instanceof n);let gm,_m;function KS(){return gm||(gm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zS(){return _m||(_m=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pw=new WeakMap,vd=new WeakMap,gw=new WeakMap,kh=new WeakMap,kf=new WeakMap;function QS(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(ei(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&pw.set(n,t)}).catch(()=>{}),kf.set(e,t),e}function YS(t){if(vd.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});vd.set(t,e)}let Ed={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return vd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||gw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ei(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function XS(t){Ed=t(Ed)}function JS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Nh(this),e,...n);return gw.set(s,e.sort?e.sort():[e]),ei(s)}:zS().includes(t)?function(...e){return t.apply(Nh(this),e),ei(pw.get(this))}:function(...e){return ei(t.apply(Nh(this),e))}}function ZS(t){return typeof t=="function"?JS(t):(t instanceof IDBTransaction&&YS(t),GS(t,KS())?new Proxy(t,Ed):t)}function ei(t){if(t instanceof IDBRequest)return QS(t);if(kh.has(t))return kh.get(t);const e=ZS(t);return e!==t&&(kh.set(t,e),kf.set(e,t)),e}const Nh=t=>kf.get(t);function eP(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=ei(o);return s&&o.addEventListener("upgradeneeded",c=>{s(ei(o.result),c.oldVersion,c.newVersion,ei(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const tP=["get","getKey","getAll","getAllKeys","count"],nP=["put","add","delete","clear"],xh=new Map;function mm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xh.get(e))return xh.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=nP.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||tP.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return xh.set(e,r),r}XS(t=>({...t,get:(e,n,s)=>mm(e,n)||t.get(e,n,s),has:(e,n)=>!!mm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(iP(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function iP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wd="@firebase/app",ym="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=new _u("@firebase/app"),rP="@firebase/app-compat",oP="@firebase/analytics-compat",aP="@firebase/analytics",lP="@firebase/app-check-compat",cP="@firebase/app-check",uP="@firebase/auth",hP="@firebase/auth-compat",dP="@firebase/database",fP="@firebase/data-connect",pP="@firebase/database-compat",gP="@firebase/functions",_P="@firebase/functions-compat",mP="@firebase/installations",yP="@firebase/installations-compat",vP="@firebase/messaging",EP="@firebase/messaging-compat",wP="@firebase/performance",TP="@firebase/performance-compat",IP="@firebase/remote-config",CP="@firebase/remote-config-compat",AP="@firebase/storage",RP="@firebase/storage-compat",bP="@firebase/firestore",SP="@firebase/vertexai-preview",PP="@firebase/firestore-compat",kP="firebase",NP="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td="[DEFAULT]",xP={[wd]:"fire-core",[rP]:"fire-core-compat",[aP]:"fire-analytics",[oP]:"fire-analytics-compat",[cP]:"fire-app-check",[lP]:"fire-app-check-compat",[uP]:"fire-auth",[hP]:"fire-auth-compat",[dP]:"fire-rtdb",[fP]:"fire-data-connect",[pP]:"fire-rtdb-compat",[gP]:"fire-fn",[_P]:"fire-fn-compat",[mP]:"fire-iid",[yP]:"fire-iid-compat",[vP]:"fire-fcm",[EP]:"fire-fcm-compat",[wP]:"fire-perf",[TP]:"fire-perf-compat",[IP]:"fire-rc",[CP]:"fire-rc-compat",[AP]:"fire-gcs",[RP]:"fire-gcs-compat",[bP]:"fire-fst",[PP]:"fire-fst-compat",[SP]:"fire-vertex","fire-js":"fire-js",[kP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc=new Map,OP=new Map,Id=new Map;function vm(t,e){try{t.container.addComponent(e)}catch(n){Ps.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function li(t){const e=t.name;if(Id.has(e))return Ps.debug(`There were multiple attempts to register component ${e}.`),!1;Id.set(e,t);for(const n of wc.values())vm(n,t);for(const n of OP.values())vm(n,t);return!0}function Xa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function xn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ti=new Ya("app","Firebase",DP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ss("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ti.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=NP;function _w(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Td,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw ti.create("bad-app-name",{appName:String(i)});if(n||(n=uw()),!n)throw ti.create("no-options");const r=wc.get(i);if(r){if(Ra(n,r.options)&&Ra(s,r.config))return r;throw ti.create("duplicate-app",{appName:i})}const o=new $S(i);for(const c of Id.values())o.addComponent(c);const a=new MP(n,s,o);return wc.set(i,a),a}function mu(t=Td){const e=wc.get(t);if(!e&&t===Td&&uw())return _w();if(!e)throw ti.create("no-app",{appName:t});return e}function An(t,e,n){var s;let i=(s=xP[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ps.warn(a.join(" "));return}li(new Ss(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LP="firebase-heartbeat-database",VP=1,ba="firebase-heartbeat-store";let Oh=null;function mw(){return Oh||(Oh=eP(LP,VP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ba)}catch(n){console.warn(n)}}}}).catch(t=>{throw ti.create("idb-open",{originalErrorMessage:t.message})})),Oh}async function FP(t){try{const n=(await mw()).transaction(ba),s=await n.objectStore(ba).get(yw(t));return await n.done,s}catch(e){if(e instanceof es)Ps.warn(e.message);else{const n=ti.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ps.warn(n.message)}}}async function Em(t,e){try{const s=(await mw()).transaction(ba,"readwrite");await s.objectStore(ba).put(e,yw(t)),await s.done}catch(n){if(n instanceof es)Ps.warn(n.message);else{const s=ti.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ps.warn(s.message)}}}function yw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UP=1024,BP=30*24*60*60*1e3;class $P{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new qP(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=wm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=BP}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Ps.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=wm(),{heartbeatsToSend:s,unsentEntries:i}=jP(this._heartbeatsCache.heartbeats),r=mc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return Ps.warn(n),""}}}function wm(){return new Date().toISOString().substring(0,10)}function jP(t,e=UP){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Tm(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Tm(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class qP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return RS()?bS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await FP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Em(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Em(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Tm(t){return mc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WP(t){li(new Ss("platform-logger",e=>new sP(e),"PRIVATE")),li(new Ss("heartbeat",e=>new $P(e),"PRIVATE")),An(wd,ym,t),An(wd,ym,"esm2017"),An("fire-js","")}WP("");function Nf(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function vw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const HP=vw,Ew=new Ya("auth","Firebase",vw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc=new _u("@firebase/auth");function GP(t,...e){Tc.logLevel<=Ne.WARN&&Tc.warn(`Auth (${gi}): ${t}`,...e)}function Xl(t,...e){Tc.logLevel<=Ne.ERROR&&Tc.error(`Auth (${gi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(t,...e){throw Of(t,...e)}function Ln(t,...e){return Of(t,...e)}function xf(t,e,n){const s=Object.assign(Object.assign({},HP()),{[e]:n});return new Ya("auth","Firebase",s).create(e,{appName:t.name})}function Ts(t){return xf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function KP(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Sn(t,"argument-error"),xf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Of(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Ew.create(t,...e)}function me(t,e,...n){if(!t)throw Of(e,...n)}function _s(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Xl(e),new Error(e)}function ks(t,e){t||_s(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function zP(){return Im()==="http:"||Im()==="https:"}function Im(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zP()||TS()||"connection"in navigator)?navigator.onLine:!0}function YP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,n){this.shortDelay=e,this.longDelay=n,ks(n>e,"Short delay should be less than long delay!"),this.isMobile=Pf()||dw()}get(){return QP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(t,e){ks(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_s("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_s("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_s("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP=new Ja(3e4,6e4);function _i(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Vs(t,e,n,s,i={}){return Tw(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=no(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},r);return wS()||(u.referrerPolicy="no-referrer"),ww.fetch()(Iw(t,t.config.apiHost,n,a),u)})}async function Tw(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},XP),e);try{const i=new ek(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Ml(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ml(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ml(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ml(t,"user-disabled",o);const h=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw xf(t,h,u);Sn(t,h)}}catch(i){if(i instanceof es)throw i;Sn(t,"network-request-failed",{message:String(i)})}}async function Za(t,e,n,s,i={}){const r=await Vs(t,e,n,s,i);return"mfaPendingCredential"in r&&Sn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Iw(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Df(t.config,i):`${t.config.apiScheme}://${i}`}function ZP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ek{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ln(this.auth,"network-request-failed")),JP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ml(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Ln(t,e,s);return i.customData._tokenResponse=n,i}function Cm(t){return t!==void 0&&t.enterprise!==void 0}class tk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return ZP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function nk(t,e){return Vs(t,"GET","/v2/recaptchaConfig",_i(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sk(t,e){return Vs(t,"POST","/v1/accounts:delete",e)}async function Cw(t,e){return Vs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ik(t,e=!1){const n=He(t),s=await n.getIdToken(e),i=Mf(s);me(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:ia(Dh(i.auth_time)),issuedAtTime:ia(Dh(i.iat)),expirationTime:ia(Dh(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Dh(t){return Number(t)*1e3}function Mf(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Xl("JWT malformed, contained fewer than 3 sections"),null;try{const i=yc(n);return i?JSON.parse(i):(Xl("Failed to decode base64 JWT payload"),null)}catch(i){return Xl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Am(t){const e=Mf(t);return me(e,"internal-error"),me(typeof e.exp<"u","internal-error"),me(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $r(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof es&&rk(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function rk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ia(this.lastLoginAt),this.creationTime=ia(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ic(t){var e;const n=t.auth,s=await t.getIdToken(),i=await $r(t,Cw(n,{idToken:s}));me(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Aw(r.providerUserInfo):[],a=lk(t.providerData,o),c=t.isAnonymous,u=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),h=c?u:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Ad(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function ak(t){const e=He(t);await Ic(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lk(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Aw(t){return t.map(e=>{var{providerId:n}=e,s=Nf(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ck(t,e){const n=await Tw(t,{},async()=>{const s=no({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Iw(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ww.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function uk(t,e){return Vs(t,"POST","/v2/accounts:revokeToken",_i(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){me(e.idToken,"internal-error"),me(typeof e.idToken<"u","internal-error"),me(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Am(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){me(e.length!==0,"internal-error");const n=Am(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(me(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await ck(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Ar;return s&&(me(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(me(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(me(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ar,this.toJSON())}_performRefresh(){return _s("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(t,e){me(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ms{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Nf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ok(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Ad(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await $r(this,this.stsTokenManager.getToken(this.auth,e));return me(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ik(this,e)}reload(){return ak(this)}_assign(e){this!==e&&(me(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ms(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){me(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ic(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xn(this.auth.app))return Promise.reject(Ts(this.auth));const e=await this.getIdToken();return await $r(this,sk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,c,u,h;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,_=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,V=(u=n.createdAt)!==null&&u!==void 0?u:void 0,O=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:D,emailVerified:x,isAnonymous:z,providerData:j,stsTokenManager:C}=n;me(D&&C,e,"internal-error");const m=Ar.fromJSON(this.name,C);me(typeof D=="string",e,"internal-error"),Hs(d,e.name),Hs(p,e.name),me(typeof x=="boolean",e,"internal-error"),me(typeof z=="boolean",e,"internal-error"),Hs(_,e.name),Hs(T,e.name),Hs(S,e.name),Hs(P,e.name),Hs(V,e.name),Hs(O,e.name);const v=new ms({uid:D,auth:e,email:p,emailVerified:x,displayName:d,isAnonymous:z,photoURL:T,phoneNumber:_,tenantId:S,stsTokenManager:m,createdAt:V,lastLoginAt:O});return j&&Array.isArray(j)&&(v.providerData=j.map(w=>Object.assign({},w))),P&&(v._redirectEventId=P),v}static async _fromIdTokenResponse(e,n,s=!1){const i=new Ar;i.updateFromServerResponse(n);const r=new ms({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Ic(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];me(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Aw(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new Ar;a.updateFromIdToken(s);const c=new ms({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Ad(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm=new Map;function ys(t){ks(t instanceof Function,"Expected a class definition");let e=Rm.get(t);return e?(ks(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Rm.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Rw.type="NONE";const bm=Rw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(t,e,n){return`firebase:${t}:${e}:${n}`}class Rr{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Jl(this.userKey,i.apiKey,r),this.fullPersistenceKey=Jl("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ms._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Rr(ys(bm),e,s);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||ys(bm);const o=Jl(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const d=ms._fromJSON(e,h);u!==r&&(a=d),r=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Rr(r,e,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new Rr(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xw(e))return"Blackberry";if(Ow(e))return"Webos";if(Sw(e))return"Safari";if((e.includes("chrome/")||Pw(e))&&!e.includes("edge/"))return"Chrome";if(Nw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function bw(t=Yt()){return/firefox\//i.test(t)}function Sw(t=Yt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Pw(t=Yt()){return/crios\//i.test(t)}function kw(t=Yt()){return/iemobile/i.test(t)}function Nw(t=Yt()){return/android/i.test(t)}function xw(t=Yt()){return/blackberry/i.test(t)}function Ow(t=Yt()){return/webos/i.test(t)}function Lf(t=Yt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function hk(t=Yt()){var e;return Lf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function dk(){return IS()&&document.documentMode===10}function Dw(t=Yt()){return Lf(t)||Nw(t)||Ow(t)||xw(t)||/windows phone/i.test(t)||kw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(t,e=[]){let n;switch(t){case"Browser":n=Sm(Yt());break;case"Worker":n=`${Sm(Yt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${gi}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pk(t,e={}){return Vs(t,"GET","/v2/passwordPolicy",_i(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gk=6;class _k{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:gk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pm(this),this.idTokenSubscription=new Pm(this),this.beforeStateQueue=new fk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ew,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ys(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Rr.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Cw(this,{idToken:e}),s=await ms._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(xn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return me(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ic(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=YP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xn(this.app))return Promise.reject(Ts(this));const n=e?He(e):null;return n&&me(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&me(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xn(this.app)?Promise.reject(Ts(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xn(this.app)?Promise.reject(Ts(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ys(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await pk(this),n=new _k(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ya("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await uk(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ys(e)||this._popupRedirectResolver;me(n,this,"argument-error"),this.redirectPersistenceManager=await Rr.create(this,[ys(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(me(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return me(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&GP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function mi(t){return He(t)}class Pm{constructor(e){this.auth=e,this.observer=null,this.addObserver=DS(n=>this.observer=n)}get next(){return me(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function yk(t){yu=t}function Lw(t){return yu.loadJS(t)}function vk(){return yu.recaptchaEnterpriseScript}function Ek(){return yu.gapiScript}function wk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Tk="recaptcha-enterprise",Ik="NO_RECAPTCHA";class Ck{constructor(e){this.type=Tk,this.auth=mi(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{nk(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new tk(c);return r.tenantId==null?r._agentRecaptchaConfig=u:r._tenantRecaptchaConfigs[r.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function i(r,o,a){const c=window.grecaptcha;Cm(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:e}).then(u=>{o(u)}).catch(()=>{o(Ik)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&Cm(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=vk();c.length!==0&&(c+=a),Lw(c).then(()=>{i(a,r,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function km(t,e,n,s=!1){const i=new Ck(t);let r;try{r=await i.verify(n)}catch{r=await i.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Rd(t,e,n,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await km(t,e,n,n==="getOobCode");return s(t,r)}else return s(t,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await km(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(r)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ak(t,e){const n=Xa(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Ra(r,e??{}))return i;Sn(i,"already-initialized")}return n.initialize({options:e})}function Rk(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ys);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function bk(t,e,n){const s=mi(t);me(s._canInitEmulator,s,"emulator-config-failed"),me(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=Vw(e),{host:o,port:a}=Sk(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),Pk()}function Vw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Sk(t){const e=Vw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Nm(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Nm(o)}}}function Nm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Pk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return _s("not implemented")}_getIdTokenResponse(e){return _s("not implemented")}_linkToIdToken(e,n){return _s("not implemented")}_getReauthenticationResolver(e){return _s("not implemented")}}async function kk(t,e){return Vs(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nk(t,e){return Za(t,"POST","/v1/accounts:signInWithPassword",_i(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xk(t,e){return Za(t,"POST","/v1/accounts:signInWithEmailLink",_i(t,e))}async function Ok(t,e){return Za(t,"POST","/v1/accounts:signInWithEmailLink",_i(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa extends Vf{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Sa(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Sa(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rd(e,n,"signInWithPassword",Nk);case"emailLink":return xk(e,{email:this._email,oobCode:this._password});default:Sn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rd(e,s,"signUpPassword",kk);case"emailLink":return Ok(e,{idToken:n,email:this._email,oobCode:this._password});default:Sn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function br(t,e){return Za(t,"POST","/v1/accounts:signInWithIdp",_i(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dk="http://localhost";class Hi extends Vf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Hi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Sn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Nf(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Hi(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return br(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,br(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,br(e,n)}buildRequest(){const e={requestUri:Dk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=no(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Lk(t){const e=$o(jo(t)).link,n=e?$o(jo(e)).deep_link_id:null,s=$o(jo(t)).deep_link_id;return(s?$o(jo(s)).link:null)||s||n||e||t}class Ff{constructor(e){var n,s,i,r,o,a;const c=$o(jo(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,h=(s=c.oobCode)!==null&&s!==void 0?s:null,d=Mk((i=c.mode)!==null&&i!==void 0?i:null);me(u&&h&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=h,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Lk(e);try{return new Ff(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(){this.providerId=so.PROVIDER_ID}static credential(e,n){return Sa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Ff.parseLink(n);return me(s,"argument-error"),Sa._fromEmailAndCode(e,s.code,s.tenantId)}}so.PROVIDER_ID="password";so.EMAIL_PASSWORD_SIGN_IN_METHOD="password";so.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el extends Uf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs extends el{constructor(){super("facebook.com")}static credential(e){return Hi._fromParams({providerId:Qs.PROVIDER_ID,signInMethod:Qs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qs.credentialFromTaggedObject(e)}static credentialFromError(e){return Qs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qs.credential(e.oauthAccessToken)}catch{return null}}}Qs.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qs.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs extends el{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Hi._fromParams({providerId:gs.PROVIDER_ID,signInMethod:gs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return gs.credentialFromTaggedObject(e)}static credentialFromError(e){return gs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return gs.credential(n,s)}catch{return null}}}gs.GOOGLE_SIGN_IN_METHOD="google.com";gs.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys extends el{constructor(){super("github.com")}static credential(e){return Hi._fromParams({providerId:Ys.PROVIDER_ID,signInMethod:Ys.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ys.credentialFromTaggedObject(e)}static credentialFromError(e){return Ys.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ys.credential(e.oauthAccessToken)}catch{return null}}}Ys.GITHUB_SIGN_IN_METHOD="github.com";Ys.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs extends el{constructor(){super("twitter.com")}static credential(e,n){return Hi._fromParams({providerId:Xs.PROVIDER_ID,signInMethod:Xs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xs.credentialFromTaggedObject(e)}static credentialFromError(e){return Xs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Xs.credential(n,s)}catch{return null}}}Xs.TWITTER_SIGN_IN_METHOD="twitter.com";Xs.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vk(t,e){return Za(t,"POST","/v1/accounts:signUp",_i(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await ms._fromIdTokenResponse(e,s,i),o=xm(s);return new Gi({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=xm(s);return new Gi({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function xm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc extends es{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Cc.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Cc(e,n,s,i)}}function Fw(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Cc._fromErrorAndOperation(t,r,e,s):r})}async function Fk(t,e,n=!1){const s=await $r(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gi._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uk(t,e,n=!1){const{auth:s}=t;if(xn(s.app))return Promise.reject(Ts(s));const i="reauthenticate";try{const r=await $r(t,Fw(s,i,e,t),n);me(r.idToken,s,"internal-error");const o=Mf(r.idToken);me(o,s,"internal-error");const{sub:a}=o;return me(t.uid===a,s,"user-mismatch"),Gi._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Sn(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uw(t,e,n=!1){if(xn(t.app))return Promise.reject(Ts(t));const s="signIn",i=await Fw(t,s,e),r=await Gi._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function Bk(t,e){return Uw(mi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bw(t){const e=mi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function $k(t,e,n){if(xn(t.app))return Promise.reject(Ts(t));const s=mi(t),o=await Rd(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Vk).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Bw(t),c}),a=await Gi._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function jk(t,e,n){return xn(t.app)?Promise.reject(Ts(t)):Bk(He(t),so.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Bw(t),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qk(t,e){return Vs(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wk(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=He(t),r={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await $r(s,qk(s.auth,r));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function Hk(t,e,n,s){return He(t).onIdTokenChanged(e,n,s)}function Gk(t,e,n){return He(t).beforeAuthStateChanged(e,n)}function Kk(t,e,n,s){return He(t).onAuthStateChanged(e,n,s)}function zk(t){return He(t).signOut()}const Ac="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ac,"1"),this.storage.removeItem(Ac),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qk=1e3,Yk=10;class jw extends $w{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Dw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);dk()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Yk):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Qk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}jw.type="LOCAL";const Xk=jw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw extends $w{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}qw.type="SESSION";const Ww=qw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new vu(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,r)),c=await Jk(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const u=Bf("",20);i.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(p.data.response);break;default:clearTimeout(h),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(){return window}function eN(t){Yn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hw(){return typeof Yn().WorkerGlobalScope<"u"&&typeof Yn().importScripts=="function"}async function tN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function sN(){return Hw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw="firebaseLocalStorageDb",iN=1,Rc="firebaseLocalStorage",Kw="fbase_key";class tl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Eu(t,e){return t.transaction([Rc],e?"readwrite":"readonly").objectStore(Rc)}function rN(){const t=indexedDB.deleteDatabase(Gw);return new tl(t).toPromise()}function bd(){const t=indexedDB.open(Gw,iN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Rc,{keyPath:Kw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Rc)?e(s):(s.close(),await rN(),e(await bd()))})})}async function Om(t,e,n){const s=Eu(t,!0).put({[Kw]:e,value:n});return new tl(s).toPromise()}async function oN(t,e){const n=Eu(t,!1).get(e),s=await new tl(n).toPromise();return s===void 0?null:s.value}function Dm(t,e){const n=Eu(t,!0).delete(e);return new tl(n).toPromise()}const aN=800,lN=3;class zw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>lN)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vu._getInstance(sN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await tN(),!this.activeServiceWorker)return;this.sender=new Zk(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bd();return await Om(e,Ac,"1"),await Dm(e,Ac),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Om(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>oN(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Dm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Eu(i,!1).getAll();return new tl(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zw.type="LOCAL";const cN=zw;new Ja(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qw(t,e){return e?ys(e):(me(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f extends Vf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return br(e,this._buildIdpRequest())}_linkToIdToken(e,n){return br(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return br(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function uN(t){return Uw(t.auth,new $f(t),t.bypassAuthState)}function hN(t){const{auth:e,user:n}=t;return me(n,e,"internal-error"),Uk(n,new $f(t),t.bypassAuthState)}async function dN(t){const{auth:e,user:n}=t;return me(n,e,"internal-error"),Fk(n,new $f(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return uN;case"linkViaPopup":case"linkViaRedirect":return dN;case"reauthViaPopup":case"reauthViaRedirect":return hN;default:Sn(this.auth,"internal-error")}}resolve(e){ks(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ks(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fN=new Ja(2e3,1e4);async function pN(t,e,n){if(xn(t.app))return Promise.reject(Ln(t,"operation-not-supported-in-this-environment"));const s=mi(t);KP(t,e,Uf);const i=Qw(s,n);return new Li(s,"signInViaPopup",e,i).executeNotNull()}class Li extends Yw{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Li.currentPopupAction&&Li.currentPopupAction.cancel(),Li.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return me(e,this.auth,"internal-error"),e}async onExecution(){ks(this.filter.length===1,"Popup operations only handle one event");const e=Bf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Li.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ln(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,fN.get())};e()}}Li.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gN="pendingRedirect",Zl=new Map;class _N extends Yw{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Zl.get(this.auth._key());if(!e){try{const s=await mN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Zl.set(this.auth._key(),e)}return this.bypassAuthState||Zl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mN(t,e){const n=EN(e),s=vN(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function yN(t,e){Zl.set(t._key(),e)}function vN(t){return ys(t._redirectPersistence)}function EN(t){return Jl(gN,t.config.apiKey,t.name)}async function wN(t,e,n=!1){if(xn(t.app))return Promise.reject(Ts(t));const s=mi(t),i=Qw(s,e),o=await new _N(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN=10*60*1e3;class IN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!CN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Xw(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ln(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=TN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mm(e))}saveEventToCache(e){this.cachedEventUids.add(Mm(e)),this.lastProcessedEventTime=Date.now()}}function Mm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Xw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function CN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AN(t,e={}){return Vs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bN=/^https?/;async function SN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await AN(t);for(const n of e)try{if(PN(n))return}catch{}Sn(t,"unauthorized-domain")}function PN(t){const e=Cd(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!bN.test(n))return!1;if(RN.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kN=new Ja(3e4,6e4);function Lm(){const t=Yn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function NN(t){return new Promise((e,n)=>{var s,i,r;function o(){Lm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Lm(),n(Ln(t,"network-request-failed"))},timeout:kN.get()})}if(!((i=(s=Yn().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Yn().gapi)===null||r===void 0)&&r.load)o();else{const a=wk("iframefcb");return Yn()[a]=()=>{gapi.load?o():n(Ln(t,"network-request-failed"))},Lw(`${Ek()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ec=null,e})}let ec=null;function xN(t){return ec=ec||NN(t),ec}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ON=new Ja(5e3,15e3),DN="__/auth/iframe",MN="emulator/auth/iframe",LN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},VN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function FN(t){const e=t.config;me(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Df(e,MN):`https://${t.config.authDomain}/${DN}`,s={apiKey:e.apiKey,appName:t.name,v:gi},i=VN.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${no(s).slice(1)}`}async function UN(t){const e=await xN(t),n=Yn().gapi;return me(n,t,"internal-error"),e.open({where:document.body,url:FN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:LN,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Ln(t,"network-request-failed"),a=Yn().setTimeout(()=>{r(o)},ON.get());function c(){Yn().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$N=500,jN=600,qN="_blank",WN="http://localhost";class Vm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function HN(t,e,n,s=$N,i=jN){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},BN),{width:s.toString(),height:i.toString(),top:r,left:o}),u=Yt().toLowerCase();n&&(a=Pw(u)?qN:n),bw(u)&&(e=e||WN,c.scrollbars="yes");const h=Object.entries(c).reduce((p,[_,T])=>`${p}${_}=${T},`,"");if(hk(u)&&a!=="_self")return GN(e||"",a),new Vm(null);const d=window.open(e||"",a,h);me(d,t,"popup-blocked");try{d.focus()}catch{}return new Vm(d)}function GN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KN="__/auth/handler",zN="emulator/auth/handler",QN=encodeURIComponent("fac");async function Fm(t,e,n,s,i,r){me(t.config.authDomain,t,"auth-domain-config-required"),me(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:gi,eventId:i};if(e instanceof Uf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",vc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof el){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await t._getAppCheckToken(),u=c?`#${QN}=${encodeURIComponent(c)}`:"";return`${YN(t)}?${no(a).slice(1)}${u}`}function YN({config:t}){return t.emulator?Df(t,zN):`https://${t.authDomain}/${KN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh="webStorageSupport";class XN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ww,this._completeRedirectFn=wN,this._overrideRedirectResult=yN}async _openPopup(e,n,s,i){var r;ks((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Fm(e,n,s,Cd(),i);return HN(e,o,Bf())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await Fm(e,n,s,Cd(),i);return eN(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(ks(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await UN(e),s=new IN(e);return n.register("authEvent",i=>(me(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Mh,{type:Mh},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Mh];o!==void 0&&n(!!o),Sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=SN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Dw()||Sw()||Lf()}}const JN=XN;var Um="@firebase/auth",Bm="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){me(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function t1(t){li(new Ss("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;me(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mw(t)},u=new mk(s,i,r,c);return Rk(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),li(new Ss("auth-internal",e=>{const n=mi(e.getProvider("auth").getImmediate());return(s=>new ZN(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),An(Um,Bm,e1(t)),An(Um,Bm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1=5*60,s1=hw("authIdTokenMaxAge")||n1;let $m=null;const i1=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>s1)return;const i=n==null?void 0:n.token;$m!==i&&($m=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function r1(t=mu()){const e=Xa(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ak(t,{popupRedirectResolver:JN,persistence:[cN,Xk,Ww]}),s=hw("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=i1(r.toString());Gk(n,o,()=>o(n.currentUser)),Hk(n,a=>o(a))}}const i=cw("auth");return i&&bk(n,`http://${i}`),n}function o1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}yk({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Ln("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",o1().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});t1("Browser");var jm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qi,Jw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,m){function v(){}v.prototype=m.prototype,C.D=m.prototype,C.prototype=new v,C.prototype.constructor=C,C.C=function(w,R,I){for(var E=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)E[oe-2]=arguments[oe];return m.prototype[R].apply(w,E)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(C,m,v){v||(v=0);var w=Array(16);if(typeof m=="string")for(var R=0;16>R;++R)w[R]=m.charCodeAt(v++)|m.charCodeAt(v++)<<8|m.charCodeAt(v++)<<16|m.charCodeAt(v++)<<24;else for(R=0;16>R;++R)w[R]=m[v++]|m[v++]<<8|m[v++]<<16|m[v++]<<24;m=C.g[0],v=C.g[1],R=C.g[2];var I=C.g[3],E=m+(I^v&(R^I))+w[0]+3614090360&4294967295;m=v+(E<<7&4294967295|E>>>25),E=I+(R^m&(v^R))+w[1]+3905402710&4294967295,I=m+(E<<12&4294967295|E>>>20),E=R+(v^I&(m^v))+w[2]+606105819&4294967295,R=I+(E<<17&4294967295|E>>>15),E=v+(m^R&(I^m))+w[3]+3250441966&4294967295,v=R+(E<<22&4294967295|E>>>10),E=m+(I^v&(R^I))+w[4]+4118548399&4294967295,m=v+(E<<7&4294967295|E>>>25),E=I+(R^m&(v^R))+w[5]+1200080426&4294967295,I=m+(E<<12&4294967295|E>>>20),E=R+(v^I&(m^v))+w[6]+2821735955&4294967295,R=I+(E<<17&4294967295|E>>>15),E=v+(m^R&(I^m))+w[7]+4249261313&4294967295,v=R+(E<<22&4294967295|E>>>10),E=m+(I^v&(R^I))+w[8]+1770035416&4294967295,m=v+(E<<7&4294967295|E>>>25),E=I+(R^m&(v^R))+w[9]+2336552879&4294967295,I=m+(E<<12&4294967295|E>>>20),E=R+(v^I&(m^v))+w[10]+4294925233&4294967295,R=I+(E<<17&4294967295|E>>>15),E=v+(m^R&(I^m))+w[11]+2304563134&4294967295,v=R+(E<<22&4294967295|E>>>10),E=m+(I^v&(R^I))+w[12]+1804603682&4294967295,m=v+(E<<7&4294967295|E>>>25),E=I+(R^m&(v^R))+w[13]+4254626195&4294967295,I=m+(E<<12&4294967295|E>>>20),E=R+(v^I&(m^v))+w[14]+2792965006&4294967295,R=I+(E<<17&4294967295|E>>>15),E=v+(m^R&(I^m))+w[15]+1236535329&4294967295,v=R+(E<<22&4294967295|E>>>10),E=m+(R^I&(v^R))+w[1]+4129170786&4294967295,m=v+(E<<5&4294967295|E>>>27),E=I+(v^R&(m^v))+w[6]+3225465664&4294967295,I=m+(E<<9&4294967295|E>>>23),E=R+(m^v&(I^m))+w[11]+643717713&4294967295,R=I+(E<<14&4294967295|E>>>18),E=v+(I^m&(R^I))+w[0]+3921069994&4294967295,v=R+(E<<20&4294967295|E>>>12),E=m+(R^I&(v^R))+w[5]+3593408605&4294967295,m=v+(E<<5&4294967295|E>>>27),E=I+(v^R&(m^v))+w[10]+38016083&4294967295,I=m+(E<<9&4294967295|E>>>23),E=R+(m^v&(I^m))+w[15]+3634488961&4294967295,R=I+(E<<14&4294967295|E>>>18),E=v+(I^m&(R^I))+w[4]+3889429448&4294967295,v=R+(E<<20&4294967295|E>>>12),E=m+(R^I&(v^R))+w[9]+568446438&4294967295,m=v+(E<<5&4294967295|E>>>27),E=I+(v^R&(m^v))+w[14]+3275163606&4294967295,I=m+(E<<9&4294967295|E>>>23),E=R+(m^v&(I^m))+w[3]+4107603335&4294967295,R=I+(E<<14&4294967295|E>>>18),E=v+(I^m&(R^I))+w[8]+1163531501&4294967295,v=R+(E<<20&4294967295|E>>>12),E=m+(R^I&(v^R))+w[13]+2850285829&4294967295,m=v+(E<<5&4294967295|E>>>27),E=I+(v^R&(m^v))+w[2]+4243563512&4294967295,I=m+(E<<9&4294967295|E>>>23),E=R+(m^v&(I^m))+w[7]+1735328473&4294967295,R=I+(E<<14&4294967295|E>>>18),E=v+(I^m&(R^I))+w[12]+2368359562&4294967295,v=R+(E<<20&4294967295|E>>>12),E=m+(v^R^I)+w[5]+4294588738&4294967295,m=v+(E<<4&4294967295|E>>>28),E=I+(m^v^R)+w[8]+2272392833&4294967295,I=m+(E<<11&4294967295|E>>>21),E=R+(I^m^v)+w[11]+1839030562&4294967295,R=I+(E<<16&4294967295|E>>>16),E=v+(R^I^m)+w[14]+4259657740&4294967295,v=R+(E<<23&4294967295|E>>>9),E=m+(v^R^I)+w[1]+2763975236&4294967295,m=v+(E<<4&4294967295|E>>>28),E=I+(m^v^R)+w[4]+1272893353&4294967295,I=m+(E<<11&4294967295|E>>>21),E=R+(I^m^v)+w[7]+4139469664&4294967295,R=I+(E<<16&4294967295|E>>>16),E=v+(R^I^m)+w[10]+3200236656&4294967295,v=R+(E<<23&4294967295|E>>>9),E=m+(v^R^I)+w[13]+681279174&4294967295,m=v+(E<<4&4294967295|E>>>28),E=I+(m^v^R)+w[0]+3936430074&4294967295,I=m+(E<<11&4294967295|E>>>21),E=R+(I^m^v)+w[3]+3572445317&4294967295,R=I+(E<<16&4294967295|E>>>16),E=v+(R^I^m)+w[6]+76029189&4294967295,v=R+(E<<23&4294967295|E>>>9),E=m+(v^R^I)+w[9]+3654602809&4294967295,m=v+(E<<4&4294967295|E>>>28),E=I+(m^v^R)+w[12]+3873151461&4294967295,I=m+(E<<11&4294967295|E>>>21),E=R+(I^m^v)+w[15]+530742520&4294967295,R=I+(E<<16&4294967295|E>>>16),E=v+(R^I^m)+w[2]+3299628645&4294967295,v=R+(E<<23&4294967295|E>>>9),E=m+(R^(v|~I))+w[0]+4096336452&4294967295,m=v+(E<<6&4294967295|E>>>26),E=I+(v^(m|~R))+w[7]+1126891415&4294967295,I=m+(E<<10&4294967295|E>>>22),E=R+(m^(I|~v))+w[14]+2878612391&4294967295,R=I+(E<<15&4294967295|E>>>17),E=v+(I^(R|~m))+w[5]+4237533241&4294967295,v=R+(E<<21&4294967295|E>>>11),E=m+(R^(v|~I))+w[12]+1700485571&4294967295,m=v+(E<<6&4294967295|E>>>26),E=I+(v^(m|~R))+w[3]+2399980690&4294967295,I=m+(E<<10&4294967295|E>>>22),E=R+(m^(I|~v))+w[10]+4293915773&4294967295,R=I+(E<<15&4294967295|E>>>17),E=v+(I^(R|~m))+w[1]+2240044497&4294967295,v=R+(E<<21&4294967295|E>>>11),E=m+(R^(v|~I))+w[8]+1873313359&4294967295,m=v+(E<<6&4294967295|E>>>26),E=I+(v^(m|~R))+w[15]+4264355552&4294967295,I=m+(E<<10&4294967295|E>>>22),E=R+(m^(I|~v))+w[6]+2734768916&4294967295,R=I+(E<<15&4294967295|E>>>17),E=v+(I^(R|~m))+w[13]+1309151649&4294967295,v=R+(E<<21&4294967295|E>>>11),E=m+(R^(v|~I))+w[4]+4149444226&4294967295,m=v+(E<<6&4294967295|E>>>26),E=I+(v^(m|~R))+w[11]+3174756917&4294967295,I=m+(E<<10&4294967295|E>>>22),E=R+(m^(I|~v))+w[2]+718787259&4294967295,R=I+(E<<15&4294967295|E>>>17),E=v+(I^(R|~m))+w[9]+3951481745&4294967295,C.g[0]=C.g[0]+m&4294967295,C.g[1]=C.g[1]+(R+(E<<21&4294967295|E>>>11))&4294967295,C.g[2]=C.g[2]+R&4294967295,C.g[3]=C.g[3]+I&4294967295}s.prototype.u=function(C,m){m===void 0&&(m=C.length);for(var v=m-this.blockSize,w=this.B,R=this.h,I=0;I<m;){if(R==0)for(;I<=v;)i(this,C,I),I+=this.blockSize;if(typeof C=="string"){for(;I<m;)if(w[R++]=C.charCodeAt(I++),R==this.blockSize){i(this,w),R=0;break}}else for(;I<m;)if(w[R++]=C[I++],R==this.blockSize){i(this,w),R=0;break}}this.h=R,this.o+=m},s.prototype.v=function(){var C=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);C[0]=128;for(var m=1;m<C.length-8;++m)C[m]=0;var v=8*this.o;for(m=C.length-8;m<C.length;++m)C[m]=v&255,v/=256;for(this.u(C),C=Array(16),m=v=0;4>m;++m)for(var w=0;32>w;w+=8)C[v++]=this.g[m]>>>w&255;return C};function r(C,m){var v=a;return Object.prototype.hasOwnProperty.call(v,C)?v[C]:v[C]=m(C)}function o(C,m){this.h=m;for(var v=[],w=!0,R=C.length-1;0<=R;R--){var I=C[R]|0;w&&I==m||(v[R]=I,w=!1)}this.g=v}var a={};function c(C){return-128<=C&&128>C?r(C,function(m){return new o([m|0],0>m?-1:0)}):new o([C|0],0>C?-1:0)}function u(C){if(isNaN(C)||!isFinite(C))return d;if(0>C)return P(u(-C));for(var m=[],v=1,w=0;C>=v;w++)m[w]=C/v|0,v*=4294967296;return new o(m,0)}function h(C,m){if(C.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(C.charAt(0)=="-")return P(h(C.substring(1),m));if(0<=C.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(m,8)),w=d,R=0;R<C.length;R+=8){var I=Math.min(8,C.length-R),E=parseInt(C.substring(R,R+I),m);8>I?(I=u(Math.pow(m,I)),w=w.j(I).add(u(E))):(w=w.j(v),w=w.add(u(E)))}return w}var d=c(0),p=c(1),_=c(16777216);t=o.prototype,t.m=function(){if(S(this))return-P(this).m();for(var C=0,m=1,v=0;v<this.g.length;v++){var w=this.i(v);C+=(0<=w?w:4294967296+w)*m,m*=4294967296}return C},t.toString=function(C){if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(T(this))return"0";if(S(this))return"-"+P(this).toString(C);for(var m=u(Math.pow(C,6)),v=this,w="";;){var R=x(v,m).g;v=V(v,R.j(m));var I=((0<v.g.length?v.g[0]:v.h)>>>0).toString(C);if(v=R,T(v))return I+w;for(;6>I.length;)I="0"+I;w=I+w}},t.i=function(C){return 0>C?0:C<this.g.length?this.g[C]:this.h};function T(C){if(C.h!=0)return!1;for(var m=0;m<C.g.length;m++)if(C.g[m]!=0)return!1;return!0}function S(C){return C.h==-1}t.l=function(C){return C=V(this,C),S(C)?-1:T(C)?0:1};function P(C){for(var m=C.g.length,v=[],w=0;w<m;w++)v[w]=~C.g[w];return new o(v,~C.h).add(p)}t.abs=function(){return S(this)?P(this):this},t.add=function(C){for(var m=Math.max(this.g.length,C.g.length),v=[],w=0,R=0;R<=m;R++){var I=w+(this.i(R)&65535)+(C.i(R)&65535),E=(I>>>16)+(this.i(R)>>>16)+(C.i(R)>>>16);w=E>>>16,I&=65535,E&=65535,v[R]=E<<16|I}return new o(v,v[v.length-1]&-2147483648?-1:0)};function V(C,m){return C.add(P(m))}t.j=function(C){if(T(this)||T(C))return d;if(S(this))return S(C)?P(this).j(P(C)):P(P(this).j(C));if(S(C))return P(this.j(P(C)));if(0>this.l(_)&&0>C.l(_))return u(this.m()*C.m());for(var m=this.g.length+C.g.length,v=[],w=0;w<2*m;w++)v[w]=0;for(w=0;w<this.g.length;w++)for(var R=0;R<C.g.length;R++){var I=this.i(w)>>>16,E=this.i(w)&65535,oe=C.i(R)>>>16,he=C.i(R)&65535;v[2*w+2*R]+=E*he,O(v,2*w+2*R),v[2*w+2*R+1]+=I*he,O(v,2*w+2*R+1),v[2*w+2*R+1]+=E*oe,O(v,2*w+2*R+1),v[2*w+2*R+2]+=I*oe,O(v,2*w+2*R+2)}for(w=0;w<m;w++)v[w]=v[2*w+1]<<16|v[2*w];for(w=m;w<2*m;w++)v[w]=0;return new o(v,0)};function O(C,m){for(;(C[m]&65535)!=C[m];)C[m+1]+=C[m]>>>16,C[m]&=65535,m++}function D(C,m){this.g=C,this.h=m}function x(C,m){if(T(m))throw Error("division by zero");if(T(C))return new D(d,d);if(S(C))return m=x(P(C),m),new D(P(m.g),P(m.h));if(S(m))return m=x(C,P(m)),new D(P(m.g),m.h);if(30<C.g.length){if(S(C)||S(m))throw Error("slowDivide_ only works with positive integers.");for(var v=p,w=m;0>=w.l(C);)v=z(v),w=z(w);var R=j(v,1),I=j(w,1);for(w=j(w,2),v=j(v,2);!T(w);){var E=I.add(w);0>=E.l(C)&&(R=R.add(v),I=E),w=j(w,1),v=j(v,1)}return m=V(C,R.j(m)),new D(R,m)}for(R=d;0<=C.l(m);){for(v=Math.max(1,Math.floor(C.m()/m.m())),w=Math.ceil(Math.log(v)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),I=u(v),E=I.j(m);S(E)||0<E.l(C);)v-=w,I=u(v),E=I.j(m);T(I)&&(I=p),R=R.add(I),C=V(C,E)}return new D(R,C)}t.A=function(C){return x(this,C).h},t.and=function(C){for(var m=Math.max(this.g.length,C.g.length),v=[],w=0;w<m;w++)v[w]=this.i(w)&C.i(w);return new o(v,this.h&C.h)},t.or=function(C){for(var m=Math.max(this.g.length,C.g.length),v=[],w=0;w<m;w++)v[w]=this.i(w)|C.i(w);return new o(v,this.h|C.h)},t.xor=function(C){for(var m=Math.max(this.g.length,C.g.length),v=[],w=0;w<m;w++)v[w]=this.i(w)^C.i(w);return new o(v,this.h^C.h)};function z(C){for(var m=C.g.length+1,v=[],w=0;w<m;w++)v[w]=C.i(w)<<1|C.i(w-1)>>>31;return new o(v,C.h)}function j(C,m){var v=m>>5;m%=32;for(var w=C.g.length-v,R=[],I=0;I<w;I++)R[I]=0<m?C.i(I+v)>>>m|C.i(I+v+1)<<32-m:C.i(I+v);return new o(R,C.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Jw=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,qi=o}).apply(typeof jm<"u"?jm:typeof self<"u"?self:typeof window<"u"?window:{});var Ll=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zw,qo,eT,tc,Sd,tT,nT,sT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,g){return l==Array.prototype||l==Object.prototype||(l[f]=g.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ll=="object"&&Ll];for(var f=0;f<l.length;++f){var g=l[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=n(this);function i(l,f){if(f)e:{var g=s;l=l.split(".");for(var y=0;y<l.length-1;y++){var N=l[y];if(!(N in g))break e;g=g[N]}l=l[l.length-1],y=g[l],f=f(y),f!=y&&f!=null&&e(g,l,{configurable:!0,writable:!0,value:f})}}function r(l,f){l instanceof String&&(l+="");var g=0,y=!1,N={next:function(){if(!y&&g<l.length){var M=g++;return{value:f(M,l[M]),done:!1}}return y=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(l){return l||function(){return r(this,function(f,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function u(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function h(l,f,g){return l.call.apply(l.bind,arguments)}function d(l,f,g){if(!l)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,y),l.apply(f,N)}}return function(){return l.apply(f,arguments)}}function p(l,f,g){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,p.apply(null,arguments)}function _(l,f){var g=Array.prototype.slice.call(arguments,1);return function(){var y=g.slice();return y.push.apply(y,arguments),l.apply(this,y)}}function T(l,f){function g(){}g.prototype=f.prototype,l.aa=f.prototype,l.prototype=new g,l.prototype.constructor=l,l.Qb=function(y,N,M){for(var J=Array(arguments.length-2),Qe=2;Qe<arguments.length;Qe++)J[Qe-2]=arguments[Qe];return f.prototype[N].apply(y,J)}}function S(l){const f=l.length;if(0<f){const g=Array(f);for(let y=0;y<f;y++)g[y]=l[y];return g}return[]}function P(l,f){for(let g=1;g<arguments.length;g++){const y=arguments[g];if(c(y)){const N=l.length||0,M=y.length||0;l.length=N+M;for(let J=0;J<M;J++)l[N+J]=y[J]}else l.push(y)}}class V{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function O(l){return/^[\s\xa0]*$/.test(l)}function D(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function x(l){return x[" "](l),l}x[" "]=function(){};var z=D().indexOf("Gecko")!=-1&&!(D().toLowerCase().indexOf("webkit")!=-1&&D().indexOf("Edge")==-1)&&!(D().indexOf("Trident")!=-1||D().indexOf("MSIE")!=-1)&&D().indexOf("Edge")==-1;function j(l,f,g){for(const y in l)f.call(g,l[y],y,l)}function C(l,f){for(const g in l)f.call(void 0,l[g],g,l)}function m(l){const f={};for(const g in l)f[g]=l[g];return f}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(l,f){let g,y;for(let N=1;N<arguments.length;N++){y=arguments[N];for(g in y)l[g]=y[g];for(let M=0;M<v.length;M++)g=v[M],Object.prototype.hasOwnProperty.call(y,g)&&(l[g]=y[g])}}function R(l){var f=1;l=l.split(":");const g=[];for(;0<f&&l.length;)g.push(l.shift()),f--;return l.length&&g.push(l.join(":")),g}function I(l){a.setTimeout(()=>{throw l},0)}function E(){var l=Ae;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class oe{constructor(){this.h=this.g=null}add(f,g){const y=he.get();y.set(f,g),this.h?this.h.next=y:this.g=y,this.h=y}}var he=new V(()=>new Q,l=>l.reset());class Q{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let L,H=!1,Ae=new oe,Ue=()=>{const l=a.Promise.resolve(void 0);L=()=>{l.then(Ge)}};var Ge=()=>{for(var l;l=E();){try{l.h.call(l.g)}catch(g){I(g)}var f=he;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}H=!1};function Re(){this.s=this.s,this.C=this.C}Re.prototype.s=!1,Re.prototype.ma=function(){this.s||(this.s=!0,this.N())},Re.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Je(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}Je.prototype.h=function(){this.defaultPrevented=!0};var Pn=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};a.addEventListener("test",g,f),a.removeEventListener("test",g,f)}catch{}return l}();function Ut(l,f){if(Je.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var g=this.type=l.type,y=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(z){e:{try{x(f.nodeName);var N=!0;break e}catch{}N=!1}N||(f=null)}}else g=="mouseover"?f=l.fromElement:g=="mouseout"&&(f=l.toElement);this.relatedTarget=f,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Pt[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ut.aa.h.call(this)}}T(Ut,Je);var Pt={2:"touch",3:"pen",4:"mouse"};Ut.prototype.h=function(){Ut.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var U="closure_listenable_"+(1e6*Math.random()|0),se=0;function ee(l,f,g,y,N){this.listener=l,this.proxy=null,this.src=f,this.type=g,this.capture=!!y,this.ha=N,this.key=++se,this.da=this.fa=!1}function ae(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function be(l){this.src=l,this.g={},this.h=0}be.prototype.add=function(l,f,g,y,N){var M=l.toString();l=this.g[M],l||(l=this.g[M]=[],this.h++);var J=b(l,f,y,N);return-1<J?(f=l[J],g||(f.fa=!1)):(f=new ee(f,this.src,M,!!y,N),f.fa=g,l.push(f)),f};function A(l,f){var g=f.type;if(g in l.g){var y=l.g[g],N=Array.prototype.indexOf.call(y,f,void 0),M;(M=0<=N)&&Array.prototype.splice.call(y,N,1),M&&(ae(f),l.g[g].length==0&&(delete l.g[g],l.h--))}}function b(l,f,g,y){for(var N=0;N<l.length;++N){var M=l[N];if(!M.da&&M.listener==f&&M.capture==!!g&&M.ha==y)return N}return-1}var k="closure_lm_"+(1e6*Math.random()|0),B={};function W(l,f,g,y,N){if(Array.isArray(f)){for(var M=0;M<f.length;M++)W(l,f[M],g,y,N);return null}return g=ge(g),l&&l[U]?l.K(f,g,u(y)?!!y.capture:!1,N):$(l,f,g,!1,y,N)}function $(l,f,g,y,N,M){if(!f)throw Error("Invalid event type");var J=u(N)?!!N.capture:!!N,Qe=ne(l);if(Qe||(l[k]=Qe=new be(l)),g=Qe.add(f,g,y,J,M),g.proxy)return g;if(y=te(),g.proxy=y,y.src=l,y.listener=g,l.addEventListener)Pn||(N=J),N===void 0&&(N=!1),l.addEventListener(f.toString(),y,N);else if(l.attachEvent)l.attachEvent(G(f.toString()),y);else if(l.addListener&&l.removeListener)l.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return g}function te(){function l(g){return f.call(l.src,l.listener,g)}const f=pe;return l}function Z(l,f,g,y,N){if(Array.isArray(f))for(var M=0;M<f.length;M++)Z(l,f[M],g,y,N);else y=u(y)?!!y.capture:!!y,g=ge(g),l&&l[U]?(l=l.i,f=String(f).toString(),f in l.g&&(M=l.g[f],g=b(M,g,y,N),-1<g&&(ae(M[g]),Array.prototype.splice.call(M,g,1),M.length==0&&(delete l.g[f],l.h--)))):l&&(l=ne(l))&&(f=l.g[f.toString()],l=-1,f&&(l=b(f,g,y,N)),(g=-1<l?f[l]:null)&&Y(g))}function Y(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[U])A(f.i,l);else{var g=l.type,y=l.proxy;f.removeEventListener?f.removeEventListener(g,y,l.capture):f.detachEvent?f.detachEvent(G(g),y):f.addListener&&f.removeListener&&f.removeListener(y),(g=ne(f))?(A(g,l),g.h==0&&(g.src=null,f[k]=null)):ae(l)}}}function G(l){return l in B?B[l]:B[l]="on"+l}function pe(l,f){if(l.da)l=!0;else{f=new Ut(f,this);var g=l.listener,y=l.ha||l.src;l.fa&&Y(l),l=g.call(y,f)}return l}function ne(l){return l=l[k],l instanceof be?l:null}var ce="__closure_events_fn_"+(1e9*Math.random()>>>0);function ge(l){return typeof l=="function"?l:(l[ce]||(l[ce]=function(f){return l.handleEvent(f)}),l[ce])}function _e(){Re.call(this),this.i=new be(this),this.M=this,this.F=null}T(_e,Re),_e.prototype[U]=!0,_e.prototype.removeEventListener=function(l,f,g,y){Z(this,l,f,g,y)};function Ie(l,f){var g,y=l.F;if(y)for(g=[];y;y=y.F)g.push(y);if(l=l.M,y=f.type||f,typeof f=="string")f=new Je(f,l);else if(f instanceof Je)f.target=f.target||l;else{var N=f;f=new Je(y,l),w(f,N)}if(N=!0,g)for(var M=g.length-1;0<=M;M--){var J=f.g=g[M];N=Be(J,y,!0,f)&&N}if(J=f.g=l,N=Be(J,y,!0,f)&&N,N=Be(J,y,!1,f)&&N,g)for(M=0;M<g.length;M++)J=f.g=g[M],N=Be(J,y,!1,f)&&N}_e.prototype.N=function(){if(_e.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var g=l.g[f],y=0;y<g.length;y++)ae(g[y]);delete l.g[f],l.h--}}this.F=null},_e.prototype.K=function(l,f,g,y){return this.i.add(String(l),f,!1,g,y)},_e.prototype.L=function(l,f,g,y){return this.i.add(String(l),f,!0,g,y)};function Be(l,f,g,y){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var N=!0,M=0;M<f.length;++M){var J=f[M];if(J&&!J.da&&J.capture==g){var Qe=J.listener,Nt=J.ha||J.src;J.fa&&A(l.i,J),N=Qe.call(Nt,y)!==!1&&N}}return N&&!y.defaultPrevented}function rt(l,f,g){if(typeof l=="function")g&&(l=p(l,g));else if(l&&typeof l.handleEvent=="function")l=p(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(l,f||0)}function mt(l){l.g=rt(()=>{l.g=null,l.i&&(l.i=!1,mt(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class En extends Re{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:mt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Bt(l){Re.call(this),this.h=l,this.g={}}T(Bt,Re);var Us=[];function po(l){j(l.g,function(f,g){this.g.hasOwnProperty(g)&&Y(f)},l),l.g={}}Bt.prototype.N=function(){Bt.aa.N.call(this),po(this)},Bt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var kt=a.JSON.stringify,wn=a.JSON.parse,pl=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function rr(){}rr.prototype.h=null;function pg(l){return l.h||(l.h=l.i())}function gg(){}var go={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Zu(){Je.call(this,"d")}T(Zu,Je);function eh(){Je.call(this,"c")}T(eh,Je);var Ei={},_g=null;function gl(){return _g=_g||new _e}Ei.La="serverreachability";function mg(l){Je.call(this,Ei.La,l)}T(mg,Je);function _o(l){const f=gl();Ie(f,new mg(f))}Ei.STAT_EVENT="statevent";function yg(l,f){Je.call(this,Ei.STAT_EVENT,l),this.stat=f}T(yg,Je);function Jt(l){const f=gl();Ie(f,new yg(f,l))}Ei.Ma="timingevent";function vg(l,f){Je.call(this,Ei.Ma,l),this.size=f}T(vg,Je);function mo(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},f)}function yo(){this.g=!0}yo.prototype.xa=function(){this.g=!1};function GC(l,f,g,y,N,M){l.info(function(){if(l.g)if(M)for(var J="",Qe=M.split("&"),Nt=0;Nt<Qe.length;Nt++){var Ve=Qe[Nt].split("=");if(1<Ve.length){var $t=Ve[0];Ve=Ve[1];var jt=$t.split("_");J=2<=jt.length&&jt[1]=="type"?J+($t+"="+Ve+"&"):J+($t+"=redacted&")}}else J=null;else J=M;return"XMLHTTP REQ ("+y+") [attempt "+N+"]: "+f+`
`+g+`
`+J})}function KC(l,f,g,y,N,M,J){l.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+N+"]: "+f+`
`+g+`
`+M+" "+J})}function or(l,f,g,y){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+QC(l,g)+(y?" "+y:"")})}function zC(l,f){l.info(function(){return"TIMEOUT: "+f})}yo.prototype.info=function(){};function QC(l,f){if(!l.g)return f;if(!f)return null;try{var g=JSON.parse(f);if(g){for(l=0;l<g.length;l++)if(Array.isArray(g[l])){var y=g[l];if(!(2>y.length)){var N=y[1];if(Array.isArray(N)&&!(1>N.length)){var M=N[0];if(M!="noop"&&M!="stop"&&M!="close")for(var J=1;J<N.length;J++)N[J]=""}}}}return kt(g)}catch{return f}}var _l={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Eg={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},th;function ml(){}T(ml,rr),ml.prototype.g=function(){return new XMLHttpRequest},ml.prototype.i=function(){return{}},th=new ml;function Bs(l,f,g,y){this.j=l,this.i=f,this.l=g,this.R=y||1,this.U=new Bt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new wg}function wg(){this.i=null,this.g="",this.h=!1}var Tg={},nh={};function sh(l,f,g){l.L=1,l.v=wl(ns(f)),l.m=g,l.P=!0,Ig(l,null)}function Ig(l,f){l.F=Date.now(),yl(l),l.A=ns(l.v);var g=l.A,y=l.R;Array.isArray(y)||(y=[String(y)]),Vg(g.i,"t",y),l.C=0,g=l.j.J,l.h=new wg,l.g=t_(l.j,g?f:null,!l.m),0<l.O&&(l.M=new En(p(l.Y,l,l.g),l.O)),f=l.U,g=l.g,y=l.ca;var N="readystatechange";Array.isArray(N)||(N&&(Us[0]=N.toString()),N=Us);for(var M=0;M<N.length;M++){var J=W(g,N[M],y||f.handleEvent,!1,f.h||f);if(!J)break;f.g[J.key]=J}f=l.H?m(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),_o(),GC(l.i,l.u,l.A,l.l,l.R,l.m)}Bs.prototype.ca=function(l){l=l.target;const f=this.M;f&&ss(l)==3?f.j():this.Y(l)},Bs.prototype.Y=function(l){try{if(l==this.g)e:{const jt=ss(this.g);var f=this.g.Ba();const cr=this.g.Z();if(!(3>jt)&&(jt!=3||this.g&&(this.h.h||this.g.oa()||Wg(this.g)))){this.J||jt!=4||f==7||(f==8||0>=cr?_o(3):_o(2)),ih(this);var g=this.g.Z();this.X=g;t:if(Cg(this)){var y=Wg(this.g);l="";var N=y.length,M=ss(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){wi(this),vo(this);var J="";break t}this.h.i=new a.TextDecoder}for(f=0;f<N;f++)this.h.h=!0,l+=this.h.i.decode(y[f],{stream:!(M&&f==N-1)});y.length=0,this.h.g+=l,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=g==200,KC(this.i,this.u,this.A,this.l,this.R,jt,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Qe,Nt=this.g;if((Qe=Nt.g?Nt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(Qe)){var Ve=Qe;break t}}Ve=null}if(g=Ve)or(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,rh(this,g);else{this.o=!1,this.s=3,Jt(12),wi(this),vo(this);break e}}if(this.P){g=!0;let kn;for(;!this.J&&this.C<J.length;)if(kn=YC(this,J),kn==nh){jt==4&&(this.s=4,Jt(14),g=!1),or(this.i,this.l,null,"[Incomplete Response]");break}else if(kn==Tg){this.s=4,Jt(15),or(this.i,this.l,J,"[Invalid Chunk]"),g=!1;break}else or(this.i,this.l,kn,null),rh(this,kn);if(Cg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),jt!=4||J.length!=0||this.h.h||(this.s=1,Jt(16),g=!1),this.o=this.o&&g,!g)or(this.i,this.l,J,"[Invalid Chunked Response]"),wi(this),vo(this);else if(0<J.length&&!this.W){this.W=!0;var $t=this.j;$t.g==this&&$t.ba&&!$t.M&&($t.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),hh($t),$t.M=!0,Jt(11))}}else or(this.i,this.l,J,null),rh(this,J);jt==4&&wi(this),this.o&&!this.J&&(jt==4?Xg(this.j,this):(this.o=!1,yl(this)))}else fA(this.g),g==400&&0<J.indexOf("Unknown SID")?(this.s=3,Jt(12)):(this.s=0,Jt(13)),wi(this),vo(this)}}}catch{}finally{}};function Cg(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function YC(l,f){var g=l.C,y=f.indexOf(`
`,g);return y==-1?nh:(g=Number(f.substring(g,y)),isNaN(g)?Tg:(y+=1,y+g>f.length?nh:(f=f.slice(y,y+g),l.C=y+g,f)))}Bs.prototype.cancel=function(){this.J=!0,wi(this)};function yl(l){l.S=Date.now()+l.I,Ag(l,l.I)}function Ag(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=mo(p(l.ba,l),f)}function ih(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Bs.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(zC(this.i,this.A),this.L!=2&&(_o(),Jt(17)),wi(this),this.s=2,vo(this)):Ag(this,this.S-l)};function vo(l){l.j.G==0||l.J||Xg(l.j,l)}function wi(l){ih(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,po(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function rh(l,f){try{var g=l.j;if(g.G!=0&&(g.g==l||oh(g.h,l))){if(!l.K&&oh(g.h,l)&&g.G==3){try{var y=g.Da.g.parse(f)}catch{y=null}if(Array.isArray(y)&&y.length==3){var N=y;if(N[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<l.F)bl(g),Al(g);else break e;uh(g),Jt(18)}}else g.za=N[1],0<g.za-g.T&&37500>N[2]&&g.F&&g.v==0&&!g.C&&(g.C=mo(p(g.Za,g),6e3));if(1>=Sg(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else Ii(g,11)}else if((l.K||g.g==l)&&bl(g),!O(f))for(N=g.Da.g.parse(f),f=0;f<N.length;f++){let Ve=N[f];if(g.T=Ve[0],Ve=Ve[1],g.G==2)if(Ve[0]=="c"){g.K=Ve[1],g.ia=Ve[2];const $t=Ve[3];$t!=null&&(g.la=$t,g.j.info("VER="+g.la));const jt=Ve[4];jt!=null&&(g.Aa=jt,g.j.info("SVER="+g.Aa));const cr=Ve[5];cr!=null&&typeof cr=="number"&&0<cr&&(y=1.5*cr,g.L=y,g.j.info("backChannelRequestTimeoutMs_="+y)),y=g;const kn=l.g;if(kn){const Pl=kn.g?kn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Pl){var M=y.h;M.g||Pl.indexOf("spdy")==-1&&Pl.indexOf("quic")==-1&&Pl.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(ah(M,M.h),M.h=null))}if(y.D){const dh=kn.g?kn.g.getResponseHeader("X-HTTP-Session-Id"):null;dh&&(y.ya=dh,tt(y.I,y.D,dh))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-l.F,g.j.info("Handshake RTT: "+g.R+"ms")),y=g;var J=l;if(y.qa=e_(y,y.J?y.ia:null,y.W),J.K){Pg(y.h,J);var Qe=J,Nt=y.L;Nt&&(Qe.I=Nt),Qe.B&&(ih(Qe),yl(Qe)),y.g=J}else Qg(y);0<g.i.length&&Rl(g)}else Ve[0]!="stop"&&Ve[0]!="close"||Ii(g,7);else g.G==3&&(Ve[0]=="stop"||Ve[0]=="close"?Ve[0]=="stop"?Ii(g,7):ch(g):Ve[0]!="noop"&&g.l&&g.l.ta(Ve),g.v=0)}}_o(4)}catch{}}var XC=class{constructor(l,f){this.g=l,this.map=f}};function Rg(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function bg(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Sg(l){return l.h?1:l.g?l.g.size:0}function oh(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function ah(l,f){l.g?l.g.add(f):l.h=f}function Pg(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Rg.prototype.cancel=function(){if(this.i=kg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function kg(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const g of l.g.values())f=f.concat(g.D);return f}return S(l.i)}function JC(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var f=[],g=l.length,y=0;y<g;y++)f.push(l[y]);return f}f=[],g=0;for(y in l)f[g++]=l[y];return f}function ZC(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var f=[];l=l.length;for(var g=0;g<l;g++)f.push(g);return f}f=[],g=0;for(const y in l)f[g++]=y;return f}}}function Ng(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var g=ZC(l),y=JC(l),N=y.length,M=0;M<N;M++)f.call(void 0,y[M],g&&g[M],l)}var xg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function eA(l,f){if(l){l=l.split("&");for(var g=0;g<l.length;g++){var y=l[g].indexOf("="),N=null;if(0<=y){var M=l[g].substring(0,y);N=l[g].substring(y+1)}else M=l[g];f(M,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Ti(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Ti){this.h=l.h,vl(this,l.j),this.o=l.o,this.g=l.g,El(this,l.s),this.l=l.l;var f=l.i,g=new To;g.i=f.i,f.g&&(g.g=new Map(f.g),g.h=f.h),Og(this,g),this.m=l.m}else l&&(f=String(l).match(xg))?(this.h=!1,vl(this,f[1]||"",!0),this.o=Eo(f[2]||""),this.g=Eo(f[3]||"",!0),El(this,f[4]),this.l=Eo(f[5]||"",!0),Og(this,f[6]||"",!0),this.m=Eo(f[7]||"")):(this.h=!1,this.i=new To(null,this.h))}Ti.prototype.toString=function(){var l=[],f=this.j;f&&l.push(wo(f,Dg,!0),":");var g=this.g;return(g||f=="file")&&(l.push("//"),(f=this.o)&&l.push(wo(f,Dg,!0),"@"),l.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&l.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(wo(g,g.charAt(0)=="/"?sA:nA,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",wo(g,rA)),l.join("")};function ns(l){return new Ti(l)}function vl(l,f,g){l.j=g?Eo(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function El(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Og(l,f,g){f instanceof To?(l.i=f,oA(l.i,l.h)):(g||(f=wo(f,iA)),l.i=new To(f,l.h))}function tt(l,f,g){l.i.set(f,g)}function wl(l){return tt(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Eo(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function wo(l,f,g){return typeof l=="string"?(l=encodeURI(l).replace(f,tA),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function tA(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Dg=/[#\/\?@]/g,nA=/[#\?:]/g,sA=/[#\?]/g,iA=/[#\?@]/g,rA=/#/g;function To(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function $s(l){l.g||(l.g=new Map,l.h=0,l.i&&eA(l.i,function(f,g){l.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}t=To.prototype,t.add=function(l,f){$s(this),this.i=null,l=ar(this,l);var g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(f),this.h+=1,this};function Mg(l,f){$s(l),f=ar(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Lg(l,f){return $s(l),f=ar(l,f),l.g.has(f)}t.forEach=function(l,f){$s(this),this.g.forEach(function(g,y){g.forEach(function(N){l.call(f,N,y,this)},this)},this)},t.na=function(){$s(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),g=[];for(let y=0;y<f.length;y++){const N=l[y];for(let M=0;M<N.length;M++)g.push(f[y])}return g},t.V=function(l){$s(this);let f=[];if(typeof l=="string")Lg(this,l)&&(f=f.concat(this.g.get(ar(this,l))));else{l=Array.from(this.g.values());for(let g=0;g<l.length;g++)f=f.concat(l[g])}return f},t.set=function(l,f){return $s(this),this.i=null,l=ar(this,l),Lg(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},t.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Vg(l,f,g){Mg(l,f),0<g.length&&(l.i=null,l.g.set(ar(l,f),S(g)),l.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var g=0;g<f.length;g++){var y=f[g];const M=encodeURIComponent(String(y)),J=this.V(y);for(y=0;y<J.length;y++){var N=M;J[y]!==""&&(N+="="+encodeURIComponent(String(J[y]))),l.push(N)}}return this.i=l.join("&")};function ar(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function oA(l,f){f&&!l.j&&($s(l),l.i=null,l.g.forEach(function(g,y){var N=y.toLowerCase();y!=N&&(Mg(this,y),Vg(this,N,g))},l)),l.j=f}function aA(l,f){const g=new yo;if(a.Image){const y=new Image;y.onload=_(js,g,"TestLoadImage: loaded",!0,f,y),y.onerror=_(js,g,"TestLoadImage: error",!1,f,y),y.onabort=_(js,g,"TestLoadImage: abort",!1,f,y),y.ontimeout=_(js,g,"TestLoadImage: timeout",!1,f,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=l}else f(!1)}function lA(l,f){const g=new yo,y=new AbortController,N=setTimeout(()=>{y.abort(),js(g,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:y.signal}).then(M=>{clearTimeout(N),M.ok?js(g,"TestPingServer: ok",!0,f):js(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(N),js(g,"TestPingServer: error",!1,f)})}function js(l,f,g,y,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),y(g)}catch{}}function cA(){this.g=new pl}function uA(l,f,g){const y=g||"";try{Ng(l,function(N,M){let J=N;u(N)&&(J=kt(N)),f.push(y+M+"="+encodeURIComponent(J))})}catch(N){throw f.push(y+"type="+encodeURIComponent("_badmap")),N}}function Tl(l){this.l=l.Ub||null,this.j=l.eb||!1}T(Tl,rr),Tl.prototype.g=function(){return new Il(this.l,this.j)},Tl.prototype.i=function(l){return function(){return l}}({});function Il(l,f){_e.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(Il,_e),t=Il.prototype,t.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Co(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Io(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Co(this)),this.g&&(this.readyState=3,Co(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fg(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Fg(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Io(this):Co(this),this.readyState==3&&Fg(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Io(this))},t.Qa=function(l){this.g&&(this.response=l,Io(this))},t.ga=function(){this.g&&Io(this)};function Io(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Co(l)}t.setRequestHeader=function(l,f){this.u.append(l,f)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=f.next();return l.join(`\r
`)};function Co(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Il.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Ug(l){let f="";return j(l,function(g,y){f+=y,f+=":",f+=g,f+=`\r
`}),f}function lh(l,f,g){e:{for(y in g){var y=!1;break e}y=!0}y||(g=Ug(g),typeof l=="string"?g!=null&&encodeURIComponent(String(g)):tt(l,f,g))}function ct(l){_e.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(ct,_e);var hA=/^https?$/i,dA=["POST","PUT"];t=ct.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,f,g,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():th.g(),this.v=this.o?pg(this.o):pg(th),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(M){Bg(this,M);return}if(l=g||"",g=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var N in y)g.set(N,y[N]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const M of y.keys())g.set(M,y.get(M));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(g.keys()).find(M=>M.toLowerCase()=="content-type"),N=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(dA,f,void 0))||y||N||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,J]of g)this.g.setRequestHeader(M,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{qg(this),this.u=!0,this.g.send(l),this.u=!1}catch(M){Bg(this,M)}};function Bg(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,$g(l),Cl(l)}function $g(l){l.A||(l.A=!0,Ie(l,"complete"),Ie(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Ie(this,"complete"),Ie(this,"abort"),Cl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Cl(this,!0)),ct.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?jg(this):this.bb())},t.bb=function(){jg(this)};function jg(l){if(l.h&&typeof o<"u"&&(!l.v[1]||ss(l)!=4||l.Z()!=2)){if(l.u&&ss(l)==4)rt(l.Ea,0,l);else if(Ie(l,"readystatechange"),ss(l)==4){l.h=!1;try{const J=l.Z();e:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var y;if(y=J===0){var N=String(l.D).match(xg)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),y=!hA.test(N?N.toLowerCase():"")}g=y}if(g)Ie(l,"complete"),Ie(l,"success");else{l.m=6;try{var M=2<ss(l)?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.Z()+"]",$g(l)}}finally{Cl(l)}}}}function Cl(l,f){if(l.g){qg(l);const g=l.g,y=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||Ie(l,"ready");try{g.onreadystatechange=y}catch{}}}function qg(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function ss(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<ss(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),wn(f)}};function Wg(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function fA(l){const f={};l=(l.g&&2<=ss(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<l.length;y++){if(O(l[y]))continue;var g=R(l[y]);const N=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const M=f[N]||[];f[N]=M,M.push(g)}C(f,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ao(l,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||f}function Hg(l){this.Aa=0,this.i=[],this.j=new yo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ao("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ao("baseRetryDelayMs",5e3,l),this.cb=Ao("retryDelaySeedMs",1e4,l),this.Wa=Ao("forwardChannelMaxRetries",2,l),this.wa=Ao("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Rg(l&&l.concurrentRequestLimit),this.Da=new cA,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Hg.prototype,t.la=8,t.G=1,t.connect=function(l,f,g,y){Jt(0),this.W=l,this.H=f||{},g&&y!==void 0&&(this.H.OSID=g,this.H.OAID=y),this.F=this.X,this.I=e_(this,null,this.W),Rl(this)};function ch(l){if(Gg(l),l.G==3){var f=l.U++,g=ns(l.I);if(tt(g,"SID",l.K),tt(g,"RID",f),tt(g,"TYPE","terminate"),Ro(l,g),f=new Bs(l,l.j,f),f.L=2,f.v=wl(ns(g)),g=!1,a.navigator&&a.navigator.sendBeacon)try{g=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!g&&a.Image&&(new Image().src=f.v,g=!0),g||(f.g=t_(f.j,null),f.g.ea(f.v)),f.F=Date.now(),yl(f)}Zg(l)}function Al(l){l.g&&(hh(l),l.g.cancel(),l.g=null)}function Gg(l){Al(l),l.u&&(a.clearTimeout(l.u),l.u=null),bl(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Rl(l){if(!bg(l.h)&&!l.s){l.s=!0;var f=l.Ga;L||Ue(),H||(L(),H=!0),Ae.add(f,l),l.B=0}}function pA(l,f){return Sg(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=mo(p(l.Ga,l,f),Jg(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const N=new Bs(this,this.j,l);let M=this.o;if(this.S&&(M?(M=m(M),w(M,this.S)):M=this.S),this.m!==null||this.O||(N.H=M,M=null),this.P)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var y=this.i[g];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(f+=y,4096<f){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=zg(this,N,f),g=ns(this.I),tt(g,"RID",l),tt(g,"CVER",22),this.D&&tt(g,"X-HTTP-Session-Id",this.D),Ro(this,g),M&&(this.O?f="headers="+encodeURIComponent(String(Ug(M)))+"&"+f:this.m&&lh(g,this.m,M)),ah(this.h,N),this.Ua&&tt(g,"TYPE","init"),this.P?(tt(g,"$req",f),tt(g,"SID","null"),N.T=!0,sh(N,g,null)):sh(N,g,f),this.G=2}}else this.G==3&&(l?Kg(this,l):this.i.length==0||bg(this.h)||Kg(this))};function Kg(l,f){var g;f?g=f.l:g=l.U++;const y=ns(l.I);tt(y,"SID",l.K),tt(y,"RID",g),tt(y,"AID",l.T),Ro(l,y),l.m&&l.o&&lh(y,l.m,l.o),g=new Bs(l,l.j,g,l.B+1),l.m===null&&(g.H=l.o),f&&(l.i=f.D.concat(l.i)),f=zg(l,g,1e3),g.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),ah(l.h,g),sh(g,y,f)}function Ro(l,f){l.H&&j(l.H,function(g,y){tt(f,y,g)}),l.l&&Ng({},function(g,y){tt(f,y,g)})}function zg(l,f,g){g=Math.min(l.i.length,g);var y=l.l?p(l.l.Na,l.l,l):null;e:{var N=l.i;let M=-1;for(;;){const J=["count="+g];M==-1?0<g?(M=N[0].g,J.push("ofs="+M)):M=0:J.push("ofs="+M);let Qe=!0;for(let Nt=0;Nt<g;Nt++){let Ve=N[Nt].g;const $t=N[Nt].map;if(Ve-=M,0>Ve)M=Math.max(0,N[Nt].g-100),Qe=!1;else try{uA($t,J,"req"+Ve+"_")}catch{y&&y($t)}}if(Qe){y=J.join("&");break e}}}return l=l.i.splice(0,g),f.D=l,y}function Qg(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;L||Ue(),H||(L(),H=!0),Ae.add(f,l),l.v=0}}function uh(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=mo(p(l.Fa,l),Jg(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Yg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=mo(p(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Jt(10),Al(this),Yg(this))};function hh(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Yg(l){l.g=new Bs(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=ns(l.qa);tt(f,"RID","rpc"),tt(f,"SID",l.K),tt(f,"AID",l.T),tt(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&tt(f,"TO",l.ja),tt(f,"TYPE","xmlhttp"),Ro(l,f),l.m&&l.o&&lh(f,l.m,l.o),l.L&&(l.g.I=l.L);var g=l.g;l=l.ia,g.L=1,g.v=wl(ns(f)),g.m=null,g.P=!0,Ig(g,l)}t.Za=function(){this.C!=null&&(this.C=null,Al(this),uh(this),Jt(19))};function bl(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Xg(l,f){var g=null;if(l.g==f){bl(l),hh(l),l.g=null;var y=2}else if(oh(l.h,f))g=f.D,Pg(l.h,f),y=1;else return;if(l.G!=0){if(f.o)if(y==1){g=f.m?f.m.length:0,f=Date.now()-f.F;var N=l.B;y=gl(),Ie(y,new vg(y,g)),Rl(l)}else Qg(l);else if(N=f.s,N==3||N==0&&0<f.X||!(y==1&&pA(l,f)||y==2&&uh(l)))switch(g&&0<g.length&&(f=l.h,f.i=f.i.concat(g)),N){case 1:Ii(l,5);break;case 4:Ii(l,10);break;case 3:Ii(l,6);break;default:Ii(l,2)}}}function Jg(l,f){let g=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(g*=2),g*f}function Ii(l,f){if(l.j.info("Error code "+f),f==2){var g=p(l.fb,l),y=l.Xa;const N=!y;y=new Ti(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||vl(y,"https"),wl(y),N?aA(y.toString(),g):lA(y.toString(),g)}else Jt(2);l.G=0,l.l&&l.l.sa(f),Zg(l),Gg(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Jt(2)):(this.j.info("Failed to ping google.com"),Jt(1))};function Zg(l){if(l.G=0,l.ka=[],l.l){const f=kg(l.h);(f.length!=0||l.i.length!=0)&&(P(l.ka,f),P(l.ka,l.i),l.h.i.length=0,S(l.i),l.i.length=0),l.l.ra()}}function e_(l,f,g){var y=g instanceof Ti?ns(g):new Ti(g);if(y.g!="")f&&(y.g=f+"."+y.g),El(y,y.s);else{var N=a.location;y=N.protocol,f=f?f+"."+N.hostname:N.hostname,N=+N.port;var M=new Ti(null);y&&vl(M,y),f&&(M.g=f),N&&El(M,N),g&&(M.l=g),y=M}return g=l.D,f=l.ya,g&&f&&tt(y,g,f),tt(y,"VER",l.la),Ro(l,y),y}function t_(l,f,g){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new ct(new Tl({eb:g})):new ct(l.pa),f.Ha(l.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function n_(){}t=n_.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Sl(){}Sl.prototype.g=function(l,f){return new dn(l,f)};function dn(l,f){_e.call(this),this.g=new Hg(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!O(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!O(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new lr(this)}T(dn,_e),dn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},dn.prototype.close=function(){ch(this.g)},dn.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.u&&(g={},g.__data__=kt(l),l=g);f.i.push(new XC(f.Ya++,l)),f.G==3&&Rl(f)},dn.prototype.N=function(){this.g.l=null,delete this.j,ch(this.g),delete this.g,dn.aa.N.call(this)};function s_(l){Zu.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const g in f){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}T(s_,Zu);function i_(){eh.call(this),this.status=1}T(i_,eh);function lr(l){this.g=l}T(lr,n_),lr.prototype.ua=function(){Ie(this.g,"a")},lr.prototype.ta=function(l){Ie(this.g,new s_(l))},lr.prototype.sa=function(l){Ie(this.g,new i_)},lr.prototype.ra=function(){Ie(this.g,"b")},Sl.prototype.createWebChannel=Sl.prototype.g,dn.prototype.send=dn.prototype.o,dn.prototype.open=dn.prototype.m,dn.prototype.close=dn.prototype.close,sT=function(){return new Sl},nT=function(){return gl()},tT=Ei,Sd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},_l.NO_ERROR=0,_l.TIMEOUT=8,_l.HTTP_ERROR=6,tc=_l,Eg.COMPLETE="complete",eT=Eg,gg.EventType=go,go.OPEN="a",go.CLOSE="b",go.ERROR="c",go.MESSAGE="d",_e.prototype.listen=_e.prototype.K,qo=gg,ct.prototype.listenOnce=ct.prototype.L,ct.prototype.getLastError=ct.prototype.Ka,ct.prototype.getLastErrorCode=ct.prototype.Ba,ct.prototype.getStatus=ct.prototype.Z,ct.prototype.getResponseJson=ct.prototype.Oa,ct.prototype.getResponseText=ct.prototype.oa,ct.prototype.send=ct.prototype.ea,ct.prototype.setWithCredentials=ct.prototype.Ha,Zw=ct}).apply(typeof Ll<"u"?Ll:typeof self<"u"?self:typeof window<"u"?window:{});const qm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ht.UNAUTHENTICATED=new Ht(null),Ht.GOOGLE_CREDENTIALS=new Ht("google-credentials-uid"),Ht.FIRST_PARTY=new Ht("first-party-uid"),Ht.MOCK_USER=new Ht("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let io="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki=new _u("@firebase/firestore");function No(){return Ki.logLevel}function le(t,...e){if(Ki.logLevel<=Ne.DEBUG){const n=e.map(jf);Ki.debug(`Firestore (${io}): ${t}`,...n)}}function Ns(t,...e){if(Ki.logLevel<=Ne.ERROR){const n=e.map(jf);Ki.error(`Firestore (${io}): ${t}`,...n)}}function jr(t,...e){if(Ki.logLevel<=Ne.WARN){const n=e.map(jf);Ki.warn(`Firestore (${io}): ${t}`,...n)}}function jf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(t="Unexpected state"){const e=`FIRESTORE (${io}) INTERNAL ASSERTION FAILED: `+t;throw Ns(e),new Error(e)}function Ke(t,e){t||ve()}function Te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends es{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class a1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ht.UNAUTHENTICATED))}shutdown(){}}class l1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class c1{constructor(e){this.t=e,this.currentUser=Ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ke(this.o===void 0);let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new Is;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Is,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{le("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(le("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Is)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(le("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ke(typeof s.accessToken=="string"),new iT(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ke(e===null||typeof e=="string"),new Ht(e)}}class u1{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=Ht.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class h1{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new u1(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class d1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class f1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ke(this.o===void 0);const s=r=>{r.error!=null&&le("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,le("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{le("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?i(r):le("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ke(typeof n.token=="string"),this.R=n.token,new d1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=p1(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function Fe(t,e){return t<e?-1:t>e?1:0}function qr(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ie(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ie(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ie(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return It.fromMillis(Date.now())}static fromDate(e){return It.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new It(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Fe(this.nanoseconds,e.nanoseconds):Fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new It(0,0))}static max(){return new Ee(new It(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,n,s){n===void 0?n=0:n>e.length&&ve(),s===void 0?s=e.length-n:s>e.length-n&&ve(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Pa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Pa?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class it extends Pa{construct(e,n,s){return new it(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new ie(q.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new it(n)}static emptyPath(){return new it([])}}const g1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Lt extends Pa{construct(e,n,s){return new Lt(e,n,s)}static isValidIdentifier(e){return g1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Lt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Lt(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new ie(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new ie(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ie(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new ie(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Lt(n)}static emptyPath(){return new Lt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.path=e}static fromPath(e){return new fe(it.fromString(e))}static fromName(e){return new fe(it.fromString(e).popFirst(5))}static empty(){return new fe(it.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&it.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return it.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new fe(new it(e.slice()))}}function _1(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=Ee.fromTimestamp(s===1e9?new It(n+1,0):new It(n,s));return new ci(i,fe.empty(),e)}function m1(t){return new ci(t.readTime,t.key,-1)}class ci{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new ci(Ee.min(),fe.empty(),-1)}static max(){return new ci(Ee.max(),fe.empty(),-1)}}function y1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=fe.comparator(t.documentKey,e.documentKey),n!==0?n:Fe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class E1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nl(t){if(t.code!==q.FAILED_PRECONDITION||t.message!==v1)throw t;le("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ve(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new K((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof K?n:K.resolve(n)}catch(n){return K.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):K.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):K.reject(n)}static resolve(e){return new K((n,s)=>{n(e)})}static reject(e){return new K((n,s)=>{s(e)})}static waitFor(e){return new K((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(e){let n=K.resolve(!1);for(const s of e)n=n.next(i=>i?K.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new K((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const u=c;n(e[u]).next(h=>{o[u]=h,++a,a===r&&s(o)},h=>i(h))}})}static doWhile(e,n){return new K((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function w1(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function sl(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ie(s),this.se=s=>n.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}qf.oe=-1;function wu(t){return t==null}function bc(t){return t===0&&1/t==-1/0}function T1(t){return typeof t=="number"&&Number.isInteger(t)&&!bc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function tr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function oT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wt=class Pd{constructor(e,n){this.comparator=e,this.root=n||ni.EMPTY}insert(e,n){return new Pd(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ni.BLACK,null,null))}remove(e){return new Pd(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ni.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Vl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Vl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Vl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Vl(this.root,e,this.comparator,!0)}},Vl=class{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},ni=class as{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??as.RED,this.left=i??as.EMPTY,this.right=r??as.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new as(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return as.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return as.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,as.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,as.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ve();const e=this.left.check();if(e!==this.right.check())throw ve();return e+(this.isRed()?0:1)}};ni.EMPTY=null,ni.RED=!0,ni.BLACK=!1;ni.EMPTY=new class{constructor(){this.size=0}get key(){throw ve()}get value(){throw ve()}get color(){throw ve()}get left(){throw ve()}get right(){throw ve()}copy(e,n,s,i,r){return this}insert(e,n,s){return new ni(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.comparator=e,this.data=new wt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Hm(this.data.getIterator())}getIteratorFrom(e){return new Hm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Vt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Vt(this.comparator);return n.data=e,n}}class Hm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.fields=e,e.sort(Lt.comparator)}static empty(){return new mn([])}unionWith(e){let n=new Vt(Lt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new mn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return qr(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new aT("Invalid base64 string: "+r):r}}(e);return new Ft(n)}static fromUint8Array(e){const n=function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r}(e);return new Ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ft.EMPTY_BYTE_STRING=new Ft("");const I1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ui(t){if(Ke(!!t),typeof t=="string"){let e=0;const n=I1.exec(t);if(Ke(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:gt(t.seconds),nanos:gt(t.nanos)}}function gt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function zi(t){return typeof t=="string"?Ft.fromBase64String(t):Ft.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Hf(t){const e=t.mapValue.fields.__previous_value__;return Wf(e)?Hf(e):e}function ka(t){const e=ui(t.mapValue.fields.__local_write_time__.timestampValue);return new It(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(e,n,s,i,r,o,a,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class Na{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Na("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Na&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl={mapValue:{}};function Qi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Wf(t)?4:R1(t)?9007199254740991:A1(t)?10:11:ve()}function Zn(t,e){if(t===e)return!0;const n=Qi(t);if(n!==Qi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ka(t).isEqual(ka(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=ui(i.timestampValue),a=ui(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,r){return zi(i.bytesValue).isEqual(zi(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,r){return gt(i.geoPointValue.latitude)===gt(r.geoPointValue.latitude)&&gt(i.geoPointValue.longitude)===gt(r.geoPointValue.longitude)}(t,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return gt(i.integerValue)===gt(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=gt(i.doubleValue),a=gt(r.doubleValue);return o===a?bc(o)===bc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return qr(t.arrayValue.values||[],e.arrayValue.values||[],Zn);case 10:case 11:return function(i,r){const o=i.mapValue.fields||{},a=r.mapValue.fields||{};if(Wm(o)!==Wm(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Zn(o[c],a[c])))return!1;return!0}(t,e);default:return ve()}}function xa(t,e){return(t.values||[]).find(n=>Zn(n,e))!==void 0}function Wr(t,e){if(t===e)return 0;const n=Qi(t),s=Qi(e);if(n!==s)return Fe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Fe(t.booleanValue,e.booleanValue);case 2:return function(r,o){const a=gt(r.integerValue||r.doubleValue),c=gt(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Gm(t.timestampValue,e.timestampValue);case 4:return Gm(ka(t),ka(e));case 5:return Fe(t.stringValue,e.stringValue);case 6:return function(r,o){const a=zi(r),c=zi(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(r,o){const a=r.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const h=Fe(a[u],c[u]);if(h!==0)return h}return Fe(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,o){const a=Fe(gt(r.latitude),gt(o.latitude));return a!==0?a:Fe(gt(r.longitude),gt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Km(t.arrayValue,e.arrayValue);case 10:return function(r,o){var a,c,u,h;const d=r.fields||{},p=o.fields||{},_=(a=d.value)===null||a===void 0?void 0:a.arrayValue,T=(c=p.value)===null||c===void 0?void 0:c.arrayValue,S=Fe(((u=_==null?void 0:_.values)===null||u===void 0?void 0:u.length)||0,((h=T==null?void 0:T.values)===null||h===void 0?void 0:h.length)||0);return S!==0?S:Km(_,T)}(t.mapValue,e.mapValue);case 11:return function(r,o){if(r===Fl.mapValue&&o===Fl.mapValue)return 0;if(r===Fl.mapValue)return 1;if(o===Fl.mapValue)return-1;const a=r.fields||{},c=Object.keys(a),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let d=0;d<c.length&&d<h.length;++d){const p=Fe(c[d],h[d]);if(p!==0)return p;const _=Wr(a[c[d]],u[h[d]]);if(_!==0)return _}return Fe(c.length,h.length)}(t.mapValue,e.mapValue);default:throw ve()}}function Gm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Fe(t,e);const n=ui(t),s=ui(e),i=Fe(n.seconds,s.seconds);return i!==0?i:Fe(n.nanos,s.nanos)}function Km(t,e){const n=t.values||[],s=e.values||[];for(let i=0;i<n.length&&i<s.length;++i){const r=Wr(n[i],s[i]);if(r)return r}return Fe(n.length,s.length)}function Hr(t){return kd(t)}function kd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=ui(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return zi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return fe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",i=!0;for(const r of n.values||[])i?i=!1:s+=",",s+=kd(r);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${kd(n.fields[o])}`;return i+"}"}(t.mapValue):ve()}function zm(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Nd(t){return!!t&&"integerValue"in t}function Gf(t){return!!t&&"arrayValue"in t}function Qm(t){return!!t&&"nullValue"in t}function Ym(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function nc(t){return!!t&&"mapValue"in t}function A1(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ra(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return tr(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=ra(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ra(t.arrayValue.values[n]);return e}return Object.assign({},t)}function R1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.value=e}static empty(){return new an({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!nc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ra(n)}setAll(e){let n=Lt.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=ra(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());nc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Zn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];nc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){tr(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new an(ra(this.value))}}function lT(t){const e=[];return tr(t.fields,(n,s)=>{const i=new Lt([n]);if(nc(s)){const r=lT(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new mn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Kt(e,0,Ee.min(),Ee.min(),Ee.min(),an.empty(),0)}static newFoundDocument(e,n,s,i){return new Kt(e,1,n,Ee.min(),s,i,0)}static newNoDocument(e,n){return new Kt(e,2,n,Ee.min(),Ee.min(),an.empty(),0)}static newUnknownDocument(e,n){return new Kt(e,3,n,Ee.min(),Ee.min(),an.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=an.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=an.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Kt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Kt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e,n){this.position=e,this.inclusive=n}}function Xm(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=fe.comparator(fe.fromName(o.referenceValue),n.key):s=Wr(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Jm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Zn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,n="asc"){this.field=e,this.dir=n}}function b1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{}class Et extends cT{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new P1(e,n,s):n==="array-contains"?new x1(e,s):n==="in"?new O1(e,s):n==="not-in"?new D1(e,s):n==="array-contains-any"?new M1(e,s):new Et(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new k1(e,s):new N1(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Wr(n,this.value)):n!==null&&Qi(this.value)===Qi(n)&&this.matchesComparison(Wr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ve()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $n extends cT{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new $n(e,n)}matches(e){return uT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function uT(t){return t.op==="and"}function hT(t){return S1(t)&&uT(t)}function S1(t){for(const e of t.filters)if(e instanceof $n)return!1;return!0}function xd(t){if(t instanceof Et)return t.field.canonicalString()+t.op.toString()+Hr(t.value);if(hT(t))return t.filters.map(e=>xd(e)).join(",");{const e=t.filters.map(n=>xd(n)).join(",");return`${t.op}(${e})`}}function dT(t,e){return t instanceof Et?function(s,i){return i instanceof Et&&s.op===i.op&&s.field.isEqual(i.field)&&Zn(s.value,i.value)}(t,e):t instanceof $n?function(s,i){return i instanceof $n&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((r,o,a)=>r&&dT(o,i.filters[a]),!0):!1}(t,e):void ve()}function fT(t){return t instanceof Et?function(n){return`${n.field.canonicalString()} ${n.op} ${Hr(n.value)}`}(t):t instanceof $n?function(n){return n.op.toString()+" {"+n.getFilters().map(fT).join(" ,")+"}"}(t):"Filter"}class P1 extends Et{constructor(e,n,s){super(e,n,s),this.key=fe.fromName(s.referenceValue)}matches(e){const n=fe.comparator(e.key,this.key);return this.matchesComparison(n)}}class k1 extends Et{constructor(e,n){super(e,"in",n),this.keys=pT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class N1 extends Et{constructor(e,n){super(e,"not-in",n),this.keys=pT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function pT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>fe.fromName(s.referenceValue))}class x1 extends Et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Gf(n)&&xa(n.arrayValue,this.value)}}class O1 extends Et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&xa(this.value.arrayValue,n)}}class D1 extends Et{constructor(e,n){super(e,"not-in",n)}matches(e){if(xa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!xa(this.value.arrayValue,n)}}class M1 extends Et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Gf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>xa(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ue=null}}function Zm(t,e=null,n=[],s=[],i=null,r=null,o=null){return new L1(t,e,n,s,i,r,o)}function Kf(t){const e=Te(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>xd(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),wu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Hr(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Hr(s)).join(",")),e.ue=n}return e.ue}function zf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!b1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!dT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Jm(t.startAt,e.startAt)&&Jm(t.endAt,e.endAt)}function Od(t){return fe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function V1(t,e,n,s,i,r,o,a){return new ro(t,e,n,s,i,r,o,a)}function Tu(t){return new ro(t)}function ey(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function gT(t){return t.collectionGroup!==null}function oa(t){const e=Te(t);if(e.ce===null){e.ce=[];const n=new Set;for(const r of e.explicitOrderBy)e.ce.push(r),n.add(r.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Vt(Lt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(r=>{n.has(r.canonicalString())||r.isKeyField()||e.ce.push(new Oa(r,s))}),n.has(Lt.keyField().canonicalString())||e.ce.push(new Oa(Lt.keyField(),s))}return e.ce}function Xn(t){const e=Te(t);return e.le||(e.le=F1(e,oa(t))),e.le}function F1(t,e){if(t.limitType==="F")return Zm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const r=i.dir==="desc"?"asc":"desc";return new Oa(i.field,r)});const n=t.endAt?new Sc(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Sc(t.startAt.position,t.startAt.inclusive):null;return Zm(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function Dd(t,e){const n=t.filters.concat([e]);return new ro(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Pc(t,e,n){return new ro(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Iu(t,e){return zf(Xn(t),Xn(e))&&t.limitType===e.limitType}function _T(t){return`${Kf(Xn(t))}|lt:${t.limitType}`}function _r(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(i=>fT(i)).join(", ")}]`),wu(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(i=>Hr(i)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(i=>Hr(i)).join(",")),`Target(${s})`}(Xn(t))}; limitType=${t.limitType})`}function Cu(t,e){return e.isFoundDocument()&&function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):fe.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)}(t,e)&&function(s,i){for(const r of oa(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(t,e)&&function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0}(t,e)&&function(s,i){return!(s.startAt&&!function(o,a,c){const u=Xm(o,a,c);return o.inclusive?u<=0:u<0}(s.startAt,oa(s),i)||s.endAt&&!function(o,a,c){const u=Xm(o,a,c);return o.inclusive?u>=0:u>0}(s.endAt,oa(s),i))}(t,e)}function U1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function mT(t){return(e,n)=>{let s=!1;for(const i of oa(t)){const r=B1(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function B1(t,e,n){const s=t.field.isKeyField()?fe.comparator(e.key,n.key):function(r,o,a){const c=o.data.field(r),u=a.data.field(r);return c!==null&&u!==null?Wr(c,u):ve()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return ve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){tr(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return oT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1=new wt(fe.comparator);function xs(){return $1}const yT=new wt(fe.comparator);function Wo(...t){let e=yT;for(const n of t)e=e.insert(n.key,n);return e}function vT(t){let e=yT;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Vi(){return aa()}function ET(){return aa()}function aa(){return new oo(t=>t.toString(),(t,e)=>t.isEqual(e))}const j1=new wt(fe.comparator),q1=new Vt(fe.comparator);function xe(...t){let e=q1;for(const n of t)e=e.add(n);return e}const W1=new Vt(Fe);function H1(){return W1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bc(e)?"-0":e}}function wT(t){return{integerValue:""+t}}function G1(t,e){return T1(e)?wT(e):Qf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(){this._=void 0}}function K1(t,e,n){return t instanceof Da?function(i,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&Wf(r)&&(r=Hf(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(n,e):t instanceof Gr?IT(t,e):t instanceof Ma?CT(t,e):function(i,r){const o=TT(i,r),a=ty(o)+ty(i.Pe);return Nd(o)&&Nd(i.Pe)?wT(a):Qf(i.serializer,a)}(t,e)}function z1(t,e,n){return t instanceof Gr?IT(t,e):t instanceof Ma?CT(t,e):n}function TT(t,e){return t instanceof kc?function(s){return Nd(s)||function(r){return!!r&&"doubleValue"in r}(s)}(e)?e:{integerValue:0}:null}class Da extends Au{}class Gr extends Au{constructor(e){super(),this.elements=e}}function IT(t,e){const n=AT(e);for(const s of t.elements)n.some(i=>Zn(i,s))||n.push(s);return{arrayValue:{values:n}}}class Ma extends Au{constructor(e){super(),this.elements=e}}function CT(t,e){let n=AT(e);for(const s of t.elements)n=n.filter(i=>!Zn(i,s));return{arrayValue:{values:n}}}class kc extends Au{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function ty(t){return gt(t.integerValue||t.doubleValue)}function AT(t){return Gf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e,n){this.field=e,this.transform=n}}function Q1(t,e){return t.field.isEqual(e.field)&&function(s,i){return s instanceof Gr&&i instanceof Gr||s instanceof Ma&&i instanceof Ma?qr(s.elements,i.elements,Zn):s instanceof kc&&i instanceof kc?Zn(s.Pe,i.Pe):s instanceof Da&&i instanceof Da}(t.transform,e.transform)}class Y1{constructor(e,n){this.version=e,this.transformResults=n}}class Rn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Rn}static exists(e){return new Rn(void 0,e)}static updateTime(e){return new Rn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function sc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ru{}function bT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Yf(t.key,Rn.none()):new il(t.key,t.data,Rn.none());{const n=t.data,s=an.empty();let i=new Vt(Lt.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new yi(t.key,s,new mn(i.toArray()),Rn.none())}}function X1(t,e,n){t instanceof il?function(i,r,o){const a=i.value.clone(),c=sy(i.fieldTransforms,r,o.transformResults);a.setAll(c),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof yi?function(i,r,o){if(!sc(i.precondition,r))return void r.convertToUnknownDocument(o.version);const a=sy(i.fieldTransforms,r,o.transformResults),c=r.data;c.setAll(ST(i)),c.setAll(a),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function la(t,e,n,s){return t instanceof il?function(r,o,a,c){if(!sc(r.precondition,o))return a;const u=r.value.clone(),h=iy(r.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,s):t instanceof yi?function(r,o,a,c){if(!sc(r.precondition,o))return a;const u=iy(r.fieldTransforms,c,o),h=o.data;return h.setAll(ST(r)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(d=>d.field))}(t,e,n,s):function(r,o,a){return sc(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function J1(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=TT(s.transform,i||null);r!=null&&(n===null&&(n=an.empty()),n.set(s.field,r))}return n||null}function ny(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&qr(s,i,(r,o)=>Q1(r,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class il extends Ru{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class yi extends Ru{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function ST(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function sy(t,e,n){const s=new Map;Ke(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,z1(o,a,n[i]))}return s}function iy(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,K1(r,o,e))}return s}class Yf extends Ru{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Z1 extends Ru{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&X1(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=la(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=la(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=ET();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=bT(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(Ee.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),xe())}isEqual(e){return this.batchId===e.batchId&&qr(this.mutations,e.mutations,(n,s)=>ny(n,s))&&qr(this.baseMutations,e.baseMutations,(n,s)=>ny(n,s))}}class Xf{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){Ke(e.mutations.length===s.length);let i=function(){return j1}();const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Xf(e,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yt,Oe;function sx(t){switch(t){default:return ve();case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0}}function PT(t){if(t===void 0)return Ns("GRPC error has no .code"),q.UNKNOWN;switch(t){case yt.OK:return q.OK;case yt.CANCELLED:return q.CANCELLED;case yt.UNKNOWN:return q.UNKNOWN;case yt.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case yt.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case yt.INTERNAL:return q.INTERNAL;case yt.UNAVAILABLE:return q.UNAVAILABLE;case yt.UNAUTHENTICATED:return q.UNAUTHENTICATED;case yt.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case yt.NOT_FOUND:return q.NOT_FOUND;case yt.ALREADY_EXISTS:return q.ALREADY_EXISTS;case yt.PERMISSION_DENIED:return q.PERMISSION_DENIED;case yt.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case yt.ABORTED:return q.ABORTED;case yt.OUT_OF_RANGE:return q.OUT_OF_RANGE;case yt.UNIMPLEMENTED:return q.UNIMPLEMENTED;case yt.DATA_LOSS:return q.DATA_LOSS;default:return ve()}}(Oe=yt||(yt={}))[Oe.OK=0]="OK",Oe[Oe.CANCELLED=1]="CANCELLED",Oe[Oe.UNKNOWN=2]="UNKNOWN",Oe[Oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Oe[Oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Oe[Oe.NOT_FOUND=5]="NOT_FOUND",Oe[Oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Oe[Oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Oe[Oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Oe[Oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Oe[Oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Oe[Oe.ABORTED=10]="ABORTED",Oe[Oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Oe[Oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Oe[Oe.INTERNAL=13]="INTERNAL",Oe[Oe.UNAVAILABLE=14]="UNAVAILABLE",Oe[Oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ix(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx=new qi([4294967295,4294967295],0);function ry(t){const e=ix().encode(t),n=new Jw;return n.update(e),new Uint8Array(n.digest())}function oy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new qi([n,s],0),new qi([i,r],0)]}class Jf{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Ho(`Invalid padding: ${n}`);if(s<0)throw new Ho(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ho(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Ho(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=qi.fromNumber(this.Ie)}Ee(e,n,s){let i=e.add(n.multiply(qi.fromNumber(s)));return i.compare(rx)===1&&(i=new qi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=ry(e),[s,i]=oy(n);for(let r=0;r<this.hashCount;r++){const o=this.Ee(s,i,r);if(!this.de(o))return!1}return!0}static create(e,n,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Jf(r,i,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=ry(e),[s,i]=oy(n);for(let r=0;r<this.hashCount;r++){const o=this.Ee(s,i,r);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Ho extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,rl.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new bu(Ee.min(),i,new wt(Fe),xs(),xe())}}class rl{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new rl(s,n,xe(),xe(),xe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,n,s,i){this.Re=e,this.removedTargetIds=n,this.key=s,this.Ve=i}}class kT{constructor(e,n){this.targetId=e,this.me=n}}class NT{constructor(e,n,s=Ft.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class ay{constructor(){this.fe=0,this.ge=cy(),this.pe=Ft.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=xe(),n=xe(),s=xe();return this.ge.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:ve()}}),new rl(this.pe,this.ye,e,n,s)}Ce(){this.we=!1,this.ge=cy()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ke(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class ox{constructor(e){this.Le=e,this.Be=new Map,this.ke=xs(),this.qe=ly(),this.Qe=new wt(Fe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const s=this.Ge(n);switch(e.state){case 0:this.ze(n)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),s.De(e.resumeToken));break;default:ve()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((s,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,s=e.me.count,i=this.Je(n);if(i){const r=i.target;if(Od(r))if(s===0){const o=new fe(r.path);this.Ue(n,o,Kt.newNoDocument(o,Ee.min()))}else Ke(s===1);else{const o=this.Ye(n);if(o!==s){const a=this.Ze(e),c=a?this.Xe(a,e,o):1;if(c!==0){this.je(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=n;let o,a;try{o=zi(s).toUint8Array()}catch(c){if(c instanceof aT)return jr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Jf(o,i,r)}catch(c){return jr(c instanceof Ho?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ie===0?null:a}Xe(e,n,s){return n.me.count===s-this.nt(e,n.targetId)?0:2}nt(e,n){const s=this.Le.getRemoteKeysForTarget(n);let i=0;return s.forEach(r=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,r,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((r,o)=>{const a=this.Je(o);if(a){if(r.current&&Od(a.target)){const c=new fe(a.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,Kt.newNoDocument(c,e))}r.be&&(n.set(o,r.ve()),r.Ce())}});let s=xe();this.qe.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Je(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.ke.forEach((r,o)=>o.setReadTime(e));const i=new bu(e,n,this.Qe,this.ke,s);return this.ke=xs(),this.qe=ly(),this.Qe=new wt(Fe),i}$e(e,n){if(!this.ze(e))return;const s=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,s),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,s){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),s&&(this.ke=this.ke.insert(n,s))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new ay,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Vt(Fe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||le("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new ay),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function ly(){return new wt(fe.comparator)}function cy(){return new wt(fe.comparator)}const ax={asc:"ASCENDING",desc:"DESCENDING"},lx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},cx={and:"AND",or:"OR"};class ux{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Md(t,e){return t.useProto3Json||wu(e)?e:{value:e}}function Nc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function hx(t,e){return Nc(t,e.toTimestamp())}function Jn(t){return Ke(!!t),Ee.fromTimestamp(function(n){const s=ui(n);return new It(s.seconds,s.nanos)}(t))}function Zf(t,e){return Ld(t,e).canonicalString()}function Ld(t,e){const n=function(i){return new it(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function OT(t){const e=it.fromString(t);return Ke(FT(e)),e}function Vd(t,e){return Zf(t.databaseId,e.path)}function Lh(t,e){const n=OT(e);if(n.get(1)!==t.databaseId.projectId)throw new ie(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ie(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new fe(MT(n))}function DT(t,e){return Zf(t.databaseId,e)}function dx(t){const e=OT(t);return e.length===4?it.emptyPath():MT(e)}function Fd(t){return new it(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function MT(t){return Ke(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function uy(t,e,n){return{name:Vd(t,e),fields:n.value.mapValue.fields}}function fx(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ve()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(u,h){return u.useProto3Json?(Ke(h===void 0||typeof h=="string"),Ft.fromBase64String(h||"")):(Ke(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Ft.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?q.UNKNOWN:PT(u.code);return new ie(h,u.message||"")}(o);n=new NT(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Lh(t,s.document.name),r=Jn(s.document.updateTime),o=s.document.createTime?Jn(s.document.createTime):Ee.min(),a=new an({mapValue:{fields:s.document.fields}}),c=Kt.newFoundDocument(i,r,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];n=new ic(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Lh(t,s.document),r=s.readTime?Jn(s.readTime):Ee.min(),o=Kt.newNoDocument(i,r),a=s.removedTargetIds||[];n=new ic([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Lh(t,s.document),r=s.removedTargetIds||[];n=new ic([],r,i,null)}else{if(!("filter"in e))return ve();{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new nx(i,r),a=s.targetId;n=new kT(a,o)}}return n}function px(t,e){let n;if(e instanceof il)n={update:uy(t,e.key,e.value)};else if(e instanceof Yf)n={delete:Vd(t,e.key)};else if(e instanceof yi)n={update:uy(t,e.key,e.data),updateMask:Ix(e.fieldMask)};else{if(!(e instanceof Z1))return ve();n={verify:Vd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,o){const a=o.transform;if(a instanceof Da)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Gr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ma)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof kc)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw ve()}(0,s))),e.precondition.isNone||(n.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:hx(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:ve()}(t,e.precondition)),n}function gx(t,e){return t&&t.length>0?(Ke(e!==void 0),t.map(n=>function(i,r){let o=i.updateTime?Jn(i.updateTime):Jn(r);return o.isEqual(Ee.min())&&(o=Jn(r)),new Y1(o,i.transformResults||[])}(n,e))):[]}function _x(t,e){return{documents:[DT(t,e.path)]}}function mx(t,e){const n={structuredQuery:{}},s=e.path;let i;e.collectionGroup!==null?(i=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=DT(t,i);const r=function(u){if(u.length!==0)return VT($n.create(u,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const o=function(u){if(u.length!==0)return u.map(h=>function(p){return{field:mr(p.field),direction:Ex(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Md(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:i}}function yx(t){let e=dx(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Ke(s===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let r=[];n.where&&(r=function(d){const p=LT(d);return p instanceof $n&&hT(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(p=>function(T){return new Oa(yr(T.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(d){let p;return p=typeof d=="object"?d.value:d,wu(p)?null:p}(n.limit));let c=null;n.startAt&&(c=function(d){const p=!!d.before,_=d.values||[];return new Sc(_,p)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const p=!d.before,_=d.values||[];return new Sc(_,p)}(n.endAt)),V1(e,i,o,r,a,"F",c,u)}function vx(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ve()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function LT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=yr(n.unaryFilter.field);return Et.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=yr(n.unaryFilter.field);return Et.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=yr(n.unaryFilter.field);return Et.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=yr(n.unaryFilter.field);return Et.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ve()}}(t):t.fieldFilter!==void 0?function(n){return Et.create(yr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ve()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return $n.create(n.compositeFilter.filters.map(s=>LT(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ve()}}(n.compositeFilter.op))}(t):ve()}function Ex(t){return ax[t]}function wx(t){return lx[t]}function Tx(t){return cx[t]}function mr(t){return{fieldPath:t.canonicalString()}}function yr(t){return Lt.fromServerFormat(t.fieldPath)}function VT(t){return t instanceof Et?function(n){if(n.op==="=="){if(Ym(n.value))return{unaryFilter:{field:mr(n.field),op:"IS_NAN"}};if(Qm(n.value))return{unaryFilter:{field:mr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ym(n.value))return{unaryFilter:{field:mr(n.field),op:"IS_NOT_NAN"}};if(Qm(n.value))return{unaryFilter:{field:mr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mr(n.field),op:wx(n.op),value:n.value}}}(t):t instanceof $n?function(n){const s=n.getFilters().map(i=>VT(i));return s.length===1?s[0]:{compositeFilter:{op:Tx(n.op),filters:s}}}(t):ve()}function Ix(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function FT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,n,s,i,r=Ee.min(),o=Ee.min(),a=Ft.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Zs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Zs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Zs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Zs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(e){this.ct=e}}function Ax(t){const e=yx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Pc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rx{constructor(){this.un=new bx}addToCollectionParentIndex(e,n){return this.un.add(n),K.resolve()}getCollectionParents(e,n){return K.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return K.resolve()}deleteFieldIndex(e,n){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,n){return K.resolve()}getDocumentsMatchingTarget(e,n){return K.resolve(null)}getIndexType(e,n){return K.resolve(0)}getFieldIndexes(e,n){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,n){return K.resolve(ci.min())}getMinOffsetFromCollectionGroup(e,n){return K.resolve(ci.min())}updateCollectionGroup(e,n,s){return K.resolve()}updateIndexEntries(e,n){return K.resolve()}}class bx{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new Vt(it.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new Vt(it.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Kr(0)}static kn(){return new Kr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sx{constructor(){this.changes=new oo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Kt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?K.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kx{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&la(s.mutation,i,mn.empty(),It.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,xe()).next(()=>s))}getLocalViewOfDocuments(e,n,s=xe()){const i=Vi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Wo();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Vi();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,xe()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=xs();const o=aa(),a=function(){return aa()}();return n.forEach((c,u)=>{const h=s.get(u.key);i.has(u.key)&&(h===void 0||h.mutation instanceof yi)?r=r.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),la(h.mutation,u,h.mutation.getFieldMask(),It.now())):o.set(u.key,mn.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var d;return a.set(u,new Px(h,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const s=aa();let i=new wt((o,a)=>o-a),r=xe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let h=s.get(c)||mn.empty();h=a.applyToLocalView(u,h),s.set(c,h);const d=(i.get(a.batchId)||xe()).add(c);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,d=ET();h.forEach(p=>{if(!r.has(p)){const _=bT(n.get(p),s.get(p));_!==null&&d.set(p,_),r=r.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return K.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,i){return function(o){return fe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):gT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,i):this.getDocumentsMatchingCollectionQuery(e,n,s,i)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):K.resolve(Vi());let a=-1,c=r;return o.next(u=>K.forEach(u,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),r.get(h)?K.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{c=c.insert(h,p)}))).next(()=>this.populateOverlays(e,u,r)).next(()=>this.computeViews(e,c,u,xe())).next(h=>({batchId:a,changes:vT(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new fe(n)).next(s=>{let i=Wo();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s,i){const r=n.collectionGroup;let o=Wo();return this.indexManager.getCollectionParents(e,r).next(a=>K.forEach(a,c=>{const u=function(d,p){return new ro(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,c.child(r));return this.getDocumentsMatchingCollectionQuery(e,u,s,i).next(h=>{h.forEach((d,p)=>{o=o.insert(d,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r,i))).next(o=>{r.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Kt.newInvalidDocument(h)))});let a=Wo();return o.forEach((c,u)=>{const h=r.get(c);h!==void 0&&la(h.mutation,u,mn.empty(),It.now()),Cu(n,u)&&(a=a.insert(c,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nx{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return K.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Jn(i.createTime)}}(n)),K.resolve()}getNamedQuery(e,n){return K.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:Ax(i.bundledQuery),readTime:Jn(i.readTime)}}(n)),K.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xx{constructor(){this.overlays=new wt(fe.comparator),this.Ir=new Map}getOverlay(e,n){return K.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Vi();return K.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ht(e,n,r)}),K.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.Ir.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.Ir.delete(s)),K.resolve()}getOverlaysForCollection(e,n,s){const i=Vi(),r=n.length+1,o=new fe(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return K.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new wt((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let h=r.get(u.largestBatchId);h===null&&(h=Vi(),r=r.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=Vi(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=i)););return K.resolve(a)}ht(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(s.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new tx(n,s));let r=this.Ir.get(n);r===void 0&&(r=xe(),this.Ir.set(n,r)),this.Ir.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(){this.sessionToken=Ft.EMPTY_BYTE_STRING}getSessionToken(e){return K.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,K.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(){this.Tr=new Vt(Rt.Er),this.dr=new Vt(Rt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const s=new Rt(e,n);this.Tr=this.Tr.add(s),this.dr=this.dr.add(s)}Rr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Vr(new Rt(e,n))}mr(e,n){e.forEach(s=>this.removeReference(s,n))}gr(e){const n=new fe(new it([])),s=new Rt(n,e),i=new Rt(n,e+1),r=[];return this.dr.forEachInRange([s,i],o=>{this.Vr(o),r.push(o.key)}),r}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new fe(new it([])),s=new Rt(n,e),i=new Rt(n,e+1);let r=xe();return this.dr.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Rt(e,0),s=this.Tr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Rt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return fe.comparator(e.key,n.key)||Fe(e.wr,n.wr)}static Ar(e,n){return Fe(e.wr,n.wr)||fe.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Vt(Rt.Er)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ex(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new Rt(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return K.resolve(o)}lookupMutationBatch(e,n){return K.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.vr(s),r=i<0?0:i;return K.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Rt(n,0),i=new Rt(n,Number.POSITIVE_INFINITY),r=[];return this.br.forEachInRange([s,i],o=>{const a=this.Dr(o.wr);r.push(a)}),K.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Vt(Fe);return n.forEach(i=>{const r=new Rt(i,0),o=new Rt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([r,o],a=>{s=s.add(a.wr)})}),K.resolve(this.Cr(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;fe.isDocumentKey(r)||(r=r.child(""));const o=new Rt(new fe(r),0);let a=new Vt(Fe);return this.br.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.wr)),!0)},o),K.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(s=>{const i=this.Dr(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ke(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.br;return K.forEach(n.mutations,i=>{const r=new Rt(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=s})}On(e){}containsKey(e,n){const s=new Rt(n,0),i=this.br.firstAfterOrEqual(s);return K.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{constructor(e){this.Mr=e,this.docs=function(){return new wt(fe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return K.resolve(s?s.document.mutableCopy():Kt.newInvalidDocument(n))}getEntries(e,n){let s=xs();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Kt.newInvalidDocument(i))}),K.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=xs();const o=n.path,a=new fe(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||y1(m1(h),s)<=0||(i.has(h.key)||Cu(n,h))&&(r=r.insert(h.key,h.mutableCopy()))}return K.resolve(r)}getAllFromCollectionGroup(e,n,s,i){ve()}Or(e,n){return K.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Lx(this)}getSize(e){return K.resolve(this.size)}}class Lx extends Sx{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(s)}),K.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{constructor(e){this.persistence=e,this.Nr=new oo(n=>Kf(n),zf),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ep,this.targetCount=0,this.kr=Kr.Bn()}forEachTarget(e,n){return this.Nr.forEach((s,i)=>n(i)),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Lr&&(this.Lr=n),K.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Kr(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,K.resolve()}updateTargetData(e,n){return this.Kn(n),K.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Nr.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),K.waitFor(r).next(()=>i)}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,n){const s=this.Nr.get(n)||null;return K.resolve(s)}addMatchingKeys(e,n,s){return this.Br.Rr(n,s),K.resolve()}removeMatchingKeys(e,n,s){this.Br.mr(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),K.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),K.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Br.yr(n);return K.resolve(s)}containsKey(e,n){return K.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(e,n){this.qr={},this.overlays={},this.Qr=new qf(0),this.Kr=!1,this.Kr=!0,this.$r=new Ox,this.referenceDelegate=e(this),this.Ur=new Vx(this),this.indexManager=new Rx,this.remoteDocumentCache=function(i){return new Mx(i)}(s=>this.referenceDelegate.Wr(s)),this.serializer=new Cx(n),this.Gr=new Nx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new xx,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.qr[e.toKey()];return s||(s=new Dx(n,this.referenceDelegate),this.qr[e.toKey()]=s),s}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,s){le("MemoryPersistence","Starting transaction:",e);const i=new Ux(this.Qr.next());return this.referenceDelegate.zr(),s(i).next(r=>this.referenceDelegate.jr(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Hr(e,n){return K.or(Object.values(this.qr).map(s=>()=>s.containsKey(e,n)))}}class Ux extends E1{constructor(e){super(),this.currentSequenceNumber=e}}class tp{constructor(e){this.persistence=e,this.Jr=new ep,this.Yr=null}static Zr(e){return new tp(e)}get Xr(){if(this.Yr)return this.Yr;throw ve()}addReference(e,n,s){return this.Jr.addReference(s,n),this.Xr.delete(s.toString()),K.resolve()}removeReference(e,n,s){return this.Jr.removeReference(s,n),this.Xr.add(s.toString()),K.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),K.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Xr.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.Xr,s=>{const i=fe.fromPath(s);return this.ei(e,i).next(r=>{r||n.removeEntry(i,Ee.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(s=>{s?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return K.or([()=>K.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.$i=s,this.Ui=i}static Wi(e,n){let s=xe(),i=xe();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new np(e,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return AS()?8:w1(Yt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,s,i){const r={result:null};return this.Yi(e,n).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.Zi(e,n,i,s).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new Bx;return this.Xi(e,n,o).next(a=>{if(r.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>r.result)}es(e,n,s,i){return s.documentReadCount<this.ji?(No()<=Ne.DEBUG&&le("QueryEngine","SDK will not create cache indexes for query:",_r(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),K.resolve()):(No()<=Ne.DEBUG&&le("QueryEngine","Query:",_r(n),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.Hi*i?(No()<=Ne.DEBUG&&le("QueryEngine","The SDK decides to create cache indexes for query:",_r(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xn(n))):K.resolve())}Yi(e,n){if(ey(n))return K.resolve(null);let s=Xn(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Pc(n,null,"F"),s=Xn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=xe(...r);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.ts(n,a);return this.ns(n,u,o,c.readTime)?this.Yi(e,Pc(n,null,"F")):this.rs(e,u,n,c)}))})))}Zi(e,n,s,i){return ey(n)||i.isEqual(Ee.min())?K.resolve(null):this.Ji.getDocuments(e,s).next(r=>{const o=this.ts(n,r);return this.ns(n,o,s,i)?K.resolve(null):(No()<=Ne.DEBUG&&le("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),_r(n)),this.rs(e,o,n,_1(i,-1)).next(a=>a))})}ts(e,n){let s=new Vt(mT(e));return n.forEach((i,r)=>{Cu(e,r)&&(s=s.add(r))}),s}ns(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Xi(e,n,s){return No()<=Ne.DEBUG&&le("QueryEngine","Using full collection scan to execute query:",_r(n)),this.Ji.getDocumentsMatchingQuery(e,n,ci.min(),s)}rs(e,n,s,i){return this.Ji.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e,n,s,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new wt(Fe),this._s=new oo(r=>Kf(r),zf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(s)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new kx(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function qx(t,e,n,s){return new jx(t,e,n,s)}async function UT(t,e){const n=Te(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.ls(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=xe();for(const u of i){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of r){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(s,c).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:a}))})})}function Wx(t,e){const n=Te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,c,u,h){const d=u.batch,p=d.keys();let _=K.resolve();return p.forEach(T=>{_=_.next(()=>h.getEntry(c,T)).next(S=>{const P=u.docVersions.get(T);Ke(P!==null),S.version.compareTo(P)<0&&(d.applyToRemoteDocument(S,u),S.isValidDocument()&&(S.setReadTime(u.commitVersion),h.addEntry(S)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(c,d))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let c=xe();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function BT(t){const e=Te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function Hx(t,e){const n=Te(t),s=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((h,d)=>{const p=i.get(d);if(!p)return;a.push(n.Ur.removeMatchingKeys(r,h.removedDocuments,d).next(()=>n.Ur.addMatchingKeys(r,h.addedDocuments,d)));let _=p.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(d)!==null?_=_.withResumeToken(Ft.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):h.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(h.resumeToken,s)),i=i.insert(d,_),function(S,P,V){return S.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=3e8?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(p,_,h)&&a.push(n.Ur.updateTargetData(r,_))});let c=xs(),u=xe();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,h))}),a.push(Gx(r,o,e.documentUpdates).next(h=>{c=h.Ps,u=h.Is})),!s.isEqual(Ee.min())){const h=n.Ur.getLastRemoteSnapshotVersion(r).next(d=>n.Ur.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(h)}return K.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,c,u)).next(()=>c)}).then(r=>(n.os=i,r))}function Gx(t,e,n){let s=xe(),i=xe();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=xs();return n.forEach((a,c)=>{const u=r.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(Ee.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):le("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Ps:o,Is:i}})}function Kx(t,e){const n=Te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function zx(t,e){const n=Te(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Ur.getTargetData(s,e).next(r=>r?(i=r,K.resolve(i)):n.Ur.allocateTargetId(s).next(o=>(i=new Zs(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Ur.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.os.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(s.targetId,s),n._s.set(e,s.targetId)),s})}async function Ud(t,e,n){const s=Te(t),i=s.os.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!sl(o))throw o;le("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.os=s.os.remove(e),s._s.delete(i.target)}function hy(t,e,n){const s=Te(t);let i=Ee.min(),r=xe();return s.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const d=Te(c),p=d._s.get(h);return p!==void 0?K.resolve(d.os.get(p)):d.Ur.getTargetData(u,h)}(s,o,Xn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ur.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>s.ss.getDocumentsMatchingQuery(o,e,n?i:Ee.min(),n?r:xe())).next(a=>(Qx(s,U1(e),a),{documents:a,Ts:r})))}function Qx(t,e,n){let s=t.us.get(e)||Ee.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.us.set(e,s)}class dy{constructor(){this.activeTargetIds=H1()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Yx{constructor(){this.so=new dy,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,s){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new dy,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){le("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){le("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ul=null;function Vh(){return Ul===null?Ul=function(){return 268435456+Math.round(2147483648*Math.random())}():Ul++,"0x"+Ul.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="WebChannelConnection";class eO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Do=s+"://"+n.host,this.vo=`projects/${i}/databases/${r}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${r}`}get Fo(){return!1}Mo(n,s,i,r,o){const a=Vh(),c=this.xo(n,s.toUriEncodedString());le("RestConnection",`Sending RPC '${n}' ${a}:`,c,i);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,r,o),this.No(n,c,u,i).then(h=>(le("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw jr("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",c,"request:",i),h})}Lo(n,s,i,r,o,a){return this.Mo(n,s,i,r,o)}Oo(n,s,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+io}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((r,o)=>n[o]=r),i&&i.headers.forEach((r,o)=>n[o]=r)}xo(n,s){const i=Jx[n];return`${this.Do}/v1/${s}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,s,i){const r=Vh();return new Promise((o,a)=>{const c=new Zw;c.setWithCredentials(!0),c.listenOnce(eT.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case tc.NO_ERROR:const h=c.getResponseJson();le(qt,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(h)),o(h);break;case tc.TIMEOUT:le(qt,`RPC '${e}' ${r} timed out`),a(new ie(q.DEADLINE_EXCEEDED,"Request time out"));break;case tc.HTTP_ERROR:const d=c.getStatus();if(le(qt,`RPC '${e}' ${r} failed with status:`,d,"response text:",c.getResponseText()),d>0){let p=c.getResponseJson();Array.isArray(p)&&(p=p[0]);const _=p==null?void 0:p.error;if(_&&_.status&&_.message){const T=function(P){const V=P.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(V)>=0?V:q.UNKNOWN}(_.status);a(new ie(T,_.message))}else a(new ie(q.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new ie(q.UNAVAILABLE,"Connection failed."));break;default:ve()}}finally{le(qt,`RPC '${e}' ${r} completed.`)}});const u=JSON.stringify(i);le(qt,`RPC '${e}' ${r} sending request:`,i),c.send(n,"POST",u,s,15)})}Bo(e,n,s){const i=Vh(),r=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=sT(),a=nT(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const h=r.join("");le(qt,`Creating RPC '${e}' stream ${i}: ${h}`,c);const d=o.createWebChannel(h,c);let p=!1,_=!1;const T=new Zx({Io:P=>{_?le(qt,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(p||(le(qt,`Opening RPC '${e}' stream ${i} transport.`),d.open(),p=!0),le(qt,`RPC '${e}' stream ${i} sending:`,P),d.send(P))},To:()=>d.close()}),S=(P,V,O)=>{P.listen(V,D=>{try{O(D)}catch(x){setTimeout(()=>{throw x},0)}})};return S(d,qo.EventType.OPEN,()=>{_||(le(qt,`RPC '${e}' stream ${i} transport opened.`),T.yo())}),S(d,qo.EventType.CLOSE,()=>{_||(_=!0,le(qt,`RPC '${e}' stream ${i} transport closed`),T.So())}),S(d,qo.EventType.ERROR,P=>{_||(_=!0,jr(qt,`RPC '${e}' stream ${i} transport errored:`,P),T.So(new ie(q.UNAVAILABLE,"The operation could not be completed")))}),S(d,qo.EventType.MESSAGE,P=>{var V;if(!_){const O=P.data[0];Ke(!!O);const D=O,x=D.error||((V=D[0])===null||V===void 0?void 0:V.error);if(x){le(qt,`RPC '${e}' stream ${i} received error:`,x);const z=x.status;let j=function(v){const w=yt[v];if(w!==void 0)return PT(w)}(z),C=x.message;j===void 0&&(j=q.INTERNAL,C="Unknown error status: "+z+" with message "+x.message),_=!0,T.So(new ie(j,C)),d.close()}else le(qt,`RPC '${e}' stream ${i} received:`,O),T.bo(O)}}),S(a,tT.STAT_EVENT,P=>{P.stat===Sd.PROXY?le(qt,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===Sd.NOPROXY&&le(qt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{T.wo()},0),T}}function Fh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(t){return new ux(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e,n,s=1e3,i=1.5,r=6e4){this.ui=e,this.timerId=n,this.ko=s,this.qo=i,this.Qo=r,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),s=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-s);i>0&&le("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e,n,s,i,r,o,a,c){this.ui=e,this.Ho=s,this.Jo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new $T(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===q.RESOURCE_EXHAUSTED?(Ns(n.toString()),Ns("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Yo===n&&this.P_(s,i)},s=>{e(()=>{const i=new ie(q.UNKNOWN,"Fetching auth token failed: "+s.message);return this.I_(i)})})}P_(e,n){const s=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{s(()=>this.listener.Eo())}),this.stream.Ro(()=>{s(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{s(()=>this.I_(i))}),this.stream.onMessage(i=>{s(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return le("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(le("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class tO extends jT{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=fx(this.serializer,e),s=function(r){if(!("targetChange"in r))return Ee.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?Ee.min():o.readTime?Jn(o.readTime):Ee.min()}(e);return this.listener.d_(n,s)}A_(e){const n={};n.database=Fd(this.serializer),n.addTarget=function(r,o){let a;const c=o.target;if(a=Od(c)?{documents:_x(r,c)}:{query:mx(r,c)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=xT(r,o.resumeToken);const u=Md(r,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(Ee.min())>0){a.readTime=Nc(r,o.snapshotVersion.toTimestamp());const u=Md(r,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const s=vx(this.serializer,e);s&&(n.labels=s),this.a_(n)}R_(e){const n={};n.database=Fd(this.serializer),n.removeTarget=e,this.a_(n)}}class nO extends jT{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ke(!!e.streamToken),this.lastStreamToken=e.streamToken,Ke(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ke(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=gx(e.writeResults,e.commitTime),s=Jn(e.commitTime);return this.listener.g_(s,n)}p_(){const e={};e.database=Fd(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>px(this.serializer,s))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new ie(q.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.Mo(e,Ld(n,s),i,r,o)).catch(r=>{throw r.name==="FirebaseError"?(r.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new ie(q.UNKNOWN,r.toString())})}Lo(e,n,s,i,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Ld(n,s),i,o,a,r)).catch(o=>{throw o.name==="FirebaseError"?(o.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ie(q.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class iO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Ns(n),this.D_=!1):le("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rO{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=r,this.k_._o(o=>{s.enqueueAndForget(async()=>{nr(this)&&(le("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=Te(c);u.L_.add(4),await ol(u),u.q_.set("Unknown"),u.L_.delete(4),await Pu(u)}(this))})}),this.q_=new iO(s,i)}}async function Pu(t){if(nr(t))for(const e of t.B_)await e(!0)}async function ol(t){for(const e of t.B_)await e(!1)}function qT(t,e){const n=Te(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),op(n)?rp(n):ao(n).r_()&&ip(n,e))}function sp(t,e){const n=Te(t),s=ao(n);n.N_.delete(e),s.r_()&&WT(n,e),n.N_.size===0&&(s.r_()?s.o_():nr(n)&&n.q_.set("Unknown"))}function ip(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ao(t).A_(e)}function WT(t,e){t.Q_.xe(e),ao(t).R_(e)}function rp(t){t.Q_=new ox({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ao(t).start(),t.q_.v_()}function op(t){return nr(t)&&!ao(t).n_()&&t.N_.size>0}function nr(t){return Te(t).L_.size===0}function HT(t){t.Q_=void 0}async function oO(t){t.q_.set("Online")}async function aO(t){t.N_.forEach((e,n)=>{ip(t,e)})}async function lO(t,e){HT(t),op(t)?(t.q_.M_(e),rp(t)):t.q_.set("Unknown")}async function cO(t,e,n){if(t.q_.set("Online"),e instanceof NT&&e.state===2&&e.cause)try{await async function(i,r){const o=r.cause;for(const a of r.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(s){le("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await xc(t,s)}else if(e instanceof ic?t.Q_.Ke(e):e instanceof kT?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Ee.min()))try{const s=await BT(t.localStore);n.compareTo(s)>=0&&await function(r,o){const a=r.Q_.rt(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=r.N_.get(u);h&&r.N_.set(u,h.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const h=r.N_.get(c);if(!h)return;r.N_.set(c,h.withResumeToken(Ft.EMPTY_BYTE_STRING,h.snapshotVersion)),WT(r,c);const d=new Zs(h.target,c,u,h.sequenceNumber);ip(r,d)}),r.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(s){le("RemoteStore","Failed to raise snapshot:",s),await xc(t,s)}}async function xc(t,e,n){if(!sl(e))throw e;t.L_.add(1),await ol(t),t.q_.set("Offline"),n||(n=()=>BT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{le("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Pu(t)})}function GT(t,e){return e().catch(n=>xc(t,n,e))}async function ku(t){const e=Te(t),n=hi(e);let s=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;uO(e);)try{const i=await Kx(e.localStore,s);if(i===null){e.O_.length===0&&n.o_();break}s=i.batchId,hO(e,i)}catch(i){await xc(e,i)}KT(e)&&zT(e)}function uO(t){return nr(t)&&t.O_.length<10}function hO(t,e){t.O_.push(e);const n=hi(t);n.r_()&&n.V_&&n.m_(e.mutations)}function KT(t){return nr(t)&&!hi(t).n_()&&t.O_.length>0}function zT(t){hi(t).start()}async function dO(t){hi(t).p_()}async function fO(t){const e=hi(t);for(const n of t.O_)e.m_(n.mutations)}async function pO(t,e,n){const s=t.O_.shift(),i=Xf.from(s,e,n);await GT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ku(t)}async function gO(t,e){e&&hi(t).V_&&await async function(s,i){if(function(o){return sx(o)&&o!==q.ABORTED}(i.code)){const r=s.O_.shift();hi(s).s_(),await GT(s,()=>s.remoteSyncer.rejectFailedWrite(r.batchId,i)),await ku(s)}}(t,e),KT(t)&&zT(t)}async function py(t,e){const n=Te(t);n.asyncQueue.verifyOperationInProgress(),le("RemoteStore","RemoteStore received new credentials");const s=nr(n);n.L_.add(3),await ol(n),s&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Pu(n)}async function _O(t,e){const n=Te(t);e?(n.L_.delete(2),await Pu(n)):e||(n.L_.add(2),await ol(n),n.q_.set("Unknown"))}function ao(t){return t.K_||(t.K_=function(n,s,i){const r=Te(n);return r.w_(),new tO(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{Eo:oO.bind(null,t),Ro:aO.bind(null,t),mo:lO.bind(null,t),d_:cO.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),op(t)?rp(t):t.q_.set("Unknown")):(await t.K_.stop(),HT(t))})),t.K_}function hi(t){return t.U_||(t.U_=function(n,s,i){const r=Te(n);return r.w_(),new nO(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:dO.bind(null,t),mo:gO.bind(null,t),f_:fO.bind(null,t),g_:pO.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await ku(t)):(await t.U_.stop(),t.O_.length>0&&(le("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Is,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new ap(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lp(t,e){if(Ns("AsyncQueue",`${e}: ${t}`),sl(t))return new ie(q.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e){this.comparator=e?(n,s)=>e(n,s)||fe.comparator(n.key,s.key):(n,s)=>fe.comparator(n.key,s.key),this.keyedMap=Wo(),this.sortedSet=new wt(this.comparator)}static emptySet(e){return new Sr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Sr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Sr;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(){this.W_=new wt(fe.comparator)}track(e){const n=e.doc.key,s=this.W_.get(n);s?e.type!==0&&s.type===3?this.W_=this.W_.insert(n,e):e.type===3&&s.type!==1?this.W_=this.W_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.W_=this.W_.remove(n):e.type===1&&s.type===2?this.W_=this.W_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ve():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,s)=>{e.push(s)}),e}}class zr{constructor(e,n,s,i,r,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new zr(e,n,Sr.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Iu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mO{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class yO{constructor(){this.queries=_y(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,s){const i=Te(n),r=i.queries;i.queries=_y(),r.forEach((o,a)=>{for(const c of a.j_)c.onError(s)})})(this,new ie(q.ABORTED,"Firestore shutting down"))}}function _y(){return new oo(t=>_T(t),Iu)}async function cp(t,e){const n=Te(t);let s=3;const i=e.query;let r=n.queries.get(i);r?!r.H_()&&e.J_()&&(s=2):(r=new mO,s=e.J_()?0:1);try{switch(s){case 0:r.z_=await n.onListen(i,!0);break;case 1:r.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=lp(o,`Initialization of query '${_r(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,r),r.j_.push(e),e.Z_(n.onlineState),r.z_&&e.X_(r.z_)&&hp(n)}async function up(t,e){const n=Te(t),s=e.query;let i=3;const r=n.queries.get(s);if(r){const o=r.j_.indexOf(e);o>=0&&(r.j_.splice(o,1),r.j_.length===0?i=e.J_()?0:1:!r.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function vO(t,e){const n=Te(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.j_)a.X_(i)&&(s=!0);o.z_=i}}s&&hp(n)}function EO(t,e,n){const s=Te(t),i=s.queries.get(e);if(i)for(const r of i.j_)r.onError(n);s.queries.delete(e)}function hp(t){t.Y_.forEach(e=>{e.next()})}var Bd,my;(my=Bd||(Bd={})).ea="default",my.Cache="cache";class dp{constructor(e,n,s){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=s||{}}X_(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new zr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const s=n!=="Offline";return(!this.options._a||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=zr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Bd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(e){this.key=e}}class YT{constructor(e){this.key=e}}class wO{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=xe(),this.mutatedKeys=xe(),this.Aa=mT(e),this.Ra=new Sr(this.Aa)}get Va(){return this.Ta}ma(e,n){const s=n?n.fa:new gy,i=n?n.Ra:this.Ra;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,d)=>{const p=i.get(h),_=Cu(this.query,d)?d:null,T=!!p&&this.mutatedKeys.has(p.key),S=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let P=!1;p&&_?p.data.isEqual(_.data)?T!==S&&(s.track({type:3,doc:_}),P=!0):this.ga(p,_)||(s.track({type:2,doc:_}),P=!0,(c&&this.Aa(_,c)>0||u&&this.Aa(_,u)<0)&&(a=!0)):!p&&_?(s.track({type:0,doc:_}),P=!0):p&&!_&&(s.track({type:1,doc:p}),P=!0,(c||u)&&(a=!0)),P&&(_?(o=o.add(_),r=S?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),s.track({type:1,doc:h})}return{Ra:o,fa:s,ns:a,mutatedKeys:r}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,i){const r=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,d)=>function(_,T){const S=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ve()}};return S(_)-S(T)}(h.type,d.type)||this.Aa(h.doc,d.doc)),this.pa(s),i=i!=null&&i;const a=n&&!i?this.ya():[],c=this.da.size===0&&this.current&&!i?1:0,u=c!==this.Ea;return this.Ea=c,o.length!==0||u?{snapshot:new zr(this.query,e.Ra,r,o,e.mutatedKeys,c===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new gy,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=xe(),this.Ra.forEach(s=>{this.Sa(s.key)&&(this.da=this.da.add(s.key))});const n=[];return e.forEach(s=>{this.da.has(s)||n.push(new YT(s))}),this.da.forEach(s=>{e.has(s)||n.push(new QT(s))}),n}ba(e){this.Ta=e.Ts,this.da=xe();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return zr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class TO{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class IO{constructor(e){this.key=e,this.va=!1}}class CO{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new oo(a=>_T(a),Iu),this.Ma=new Map,this.xa=new Set,this.Oa=new wt(fe.comparator),this.Na=new Map,this.La=new ep,this.Ba={},this.ka=new Map,this.qa=Kr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function AO(t,e,n=!0){const s=nI(t);let i;const r=s.Fa.get(e);return r?(s.sharedClientState.addLocalQueryTarget(r.targetId),i=r.view.Da()):i=await XT(s,e,n,!0),i}async function RO(t,e){const n=nI(t);await XT(n,e,!0,!1)}async function XT(t,e,n,s){const i=await zx(t.localStore,Xn(e)),r=i.targetId,o=t.sharedClientState.addLocalQueryTarget(r,n);let a;return s&&(a=await bO(t,e,r,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&qT(t.remoteStore,i),a}async function bO(t,e,n,s,i){t.Ka=(d,p,_)=>async function(S,P,V,O){let D=P.view.ma(V);D.ns&&(D=await hy(S.localStore,P.query,!1).then(({documents:C})=>P.view.ma(C,D)));const x=O&&O.targetChanges.get(P.targetId),z=O&&O.targetMismatches.get(P.targetId)!=null,j=P.view.applyChanges(D,S.isPrimaryClient,x,z);return vy(S,P.targetId,j.wa),j.snapshot}(t,d,p,_);const r=await hy(t.localStore,e,!0),o=new wO(e,r.Ts),a=o.ma(r.documents),c=rl.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,c);vy(t,n,u.wa);const h=new TO(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}async function SO(t,e,n){const s=Te(t),i=s.Fa.get(e),r=s.Ma.get(i.targetId);if(r.length>1)return s.Ma.set(i.targetId,r.filter(o=>!Iu(o,e))),void s.Fa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await Ud(s.localStore,i.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(i.targetId),n&&sp(s.remoteStore,i.targetId),$d(s,i.targetId)}).catch(nl)):($d(s,i.targetId),await Ud(s.localStore,i.targetId,!0))}async function PO(t,e){const n=Te(t),s=n.Fa.get(e),i=n.Ma.get(s.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),sp(n.remoteStore,s.targetId))}async function kO(t,e,n){const s=VO(t);try{const i=await function(o,a){const c=Te(o),u=It.now(),h=a.reduce((_,T)=>_.add(T.key),xe());let d,p;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let T=xs(),S=xe();return c.cs.getEntries(_,h).next(P=>{T=P,T.forEach((V,O)=>{O.isValidDocument()||(S=S.add(V))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,T)).next(P=>{d=P;const V=[];for(const O of a){const D=J1(O,d.get(O.key).overlayedDocument);D!=null&&V.push(new yi(O.key,D,lT(D.value.mapValue),Rn.exists(!0)))}return c.mutationQueue.addMutationBatch(_,u,V,a)}).next(P=>{p=P;const V=P.applyToLocalDocumentSet(d,S);return c.documentOverlayCache.saveOverlays(_,P.batchId,V)})}).then(()=>({batchId:p.batchId,changes:vT(d)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let u=o.Ba[o.currentUser.toKey()];u||(u=new wt(Fe)),u=u.insert(a,c),o.Ba[o.currentUser.toKey()]=u}(s,i.batchId,n),await al(s,i.changes),await ku(s.remoteStore)}catch(i){const r=lp(i,"Failed to persist write");n.reject(r)}}async function JT(t,e){const n=Te(t);try{const s=await Hx(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.Na.get(r);o&&(Ke(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?Ke(o.va):i.removedDocuments.size>0&&(Ke(o.va),o.va=!1))}),await al(n,s,e)}catch(s){await nl(s)}}function yy(t,e,n){const s=Te(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.Fa.forEach((r,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=Te(o);c.onlineState=a;let u=!1;c.queries.forEach((h,d)=>{for(const p of d.j_)p.Z_(a)&&(u=!0)}),u&&hp(c)}(s.eventManager,e),i.length&&s.Ca.d_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function NO(t,e,n){const s=Te(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.Na.get(e),r=i&&i.key;if(r){let o=new wt(fe.comparator);o=o.insert(r,Kt.newNoDocument(r,Ee.min()));const a=xe().add(r),c=new bu(Ee.min(),new Map,new wt(Fe),o,a);await JT(s,c),s.Oa=s.Oa.remove(r),s.Na.delete(e),fp(s)}else await Ud(s.localStore,e,!1).then(()=>$d(s,e,n)).catch(nl)}async function xO(t,e){const n=Te(t),s=e.batch.batchId;try{const i=await Wx(n.localStore,e);eI(n,s,null),ZT(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await al(n,i)}catch(i){await nl(i)}}async function OO(t,e,n){const s=Te(t);try{const i=await function(o,a){const c=Te(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,a).next(d=>(Ke(d!==null),h=d.keys(),c.mutationQueue.removeMutationBatch(u,d))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(s.localStore,e);eI(s,e,n),ZT(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await al(s,i)}catch(i){await nl(i)}}function ZT(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function eI(t,e,n){const s=Te(t);let i=s.Ba[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.Ba[s.currentUser.toKey()]=i}}function $d(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Ma.get(e))t.Fa.delete(s),n&&t.Ca.$a(s,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(s=>{t.La.containsKey(s)||tI(t,s)})}function tI(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(sp(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),fp(t))}function vy(t,e,n){for(const s of n)s instanceof QT?(t.La.addReference(s.key,e),DO(t,s)):s instanceof YT?(le("SyncEngine","Document no longer in limbo: "+s.key),t.La.removeReference(s.key,e),t.La.containsKey(s.key)||tI(t,s.key)):ve()}function DO(t,e){const n=e.key,s=n.path.canonicalString();t.Oa.get(n)||t.xa.has(s)||(le("SyncEngine","New document in limbo: "+n),t.xa.add(s),fp(t))}function fp(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new fe(it.fromString(e)),s=t.qa.next();t.Na.set(s,new IO(n)),t.Oa=t.Oa.insert(n,s),qT(t.remoteStore,new Zs(Xn(Tu(n.path)),s,"TargetPurposeLimboResolution",qf.oe))}}async function al(t,e,n){const s=Te(t),i=[],r=[],o=[];s.Fa.isEmpty()||(s.Fa.forEach((a,c)=>{o.push(s.Ka(c,e,n).then(u=>{var h;if((u||n)&&s.isPrimaryClient){const d=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;s.sharedClientState.updateQueryState(c.targetId,d?"current":"not-current")}if(u){i.push(u);const d=np.Wi(c.targetId,u);r.push(d)}}))}),await Promise.all(o),s.Ca.d_(i),await async function(c,u){const h=Te(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>K.forEach(u,p=>K.forEach(p.$i,_=>h.persistence.referenceDelegate.addReference(d,p.targetId,_)).next(()=>K.forEach(p.Ui,_=>h.persistence.referenceDelegate.removeReference(d,p.targetId,_)))))}catch(d){if(!sl(d))throw d;le("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const p=d.targetId;if(!d.fromCache){const _=h.os.get(p),T=_.snapshotVersion,S=_.withLastLimboFreeSnapshotVersion(T);h.os=h.os.insert(p,S)}}}(s.localStore,r))}async function MO(t,e){const n=Te(t);if(!n.currentUser.isEqual(e)){le("SyncEngine","User change. New user:",e.toKey());const s=await UT(n.localStore,e);n.currentUser=e,function(r,o){r.ka.forEach(a=>{a.forEach(c=>{c.reject(new ie(q.CANCELLED,o))})}),r.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await al(n,s.hs)}}function LO(t,e){const n=Te(t),s=n.Na.get(e);if(s&&s.va)return xe().add(s.key);{let i=xe();const r=n.Ma.get(e);if(!r)return i;for(const o of r){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function nI(t){const e=Te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=JT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=LO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=NO.bind(null,e),e.Ca.d_=vO.bind(null,e.eventManager),e.Ca.$a=EO.bind(null,e.eventManager),e}function VO(t){const e=Te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=xO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=OO.bind(null,e),e}class Oc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Su(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return qx(this.persistence,new $x,e.initialUser,this.serializer)}Ga(e){return new Fx(tp.Zr,this.serializer)}Wa(e){return new Yx}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Oc.provider={build:()=>new Oc};class jd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>yy(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=MO.bind(null,this.syncEngine),await _O(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new yO}()}createDatastore(e){const n=Su(e.databaseInfo.databaseId),s=function(r){return new eO(r)}(e.databaseInfo);return function(r,o,a,c){return new sO(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,i,r,o,a){return new rO(s,i,r,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>yy(this.syncEngine,n,0),function(){return fy.D()?new fy:new Xx}())}createSyncEngine(e,n){return function(i,r,o,a,c,u,h){const d=new CO(i,r,o,a,c,u);return h&&(d.Qa=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const r=Te(i);le("RemoteStore","RemoteStore shutting down."),r.L_.add(5),await ol(r),r.k_.shutdown(),r.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}jd.provider={build:()=>new jd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Ns("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{constructor(e,n,s,i,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Ht.UNAUTHENTICATED,this.clientId=rT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(s,async o=>{le("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>(le("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Is;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=lp(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Uh(t,e){t.asyncQueue.verifyOperationInProgress(),le("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await UT(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ey(t,e){t.asyncQueue.verifyOperationInProgress();const n=await UO(t);le("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(s=>py(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>py(e.remoteStore,i)),t._onlineComponents=e}async function UO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){le("FirestoreClient","Using user provided OfflineComponentProvider");try{await Uh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===q.FAILED_PRECONDITION||i.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;jr("Error using user provided cache. Falling back to memory cache: "+n),await Uh(t,new Oc)}}else le("FirestoreClient","Using default OfflineComponentProvider"),await Uh(t,new Oc);return t._offlineComponents}async function sI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(le("FirestoreClient","Using user provided OnlineComponentProvider"),await Ey(t,t._uninitializedComponentsProvider._online)):(le("FirestoreClient","Using default OnlineComponentProvider"),await Ey(t,new jd))),t._onlineComponents}function BO(t){return sI(t).then(e=>e.syncEngine)}async function Dc(t){const e=await sI(t),n=e.eventManager;return n.onListen=AO.bind(null,e.syncEngine),n.onUnlisten=SO.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=RO.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=PO.bind(null,e.syncEngine),n}function $O(t,e,n={}){const s=new Is;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,c,u){const h=new pp({next:p=>{h.Za(),o.enqueueAndForget(()=>up(r,d));const _=p.docs.has(a);!_&&p.fromCache?u.reject(new ie(q.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&p.fromCache&&c&&c.source==="server"?u.reject(new ie(q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new dp(Tu(a.path),h,{includeMetadataChanges:!0,_a:!0});return cp(r,d)}(await Dc(t),t.asyncQueue,e,n,s)),s.promise}function jO(t,e,n={}){const s=new Is;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,c,u){const h=new pp({next:p=>{h.Za(),o.enqueueAndForget(()=>up(r,d)),p.fromCache&&c.source==="server"?u.reject(new ie(q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new dp(a,h,{includeMetadataChanges:!0,_a:!0});return cp(r,d)}(await Dc(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rI(t,e,n){if(!n)throw new ie(q.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function qO(t,e,n,s){if(e===!0&&s===!0)throw new ie(q.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ty(t){if(!fe.isDocumentKey(t))throw new ie(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Iy(t){if(fe.isDocumentKey(t))throw new ie(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Nu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ve()}function un(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ie(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Nu(t);throw new ie(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ie(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ie(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}qO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=iI((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new ie(q.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new ie(q.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new ie(q.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class xu{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cy({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cy(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new a1;switch(s.type){case"firstParty":return new h1(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ie(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=wy.get(n);s&&(le("ComponentProvider","Removing Datastore"),wy.delete(n),s.terminate())}(this),Promise.resolve()}}function WO(t,e,n,s={}){var i;const r=(t=un(t,xu))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&jr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let a,c;if(typeof s.mockUserToken=="string")a=s.mockUserToken,c=Ht.MOCK_USER;else{a=Sf(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new ie(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Ht(u)}t._authCredentials=new l1(new iT(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Fs(this.firestore,e,this._query)}}class Qt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new si(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Qt(this.firestore,e,this._key)}}class si extends Fs{constructor(e,n,s){super(e,n,Tu(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Qt(this.firestore,null,new fe(e))}withConverter(e){return new si(this.firestore,e,this._path)}}function fn(t,e,...n){if(t=He(t),rI("collection","path",e),t instanceof xu){const s=it.fromString(e,...n);return Iy(s),new si(t,null,s)}{if(!(t instanceof Qt||t instanceof si))throw new ie(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(it.fromString(e,...n));return Iy(s),new si(t.firestore,null,s)}}function vs(t,e,...n){if(t=He(t),arguments.length===1&&(e=rT.newId()),rI("doc","path",e),t instanceof xu){const s=it.fromString(e,...n);return Ty(s),new Qt(t,null,new fe(s))}{if(!(t instanceof Qt||t instanceof si))throw new ie(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(it.fromString(e,...n));return Ty(s),new Qt(t.firestore,t instanceof si?t.converter:null,new fe(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new $T(this,"async_queue_retry"),this.Vu=()=>{const s=Fh();s&&le("AsyncQueue","Visibility state changed to "+s.visibilityState),this.t_.jo()},this.mu=e;const n=Fh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Fh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Is;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!sl(e))throw e;le("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(s=>{this.Eu=s,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw Ns("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.du=!1,s))));return this.mu=n,n}enqueueAfterDelay(e,n,s){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=ap.createAndSchedule(this,e,n,s,r=>this.yu(r));return this.Tu.push(i),i}fu(){this.Eu&&ve()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Ry(t){return function(n,s){if(typeof n!="object"||n===null)return!1;const i=n;for(const r of s)if(r in i&&typeof i[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Os extends xu{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new Ay,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ay(e),this._firestoreClient=void 0,await e}}}function HO(t,e){const n=typeof t=="object"?t:mu(),s=typeof t=="string"?t:"(default)",i=Xa(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=bf("firestore");r&&WO(i,...r)}return i}function Ou(t){if(t._terminated)throw new ie(q.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||GO(t),t._firestoreClient}function GO(t){var e,n,s;const i=t._freezeSettings(),r=function(a,c,u,h){return new C1(a,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,iI(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new FO(t._authCredentials,t._appCheckCredentials,t._queue,r,t._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qr(Ft.fromBase64String(e))}catch(n){throw new ie(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Qr(Ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ie(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Lt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ie(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ie(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Fe(this._lat,e._lat)||Fe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,i){if(s.length!==i.length)return!1;for(let r=0;r<s.length;++r)if(s[r]!==i[r])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KO=/^__.*__$/;class zO{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new yi(e,this.data,this.fieldMask,n,this.fieldTransforms):new il(e,this.data,n,this.fieldTransforms)}}class oI{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new yi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function aI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ve()}}class Mu{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.vu(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Mu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:s,xu:!1});return i.Ou(e),i}Nu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:s,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Mc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(aI(this.Cu)&&KO.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class QO{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Su(e)}Qu(e,n,s,i=!1){return new Mu({Cu:e,methodName:n,qu:s,path:Lt.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Lu(t){const e=t._freezeSettings(),n=Su(t._databaseId);return new QO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function lI(t,e,n,s,i,r={}){const o=t.Qu(r.merge||r.mergeFields?2:0,e,n,i);vp("Data must be an object, but it was:",o,s);const a=cI(s,o);let c,u;if(r.merge)c=new mn(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const d of r.mergeFields){const p=qd(e,d,n);if(!o.contains(p))throw new ie(q.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);hI(h,p)||h.push(p)}c=new mn(h),u=o.fieldTransforms.filter(d=>c.covers(d.field))}else c=null,u=o.fieldTransforms;return new zO(new an(a),c,u)}class Vu extends ll{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Vu}}function YO(t,e,n){return new Mu({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class mp extends ll{_toFieldTransform(e){return new RT(e.path,new Da)}isEqual(e){return e instanceof mp}}class yp extends ll{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=YO(this,e,!0),s=this.Ku.map(r=>lo(r,n)),i=new Gr(s);return new RT(e.path,i)}isEqual(e){return e instanceof yp&&Ra(this.Ku,e.Ku)}}function XO(t,e,n,s){const i=t.Qu(1,e,n);vp("Data must be an object, but it was:",i,s);const r=[],o=an.empty();tr(s,(c,u)=>{const h=Ep(e,c,n);u=He(u);const d=i.Nu(h);if(u instanceof Vu)r.push(h);else{const p=lo(u,d);p!=null&&(r.push(h),o.set(h,p))}});const a=new mn(r);return new oI(o,a,i.fieldTransforms)}function JO(t,e,n,s,i,r){const o=t.Qu(1,e,n),a=[qd(e,s,n)],c=[i];if(r.length%2!=0)throw new ie(q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<r.length;p+=2)a.push(qd(e,r[p])),c.push(r[p+1]);const u=[],h=an.empty();for(let p=a.length-1;p>=0;--p)if(!hI(u,a[p])){const _=a[p];let T=c[p];T=He(T);const S=o.Nu(_);if(T instanceof Vu)u.push(_);else{const P=lo(T,S);P!=null&&(u.push(_),h.set(_,P))}}const d=new mn(u);return new oI(h,d,o.fieldTransforms)}function ZO(t,e,n,s=!1){return lo(n,t.Qu(s?4:3,e))}function lo(t,e){if(uI(t=He(t)))return vp("Unsupported field value:",e,t),cI(t,e);if(t instanceof ll)return function(s,i){if(!aI(i.Cu))throw i.Bu(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(s,i){const r=[];let o=0;for(const a of s){let c=lo(a,i.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),r.push(c),o++}return{arrayValue:{values:r}}}(t,e)}return function(s,i){if((s=He(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return G1(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=It.fromDate(s);return{timestampValue:Nc(i.serializer,r)}}if(s instanceof It){const r=new It(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Nc(i.serializer,r)}}if(s instanceof gp)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Qr)return{bytesValue:xT(i.serializer,s._byteString)};if(s instanceof Qt){const r=i.databaseId,o=s.firestore._databaseId;if(!o.isEqual(r))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Zf(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof _p)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw a.Bu("VectorValues must only contain numeric values.");return Qf(a.serializer,c)})}}}}}}(s,i);throw i.Bu(`Unsupported field value: ${Nu(s)}`)}(t,e)}function cI(t,e){const n={};return oT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):tr(t,(s,i)=>{const r=lo(i,e.Mu(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function uI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof It||t instanceof gp||t instanceof Qr||t instanceof Qt||t instanceof ll||t instanceof _p)}function vp(t,e,n){if(!uI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const s=Nu(n);throw s==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+s)}}function qd(t,e,n){if((e=He(e))instanceof Du)return e._internalPath;if(typeof e=="string")return Ep(t,e);throw Mc("Field path arguments must be of type string or ",t,!1,void 0,n)}const eD=new RegExp("[~\\*/\\[\\]]");function Ep(t,e,n){if(e.search(eD)>=0)throw Mc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Du(...e.split("."))._internalPath}catch{throw Mc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Mc(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new ie(q.INVALID_ARGUMENT,a+t+c)}function hI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Qt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new tD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Fu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class tD extends dI{data(){return super.data()}}function Fu(t,e){return typeof e=="string"?Ep(t,e):e instanceof Du?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ie(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class wp{}class Tp extends wp{}function Bh(t,e,...n){let s=[];e instanceof wp&&s.push(e),s=s.concat(n),function(r){const o=r.filter(c=>c instanceof Ip).length,a=r.filter(c=>c instanceof Uu).length;if(o>1||o>0&&a>0)throw new ie(q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)t=i._apply(t);return t}class Uu extends Tp{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Uu(e,n,s)}_apply(e){const n=this._parse(e);return pI(e._query,n),new Fs(e.firestore,e.converter,Dd(e._query,n))}_parse(e){const n=Lu(e.firestore);return function(r,o,a,c,u,h,d){let p;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new ie(q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Py(d,h);const _=[];for(const T of d)_.push(Sy(c,r,T));p={arrayValue:{values:_}}}else p=Sy(c,r,d)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Py(d,h),p=ZO(a,o,d,h==="in"||h==="not-in");return Et.create(u,h,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function $h(t,e,n){const s=e,i=Fu("where",t);return Uu._create(i,s,n)}class Ip extends wp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ip(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:$n.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,r){let o=i;const a=r.getFlattenedFilters();for(const c of a)pI(o,c),o=Dd(o,c)}(e._query,n),new Fs(e.firestore,e.converter,Dd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Cp extends Tp{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Cp(e,n)}_apply(e){const n=function(i,r,o){if(i.startAt!==null)throw new ie(q.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new ie(q.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Oa(r,o)}(e._query,this._field,this._direction);return new Fs(e.firestore,e.converter,function(i,r){const o=i.explicitOrderBy.concat([r]);return new ro(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function by(t,e="asc"){const n=e,s=Fu("orderBy",t);return Cp._create(s,n)}class Ap extends Tp{constructor(e,n,s){super(),this.type=e,this._limit=n,this._limitType=s}static _create(e,n,s){return new Ap(e,n,s)}_apply(e){return new Fs(e.firestore,e.converter,Pc(e._query,this._limit,this._limitType))}}function nD(t){return Ap._create("limit",t,"F")}function Sy(t,e,n){if(typeof(n=He(n))=="string"){if(n==="")throw new ie(q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!gT(e)&&n.indexOf("/")!==-1)throw new ie(q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(it.fromString(n));if(!fe.isDocumentKey(s))throw new ie(q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return zm(t,new fe(s))}if(n instanceof Qt)return zm(t,n._key);throw new ie(q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Nu(n)}.`)}function Py(t,e){if(!Array.isArray(t)||t.length===0)throw new ie(q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function pI(t,e){const n=function(i,r){for(const o of i)for(const a of o.getFlattenedFilters())if(r.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new ie(q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ie(q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class sD{convertValue(e,n="none"){switch(Qi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return gt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(zi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ve()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return tr(e,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertVectorValue(e){var n,s,i;const r=(i=(s=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||s===void 0?void 0:s.values)===null||i===void 0?void 0:i.map(o=>gt(o.doubleValue));return new _p(r)}convertGeoPoint(e){return new gp(gt(e.latitude),gt(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Hf(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ka(e));default:return null}}convertTimestamp(e){const n=ui(e);return new It(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=it.fromString(e);Ke(FT(s));const i=new Na(s.get(1),s.get(3)),r=new fe(s.popFirst(5));return i.isEqual(n)||Ns(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _I extends dI{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new rc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Fu("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class rc extends _I{data(e={}){return super.data(e)}}class mI{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Go(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new rc(this._firestore,this._userDataWriter,s.key,s,new Go(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ie(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new rc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Go(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const c=new rc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Go(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:iD(a.type),doc:c,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function iD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(t){t=un(t,Qt);const e=un(t.firestore,Os);return $O(Ou(e),t._key).then(n=>yI(e,t,n))}class Rp extends sD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Qt(this.firestore,null,n)}}function ky(t){t=un(t,Fs);const e=un(t.firestore,Os),n=Ou(e),s=new Rp(e);return fI(t._query),jO(n,t._query).then(i=>new mI(e,s,t,i))}function Ko(t,e,n){t=un(t,Qt);const s=un(t.firestore,Os),i=gI(t.converter,e,n);return Bu(s,[lI(Lu(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Rn.none())])}function Ny(t,e,n,...s){t=un(t,Qt);const i=un(t.firestore,Os),r=Lu(i);let o;return o=typeof(e=He(e))=="string"||e instanceof Du?JO(r,"updateDoc",t._key,e,n,s):XO(r,"updateDoc",t._key,e),Bu(i,[o.toMutation(t._key,Rn.exists(!0))])}function xU(t){return Bu(un(t.firestore,Os),[new Yf(t._key,Rn.none())])}function Pr(t,e){const n=un(t.firestore,Os),s=vs(t),i=gI(t.converter,e);return Bu(n,[lI(Lu(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,Rn.exists(!1))]).then(()=>s)}function vr(t,...e){var n,s,i;t=He(t);let r={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Ry(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges,source:r.source};if(Ry(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(s=d.error)===null||s===void 0?void 0:s.bind(d),e[o+2]=(i=d.complete)===null||i===void 0?void 0:i.bind(d)}let c,u,h;if(t instanceof Qt)u=un(t.firestore,Os),h=Tu(t._key.path),c={next:d=>{e[o]&&e[o](yI(u,t,d))},error:e[o+1],complete:e[o+2]};else{const d=un(t,Fs);u=un(d.firestore,Os),h=d._query;const p=new Rp(u);c={next:_=>{e[o]&&e[o](new mI(u,p,d,_))},error:e[o+1],complete:e[o+2]},fI(t._query)}return function(p,_,T,S){const P=new pp(S),V=new dp(_,P,T);return p.asyncQueue.enqueueAndForget(async()=>cp(await Dc(p),V)),()=>{P.Za(),p.asyncQueue.enqueueAndForget(async()=>up(await Dc(p),V))}}(Ou(u),h,a,c)}function Bu(t,e){return function(s,i){const r=new Is;return s.asyncQueue.enqueueAndForget(async()=>kO(await BO(s),i,r)),r.promise}(Ou(t),e)}function yI(t,e,n){const s=n.docs.get(e._key),i=new Rp(t);return new _I(t,i,e._key,s,new Go(n.hasPendingWrites,n.fromCache),e.converter)}function cs(){return new mp("serverTimestamp")}function OU(...t){return new yp("arrayUnion",t)}(function(e,n=!0){(function(i){io=i})(gi),li(new Ss("firestore",(s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),a=new Os(new c1(s.getProvider("auth-internal")),new f1(s.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ie(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Na(u.options.projectId,h)}(o,i),o);return r=Object.assign({useFetchStreams:n},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),An(qm,"4.7.3",e),An(qm,"4.7.3","esm2017")})();var xy={};const Oy="@firebase/database",Dy="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vI="";function rD(t){vI=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),St(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Aa(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ts(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new oD(e)}}catch{}return new aD},Fi=EI("localStorage"),lD=EI("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=new _u("@firebase/database"),cD=function(){let t=1;return function(){return t++}}(),wI=function(t){const e=VS(t),n=new OS;n.update(e);const s=n.digest();return Rf.encodeByteArray(s)},cl=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=cl.apply(null,s):typeof s=="object"?e+=St(s):e+=s,e+=" "}return e};let ca=null,My=!0;const uD=function(t,e){X(!0,"Can't turn on custom loggers persistently."),kr.logLevel=Ne.VERBOSE,ca=kr.log.bind(kr)},Mt=function(...t){if(My===!0&&(My=!1,ca===null&&lD.get("logging_enabled")===!0&&uD()),ca){const e=cl.apply(null,t);ca(e)}},ul=function(t){return function(...e){Mt(t,...e)}},Wd=function(...t){const e="FIREBASE INTERNAL ERROR: "+cl(...t);kr.error(e)},Ds=function(...t){const e=`FIREBASE FATAL ERROR: ${cl(...t)}`;throw kr.error(e),new Error(e)},hn=function(...t){const e="FIREBASE WARNING: "+cl(...t);kr.warn(e)},hD=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&hn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},$u=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},dD=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Yr="[MIN_NAME]",Yi="[MAX_NAME]",sr=function(t,e){if(t===e)return 0;if(t===Yr||e===Yi)return-1;if(e===Yr||t===Yi)return 1;{const n=Ly(t),s=Ly(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},fD=function(t,e){return t===e?0:t<e?-1:1},xo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+St(e))},bp=function(t){if(typeof t!="object"||t===null)return St(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=St(e[s]),n+=":",n+=bp(t[e[s]]);return n+="}",n},TI=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Xt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const II=function(t){X(!$u(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const u=[];for(c=n;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(r%2?1:0),r=Math.floor(r/2);u.push(i?1:0),u.reverse();const h=u.join("");let d="";for(c=0;c<64;c+=8){let p=parseInt(h.substr(c,8),2).toString(16);p.length===1&&(p="0"+p),d=d+p}return d.toLowerCase()},pD=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},gD=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function _D(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const mD=new RegExp("^-?(0*)\\d{1,10}$"),yD=-2147483648,vD=2147483647,Ly=function(t){if(mD.test(t)){const e=Number(t);if(e>=yD&&e<=vD)return e}return null},co=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw hn("Exception was thrown by user callback.",n),e},Math.floor(0))}},ED=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ua=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wD{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){hn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TD{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Mt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',hn(e)}}class oc{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}oc.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp="5",CI="v",AI="s",RI="r",bI="f",SI=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,PI="ls",kI="p",Hd="ac",NI="websocket",xI="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e,n,s,i,r=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Fi.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Fi.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function ID(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function DI(t,e,n){X(typeof e=="string","typeof type must == string"),X(typeof n=="object","typeof params must == object");let s;if(e===NI)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===xI)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);ID(t)&&(n.ns=t.namespace);const i=[];return Xt(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(){this.counters_={}}incrementCounter(e,n=1){ts(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return pS(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh={},qh={};function Pp(t){const e=t.toString();return jh[e]||(jh[e]=new CD),jh[e]}function AD(t,e){const n=t.toString();return qh[n]||(qh[n]=e()),qh[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&co(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy="start",bD="close",SD="pLPCommand",PD="pRTLPCB",MI="id",LI="pw",VI="ser",kD="cb",ND="seg",xD="ts",OD="d",DD="dframe",FI=1870,UI=30,MD=FI-UI,LD=25e3,VD=3e4;class Er{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ul(e),this.stats_=Pp(n),this.urlFn=c=>(this.appCheckToken&&(c[Hd]=this.appCheckToken),DI(n,xI,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new RD(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(VD)),dD(()=>{if(this.isClosed_)return;this.scriptTagHolder=new kp((...r)=>{const[o,a,c,u,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Vy)this.id=a,this.password=c;else if(o===bD)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Vy]="t",s[VI]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[kD]=this.scriptTagHolder.uniqueCallbackIdentifier),s[CI]=Sp,this.transportSessionId&&(s[AI]=this.transportSessionId),this.lastSessionId&&(s[PI]=this.lastSessionId),this.applicationId&&(s[kI]=this.applicationId),this.appCheckToken&&(s[Hd]=this.appCheckToken),typeof location<"u"&&location.hostname&&SI.test(location.hostname)&&(s[RI]=bI);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Er.forceAllow_=!0}static forceDisallow(){Er.forceDisallow_=!0}static isAvailable(){return Er.forceAllow_?!0:!Er.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!pD()&&!gD()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=St(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=aw(n),i=TI(s,MD);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[DD]="t",s[MI]=e,s[LI]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=St(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class kp{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=cD(),window[SD+this.uniqueCallbackIdentifier]=e,window[PD+this.uniqueCallbackIdentifier]=n,this.myIFrame=kp.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Mt("frame writing exception"),a.stack&&Mt(a.stack),Mt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Mt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[MI]=this.myID,e[LI]=this.myPW,e[VI]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+UI+s.length<=FI;){const o=this.pendingSegs.shift();s=s+"&"+ND+i+"="+o.seg+"&"+xD+i+"="+o.ts+"&"+OD+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(LD)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Mt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FD=16384,UD=45e3;let Lc=null;typeof MozWebSocket<"u"?Lc=MozWebSocket:typeof WebSocket<"u"&&(Lc=WebSocket);class Nn{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ul(this.connId),this.stats_=Pp(n),this.connURL=Nn.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[CI]=Sp,typeof location<"u"&&location.hostname&&SI.test(location.hostname)&&(o[RI]=bI),n&&(o[AI]=n),s&&(o[PI]=s),i&&(o[Hd]=i),r&&(o[kI]=r),DI(e,NI,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Fi.set("previous_websocket_failure",!0);try{let s;CS(),this.mySock=new Lc(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Nn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Lc!==null&&!Nn.forceDisallow_}static previouslyFailed(){return Fi.isInMemoryStorage||Fi.get("previous_websocket_failure")===!0}markConnectionHealthy(){Fi.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Aa(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(X(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=St(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=TI(n,FD);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(UD))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Nn.responsesRequiredToBeHealthy=2;Nn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Er,Nn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Nn&&Nn.isAvailable();let s=n&&!Nn.previouslyFailed();if(e.webSocketOnly&&(n||hn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Nn];else{const i=this.transports_=[];for(const r of Va.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Va.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Va.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BD=6e4,$D=5e3,jD=10*1024,qD=100*1024,Wh="t",Fy="d",WD="s",Uy="r",HD="e",By="o",$y="a",jy="n",qy="p",GD="h";class KD{constructor(e,n,s,i,r,o,a,c,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ul("c:"+this.id+":"),this.transportManager_=new Va(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ua(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>qD?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>jD?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Wh in e){const n=e[Wh];n===$y?this.upgradeIfSecondaryHealthy_():n===Uy?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===By&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=xo("t",e),s=xo("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:qy,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:$y,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:jy,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=xo("t",e),s=xo("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=xo(Wh,e);if(Fy in e){const s=e[Fy];if(n===GD){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===jy){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===WD?this.onConnectionShutdown_(s):n===Uy?this.onReset_(s):n===HD?Wd("Server Error: "+s):n===By?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Wd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Sp!==s&&hn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ua(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(BD))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ua(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor($D))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:qy,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Fi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e){this.allowedEvents_=e,this.listeners_={},X(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){X(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc extends $I{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Pf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Vc}getInitialEvent(e){return X(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy=32,Hy=768;class ze{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function $e(){return new ze("")}function Se(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function di(t){return t.pieces_.length-t.pieceNum_}function Xe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ze(t.pieces_,e)}function Np(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function zD(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Fa(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function jI(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ze(e,0)}function _t(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ze)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ze(n,0)}function Pe(t){return t.pieceNum_>=t.pieces_.length}function ln(t,e){const n=Se(t),s=Se(e);if(n===null)return e;if(n===s)return ln(Xe(t),Xe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function QD(t,e){const n=Fa(t,0),s=Fa(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=sr(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function xp(t,e){if(di(t)!==di(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function In(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(di(t)>di(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class YD{constructor(e,n){this.errorPrefix_=n,this.parts_=Fa(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=gu(this.parts_[s]);qI(this)}}function XD(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=gu(e),qI(t)}function JD(t){const e=t.parts_.pop();t.byteLength_-=gu(e),t.parts_.length>0&&(t.byteLength_-=1)}function qI(t){if(t.byteLength_>Hy)throw new Error(t.errorPrefix_+"has a key path longer than "+Hy+" bytes ("+t.byteLength_+").");if(t.parts_.length>Wy)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Wy+") or object contains a cycle "+Ni(t))}function Ni(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op extends $I{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Op}getInitialEvent(e){return X(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo=1e3,ZD=60*5*1e3,Gy=30*1e3,eM=1.3,tM=3e4,nM="server_kill",Ky=3;class Cs extends BI{constructor(e,n,s,i,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Cs.nextPersistentConnectionId_++,this.log_=ul("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Oo,this.maxReconnectDelay_=ZD,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Op.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Vc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(St(r)),X(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new ps,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),X(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),X(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,u=a.s;Cs.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ts(e,"w")){const s=Ur(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();hn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||xS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Gy)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=NS(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),X(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+St(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Wd("Unrecognized action received from server: "+St(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){X(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Oo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Oo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>tM&&(this.reconnectDelay_=Oo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*eM)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Cs.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},u=function(d){X(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:c,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,p]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Mt("getToken() completed but was canceled"):(Mt("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=p&&p.token,a=new KD(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{hn(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(nM)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&hn(d),c())}}}interrupt(e){Mt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Mt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],vc(this.interruptReasons_)&&(this.reconnectDelay_=Oo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>bp(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ze(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Mt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ky&&(this.reconnectDelay_=Gy,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Mt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ky&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+vI.replace(/\./g,"-")]=1,Pf()?e["framework.cordova"]=1:dw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Vc.getInstance().currentlyOnline();return vc(this.interruptReasons_)&&e}}Cs.nextPersistentConnectionId_=0;Cs.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ke(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ke(Yr,e),i=new ke(Yr,n);return this.compare(s,i)!==0}minPost(){return ke.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bl;class WI extends ju{static get __EMPTY_NODE(){return Bl}static set __EMPTY_NODE(e){Bl=e}compare(e,n){return sr(e.name,n.name)}isDefinedOn(e){throw to("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ke.MIN}maxPost(){return new ke(Yi,Bl)}makePost(e,n){return X(typeof e=="string","KeyIndex indexValue must always be a string."),new ke(e,Bl)}toString(){return".key"}}const Nr=new WI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class bt{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??bt.RED,this.left=i??cn.EMPTY_NODE,this.right=r??cn.EMPTY_NODE}copy(e,n,s,i,r){return new bt(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return cn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return cn.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}bt.RED=!0;bt.BLACK=!1;class sM{copy(e,n,s,i,r){return this}insert(e,n,s){return new bt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class cn{constructor(e,n=cn.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new cn(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,bt.BLACK,null,null))}remove(e){return new cn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,bt.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new $l(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new $l(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new $l(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new $l(this.root_,null,this.comparator_,!0,e)}}cn.EMPTY_NODE=new sM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iM(t,e){return sr(t.name,e.name)}function Dp(t,e){return sr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gd;function rM(t){Gd=t}const HI=function(t){return typeof t=="number"?"number:"+II(t):"string:"+t},GI=function(t){if(t.isLeafNode()){const e=t.val();X(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ts(e,".sv"),"Priority must be a string or number.")}else X(t===Gd||t.isEmpty(),"priority of unexpected type.");X(t===Gd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zy;class At{constructor(e,n=At.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,X(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),GI(this.priorityNode_)}static set __childrenNodeConstructor(e){zy=e}static get __childrenNodeConstructor(){return zy}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new At(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:At.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Pe(e)?this:Se(e)===".priority"?this.priorityNode_:At.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:At.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=Se(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(X(s!==".priority"||di(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,At.__childrenNodeConstructor.EMPTY_NODE.updateChild(Xe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+HI(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=II(this.value_):e+=this.value_,this.lazyHash_=wI(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===At.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof At.__childrenNodeConstructor?-1:(X(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=At.VALUE_TYPE_ORDER.indexOf(n),r=At.VALUE_TYPE_ORDER.indexOf(s);return X(i>=0,"Unknown leaf type: "+n),X(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}At.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let KI,zI;function oM(t){KI=t}function aM(t){zI=t}class lM extends ju{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?sr(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ke.MIN}maxPost(){return new ke(Yi,new At("[PRIORITY-POST]",zI))}makePost(e,n){const s=KI(e);return new ke(n,new At("[PRIORITY-POST]",s))}toString(){return".priority"}}const at=new lM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cM=Math.log(2);class uM{constructor(e){const n=r=>parseInt(Math.log(r)/cM,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Fc=function(t,e,n,s){t.sort(e);const i=function(c,u){const h=u-c;let d,p;if(h===0)return null;if(h===1)return d=t[c],p=n?n(d):d,new bt(p,d.node,bt.BLACK,null,null);{const _=parseInt(h/2,10)+c,T=i(c,_),S=i(_+1,u);return d=t[_],p=n?n(d):d,new bt(p,d.node,bt.BLACK,T,S)}},r=function(c){let u=null,h=null,d=t.length;const p=function(T,S){const P=d-T,V=d;d-=T;const O=i(P+1,V),D=t[P],x=n?n(D):D;_(new bt(x,D.node,S,null,O))},_=function(T){u?(u.left=T,u=T):(h=T,u=T)};for(let T=0;T<c.count;++T){const S=c.nextBitIsOne(),P=Math.pow(2,c.count-(T+1));S?p(P,bt.BLACK):(p(P,bt.BLACK),p(P,bt.RED))}return h},o=new uM(t.length),a=r(o);return new cn(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hh;const fr={};class Es{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return X(fr&&at,"ChildrenNode.ts has not been loaded"),Hh=Hh||new Es({".priority":fr},{".priority":at}),Hh}get(e){const n=Ur(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof cn?n:null}hasIndex(e){return ts(this.indexSet_,e.toString())}addIndex(e,n){X(e!==Nr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(ke.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Fc(s,e.getCompare()):a=fr;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const h=Object.assign({},this.indexes_);return h[c]=a,new Es(h,u)}addToIndexes(e,n){const s=Ec(this.indexes_,(i,r)=>{const o=Ur(this.indexSet_,r);if(X(o,"Missing index implementation for "+r),i===fr)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(ke.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&a.push(u),u=c.getNext();return a.push(e),Fc(a,o.getCompare())}else return fr;else{const a=n.get(e.name);let c=i;return a&&(c=c.remove(new ke(e.name,a))),c.insert(e,e.node)}});return new Es(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ec(this.indexes_,i=>{if(i===fr)return i;{const r=n.get(e.name);return r?i.remove(new ke(e.name,r)):i}});return new Es(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Do;class ye{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&GI(this.priorityNode_),this.children_.isEmpty()&&X(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Do||(Do=new ye(new cn(Dp),null,Es.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Do}updatePriority(e){return this.children_.isEmpty()?this:new ye(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Do:n}}getChild(e){const n=Se(e);return n===null?this:this.getImmediateChild(n).getChild(Xe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(X(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ke(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Do:this.priorityNode_;return new ye(i,o,r)}}updateChild(e,n){const s=Se(e);if(s===null)return n;{X(Se(e)!==".priority"||di(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Xe(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(at,(o,a)=>{n[o]=a.val(e),s++,r&&ye.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+HI(this.getPriority().val())+":"),this.forEachChild(at,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":wI(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ke(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ke(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ke(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ke.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ke.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===hl?-1:0}withIndex(e){if(e===Nr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ye(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Nr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(at),i=n.getIterator(at);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Nr?null:this.indexMap_.get(e.toString())}}ye.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class hM extends ye{constructor(){super(new cn(Dp),ye.EMPTY_NODE,Es.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ye.EMPTY_NODE}isEmpty(){return!1}}const hl=new hM;Object.defineProperties(ke,{MIN:{value:new ke(Yr,ye.EMPTY_NODE)},MAX:{value:new ke(Yi,hl)}});WI.__EMPTY_NODE=ye.EMPTY_NODE;At.__childrenNodeConstructor=ye;rM(hl);aM(hl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dM=!0;function vt(t,e=null){if(t===null)return ye.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),X(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new At(n,vt(e))}if(!(t instanceof Array)&&dM){const n=[];let s=!1;if(Xt(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=vt(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new ke(o,c)))}}),n.length===0)return ye.EMPTY_NODE;const r=Fc(n,iM,o=>o.name,Dp);if(s){const o=Fc(n,at.getCompare());return new ye(r,vt(e),new Es({".priority":o},{".priority":at}))}else return new ye(r,vt(e),Es.Default)}else{let n=ye.EMPTY_NODE;return Xt(t,(s,i)=>{if(ts(t,s)&&s.substring(0,1)!=="."){const r=vt(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(vt(e))}}oM(vt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fM extends ju{constructor(e){super(),this.indexPath_=e,X(!Pe(e)&&Se(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?sr(e.name,n.name):r}makePost(e,n){const s=vt(e),i=ye.EMPTY_NODE.updateChild(this.indexPath_,s);return new ke(n,i)}maxPost(){const e=ye.EMPTY_NODE.updateChild(this.indexPath_,hl);return new ke(Yi,e)}toString(){return Fa(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pM extends ju{compare(e,n){const s=e.node.compareTo(n.node);return s===0?sr(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ke.MIN}maxPost(){return ke.MAX}makePost(e,n){const s=vt(e);return new ke(n,s)}toString(){return".value"}}const gM=new pM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QI(t){return{type:"value",snapshotNode:t}}function Xr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ua(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ba(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function _M(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){X(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Ua(n,a)):X(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Xr(n,s)):o.trackChildChange(Ba(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(at,(i,r)=>{n.hasChild(i)||s.trackChildChange(Ua(i,r))}),n.isLeafNode()||n.forEachChild(at,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Ba(i,r,o))}else s.trackChildChange(Xr(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?ye.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e){this.indexedFilter_=new Mp(e.getIndex()),this.index_=e.getIndex(),this.startPost_=$a.getStartPost_(e),this.endPost_=$a.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new ke(n,s))||(s=ye.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=ye.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(ye.EMPTY_NODE);const r=this;return n.forEachChild(at,(o,a)=>{r.matches(new ke(o,a))||(i=i.updateImmediateChild(o,ye.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mM{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new $a(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new ke(n,s))||(s=ye.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=ye.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=ye.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(ye.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,ye.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(p,_)=>d(_,p)}else o=this.index_.getCompare();const a=e;X(a.numChildren()===this.limit_,"");const c=new ke(n,s),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(c);if(a.hasChild(n)){const d=a.getImmediateChild(n);let p=i.getChildAfterChild(this.index_,u,this.reverse_);for(;p!=null&&(p.name===n||a.hasChild(p.name));)p=i.getChildAfterChild(this.index_,p,this.reverse_);const _=p==null?1:o(p,c);if(h&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(Ba(n,s,d)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Ua(n,d));const S=a.updateImmediateChild(n,ye.EMPTY_NODE);return p!=null&&this.rangedFilter_.matches(p)?(r!=null&&r.trackChildChange(Xr(p.name,p.node)),S.updateImmediateChild(p.name,p.node)):S}}else return s.isEmpty()?e:h&&o(u,c)>=0?(r!=null&&(r.trackChildChange(Ua(u.name,u.node)),r.trackChildChange(Xr(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(u.name,ye.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=at}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return X(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return X(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Yr}hasEnd(){return this.endSet_}getIndexEndValue(){return X(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return X(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Yi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return X(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===at}copy(){const e=new Lp;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function yM(t){return t.loadsAllData()?new Mp(t.getIndex()):t.hasLimit()?new mM(t):new $a(t)}function Qy(t){const e={};if(t.isDefault())return e;let n;if(t.index_===at?n="$priority":t.index_===gM?n="$value":t.index_===Nr?n="$key":(X(t.index_ instanceof fM,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=St(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=St(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+St(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=St(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+St(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Yy(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==at&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc extends BI{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=ul("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(X(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Uc.getListenId_(e,s),a={};this.listens_[o]=a;const c=Qy(e._queryParams);this.restRequest_(r+".json",c,(u,h)=>{let d=h;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(r,d,!1,s),Ur(this.listens_,o)===a){let p;u?u===401?p="permission_denied":p="rest_error:"+u:p="ok",i(p,null)}})}unlisten(e,n){const s=Uc.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Qy(e._queryParams),s=e._path.toString(),i=new ps;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+no(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Aa(a.responseText)}catch{hn("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&hn("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vM{constructor(){this.rootNode_=ye.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(){return{value:null,children:new Map}}function uo(t,e,n){if(Pe(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=Se(e);t.children.has(s)||t.children.set(s,Bc());const i=t.children.get(s);e=Xe(e),uo(i,e,n)}}function Kd(t,e){if(Pe(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(at,(s,i)=>{uo(t,new ze(s),i)}),Kd(t,e)}}else if(t.children.size>0){const n=Se(e);return e=Xe(e),t.children.has(n)&&Kd(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function zd(t,e,n){t.value!==null?n(e,t.value):EM(t,(s,i)=>{const r=new ze(e.toString()+"/"+s);zd(i,r,n)})}function EM(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wM{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Xt(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xy=10*1e3,TM=30*1e3,IM=5*60*1e3;class CM{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new wM(e);const s=Xy+(TM-Xy)*Math.random();ua(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Xt(e,(i,r)=>{r>0&&ts(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),ua(this.reportStats_.bind(this),Math.floor(Math.random()*2*IM))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var On;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(On||(On={}));function YI(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Vp(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Fp(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=On.ACK_USER_WRITE,this.source=YI()}operationForChild(e){if(Pe(this.path)){if(this.affectedTree.value!=null)return X(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ze(e));return new $c($e(),n,this.revert)}}else return X(Se(this.path)===e,"operationForChild called for unrelated child."),new $c(Xe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,n){this.source=e,this.path=n,this.type=On.LISTEN_COMPLETE}operationForChild(e){return Pe(this.path)?new ja(this.source,$e()):new ja(this.source,Xe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=On.OVERWRITE}operationForChild(e){return Pe(this.path)?new Xi(this.source,$e(),this.snap.getImmediateChild(e)):new Xi(this.source,Xe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=On.MERGE}operationForChild(e){if(Pe(this.path)){const n=this.children.subtree(new ze(e));return n.isEmpty()?null:n.value?new Xi(this.source,$e(),n.value):new qa(this.source,$e(),n)}else return X(Se(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new qa(this.source,Xe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Pe(e))return this.isFullyInitialized()&&!this.filtered_;const n=Se(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AM{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function RM(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(_M(o.childName,o.snapshotNode))}),Mo(t,i,"child_removed",e,s,n),Mo(t,i,"child_added",e,s,n),Mo(t,i,"child_moved",r,s,n),Mo(t,i,"child_changed",e,s,n),Mo(t,i,"value",e,s,n),i}function Mo(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,c)=>SM(t,a,c)),o.forEach(a=>{const c=bM(t,a,r);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(c,t.query_))})})}function bM(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function SM(t,e,n){if(e.childName==null||n.childName==null)throw to("Should only compare child_ events.");const s=new ke(e.childName,e.snapshotNode),i=new ke(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(t,e){return{eventCache:t,serverCache:e}}function ha(t,e,n,s){return qu(new Ji(e,n,s),t.serverCache)}function XI(t,e,n,s){return qu(t.eventCache,new Ji(e,n,s))}function Qd(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Zi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gh;const PM=()=>(Gh||(Gh=new cn(fD)),Gh);class nt{constructor(e,n=PM()){this.value=e,this.children=n}static fromObject(e){let n=new nt(null);return Xt(e,(s,i)=>{n=n.set(new ze(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:$e(),value:this.value};if(Pe(e))return null;{const s=Se(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Xe(e),n);return r!=null?{path:_t(new ze(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Pe(e))return this;{const n=Se(e),s=this.children.get(n);return s!==null?s.subtree(Xe(e)):new nt(null)}}set(e,n){if(Pe(e))return new nt(n,this.children);{const s=Se(e),r=(this.children.get(s)||new nt(null)).set(Xe(e),n),o=this.children.insert(s,r);return new nt(this.value,o)}}remove(e){if(Pe(e))return this.children.isEmpty()?new nt(null):new nt(null,this.children);{const n=Se(e),s=this.children.get(n);if(s){const i=s.remove(Xe(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new nt(null):new nt(this.value,r)}else return this}}get(e){if(Pe(e))return this.value;{const n=Se(e),s=this.children.get(n);return s?s.get(Xe(e)):null}}setTree(e,n){if(Pe(e))return n;{const s=Se(e),r=(this.children.get(s)||new nt(null)).setTree(Xe(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new nt(this.value,o)}}fold(e){return this.fold_($e(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(_t(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,$e(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(Pe(e))return null;{const r=Se(e),o=this.children.get(r);return o?o.findOnPath_(Xe(e),_t(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,$e(),n)}foreachOnPath_(e,n,s){if(Pe(e))return this;{this.value&&s(n,this.value);const i=Se(e),r=this.children.get(i);return r?r.foreachOnPath_(Xe(e),_t(n,i),s):new nt(null)}}foreach(e){this.foreach_($e(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(_t(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this.writeTree_=e}static empty(){return new Vn(new nt(null))}}function da(t,e,n){if(Pe(e))return new Vn(new nt(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=ln(i,e);return r=r.updateChild(o,n),new Vn(t.writeTree_.set(i,r))}else{const i=new nt(n),r=t.writeTree_.setTree(e,i);return new Vn(r)}}}function Jy(t,e,n){let s=t;return Xt(n,(i,r)=>{s=da(s,_t(e,i),r)}),s}function Zy(t,e){if(Pe(e))return Vn.empty();{const n=t.writeTree_.setTree(e,new nt(null));return new Vn(n)}}function Yd(t,e){return ir(t,e)!=null}function ir(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ln(n.path,e)):null}function ev(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(at,(s,i)=>{e.push(new ke(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ke(s,i.value))}),e}function ii(t,e){if(Pe(e))return t;{const n=ir(t,e);return n!=null?new Vn(new nt(n)):new Vn(t.writeTree_.subtree(e))}}function Xd(t){return t.writeTree_.isEmpty()}function Jr(t,e){return JI($e(),t.writeTree_,e)}function JI(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(X(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=JI(_t(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(_t(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(t,e){return nC(e,t)}function kM(t,e,n,s,i){X(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=da(t.visibleWrites,e,n)),t.lastWriteId=s}function NM(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function xM(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);X(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&OM(a,s.path)?i=!1:In(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return DM(t),!0;if(s.snap)t.visibleWrites=Zy(t.visibleWrites,s.path);else{const a=s.children;Xt(a,c=>{t.visibleWrites=Zy(t.visibleWrites,_t(s.path,c))})}return!0}else return!1}function OM(t,e){if(t.snap)return In(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&In(_t(t.path,n),e))return!0;return!1}function DM(t){t.visibleWrites=ZI(t.allWrites,MM,$e()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function MM(t){return t.visible}function ZI(t,e,n){let s=Vn.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)In(n,o)?(a=ln(n,o),s=da(s,a,r.snap)):In(o,n)&&(a=ln(o,n),s=da(s,$e(),r.snap.getChild(a)));else if(r.children){if(In(n,o))a=ln(n,o),s=Jy(s,a,r.children);else if(In(o,n))if(a=ln(o,n),Pe(a))s=Jy(s,$e(),r.children);else{const c=Ur(r.children,Se(a));if(c){const u=c.getChild(Xe(a));s=da(s,$e(),u)}}}else throw to("WriteRecord should have .snap or .children")}}return s}function eC(t,e,n,s,i){if(!s&&!i){const r=ir(t.visibleWrites,e);if(r!=null)return r;{const o=ii(t.visibleWrites,e);if(Xd(o))return n;if(n==null&&!Yd(o,$e()))return null;{const a=n||ye.EMPTY_NODE;return Jr(o,a)}}}else{const r=ii(t.visibleWrites,e);if(!i&&Xd(r))return n;if(!i&&n==null&&!Yd(r,$e()))return null;{const o=function(u){return(u.visible||i)&&(!s||!~s.indexOf(u.writeId))&&(In(u.path,e)||In(e,u.path))},a=ZI(t.allWrites,o,e),c=n||ye.EMPTY_NODE;return Jr(a,c)}}}function LM(t,e,n){let s=ye.EMPTY_NODE;const i=ir(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(at,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=ii(t.visibleWrites,e);return n.forEachChild(at,(o,a)=>{const c=Jr(ii(r,new ze(o)),a);s=s.updateImmediateChild(o,c)}),ev(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=ii(t.visibleWrites,e);return ev(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function VM(t,e,n,s,i){X(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=_t(e,n);if(Yd(t.visibleWrites,r))return null;{const o=ii(t.visibleWrites,r);return Xd(o)?i.getChild(n):Jr(o,i.getChild(n))}}function FM(t,e,n,s){const i=_t(e,n),r=ir(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=ii(t.visibleWrites,i);return Jr(o,s.getNode().getImmediateChild(n))}else return null}function UM(t,e){return ir(t.visibleWrites,e)}function BM(t,e,n,s,i,r,o){let a;const c=ii(t.visibleWrites,e),u=ir(c,$e());if(u!=null)a=u;else if(n!=null)a=Jr(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],d=o.getCompare(),p=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=p.getNext();for(;_&&h.length<i;)d(_,s)!==0&&h.push(_),_=p.getNext();return h}else return[]}function $M(){return{visibleWrites:Vn.empty(),allWrites:[],lastWriteId:-1}}function jc(t,e,n,s){return eC(t.writeTree,t.treePath,e,n,s)}function Bp(t,e){return LM(t.writeTree,t.treePath,e)}function tv(t,e,n,s){return VM(t.writeTree,t.treePath,e,n,s)}function qc(t,e){return UM(t.writeTree,_t(t.treePath,e))}function jM(t,e,n,s,i,r){return BM(t.writeTree,t.treePath,e,n,s,i,r)}function $p(t,e,n){return FM(t.writeTree,t.treePath,e,n)}function tC(t,e){return nC(_t(t.treePath,e),t.writeTree)}function nC(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qM{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;X(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),X(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Ba(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Ua(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Xr(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Ba(s,e.snapshotNode,i.oldSnap));else throw to("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WM{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const sC=new WM;class jp{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Ji(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return $p(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Zi(this.viewCache_),r=jM(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HM(t){return{filter:t}}function GM(t,e){X(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),X(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function KM(t,e,n,s,i){const r=new qM;let o,a;if(n.type===On.OVERWRITE){const u=n;u.source.fromUser?o=Jd(t,e,u.path,u.snap,s,i,r):(X(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!Pe(u.path),o=Wc(t,e,u.path,u.snap,s,i,a,r))}else if(n.type===On.MERGE){const u=n;u.source.fromUser?o=QM(t,e,u.path,u.children,s,i,r):(X(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Zd(t,e,u.path,u.children,s,i,a,r))}else if(n.type===On.ACK_USER_WRITE){const u=n;u.revert?o=JM(t,e,u.path,s,i,r):o=YM(t,e,u.path,u.affectedTree,s,i,r)}else if(n.type===On.LISTEN_COMPLETE)o=XM(t,e,n.path,s,r);else throw to("Unknown operation type: "+n.type);const c=r.getChanges();return zM(e,o,c),{viewCache:o,changes:c}}function zM(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Qd(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(QI(Qd(e)))}}function iC(t,e,n,s,i,r){const o=e.eventCache;if(qc(s,n)!=null)return e;{let a,c;if(Pe(n))if(X(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Zi(e),h=u instanceof ye?u:ye.EMPTY_NODE,d=Bp(s,h);a=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const u=jc(s,Zi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const u=Se(n);if(u===".priority"){X(di(n)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const d=tv(s,n,h,c);d!=null?a=t.filter.updatePriority(h,d):a=o.getNode()}else{const h=Xe(n);let d;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const p=tv(s,n,o.getNode(),c);p!=null?d=o.getNode().getImmediateChild(u).updateChild(h,p):d=o.getNode().getImmediateChild(u)}else d=$p(s,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,h,i,r):a=o.getNode()}}return ha(e,a,o.isFullyInitialized()||Pe(n),t.filter.filtersNodes())}}function Wc(t,e,n,s,i,r,o,a){const c=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(Pe(n))u=h.updateFullNode(c.getNode(),s,null);else if(h.filtersNodes()&&!c.isFiltered()){const _=c.getNode().updateChild(n,s);u=h.updateFullNode(c.getNode(),_,null)}else{const _=Se(n);if(!c.isCompleteForPath(n)&&di(n)>1)return e;const T=Xe(n),P=c.getNode().getImmediateChild(_).updateChild(T,s);_===".priority"?u=h.updatePriority(c.getNode(),P):u=h.updateChild(c.getNode(),_,P,T,sC,null)}const d=XI(e,u,c.isFullyInitialized()||Pe(n),h.filtersNodes()),p=new jp(i,d,r);return iC(t,d,n,i,p,a)}function Jd(t,e,n,s,i,r,o){const a=e.eventCache;let c,u;const h=new jp(i,e,r);if(Pe(n))u=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=ha(e,u,!0,t.filter.filtersNodes());else{const d=Se(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),s),c=ha(e,u,a.isFullyInitialized(),a.isFiltered());else{const p=Xe(n),_=a.getNode().getImmediateChild(d);let T;if(Pe(p))T=s;else{const S=h.getCompleteChild(d);S!=null?Np(p)===".priority"&&S.getChild(jI(p)).isEmpty()?T=S:T=S.updateChild(p,s):T=ye.EMPTY_NODE}if(_.equals(T))c=e;else{const S=t.filter.updateChild(a.getNode(),d,T,p,h,o);c=ha(e,S,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function nv(t,e){return t.eventCache.isCompleteForChild(e)}function QM(t,e,n,s,i,r,o){let a=e;return s.foreach((c,u)=>{const h=_t(n,c);nv(e,Se(h))&&(a=Jd(t,a,h,u,i,r,o))}),s.foreach((c,u)=>{const h=_t(n,c);nv(e,Se(h))||(a=Jd(t,a,h,u,i,r,o))}),a}function sv(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Zd(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;Pe(n)?u=s:u=new nt(null).setTree(n,s);const h=e.serverCache.getNode();return u.children.inorderTraversal((d,p)=>{if(h.hasChild(d)){const _=e.serverCache.getNode().getImmediateChild(d),T=sv(t,_,p);c=Wc(t,c,new ze(d),T,i,r,o,a)}}),u.children.inorderTraversal((d,p)=>{const _=!e.serverCache.isCompleteForChild(d)&&p.value===null;if(!h.hasChild(d)&&!_){const T=e.serverCache.getNode().getImmediateChild(d),S=sv(t,T,p);c=Wc(t,c,new ze(d),S,i,r,o,a)}}),c}function YM(t,e,n,s,i,r,o){if(qc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(Pe(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Wc(t,e,n,c.getNode().getChild(n),i,r,a,o);if(Pe(n)){let u=new nt(null);return c.getNode().forEachChild(Nr,(h,d)=>{u=u.set(new ze(h),d)}),Zd(t,e,n,u,i,r,a,o)}else return e}else{let u=new nt(null);return s.foreach((h,d)=>{const p=_t(n,h);c.isCompleteForPath(p)&&(u=u.set(h,c.getNode().getChild(p)))}),Zd(t,e,n,u,i,r,a,o)}}function XM(t,e,n,s,i){const r=e.serverCache,o=XI(e,r.getNode(),r.isFullyInitialized()||Pe(n),r.isFiltered());return iC(t,o,n,s,sC,i)}function JM(t,e,n,s,i,r){let o;if(qc(s,n)!=null)return e;{const a=new jp(s,e,i),c=e.eventCache.getNode();let u;if(Pe(n)||Se(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=jc(s,Zi(e));else{const d=e.serverCache.getNode();X(d instanceof ye,"serverChildren would be complete if leaf node"),h=Bp(s,d)}h=h,u=t.filter.updateFullNode(c,h,r)}else{const h=Se(n);let d=$p(s,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=c.getImmediateChild(h)),d!=null?u=t.filter.updateChild(c,h,d,Xe(n),a,r):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(c,h,ye.EMPTY_NODE,Xe(n),a,r):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=jc(s,Zi(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,r)))}return o=e.serverCache.isFullyInitialized()||qc(s,$e())!=null,ha(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZM{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Mp(s.getIndex()),r=yM(s);this.processor_=HM(r);const o=n.serverCache,a=n.eventCache,c=i.updateFullNode(ye.EMPTY_NODE,o.getNode(),null),u=r.updateFullNode(ye.EMPTY_NODE,a.getNode(),null),h=new Ji(c,o.isFullyInitialized(),i.filtersNodes()),d=new Ji(u,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=qu(d,h),this.eventGenerator_=new AM(this.query_)}get query(){return this.query_}}function eL(t){return t.viewCache_.serverCache.getNode()}function tL(t,e){const n=Zi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Pe(e)&&!n.getImmediateChild(Se(e)).isEmpty())?n.getChild(e):null}function iv(t){return t.eventRegistrations_.length===0}function nL(t,e){t.eventRegistrations_.push(e)}function rv(t,e,n){const s=[];if(n){X(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function ov(t,e,n,s){e.type===On.MERGE&&e.source.queryId!==null&&(X(Zi(t.viewCache_),"We should always have a full cache before handling merges"),X(Qd(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=KM(t.processor_,i,e,n,s);return GM(t.processor_,r.viewCache),X(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,rC(t,r.changes,r.viewCache.eventCache.getNode(),null)}function sL(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(at,(r,o)=>{s.push(Xr(r,o))}),n.isFullyInitialized()&&s.push(QI(n.getNode())),rC(t,s,n.getNode(),e)}function rC(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return RM(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hc;class iL{constructor(){this.views=new Map}}function rL(t){X(!Hc,"__referenceConstructor has already been defined"),Hc=t}function oL(){return X(Hc,"Reference.ts has not been loaded"),Hc}function aL(t){return t.views.size===0}function qp(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return X(r!=null,"SyncTree gave us an op for an invalid query."),ov(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(ov(o,e,n,s));return r}}function lL(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=jc(n,i?s:null),c=!1;a?c=!0:s instanceof ye?(a=Bp(n,s),c=!1):(a=ye.EMPTY_NODE,c=!1);const u=qu(new Ji(a,c,!1),new Ji(s,i,!1));return new ZM(e,u)}return o}function cL(t,e,n,s,i,r){const o=lL(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),nL(o,n),sL(o,n)}function uL(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=fi(t);if(i==="default")for(const[c,u]of t.views.entries())o=o.concat(rv(u,n,s)),iv(u)&&(t.views.delete(c),u.query._queryParams.loadsAllData()||r.push(u.query));else{const c=t.views.get(i);c&&(o=o.concat(rv(c,n,s)),iv(c)&&(t.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return a&&!fi(t)&&r.push(new(oL())(e._repo,e._path)),{removed:r,events:o}}function oC(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function xr(t,e){let n=null;for(const s of t.views.values())n=n||tL(s,e);return n}function aC(t,e){if(e._queryParams.loadsAllData())return Wu(t);{const s=e._queryIdentifier;return t.views.get(s)}}function lC(t,e){return aC(t,e)!=null}function fi(t){return Wu(t)!=null}function Wu(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gc;function hL(t){X(!Gc,"__referenceConstructor has already been defined"),Gc=t}function dL(){return X(Gc,"Reference.ts has not been loaded"),Gc}let fL=1;class av{constructor(e){this.listenProvider_=e,this.syncPointTree_=new nt(null),this.pendingWriteTree_=$M(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function cC(t,e,n,s,i){return kM(t.pendingWriteTree_,e,n,s,i),i?dl(t,new Xi(YI(),e,n)):[]}function Ui(t,e,n=!1){const s=NM(t.pendingWriteTree_,e);if(xM(t.pendingWriteTree_,e)){let r=new nt(null);return s.snap!=null?r=r.set($e(),!0):Xt(s.children,o=>{r=r.set(new ze(o),!0)}),dl(t,new $c(s.path,r,n))}else return[]}function Hu(t,e,n){return dl(t,new Xi(Vp(),e,n))}function pL(t,e,n){const s=nt.fromObject(n);return dl(t,new qa(Vp(),e,s))}function gL(t,e){return dl(t,new ja(Vp(),e))}function _L(t,e,n){const s=Hp(t,n);if(s){const i=Gp(s),r=i.path,o=i.queryId,a=ln(r,e),c=new ja(Fp(o),a);return Kp(t,r,c)}else return[]}function ef(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||lC(o,e))){const c=uL(o,e,n,s);aL(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const u=c.removed;if(a=c.events,!i){const h=u.findIndex(p=>p._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(r,(p,_)=>fi(_));if(h&&!d){const p=t.syncPointTree_.subtree(r);if(!p.isEmpty()){const _=vL(p);for(let T=0;T<_.length;++T){const S=_[T],P=S.query,V=dC(t,S);t.listenProvider_.startListening(fa(P),Kc(t,P),V.hashFn,V.onComplete)}}}!d&&u.length>0&&!s&&(h?t.listenProvider_.stopListening(fa(e),null):u.forEach(p=>{const _=t.queryToTagMap.get(Gu(p));t.listenProvider_.stopListening(fa(p),_)}))}EL(t,u)}return a}function mL(t,e,n,s){const i=Hp(t,s);if(i!=null){const r=Gp(i),o=r.path,a=r.queryId,c=ln(o,e),u=new Xi(Fp(a),c,n);return Kp(t,o,u)}else return[]}function yL(t,e,n,s){const i=Hp(t,s);if(i){const r=Gp(i),o=r.path,a=r.queryId,c=ln(o,e),u=nt.fromObject(n),h=new qa(Fp(a),c,u);return Kp(t,o,h)}else return[]}function lv(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(p,_)=>{const T=ln(p,i);r=r||xr(_,T),o=o||fi(_)});let a=t.syncPointTree_.get(i);a?(o=o||fi(a),r=r||xr(a,$e())):(a=new iL,t.syncPointTree_=t.syncPointTree_.set(i,a));let c;r!=null?c=!0:(c=!1,r=ye.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,T)=>{const S=xr(T,$e());S&&(r=r.updateImmediateChild(_,S))}));const u=lC(a,e);if(!u&&!e._queryParams.loadsAllData()){const p=Gu(e);X(!t.queryToTagMap.has(p),"View does not exist, but we have a tag");const _=wL();t.queryToTagMap.set(p,_),t.tagToQueryMap.set(_,p)}const h=Up(t.pendingWriteTree_,i);let d=cL(a,e,n,h,r,c);if(!u&&!o&&!s){const p=aC(a,e);d=d.concat(TL(t,e,p))}return d}function Wp(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=ln(o,e),u=xr(a,c);if(u)return u});return eC(i,e,r,n,!0)}function dl(t,e){return uC(e,t.syncPointTree_,null,Up(t.pendingWriteTree_,$e()))}function uC(t,e,n,s){if(Pe(t.path))return hC(t,e,n,s);{const i=e.get($e());n==null&&i!=null&&(n=xr(i,$e()));let r=[];const o=Se(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const u=n?n.getImmediateChild(o):null,h=tC(s,o);r=r.concat(uC(a,c,u,h))}return i&&(r=r.concat(qp(i,t,s,n))),r}}function hC(t,e,n,s){const i=e.get($e());n==null&&i!=null&&(n=xr(i,$e()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,u=tC(s,o),h=t.operationForChild(o);h&&(r=r.concat(hC(h,a,c,u)))}),i&&(r=r.concat(qp(i,t,s,n))),r}function dC(t,e){const n=e.query,s=Kc(t,n);return{hashFn:()=>(eL(e)||ye.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?_L(t,n._path,s):gL(t,n._path);{const r=_D(i,n);return ef(t,n,null,r)}}}}function Kc(t,e){const n=Gu(e);return t.queryToTagMap.get(n)}function Gu(t){return t._path.toString()+"$"+t._queryIdentifier}function Hp(t,e){return t.tagToQueryMap.get(e)}function Gp(t){const e=t.indexOf("$");return X(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ze(t.substr(0,e))}}function Kp(t,e,n){const s=t.syncPointTree_.get(e);X(s,"Missing sync point for query tag that we're tracking");const i=Up(t.pendingWriteTree_,e);return qp(s,n,i,null)}function vL(t){return t.fold((e,n,s)=>{if(n&&fi(n))return[Wu(n)];{let i=[];return n&&(i=oC(n)),Xt(s,(r,o)=>{i=i.concat(o)}),i}})}function fa(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(dL())(t._repo,t._path):t}function EL(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Gu(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function wL(){return fL++}function TL(t,e,n){const s=e._path,i=Kc(t,e),r=dC(t,n),o=t.listenProvider_.startListening(fa(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)X(!fi(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((u,h,d)=>{if(!Pe(u)&&h&&fi(h))return[Wu(h).query];{let p=[];return h&&(p=p.concat(oC(h).map(_=>_.query))),Xt(d,(_,T)=>{p=p.concat(T)}),p}});for(let u=0;u<c.length;++u){const h=c[u];t.listenProvider_.stopListening(fa(h),Kc(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new zp(n)}node(){return this.node_}}class Qp{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=_t(this.path_,e);return new Qp(this.syncTree_,n)}node(){return Wp(this.syncTree_,this.path_)}}const IL=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},cv=function(t,e,n){if(!t||typeof t!="object")return t;if(X(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return CL(t[".sv"],e,n);if(typeof t[".sv"]=="object")return AL(t[".sv"],e);X(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},CL=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:X(!1,"Unexpected server value: "+t)}},AL=function(t,e,n){t.hasOwnProperty("increment")||X(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&X(!1,"Unexpected increment value: "+s);const i=e.node();if(X(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},RL=function(t,e,n,s){return Yp(e,new Qp(n,t),s)},fC=function(t,e,n){return Yp(t,new zp(e),n)};function Yp(t,e,n){const s=t.getPriority().val(),i=cv(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=cv(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new At(a,vt(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new At(i))),o.forEachChild(at,(a,c)=>{const u=Yp(c,e.getImmediateChild(a),n);u!==c&&(r=r.updateImmediateChild(a,u))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Jp(t,e){let n=e instanceof ze?e:new ze(e),s=t,i=Se(n);for(;i!==null;){const r=Ur(s.node.children,i)||{children:{},childCount:0};s=new Xp(i,s,r),n=Xe(n),i=Se(n)}return s}function ho(t){return t.node.value}function pC(t,e){t.node.value=e,tf(t)}function gC(t){return t.node.childCount>0}function bL(t){return ho(t)===void 0&&!gC(t)}function Ku(t,e){Xt(t.node.children,(n,s)=>{e(new Xp(n,t,s))})}function _C(t,e,n,s){n&&e(t),Ku(t,i=>{_C(i,e,!0)})}function SL(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function fl(t){return new ze(t.parent===null?t.name:fl(t.parent)+"/"+t.name)}function tf(t){t.parent!==null&&PL(t.parent,t.name,t)}function PL(t,e,n){const s=bL(n),i=ts(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,tf(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,tf(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kL=/[\[\].#$\/\u0000-\u001F\u007F]/,NL=/[\[\].#$\u0000-\u001F\u007F]/,Kh=10*1024*1024,Zp=function(t){return typeof t=="string"&&t.length!==0&&!kL.test(t)},mC=function(t){return typeof t=="string"&&t.length!==0&&!NL.test(t)},xL=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),mC(t)},yC=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!$u(t)||t&&typeof t=="object"&&ts(t,".sv")},nf=function(t,e,n,s){zu(Br(t,"value"),e,n)},zu=function(t,e,n){const s=n instanceof ze?new YD(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ni(s));if(typeof e=="function")throw new Error(t+"contains a function "+Ni(s)+" with contents = "+e.toString());if($u(e))throw new Error(t+"contains "+e.toString()+" "+Ni(s));if(typeof e=="string"&&e.length>Kh/3&&gu(e)>Kh)throw new Error(t+"contains a string greater than "+Kh+" utf8 bytes "+Ni(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Xt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Zp(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ni(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);XD(s,o),zu(t,a,s),JD(s)}),i&&r)throw new Error(t+' contains ".value" child '+Ni(s)+" in addition to actual children.")}},OL=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=Fa(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Zp(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(QD);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&In(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},DL=function(t,e,n,s){const i=Br(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Xt(e,(o,a)=>{const c=new ze(o);if(zu(i,a,_t(n,c)),Np(c)===".priority"&&!yC(a))throw new Error(i+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(c)}),OL(i,r)},ML=function(t,e,n){if($u(e))throw new Error(Br(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!yC(e))throw new Error(Br(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},vC=function(t,e,n,s){if(!mC(n))throw new Error(Br(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},LL=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),vC(t,e,n)},zo=function(t,e){if(Se(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},VL=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Zp(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!xL(n))throw new Error(Br(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FL{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function eg(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!xp(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function EC(t,e,n){eg(t,n),wC(t,s=>xp(s,e))}function Ms(t,e,n){eg(t,n),wC(t,s=>In(s,e)||In(e,s))}function wC(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(UL(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function UL(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();ca&&Mt("event: "+n.toString()),co(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BL="repo_interrupt",$L=25;class jL{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new FL,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Bc(),this.transactionQueueTree_=new Xp,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function qL(t,e,n){if(t.stats_=Pp(t.repoInfo_),t.forceRestClient_||ED())t.server_=new Uc(t.repoInfo_,(s,i,r,o)=>{uv(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>hv(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{St(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Cs(t.repoInfo_,e,(s,i,r,o)=>{uv(t,s,i,r,o)},s=>{hv(t,s)},s=>{HL(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=AD(t.repoInfo_,()=>new CM(t.stats_,t.server_)),t.infoData_=new vM,t.infoSyncTree_=new av({startListening:(s,i,r,o)=>{let a=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(a=Hu(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ng(t,"connected",!1),t.serverSyncTree_=new av({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,c)=>{const u=o(a,c);Ms(t.eventQueue_,s._path,u)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function WL(t){const n=t.infoData_.getNode(new ze(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function tg(t){return IL({timestamp:WL(t)})}function uv(t,e,n,s,i){t.dataUpdateCount++;const r=new ze(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=Ec(n,u=>vt(u));o=yL(t.serverSyncTree_,r,c,i)}else{const c=vt(n);o=mL(t.serverSyncTree_,r,c,i)}else if(s){const c=Ec(n,u=>vt(u));o=pL(t.serverSyncTree_,r,c)}else{const c=vt(n);o=Hu(t.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=Qu(t,r)),Ms(t.eventQueue_,a,o)}function hv(t,e){ng(t,"connected",e),e===!1&&KL(t)}function HL(t,e){Xt(e,(n,s)=>{ng(t,n,s)})}function ng(t,e,n){const s=new ze("/.info/"+e),i=vt(n);t.infoData_.updateSnapshot(s,i);const r=Hu(t.infoSyncTree_,s,i);Ms(t.eventQueue_,s,r)}function TC(t){return t.nextWriteId_++}function GL(t,e,n,s,i){sg(t,"set",{path:e.toString(),value:n,priority:s});const r=tg(t),o=vt(n,s),a=Wp(t.serverSyncTree_,e),c=fC(o,a,r),u=TC(t),h=cC(t.serverSyncTree_,e,c,u,!0);eg(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(p,_)=>{const T=p==="ok";T||hn("set at "+e+" failed: "+p);const S=Ui(t.serverSyncTree_,u,!T);Ms(t.eventQueue_,e,S),Zr(t,i,p,_)});const d=bC(t,e);Qu(t,d),Ms(t.eventQueue_,d,[])}function KL(t){sg(t,"onDisconnectEvents");const e=tg(t),n=Bc();zd(t.onDisconnect_,$e(),(i,r)=>{const o=RL(i,r,t.serverSyncTree_,e);uo(n,i,o)});let s=[];zd(n,$e(),(i,r)=>{s=s.concat(Hu(t.serverSyncTree_,i,r));const o=bC(t,i);Qu(t,o)}),t.onDisconnect_=Bc(),Ms(t.eventQueue_,$e(),s)}function zL(t,e,n){t.server_.onDisconnectCancel(e.toString(),(s,i)=>{s==="ok"&&Kd(t.onDisconnect_,e),Zr(t,n,s,i)})}function dv(t,e,n,s){const i=vt(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(r,o)=>{r==="ok"&&uo(t.onDisconnect_,e,i),Zr(t,s,r,o)})}function QL(t,e,n,s,i){const r=vt(n,s);t.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&uo(t.onDisconnect_,e,r),Zr(t,i,o,a)})}function YL(t,e,n,s){if(vc(n)){Mt("onDisconnect().update() called with empty data.  Don't do anything."),Zr(t,s,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,r)=>{i==="ok"&&Xt(n,(o,a)=>{const c=vt(a);uo(t.onDisconnect_,_t(e,o),c)}),Zr(t,s,i,r)})}function XL(t,e,n){let s;Se(e._path)===".info"?s=lv(t.infoSyncTree_,e,n):s=lv(t.serverSyncTree_,e,n),EC(t.eventQueue_,e._path,s)}function JL(t,e,n){let s;Se(e._path)===".info"?s=ef(t.infoSyncTree_,e,n):s=ef(t.serverSyncTree_,e,n),EC(t.eventQueue_,e._path,s)}function ZL(t){t.persistentConnection_&&t.persistentConnection_.interrupt(BL)}function sg(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Mt(n,...e)}function Zr(t,e,n,s){e&&co(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function IC(t,e,n){return Wp(t.serverSyncTree_,e,n)||ye.EMPTY_NODE}function ig(t,e=t.transactionQueueTree_){if(e||Yu(t,e),ho(e)){const n=AC(t,e);X(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&eV(t,fl(e),n)}else gC(e)&&Ku(e,n=>{ig(t,n)})}function eV(t,e,n){const s=n.map(u=>u.currentWriteId),i=IC(t,e,s);let r=i;const o=i.hash();for(let u=0;u<n.length;u++){const h=n[u];X(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=ln(e,h.path);r=r.updateChild(d,h.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;t.server_.put(c.toString(),a,u=>{sg(t,"transaction put response",{path:c.toString(),status:u});let h=[];if(u==="ok"){const d=[];for(let p=0;p<n.length;p++)n[p].status=2,h=h.concat(Ui(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&d.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();Yu(t,Jp(t.transactionQueueTree_,e)),ig(t,t.transactionQueueTree_),Ms(t.eventQueue_,e,h);for(let p=0;p<d.length;p++)co(d[p])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{hn("transaction at "+c.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Qu(t,e)}},o)}function Qu(t,e){const n=CC(t,e),s=fl(n),i=AC(t,n);return tV(t,i,s),s}function tV(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],u=ln(n,c.path);let h=!1,d;if(X(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,d=c.abortReason,i=i.concat(Ui(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=$L)h=!0,d="maxretry",i=i.concat(Ui(t.serverSyncTree_,c.currentWriteId,!0));else{const p=IC(t,c.path,o);c.currentInputSnapshot=p;const _=e[a].update(p.val());if(_!==void 0){zu("transaction failed: Data returned ",_,c.path);let T=vt(_);typeof _=="object"&&_!=null&&ts(_,".priority")||(T=T.updatePriority(p.getPriority()));const P=c.currentWriteId,V=tg(t),O=fC(T,p,V);c.currentOutputSnapshotRaw=T,c.currentOutputSnapshotResolved=O,c.currentWriteId=TC(t),o.splice(o.indexOf(P),1),i=i.concat(cC(t.serverSyncTree_,c.path,O,c.currentWriteId,c.applyLocally)),i=i.concat(Ui(t.serverSyncTree_,P,!0))}else h=!0,d="nodata",i=i.concat(Ui(t.serverSyncTree_,c.currentWriteId,!0))}Ms(t.eventQueue_,n,i),i=[],h&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}Yu(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)co(s[a]);ig(t,t.transactionQueueTree_)}function CC(t,e){let n,s=t.transactionQueueTree_;for(n=Se(e);n!==null&&ho(s)===void 0;)s=Jp(s,n),e=Xe(e),n=Se(e);return s}function AC(t,e){const n=[];return RC(t,e,n),n.sort((s,i)=>s.order-i.order),n}function RC(t,e,n){const s=ho(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Ku(e,i=>{RC(t,i,n)})}function Yu(t,e){const n=ho(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,pC(e,n.length>0?n:void 0)}Ku(e,s=>{Yu(t,s)})}function bC(t,e){const n=fl(CC(t,e)),s=Jp(t.transactionQueueTree_,e);return SL(s,i=>{zh(t,i)}),zh(t,s),_C(s,i=>{zh(t,i)}),n}function zh(t,e){const n=ho(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(X(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(X(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ui(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?pC(e,void 0):n.length=r+1,Ms(t.eventQueue_,fl(e),i);for(let o=0;o<s.length;o++)co(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nV(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function sV(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):hn(`Invalid query segment '${n}' in query '${t}'`)}return e}const fv=function(t,e){const n=iV(t),s=n.namespace;n.domain==="firebase.com"&&Ds(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Ds("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||hD();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new OI(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ze(n.pathString)}},iV=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",c=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(h,d)),h<d&&(i=nV(t.substring(h,d)));const p=sV(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const T=e.indexOf(".");s=e.substring(0,T).toLowerCase(),n=e.substring(T+1),r=s}"ns"in p&&(r=p.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rV{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+St(this.snapshot.exportVal())}}class oV{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aV{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return X(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lV{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new ps;return zL(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){zo("OnDisconnect.remove",this._path);const e=new ps;return dv(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){zo("OnDisconnect.set",this._path),nf("OnDisconnect.set",e,this._path);const n=new ps;return dv(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){zo("OnDisconnect.setWithPriority",this._path),nf("OnDisconnect.setWithPriority",e,this._path),ML("OnDisconnect.setWithPriority",n);const s=new ps;return QL(this._repo,this._path,e,n,s.wrapCallback(()=>{})),s.promise}update(e){zo("OnDisconnect.update",this._path),DL("OnDisconnect.update",e,this._path);const n=new ps;return YL(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return Pe(this._path)?null:Np(this._path)}get ref(){return new vi(this._repo,this._path)}get _queryIdentifier(){const e=Yy(this._queryParams),n=bp(e);return n==="{}"?"default":n}get _queryObject(){return Yy(this._queryParams)}isEqual(e){if(e=He(e),!(e instanceof rg))return!1;const n=this._repo===e._repo,s=xp(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+zD(this._path)}}class vi extends rg{constructor(e,n){super(e,n,new Lp,!1)}get parent(){const e=jI(this._path);return e===null?null:new vi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class zc{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ze(e),s=sf(this.ref,e);return new zc(this._node.getChild(n),s,at)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new zc(i,sf(this.ref,s),at)))}hasChild(e){const n=new ze(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function pa(t,e){return t=He(t),t._checkNotDeleted("ref"),e!==void 0?sf(t._root,e):t._root}function sf(t,e){return t=He(t),Se(t._path)===null?LL("child","path",e):vC("child","path",e),new vi(t._repo,_t(t._path,e))}function cV(t){return t=He(t),new lV(t._repo,t._path)}function rf(t,e){t=He(t),zo("set",t._path),nf("set",e,t._path);const n=new ps;return GL(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class og{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new rV("value",this,new zc(e.snapshotNode,new vi(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new oV(this,e,n):null}matches(e){return e instanceof og?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function uV(t,e,n,s,i){const r=new aV(n,void 0),o=new og(r);return XL(t._repo,t,o),()=>JL(t._repo,t,o)}function pv(t,e,n,s){return uV(t,"value",e)}rL(vi);hL(vi);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hV="FIREBASE_DATABASE_EMULATOR_HOST",of={};let dV=!1;function fV(t,e,n,s){t.repoInfo_=new OI(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function pV(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Ds("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Mt("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=fv(r,i),a=o.repoInfo,c;typeof process<"u"&&xy&&(c=xy[hV]),c?(r=`http://${c}?ns=${a.namespace}`,o=fv(r,i),a=o.repoInfo):o.repoInfo.secure;const u=new TD(t.name,t.options,e);VL("Invalid Firebase Database URL",o),Pe(o.path)||Ds("Database URL must point to the root of a Firebase Database (not including a child path).");const h=_V(a,t,u,new wD(t.name,n));return new mV(h,t)}function gV(t,e){const n=of[e];(!n||n[t.key]!==t)&&Ds(`Database ${e}(${t.repoInfo_}) has already been deleted.`),ZL(t),delete n[t.key]}function _V(t,e,n,s){let i=of[e.name];i||(i={},of[e.name]=i);let r=i[t.toURLString()];return r&&Ds("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new jL(t,dV,n,s),i[t.toURLString()]=r,r}class mV{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(qL(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new vi(this._repo,$e())),this._rootInternal}_delete(){return this._rootInternal!==null&&(gV(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ds("Cannot call "+e+" on a deleted database.")}}function yV(t=mu(),e){const n=Xa(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=bf("database");s&&vV(n,...s)}return n}function vV(t,e,n,s={}){t=He(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Ds("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Ds('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new oc(oc.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Sf(s.mockUserToken,t.app.options.projectId);r=new oc(o)}fV(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EV(t){rD(gi),li(new Ss("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return pV(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),An(Oy,Dy,t),An(Oy,Dy,"esm2017")}Cs.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Cs.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};EV();var wV="firebase",TV="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */An(wV,TV,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC="firebasestorage.googleapis.com",PC="storageBucket",IV=2*60*1e3,CV=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends es{constructor(e,n,s=0){super(Qh(e),`Firebase Storage: ${n} (${Qh(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ft.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Qh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var dt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(dt||(dt={}));function Qh(t){return"storage/"+t}function ag(){const t="An unknown error occurred, please check the error payload for server response.";return new ft(dt.UNKNOWN,t)}function AV(t){return new ft(dt.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function RV(t){return new ft(dt.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function bV(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ft(dt.UNAUTHENTICATED,t)}function SV(){return new ft(dt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function PV(t){return new ft(dt.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function kV(){return new ft(dt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function NV(){return new ft(dt.CANCELED,"User canceled the upload/download.")}function xV(t){return new ft(dt.INVALID_URL,"Invalid URL '"+t+"'.")}function OV(t){return new ft(dt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function DV(){return new ft(dt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+PC+"' property when initializing the app?")}function MV(){return new ft(dt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function LV(){return new ft(dt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function VV(t){return new ft(dt.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function af(t){return new ft(dt.INVALID_ARGUMENT,t)}function kC(){return new ft(dt.APP_DELETED,"The Firebase app was deleted.")}function FV(t){return new ft(dt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ga(t,e){return new ft(dt.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Lo(t){throw new ft(dt.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=yn.makeFromUrl(e,n)}catch{return new yn(e,"")}if(s.path==="")return s;throw OV(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function u(x){x.path_=decodeURIComponent(x.path)}const h="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",_=new RegExp(`^https?://${d}/${h}/b/${i}/o${p}`,"i"),T={bucket:1,path:3},S=n===SC?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",V=new RegExp(`^https?://${S}/${i}/${P}`,"i"),D=[{regex:a,indices:c,postModify:r},{regex:_,indices:T,postModify:u},{regex:V,indices:{bucket:1,path:2},postModify:u}];for(let x=0;x<D.length;x++){const z=D[x],j=z.regex.exec(e);if(j){const C=j[z.indices.bucket];let m=j[z.indices.path];m||(m=""),s=new yn(C,m),z.postModify(s);break}}if(s==null)throw xV(e);return s}}class UV{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BV(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function c(){return a===2}let u=!1;function h(...P){u||(u=!0,e.apply(null,P))}function d(P){i=setTimeout(()=>{i=null,t(_,c())},P)}function p(){r&&clearTimeout(r)}function _(P,...V){if(u){p();return}if(P){p(),h.call(null,P,...V);return}if(c()||o){p(),h.call(null,P,...V);return}s<64&&(s*=2);let D;a===1?(a=2,D=0):D=(s+Math.random())*1e3,d(D)}let T=!1;function S(P){T||(T=!0,p(),!u&&(i!==null?(P||(a=2),clearTimeout(i),d(0)):P||(a=1)))}return d(0),r=setTimeout(()=>{o=!0,S(!0)},n),S}function $V(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jV(t){return t!==void 0}function qV(t){return typeof t=="object"&&!Array.isArray(t)}function lg(t){return typeof t=="string"||t instanceof String}function gv(t){return cg()&&t instanceof Blob}function cg(){return typeof Blob<"u"}function _v(t,e,n,s){if(s<e)throw af(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw af(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function NC(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}var Wi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Wi||(Wi={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WV(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HV{constructor(e,n,s,i,r,o,a,c,u,h,d,p=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=d,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,T)=>{this.resolve_=_,this.reject_=T,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new jl(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Wi.NO_ERROR,c=r.getStatus();if(!a||WV(c,this.additionalRetryCodes_)&&this.retry){const h=r.getErrorCode()===Wi.ABORT;s(!1,new jl(!1,null,h));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new jl(u,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());jV(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=ag();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?kC():NV();o(c)}else{const c=kV();o(c)}};this.canceled_?n(!1,new jl(!1,null,!0)):this.backoffId_=BV(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&$V(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class jl{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function GV(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function KV(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function zV(t,e){e&&(t["X-Firebase-GMPID"]=e)}function QV(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function YV(t,e,n,s,i,r,o=!0){const a=NC(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return zV(u,e),GV(u,n),KV(u,r),QV(u,s),new HV(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XV(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function JV(...t){const e=XV();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(cg())return new Blob(t);throw new ft(dt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function ZV(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e2(t){if(typeof atob>"u")throw VV("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Yh{constructor(e,n){this.data=e,this.contentType=n||null}}function t2(t,e){switch(t){case zn.RAW:return new Yh(xC(e));case zn.BASE64:case zn.BASE64URL:return new Yh(OC(t,e));case zn.DATA_URL:return new Yh(s2(e),i2(e))}throw ag()}function xC(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const r=s,o=t.charCodeAt(++n);s=65536|(r&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function n2(t){let e;try{e=decodeURIComponent(t)}catch{throw ga(zn.DATA_URL,"Malformed data URL.")}return xC(e)}function OC(t,e){switch(t){case zn.BASE64:{const i=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(i||r)throw ga(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case zn.BASE64URL:{const i=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(i||r)throw ga(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=e2(e)}catch(i){throw i.message.includes("polyfill")?i:ga(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}class DC{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ga(zn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=r2(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function s2(t){const e=new DC(t);return e.base64?OC(zn.BASE64,e.rest):n2(e.rest)}function i2(t){return new DC(t).contentType}function r2(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,n){let s=0,i="";gv(e)?(this.data_=e,s=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(gv(this.data_)){const s=this.data_,i=ZV(s,e,n);return i===null?null:new Js(i)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new Js(s,!0)}}static getBlob(...e){if(cg()){const n=e.map(s=>s instanceof Js?s.data_:s);return new Js(JV.apply(null,n))}else{const n=e.map(o=>lg(o)?t2(zn.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[r++]=o[a]}),new Js(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MC(t){let e;try{e=JSON.parse(t)}catch{return null}return qV(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o2(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function a2(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function LC(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l2(t,e){return e}class Zt{constructor(e,n,s,i){this.server=e,this.local=n||e,this.writable=!!s,this.xform=i||l2}}let ql=null;function c2(t){return!lg(t)||t.length<2?t:LC(t)}function VC(){if(ql)return ql;const t=[];t.push(new Zt("bucket")),t.push(new Zt("generation")),t.push(new Zt("metageneration")),t.push(new Zt("name","fullPath",!0));function e(r,o){return c2(o)}const n=new Zt("name");n.xform=e,t.push(n);function s(r,o){return o!==void 0?Number(o):o}const i=new Zt("size");return i.xform=s,t.push(i),t.push(new Zt("timeCreated")),t.push(new Zt("updated")),t.push(new Zt("md5Hash",null,!0)),t.push(new Zt("cacheControl",null,!0)),t.push(new Zt("contentDisposition",null,!0)),t.push(new Zt("contentEncoding",null,!0)),t.push(new Zt("contentLanguage",null,!0)),t.push(new Zt("contentType",null,!0)),t.push(new Zt("metadata","customMetadata",!0)),ql=t,ql}function u2(t,e){function n(){const s=t.bucket,i=t.fullPath,r=new yn(s,i);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function h2(t,e,n){const s={};s.type="file";const i=n.length;for(let r=0;r<i;r++){const o=n[r];s[o.local]=o.xform(s,e[o.server])}return u2(s,t),s}function FC(t,e,n){const s=MC(e);return s===null?null:h2(t,s,n)}function d2(t,e,n,s){const i=MC(e);if(i===null||!lg(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(u=>{const h=t.bucket,d=t.fullPath,p="/b/"+o(h)+"/o/"+o(d),_=ug(p,n,s),T=NC({alt:"media",token:u});return _+T})[0]}function f2(t,e){const n={},s=e.length;for(let i=0;i<s;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}class UC{constructor(e,n,s,i){this.url=e,this.method=n,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BC(t){if(!t)throw ag()}function p2(t,e){function n(s,i){const r=FC(t,i,e);return BC(r!==null),r}return n}function g2(t,e){function n(s,i){const r=FC(t,i,e);return BC(r!==null),d2(r,i,t.host,t._protocol)}return n}function $C(t){function e(n,s){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=SV():i=bV():n.getStatus()===402?i=RV(t.bucket):n.getStatus()===403?i=PV(t.path):i=s,i.status=n.getStatus(),i.serverResponse=s.serverResponse,i}return e}function _2(t){const e=$C(t);function n(s,i){let r=e(s,i);return s.getStatus()===404&&(r=AV(t.path)),r.serverResponse=i.serverResponse,r}return n}function m2(t,e,n){const s=e.fullServerUrl(),i=ug(s,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new UC(i,r,g2(t,n),o);return a.errorHandler=_2(e),a}function y2(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function v2(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=y2(null,e)),s}function E2(t,e,n,s,i){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let D="";for(let x=0;x<2;x++)D=D+Math.random().toString().slice(2);return D}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=v2(e,s,i),h=f2(u,n),d="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,p=`\r
--`+c+"--",_=Js.getBlob(d,s,p);if(_===null)throw MV();const T={name:u.fullPath},S=ug(r,t.host,t._protocol),P="POST",V=t.maxUploadRetryTime,O=new UC(S,P,p2(t,n),V);return O.urlParams=T,O.headers=o,O.body=_.uploadData(),O.errorHandler=$C(e),O}class w2{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Wi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Wi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Wi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,i){if(this.sent_)throw Lo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Lo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Lo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Lo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Lo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class T2 extends w2{initXhr(){this.xhr_.responseType="text"}}function jC(){return new T2}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,n){this._service=e,n instanceof yn?this._location=n:this._location=yn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new er(e,n)}get root(){const e=new yn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return LC(this._location.path)}get storage(){return this._service}get parent(){const e=o2(this._location.path);if(e===null)return null;const n=new yn(this._location.bucket,e);return new er(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw FV(e)}}function I2(t,e,n){t._throwIfRoot("uploadBytes");const s=E2(t.storage,t._location,VC(),new Js(e,!0),n);return t.storage.makeRequestWithTokens(s,jC).then(i=>({metadata:i,ref:t}))}function C2(t){t._throwIfRoot("getDownloadURL");const e=m2(t.storage,t._location,VC());return t.storage.makeRequestWithTokens(e,jC).then(n=>{if(n===null)throw LV();return n})}function A2(t,e){const n=a2(t._location.path,e),s=new yn(t._location.bucket,n);return new er(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R2(t){return/^[A-Za-z]+:\/\//.test(t)}function b2(t,e){return new er(t,e)}function qC(t,e){if(t instanceof hg){const n=t;if(n._bucket==null)throw DV();const s=new er(n,n._bucket);return e!=null?qC(s,e):s}else return e!==void 0?A2(t,e):t}function S2(t,e){if(e&&R2(e)){if(t instanceof hg)return b2(t,e);throw af("To use ref(service, url), the first argument must be a Storage instance.")}else return qC(t,e)}function mv(t,e){const n=e==null?void 0:e[PC];return n==null?null:yn.makeFromBucketSpec(n,t)}function P2(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:Sf(i,t.app.options.projectId))}class hg{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=SC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=IV,this._maxUploadRetryTime=CV,this._requests=new Set,i!=null?this._bucket=yn.makeFromBucketSpec(i,this._host):this._bucket=mv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=yn.makeFromBucketSpec(this._url,e):this._bucket=mv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){_v("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){_v("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new er(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new UV(kC());{const o=YV(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const yv="@firebase/storage",vv="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC="storage";function k2(t,e,n){return t=He(t),I2(t,e,n)}function N2(t){return t=He(t),C2(t)}function x2(t,e){return t=He(t),S2(t,e)}function O2(t=mu(),e){t=He(t);const s=Xa(t,WC).getImmediate({identifier:e}),i=bf("storage");return i&&D2(s,...i),s}function D2(t,e,n,s={}){P2(t,e,n,s)}function M2(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new hg(n,s,i,e,gi)}function L2(){li(new Ss(WC,M2,"PUBLIC").setMultipleInstances(!0)),An(yv,vv,""),An(yv,vv,"esm2017")}L2();const V2={apiKey:"AIzaSyCZYlaaPuSfQV6oU33Ve0oOpMBU9HM3l2s",authDomain:"hybridchat-b81ab.firebaseapp.com",databaseURL:"https://hybridchat-b81ab-default-rtdb.firebaseio.com",projectId:"hybridchat-b81ab",storageBucket:"hybridchat-b81ab.firebasestorage.app",messagingSenderId:"208164258199",appId:"1:208164258199:web:cf111f0e343f1660f884d2"},Xu=_w(V2),Vo=r1(Xu),pt=HO(Xu),_a=yV(Xu),F2=O2(Xu),U2=new gs,fo=HE("auth",()=>{const t=Le(null),e=Le(!0),n=Le(null),s=st(()=>!!t.value);async function i(d,p={}){const _=vs(pt,"users",d.uid);(await La(_)).exists()||await Ko(_,{uid:d.uid,email:d.email,displayName:d.displayName||p.displayName||"Anonymous",photoURL:d.photoURL||`https://api.dicebear.com/7.x/adventurer/svg?seed=${d.uid}`,bio:"",status:"🟢 Online",theme:"neon",createdAt:cs(),lastSeen:cs(),...p})}function r(d){const p=pa(_a,`presence/${d}`);rf(p,{online:!0,lastSeen:Date.now()}),cV(p).set({online:!1,lastSeen:Date.now()})}async function o({email:d,password:p,displayName:_}){n.value=null;try{const T=await $k(Vo,d,p);await Wk(T.user,{displayName:_}),await i(T.user,{displayName:_}),r(T.user.uid)}catch(T){throw n.value=T.message,T}}async function a({email:d,password:p}){n.value=null;try{const _=await jk(Vo,d,p);r(_.user.uid)}catch(_){throw n.value=_.message,_}}async function c(){n.value=null;try{const d=await pN(Vo,U2);await i(d.user),r(d.user.uid)}catch(d){throw n.value=d.message,d}}async function u(){if(t.value){const d=pa(_a,`presence/${t.value.uid}`);await rf(d,{online:!1,lastSeen:Date.now()})}await zk(Vo),t.value=null}function h(){return new Promise(d=>{Kk(Vo,async p=>{if(p){const _=await La(vs(pt,"users",p.uid));t.value=_.exists()?{uid:p.uid,email:p.email,..._.data()}:{uid:p.uid,email:p.email,displayName:p.displayName},r(p.uid)}else t.value=null;e.value=!1,d()})})}return{user:t,loading:e,error:n,isLoggedIn:s,register:o,login:a,loginWithGoogle:c,logout:u,init:h}}),B2=[{path:"/",redirect:"/home"},{path:"/auth",component:()=>dr(()=>import("./AuthView-22UnfhwN.js"),__vite__mapDeps([0,1])),meta:{public:!0}},{path:"/home",component:()=>dr(()=>import("./HomeView-BdEQE_rs.js"),__vite__mapDeps([2,3,4,5])),meta:{requiresAuth:!0}},{path:"/chats",component:()=>dr(()=>import("./ChatsView-BD3-i_uw.js"),__vite__mapDeps([6,3,4,7])),meta:{requiresAuth:!0}},{path:"/profile",component:()=>dr(()=>import("./ProfileView-B9juooVk.js"),__vite__mapDeps([8,9])),meta:{requiresAuth:!0}},{path:"/users",component:()=>dr(()=>import("./UsersView-DHCFb90C.js"),__vite__mapDeps([10,11])),meta:{requiresAuth:!0}},{path:"/admin",component:()=>dr(()=>import("./AdminView-B7JscFKQ.js"),__vite__mapDeps([12,13])),meta:{requiresAuth:!0}}],HC=hS({history:q0(),routes:B2});HC.beforeEach(async t=>{const e=fo();if(!t.meta.public&&!e.isLoggedIn)return"/auth";if(t.path==="/auth"&&e.isLoggedIn)return"/home"});const Ju=HE("chat",()=>{const t=Le([]),e=Le(null),n=Le([]),s=Le({}),i=Le({}),r=Le([]),o=Le(!1),a=Le(!1);let c=null;async function u(){const w=await ky(fn(pt,"users"));r.value=w.docs.map(R=>({id:R.id,...R.data()}))}function h(){const w=pa(_a,"presence");pv(w,R=>{i.value=R.val()||{}})}function d(w){var R;return((R=i.value[w])==null?void 0:R.online)===!0}function p(w){const R=Bh(fn(pt,"conversations"),$h("members","array-contains",w),by("updatedAt","desc"));vr(R,I=>{t.value=I.docs.map(E=>({id:E.id,...E.data()}))})}async function _(w,R){const I=Bh(fn(pt,"conversations"),$h("type","==","dm"),$h("members","array-contains",w)),oe=(await ky(I)).docs.find(Q=>Q.data().members.includes(R));return oe?oe.id:(await Pr(fn(pt,"conversations"),{type:"dm",members:[w,R],createdAt:cs(),updatedAt:cs(),lastMessage:null})).id}async function T({name:w,members:R,myUid:I,avatar:E}){return(await Pr(fn(pt,"conversations"),{type:"group",name:w,avatar:E||`https://api.dicebear.com/7.x/identicon/svg?seed=${w}`,members:[I,...R],admins:[I],createdAt:cs(),updatedAt:cs(),lastMessage:null})).id}function S(w){c&&c(),n.value=[];const R=Bh(fn(pt,"conversations",w,"messages"),by("createdAt","asc"),nD(100));c=vr(R,I=>{n.value=I.docs.map(E=>({id:E.id,...E.data()}))})}async function P({convoId:w,senderId:R,text:I,type:E="text",mediaUrl:oe=null,fileName:he=null}){const Q=await Pr(fn(pt,"conversations",w,"messages"),{senderId:R,text:I||"",type:E,mediaUrl:oe,fileName:he,reactions:{},status:"sent",createdAt:cs()});return await Ny(vs(pt,"conversations",w),{lastMessage:{text:I||`[${E}]`,senderId:R,createdAt:cs()},updatedAt:cs()}),Q.id}async function V(w,R,I,E){var L;const oe=vs(pt,"conversations",w,"messages",R),Q=((L=(await La(oe)).data())==null?void 0:L.reactions)||{};Q[I]===E?delete Q[I]:Q[I]=E,await Ny(oe,{reactions:Q})}function O(w,R,I){const E=pa(_a,`typing/${w}/${R}`);rf(E,I?!0:null)}function D(w){const R=pa(_a,`typing/${w}`);pv(R,I=>{s.value[w]=I.val()||{}})}async function x(w,R){const I=x2(F2,R);return await k2(I,w),N2(I)}function z(w){e.value=w,o.value=!0,a.value=!1,S(w),D(w)}function j(){o.value=!o.value,a.value=!1}function C(){a.value=!0,o.value=!1}const m=st(()=>t.value.find(w=>w.id===e.value)),v=st(()=>e.value?Object.keys(s.value[e.value]||{}):[]);return{conversations:t,activeConvoId:e,messages:n,typingUsers:s,onlineUsers:i,allUsers:r,floatOpen:o,floatMinimized:a,activeConvo:m,typingInActive:v,fetchUsers:u,watchPresence:h,isOnline:d,watchConversations:p,getOrCreateDM:_,createGroup:T,watchMessages:S,sendMessage:P,reactToMessage:V,setTyping:O,watchTyping:D,uploadMedia:x,openChat:z,toggleFloat:j,minimizeFloat:C}});let Wl;const $2=new Uint8Array(16);function j2(){if(!Wl&&(Wl=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Wl))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Wl($2)}const xt=[];for(let t=0;t<256;++t)xt.push((t+256).toString(16).slice(1));function q2(t,e=0){return xt[t[e+0]]+xt[t[e+1]]+xt[t[e+2]]+xt[t[e+3]]+"-"+xt[t[e+4]]+xt[t[e+5]]+"-"+xt[t[e+6]]+xt[t[e+7]]+"-"+xt[t[e+8]]+xt[t[e+9]]+"-"+xt[t[e+10]]+xt[t[e+11]]+xt[t[e+12]]+xt[t[e+13]]+xt[t[e+14]]+xt[t[e+15]]}const W2=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Ev={randomUUID:W2};function Xh(t,e,n){if(Ev.randomUUID&&!t)return Ev.randomUUID();t=t||{};const s=t.random||(t.rng||j2)();return s[6]=s[6]&15|64,s[8]=s[8]&63|128,q2(s)}const dg=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},H2={class:"chat-window"},G2={key:0,style:{"text-align":"center",padding:"32px",color:"var(--text-3)","font-size":"13px"}},K2=["src"],z2={style:{display:"flex","flex-direction":"column",gap:"2px","max-width":"75%"}},Q2={key:0,style:{"font-size":"10px","font-weight":"700",color:"var(--primary-light)","margin-left":"4px","margin-bottom":"2px"}},Y2=["onLongpress"],X2=["src"],J2={key:0,style:{padding:"6px 6px 2px","font-size":"13px"}},Z2=["src"],eF=["onClick"],tF={width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2",style:{"flex-shrink":"0"}},nF={style:{"font-size":"12px","text-decoration":"underline"}},sF={key:1,class:"reaction-row"},iF=["onClick"],rF={key:0,style:{"margin-left":"2px"}},oF=["onClick"],aF={key:1,class:"msg-row in"},lF={class:"input-area"},cF={style:{display:"flex","align-items":"center",gap:"4px",padding:"0 8px 8px"}},uF={key:0,class:"emoji-panel"},hF={class:"emoji-grid"},dF=["onClick"],fF={key:1,class:"recording-bar"},pF={style:{display:"flex","align-items":"center",gap:"8px",padding:"0 12px 12px"}},gF=["onKeydown"],_F=["disabled"],mF={class:"react-picker"},yF=["onClick"],vF={__name:"ChatWindow",props:{convoId:String},setup(t){const e=t,n=fo(),s=Ju(),i=Le(""),r=Le(null),o=Le(!1),a=Le(null),c=Le(!1),u=Le(0);let h=null,d=null,p=[];const _=["😂","❤️","🔥","💯","😍","🤣","😭","🙏","💀","🤙","👀","🫀","✨","🎉","🥰","😎","🤩","😤","💪","🫡","🥳","😏","🤧","😜","🫶"],T=["❤️","😂","😮","😢","😠","👍","🔥","💯"],S=st(()=>{var Q;return((Q=s.activeConvo)==null?void 0:Q.type)==="group"});Cr(()=>s.messages.length,async()=>{await Dr(),r.value&&(r.value.scrollTop=r.value.scrollHeight)}),za(()=>{Dr(()=>{r.value&&(r.value.scrollTop=r.value.scrollHeight)})});let P=null;function V(){s.setTyping(e.convoId,n.user.uid,!0),clearTimeout(P),P=setTimeout(()=>{s.setTyping(e.convoId,n.user.uid,!1)},2e3)}au(()=>{s.setTyping(e.convoId,n.user.uid,!1)});async function O(){const Q=i.value.trim();Q&&(i.value="",o.value=!1,s.setTyping(e.convoId,n.user.uid,!1),await s.sendMessage({convoId:e.convoId,senderId:n.user.uid,text:Q}))}function D(Q){i.value+=Q,o.value=!1}async function x(Q){const L=Q.target.files[0];if(!L)return;const H=L.type.startsWith("video"),Ae=`media/${e.convoId}/${Xh()}_${L.name}`;try{const Ue=await s.uploadMedia(L,Ae);await s.sendMessage({convoId:e.convoId,senderId:n.user.uid,type:H?"video":"image",mediaUrl:Ue,text:""})}catch(Ue){console.error("Upload failed:",Ue)}Q.target.value=""}async function z(Q){const L=Q.target.files[0];if(!L)return;const H=`files/${e.convoId}/${Xh()}_${L.name}`;try{const Ae=await s.uploadMedia(L,H);await s.sendMessage({convoId:e.convoId,senderId:n.user.uid,type:"file",mediaUrl:Ae,fileName:L.name,text:""})}catch(Ae){console.error("Upload failed:",Ae)}Q.target.value=""}async function j(){if(c.value)clearInterval(h),d.stop(),d.onstop=async()=>{const Q=new Blob(p,{type:"audio/webm"}),L=`audio/${e.convoId}/${Xh()}.webm`;try{const H=await s.uploadMedia(Q,L);await s.sendMessage({convoId:e.convoId,senderId:n.user.uid,type:"audio",mediaUrl:H,text:""})}catch(H){console.error(H)}},c.value=!1;else try{const Q=await navigator.mediaDevices.getUserMedia({audio:!0});d=new MediaRecorder(Q),p=[],d.ondataavailable=L=>p.push(L.data),d.start(),c.value=!0,u.value=0,h=setInterval(()=>u.value++,1e3)}catch{alert("Microphone access denied")}}function C(Q){a.value=Q}function m(Q){a.value=Q}async function v(Q){a.value&&(await s.reactToMessage(e.convoId,a.value.id,n.user.uid,Q),a.value=null)}function w(Q){return Q.reactions&&Object.keys(Q.reactions).length>0}function R(Q){const L={};return Object.entries(Q.reactions||{}).forEach(([H,Ae])=>{L[Ae]||(L[Ae]=[]),L[Ae].push(H)}),L}function I(Q){window.open(Q.mediaUrl,"_blank")}function E(Q){return Q?(Q.toDate?Q.toDate():new Date(Q)).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):""}function oe(Q){const L=s.allUsers.find(H=>H.uid===Q);return(L==null?void 0:L.photoURL)||`https://api.dicebear.com/7.x/adventurer/svg?seed=${Q}`}function he(Q){var L;return((L=s.allUsers.find(H=>H.uid===Q))==null?void 0:L.displayName)||"User"}return(Q,L)=>(re(),ue("div",H2,[F("div",{class:"messages-area",ref_key:"scrollEl",ref:r},[Ce(s).messages.length===0?(re(),ue("div",G2,[...L[5]||(L[5]=[F("div",{class:"empty-msg-icon"},[F("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5"},[F("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})])],-1),F("p",{style:{"margin-top":"8px"}},"No messages yet. Start the conversation.",-1)])])):Me("",!0),(re(!0),ue(Dt,null,Uo(Ce(s).messages,(H,Ae)=>{var Ue,Ge,Re,Je,Pn,Ut,Pt,U,se;return re(),ue("div",{key:H.id,class:Ot(["msg-row",H.senderId===((Ue=Ce(n).user)==null?void 0:Ue.uid)?"out":"in"])},[H.senderId!==((Ge=Ce(n).user)==null?void 0:Ge.uid)?(re(),ue("img",{key:0,src:oe(H.senderId),class:"avatar-sm msg-avatar"},null,8,K2)):Me("",!0),F("div",z2,[S.value&&H.senderId!==((Re=Ce(n).user)==null?void 0:Re.uid)?(re(),ue("span",Q2,ot(he(H.senderId)),1)):Me("",!0),F("div",{class:"msg-bubble-wrap",onLongpress:ee=>m(H)},[H.type==="text"?(re(),ue("div",{key:0,class:Ot(["bubble",H.senderId===((Je=Ce(n).user)==null?void 0:Je.uid)?"bubble-out":"bubble-in"])},ot(H.text),3)):H.type==="image"?(re(),ue("div",{key:1,class:Ot(["bubble",H.senderId===((Pn=Ce(n).user)==null?void 0:Pn.uid)?"bubble-out":"bubble-in"]),style:{padding:"4px"}},[F("img",{src:H.mediaUrl,style:{width:"100%","max-width":"200px","border-radius":"10px",display:"block"}},null,8,X2),H.text?(re(),ue("p",J2,ot(H.text),1)):Me("",!0)],2)):H.type==="audio"?(re(),ue("div",{key:2,class:Ot(["bubble",H.senderId===((Ut=Ce(n).user)==null?void 0:Ut.uid)?"bubble-out":"bubble-in"])},[F("audio",{controls:"",src:H.mediaUrl,style:{width:"160px",height:"32px"}},null,8,Z2)],2)):H.type==="file"?(re(),ue("div",{key:3,class:Ot(["bubble",H.senderId===((Pt=Ce(n).user)==null?void 0:Pt.uid)?"bubble-out":"bubble-in"]),style:{display:"flex","align-items":"center",gap:"8px",cursor:"pointer"},onClick:ee=>I(H)},[(re(),ue("svg",tF,[...L[6]||(L[6]=[F("path",{d:"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"},null,-1)])])),F("span",nF,ot(H.fileName||"File"),1)],10,eF)):Me("",!0)],40,Y2),w(H)?(re(),ue("div",sF,[(re(!0),ue(Dt,null,Uo(R(H),(ee,ae)=>(re(),ue("span",{key:ae,class:"reaction",onClick:be=>Ce(s).reactToMessage(t.convoId,H.id,Ce(n).user.uid,ae)},ot(ae)+" "+ot(ee.length),9,iF))),128))])):Me("",!0),F("div",{class:Ot(["msg-meta",H.senderId===((U=Ce(n).user)==null?void 0:U.uid)?"meta-out":"meta-in"])},[Di(ot(E(H.createdAt))+" ",1),H.senderId===((se=Ce(n).user)==null?void 0:se.uid)?(re(),ue("span",rF,ot(H.status==="seen"?"✓✓":"✓"),1)):Me("",!0)],2)]),F("button",{class:"react-btn",onClick:ee=>C(H),title:"React"},[...L[7]||(L[7]=[Ql('<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-d875a3fc><circle cx="12" cy="12" r="10" data-v-d875a3fc></circle><path d="M8 13s1.5 2 4 2 4-2 4-2" data-v-d875a3fc></path><line x1="9" y1="9" x2="9.01" y2="9" data-v-d875a3fc></line><line x1="15" y1="9" x2="15.01" y2="9" data-v-d875a3fc></line></svg>',1)])],8,oF)],2)}),128)),Ce(s).typingInActive.filter(H=>{var Ae;return H!==((Ae=Ce(n).user)==null?void 0:Ae.uid)}).length>0?(re(),ue("div",aF,[...L[8]||(L[8]=[F("div",{class:"bubble bubble-in",style:{padding:"10px 14px"}},[F("span",{class:"typing-dot"}),F("span",{class:"typing-dot"}),F("span",{class:"typing-dot"})],-1)])])):Me("",!0)],512),F("div",lF,[F("div",cF,[F("button",{class:"action-btn",onClick:L[0]||(L[0]=H=>Q.$refs.imageInput.click()),title:"Image"},[...L[9]||(L[9]=[F("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[F("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),F("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),F("polyline",{points:"21 15 16 10 5 21"})],-1)])]),F("button",{class:"action-btn",onClick:L[1]||(L[1]=H=>Q.$refs.fileInput.click()),title:"File"},[...L[10]||(L[10]=[F("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[F("path",{d:"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"})],-1)])]),F("button",{class:Ot(["action-btn",{recording:c.value}]),onClick:j,title:"Voice note"},[...L[11]||(L[11]=[Ql('<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-d875a3fc><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" data-v-d875a3fc></path><path d="M19 10v2a7 7 0 0 1-14 0v-2" data-v-d875a3fc></path><line x1="12" y1="19" x2="12" y2="23" data-v-d875a3fc></line><line x1="8" y1="23" x2="16" y2="23" data-v-d875a3fc></line></svg>',1)])],2),F("button",{class:"action-btn",onClick:L[2]||(L[2]=H=>o.value=!o.value),title:"Emoji"},[...L[12]||(L[12]=[Ql('<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-d875a3fc><circle cx="12" cy="12" r="10" data-v-d875a3fc></circle><path d="M8 13s1.5 2 4 2 4-2 4-2" data-v-d875a3fc></path><line x1="9" y1="9" x2="9.01" y2="9" data-v-d875a3fc></line><line x1="15" y1="9" x2="15.01" y2="9" data-v-d875a3fc></line></svg>',1)])]),F("input",{ref:"imageInput",type:"file",accept:"image/*,video/*",hidden:"",onChange:x},null,544),F("input",{ref:"fileInput",type:"file",hidden:"",onChange:z},null,544)]),o.value?(re(),ue("div",uF,[F("div",hF,[(re(),ue(Dt,null,Uo(_,H=>F("button",{key:H,class:"emoji-btn",onClick:Ae=>D(H)},ot(H),9,dF)),64))])])):Me("",!0),c.value?(re(),ue("div",fF,[L[13]||(L[13]=F("span",{class:"rec-dot"},null,-1)),F("span",null,"Recording "+ot(u.value)+"s — tap microphone to send",1)])):Me("",!0),F("div",pF,[eE(F("input",{"onUpdate:modelValue":L[3]||(L[3]=H=>i.value=H),class:"input",style:{flex:"1",padding:"10px 14px","font-size":"14px"},placeholder:"Message...",onKeydown:Gb(dd(O,["prevent"]),["enter"]),onInput:V},null,40,gF),[[_c,i.value]]),F("button",{class:"btn-send",onClick:O,disabled:!i.value.trim()&&!c.value},[...L[14]||(L[14]=[F("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"white"},[F("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),F("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})],-1)])],8,_F)])]),(re(),ji(rE,{to:"body"},[et(Mr,{name:"pop"},{default:pn(()=>[a.value?(re(),ue("div",{key:0,class:"react-overlay",onClick:L[4]||(L[4]=dd(H=>a.value=null,["self"]))},[F("div",mF,[(re(),ue(Dt,null,Uo(T,H=>F("button",{key:H,class:"emoji-btn",style:{"font-size":"24px"},onClick:Ae=>v(H)},ot(H),9,yF)),64))])])):Me("",!0)]),_:1})]))]))}},EF=dg(vF,[["__scopeId","data-v-d875a3fc"]]),wF={class:"bubble-inner"},TF={key:0,class:"bubble-badge"},IF={class:"float-header"},CF={key:0,style:{display:"flex","align-items":"center",gap:"10px",flex:"1","min-width":"0"}},AF=["src"],RF={style:{flex:"1","min-width":"0"}},bF={style:{"font-weight":"700","font-size":"14px","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},SF={style:{"font-size":"11px",color:"var(--accent)"}},PF={key:1,style:{display:"flex","align-items":"center",gap:"8px",flex:"1"}},kF={style:{display:"flex",gap:"4px"}},NF={class:"float-body"},xF={key:0,class:"float-convo-list"},OF={style:{padding:"8px 12px"}},DF={key:0,style:{"text-align":"center",padding:"32px",color:"var(--text-3)","font-size":"13px"}},MF=["onClick"],LF={style:{position:"relative","flex-shrink":"0"}},VF=["src"],FF={key:0,class:"online-dot",style:{position:"absolute",bottom:"-1px",right:"-1px",width:"8px",height:"8px",border:"1.5px solid var(--bg-2)"}},UF={style:{flex:"1","min-width":"0"}},BF={style:{"font-size":"13px","font-weight":"700","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},$F={style:{"font-size":"11px",color:"var(--text-3)","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},jF={__name:"FloatingChat",setup(t){const e=Ju(),n=fo(),s=Le(""),i=Le({x:window.innerWidth-80,y:window.innerHeight-160}),r=Le(!1);let o={x:0,y:0};function a(D){r.value=!1;const x=D.clientX,z=D.clientY;o={x:D.clientX-i.value.x,y:D.clientY-i.value.y};function j(m){(Math.abs(m.clientX-x)>5||Math.abs(m.clientY-z)>5)&&(r.value=!0),i.value={x:Math.max(0,Math.min(window.innerWidth-60,m.clientX-o.x)),y:Math.max(0,Math.min(window.innerHeight-60,m.clientY-o.y))}}function C(){window.removeEventListener("mousemove",j),window.removeEventListener("mouseup",C)}window.addEventListener("mousemove",j),window.addEventListener("mouseup",C)}function c(D){const x=D.touches[0];o={x:x.clientX-i.value.x,y:x.clientY-i.value.y};function z(C){const m=C.touches[0];i.value={x:Math.max(0,Math.min(window.innerWidth-60,m.clientX-o.x)),y:Math.max(0,Math.min(window.innerHeight-60,m.clientY-o.y))}}function j(){window.removeEventListener("touchmove",z),window.removeEventListener("touchend",j)}window.addEventListener("touchmove",z),window.addEventListener("touchend",j)}const u=st(()=>0),h=st(()=>{if(!s.value)return e.conversations;const D=s.value.toLowerCase();return e.conversations.filter(x=>d(x).toLowerCase().includes(D))});function d(D){var z,j;if(D.type==="group")return D.name;const x=(z=D.members)==null?void 0:z.find(C=>{var m;return C!==((m=n.user)==null?void 0:m.uid)});return((j=e.allUsers.find(C=>C.uid===x))==null?void 0:j.displayName)||"User"}function p(D){var j;if(D.type==="group")return D.avatar||`https://api.dicebear.com/7.x/identicon/svg?seed=${D.id}`;const x=(j=D.members)==null?void 0:j.find(C=>{var m;return C!==((m=n.user)==null?void 0:m.uid)}),z=e.allUsers.find(C=>C.uid===x);return(z==null?void 0:z.photoURL)||`https://api.dicebear.com/7.x/adventurer/svg?seed=${x}`}function _(D){var z;if(D.type==="group")return!1;const x=(z=D.members)==null?void 0:z.find(j=>{var C;return j!==((C=n.user)==null?void 0:C.uid)});return e.isOnline(x)}const T=st(()=>e.activeConvo),S=st(()=>d(T.value||{})),P=st(()=>p(T.value||{})),V=st(()=>{var x,z;if(!T.value)return"";if(T.value.type==="group")return`${((x=T.value.members)==null?void 0:x.length)||0} members`;const D=(z=T.value.members)==null?void 0:z.find(j=>{var C;return j!==((C=n.user)==null?void 0:C.uid)});return e.isOnline(D)?"Online":"Offline"}),O=st(()=>e.typingInActive.filter(x=>{var z;return x!==((z=n.user)==null?void 0:z.uid)}).length?"typing...":"");return(D,x)=>{const z=rd("router-link");return re(),ue(Dt,null,[et(Mr,{name:"pop"},{default:pn(()=>[!Ce(e).floatOpen&&!Ce(e).floatMinimized?(re(),ue("div",{key:0,class:"float-bubble",style:Ha({left:i.value.x+"px",top:i.value.y+"px"}),onMousedown:a,onTouchstartPassive:c,onClick:x[0]||(x[0]=dd(j=>Ce(e).toggleFloat(),["stop"]))},[F("div",wF,[x[6]||(x[6]=F("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"white"},[F("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})],-1)),u.value>0?(re(),ue("span",TF,ot(u.value),1)):Me("",!0)])],36)):Me("",!0)]),_:1}),et(Mr,{name:"slide-up"},{default:pn(()=>[Ce(e).floatOpen?(re(),ue("div",{key:0,class:Ot(["float-window",{"has-convo":Ce(e).activeConvoId}])},[F("div",IF,[Ce(e).activeConvoId?(re(),ue("div",CF,[F("button",{class:"btn-icon-sm",onClick:x[1]||(x[1]=j=>{Ce(e).activeConvoId=null,Ce(e).messages=[]})},[...x[7]||(x[7]=[F("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[F("polyline",{points:"15 18 9 12 15 6"})],-1)])]),F("img",{src:P.value,class:"avatar-sm",style:{border:"1.5px solid var(--primary)"}},null,8,AF),F("div",RF,[F("div",bF,ot(S.value),1),F("div",SF,ot(O.value||V.value),1)])])):(re(),ue("div",PF,[...x[8]||(x[8]=[F("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"var(--primary)","stroke-width":"2"},[F("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})],-1),F("span",{style:{"font-weight":"700","font-size":"14px","letter-spacing":"-0.2px"}},"Messages",-1)])])),F("div",kF,[F("button",{class:"btn-icon-sm",onClick:x[2]||(x[2]=j=>Ce(e).minimizeFloat()),title:"Minimize"},[...x[9]||(x[9]=[F("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[F("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1)])]),F("button",{class:"btn-icon-sm",onClick:x[3]||(x[3]=j=>Ce(e).floatOpen=!1),title:"Close"},[...x[10]||(x[10]=[F("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[F("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),F("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])])])]),F("div",NF,[Ce(e).activeConvoId?(re(),ji(EF,{key:1,"convo-id":Ce(e).activeConvoId},null,8,["convo-id"])):(re(),ue("div",xF,[F("div",OF,[eE(F("input",{"onUpdate:modelValue":x[4]||(x[4]=j=>s.value=j),class:"input",style:{"font-size":"12px",padding:"8px 12px"},placeholder:"Search conversations..."},null,512),[[_c,s.value]])]),Ce(e).conversations.length===0?(re(),ue("div",DF,[x[12]||(x[12]=F("p",null,"No conversations yet",-1)),et(z,{to:"/users",class:"btn btn-primary btn-sm",style:{"margin-top":"8px"},onClick:x[5]||(x[5]=j=>Ce(e).floatOpen=!1)},{default:pn(()=>[...x[11]||(x[11]=[Di(" Find people ",-1)])]),_:1})])):Me("",!0),(re(!0),ue(Dt,null,Uo(h.value,j=>{var C;return re(),ue("div",{key:j.id,class:"float-convo-item",onClick:m=>Ce(e).openChat(j.id)},[F("div",LF,[F("img",{src:p(j),class:"avatar-sm"},null,8,VF),_(j)?(re(),ue("span",FF)):Me("",!0)]),F("div",UF,[F("div",BF,ot(d(j)),1),F("div",$F,ot(((C=j.lastMessage)==null?void 0:C.text)||"No messages"),1)])],8,MF)}),128))]))])],2)):Me("",!0)]),_:1})],64)}}},qF=dg(jF,[["__scopeId","data-v-730a359b"]]),WF={key:0,class:"incoming-call"},HF={class:"incoming-inner"},GF=["src"],KF={style:{flex:"1"}},zF={style:{"font-size":"11px",color:"var(--text-3)","margin-bottom":"2px"}},QF={style:{"font-weight":"700","font-size":"16px"}},YF={key:0,class:"call-screen"},XF={class:"call-overlay"},JF={class:"call-info"},ZF=["src"],eU={style:{"font-size":"22px","font-weight":"800","margin-top":"12px"}},tU={style:{color:"rgba(255,255,255,0.6)","font-size":"14px","margin-top":"4px"}},nU={class:"call-controls"},sU={width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},iU={key:0,d:"M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"},rU={key:1,d:"M19 10v2a7 7 0 0 1-14 0v-2"},oU={key:2,x1:"12",y1:"19",x2:"12",y2:"23"},aU={key:3,x1:"8",y1:"23",x2:"16",y2:"23"},lU={key:4,x1:"1",y1:"1",x2:"23",y2:"23"},cU={key:5,d:"M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"},uU={key:6,d:"M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"},hU={width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},dU={key:0,x1:"1",y1:"1",x2:"23",y2:"23"},fU={width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},pU={key:0,d:"M15.54 8.46a5 5 0 0 1 0 7.07"},gU={__name:"CallModal",setup(t,{expose:e}){const n=fo();Ju();const s=Le(null),i=Le(!1),r=Le(!1),o=Le(!1),a=Le(!1),c=Le(!0),u=Le(0),h=Le(""),d=Le(""),p=Le(null),_=Le(null);let T=null,S=null,P=null,V=null,O=null;const D=st(()=>{const oe=Math.floor(u.value/60).toString().padStart(2,"0"),he=(u.value%60).toString().padStart(2,"0");return`${oe}:${he}`}),x={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"}]};async function z(oe,he="voice"){r.value=he==="video";const L=(await La(vs(pt,"users",oe))).data();h.value=(L==null?void 0:L.displayName)||"User",d.value=(L==null?void 0:L.photoURL)||`https://api.dicebear.com/7.x/adventurer/svg?seed=${oe}`;const H=await Pr(fn(pt,"calls"),{callerId:n.user.uid,callerName:n.user.displayName,callerAvatar:n.user.photoURL||`https://api.dicebear.com/7.x/adventurer/svg?seed=${n.user.uid}`,calleeId:oe,type:he,status:"ringing",createdAt:new Date});O=H.id,T=new RTCPeerConnection(x),S=await navigator.mediaDevices.getUserMedia({audio:!0,video:he==="video"}),S.getTracks().forEach(Ge=>T.addTrack(Ge,S)),_.value&&he==="video"&&(_.value.srcObject=S),T.ontrack=Ge=>{p.value&&(p.value.srcObject=Ge.streams[0])};const Ae=fn(pt,"calls",O,"offerCandidates");T.onicecandidate=Ge=>{Ge.candidate&&Pr(Ae,Ge.candidate.toJSON())};const Ue=await T.createOffer();await T.setLocalDescription(Ue),await Ko(H,{offer:{sdp:Ue.sdp,type:Ue.type}},{merge:!0}),V=vr(H,async Ge=>{const Re=Ge.data();Re!=null&&Re.answer&&T.currentRemoteDescription===null&&(await T.setRemoteDescription(new RTCSessionDescription(Re.answer)),i.value=!0,I()),((Re==null?void 0:Re.status)==="ended"||(Re==null?void 0:Re.status)==="declined")&&m()}),vr(fn(pt,"calls",O,"answerCandidates"),Ge=>{Ge.docChanges().forEach(Re=>{Re.type==="added"&&T.addIceCandidate(new RTCIceCandidate(Re.doc.data()))})})}async function j(){var Ae;if(!s.value)return;O=s.value.id,r.value=s.value.type==="video",h.value=s.value.callerName,d.value=s.value.callerAvatar,T=new RTCPeerConnection(x),S=await navigator.mediaDevices.getUserMedia({audio:!0,video:r.value}),S.getTracks().forEach(Ue=>T.addTrack(Ue,S)),_.value&&r.value&&(_.value.srcObject=S),T.ontrack=Ue=>{p.value&&(p.value.srcObject=Ue.streams[0])};const oe=vs(pt,"calls",O),Q=(Ae=(await La(oe)).data())==null?void 0:Ae.offer;await T.setRemoteDescription(new RTCSessionDescription(Q));const L=fn(pt,"calls",O,"answerCandidates");T.onicecandidate=Ue=>{Ue.candidate&&Pr(L,Ue.candidate.toJSON())};const H=await T.createAnswer();await T.setLocalDescription(H),await Ko(oe,{answer:{sdp:H.sdp,type:H.type},status:"active"},{merge:!0}),vr(fn(pt,"calls",O,"offerCandidates"),Ue=>{Ue.docChanges().forEach(Ge=>{Ge.type==="added"&&T.addIceCandidate(new RTCIceCandidate(Ge.doc.data()))})}),s.value=null,i.value=!0,I()}async function C(){var oe;(oe=s.value)!=null&&oe.id&&await Ko(vs(pt,"calls",s.value.id),{status:"declined"},{merge:!0}),s.value=null}async function m(){clearInterval(P),u.value=0,i.value=!1,s.value=null,S&&(S.getTracks().forEach(oe=>oe.stop()),S=null),T&&(T.close(),T=null),V&&(V(),V=null),O&&(await Ko(vs(pt,"calls",O),{status:"ended"},{merge:!0}),O=null)}function v(){o.value=!o.value,S==null||S.getAudioTracks().forEach(oe=>oe.enabled=!o.value)}function w(){a.value=!a.value,S==null||S.getVideoTracks().forEach(oe=>oe.enabled=!a.value)}function R(){c.value=!c.value}function I(){P=setInterval(()=>u.value++,1e3)}let E=null;return za(()=>{var he;if(!((he=n.user)!=null&&he.uid))return;const oe=fn(pt,"calls");E=vr(oe,Q=>{Q.docChanges().forEach(L=>{var H;if(L.type==="added"){const Ae=L.doc.data();Ae.calleeId===n.user.uid&&Ae.status==="ringing"&&(s.value={id:L.doc.id,...Ae})}if(L.type==="modified"){const Ae=L.doc.data();Ae.calleeId===n.user.uid&&(Ae.status==="ended"||Ae.status==="declined")&&((H=s.value)==null?void 0:H.id)===L.doc.id&&(s.value=null)}})})}),au(()=>{E&&E(),m()}),e({startCall:z}),(oe,he)=>(re(),ji(rE,{to:"body"},[et(Mr,{name:"slide-up"},{default:pn(()=>[s.value&&!i.value?(re(),ue("div",WF,[F("div",HF,[F("img",{src:s.value.callerAvatar,class:"avatar-lg",style:{border:"3px solid var(--accent)",animation:"pulse-ring 1.5s infinite"}},null,8,GF),F("div",KF,[F("p",zF,"Incoming "+ot(s.value.type)+" call",1),F("p",QF,ot(s.value.callerName),1)]),F("div",{style:{display:"flex",gap:"12px"}},[F("button",{class:"call-btn decline",onClick:C},[...he[0]||(he[0]=[F("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[F("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),F("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])]),F("button",{class:"call-btn accept",onClick:j},[...he[1]||(he[1]=[F("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[F("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.31h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l1.77-1.77a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})],-1)])])])])])):Me("",!0)]),_:1}),et(Mr,{name:"fade"},{default:pn(()=>[i.value?(re(),ue("div",YF,[F("video",{ref_key:"remoteVideo",ref:p,class:"remote-video",autoplay:"",playsinline:""},null,512),r.value?(re(),ue("video",{key:0,ref_key:"localVideo",ref:_,class:"local-video",autoplay:"",playsinline:"",muted:""},null,512)):Me("",!0),F("div",XF,[F("div",JF,[F("img",{src:d.value,class:"avatar-xl",style:{border:"3px solid rgba(255,255,255,0.3)"}},null,8,ZF),F("h2",eU,ot(h.value),1),F("p",tU,ot(D.value),1)]),F("div",nU,[F("button",{class:Ot(["ctrl-btn",{active:o.value}]),onClick:v},[(re(),ue("svg",sU,[o.value?Me("",!0):(re(),ue("path",iU)),o.value?Me("",!0):(re(),ue("path",rU)),o.value?Me("",!0):(re(),ue("line",oU)),o.value?Me("",!0):(re(),ue("line",aU)),o.value?(re(),ue("line",lU)):Me("",!0),o.value?(re(),ue("path",cU)):Me("",!0),o.value?(re(),ue("path",uU)):Me("",!0)])),F("span",null,ot(o.value?"Unmute":"Mute"),1)],2),r.value?(re(),ue("button",{key:0,class:Ot(["ctrl-btn",{active:a.value}]),onClick:w},[(re(),ue("svg",hU,[he[2]||(he[2]=F("polygon",{points:"23 7 16 12 23 17 23 7"},null,-1)),he[3]||(he[3]=F("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2",ry:"2"},null,-1)),a.value?(re(),ue("line",dU)):Me("",!0)])),he[4]||(he[4]=F("span",null,"Camera",-1))],2)):Me("",!0),F("button",{class:"ctrl-btn",onClick:R},[(re(),ue("svg",fU,[he[5]||(he[5]=F("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"},null,-1)),c.value?(re(),ue("path",pU)):Me("",!0)])),he[6]||(he[6]=F("span",null,"Speaker",-1))]),F("button",{class:"ctrl-btn end-btn",onClick:m},[...he[7]||(he[7]=[F("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5"},[F("path",{d:"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.42 19.42 0 0 1 4.9 8.81C4 6.56 3.56 4.44 3.56 4.44A2 2 0 0 1 5.54 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L9.5 9.9"}),F("line",{x1:"23",y1:"1",x2:"1",y2:"23"})],-1),F("span",null,"End",-1)])])])])])):Me("",!0)]),_:1})]))}},_U=dg(gU,[["__scopeId","data-v-631282b8"]]),mU={id:"app-root"},yU={key:0,class:"bottom-nav"},vU={key:0,class:"badge badge-primary",style:{position:"absolute",top:"4px",right:"12px",padding:"2px 5px","font-size":"9px"}},EU=["src"],wU={key:1,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},TU={key:1,class:"splash"},IU={__name:"App",setup(t){const e=fo(),n=Ju(),s=st(()=>0);return za(()=>{e.isLoggedIn&&(n.watchPresence(),n.watchConversations(e.user.uid),n.fetchUsers())}),(i,r)=>{const o=rd("router-view"),a=rd("router-link");return re(),ue("div",mU,[Ce(e).loading?(re(),ue("div",TU,[...r[6]||(r[6]=[Ql('<div class="splash-logo"><svg width="48" height="48" viewBox="0 0 48 48"><circle cx="24" cy="24" r="22" fill="url(#g1)"></circle><path d="M14 18h20M14 24h14M14 30h10" stroke="white" stroke-width="2.5" stroke-linecap="round"></path><defs><linearGradient id="g1" x1="0" y1="0" x2="48" y2="48"><stop offset="0%" stop-color="#7c6bfa"></stop><stop offset="100%" stop-color="#fa6bbb"></stop></linearGradient></defs></svg><span>HybridChat</span></div><div class="splash-dots"><span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span></div>',2)])])):(re(),ue(Dt,{key:0},[et(o,null,{default:pn(({Component:c})=>[et(Mr,{name:"fade",mode:"out-in"},{default:pn(()=>[(re(),ji(RR(c)))]),_:2},1024)]),_:1}),Ce(e).isLoggedIn?(re(),ue("nav",yU,[et(a,{to:"/home",class:Ot(["nav-item",{active:i.$route.path==="/home"}])},{default:pn(()=>[...r[0]||(r[0]=[F("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[F("path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),F("polyline",{points:"9,22 9,12 15,12 15,22"})],-1),Di(" Home ",-1)])]),_:1},8,["class"]),et(a,{to:"/chats",class:Ot(["nav-item",{active:i.$route.path==="/chats"}])},{default:pn(()=>[r[1]||(r[1]=F("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[F("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})],-1)),r[2]||(r[2]=Di(" Chats ",-1)),s.value>0?(re(),ue("span",vU,ot(s.value),1)):Me("",!0)]),_:1},8,["class"]),et(a,{to:"/users",class:Ot(["nav-item",{active:i.$route.path==="/users"}])},{default:pn(()=>[...r[3]||(r[3]=[F("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[F("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),F("circle",{cx:"9",cy:"7",r:"4"}),F("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),F("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})],-1),Di(" People ",-1)])]),_:1},8,["class"]),et(a,{to:"/profile",class:Ot(["nav-item",{active:i.$route.path==="/profile"}])},{default:pn(()=>{var c;return[(c=Ce(e).user)!=null&&c.photoURL?(re(),ue("img",{key:0,src:Ce(e).user.photoURL,class:"avatar-sm",style:Ha([{"border-radius":"50%",border:"2px solid transparent"},i.$route.path==="/profile"?"border-color:var(--primary)":""])},null,12,EU)):(re(),ue("svg",wU,[...r[4]||(r[4]=[F("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},null,-1),F("circle",{cx:"12",cy:"7",r:"4"},null,-1)])])),r[5]||(r[5]=Di(" Profile ",-1))]}),_:1},8,["class"])])):Me("",!0),Ce(e).isLoggedIn?(re(),ji(qF,{key:1})):Me("",!0),Ce(e).isLoggedIn?(re(),ji(_U,{key:2})):Me("",!0)],64))])}}},fg=Qb(IU),CU=Jb();fg.use(CU);fg.use(HC);const AU=fo();AU.init().then(()=>{fg.mount("#app")});export{$h as A,fn as B,pt as C,vr as D,au as E,Dt as F,Uo as G,Ha as H,Ny as I,OU as J,vs as K,Xh as L,Pr as M,cs as N,st as O,rd as P,Wk as Q,Vo as R,ky as S,Mr as T,xU as U,RR as V,Cf as W,dg as _,Ju as a,F as b,ue as c,Ql as d,et as e,dd as f,eE as g,Me as h,RU as i,Ub as j,Di as k,Ce as l,ji as m,Ot as n,rE as o,Ga as p,bU as q,Le as r,re as s,ot as t,fo as u,_c as v,pn as w,za as x,Bh as y,by as z};
