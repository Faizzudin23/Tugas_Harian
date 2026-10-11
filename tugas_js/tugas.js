// === LANGKAH 1 : ===
const namaUsaha = "Kopi Senja";
const kotaUsaha = "Yogyakarta";
const tahunBerdiri = 2020;      // FIX : menghapus petik dua pada "2020" menjadi 2020
const TARIF_PAJAK = 0.11;
let statusBuka = true
// let website;  // FIX : Menonaktifkan variabel website tanpa value
let website = null;
var jumlahProduk = 3;

let produk = ["Kopi Susu", "Es Teh Manis", "Roti Bakar"];
let hargaProduk = [18000, 7500, 15000];

console.log(namaUsaha);             // FIX : mengubah namausaha -> namaUsaha
console.log("Kota: " + kotaUsaha);  // FIX : mengubah Console.log -> console.log
console.log("Tahun berdiri berikutnya: " + (tahunBerdiri + 1)); //

// TARIF_PAJAK = 0.12;      // FIX : menonaktifkan variabel TARIF_PAJAK di baris ini
let hargaKopiSetelahPajak = hargaProduk[0] * (1 + TARIF_PAJAK); // FIX : mengubah simbol perkalian (x) menjadi (*) sesuai dengan aturan
console.log("Harga kopi + pajak: " + hargaKopiSetelahPajak);

let hargaTermurah = Math.min(hargaProduk[0], hargaProduk[1], hargaProduk[2]);
console.log("Termurah: " + hargaTermurah);
console.log("Produk ke-3: " + produk[2]);       // FIX : mengubah string "... ke-4..." menjadi "...ke-3..." dan pemanggilan index variabel produk dari 3 menjadi 2.

/*
    No  |    Baris/Bagian   |           Jenis           |                   Penyebab        |               Perbaikan              |
    1   | Line 3            | Salah, tapi tidak error   | value awal memakai petik dua      | menghapus petik dua                  |
    2   | Line 6            | Error                     | tidak diberikannya value          | menambahkan // untuk komen           |
    3   | Line 13           | Error                     | salah penulisan value namausaha   | menggantinya jadi namaUsaha          |
    4   | Line 14           | Error                     | salah penulisan Console.log       | menggantinya jadi console.log        |
    5   | Line 17           | Salah, tapi tidak error   | salah memanggil variabel konstan  | menambahkan // untuk komen           |
    6   | Line 18           | Error                     | salah menulis kode perkalian      | mengganti (x) menjadi (*)            |
    7   | Line 23           | Salah, tapi tidak error   | salah menulis index yang dipanggil| mengganti index 3 menjadi 2          |
*/

/*
  1. Mengapa `namausaha` dan `namaUsaha` dianggap dua hal berbeda oleh JavaScript?
    -   karena JavaScript menerapkan sensitive case, yaitu besar kecilnya huruf akan memengaruhi jalannya program, jika ada satu perbedaan kecil saja pada penulisan kode variable, maka variable tersebut tidak akan bisa diambil datanya. 
  2. Mengapa baris `TARIF_PAJAK = 0.12;` ditolak, sementara mengubah `statusBuka` diperbolehkan?
    -   karena variable TARIF_PAJAK sudah dideklarasikan dengan const, yang artinya value didalamnya tidak bisa diubah sesuka hati, sedangkan statusBuka dideklarasikan dengan let yang sifatnya bisa menimpa value diatasnya.
  3. Mengapa `"2020" + 1` menghasilkan `"20201"`, dan apa perbaikan yang kamu pilih?
    -   karena value yang menggunakan petik dua termasuk ke dalam tipe data string, meskipun yang dimasukkan berupa angka maka angka tersebut dianggap sebagai teks, bukan sebagai tipe data number / integer.
    -   perbaikan yang saya pilih adalah menghapus kedua tanda petik sehingga menyisakan angka saja.
*/

// === LANGKAH 2 : ===
const usaha = {
    namaPerusahaan: "Fried Chicken",
    namaPengusaha: "Akhmad Rudi Yanto",
    kota: "Semarang",
    tahunBuka: 2023,
    statusPembukaan: true,
    nomorTelepon: "081465935782",
    webSite: null,
    instagram: "@kopisenja",
};

let daftarMenu = [
    {
    kilat: 35000
    },
    {
    cepat: 25000
    },
    {
    normal: 20000
    },
    {
    whitening: 15000
    },
    {
    kinclongin: 10000
    },
];
console.log("Nama Perusahaan : " + usaha.namaPerusahaan);
console.log("Asal Kota : " + usaha["kota"]);
console.log("Jasa Pertama : " + daftarMenu[0].kilat);

let dataUsahaArray = [namaUsaha, usaha.namaPengusaha, usaha.kota, tahunBerdiri, statusBuka, usaha.nomorTelepon, usaha.webSite];

