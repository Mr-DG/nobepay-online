import{i as r}from"./vue-demi-71ba0ef2.js";import{D as p,r as l,x as u}from"./@vue-f3b292d9.js";/*!
  * pinia v2.0.34
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const f=Symbol();var o;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(o||(o={}));function _(){const t=p(!0),s=t.run(()=>l({}));let c=[],i=[];const a=u({install(e){a._a=e,e.provide(f,a),e.config.globalProperties.$pinia=a,i.forEach(n=>c.push(n)),i=[]},use(e){return!this._a&&!r?i.push(e):c.push(e),this},_p:c,_a:null,_e:t,_s:new Map,state:s});return a}export{_ as c};
