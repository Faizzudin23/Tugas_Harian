// LANGKAH 2
let daftarBelanja = ["Kopi", "Teh", "Roti"];

// Tambah "Susu" di akhir daftar. Seharusnya: ["Kopi", "Teh", "Roti", "Susu"]
daftarBelanja.push("Susu");
// mengubah metode .unshift menjadi .push agar data muncul di akhir list.

// Hapus "Teh" (indeks 1) dari daftar. Seharusnya: ["Kopi", "Roti", "Susu"]
daftarBelanja.splice(1, 1);
// mengubah metode .slice menjadi .splice agar data Teh bisa terhapus.

// Cek apakah "Roti" ada di daftar. Seharusnya: true
let adaRoti = daftarBelanja.includes("Roti");
// mengubah metode .indexOf menjadi .includes agar nilai yang dihasilkan antara false atau true.

// Elemen terakhir daftar. Seharusnya: "Susu"
let terakhir = daftarBelanja[daftarBelanja.length - 1];
// menambahkan '- 1' didalam daftarBelanja.length agar bisa menghasilkan angka yang akan dipakai sebagai index

// Harga setelah diskon. Seharusnya hitungDiskon(100000, 20) = 80000
function hitungDiskon(harga, persen) {
  return harga - (harga * persen) / 100;
}
// menambah return untuk menyimpan hasil operasi perhitungan

// Pajak 11%. Seharusnya hitungPajak(80000) = 8800
const hitungPajak = (subtotal) => {
  subtotal * 0.11;
};
// menambah return untuk menyimpan hasil operasi perhitungan

// Perhitungan Total
function hitungTotal (a, b) {
    return a + b;
};
// membuat dan memindahkan function perhitungan total sebelum console.log

console.log(daftarBelanja, adaRoti, terakhir);
console.log(hitungDiskon(100000, 20));
console.log(hitungPajak(80000));

// Total dengan pajak. Seharusnya hitungTotal(80000, 8800) = 88800
console.log(hitungTotal(80000, 8800));
// const hitungTotal = (subtotal, pajak) => subtotal + pajak;
// menonaktifkan baris diatas agar tidak dieksekusi.