const totalHargaProduk = hargaProduk[0] + hargaProduk[1] + hargaProduk[2] + hargaProduk[3];
const rataRataHarga = totalHargaProduk / hargaProduk.length;
console.log(`Akun Instagram : ${usaha.instagram}`);
console.log(`Produk Baru    : ${produk[3]} (Rp ${hargaProduk[3]})`);
console.log(`Rata-rata Harga: Rp ${rataRataHarga}`);
/* 
PERTANYAAN :
1. Mengapa nomor WhatsApp (contoh `"08123456789"`) lebih tepat disimpan sebagai **string**? Beri satu alasan konkret.
    - Nomor telepon (seperti "08123456789") diawali dengan angka 0. Jika disimpan sebagai tipe data number (angka), JavaScript secara otomatis akan 
      menghapus angka 0 di depan (leading zero) karena dalam matematika angka 0812... bernilai sama dengan 812.... Oleh karena itu, agar format nomor 
      telepon tetap utuh dengan angka 0 di depannya, ia harus disimpan sebagai string.
2. Mengapa `website` diberi `null`, bukan dibiarkan tanpa nilai seperti di kode awal? Apa bedanya `null` dan `undefined`?
    - website diberi nilai null sebagai bentuk kesengajaan untuk menunjukkan bahwa properti tersebut saat ini memang kosong atau belum memiliki 
      alamat website, tetapi disiapkan untuk diisi di masa mendatang.
    - null: Menandakan "nilai kosong yang disengaja" (diset secara sadar oleh programmer).
    - undefined: Menandakan bahwa suatu variabel atau properti belum pernah diberi nilai sama sekali oleh sistem atau belum didefinisikan.   
3. Mengapa `daftarProduk[4]` tidak berisi produk ke-4, dan apa yang tercetak jika kamu mengaksesnya?
    - Indeks ke-0 adalah produk pertama.
    - Indeks ke-1 adalah produk kedua.
    - Indeks ke-2 adalah produk ketiga.
    - Indeks ke-3 adalah produk keempat.
        Oleh karena itu, daftarProduk[4] sebenarnya merujuk pada produk kelima. Jika indeks tersebut tidak memiliki data di dalamnya, yang akan 
        tercetak di konsol adalah undefined.
*/
// === LANGKAH 3 : ===

// 1. Variabel Pendukung & Perhitungan Usaha
const TAHUN_SEKARANG = 2026;
const usiaUsaha = TAHUN_SEKARANG - usaha.tahunBuka;

// 2. Perhitungan Harga Setelah Pajak (11%)
const hargaKopiSusuPajak = hargaProduk[0] * (1 + TARIF_PAJAK);
const hargaEsTehPajak = hargaProduk[1] * (1 + TARIF_PAJAK);
const hargaRotiBakarPajak = hargaProduk[2] * (1 + TARIF_PAJAK);

// 3. Perhitungan Termurah & Termahal
const hargaTermurah = Math.min(hargaKopiSusuPajak, hargaEsTehPajak, hargaRotiBakarPajak);
const hargaTermahal = Math.max(hargaKopiSusuPajak, hargaEsTehPajak, hargaRotiBakarPajak);

// 4. Format Status & Website untuk Tampilan
const teksStatus = usaha.statusPembukaan ? "Buka" : "Tutup";
const teksWebsite = usaha.webSite === null ? "belum ada" : usaha.webSite;

// 5. Cetak Tampilan Rapi Menggunakan Template Literal
console.log(`\n===== KARTU USAHA =====`);
console.log(`Nama Usaha  : ${usaha.namaPerusahaan}`);
console.log(`Pemilik     : ${usaha.namaPengusaha}`);
console.log(`Kota        : ${usaha.kota}`);
console.log(`Usia Usaha  : ${usiaUsaha} tahun`);
console.log(`Status      : ${teksStatus}`);
console.log(`Website     : ${teksWebsite}`);
console.log(`\nDaftar Produk (harga + PPN 11%):`);
console.log(`1. ${produk[0]} : Rp ${hargaKopiSusuPajak}`);
console.log(`2. ${produk[1]} : Rp ${hargaEsTehPajak}`);
console.log(`3. ${produk[2]} : Rp ${hargaRotiBakarPajak}`);
console.log(`\nTermurah : Rp ${hargaTermurah}`);
console.log(`Termahal : Rp ${hargaTermahal}`);
console.log(`=======================`);

