// BASIS PENGETAHUAN: fakta (F), kesimpulan antara (M), diagnosis (D), aturan (R)
const F={F1:"Kipas tidak berputar sama sekali saat tombol ditekan",F2:"Lampu indikator tidak menyala",F3:"Kipas berputar lambat atau lemah",F4:"Kipas hanya hidup sebentar (kurang dari 10 menit) lalu mati",F5:"Saat dicas, lampu indikator pengisian tidak menyala",F6:"Kipas hanya hidup jika kabel charger tetap terpasang",F7:"Terdengar bunyi berdecit atau kasar dari bagian putaran",F8:"Baling-baling tersangkut rambut, debu, atau benda lain",F9:"Bodi atau baterai terasa panas saat dipakai atau dicas",F10:"Bodi atau baterai tampak menggembung",F11:"Port USB longgar atau kabel harus digoyang agar terisi",F12:"Tombol pengatur kecepatan tidak merespons",F13:"Putaran mati-hidup sendiri (putus-putus)",F14:"Port charging kotor atau berkarat"};
const M={M1:"Baterai lemah atau kapasitas turun",M2:"Gangguan jalur pengisian",M3:"Hambatan mekanik pada putaran",M4:"Gangguan catu daya atau kontrol"};
const D={
D1:["Baterai aus","Ganti baterai dengan tipe dan kapasitas sama; pastikan kutub benar."],
D2:["Port charging kotor atau longgar","Bersihkan port dengan sikat kering, cek kabel lain, solder ulang atau ganti port jika longgar."],
D3:["Baling-baling tersangkut atau kotor","Matikan kipas, bongkar penutup, bersihkan rambut dan debu dari poros."],
D4:["Saklar atau modul kontrol rusak","Periksa solderan saklar, ganti saklar atau papan kontrol."],
D5:["Bearing atau poros motor aus","Beri pelumas ringan pada poros; jika masih berisik, ganti motor atau bearing."],
D6:["Baterai berisiko, tidak aman dipakai","Hentikan pemakaian dan pengisian, jauhkan dari panas, buang baterai ke tempat daur ulang resmi."],
D7:["Modul pengisian rusak","Periksa modul pengisian dan sambungan baterai, ganti modul jika panas berlebih saat dicas."]};
const R=[["R1",["F4"],"M1"],["R2",["F3","F2"],"M1"],["R3",["F6"],"M1"],["R4",["F5"],"M2"],["R5",["F11"],"M2"],["R6",["F14"],"M2"],["R7",["F7"],"M3"],["R8",["F8"],"M3"],["R9",["F12"],"M4"],["R10",["F13"],"M4"],["R11",["F1","F2"],"M4"],["R12",["M1"],"D1"],["R13",["M2",["F11","F14"]],"D2"],["R14",["M2","F9"],"D7"],["R15",["M3","F8"],"D3"],["R16",["M3","F7","F3"],"D5"],["R17",["M4",["F1","F13"]],"D4"],["R18",["F10"],"D6"],["R19",["M1","F9"],"D6"]];
