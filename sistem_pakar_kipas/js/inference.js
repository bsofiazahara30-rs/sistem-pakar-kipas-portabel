// MESIN INFERENSI: Forward Chaining
const sat=(p,w)=>Array.isArray(p)?p.some(x=>w.has(x)):w.has(p);
const ps=r=>r[1].map(p=>Array.isArray(p)?"("+p.join(" OR ")+")":p).join(" AND ");
function infer(facts){const w=new Set(facts),fired=[],tr=[];let i=1;
 for(;;){const act=R.filter(r=>!fired.includes(r[0])&&!w.has(r[2])&&r[1].every(p=>sat(p,w)));
  if(!act.length)break;const r=act[0];tr.push({i,wm:[...w],act:act.map(a=>a[0]),pick:r[0],nw:r[2]});w.add(r[2]);fired.push(r[0]);i++;}
 const fin=[...w].filter(x=>x[0]=="D").sort((a,b)=>(b=="D6")-(a=="D6"));
 return{w,fired,tr,fin,init:facts};}
const nm=k=>F[k]||M[k]||(D[k]&&D[k][0])||k;
const ruleOf=c=>R.filter(r=>r[2]==c);
