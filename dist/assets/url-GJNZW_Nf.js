const e=s=>new URLSearchParams(location.search).get(s),n=(s,a,o="")=>{a=`${a}`;const t=location.hash.split("?"),r=new URLSearchParams(o||t[1]);r.set(s,a),history.pushState({},"",`${location.pathname}${t[0]}?${r.toString()}`)};export{e as g,n as s};