import{D as e,b9 as t,U as o,ay as n,L as s,at as a,al as u,cU as l,b2 as d,bc as c,M as i,aU as m,bz as r,cV as v,by as p,aC as f,af as y,ah as b,d as h,e as M,ap as x,J as E}from"./index-4429a9b6.js";import{w as g}from"./el-pagination-45b42c6a.js";import{P as w}from"./vnode-ab3b56d7.js";const k=(s,a,u)=>{let l={offsetX:0,offsetY:0};const d=e=>{const t=e.clientX,o=e.clientY,{offsetX:a,offsetY:u}=l,d=s.value.getBoundingClientRect(),c=d.left,i=d.top,m=d.width,r=d.height,v=document.documentElement.clientWidth,p=document.documentElement.clientHeight,f=-c+a,y=-i+u,b=v-c-m+a,h=p-i-r+u,M=e=>{const d=Math.min(Math.max(a+e.clientX-t,f),b),c=Math.min(Math.max(u+e.clientY-o,y),h);l={offsetX:d,offsetY:c},s.value.style.transform=`translate(${n(d)}, ${n(c)})`},x=()=>{document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",x)};document.addEventListener("mousemove",M),document.addEventListener("mouseup",x)},c=()=>{a.value&&s.value&&a.value.removeEventListener("mousedown",d)};e((()=>{t((()=>{u.value?a.value&&s.value&&a.value.addEventListener("mousedown",d):c()}))})),o((()=>{c()}))},C=(e,t={})=>{s(e)||a("[useLockscreen]","You need to pass a ref param to this function");const o=t.ns||u("popup"),n=l((()=>o.bm("parent","hidden")));if(!d||c(document.body,n.value))return;let f=0,y=!1,b="0";const h=()=>{setTimeout((()=>{p(null==document?void 0:document.body,n.value),y&&document&&(document.body.style.width=b)}),200)};i(e,(e=>{if(!e)return void h();y=!c(document.body,n.value),y&&(b=document.body.style.width),f=g(o.namespace.value);const t=document.documentElement.clientHeight<document.body.scrollHeight,s=m(document.body,"overflowY");f>0&&(t||"scroll"===s)&&y&&(document.body.style.width=`calc(100% - ${f}px)`),r(document.body,n.value)})),v((()=>h()))},L=e=>{if(!e)return{onClick:f,onMousedown:f,onMouseup:f};let t=!1,o=!1;return{onClick:n=>{t&&o&&e(n),t=o=!1},onMousedown:e=>{t=e.target===e.currentTarget},onMouseup:e=>{o=e.target===e.currentTarget}}},Y=y({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:b([String,Array,Object])},zIndex:{type:b([String,Number])}});const z=h({name:"ElOverlay",props:Y,emits:{click:e=>e instanceof MouseEvent},setup(e,{slots:t,emit:o}){const n=u("overlay"),{onClick:s,onMousedown:a,onMouseup:l}=L(e.customMaskEvent?void 0:e=>{o("click",e)});return()=>e.mask?M("div",{class:[n.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:s,onMousedown:a,onMouseup:l},[x(t,"default")],w.STYLE|w.CLASS|w.PROPS,["onClick","onMouseup","onMousedown"]):E("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[x(t,"default")])}});export{z as E,C as a,L as b,k as u};
