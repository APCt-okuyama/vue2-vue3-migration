import{F as e}from"./Form-36172ad2.js";import{u as r}from"./useForm-3f633ad7.js";import{u as a}from"./useValidator-35515b5d.js";import{d as t,q as s,M as o,o as m,i,a as u}from"./index-4429a9b6.js";const n=t({__name:"Write",props:{currentRow:{type:Object,default:()=>null},formSchema:{type:Array,default:()=>[]}},setup(t,{expose:n}){const{required:c}=a(),l=t,p=s({id:[c()],status:[c()],createTime:[c()],remark:[c()]}),{formRegister:d,formMethods:f}=r(),{setValues:h,getFormData:g,getElFormExpose:j}=f;return o((()=>l.currentRow),(e=>{e&&h(e)}),{deep:!0,immediate:!0}),n({submit:async()=>{const e=await j();if(await(null==e?void 0:e.validate().catch((e=>{})))){return await g()}}}),(r,a)=>(m(),i(u(e),{rules:p,onRegister:u(d),schema:t.formSchema},null,8,["rules","onRegister","schema"]))}});export{n as _};