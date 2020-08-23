var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}const l="undefined"!=typeof window;let a=l?()=>window.performance.now():()=>Date.now(),u=l?t=>requestAnimationFrame(t):t;const d=new Set;function f(t){d.forEach(e=>{e.c(t)||(d.delete(e),e.f())}),0!==d.size&&u(f)}function h(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function g(t){return document.createElement(t)}function $(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function v(t){return document.createTextNode(t)}function b(){return v(" ")}function y(){return v("")}function w(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function _(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function k(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function x(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}const C=new Set;let E,P=0;function z(t,e,n,r,o,s,i,c=0){const l=16.666/r;let a="{\n";for(let t=0;t<=1;t+=l){const r=e+(n-e)*s(t);a+=100*t+`%{${i(r,1-r)}}\n`}const u=a+`100% {${i(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${c}`,f=t.ownerDocument;C.add(f);const h=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(g("style")).sheet),p=f.__svelte_rules||(f.__svelte_rules={});p[d]||(p[d]=!0,h.insertRule(`@keyframes ${d} ${u}`,h.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?m+", ":""}${d} ${r}ms linear ${o}ms 1 both`,P+=1,d}function A(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),o=n.length-r.length;o&&(t.style.animation=r.join(", "),P-=o,P||u(()=>{P||(C.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),C.clear())}))}function W(t){E=t}function q(){if(!E)throw new Error("Function called outside component initialization");return E}const I=[],N=[],S=[],O=[],R=Promise.resolve();let j=!1;function T(t){S.push(t)}let M=!1;const B=new Set;function L(){if(!M){M=!0;do{for(let t=0;t<I.length;t+=1){const e=I[t];W(e),D(e.$$)}for(I.length=0;N.length;)N.pop()();for(let t=0;t<S.length;t+=1){const e=S[t];B.has(e)||(B.add(e),e())}S.length=0}while(I.length);for(;O.length;)O.pop()();j=!1,M=!1,B.clear()}}function D(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}let F;function Y(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const G=new Set;let H;function J(){H={r:0,c:[],p:H}}function K(){H.r||o(H.c),H=H.p}function Q(t,e){t&&t.i&&(G.delete(t),t.i(e))}function U(t,e,n,r){if(t&&t.o){if(G.has(t))return;G.add(t),H.c.push(()=>{G.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const V={duration:0};function X(n,r,i,c){let l=r(n,i),h=c?0:1,p=null,m=null,g=null;function $(){g&&A(n,g)}function v(t,e){const n=t.b-h;return e*=Math.abs(n),{a:h,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function b(r){const{delay:s=0,duration:i=300,easing:c=e,tick:b=t,css:y}=l||V,w={start:a()+s,b:r};r||(w.group=H,H.r+=1),p?m=w:(y&&($(),g=z(n,h,r,i,s,c,y)),r&&b(0,1),p=v(w,i),T(()=>Y(n,r,"start")),function(t){let e;0===d.size&&u(f),new Promise(n=>{d.add(e={c:t,f:n})})}(t=>{if(m&&t>m.start&&(p=v(m,i),m=null,Y(n,p.b,"start"),y&&($(),g=z(n,h,p.b,p.duration,0,c,l.css))),p)if(t>=p.end)b(h=p.b,1-h),Y(n,p.b,"end"),m||(p.b?$():--p.group.r||o(p.group.c)),p=null;else if(t>=p.start){const e=t-p.start;h=p.a+p.d*c(e/p.duration),b(h,1-h)}return!(!p&&!m)}))}return{run(t){s(l)?(F||(F=Promise.resolve(),F.then(()=>{F=null})),F).then(()=>{l=l(),b(t)}):b(t)},end(){$(),p=m=null}}}function Z(t,e){const n=e.token={};function r(t,r,o,s){if(e.token!==n)return;e.resolved=s;let i=e.ctx;void 0!==o&&(i=i.slice(),i[o]=s);const c=t&&(e.current=t)(i);let l=!1;e.block&&(e.blocks?e.blocks.forEach((t,n)=>{n!==r&&t&&(J(),U(t,1,1,()=>{e.blocks[n]=null}),K())}):e.block.d(1),c.c(),Q(c,1),c.m(e.mount(),e.anchor),l=!0),e.block=c,e.blocks&&(e.blocks[r]=c),l&&L()}if((o=t)&&"object"==typeof o&&"function"==typeof o.then){const n=q();if(t.then(t=>{W(n),r(e.then,1,e.value,t),W(null)},t=>{W(n),r(e.catch,2,e.error,t),W(null)}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}var o}function tt(t){t&&t.c()}function et(t,e,r){const{fragment:i,on_mount:c,on_destroy:l,after_update:a}=t.$$;i&&i.m(e,r),T(()=>{const e=c.map(n).filter(s);l?l.push(...e):o(e),t.$$.on_mount=[]}),a.forEach(T)}function nt(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function rt(t,e){-1===t.$$.dirty[0]&&(I.push(t),j||(j=!0,R.then(L)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ot(e,n,s,i,c,l,a=[-1]){const u=E;W(e);const d=n.props||{},f=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:a,skip_bound:!1};let h=!1;if(f.ctx=s?s(e,d,(t,n,...r)=>{const o=r.length?r[0]:n;return f.ctx&&c(f.ctx[t],f.ctx[t]=o)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](o),h&&rt(e,t)),n}):[],f.update(),h=!0,o(f.before_update),f.fragment=!!i&&i(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(m)}else f.fragment&&f.fragment.c();n.intro&&Q(e.$$.fragment),et(e,n.target,n.anchor),L()}W(u)}class st{$destroy(){nt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function it(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function ct(t,{delay:e=0,duration:n=400,easing:r=it,amount:o=5,opacity:s=0}){const i=getComputedStyle(t),c=+i.opacity,l="none"===i.filter?"":i.filter,a=c*(1-s);return{delay:e,duration:n,easing:r,css:(t,e)=>`opacity: ${c-a*e}; filter: ${l} blur(${e*o}px);`}}function lt(t,{delay:n=0,duration:r=400,easing:o=e}){const s=+getComputedStyle(t).opacity;return{delay:n,duration:r,easing:o,css:t=>"opacity: "+t*s}}function at(e){let n,r,o;return{c(){n=$("svg"),r=$("circle"),_(r,"role","presentation"),_(r,"cx","16"),_(r,"cy","16"),_(r,"r",e[4]),_(r,"stroke",e[2]),_(r,"fill","none"),_(r,"stroke-width",e[3]),_(r,"stroke-dasharray",o=e[5]+",100"),_(r,"stroke-linecap","round"),_(n,"height",e[0]),_(n,"width",e[0]),x(n,"animation-duration",e[1]+"ms"),_(n,"class","svelte-spinner svelte-1bbsd2f"),_(n,"viewBox","0 0 32 32")},m(t,e){p(t,n,e),h(n,r)},p(t,[e]){16&e&&_(r,"r",t[4]),4&e&&_(r,"stroke",t[2]),8&e&&_(r,"stroke-width",t[3]),32&e&&o!==(o=t[5]+",100")&&_(r,"stroke-dasharray",o),1&e&&_(n,"height",t[0]),1&e&&_(n,"width",t[0]),2&e&&x(n,"animation-duration",t[1]+"ms")},i:t,o:t,d(t){t&&m(n)}}}function ut(t,e,n){let r,{size:o=25}=e,{speed:s=750}=e,{color:i="rgba(0,0,0,0.4)"}=e,{thickness:c=2}=e,{gap:l=40}=e,{radius:a=10}=e;return t.$$set=t=>{"size"in t&&n(0,o=t.size),"speed"in t&&n(1,s=t.speed),"color"in t&&n(2,i=t.color),"thickness"in t&&n(3,c=t.thickness),"gap"in t&&n(6,l=t.gap),"radius"in t&&n(4,a=t.radius)},t.$$.update=()=>{80&t.$$.dirty&&n(5,r=2*Math.PI*a*(100-l)/100)},[o,s,i,c,a,r,l]}class dt extends st{constructor(t){super(),ot(this,t,ut,at,i,{size:0,speed:1,color:2,thickness:3,gap:6,radius:4})}}function ft(e){let n,r,o,s,i,c,l;return i=new dt({props:{size:50,color:"rgb(61, 190, 207)"}}),{c(){n=g("div"),r=g("div"),o=g("p"),o.textContent="loading articles ...",s=b(),tt(i.$$.fragment),_(o,"class","svelte-1825zli"),_(r,"class","spinner-box svelte-1825zli"),_(n,"class","spinner-box-wrapper svelte-1825zli")},m(t,e){p(t,n,e),h(n,r),h(r,o),h(r,s),et(i,r,null),l=!0},p:t,i(t){l||(Q(i.$$.fragment,t),T(()=>{c||(c=X(n,lt,{},!0)),c.run(1)}),l=!0)},o(t){U(i.$$.fragment,t),c||(c=X(n,lt,{},!1)),c.run(0),l=!1},d(t){t&&m(n),nt(i),t&&c&&c.end()}}}class ht extends st{constructor(t){super(),ot(this,t,null,ft,i,{})}}function pt(t){let e,n,r,o,i,c,l;return{c(){e=g("button"),n=v("Reload article list...?"),_(e,"class","reload-article-button svelte-184r0lz"),e.disabled=r=0===t[1].length},m(r,o){p(r,e,o),h(e,n),i=!0,c||(l=w(e,"click",(function(){s(t[0])&&t[0].apply(this,arguments)})),c=!0)},p(n,[o]){t=n,(!i||2&o&&r!==(r=0===t[1].length))&&(e.disabled=r)},i(t){i||(T(()=>{o||(o=X(e,ct,{duration:300},!0)),o.run(1)}),i=!0)},o(t){o||(o=X(e,ct,{duration:300},!1)),o.run(0),i=!1},d(t){t&&m(e),t&&o&&o.end(),c=!1,l()}}}function mt(t,e,n){let{fetch:r}=e,{articles:o}=e;return t.$$set=t=>{"fetch"in t&&n(0,r=t.fetch),"articles"in t&&n(1,o=t.articles)},[r,o]}class gt extends st{constructor(t){super(),ot(this,t,mt,pt,i,{fetch:0,articles:1})}}function $t(t){let e,n,r,i,c,l,a,u,d,f,$,y,x,C,E,P,z,A,W=t[0].title+"",q=t[0].date+"",I=t[0].content+"";return{c(){e=g("div"),n=g("div"),r=g("div"),i=v(W),c=b(),l=g("div"),a=v(q),u=b(),d=g("div"),f=g("img"),y=b(),x=g("div"),C=v(I),_(r,"class","article-modal__title svelte-6dy0c0"),_(l,"class","article-modal__date svelte-6dy0c0"),f.src!==($=t[0].src)&&_(f,"src",$),_(f,"alt","dancing"),_(f,"class","svelte-6dy0c0"),_(d,"class","article-modal__image svelte-6dy0c0"),_(x,"class","article-modal__content svelte-6dy0c0"),_(n,"class","article-modal svelte-6dy0c0"),_(e,"class","article-modal-wrapper svelte-6dy0c0")},m(o,m){var g;p(o,e,m),h(e,n),h(n,r),h(r,i),h(n,c),h(n,l),h(l,a),h(n,u),h(n,d),h(d,f),h(n,y),h(n,x),h(x,C),P=!0,z||(A=[w(n,"click",(g=t[2],function(t){return t.stopPropagation(),g.call(this,t)})),w(e,"click",(function(){s(t[1])&&t[1].apply(this,arguments)}))],z=!0)},p(e,[n]){t=e,(!P||1&n)&&W!==(W=t[0].title+"")&&k(i,W),(!P||1&n)&&q!==(q=t[0].date+"")&&k(a,q),(!P||1&n&&f.src!==($=t[0].src))&&_(f,"src",$),(!P||1&n)&&I!==(I=t[0].content+"")&&k(C,I)},i(t){P||(T(()=>{E||(E=X(e,lt,{},!0)),E.run(1)}),P=!0)},o(t){E||(E=X(e,lt,{},!1)),E.run(0),P=!1},d(t){t&&m(e),t&&E&&E.end(),z=!1,o(A)}}}function vt(t,e,n){let{article:r}=e,{onClose:o}=e;return t.$$set=t=>{"article"in t&&n(0,r=t.article),"onClose"in t&&n(1,o=t.onClose)},[r,o,function(e){!function(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(t=>t(e))}(t,e)}]}class bt extends st{constructor(t){super(),ot(this,t,vt,$t,i,{article:0,onClose:1})}}function yt(t){let e,n;return e=new bt({props:{article:t[0],onClose:t[2]}}),{c(){tt(e.$$.fragment)},m(t,r){et(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.article=t[0]),e.$set(r)},i(t){n||(Q(e.$$.fragment,t),n=!0)},o(t){U(e.$$.fragment,t),n=!1},d(t){nt(e,t)}}}function wt(t){let e,n,r,o,s,i,c,l,a,u,d,f,$,x,C,E,P=t[0].title+"",z=t[0].date+"",A=t[1]&&yt(t);return{c(){e=g("div"),n=g("div"),r=v(P),o=b(),s=g("div"),i=v(z),c=b(),l=g("div"),a=g("img"),f=b(),A&&A.c(),$=y(),_(n,"class","article-card__title svelte-94bsi7"),_(s,"class","article-card__date svelte-94bsi7"),a.src!==(u=t[0].src)&&_(a,"src",u),_(a,"alt","article"),_(a,"class","svelte-94bsi7"),_(l,"class","article-card__image svelte-94bsi7"),_(e,"class","article-card svelte-94bsi7")},m(u,d){p(u,e,d),h(e,n),h(n,r),h(e,o),h(e,s),h(s,i),h(e,c),h(e,l),h(l,a),p(u,f,d),A&&A.m(u,d),p(u,$,d),x=!0,C||(E=w(e,"click",t[3]),C=!0)},p(t,[e]){(!x||1&e)&&P!==(P=t[0].title+"")&&k(r,P),(!x||1&e)&&z!==(z=t[0].date+"")&&k(i,z),(!x||1&e&&a.src!==(u=t[0].src))&&_(a,"src",u),t[1]?A?(A.p(t,e),2&e&&Q(A,1)):(A=yt(t),A.c(),Q(A,1),A.m($.parentNode,$)):A&&(J(),U(A,1,1,()=>{A=null}),K())},i(t){x||(T(()=>{d||(d=X(e,lt,{},!0)),d.run(1)}),Q(A),x=!0)},o(t){d||(d=X(e,lt,{},!1)),d.run(0),U(A),x=!1},d(t){t&&m(e),t&&d&&d.end(),t&&m(f),A&&A.d(t),t&&m($),C=!1,E()}}}function _t(t,e,n){let{article:r}=e,o=!1;return t.$$set=t=>{"article"in t&&n(0,r=t.article)},[r,o,()=>{n(1,o=!1)},()=>{n(1,o=!0)}]}class kt extends st{constructor(t){super(),ot(this,t,_t,wt,i,{article:0})}}function xt(t,e,n){const r=t.slice();return r[1]=e[n],r}function Ct(t){let e,n;return e=new kt({props:{article:t[1]}}),{c(){tt(e.$$.fragment)},m(t,r){et(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.article=t[1]),e.$set(r)},i(t){n||(Q(e.$$.fragment,t),n=!0)},o(t){U(e.$$.fragment,t),n=!1},d(t){nt(e,t)}}}function Et(t){let e,n,r,o=t[0],s=[];for(let e=0;e<o.length;e+=1)s[e]=Ct(xt(t,o,e));const i=t=>U(s[t],1,1,()=>{s[t]=null});return{c(){e=g("div");for(let t=0;t<s.length;t+=1)s[t].c();_(e,"class","article-cards svelte-iak5u8")},m(t,n){p(t,e,n);for(let t=0;t<s.length;t+=1)s[t].m(e,null);r=!0},p(t,[n]){if(1&n){let r;for(o=t[0],r=0;r<o.length;r+=1){const i=xt(t,o,r);s[r]?(s[r].p(i,n),Q(s[r],1)):(s[r]=Ct(i),s[r].c(),Q(s[r],1),s[r].m(e,null))}for(J(),r=o.length;r<s.length;r+=1)i(r);K()}},i(t){if(!r){for(let t=0;t<o.length;t+=1)Q(s[t]);T(()=>{n||(n=X(e,lt,{},!0)),n.run(1)}),r=!0}},o(t){s=s.filter(Boolean);for(let t=0;t<s.length;t+=1)U(s[t]);n||(n=X(e,lt,{},!1)),n.run(0),r=!1},d(t){t&&m(e),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(s,t),t&&n&&n.end()}}}function Pt(t,e,n){let{articles:r}=e;return t.$$set=t=>{"articles"in t&&n(0,r=t.articles)},[r]}class zt extends st{constructor(t){super(),ot(this,t,Pt,Et,i,{articles:0})}}const At=[];const Wt=function(e,n=t){let r;const o=[];function s(t){if(i(e,t)&&(e=t,r)){const t=!At.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),At.push(n,e)}if(t){for(let t=0;t<At.length;t+=2)At[t][0](At[t+1]);At.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(i,c=t){const l=[i,c];return o.push(l),1===o.length&&(r=n(s)||t),i(e),()=>{const t=o.indexOf(l);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}([]);class qt{constructor(t,e,n,r){this.title=t,this.date=e,this.content=n,this.src=r}}const It="\nWrite less code\nThe most important metric you're not paying attention to\n\nAll code is buggy. It stands to reason, therefore, that the more code you have to write the buggier your apps will be.\n\nWriting more code also takes more time, leaving less time for other things like optimisation, nice-to-have features, or being outdoors instead of hunched over a laptop.\n\nIn fact it's widely acknowledged that  and  grow quadratically, not linearly, with the size of a codebase. That tracks with our intuitions: a ten-line pull request will get a level of scrutiny rarely applied to a 100-line one. And once a given module becomes too big to fit on a single screen, the cognitive effort required to understand it increases significantly. We compensate by refactoring and adding comments — activities that almost always result in more code. It's a vicious cycle.\n\nYet while we obsess — rightly! — over performance numbers, bundle size and anything else we can measure, we rarely pay attention to the amount of code we're writing.\n\n\nReadability is important\nI'm certainly not claiming that we should use clever tricks to scrunch our code into the most compact form possible at the expense of readability. Nor am I claiming that reducing lines of code is necessarily a worthwhile goal, since it encourages turning readable code like this...\n\n...into something much harder to parse:\n\nInstead, I'm claiming that we should favour languages and patterns that allow us to naturally write less code.\n",Nt="/images/sample.png";class St{async fetchAll(){var t;return await(t=3e3,new Promise(e=>setTimeout(e,t))),[new qt("Write less code Part 1.","2020/09/03",It,Nt),new qt("Write less code Part 2.","2020/09/04",It,Nt),new qt("Write less code Part 3.","2020/09/05",It,Nt),new qt("Write less code Part 4.","2020/09/06",It,Nt),new qt("Write less code Part 5.","2020/09/07",It,Nt),new qt("Write less code Part 6.","2020/09/08",It,Nt),new qt("Write less code Part 7.","2020/09/08",It,Nt),new qt("Write less code Part 8.","2020/09/09",It,Nt)]}}function Ot(e){let n,r,o=e[7].message+"";return{c(){n=g("p"),r=v(o),x(n,"color","red")},m(t,e){p(t,n,e),h(n,r)},p(t,e){1&e&&o!==(o=t[7].message+"")&&k(r,o)},i:t,o:t,d(t){t&&m(n)}}}function Rt(t){let e,n,r,o;const s=[Tt,jt],i=[];function c(t,e){return 0!==t[2].length?0:1}return e=c(t),n=i[e]=s[e](t),{c(){n.c(),r=y()},m(t,n){i[e].m(t,n),p(t,r,n),o=!0},p(t,o){let l=e;e=c(t),e===l?i[e].p(t,o):(J(),U(i[l],1,1,()=>{i[l]=null}),K(),n=i[e],n||(n=i[e]=s[e](t),n.c()),Q(n,1),n.m(r.parentNode,r))},i(t){o||(Q(n),o=!0)},o(t){U(n),o=!1},d(t){i[e].d(t),t&&m(r)}}}function jt(e){let n;return{c(){n=g("p"),n.textContent="not articles"},m(t,e){p(t,n,e)},p:t,i:t,o:t,d(t){t&&m(n)}}}function Tt(t){let e,n;return e=new zt({props:{articles:t[2]}}),{c(){tt(e.$$.fragment)},m(t,r){et(e,t,r),n=!0},p(t,n){const r={};4&n&&(r.articles=t[2]),e.$set(r)},i(t){n||(Q(e.$$.fragment,t),n=!0)},o(t){U(e.$$.fragment,t),n=!1},d(t){nt(e,t)}}}function Mt(e){let n,r;return n=new ht({}),{c(){tt(n.$$.fragment)},m(t,e){et(n,t,e),r=!0},p:t,i(t){r||(Q(n.$$.fragment,t),r=!0)},o(t){U(n.$$.fragment,t),r=!1},d(t){nt(n,t)}}}function Bt(t){let e,n,r,o,s,i,c,l,a,u;c=new gt({props:{fetch:t[3],articles:t[2]}});let d={ctx:t,current:null,token:null,pending:Mt,then:Rt,catch:Ot,value:6,error:7,blocks:[,,,]};return Z(a=t[0],d),{c(){e=g("div"),n=g("div"),n.textContent="Article List",r=b(),o=g("p"),s=v(t[1]),i=b(),tt(c.$$.fragment),l=b(),d.block.c(),_(n,"class","article-cards-title svelte-1b9cwqv"),_(e,"class","article-cards-box svelte-1b9cwqv")},m(t,a){p(t,e,a),h(e,n),h(e,r),h(e,o),h(o,s),h(e,i),et(c,e,null),h(e,l),d.block.m(e,d.anchor=null),d.mount=()=>e,d.anchor=null,u=!0},p(e,[n]){t=e,(!u||2&n)&&k(s,t[1]);const r={};if(4&n&&(r.articles=t[2]),c.$set(r),d.ctx=t,1&n&&a!==(a=t[0])&&Z(a,d));else{const e=t.slice();e[6]=d.resolved,d.block.p(e,n)}},i(t){u||(Q(c.$$.fragment,t),Q(d.block),u=!0)},o(t){U(c.$$.fragment,t);for(let t=0;t<3;t+=1){U(d.blocks[t])}u=!1},d(t){t&&m(e),nt(c),d.block.d(),d.token=null,d=null}}}function Lt(t,e,n){let r;c(t,Wt,t=>n(2,r=t));var o=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,s){function i(t){try{l(r.next(t))}catch(t){s(t)}}function c(t){try{l(r.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,c)}l((r=r.apply(t,e||[])).next())}))};let s;const i=()=>o(void 0,void 0,void 0,(function*(){return n(0,s=o(void 0,void 0,void 0,(function*(){Wt.set([]);const t=new St;Wt.set(yield t.fetchAll())})))}));var l;let a;return l=i,q().$$.on_mount.push(l),t.$$.update=()=>{4&t.$$.dirty&&n(1,a="Article Count: "+r.length)},[s,a,r,i]}class Dt extends st{constructor(t){super(),ot(this,t,Lt,Bt,i,{})}}function Ft(e){let n,r,o;return r=new Dt({}),{c(){n=g("main"),tt(r.$$.fragment),_(n,"class","svelte-qkfbz2")},m(t,e){p(t,n,e),et(r,n,null),o=!0},p:t,i(t){o||(Q(r.$$.fragment,t),o=!0)},o(t){U(r.$$.fragment,t),o=!1},d(t){t&&m(n),nt(r)}}}return new class extends st{constructor(t){super(),ot(this,t,null,Ft,i,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map