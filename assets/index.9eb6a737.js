import{o as d}from"./dom.bb190f6e.js";import{i as v}from"./index.0686aea5.js";const s=new Map;let i;v&&(d(document,"mousedown",e=>i=e),d(document,"mouseup",e=>{for(const t of s.values())for(const{documentHandler:n}of t)n(e,i)}));function f(e,t){let n=[];return Array.isArray(t.arg)?n=t.arg:t.arg instanceof HTMLElement&&n.push(t.arg),function(a,o){const c=t.instance.popperRef,r=a.target,u=o==null?void 0:o.target,p=!t||!t.instance,m=!r||!u,h=e.contains(r)||e.contains(u),g=e===r,x=n.length&&n.some(l=>l==null?void 0:l.contains(r))||n.length&&n.includes(u),H=c&&(c.contains(r)||c.contains(u));p||m||h||g||x||H||t.value(a,o)}}const y={beforeMount(e,t){s.has(e)||s.set(e,[]),s.get(e).push({documentHandler:f(e,t),bindingFn:t.value})},updated(e,t){s.has(e)||s.set(e,[]);const n=s.get(e),a=n.findIndex(c=>c.bindingFn===t.oldValue),o={documentHandler:f(e,t),bindingFn:t.value};a>=0?n.splice(a,1,o):n.push(o)},unmounted(e){s.delete(e)}};export{y as C};