import{d as e,O as r,o as s,c as t,f as o,t as a,e as n,w as i,a as l,k as m,A as c}from"./index-4429a9b6.js";import{E as u}from"./el-button-db654e60.js";const p={class:"flex justify-center"},f={class:"text-center"},d=["src"],x={class:"text-14px text-[var(--el-color-info)]"},g={class:"mt-20px"},v=e({__name:"Error",props:{type:r.string.validate((e=>["404","500","403"].includes(e))).def("404")},emits:["errorClick"],setup(e,{emit:r}){const{t:v}=m(),y={404:{url:"/assets/404-1759fece.svg",message:v("error.pageError"),buttonText:v("error.returnToHome")},500:{url:"/assets/500-8fda557c.svg",message:v("error.networkError"),buttonText:v("error.returnToHome")},403:{url:"/assets/403-af24f6bf.svg",message:v("error.noPermission"),buttonText:v("error.returnToHome")}},T=e,b=r,k=()=>{b("errorClick",T.type)};return(r,m)=>(s(),t("div",p,[o("div",f,[o("img",{width:"350",src:y[e.type].url,alt:""},null,8,d),o("div",x,a(y[e.type].message),1),o("div",g,[n(l(u),{type:"primary",onClick:k},{default:i((()=>[c(a(y[e.type].buttonText),1)])),_:1})])])]))}});export{v as _};
