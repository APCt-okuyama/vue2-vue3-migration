import{F as e,i as o}from"./Form-36172ad2.js";import{d as s,O as a,o as t,c as n,i,w as l,a as r,Q as d,F as c,A as h,t as u,k as m,r as p,x as f,M as g,D as b,e as w,W as v,a0 as x,bK as y,bY as E,bZ as S,s as k}from"./index-4429a9b6.js";import{u as F}from"./useForm-3f633ad7.js";import{E as L}from"./el-button-db654e60.js";import{u as j}from"./useIcon-ee936d1b.js";const R=s({__name:"ActionButton",props:{showSearch:a.bool.def(!0),showReset:a.bool.def(!0),showExpand:a.bool.def(!1),visible:a.bool.def(!0),searchLoading:a.bool.def(!1),resetLoading:a.bool.def(!1)},emits:["search","reset","expand"],setup(e,{emit:o}){const s=o,{t:a}=m(),p=()=>{s("search")},f=()=>{s("reset")},g=()=>{s("expand")};return(o,s)=>(t(),n(c,null,[e.showSearch?(t(),i(r(L),{key:0,type:"primary",loading:e.searchLoading,icon:r(j)({icon:"ep:search"}),onClick:p},{default:l((()=>[h(u(r(a)("common.query")),1)])),_:1},8,["loading","icon"])):d("",!0),e.showReset?(t(),i(r(L),{key:1,loading:e.resetLoading,icon:r(j)({icon:"ep:refresh-right"}),onClick:f},{default:l((()=>[h(u(r(a)("common.reset")),1)])),_:1},8,["loading","icon"])):d("",!0),e.showExpand?(t(),i(r(L),{key:2,icon:r(j)({icon:e.visible?"ep:arrow-up":"ep:arrow-down"}),text:"",onClick:g},{default:l((()=>[h(u(r(a)(e.visible?"common.shrink":"common.expand")),1)])),_:1},8,["icon"])):d("",!0)],64))}}),O=s({__name:"Search",props:{schema:{type:Array,default:()=>[]},isCol:a.bool.def(!1),labelWidth:a.oneOfType([String,Number]).def("auto"),layout:a.string.validate((e=>["inline","bottom"].includes(e))).def("inline"),buttonPosition:a.string.validate((e=>["left","center","right"].includes(e))).def("center"),showSearch:a.bool.def(!0),showReset:a.bool.def(!0),showExpand:a.bool.def(!1),expandField:a.string.def(""),inline:a.bool.def(!0),removeNoValueItem:a.bool.def(!0),model:{type:Object,default:()=>({})},searchLoading:a.bool.def(!1),resetLoading:a.bool.def(!1)},emits:["search","reset","register","validate"],setup(s,{expose:a,emit:i}){const l=s,h=i,u=p(!0),m=p(l.model),L=f((()=>{const e=r(P);let o=x(e.schema);if(e.showExpand&&e.expandField&&!r(u)){const s=y(o,(o=>o.field===e.expandField));o.map(((e,o)=>(e.hidden=o>=s,e)))}return"inline"===e.layout&&(o=o.concat([{field:"action",formItemProps:{labelWidth:"0px",slots:{default:()=>w("div",null,[w(R,{showSearch:e.showSearch,showReset:e.showReset,showExpand:e.showExpand,searchLoading:e.searchLoading,resetLoading:e.resetLoading,visible:u.value,onExpand:M,onReset:B,onSearch:q},null)])}}}])),o})),{formRegister:j,formMethods:O}=F(),{getElFormExpose:_,getFormData:C,getFormExpose:V}=O,A=p({}),I=p({}),P=f((()=>{const e={...l};return Object.assign(e,r(I)),e})),W=p([]);g((()=>r(L)),(async(e=[])=>{m.value=o(e,r(m)),W.value=e}),{immediate:!0,deep:!0});const N=async()=>{const e=await C();return r(P).removeNoValueItem?Object.keys(e).reduce(((o,s)=>{const a=e[s];return E(a)||(S(a)?Object.keys(a).length>0&&(o[s]=a):o[s]=a),o}),{}):e},q=async()=>{const e=await _();await(null==e?void 0:e.validate((async e=>{if(e){const e=await N();h("search",e)}})))},B=async()=>{const e=await _();null==e||e.resetFields();const o=await N();h("reset",o)},D=f((()=>({textAlign:r(P).buttonPosition}))),M=async()=>{u.value=!r(u)},K={getElFormExpose:_,setProps:(e={})=>{I.value=Object.assign(r(I),e),A.value=e},setSchema:e=>{const{schema:o}=r(P);for(const s of o)for(const o of e)s.field===o.field&&k(s,o.path,o.value)},setValues:async(e={})=>{m.value=Object.assign(l.model,r(m),e);const o=await V();null==o||o.setValues(e)},delSchema:e=>{const{schema:o}=r(P),s=y(o,(o=>o.field===e));s>-1&&o.splice(s,1)},addSchema:(e,o)=>{const{schema:s}=r(P);void 0===o?s.push(e):s.splice(o,0,e)}};b((()=>{h("register",K)})),a(K);const Q=(e,o,s)=>{h("validate",e,o,s)};return(o,a)=>(t(),n(c,null,[w(r(e),{model:m.value,"is-custom":!1,"label-width":P.value.labelWidth,"hide-required-asterisk":"",inline:P.value.inline,"is-col":P.value.isCol,schema:W.value,onRegister:r(j),onValidate:Q},null,8,["model","label-width","inline","is-col","schema","onRegister"]),"bottom"===s.layout?(t(),n("div",{key:0,style:v(D.value)},[w(R,{"show-reset":P.value.showReset,"show-search":P.value.showSearch,"show-expand":P.value.showExpand,"search-loading":P.value.searchLoading,"reset-loading":P.value.resetLoading,onExpand:M,onReset:B,onSearch:q},null,8,["show-reset","show-search","show-expand","search-loading","reset-loading"])],4)):d("",!0)],64))}});export{O as _};