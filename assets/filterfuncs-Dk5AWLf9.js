const i=(r,e)=>{switch(r){case"free":return e==null?void 0:e.filter(t=>t.price===0);case"notfree":return e==null?void 0:e.filter(t=>t.price!==0);case"oldest":return e==null?void 0:e.slice().reverse();case"new":return e;default:return e}};export{i as d};
