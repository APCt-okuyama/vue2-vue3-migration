import{u as e}from"./useCrudSchemas-20aa38fb.js";import{d as a,q as l,o as t,i as o,w as d,e as s,a as m,k as n}from"./index-4429a9b6.js";import{_ as i}from"./JsonEditor.vue_vue_type_script_setup_true_lang-6cfef7cf.js";import{_ as p}from"./ContentWrap.vue_vue_type_script_setup_true_lang-5e09bafc.js";import{E as r,a as u}from"./el-col-fc8d7358.js";import"./tree-b59d36bb.js";import"./el-card-5462e81c.js";import"./el-popper-e807c34e.js";import"./constants-daa80c71.js";const c=a({__name:"useCrudSchemas",setup(a){const{t:c}=n(),h=l([{field:"selection",search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0},table:{type:"selection"}},{field:"index",label:c("tableDemo.index"),type:"index",search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0}},{field:"title",label:c("tableDemo.title"),search:{component:"Input"},form:{component:"Input",colProps:{span:24}},detail:{span:24}},{field:"author",label:c("tableDemo.author"),search:{hidden:!0}},{field:"display_time",label:c("tableDemo.displayTime"),search:{hidden:!0},form:{component:"DatePicker",componentProps:{type:"datetime",valueFormat:"YYYY-MM-DD HH:mm:ss"}}},{field:"importance",label:c("tableDemo.importance"),search:{hidden:!0},form:{component:"Select",componentProps:{style:{width:"100%"},options:[{label:"重要",value:3},{label:"良好",value:2},{label:"一般",value:1}]}}},{field:"pageviews",label:c("tableDemo.pageviews"),search:{hidden:!0},form:{component:"InputNumber",value:0}},{field:"content",label:c("exampleDemo.content"),search:{hidden:!0},table:{show:!1},form:{component:"Editor",colProps:{span:24}},detail:{span:24}},{field:"action",width:"260px",label:c("tableDemo.action"),search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0}}]),{allSchemas:f}=e(h);return(e,a)=>(t(),o(m(p),{title:"useCrudSchemas"},{default:d((()=>[s(m(u),{gutter:20},{default:d((()=>[s(m(r),{span:24},{default:d((()=>[s(m(p),{title:"原始数据数据",class:"mt-20px"},{default:d((()=>[s(m(i),{modelValue:h,"onUpdate:modelValue":a[0]||(a[0]=e=>h=e)},null,8,["modelValue"])])),_:1})])),_:1}),s(m(r),{span:24},{default:d((()=>[s(m(p),{title:"查询组件数据结构",class:"mt-20px"},{default:d((()=>[s(m(i),{modelValue:m(f).searchSchema,"onUpdate:modelValue":a[1]||(a[1]=e=>m(f).searchSchema=e)},null,8,["modelValue"])])),_:1})])),_:1}),s(m(r),{span:24},{default:d((()=>[s(m(p),{title:"表单组件数据结构",class:"mt-20px"},{default:d((()=>[s(m(i),{modelValue:m(f).formSchema,"onUpdate:modelValue":a[2]||(a[2]=e=>m(f).formSchema=e)},null,8,["modelValue"])])),_:1})])),_:1}),s(m(r),{span:24},{default:d((()=>[s(m(p),{title:"表格组件数据结构",class:"mt-20px"},{default:d((()=>[s(m(i),{modelValue:m(f).tableColumns,"onUpdate:modelValue":a[3]||(a[3]=e=>m(f).tableColumns=e)},null,8,["modelValue"])])),_:1})])),_:1}),s(m(r),{span:24},{default:d((()=>[s(m(p),{title:"表格组件数据结构",class:"mt-20px"},{default:d((()=>[s(m(i),{modelValue:m(f).detailSchema,"onUpdate:modelValue":a[4]||(a[4]=e=>m(f).detailSchema=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1}))}});export{c as default};
