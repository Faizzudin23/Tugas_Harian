// LANGKAH 1 : MENEBAK
// ### Potongan A

const nama = "Global";

function luar() {
  const nama = "Luar";

  function dalam() {
    const nama = "Dalam";
    console.log(nama);          // Tebakan : Dalam (v)
  }

  dalam();
  console.log(nama);            // Tebakan : Luar (v)
}

luar();
console.log(nama);              // Tebakan : Global (v)

const diskonGlobal = 10;

function hitung(harga) {
  const diskonLokal = 5;
  return harga - diskonGlobal - diskonLokal;
}

console.log(hitung(100));       // Tebakan : 85 (v)

if (true) {
  let pesanBlok = "di dalam blok";
  console.log(pesanBlok);       // Tebakan : "di dalam blok" (v)
}

for (let i = 0; i < 2; i++) {
  console.log("putaran", i);    // Tebakan  : "putaran0", "putaran1" (v)
}

// console.log(pesanBlok)          // Tebakan : ReferenceError: pesanBlok is not defined (v)
// console.log(i)                  // Tebakan : ReferenceError: i is not defined (x)

//### Potongan B

console.log(sapa());    // Tebakan : Halo! (v)

function sapa() {
  return "Halo!";
}

console.log(warna);     // Tebakan : undefined (v)
var warna = "biru";
console.log(warna);     // Tebakan : biru (v)

/*
console.log(lokasi);    // Tebakan : ReferenceError: Cannot access 'lokasi' before initialization (v)
const lokasi = "Sleman";

console.log(salam());       // Tebakan : ReferenceError: Cannot access 'salam' before initialization (v)
const salam = function () { 
    return "Hai"; 
};
*/

//### Potongan C

function buatPenghitung() {
  let hitungan = 0;

  return function () {
    hitungan++;
    return hitungan;
  };
}

const penghitungA = buatPenghitung();
const penghitungB = buatPenghitung();

console.log(penghitungA());     // Tebakan : 1 (v)
console.log(penghitungA());     // Tebakan : 2 (v)
console.log(penghitungA());     // Tebakan : 3 (v)
console.log(penghitungB());     // Tebakan : 1 (v)
console.log(penghitungA());     // Tebakan : 4 (v)

/*
PERTANYAAN : 
1. Pada Potongan A, kenapa tiga `console.log(nama)` menghasilkan nilai yang berbeda? Kenapa `hitung(100)` tetap bisa memakai `diskonGlobal`? Kenapa `pesanBlok` dan `i` error di luar blok?
    - console.log(nama) pada function dalam(), akan memanggil variabel nama yang masih dalam satu scope dengan output "Dalam".
    - console.log(nama) pada function luar(), akan memanggil variabel nama yang berada diluar function dalam(), dengan output "Luar".
    - console.log(nama) yang berada diluar function luar(), akan memanggil variabel nama yang berada pada global scope, sehingga hasilnya "Global".
    - Karena untuk mengakses variabel yang dimaksud, posisi baris perintah harus berada di dalam satu scope yang sama.
2. Pada Potongan B, kenapa `sapa()` bisa dipanggil sebelum didefinisikan, sedangkan `warna` bernilai `undefined`, dan `lokasi` serta `salam` menimbulkan error?
    - Karena terdapat function declaration, yaitu function sapa(), sifatnya bisa di hoist sehingga value yang diminta bisa diambil bahkan sebelum value itu dibuat.
    - Untuk warna sendiri karena dideklarasikan dengan var, maka hoist tetap bisa dilakukan hanya saja nilainya menjadi undefined.
    - Lalu untuk lokasi dan salam() tidak bisa di hoist karena variabel tersebut dideklarasikan dengan const.
3. Pada Potongan C, kenapa `penghitungA` terus bertambah padahal `buatPenghitung` sudah selesai dijalankan? Kenapa `penghitungB` mulai dari 1 lagi?
    - Karena fungsi buatPenghitung() akan terus mengingat dan mengakses variabel dari lingkup scope fungsi itu dibuat.
    - Karena berbeda variabel, karena javascript juga sensitif terhadap perbedaan, besar, dan kecilnya huruf maka penghitungB() dianggap sebagai jalur baru untuk eksekusi perintah.

TEBAKAN MELESET :
console.log(salam());       // Tebakan : ReferenceError: Cannot access 'salam' before initialization (v)
const salam = function () { 
    return "Hai"; 
};
Karena saya kira ada function dan bisa di hoist dan ternyata tetap tidak bisa karena deklarasinya adalah const.
*/
