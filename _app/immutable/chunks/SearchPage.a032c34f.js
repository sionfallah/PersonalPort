import{s as q,f as g,g as w,j as m,i as d,W as b,J as R,n as P,d as f,X as U,o as j,q as k,O as T,a as V,h as $,c as J,Y as M,Q as N,R as O,S as Q}from"./scheduler.e949bcc4.js";import{S as I,i as y,b as C,d as D,m as E,a as v,t as S,e as L,f as W}from"./index.42c33976.js";import{C as X}from"./CommonPage.fb8897ee.js";function Y(i){let e,t,s;return{c(){e=g("input"),this.h()},l(n){e=w(n,"INPUT",{placeholder:!0,class:!0}),this.h()},h(){m(e,"placeholder",i[1]),m(e,"class","svelte-1fna8qj")},m(n,o){d(n,e,o),b(e,i[0]),t||(s=R(e,"input",i[2]),t=!0)},p(n,[o]){o&2&&m(e,"placeholder",n[1]),o&1&&e.value!==n[0]&&b(e,n[0])},i:P,o:P,d(n){n&&f(e),t=!1,s()}}}function z(i,e,t){let{value:s=""}=e,{placeholder:n=""}=e;function o(){s=this.value,t(0,s)}return i.$$set=r=>{"value"in r&&t(0,s=r.value),"placeholder"in r&&t(1,n=r.placeholder)},[s,n,o]}class A extends I{constructor(e){super(),y(this,e,z,Y,q,{value:0,placeholder:1})}}function B(i){let e,t,s,n,o,r;function p(l){i[4](l)}let u={placeholder:"Search..."};i[0]!==void 0&&(u.value=i[0]),t=new A({props:u}),k.push(()=>W(t,"value",p));const h=i[3].default,a=T(h,i,i[5],null);return{c(){e=g("div"),C(t.$$.fragment),n=V(),o=g("div"),a&&a.c(),this.h()},l(l){e=w(l,"DIV",{class:!0});var c=$(e);D(t.$$.fragment,c),c.forEach(f),n=J(l),o=w(l,"DIV",{class:!0});var _=$(o);a&&a.l(_),_.forEach(f),this.h()},h(){m(e,"class","w-100% flex flex-row"),m(o,"class","w-100% flex flex-col")},m(l,c){d(l,e,c),E(t,e,null),d(l,n,c),d(l,o,c),a&&a.m(o,null),r=!0},p(l,c){const _={};!s&&c&1&&(s=!0,_.value=l[0],M(()=>s=!1)),t.$set(_),a&&a.p&&(!r||c&32)&&N(a,h,l,l[5],r?Q(h,l[5],c,null):O(l[5]),null)},i(l){r||(v(t.$$.fragment,l),v(a,l),r=!0)},o(l){S(t.$$.fragment,l),S(a,l),r=!1},d(l){l&&(f(e),f(n),f(o)),L(t),a&&a.d(l)}}}function F(i){let e,t;return e=new X({props:{title:i[1],$$slots:{default:[B]},$$scope:{ctx:i}}}),{c(){C(e.$$.fragment)},l(s){D(e.$$.fragment,s)},m(s,n){E(e,s,n),t=!0},p(s,[n]){const o={};n&2&&(o.title=s[1]),n&33&&(o.$$scope={dirty:n,ctx:s}),e.$set(o)},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){L(e,s)}}}function G(i,e,t){let{$$slots:s={},$$scope:n}=e,{title:o="Title"}=e,{search:r=""}=e;const p=U();let u=!1;j(()=>{let a=new URLSearchParams(window.location.search);t(0,r=a.get("q")??""),t(2,u=!0)});function h(a){r=a,t(0,r)}return i.$$set=a=>{"title"in a&&t(1,o=a.title),"search"in a&&t(0,r=a.search),"$$scope"in a&&t(5,n=a.$$scope)},i.$$.update=()=>{if(i.$$.dirty&1&&p("search",{search:r.trim().toLowerCase()}),i.$$.dirty&5&&u){let a=new URLSearchParams(window.location.search);a.set("q",r);const l=`${window.location.protocol}//${window.location.host}${window.location.pathname}?${a.toString()}`,c=window.history.state;window.history.replaceState(c,"",l)}},[r,o,u,s,h,n]}class x extends I{constructor(e){super(),y(this,e,G,F,q,{title:1,search:0})}}export{x as S};
