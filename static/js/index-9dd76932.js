import{u as g}from"./vue-router-d96b1f02.js";import{_ as x}from"./index-2e290413.js";import{h as y,i as h,j as b,_ as w}from"./naive-ui-8dcb3f34.js";import{r as c,L as k,M as I,I as e,Q as r,K as t,N as m,c as N,R as V,S as B}from"./@vue-f3b292d9.js";import"./pinia-7d80c4c9.js";import"./vue-demi-71ba0ef2.js";import"./vue-i18n-b16300aa.js";import"./@intlify-6a34b7c7.js";import"./axios-707ed124.js";import"./lodash-es-cabc0acd.js";import"./vooks-a2e41fa6.js";import"./evtd-b614532e.js";import"./@emotion-8a8e73f6.js";import"./seemly-5600174a.js";import"./vueuc-213d5319.js";import"./@css-render-7c395183.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-d3958e6a.js";import"./treemate-25c27bff.js";import"./date-fns-7e9adca6.js";import"./date-fns-tz-e1edd251.js";import"./async-validator-dee29e8b.js";const R=p=>(V("data-v-ec0c8876"),p=p(),B(),p),C={class:"login-box main-box"},S=R(()=>m("div",{class:"title"},"BNpay登录",-1)),D={__name:"index",setup(p){const u=g(),s=c({account:"",password:""}),l=c(),d=_=>{var a;_.preventDefault();const o=message.loading("Verifying",{duration:0});(a=l.value)==null||a.validate(n=>{n?message.error("Invalid"):message.success("Valid"),o.destroy()})};return(_,o)=>{const a=h,n=b,f=w,v=y;return k(),I("div",C,[S,e(v,{class:"login-form",ref_key:"formRef",ref:l,"label-width":80,model:t(s)},{default:r(()=>[e(n,{label:"请输入您的邮箱/手机号码",path:"account"},{default:r(()=>[e(a,{value:t(s).account,"onUpdate:value":o[0]||(o[0]=i=>t(s).account=i),placeholder:""},null,8,["value"])]),_:1}),e(n,{label:"密码",path:"password"},{default:r(()=>[e(a,{value:t(s).password,"onUpdate:value":o[1]||(o[1]=i=>t(s).password=i),placeholder:""},null,8,["value"])]),_:1}),e(n,null,{default:r(()=>[e(f,{onClick:d,class:"login-btn",type:"primary"},{default:r(()=>[N(" 登录 ")]),_:1})]),_:1})]),_:1},8,["model"]),m("div",{class:"register",onClick:o[2]||(o[2]=i=>t(u).push("/register"))}," 创建一个BNpay账号 ")])}}},eo=x(D,[["__scopeId","data-v-ec0c8876"]]);export{eo as default};