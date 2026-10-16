// LANGKAH 1 : TEBAK BARU CEK

// ### Potongan A

const produk = { nama: "Kopi Susu", harga: 18000, stok: 10 };

produk.harga = 20000;
produk.kategori = "minuman";
delete produk.stok;
let kunci = "nama";

console.log(produk.nama);               // Tebakan : Kopi Susu  (v)
console.log(produk[kunci]);             // Tebakan : Kopi Susu  (v)
console.log(produk["harga"]);           // Tebakan : 20000      (v)
console.log(produk.stok);               // Tebakan : undefined  (v)
console.log("kategori" in produk);      // Tebakan : true       (v)
console.log("stok" in produk);          // Tebakan : false      (v)
console.log(Object.keys(produk));       // Tebakan : ["nama", "harga", "kategori"]       (v)
console.log(Object.values(produk));     // Tebakan : ["Kopi Susu", "180000", "minuman", ](v)

// ### Potongan B

const dompet = {
  pemilik: "Rina",
  saldo: 50000,

  belanja(jumlah) {
    this.saldo -= jumlah;
    return this.saldo;
  },

  cekSaldo() {
    console.log(this.pemilik + ": Rp " + this.saldo);
  },
};

let sisa = dompet.belanja(20000);
console.log(sisa);          // Tebakan : 30000 (v)
dompet.cekSaldo();          // Tebakan : Rina : Rp. 30000 (v)
dompet.belanja(10000);      // Tebakan : 40000 (x)
dompet.cekSaldo();          // Tebakan : Rina : Rp. 40000 (x)
console.log(dompet.saldo);  // Tebakan : 20000 (x)

// ### Potongan C

const hari = ["Senin", "Selasa"];

for (let nilai of hari) {
  console.log(nilai);           // Tebakan : Senin, Selasa (v)
}

for (let indeks in hari) {
  console.log(indeks);          // Tebakan : 0, 1 (v)
}

const kopi = { nama: "Kopi", harga: 18000 };

for (let kolom in kopi) {
  console.log(kolom + ": " + kopi[kolom]);  // Tebakan : error : kopi is not iterable (x)
}

for (let huruf of "Kopi") {
  console.log(huruf);           // Tebakan : K, o, p, i (v)
}
/*
for (let x of kopi) {
    console.log(x);             // Tebakan : error : object is not iterable
}
*/

/*
PERTANYAAN : 
1. Pada Potongan A, apa beda `produk.nama` dan `produk[kunci]`? Kenapa `produk.stok` hasilnya `undefined`?
    - Bedanya adalah cara mengakses value, produk.nama menggunakan dot notation sedangkan produk[kunci] memakai bracket notation
    - Karena produk.stok terkena perintah delete, sehingga key stok dan value didalamnya dihapus
2. Pada Potongan B, kenapa `dompet.saldo` di akhir bernilai 20000, padahal `belanja(10000)` tidak disimpan ke variabel? Apa yang dirujuk oleh `this`?
    - Karena ada perintah sebelumnya yaitu dompet.belanja yang melakukan operasi pengurangan saldo.
    - Yang dirujuk oleh this adalah dompet.cekSaldo sebelum dompet.belanja
3. Pada Potongan C, kenapa `for...in` pada array menghasilkan `0` dan `1`, bukan `"Senin"` dan `"Selasa"`? Kenapa `for...of` pada object `kopi` menghasilkan error?
    - Karena fungsi for ... in adalah untuk menampilkan indeks dalam array, bukan nilai dari array.
*/


// LANGKAH 2 : PERBAIKI KESALAHAN
const warung = {
  nama: "Warung Senja",
  saldoKas: 100000,

  // Menambah kas. Seharusnya: setelah tambahKas(50000), saldoKas menjadi 150000
  tambahKas(jumlah) {
    warung.saldoKas += jumlah;          // Mengganti saldoKas dengan memakai metode dot notation untuk mengambil key dan value pada variabel warung.
  },

  // Mengambil kas. Seharusnya mengembalikan sisa saldoKas
  ambilKas(jumlah) {
    this.saldoKas -= jumlah;
    return this.saldoKas;               // Menambah perintah return this.saldoKas agar value nya bisa ditangkap dan ditampilkan pada terminal.
  },
};

warung.tambahKas(50000);
console.log(warung.saldoKas);
console.log(warung.ambilKas(30000));

// Key dengan tanda hubung. Seharusnya tercetak: 08123
const kontak = { "no-wa": "08123" };
console.log(kontak["no-wa"]);           // Mengganti kontak.no-wa menjadi kontak["no-wa"] atau mengubah dari dot notation menjadi bracket notation.

// Hapus kataSandi dari akun. Seharusnya tercetak: { nama: 'Rina' }
const akun = { nama: "Rina", kataSandi: "abc123" };
delete akun.kataSandi;                  // Mengganti akun.kataSandi = undefined, menjadi delete akun.kataSandi.
console.log(akun);

// Cetak semua isi array, satu per baris. Seharusnya: Kopi, Teh, Roti
const menu = ["Kopi", "Teh", "Roti"];
for (let item of menu) {                // Mengganti let item in menu menjadi let item of menu
  console.log(item);
}

// Cetak semua properti object. Seharusnya: nama: Warung Senja dan kota: Yogyakarta
const info = { nama: "Warung Senja", kota: "Yogyakarta" };
for (let kolom in info) {               // Mengganti let kolom of info menjadi let kolom in info
  console.log(kolom + ": " + info[kolom]);
}

// Daftar kunci object. Seharusnya: [ 'nama', 'kota' ]
console.log(Object.keys(info));         // Memperbaiki typo 'key' menjadi 'keys'

/*
PERTANYAAN
1. Tulis ke-7 kesalahan tadi dalam satu kalimat singkat masing-masing (apa salahnya, dan perbaikannya apa).
    - menambah variabel warung sebelum mengambil properti saldoKas.
    - menambah perintah return agar nilainya bisa ditangkap dan disimpan.
    - mengubah dari dot notation menjadi bracket notation.
    - mengganti akun.kataSandi menjadi delete akun.kataSandi
    - mengganti 'in' menjadi 'of'
    - mengganti 'of' menjadi 'in'
    - memperbaiki typo 'key' menjadi 'keys'
2. Mana kesalahan yang menyebabkan error di console, dan mana yang tidak error tetapi hasilnya salah?
    - yang menyebabkan error adalah 
        ````const kontak = { "no-wa": "08123" };
            console.log(kontak.no-wa);````
        karena menggunakan dot notation untuk mengambil object
    - yang tidak error tapi hasilnya tidak sesuai
    ````const menu = ["Kopi", "Teh", "Roti"];
        for (let item in menu) {
        console.log(item);
        }````
3. Kenapa `akun.kataSandi = undefined` tidak sama dengan `delete akun.kataSandi`? Tunjukkan bedanya memakai `in`.
    - karena `akun.kataSandi = undefined` itu sama saja dengan mengganti value kataSandi, sedangkan `delete akun.kataSandi` artinya menghapus dari objek akun.
*/
