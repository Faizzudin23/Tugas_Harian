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


// LANGKAH 3 : BIKIN KASIR
// 1. GLOBAL SCOPE
const NAMA_WARUNG = "Kedai Senja Bahagia";
const TARIF_PAJAK = 0.11;


cetakJudul();

// 2. FUNCTION CETAK JUDUL
function cetakJudul() {
    // Menggunakan NAMA_WARUNG dari global scope tanpa parameter
    console.log("=== " + NAMA_WARUNG.toUpperCase() + " ===");
}


// 3 & 4. FUNCTION PABRIK KASIR (Closure & Data Privat)
function buatKasir(namaKasir, modalAwal) {
    // Data privat menggunakan let (tidak bisa diakses atau diubah langsung dari luar)
    let saldoKas = modalAwal;
    let jumlahTransaksi = 0;
    let riwayat = [];

    return {
        // 5. Catat penjualan
        catatPenjualan(namaMenu, harga, jumlah) {
            let subtotal = harga * jumlah;
            let pajak = subtotal * TARIF_PAJAK;
            let total = subtotal + pajak;

            saldoKas += total;
            jumlahTransaksi++;
            riwayat.push({ namaMenu, jumlah, total });

            return total;
        },

        // 6. Ambil kas
        ambilKas(jumlah) {
            if (jumlah > saldoKas) {
                return false; // Gagal jika melebihi saldo
            }
            saldoKas -= jumlah;
            return true; // Berhasil
        },

        // 7. Cek saldo dan lihat riwayat (dengan salinan)
        cekSaldo() {
            return saldoKas;
        },
        lihatRiwayat() {
            return riwayat.slice(); // Mengembalikan salinan array agar yang asli aman
        },

        // 8. Ringkasan menggunakan template literal
        ringkasan() {
            console.log(`Kasir: ${namaKasir} | Total Transaksi: ${jumlahTransaksi} | Saldo Kas: Rp ${saldoKas}`);
        }
    };
}


// 9. SIMULASI DUA KASIR & TRANSAKSI
let kasirPagi = buatKasir("Rina", 100000);
let kasirMalam = buatKasir("Dodi", 50000);

// Catat minimal 3 penjualan di kasir pagi
kasirPagi.catatPenjualan("Kopi Susu", 20000, 2);
kasirPagi.catatPenjualan("Roti Bakar", 15000, 1);
kasirPagi.catatPenjualan("Teh Manis", 7500, 2);

// Catat minimal 2 penjualan di kasir malam
kasirMalam.catatPenjualan("Nasi Goreng", 25000, 2);
kasirMalam.catatPenjualan("Es Jeruk", 10000, 3);

// Panggil ambilKas minimal 2 kali (1 berhasil, 1 gagal)
console.log("Ambil kas Rp 30.000 (Berhasil):", kasirPagi.ambilKas(30000));
console.log("Ambil kas Rp 9.999.000 (Gagal):", kasirPagi.ambilKas(999999000));

// Cetak ringkasan kedua kasir
console.log("\n--- RINGKASAN AKHIR ---");
kasirPagi.ringkasan();
kasirMalam.ringkasan();


// 10. BUKTIKAN DATA PRIVAT
console.log("\n--- UJI COBA DATA PRIVAT ---");
console.log("Akses langsung kasirPagi.saldoKas:", kasirPagi.saldoKas); // Output: undefined
kasirPagi.saldoKas = 999999; // Mencoba menyisipkan properti baru dari luar
console.log("Saldo setelah dipaksa ubah dari luar (cekSaldo):", kasirPagi.cekSaldo());

// 11. BUKTIKAN SALINAN (SLICE)
console.log("\n--- UJI COBA SALINAN RIWAYAT ---");
let salinanRiwayat = kasirPagi.lihatRiwayat();
salinanRiwayat.push({ namaMenu: "Menu Palsu", jumlah: 99, total: 99999 }); // Tambah data ke salinan

console.log("Panjang riwayat ASLI setelah salinannya di-push:", kasirPagi.lihatRiwayat().length);

// 12. PABRIK DISKON (ARROW FUNCTION)
console.log("\n--- UJI COBA PABRIK DISKON ---");
function buatPenghitungDiskon(persen) {
    return (harga) => harga - (harga * persen / 100);
}

let diskon10 = buatPenghitungDiskon(10);
let diskon25 = buatPenghitungDiskon(25);

console.log("Harga 80000 dengan diskon 10%:", diskon10(80000)); // Output: 72000
console.log("Harga 80000 dengan diskon 25%:", diskon25(80000)); // Output: 60000


// 13. SHADOWING VARIABEL
console.log("\n--- UJI COBA VARIABLE SHADOWING ---");
let statusToko = "Buka"; // Variabel global

function cekStatusToko() {
    let statusToko = "Tutup Sementara"; // Variabel lokal dengan nama yang sama (Shadowing)
    console.log("Nilai di DALAM function:", statusToko);
}

cekStatusToko();
console.log("Nilai di LUAR function (Global):", statusToko);

/*
PERTANYAAN 
1. Kenapa `kasirPagi.saldoKas` menghasilkan `undefined`, padahal method kasir bisa mengubah `saldoKas`? Apa hubungannya dengan closure?
    - Karena saldoKas adalah variabel lokal di dalam scope fungsi, bukan properti objek publik. Hubungannya dengan closure: closure membuat 
      variabel tersebut aman di dalam fungsi tertutup, bisa diakses/diubah oleh method-nya, tapi disembunyikan dari luar.
2. Kenapa saldo `kasirPagi` dan `kasirMalam` terpisah, padahal dibuat dari function yang sama?
    - Karena setiap kali fungsi buatKasir dipanggil, JavaScript membuat ruang memori (lingkungan leksikal) baru yang terpisah 
      total untuk masing-masing variabel lokalnya.
3. Setelah `buatKasir` selesai dijalankan, variabel mana saja yang masih "diingat"? Kenapa tidak hilang?
    - Variabel saldoKas, jumlahTransaksi, dan riwayat. Variabel tersebut tidak hilang karena diikat oleh closure, sehingga 
      JavaScript tetap mempertahankan memorinya selama objek kasir masih digunakan.
4. Kenapa `TARIF_PAJAK` bisa dipakai di dalam method meskipun dideklarasikan di luar `buatKasir`? Apa nama mekanismenya?
    - Karena mekanisme Scope Chain (rantai cakupan), di mana JavaScript akan mencari variabel keluar hingga tingkat global 
      jika tidak menemukannya di dalam fungsi lokal.
5. Kenapa `cetakJudul()` bisa dipanggil sebelum didefinisikan? Tambahkan satu percobaan: ubah menjadi function expression dengan `const`, panggil sebelum didefinisikan, lalu catat hasilnya di komentar dan jadikan baris itu komentar.
    - Karena Hoisting (pengangkatan function declaration ke atas sebelum kode dieksekusi).
      Percobaan:
      // cetakJudulExpr(); // Error: ReferenceError: Cannot access 'cetakJudulExpr' before initialization
         const cetakJudulExpr = function() { console.log("Test"); };
6. Pada `buatPenghitungDiskon`, nilai `persen` tidak dikirim lagi saat `diskon10(80000)` dipanggil. Dari mana function itu mengetahui nilai `persen`?
    - Dari closure, di mana arrow function menyimpan dan "mengingat" nilai parameter persen dari fungsi pembungkusnya (buatPenghitungDiskon) saat pertama kali dibuat.
*/
