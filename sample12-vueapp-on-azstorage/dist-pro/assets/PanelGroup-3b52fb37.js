import{d as e,r as t,q as s,z as a,o as l,i,w as n,e as o,a as d,f as r,n as c,t as x,k as u,j as _,_ as m}from"./index-4429a9b6.js";import{E as p,a as f}from"./el-col-fc8d7358.js";import{E as v}from"./el-card-5462e81c.js";import{E as g}from"./el-skeleton-item-b1fd59ae.js";import{_ as y}from"./CountTo.vue_vue_type_script_setup_true_lang-30bce1e0.js";import{r as b}from"./index-45f6cee9.js";const h=()=>b.get({url:"/analysis/userAccessSource"}),w=()=>b.get({url:"/analysis/weeklyUserActivity"}),j=()=>b.get({url:"/analysis/monthlySales"}),$={class:"flex flex-col justify-between"},k={class:"flex flex-col justify-between"},z={class:"flex flex-col justify-between"},S={class:"flex flex-col justify-between"},I=m(e({__name:"PanelGroup",setup(e){const{t:m}=u(),{getPrefixCls:h}=_(),w=h("panel"),j=t(!0);let I=s({users:0,messages:0,moneys:0,shoppings:0});return(async()=>{const e=await b.get({url:"/analysis/total"}).catch((()=>{})).finally((()=>{j.value=!1}));I=Object.assign(I,(null==e?void 0:e.data)||{})})(),(e,t)=>{const s=a("Icon");return l(),i(d(f),{gutter:20,justify:"space-between",class:c(d(w))},{default:n((()=>[o(d(p),{xl:6,lg:6,md:12,sm:12,xs:24},{default:n((()=>[o(d(v),{shadow:"hover",class:"mb-20px"},{default:n((()=>[o(d(g),{loading:j.value,animated:"",rows:2},{default:n((()=>[r("div",{class:c(`${d(w)}__item flex justify-between`)},[r("div",null,[r("div",{class:c(`${d(w)}__item--icon ${d(w)}__item--peoples p-16px inline-block rounded-6px`)},[o(s,{icon:"svg-icon:peoples",size:40})],2)]),r("div",$,[r("div",{class:c(`${d(w)}__item--text text-16px text-gray-500 text-right`)},x(d(m)("analysis.newUser")),3),o(d(y),{class:"text-20px font-700 text-right","start-val":0,"end-val":102400,duration:2600})])],2)])),_:1},8,["loading"])])),_:1})])),_:1}),o(d(p),{xl:6,lg:6,md:12,sm:12,xs:24},{default:n((()=>[o(d(v),{shadow:"hover",class:"mb-20px"},{default:n((()=>[o(d(g),{loading:j.value,animated:"",rows:2},{default:n((()=>[r("div",{class:c(`${d(w)}__item flex justify-between`)},[r("div",null,[r("div",{class:c(`${d(w)}__item--icon ${d(w)}__item--message p-16px inline-block rounded-6px`)},[o(s,{icon:"svg-icon:message",size:40})],2)]),r("div",k,[r("div",{class:c(`${d(w)}__item--text text-16px text-gray-500 text-right`)},x(d(m)("analysis.unreadInformation")),3),o(d(y),{class:"text-20px font-700 text-right","start-val":0,"end-val":81212,duration:2600})])],2)])),_:1},8,["loading"])])),_:1})])),_:1}),o(d(p),{xl:6,lg:6,md:12,sm:12,xs:24},{default:n((()=>[o(d(v),{shadow:"hover",class:"mb-20px"},{default:n((()=>[o(d(g),{loading:j.value,animated:"",rows:2},{default:n((()=>[r("div",{class:c(`${d(w)}__item flex justify-between`)},[r("div",null,[r("div",{class:c(`${d(w)}__item--icon ${d(w)}__item--money p-16px inline-block rounded-6px`)},[o(s,{icon:"svg-icon:money",size:40})],2)]),r("div",z,[r("div",{class:c(`${d(w)}__item--text text-16px text-gray-500 text-right`)},x(d(m)("analysis.transactionAmount")),3),o(d(y),{class:"text-20px font-700 text-right","start-val":0,"end-val":9280,duration:2600})])],2)])),_:1},8,["loading"])])),_:1})])),_:1}),o(d(p),{xl:6,lg:6,md:12,sm:12,xs:24},{default:n((()=>[o(d(v),{shadow:"hover",class:"mb-20px"},{default:n((()=>[o(d(g),{loading:j.value,animated:"",rows:2},{default:n((()=>[r("div",{class:c(`${d(w)}__item flex justify-between`)},[r("div",null,[r("div",{class:c(`${d(w)}__item--icon ${d(w)}__item--shopping p-16px inline-block rounded-6px`)},[o(s,{icon:"svg-icon:shopping",size:40})],2)]),r("div",S,[r("div",{class:c(`${d(w)}__item--text text-16px text-gray-500 text-right`)},x(d(m)("analysis.totalShopping")),3),o(d(y),{class:"text-20px font-700 text-right","start-val":0,"end-val":13600,duration:2600})])],2)])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1},8,["class"])}}}),[["__scopeId","data-v-843cc555"]]),P=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"}));export{I as P,w as a,j as b,P as c,h as g};