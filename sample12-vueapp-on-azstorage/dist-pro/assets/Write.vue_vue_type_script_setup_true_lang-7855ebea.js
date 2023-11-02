import{F as e}from"./Form-36172ad2.js";import{u as o}from"./useForm-3f633ad7.js";import{u as a}from"./useValidator-35515b5d.js";import{d as n,q as t,e as l,A as s,F as i,M as m,o as c,i as p,a as r,k as u}from"./index-4429a9b6.js";import{g as d}from"./index-557139e1.js";import{E as b}from"./el-tag-502532be.js";import{E as f}from"./el-button-db654e60.js";const h=n({__name:"Write",props:{currentRow:{type:Object,default:()=>null}},setup(n,{expose:h}){const{t:w}=u(),{required:y}=a(),v=n,g=t([{field:"type",label:"菜单类型",component:"RadioButton",value:0,colProps:{span:24},componentProps:{options:[{label:"目录",value:0},{label:"菜单",value:1}],on:{change:async e=>{const o=await j();1===e?(k([{field:"component",path:"componentProps.disabled",value:!1}]),P({component:""})):(k([{field:"component",path:"componentProps.disabled",value:!0}]),void 0===o.parentId?P({component:"#"}):P({component:"##"}))}}}},{field:"parentId",label:"父级菜单",component:"TreeSelect",componentProps:{nodeKey:"id",props:{label:"title",value:"id",children:"children"},highlightCurrent:!0,expandOnClickNode:!1,checkStrictly:!0,checkOnClickNode:!0,clearable:!0,on:{change:async e=>{const o=await j();e&&0===o.type?P({component:"##"}):e||0!==o.type?1===o.type&&P({component:""}):P({component:"#"})}}},optionApi:async()=>(await d()).data.list||[]},{field:"meta.title",label:w("menu.menuName"),component:"Input"},{field:"component",label:"组件",component:"Input",value:"#",componentProps:{disabled:!0,placeholder:"#为顶级目录，##为子目录"}},{field:"name",label:w("menu.name"),component:"Input"},{field:"meta.icon",label:w("menu.icon"),component:"Input"},{field:"path",label:w("menu.path"),component:"Input"},{field:"meta.activeMenu",label:w("menu.activeMenu"),component:"Input"},{field:"status",label:w("menu.status"),component:"Select",componentProps:{options:[{label:w("userDemo.disable"),value:0},{label:w("userDemo.enable"),value:1}]}},{field:"permissionList",label:w("menu.permission"),component:"CheckboxGroup",colProps:{span:24},formItemProps:{slots:{default:()=>l(i,null,[l(b,{class:"mx-1",closable:!0,disableTransitions:!1},{default:()=>[s("新增")]}),l(b,{class:"mx-1",closable:!0,disableTransitions:!1},{default:()=>[s("编辑")]}),l(b,{class:"mx-1",closable:!0,disableTransitions:!1},{default:()=>[s("删除")]}),l(f,{type:"primary",size:"small",onClick:()=>{}},{default:()=>[s("添加权限")]})])}}},{field:"meta.hidden",label:w("menu.hidden"),component:"Switch"},{field:"meta.alwaysShow",label:w("menu.alwaysShow"),component:"Switch"},{field:"meta.noCache",label:w("menu.noCache"),component:"Switch"},{field:"meta.breadcrumb",label:w("menu.breadcrumb"),component:"Switch"},{field:"meta.affix",label:w("menu.affix"),component:"Switch"},{field:"meta.noTagsView",label:w("menu.noTagsView"),component:"Switch"},{field:"meta.canTo",label:w("menu.canTo"),component:"Switch"}]),x=t({component:[y()],path:[y()],"meta.title":[y()]}),{formRegister:S,formMethods:I}=o(),{setValues:P,getFormData:j,getElFormExpose:T,setSchema:k}=I;return m((()=>v.currentRow),(e=>{e&&P(e)}),{deep:!0,immediate:!0}),h({submit:async()=>{const e=await T();if(await(null==e?void 0:e.validate().catch((e=>{})))){return await j()}}}),(o,a)=>(c(),p(r(e),{rules:x,onRegister:r(S),schema:g},null,8,["rules","onRegister","schema"]))}});export{h as _};