/*
PERTANYAAN LANGKAH 3:

1. Alasan Pemilihan `const` atau `let`:
   - Hampir seluruh variabel utama di langkah ini (`TAHUN_SEKARANG`, `usiaUsaha`, tarif pajak, hasil kalkulasi harga pajak, harga termurah/termahal, hingga teks status) menggunakan `const`. 
   - Alasannya: Nilai-nilai tersebut bersifat tetap atau hanya dihitung sekali di awal dan tidak akan pernah diubah kembali (*re-assigned*) di baris kode berikutnya, sehingga penggunaan `const` jauh lebih aman untuk menjaga integritas data. Tidak ada penggunaan `let` karena tidak ada variabel yang nilainya perlu diubah-ubah di tengah jalan.

2. Perhitungan Manual untuk Produk Pertama (Kopi Susu):
   - Harga awal produk: 18000.
   - Tarif pajak: 11% (0.11).
   - Rumus manual: 18000 + (18000 * 0.11) = 18000 + 1980 = 19980.
   - Hasil dari program: Rp 19980.
   - Kesimpulan: **Sama persis.**

3. Apakah harga yang sudah tercetak ikut berubah otomatis jika harga di object diubah?
   - Tidak, hasil yang sudah tercetak atau tersimpan di variabel hasil kalkulasi tidak akan ikut berubah otomatis (*eager evaluation*). Nilai variabel sudah dikunci berdasarkan angka pada saat perhitungan dijalankan.
   - Pembuktian dengan kode:
     ```javascript
     let hargaAwal = hargaProduk[0]; // 18000
     let hargaPajakLama = hargaAwal * 1.11; // 19980
     
     // Mengubah harga asli di data/object
     hargaProduk[0] = 20000; 
     
     console.log(hargaPajakLama); // Hasilnya akan tetap 19980, bukan ikut berubah menjadi 22200.
     ```
*/
// === LANGKAH 4 : ===
console.log(typeof 42);             // Tebakan : number
// Hasil Asli : number  v
console.log(typeof "42");           // Tebakan : string
// Hasil Asli : string  v
console.log(typeof true);           // Tebakan : boolean
// Hasil Asli : boolean v
console.log(typeof undefined);      // Tebakan : object
// Hasil Asli : undefined   x
console.log(typeof null);           // Tebakan : null
// Hasil Asli : object  x
console.log(typeof [1, 2, 3]);      // Tebakan : array
// Hasil Asli : object  x
console.log(typeof { nama: "Budi" }); //Tebakan : object
// Hasil Asli : object  v
console.log("5" + 3);               // Tebakan : 53
// Hasil Asli : 53  v
console.log("5" * 3);               // Tebakan : 555
// Hasil Asli : 15  x
console.log("abc" * 2);             // Tebakan : abcabc
// Hasil Asli : NaN x
console.log(10 / 0);                // Tebakan : infinity
// Hasil Asli : Infinity    v
console.log(typeof usaha.website);  // Tebakan : array
// Hasil Asli : 

/* PERTANYAAN : 
1. Untuk **setiap tebakan yang meleset**, jelaskan mengapa hasilnya demikian.
    - Karena saya hanya menebak saja tanpa memahami tipe data yang dimunculkan
2. `typeof null` menghasilkan `"object"`. Apakah itu berarti `null` adalah object? Bagaimana kamu menjelaskannya ke teman?
    - null bukanlah sebuah object. Itu adalah salah satu bug bersejarah yang ada sejak versi pertama JavaScript dibuat pada 
      tahun 1995 dan sengaja dipertahankan hingga kini demi kompatibilitas program-program lama.
3. Mengapa `"5" + 3` dan `"5" * 3` menghasilkan jenis hasil yang berbeda?
    - "5" + 3: Menggunakan operator plus (+), yang di JavaScript memiliki dua fungsi ganda yaitu untuk penjumlahan matematika 
      dan penggabungan teks. Karena salah satu sisinya berupa string, JavaScript otomatis mengubah angka 3 menjadi string juga, 
      lalu menggabungkannya menjadi "53" (tipe data string).
    - "5" * 3: Menggunakan operator kali (*) yang murni hanya berfungsi untuk operasi matematika. JavaScript langsung memaksa 
      string "5" berubah menjadi angka asli (type coercion), lalu mengalikannya secara normal, sehingga menghasilkan 15 (tipe 
      data number).
*/
// === LANGKAH 5 : ===

/*
JAWABAN PERTANYAAN LANGKAH 5:

1. Bagian kode mana yang harus diubah vs yang tidak perlu diubah:
   - Yang HARUS DIUBAH: Variabel/perhitungan lama yang mengandalkan indeks atau jumlah tetap (seperti perhitungan `Math.min`, `Math.max`, atau indeks array manual yang sebelumnya hanya mencakup 3 produk). Jika jumlah produk bertambah, variabel lama yang hardcode ke indeks 0-2 harus disesuaikan atau dibuat dinamis agar produk baru ikut terhitung.
   - Yang TIDAK PERLU DIUBAH: Struktur data awal seperti deklarasi object `usaha` dasar, variabel konstan seperti `TARIF_PAJAK` atau `TAHUN_SEKARANG`, dan fungsi dasar lainnya yang sifatnya independen atau menggunakan method otomatis (seperti `push` untuk menambah data baru).

2. Contoh Statement dan Expression dari kode:
   - Contoh Statement 1: `usaha.instagram = "@kopisenja";` (Pernyataan utuh yang menugaskan nilai baru ke properti objek).
   - Contoh Statement 2: `const rataRataHarga = totalHargaProduk / hargaProduk.length;` (Pernyataan deklarasi variabel dan penugasan hasil kalkulasi).
   - Contoh Expression 1: `totalHargaProduk` -> dievaluasi menjadi nilai total penjumlahan semua harga produk saat itu (misal: `50500`).
   - Contoh Expression 2: `hargaProduk.length` -> dievaluasi menjadi jumlah total elemen di dalam array `hargaProduk` (yaitu nilai angka `4`).
*/
