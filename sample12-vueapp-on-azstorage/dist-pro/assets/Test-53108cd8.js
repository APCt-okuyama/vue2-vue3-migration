import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-5e09bafc.js";import{k as t,di as a,d as s,r,z as d,Y as l,o as u,i as p,w as i,e as o,A as n,a as m,Z as f,Q as _}from"./index-4429a9b6.js";import{E as y}from"./el-button-db654e60.js";import{E as c}from"./el-divider-02c6ca72.js";import{E as j,a as v}from"./el-col-fc8d7358.js";import"./el-card-5462e81c.js";import"./el-popper-e807c34e.js";import"./constants-daa80c71.js";import"./index-c1f96e8b.js";import"./use-form-item-26b56bf2.js";import"./use-form-common-props-fb52f9dc.js";const g=e=>{const{t:s}=t(),r=a.currentRoute.value.meta.permission||[];if(!e)throw new Error(s("permission.hasPermission"));return!!r.includes(e)},w=s({__name:"Test",setup(t){const a=r("add");return setTimeout((()=>{a.value="view"}),3e3),(t,s)=>{const r=d("Permission"),w=l("hasPermi");return u(),p(m(e),null,{default:i((()=>[o(m(c),null,{default:i((()=>[n("组件方式判断（已经全局注册，支持动态修改）")])),_:1}),o(m(v),{gutter:20},{default:i((()=>[o(m(j),{span:8},{default:i((()=>[n(" 新增权限： "),o(r,{permission:"add"},{default:i((()=>[o(m(y),{type:"primary"},{default:i((()=>[n(" Add ")])),_:1})])),_:1})])),_:1}),o(m(j),{span:8},{default:i((()=>[n(" 删除权限： "),o(r,{permission:"delete"},{default:i((()=>[o(m(y),{type:"danger"},{default:i((()=>[n(" Delete ")])),_:1})])),_:1})])),_:1}),o(m(j),{span:8},{default:i((()=>[n(" 3秒后切换查看权限： "),o(r,{permission:a.value},{default:i((()=>[o(m(y),{type:"primary"},{default:i((()=>[n(" View ")])),_:1})])),_:1},8,["permission"])])),_:1})])),_:1}),o(m(c),null,{default:i((()=>[n("指令方式判断（已经全局注册，不支持动态修改）")])),_:1}),o(m(v),{gutter:20},{default:i((()=>[o(m(j),{span:8},{default:i((()=>[n(" 新增权限： "),f((u(),p(m(y),{type:"primary"},{default:i((()=>[n(" Add ")])),_:1})),[[w,"add"]])])),_:1}),o(m(j),{span:8},{default:i((()=>[n(" 删除权限： "),f((u(),p(m(y),{type:"danger"},{default:i((()=>[n(" Delete ")])),_:1})),[[w,"delete"]])])),_:1}),o(m(j),{span:8},{default:i((()=>[n(" 3秒后切换查看权限（无法动态修改）： "),f((u(),p(m(y),{type:"primary"},{default:i((()=>[n(" View ")])),_:1})),[[w,a.value]])])),_:1})])),_:1}),o(m(c),null,{default:i((()=>[n("函数方式判断")])),_:1}),o(m(v),{gutter:20},{default:i((()=>[o(m(j),{span:8},{default:i((()=>[n(" 新增权限： "),m(g)("add")?(u(),p(m(y),{key:0,type:"primary"},{default:i((()=>[n(" Add ")])),_:1})):_("",!0)])),_:1}),o(m(j),{span:8},{default:i((()=>[n(" 删除权限： "),m(g)("delete")?(u(),p(m(y),{key:0,type:"danger"},{default:i((()=>[n(" Delete ")])),_:1})):_("",!0)])),_:1}),o(m(j),{span:8},{default:i((()=>[n(" 3秒后切换查看权限： "),m(g)(m(a.value))?(u(),p(m(y),{key:0,type:"primary"},{default:i((()=>[n(" View ")])),_:1})):_("",!0)])),_:1})])),_:1})])),_:1})}}});export{w as default};