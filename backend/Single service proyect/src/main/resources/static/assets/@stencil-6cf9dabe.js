const b={allRenderFn:!1,cmpDidLoad:!0,cmpDidUnload:!1,cmpDidUpdate:!0,cmpDidRender:!0,cmpWillLoad:!0,cmpWillUpdate:!0,cmpWillRender:!0,connectedCallback:!0,disconnectedCallback:!0,element:!0,event:!0,hasRenderFn:!0,lifecycle:!0,hostListener:!0,hostListenerTargetWindow:!0,hostListenerTargetDocument:!0,hostListenerTargetBody:!0,hostListenerTargetParent:!1,hostListenerTarget:!0,member:!0,method:!0,mode:!0,observeAttribute:!0,prop:!0,propMutable:!0,reflect:!0,scoped:!0,shadowDom:!0,slot:!0,cssAnnotations:!0,state:!0,style:!0,formAssociated:!1,svg:!0,updatable:!0,vdomAttribute:!0,vdomXlink:!0,vdomClass:!0,vdomFunctional:!0,vdomKey:!0,vdomListener:!0,vdomRef:!0,vdomPropOrAttr:!0,vdomRender:!0,vdomStyle:!0,vdomText:!0,watchCallback:!0,taskQueue:!0,hotModuleReplacement:!1,isDebug:!1,isDev:!1,isTesting:!1,hydrateServerSide:!1,hydrateClientSide:!1,lifecycleDOMEvents:!1,lazyLoad:!1,profile:!1,slotRelocation:!0,appendChildSlotFix:!1,cloneNodeFix:!1,hydratedAttribute:!1,hydratedClass:!0,scriptDataOpts:!1,scopedSlotTextContentFix:!1,shadowDomShim:!1,slotChildNodesFix:!1,invisiblePrehydration:!0,propBoolean:!0,propNumber:!0,propString:!0,constructableCSS:!0,cmpShouldUpdate:!0,devTools:!1,shadowDelegatesFocus:!0,initializeNextTick:!1,asyncLoading:!1,asyncQueue:!1,transformTagName:!1,attachStyles:!0,patchPseudoShadowDom:!1};let T,te,D,se=!1,U=!1,F=!1,g=!1,W=null,_=!1;const nt={isDev:!1,isBrowser:!0,isServer:!1,isTesting:!1},lt=e=>{const t=new URL(e,p.$resourcesUrl$);return t.origin!==A.location.origin?t.href:t.pathname},m=(e,t="")=>()=>{},z="http://www.w3.org/1999/xlink",q={},ye="http://www.w3.org/2000/svg",ve="http://www.w3.org/1999/xhtml",Se=e=>e!=null,H=e=>(e=typeof e,e==="object"||e==="function");function me(e){var t,n,s;return(s=(n=(t=e.head)===null||t===void 0?void 0:t.querySelector('meta[name="csp-nonce"]'))===null||n===void 0?void 0:n.getAttribute("content"))!==null&&s!==void 0?s:void 0}const ne=(e,t,...n)=>{let s=null,l=null,c=null,o=!1,i=!1;const r=[],$=f=>{for(let d=0;d<f.length;d++)s=f[d],Array.isArray(s)?$(s):s!=null&&typeof s!="boolean"&&((o=typeof e!="function"&&!H(s))&&(s=String(s)),o&&i?r[r.length-1].$text$+=s:r.push(o?P(null,s):s),i=o)};if($(n),t){t.key&&(l=t.key),t.name&&(c=t.name);{const f=t.className||t.class;f&&(t.class=typeof f!="object"?f:Object.keys(f).filter(d=>f[d]).join(" "))}}if(typeof e=="function")return e(t===null?{}:t,r,Te);const a=P(e,null);return a.$attrs$=t,r.length>0&&(a.$children$=r),a.$key$=l,a.$name$=c,a},P=(e,t)=>{const n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};return n.$attrs$=null,n.$key$=null,n.$name$=null,n},ke={},be=e=>e&&e.$tag$===ke,Te={forEach:(e,t)=>e.map(Q).forEach(t),map:(e,t)=>e.map(Q).map(t).map(Le)},Q=e=>({vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}),Le=e=>{if(typeof e.vtag=="function"){const n=Object.assign({},e.vattrs);return e.vkey&&(n.key=e.vkey),e.vname&&(n.name=e.vname),ne(e.vtag,n,...e.vchildren||[])}const t=P(e.vtag,e.vtext);return t.$attrs$=e.vattrs,t.$children$=e.vchildren,t.$key$=e.vkey,t.$name$=e.vname,t},xe=e=>pe.map(t=>t(e)).find(t=>!!t),ot=e=>pe.push(e),rt=e=>k(e).$modeName$,Re=(e,t)=>e!=null&&!H(e)?t&4?e==="false"?!1:e===""||!!e:t&2?parseFloat(e):t&1?String(e):e:e,Ee=e=>e,it=(e,t,n)=>{const s=Ee(e);return{emit:l=>Ae(s,t,{bubbles:!!(n&4),composed:!!(n&2),cancelable:!!(n&1),detail:l})}},Ae=(e,t,n)=>{const s=p.ce(t,n);return e.dispatchEvent(s),s},K=new WeakMap,Oe=(e,t,n)=>{let s=B.get(e);et&&n?(s=s||new CSSStyleSheet,typeof s=="string"?s=t:s.replaceSync(t)):s=t,B.set(e,s)},Ue=(e,t,n)=>{var s;const l=le(t,n),c=B.get(l);if(e=e.nodeType===11?e:y,c)if(typeof c=="string"){e=e.head||e;let o=K.get(e),i;if(o||K.set(e,o=new Set),!o.has(l)){{i=y.createElement("style"),i.innerHTML=c;const r=(s=p.$nonce$)!==null&&s!==void 0?s:me(y);r!=null&&i.setAttribute("nonce",r),e.insertBefore(i,e.querySelector("link"))}o&&o.add(l)}}else e.adoptedStyleSheets.includes(c)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,c]);return l},Pe=e=>{const t=e.$cmpMeta$,n=e.$hostElement$,s=t.$flags$,l=m("attachStyles",t.$tagName$),c=Ue(n.shadowRoot?n.shadowRoot:n.getRootNode(),t,e.$modeName$);s&10&&(n["s-sc"]=c,n.classList.add(c+"-h"),s&2&&n.classList.add(c+"-s")),l()},le=(e,t)=>"sc-"+(t&&e.$flags$&32?e.$tagName$+"-"+t:e.$tagName$),X=(e,t,n,s,l,c)=>{if(n!==s){let o=V(e,t),i=t.toLowerCase();if(t==="class"){const r=e.classList,$=G(n),a=G(s);r.remove(...$.filter(f=>f&&!a.includes(f))),r.add(...a.filter(f=>f&&!$.includes(f)))}else if(t==="style"){for(const r in n)(!s||s[r]==null)&&(r.includes("-")?e.style.removeProperty(r):e.style[r]="");for(const r in s)(!n||s[r]!==n[r])&&(r.includes("-")?e.style.setProperty(r,s[r]):e.style[r]=s[r])}else if(t!=="key")if(t==="ref")s&&s(e);else if(!e.__lookupSetter__(t)&&t[0]==="o"&&t[1]==="n")t[2]==="-"?t=t.slice(3):V(A,i)?t=i.slice(2):t=i[2]+t.slice(3),n&&p.rel(e,t,n,!1),s&&p.ael(e,t,s,!1);else{const r=H(s);if((o||r&&s!==null)&&!l)try{if(e.tagName.includes("-"))e[t]=s;else{const a=s==null?"":s;t==="list"?o=!1:(n==null||e[t]!=a)&&(e[t]=a)}}catch(a){}let $=!1;i!==(i=i.replace(/^xlink\:?/,""))&&(t=i,$=!0),s==null||s===!1?(s!==!1||e.getAttribute(t)==="")&&($?e.removeAttributeNS(z,t):e.removeAttribute(t)):(!o||c&4||l)&&!r&&(s=s===!0?"":s,$?e.setAttributeNS(z,t,s):e.setAttribute(t,s))}}},je=/\s/,G=e=>e?e.split(je):[],oe=(e,t,n,s)=>{const l=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$,c=e&&e.$attrs$||q,o=t.$attrs$||q;for(s in c)s in o||X(l,s,c[s],void 0,n,t.$flags$);for(s in o)X(l,s,c[s],o[s],n,t.$flags$)},j=(e,t,n,s)=>{const l=t.$children$[n];let c=0,o,i,r;if(se||(F=!0,l.$tag$==="slot"&&(T&&s.classList.add(T+"-s"),l.$flags$|=l.$children$?2:1)),l.$text$!==null)o=l.$elm$=y.createTextNode(l.$text$);else if(l.$flags$&1)o=l.$elm$=y.createTextNode("");else{if(g||(g=l.$tag$==="svg"),o=l.$elm$=y.createElementNS(g?ye:ve,l.$flags$&2?"slot-fb":l.$tag$),g&&l.$tag$==="foreignObject"&&(g=!1),oe(null,l,g),Se(T)&&o["s-si"]!==T&&o.classList.add(o["s-si"]=T),l.$children$)for(c=0;c<l.$children$.length;++c)i=j(e,l,c,o),i&&o.appendChild(i);l.$tag$==="svg"?g=!1:o.tagName==="foreignObject"&&(g=!0)}return o["s-hn"]=D,l.$flags$&3&&(o["s-sr"]=!0,o["s-cr"]=te,o["s-sn"]=l.$name$||"",r=e&&e.$children$&&e.$children$[n],r&&r.$tag$===l.$tag$&&e.$elm$&&R(e.$elm$,!1)),o},R=(e,t)=>{p.$flags$|=1;const n=e.childNodes;for(let s=n.length-1;s>=0;s--){const l=n[s];l["s-hn"]!==D&&l["s-ol"]&&(ce(l).insertBefore(l,N(l)),l["s-ol"].remove(),l["s-ol"]=void 0,F=!0),t&&R(l,t)}p.$flags$&=-2},re=(e,t,n,s,l,c)=>{let o=e["s-cr"]&&e["s-cr"].parentNode||e,i;for(o.shadowRoot&&o.tagName===D&&(o=o.shadowRoot);l<=c;++l)s[l]&&(i=j(null,n,l,e),i&&(s[l].$elm$=i,o.insertBefore(i,N(t))))},ie=(e,t,n)=>{for(let s=t;s<=n;++s){const l=e[s];if(l){const c=l.$elm$;fe(l),c&&(U=!0,c["s-ol"]?c["s-ol"].remove():R(c,!0),c.remove())}}},Be=(e,t,n,s)=>{let l=0,c=0,o=0,i=0,r=t.length-1,$=t[0],a=t[r],f=s.length-1,d=s[0],u=s[f],v,S;for(;l<=r&&c<=f;)if($==null)$=t[++l];else if(a==null)a=t[--r];else if(d==null)d=s[++c];else if(u==null)u=s[--f];else if(O($,d))L($,d),$=t[++l],d=s[++c];else if(O(a,u))L(a,u),a=t[--r],u=s[--f];else if(O($,u))($.$tag$==="slot"||u.$tag$==="slot")&&R($.$elm$.parentNode,!1),L($,u),e.insertBefore($.$elm$,a.$elm$.nextSibling),$=t[++l],u=s[--f];else if(O(a,d))($.$tag$==="slot"||u.$tag$==="slot")&&R(a.$elm$.parentNode,!1),L(a,d),e.insertBefore(a.$elm$,$.$elm$),a=t[--r],d=s[++c];else{for(o=-1,i=l;i<=r;++i)if(t[i]&&t[i].$key$!==null&&t[i].$key$===d.$key$){o=i;break}o>=0?(S=t[o],S.$tag$!==d.$tag$?v=j(t&&t[c],n,o,e):(L(S,d),t[o]=void 0,v=S.$elm$),d=s[++c]):(v=j(t&&t[c],n,c,e),d=s[++c]),v&&ce($.$elm$).insertBefore(v,N($.$elm$))}l>r?re(e,s[f+1]==null?null:s[f+1].$elm$,n,s,c,f):c>f&&ie(t,l,r)},O=(e,t)=>e.$tag$===t.$tag$?e.$tag$==="slot"?e.$name$===t.$name$:e.$key$===t.$key$:!1,N=e=>e&&e["s-ol"]||e,ce=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,L=(e,t)=>{const n=t.$elm$=e.$elm$,s=e.$children$,l=t.$children$,c=t.$tag$,o=t.$text$;let i;o===null?(g=c==="svg"?!0:c==="foreignObject"?!1:g,c==="slot"||oe(e,t,g),s!==null&&l!==null?Be(n,s,t,l):l!==null?(e.$text$!==null&&(n.textContent=""),re(n,null,t,l,0,l.length-1)):s!==null&&ie(s,0,s.length-1),g&&c==="svg"&&(g=!1)):(i=n["s-cr"])?i.parentNode.textContent=o:e.$text$!==o&&(n.data=o)},$e=e=>{const t=e.childNodes;for(const n of t)if(n.nodeType===1){if(n["s-sr"]){const s=n["s-sn"];n.hidden=!1;for(const l of t)if(l["s-hn"]!==n["s-hn"]||s!==""){if(l.nodeType===1&&s===l.getAttribute("slot")){n.hidden=!0;break}}else if(l.nodeType===1||l.nodeType===3&&l.textContent.trim()!==""){n.hidden=!0;break}}$e(n)}},h=[],ae=e=>{let t,n,s;for(const l of e.childNodes){if(l["s-sr"]&&(t=l["s-cr"])&&t.parentNode){n=t.parentNode.childNodes;const c=l["s-sn"];for(s=n.length-1;s>=0;s--)if(t=n[s],!t["s-cn"]&&!t["s-nr"]&&t["s-hn"]!==l["s-hn"])if(J(t,c)){let o=h.find(i=>i.$nodeToRelocate$===t);U=!0,t["s-sn"]=t["s-sn"]||c,o?o.$slotRefNode$=l:h.push({$slotRefNode$:l,$nodeToRelocate$:t}),t["s-sr"]&&h.map(i=>{J(i.$nodeToRelocate$,t["s-sn"])&&(o=h.find(r=>r.$nodeToRelocate$===t),o&&!i.$slotRefNode$&&(i.$slotRefNode$=o.$slotRefNode$))})}else h.some(o=>o.$nodeToRelocate$===t)||h.push({$nodeToRelocate$:t})}l.nodeType===1&&ae(l)}},J=(e,t)=>e.nodeType===1?e.getAttribute("slot")===null&&t===""||e.getAttribute("slot")===t:e["s-sn"]===t?!0:t==="",fe=e=>{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.map(fe)},De=(e,t,n=!1)=>{const s=e.$hostElement$,l=e.$cmpMeta$,c=e.$vnode$||P(null,null),o=be(t)?t:ne(null,null,t);if(D=s.tagName,l.$attrsToReflect$&&(o.$attrs$=o.$attrs$||{},l.$attrsToReflect$.map(([i,r])=>o.$attrs$[r]=s[i])),n&&o.$attrs$)for(const i of Object.keys(o.$attrs$))s.hasAttribute(i)&&!["key","ref","style","class"].includes(i)&&(o.$attrs$[i]=s[i]);o.$tag$=null,o.$flags$|=4,e.$vnode$=o,o.$elm$=c.$elm$=s.shadowRoot||s,T=s["s-sc"],te=s["s-cr"],se=(l.$flags$&1)!==0,U=!1,L(c,o);{if(p.$flags$|=1,F){ae(o.$elm$);let i,r,$,a,f,d,u=0;for(;u<h.length;u++)i=h[u],r=i.$nodeToRelocate$,r["s-ol"]||($=y.createTextNode(""),$["s-nr"]=r,r.parentNode.insertBefore(r["s-ol"]=$,r));for(u=0;u<h.length;u++)if(i=h[u],r=i.$nodeToRelocate$,i.$slotRefNode$){for(a=i.$slotRefNode$.parentNode,f=i.$slotRefNode$.nextSibling,$=r["s-ol"];$=$.previousSibling;)if(d=$["s-nr"],d&&d["s-sn"]===r["s-sn"]&&a===d.parentNode&&(d=d.nextSibling,!d||!d["s-nr"])){f=d;break}(!f&&a!==r.parentNode||r.nextSibling!==f)&&r!==f&&(!r["s-hn"]&&r["s-ol"]&&(r["s-hn"]=r["s-ol"].parentNode.nodeName),a.insertBefore(r,f))}else r.nodeType===1&&(r.hidden=!0)}U&&$e(o.$elm$),p.$flags$&=-2,h.length=0}},_e=(e,t)=>{},w=(e,t)=>(e.$flags$|=16,_e(e,e.$ancestorComponent$),st(()=>Ce(e,t))),Ce=(e,t)=>{const n=e.$hostElement$,s=m("scheduleUpdate",e.$cmpMeta$.$tagName$),l=n;let c;return t?c=x(l,"componentWillLoad"):c=x(l,"componentWillUpdate"),c=Y(c,()=>x(l,"componentWillRender")),s(),Y(c,()=>Fe(e,l,t))},Y=(e,t)=>Me(e)?e.then(t):t(),Me=e=>e instanceof Promise||e&&e.then&&typeof e.then=="function",Fe=async(e,t,n)=>{const s=e.$hostElement$,l=m("update",e.$cmpMeta$.$tagName$);s["s-rc"],n&&Pe(e);const c=m("render",e.$cmpMeta$.$tagName$);He(e,t,s,n),c(),l(),Ne(e)},He=(e,t,n,s)=>{try{W=t,t=t.render&&t.render(),e.$flags$&=-17,e.$flags$|=2,(b.hasRenderFn||b.reflect)&&(b.vdomRender||b.reflect)&&(b.hydrateServerSide||De(e,t,s))}catch(r){E(r,e.$hostElement$)}return W=null,null},Ne=e=>{const t=e.$cmpMeta$.$tagName$,n=e.$hostElement$,s=m("postUpdate",t),l=n;e.$ancestorComponent$,x(l,"componentDidRender"),e.$flags$&64?(x(l,"componentDidUpdate"),s()):(e.$flags$|=64,x(l,"componentDidLoad"),s())},ct=e=>{{const t=k(e),n=t.$hostElement$.isConnected;return n&&(t.$flags$&18)===2&&w(t,!1),n}},x=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(s){E(s)}},we=(e,t)=>k(e).$instanceValues$.get(t),Ie=(e,t,n,s)=>{const l=k(e),c=e,o=l.$instanceValues$.get(t),i=l.$flags$,r=c;n=Re(n,s.$members$[t][0]);const $=Number.isNaN(o)&&Number.isNaN(n);if(n!==o&&!$){l.$instanceValues$.set(t,n);{if(s.$watchers$&&i&128){const f=s.$watchers$[t];f&&f.map(d=>{try{r[d](n,o,t)}catch(u){E(u,c)}})}if((i&18)===2){if(r.componentShouldUpdate&&r.componentShouldUpdate(n,o,t)===!1)return;w(l,!1)}}}},We=(e,t,n)=>{var s;if(t.$members$){e.watchers&&(t.$watchers$=e.watchers);const l=Object.entries(t.$members$),c=e.prototype;l.map(([o,[i]])=>{(i&31||i&32)&&Object.defineProperty(c,o,{get(){return we(this,o)},set(r){Ie(this,o,r,t)},configurable:!0,enumerable:!0})});{const o=new Map;c.attributeChangedCallback=function(i,r,$){p.jmp(()=>{const a=o.get(i);if(this.hasOwnProperty(a))$=this[a],delete this[a];else{if(c.hasOwnProperty(a)&&typeof this[a]=="number"&&this[a]==$)return;if(a==null){const f=k(this),d=f==null?void 0:f.$flags$;if(!(d&8)&&d&128&&$!==r){const v=this,S=t.$watchers$[i];S==null||S.forEach(I=>{v[I]!=null&&v[I].call(v,$,r,i)})}return}}this[a]=$===null&&typeof this[a]=="boolean"?!1:$})},e.observedAttributes=Array.from(new Set([...Object.keys((s=t.$watchers$)!==null&&s!==void 0?s:{}),...l.filter(([i,r])=>r[0]&15).map(([i,r])=>{const $=r[1]||i;return o.set($,i),r[0]&512&&t.$attrsToReflect$.push([i,$]),$})]))}}return e},ze=async(e,t,n,s)=>{let l;if(!(t.$flags$&32)&&(t.$flags$|=32,l=e.constructor,customElements.whenDefined(n.$tagName$).then(()=>t.$flags$|=128),l.style)){let o=l.style;typeof o!="string"&&(o=o[t.$modeName$=xe(e)]);const i=le(n,t.$modeName$);if(!B.has(i)){const r=m("registerStyles",n.$tagName$);Oe(i,o,!!(n.$flags$&1)),r()}}t.$ancestorComponent$,(()=>w(t,!0))()},Z=e=>{},qe=e=>{if(!(p.$flags$&1)){const t=k(e),n=t.$cmpMeta$,s=m("connectedCallback",n.$tagName$);t.$flags$&1?(de(e,t,n.$listeners$),t!=null&&t.$lazyInstance$?Z(t.$lazyInstance$):t!=null&&t.$onReadyPromise$&&t.$onReadyPromise$.then(()=>Z(t.$lazyInstance$))):(t.$flags$|=1,n.$flags$&12&&Qe(e),n.$members$&&Object.entries(n.$members$).map(([l,[c]])=>{if(c&31&&e.hasOwnProperty(l)){const o=e[l];delete e[l],e[l]=o}}),ze(e,t,n)),s()}},Qe=e=>{const t=e["s-cr"]=y.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},Ke=async e=>{if(!(p.$flags$&1)){const t=k(e);t.$rmListeners$&&(t.$rmListeners$.map(n=>n()),t.$rmListeners$=void 0)}},$t=(e,t)=>{const n={$flags$:t[0],$tagName$:t[1]};n.$members$=t[2],n.$listeners$=t[3],n.$watchers$=e.$watchers$,n.$attrsToReflect$=[];const s=e.prototype.connectedCallback,l=e.prototype.disconnectedCallback;return Object.assign(e.prototype,{__registerHost(){Ye(this,n)},connectedCallback(){qe(this),s&&s.call(this)},disconnectedCallback(){Ke(this),l&&l.call(this)},__attachShadow(){this.attachShadow({mode:"open",delegatesFocus:!!(n.$flags$&16)})}}),e.is=n.$tagName$,We(e,n)},de=(e,t,n,s)=>{n&&n.map(([l,c,o])=>{const i=Ge(e,l),r=Xe(t,o),$=Je(l);p.ael(i,c,r,$),(t.$rmListeners$=t.$rmListeners$||[]).push(()=>p.rel(i,c,r,$))})},Xe=(e,t)=>n=>{try{b.lazyLoad||e.$hostElement$[t](n)}catch(s){E(s)}},Ge=(e,t)=>t&4?y:t&8?A:t&16?y.body:e,Je=e=>Ze?{passive:(e&1)!==0,capture:(e&2)!==0}:(e&2)!==0,ue=new WeakMap,k=e=>ue.get(e),Ye=(e,t)=>{const n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return de(e,n,t.$listeners$),ue.set(e,n)},V=(e,t)=>t in e,E=(e,t)=>(0,console.error)(e,t),B=new Map,pe=[],A=typeof window<"u"?window:{},y=A.document||{head:{}},at=A.HTMLElement||class{},p={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,s)=>e.addEventListener(t,n,s),rel:(e,t,n,s)=>e.removeEventListener(t,n,s),ce:(e,t)=>new CustomEvent(e,t)},ft=e=>{Object.assign(p,e)},Ze=(()=>{let e=!1;try{y.addEventListener("e",null,Object.defineProperty({},"passive",{get(){e=!0}}))}catch(t){}return e})(),Ve=e=>Promise.resolve(e),et=(()=>{try{return new CSSStyleSheet,typeof new CSSStyleSheet().replaceSync=="function"}catch(e){}return!1})(),C=[],ge=[],he=(e,t)=>n=>{e.push(n),_||(_=!0,t&&p.$flags$&4?tt(M):p.raf(M))},ee=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(n){E(n)}e.length=0},M=()=>{ee(C),ee(ge),(_=C.length>0)&&p.raf(M)},tt=e=>Ve().then(e),dt=he(C,!1),st=he(ge,!0);export{nt as B,at as H,ot as a,ke as b,lt as c,it as d,ct as f,rt as g,ne as h,$t as p,dt as r,ft as s,st as w};
