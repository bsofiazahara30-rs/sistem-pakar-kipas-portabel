// PENGUJIAN: skenario dan tingkat kesesuaian
// Pengujian
const S=[[["F3","F4"],["D1"]],[["F5","F11","F14"],["D2"]],[["F3","F7"],["D5"]],[["F1","F2"],["D4"]],[["F10"],["D6"]],[["F1"],[]]];
let ok=0;const rows=S.map((s,i)=>{const r=infer(s[0]),a=r.fin.join(","),e=s[1].join(",");const y=a==e;if(y)ok++;
 return `<tr><td>${i+1}</td><td>${s[0].join(", ")}</td><td>${r.fired.join(", ")||"-"}</td><td>${e||"Belum dapat disimpulkan"}</td><td>${a||"Belum dapat disimpulkan"}</td><td class="${y?"ok":"bad"}">${y?"Sesuai":"Tidak sesuai"}</td></tr>`;}).join("");
$("v-u").innerHTML=`<div class="card"><h2>Skenario pengujian</h2><p class="sub">Setiap skenario dijalankan langsung oleh mesin inferensi, lalu dibandingkan dengan hasil yang diharapkan dari basis aturan.</p><div class="tw"><table><tr><th>No</th><th>Fakta masukan</th><th>Aturan berjalan</th><th>Diharapkan</th><th>Hasil sistem</th><th>Status</th></tr>${rows}</table></div>
<p><b>Tingkat kesesuaian</b> = (${ok} / ${S.length}) x 100% = <b>${(ok/S.length*100).toFixed(0)}%</b></p></div>`;
