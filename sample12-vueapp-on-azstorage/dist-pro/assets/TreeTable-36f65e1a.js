import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-5e09bafc.js";import{d as t,q as a,e as o,o as l,i,w as r,a as s,L as p,K as n,k as m,_ as d}from"./index-4429a9b6.js";import{_ as u}from"./Table.vue_vue_type_script_lang-7c045d14.js";import{a as c}from"./index-b5ce5768.js";import{E as b}from"./el-tag-502532be.js";import{E as g}from"./el-button-db654e60.js";import{u as f}from"./useTable-33fbf556.js";import"./el-card-5462e81c.js";import"./el-popper-e807c34e.js";import"./constants-daa80c71.js";import"./tsxHelper-e4c8a2f3.js";import"./el-input-8aeae2e7.js";import"./use-form-item-26b56bf2.js";import"./use-form-common-props-fb52f9dc.js";import"./el-pagination-45b42c6a.js";import"./index-c1f96e8b.js";import"./debounce-c46dfee1.js";import"./el-image-viewer-6550f294.js";import"./el-dropdown-item-bbfaac29.js";import"./refs-de36d506.js";import"./index-45f6cee9.js";import"./el-message-box-607fa7c6.js";import"./el-overlay-e8a9b3d5.js";import"./vnode-ab3b56d7.js";import"./aria-ecee1d93.js";const j=d(t({__name:"TreeTable",setup(t){const{tableRegister:d,tableState:j}=f({fetchDataApi:async()=>{const{currentPage:e,pageSize:t}=j,a=await c({pageIndex:s(e),pageSize:s(t)});return{list:a.data.list,total:a.data.total}}}),{loading:_,dataList:y,total:D,currentPage:v,pageSize:x}=j,{t:S}=m(),w=a([{field:"selection",type:"selection"},{field:"index",label:S("tableDemo.index"),type:"index"},{field:"content",label:S("tableDemo.header"),children:[{field:"title",label:S("tableDemo.title")},{field:"author",label:S("tableDemo.author")},{field:"display_time",label:S("tableDemo.displayTime")},{field:"importance",label:S("tableDemo.importance"),formatter:(e,t,a)=>o(b,{type:1===a?"success":2===a?"warning":"danger"},{default:()=>[S(1===a?"tableDemo.important":2===a?"tableDemo.good":"tableDemo.commonly")]})},{field:"pageviews",label:S("tableDemo.pageviews")}]},{field:"action",label:S("tableDemo.action"),slots:{default:e=>{let t;return o(g,{type:"primary",onClick:()=>z(e)},"function"==typeof(a=t=S("tableDemo.action"))||"[object Object]"===Object.prototype.toString.call(a)&&!n(a)?t:{default:()=>[t]});var a}}}]),z=e=>{};return(t,a)=>(l(),i(s(e),{title:`${s(S)("router.treeTable")} ${s(S)("tableDemo.example")}`},{default:r((()=>[o(s(u),{pageSize:s(x),"onUpdate:pageSize":a[0]||(a[0]=e=>p(x)?x.value=e:null),currentPage:s(v),"onUpdate:currentPage":a[1]||(a[1]=e=>p(v)?v.value=e:null),columns:w,data:s(y),"row-key":"id",loading:s(_),sortable:"",pagination:{total:s(D)},onRegister:s(d)},null,8,["pageSize","currentPage","columns","data","loading","pagination","onRegister"])])),_:1},8,["title"]))}}),[["__scopeId","data-v-052ba654"]]);export{j as default};
