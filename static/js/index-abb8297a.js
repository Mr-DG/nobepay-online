import{o as u}from"./index-34dc9a5e.js";import{r as a}from"./naive-ui-8dcb3f34.js";import{j as c,r as i,L as f,V as m,Q as _,n as M,K as e,H as g,z as w}from"./@vue-f3b292d9.js";const h={__name:"index",props:{...a.props,title:{type:String,default:()=>"默认标题"},preset:{type:String,default:()=>"card"}},setup(t,{expose:r}){const l=t,n=c(()=>u(l,["show"])),o=i(!1);return r({openModal:()=>{o.value=!0},closeModal:()=>{o.value=!1}}),(d,s)=>(f(),m(e(a),M({show:e(o),"onUpdate:show":s[0]||(s[0]=p=>g(o)?o.value=p:null),class:"nmodal"},e(n),{bordered:!1,role:"dialog","aria-modal":"true"}),{default:_(()=>[w(d.$slots,"default")]),_:3},16,["show"]))}},k=h;export{k as P};