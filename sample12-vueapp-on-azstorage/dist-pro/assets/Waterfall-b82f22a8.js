import{d as e,O as t,r as a,M as s,D as l,a as r,a1 as o,a2 as i,o as n,c as d,f as u,F as p,B as f,W as h,t as c,n as g,j as m,N as v,i as x,w as _,e as w,a3 as y,a4 as $,k as b}from"./index-4429a9b6.js";import{d as j}from"./debounce-c46dfee1.js";import{_ as M}from"./ContentWrap.vue_vue_type_script_setup_true_lang-5e09bafc.js";import"./el-card-5462e81c.js";import"./el-popper-e807c34e.js";import"./constants-daa80c71.js";const k=["src"],T=e({__name:"Waterfall",props:{data:t.arrayOf(t.any),reset:t.bool.def(!0),width:t.number.def(200),gap:t.number.def(20),props:t.objectOf(t.string).def({src:"src",height:"height"}),loadingText:t.string.def("加载中..."),loading:t.bool.def(!1),end:t.bool.def(!1),endText:t.string.def("没有更多了")},emits:["loadMore"],setup(e,{emit:t}){const{getPrefixCls:x}=m(),_=x("waterfall"),w=t,y=e,$=a(),b=a([]),M=a(0),T=a(0),W=a(),O=a(0),R=a([]),C=async()=>{R.value=[];const{props:e,width:t,gap:a}=y,s=y.data;await v();const l=r($);if(!l)return;O.value=Math.floor(l.clientWidth/(t+a));const o=s.length;for(let i=0;i<o;i++)if(i<r(O))b.value[i]=s[i][e.height],R.value.push({...s[i],top:0,left:i*(t+a)});else{let l=b.value[0],o=0;for(let e=1;e<r(O);e++)r(b)[e]<l&&(l=r(b)[e],o=e);b.value[o]+=s[i][e.height]+a,R.value.push({...s[i],top:l+a,left:o*(t+a)})}M.value=Math.max(...r(b)),T.value=r(O)*(t+a)-a};return s((()=>y.data),(async()=>{await v(),C()}),{immediate:!0}),l((()=>{r(y.reset)&&o(window,"resize",j(C,300)),i(r(W),(([{isIntersecting:e}])=>{!e||y.loading||y.end||w("loadMore")}),{threshold:.1})})),(t,a)=>(n(),d("div",{class:g([r(_),"flex","justify-center","items-center"]),ref_key:"wrapEl",ref:$,style:h({height:`${M.value+40}px`})},[u("div",{class:"relative",style:h({width:`${T.value}px`,height:`${M.value+40}px`})},[(n(!0),d(p,null,f(R.value,((t,a)=>(n(),d("div",{class:g([`${r(_)}-item__${a}`,"absolute"]),key:`water-${a}`,style:h({width:`${e.width}px`,height:`${t[e.props.height]}px`,top:`${t.top}px`,left:`${t.left}px`})},[u("img",{src:t[e.props.src],class:"w-full h-full block",alt:"",srcset:""},null,8,k)],6)))),128)),u("div",{ref_key:"loadMore",ref:W,class:"h-40px flex justify-center absolute w-full",style:h({top:`${M.value+e.gap}px`})},c(e.end?e.endText:e.loadingText),5)],4)],6))}}),W=e({__name:"Waterfall",setup(e){const t=a([]),s=()=>{const e=[];for(let t=0;t<20;t++){const t=y.Random.integer(100,500),a=y.Random.integer(100,500);e.push(y.mock({width:a,height:t,id:$(),image_uri:y.Random.image(`${a}x${t}`)}))}t.value=[...r(t),...e],r(t).length>=60&&(i.value=!0)};s();const{t:l}=b(),o=a(!1),i=a(!1),d=()=>{o.value=!0,setTimeout((()=>{s(),o.value=!1}),1e3)};return(e,a)=>(n(),x(r(M),{title:r(l)("router.waterfall")},{default:_((()=>[w(r(T),{data:t.value,loading:o.value,end:i.value,props:{src:"image_uri",height:"height"},onLoadMore:d},null,8,["data","loading","end"])])),_:1},8,["title"]))}});export{W as default};
