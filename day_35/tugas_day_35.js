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


// LANGKAH 2 : PERBAIKAN
// Cek stok. Seharusnya tercetak: Stok aman
const stok = 10;
if (stok > 5) {
  let pesanStok = "Stok aman";
    console.log(pesanStok);         // FIX : memindahkan posisi console.log ke dalam blok if
}

// Potongan 10%. Seharusnya tercetak: 45000
function hitungPotongan(harga) {
  const potongan = harga * 0.1;
  return hargaAkhir = harga - potongan; // FIX : menambah variabel agar value bisa ditampung
}
hitungPotongan(50000);
console.log(hargaAkhir);            // FIX : mengganti potongan menjadi variabel hargaAkhir

// Sambutan. Seharusnya tercetak: Selamat datang di Kedai Senja
console.log(sambutan());
function sambutan() {               // FIX : menghapus 'const sambutan' dan menggantinya menjadi function sambutan() agar bisa di hoist
  return "Selamat datang di Kedai Senja";
};

// Kota. Seharusnya tercetak: Yogyakarta
let kota = "Yogyakarta";
console.log(kota);              // FIX : memindahkan posisi console.log(kota) setelah variabel dideklarasikan.

// Total awal 100000. Diskon 90000 hanya dipakai di dalam blok.
// Seharusnya setelah blok, total tetap: 100000
var total = 100000;
if (true) {
  let total = 90000;            // FIX : mengganti deklarasi var menjadi let
}
console.log(total);

// Saldo kas. Seharusnya setelah tambahKas(50000): 150000
let saldoKas = 100000;
function tambahKas(jumlah) {
  //let saldoKas = 10000;           // FIX : menghapus baris deklarasi 'let saldoKas' agar program mengambil value pada global scope

  saldoKas += jumlah;
}
tambahKas(50000);
console.log(saldoKas);

// Nomor antrean. Seharusnya tercetak: 1 2 3
function buatAntrean() {
  let nomor = 0;            // FIX : memindahkan baris 'let nomor = 0;' ke dalam blok function buatAntrean().
  return function () {
    nomor++;
    return nomor;
  };
}
const ambilNomor = buatAntrean();
console.log(ambilNomor(), ambilNomor(), ambilNomor());

// Dompet. Seharusnya setelah belanja(30000), cekSaldo() mengembalikan: 70000
function buatDompet(saldoAwal) {
  let saldo = saldoAwal;
  return {
    belanja(jumlah) {
      saldo -= jumlah;
    },
    cekSaldo() {
      return saldo;             // FIX : meniadakan 'this.' karena memang tidak diperlukan.
    },
  };
}
const dompet = buatDompet(100000);
dompet.belanja(30000);
console.log(dompet.cekSaldo());

/*
PERTANYAAN :
1. Tulis ke-8 kesalahan tadi dalam satu kalimat singkat masing-masing (apa salahnya, dan perbaikannya apa).
    - memindahkan posisi console.log ke dalam blok if
    - menambah variabel agar value bisa ditangkap
    - mengganti potongan menjadi variabel hargaAkhir
    - menghapus 'const sambutan' menjadi function sambutan() agar bisa di hoist
    - memindahkan console.log kebawah setelah variabel kota dideklarasikan
    - menghapus baris deklarasi 'let saldoKas' agar program mengambil value pada global scope
    - memindahkan baris 'let nomor = 0;' ke dalam blok function buatAntrean()
    - meniadakan 'this.' karena memang tidak diperlukan
2. Mana kesalahan yang menyebabkan error di console, dan mana yang tidak error tetapi hasilnya salah?
    // Cek stok. Seharusnya tercetak: Stok aman
    const stok = 10;
    if (stok > 5) {
      let pesanStok = "Stok aman";
    }
    console.log(pesanStok);
    karena variabel pesanStok belum dibuat.
3. Kenapa `let saldoKas = 0;` di dalam `tambahKas` membuat `saldoKas` di luar tidak berubah? Apa istilah untuk kejadian ini?
    - karena perintah function tambahKas mengambil variabel saldoKas didalamnya, sedangkan console.log(saldoKas) mengambil value dari global scope
4. Kenapa `this.saldo` di dalam `cekSaldo` menghasilkan `undefined`, padahal `saldo` ada di `buatDompet`?
    - Jika menggunakan this.saldo, JavaScript akan mencari properti bernama saldo di dalam objek yang dikembalikan ({ belanja, cekSaldo }). Karena variabel 
      saldo sebenarnya adalah variabel lokal (closure) di dalam fungsi buatDompet, bukan properti objek, maka this.saldo akan menghasilkan undefined.
*/
