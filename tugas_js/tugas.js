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
    normal: 15000
    },
];
console.log("Nama Perusahaan : " + usaha.namaPerusahaan);
console.log("Asal Kota : " + usaha["kota"]);
console.log("Jasa Pertama : " + daftarMenu[0].kilat);

let dataUsahaArray = [namaUsaha, usaha.namaPengusaha, usaha.kota, tahunBerdiri, statusBuka, usaha.nomorTelepon, usaha.webSite];
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
// === LANGKAH 4 : ===
// === LANGKAH 5 : ===
