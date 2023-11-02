import{F as e}from"./Form-36172ad2.js";import{u as t}from"./useForm-3f633ad7.js";import{d as o,q as a,M as l,o as m,i as r,a as s,k as n}from"./index-4429a9b6.js";import{u as p}from"./useValidator-35515b5d.js";const i=o({__name:"Write",props:{currentRow:{type:Object,default:()=>null}},setup(o,{expose:i}){const{required:u}=p(),c=o,{t:d}=n(),{formRegister:f,formMethods:b}=t(),{setValues:P,getFormData:v,getElFormExpose:x,setSchema:g}=b,h=a([{field:"title",label:d("exampleDemo.title"),component:"Input",formItemProps:{rules:[u()]},colProps:{span:24}},{field:"author",label:d("exampleDemo.author"),component:"Input",formItemProps:{rules:[u()]}},{field:"display_time",label:d("exampleDemo.displayTime"),component:"DatePicker",componentProps:{type:"datetime",valueFormat:"YYYY-MM-DD HH:mm:ss"},formItemProps:{rules:[u()]}},{field:"importance",label:d("exampleDemo.importance"),component:"Select",formItemProps:{rules:[u()]},componentProps:{options:[{label:"重要",value:3},{label:"良好",value:2},{label:"一般",value:1}]}},{field:"pageviews",label:d("exampleDemo.pageviews"),component:"InputNumber",value:0,formItemProps:{rules:[u()]}},{field:"content",component:"Editor",colProps:{span:24},componentProps:{defaultHtml:"",onChange:e=>{P({content:e.getHtml()})}},label:d("exampleDemo.content")}]),D=a({title:[u()],author:[u()],importance:[u()],pageviews:[u()],display_time:[u()],content:[u()]});return l((()=>c.currentRow),(e=>{e&&(P(e),g([{field:"content",path:"componentProps.defaultHtml",value:e.content}]))}),{deep:!0,immediate:!0}),i({submit:async()=>{const e=await x();if(await(null==e?void 0:e.validate().catch((e=>{})))){return await v()}}}),(t,o)=>(m(),r(s(e),{rules:D,onRegister:s(f),schema:h},null,8,["rules","onRegister","schema"]))}});export{i as _};
