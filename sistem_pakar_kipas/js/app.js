// ANTARMUKA: konsultasi, validasi, hasil, penjelasan, basis aturan
// Nav
const tabs=[["k","Konsultasi"],["u","Pengujian"],["b","Basis aturan"]];
const nav=document.getElementById("nav");
tabs.forEach(([k,t])=>{const b=document.createElement("button");b.textContent=t;b.id="t-"+k;b.onclick=()=>show(k);nav.appendChild(b);});
function show(k){tabs.forEach(([x])=>{document.getElementById("v-"+x).classList.toggle("hide",x!=k);document.getElementById("t-"+x).classList.toggle("on",x==k);});}

// Konsultasi
document.getElementById("qs").innerHTML=Object.keys(F).map(k=>`<label class="f"><input type="checkbox" value="${k}"><b>${k}</b><span>${F[k]}</span></label>`).join("");
const $=id=>document.getElementById(id);
$("go").onclick=()=>{$("intro").classList.add("hide");$("form").classList.remove("hide");};
$("run").onclick=()=>{
 const f=[...document.querySelectorAll("#qs input:checked")].map(x=>x.value);
 if(!f.length){$("msg").textContent="Pilih minimal satu gejala sebelum diagnosis.";return;}
 if(f.includes("F1")&&["F3","F4","F13"].some(x=>f.includes(x))){$("msg").textContent="Gejala F1 (tidak berputar sama sekali) bertentangan dengan F3, F4, atau F13 (kipas masih berputar). Periksa kembali pilihan Anda.";return;}
 $("msg").textContent="";const r=infer(f);$("form").classList.add("hide");$("res").classList.remove("hide");$("res").innerHTML=resultHTML(r)+`<button class="btn p" id="again">Konsultasi ulang</button>`;
 $("again").onclick=()=>{document.querySelectorAll("#qs input").forEach(x=>x.checked=false);$("res").classList.add("hide");$("form").classList.remove("hide");};
};
function trace(r){return `<div class="tw"><table><tr><th>Iterasi</th><th>Memori kerja</th><th>Aturan aktif</th><th>Aturan dipilih</th><th>Fakta baru</th></tr>
<tr><td>0</td><td>${r.init.join(", ")}</td><td>-</td><td>-</td><td>-</td></tr>
${r.tr.map(t=>`<tr><td>${t.i}</td><td>${t.wm.join(", ")}</td><td>${t.act.join(", ")}</td><td>${t.pick}</td><td>${t.nw}</td></tr>`).join("")}</table></div>`;}
function resultHTML(r){
 let h=`<div class="card"><h2>Hasil diagnosis</h2>`;
 if(!r.fin.length){h+=`<div class="dx"><h3>Belum dapat disimpulkan</h3><p>Gejala yang dipilih belum cukup untuk mencapai diagnosis akhir.${r.w.size>r.init.length?" Dugaan sementara: "+[...r.w].filter(x=>x[0]=="M").map(nm).join(", ")+".":""} Tambahkan gejala lain (misalnya kondisi lampu, suara, atau panas pada bodi) lalu ulangi konsultasi, atau bawa ke teknisi.</p></div>`;}
 r.fin.forEach(d=>{h+=`<div class="dx ${d=="D6"?"w":""}"><h3>${d}: ${D[d][0]}</h3><p>${D[d][1]}</p></div>`;});
 h+=`</div><div class="card"><h2>Penjelasan</h2><p>Fakta masukan: ${r.init.map(x=>x+" ("+F[x].toLowerCase()+")").join("; ")}.</p><p>Aturan yang dijalankan:</p><ul>${r.fired.map(id=>{const x=R.find(q=>q[0]==id);return `<li><b>${id}</b>: JIKA ${ps(x)} MAKA ${x[2]} (${nm(x[2])})</li>`;}).join("")||"<li>Tidak ada aturan yang dapat dijalankan.</li>"}</ul><p>Jejak iterasi Forward Chaining:</p>${trace(r)}</div>`;
 return h;}

// Basis aturan
$("v-b").innerHTML=`<div class="card"><h2>Fakta</h2><div class="tw"><table><tr><th>Kode</th><th>Gejala</th><th>Domain nilai</th></tr>${Object.keys(F).map(k=>`<tr><td>${k}</td><td>${F[k]}</td><td>Ya / Tidak</td></tr>`).join("")}</table></div></div>
<div class="card"><h2>Kesimpulan antara dan akhir</h2><div class="tw"><table>${Object.keys(M).map(k=>`<tr><td>${k}</td><td>${M[k]}</td></tr>`).join("")}${Object.keys(D).map(k=>`<tr><td>${k}</td><td>${D[k][0]}</td></tr>`).join("")}</table></div></div>
<div class="card"><h2>Aturan produksi (${R.length})</h2><div class="tw"><table><tr><th>Kode</th><th>JIKA</th><th>MAKA</th></tr>${R.map(r=>`<tr><td>${r[0]}</td><td>${ps(r)}</td><td>${r[2]} ${nm(r[2])}</td></tr>`).join("")}</table></div></div>`;
show("k");
