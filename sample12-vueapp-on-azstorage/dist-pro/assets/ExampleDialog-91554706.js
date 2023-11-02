import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-5e09bafc.js";import{_ as a}from"./Search.vue_vue_type_script_setup_true_lang-8f6077b7.js";import{_ as t}from"./Dialog.vue_vue_type_style_index_0_lang-ed2fb53d.js";import{d as l,r as o,q as i,e as s,F as r,a as n,o as m,c as p,w as d,f as u,A as c,t as _,L as f,i as v,Q as g,K as h,k as j}from"./index-4429a9b6.js";import{E as b}from"./el-button-db654e60.js";import{E as y}from"./el-tag-502532be.js";import{_ as D}from"./Table.vue_vue_type_script_lang-7c045d14.js";import{g as x,d as w,s as S}from"./index-b5ce5768.js";import{u as k}from"./useTable-33fbf556.js";import{_ as P}from"./Write.vue_vue_type_script_setup_true_lang-f542b125.js";import{_ as C}from"./Detail.vue_vue_type_script_setup_true_lang-c3f29e42.js";import{u as z}from"./useCrudSchemas-20aa38fb.js";import"./el-card-5462e81c.js";import"./el-popper-e807c34e.js";import"./constants-daa80c71.js";import"./Form-36172ad2.js";import"./el-col-fc8d7358.js";import"./el-input-8aeae2e7.js";import"./use-form-item-26b56bf2.js";import"./use-form-common-props-fb52f9dc.js";import"./tsxHelper-e4c8a2f3.js";import"./el-pagination-45b42c6a.js";import"./index-c1f96e8b.js";import"./debounce-c46dfee1.js";import"./el-input-number-82bc11c6.js";import"./el-divider-02c6ca72.js";import"./InputPassword-b4e001c2.js";import"./style.css_vue_type_style_index_0_src_true_lang-f142c16d.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-6cfef7cf.js";import"./IconPicker-b5e488b2.js";import"./vnode-ab3b56d7.js";import"./aria-ecee1d93.js";import"./index-204fdd7c.js";import"./useForm-3f633ad7.js";import"./useIcon-ee936d1b.js";import"./el-overlay-e8a9b3d5.js";import"./refs-de36d506.js";import"./el-image-viewer-6550f294.js";import"./el-dropdown-item-bbfaac29.js";import"./index-45f6cee9.js";import"./el-message-box-607fa7c6.js";import"./useValidator-35515b5d.js";import"./Descriptions-97b89e35.js";import"./tree-b59d36bb.js";const E={class:"mb-10px"};function I(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!h(e)}const R=l({__name:"ExampleDialog",setup(l){const h=o([]),{tableRegister:R,tableState:L,tableMethods:T}=k({fetchDataApi:async()=>{const{currentPage:e,pageSize:a}=L,t=await x({pageIndex:n(e),pageSize:n(a),...n(N)});return{list:t.data.list,total:t.data.total}},fetchDelApi:async()=>!!(await w(n(h)))}),{loading:F,dataList:M,total:V,currentPage:Y,pageSize:A}=L,{getList:H,getElTableExpose:U,delList:q}=T,N=o({}),O=e=>{N.value=e,H()},{t:Q}=j(),W=i([{field:"selection",search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0},table:{type:"selection"}},{field:"index",label:Q("tableDemo.index"),type:"index",search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0}},{field:"title",label:Q("tableDemo.title"),search:{component:"Input"},form:{component:"Input",colProps:{span:24}},detail:{span:24}},{field:"author",label:Q("tableDemo.author"),search:{hidden:!0}},{field:"display_time",label:Q("tableDemo.displayTime"),search:{hidden:!0},form:{component:"DatePicker",componentProps:{type:"datetime",valueFormat:"YYYY-MM-DD HH:mm:ss"}}},{field:"importance",label:Q("tableDemo.importance"),search:{hidden:!0},form:{component:"Select",componentProps:{style:{width:"100%"},options:[{label:"重要",value:3},{label:"良好",value:2},{label:"一般",value:1}]}},detail:{slots:{default:e=>s(y,{type:1===e.importance?"success":2===e.importance?"warning":"danger"},{default:()=>[1===e.importance?Q("tableDemo.important"):2===e.importance?Q("tableDemo.good"):Q("tableDemo.commonly")]})}}},{field:"pageviews",label:Q("tableDemo.pageviews"),search:{hidden:!0},form:{component:"InputNumber",value:0}},{field:"content",label:Q("exampleDemo.content"),search:{hidden:!0},table:{show:!1},form:{component:"Editor",colProps:{span:24}},detail:{span:24,slots:{default:e=>s("div",{innerHTML:e.content},null)}}},{field:"action",width:"260px",label:Q("tableDemo.action"),search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0},table:{slots:{default:e=>{let a,t,l;return s(r,null,[s(b,{type:"primary",onClick:()=>ae(e.row,"edit")},I(a=Q("exampleDemo.edit"))?a:{default:()=>[a]}),s(b,{type:"success",onClick:()=>ae(e.row,"detail")},I(t=Q("exampleDemo.detail"))?t:{default:()=>[t]}),s(b,{type:"danger",onClick:()=>ee(e.row)},I(l=Q("exampleDemo.del"))?l:{default:()=>[l]})])}}}}]),{allSchemas:B}=z(W),J=o(!1),K=o(""),Z=o(null),$=o(""),G=()=>{K.value=Q("exampleDemo.add"),Z.value=null,J.value=!0,$.value=""},X=o(!1),ee=async e=>{const a=await U();h.value=e?[e.id]:(null==a?void 0:a.getSelectionRows().map((e=>e.id)))||[],X.value=!0,await q(n(h).length).finally((()=>{X.value=!1}))},ae=(e,a)=>{K.value=Q("edit"===a?"exampleDemo.edit":"exampleDemo.detail"),$.value=a,Z.value=e,J.value=!0},te=o(),le=o(!1),oe=async()=>{const e=n(te),a=await(null==e?void 0:e.submit());if(a){le.value=!0;await S(a).catch((()=>{})).finally((()=>{le.value=!1}))&&(J.value=!1,Y.value=1,H())}};return(l,o)=>(m(),p(r,null,[s(n(e),null,{default:d((()=>[s(n(a),{schema:n(B).searchSchema,onSearch:O,onReset:O},null,8,["schema"]),u("div",E,[s(n(b),{type:"primary",onClick:G},{default:d((()=>[c(_(n(Q)("exampleDemo.add")),1)])),_:1}),s(n(b),{loading:X.value,type:"danger",onClick:o[0]||(o[0]=e=>ee(null))},{default:d((()=>[c(_(n(Q)("exampleDemo.del")),1)])),_:1},8,["loading"])]),s(n(D),{pageSize:n(A),"onUpdate:pageSize":o[1]||(o[1]=e=>f(A)?A.value=e:null),currentPage:n(Y),"onUpdate:currentPage":o[2]||(o[2]=e=>f(Y)?Y.value=e:null),columns:n(B).tableColumns,data:n(M),loading:n(F),pagination:{total:n(V)},onRegister:n(R)},null,8,["pageSize","currentPage","columns","data","loading","pagination","onRegister"])])),_:1}),s(n(t),{modelValue:J.value,"onUpdate:modelValue":o[4]||(o[4]=e=>J.value=e),title:K.value},{footer:d((()=>["detail"!==$.value?(m(),v(n(b),{key:0,type:"primary",loading:le.value,onClick:oe},{default:d((()=>[c(_(n(Q)("exampleDemo.save")),1)])),_:1},8,["loading"])):g("",!0),s(n(b),{onClick:o[3]||(o[3]=e=>J.value=!1)},{default:d((()=>[c(_(n(Q)("dialogDemo.close")),1)])),_:1})])),default:d((()=>["detail"!==$.value?(m(),v(P,{key:0,ref_key:"writeRef",ref:te,"form-schema":n(B).formSchema,"current-row":Z.value},null,8,["form-schema","current-row"])):g("",!0),"detail"===$.value?(m(),v(C,{key:1,"detail-schema":n(B).detailSchema,"current-row":Z.value},null,8,["detail-schema","current-row"])):g("",!0)])),_:1},8,["modelValue","title"])],64))}});export{R as default};
