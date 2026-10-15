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
1. Pada Potongan A, apa beda `produk.nama` dan `produk[kunci]`? Kenapa `produk.stok` hasilnya `undefined`?
2. Pada Potongan B, kenapa `dompet.saldo` di akhir bernilai 20000, padahal `belanja(10000)` tidak disimpan ke variabel? Apa yang dirujuk oleh `this`?
3. Pada Potongan C, kenapa `for...in` pada array menghasilkan `0` dan `1`, bukan `"Senin"` dan `"Selasa"`? Kenapa `for...of` pada object `kopi` menghasilkan error?
  console.log(huruf);           // Tebakan : K, o, p, i (v)
}

for (let x of kopi) {
    console.log(x);             // Tebakan : error : object is not iterable
}

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
