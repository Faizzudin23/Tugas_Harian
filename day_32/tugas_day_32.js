// ### Potongan A
let menu = ["Kopi", "Teh", "Roti", "Susu"];
// (air), kopi, (teh), roti, susu, (jus)
menu.push("Jus");
menu.unshift("Air");
let terakhirDibuang = menu.pop();
let pertamaDibuang = menu.shift();
menu.splice(1, 1);
let irisan = menu.slice(1, 3);

console.log(terakhirDibuang);       // Tebakan : Jus (v)
console.log(pertamaDibuang);        // Tebakan : Air (v) 
console.log(menu);                  // Tebakan : Kopi, Roti, Susu (v)
console.log(irisan);                // Tebakan : Roti, Susu (v)
console.log(menu.indexOf("Susu"));  // Tebakan : 2 (v)
console.log(menu.indexOf("Nasi"));  // Tebakan : undefined (x) 
console.log(menu.includes("Kopi")); // Tebakan : false (v)
console.log(menu[menu.length - 1]); // Tebakan : Susu (v)

// ### Potongan B

function tambah(a, b) {
  return a + b;
}

function cetakTambah(a, b) {
  console.log(a + b);
}

let x = tambah(2, 3);
let y = cetakTambah(2, 3);
console.log(x);             // Tebakan : 5 (v)
console.log(y);             // Tebakan : 5 (x)

// ### Potongan C

const hitungDiskonPersen = (harga, persen = 10) => harga - (harga * persen) / 100;
console.log(hitungDiskonPersen(50000, 20));         // Tebakan : 40000
console.log(hitungDiskonPersen(50000));             // Tebakan : 45000

function cekAngka(n) {
  if (n < 0) {
    return "negatif";
    console.log("Baris ini muncul atau tidak?");
  }
  return "bukan negatif";
}

console.log(cekAngka(-5));              // Tebakan : negatif (v)
                                        //           Baris ini muncul atau tidak?
console.log(cekAngka(5));               // Tebakan : bukan negatif (v)


/* 
PERTANYAAN 
1. Pada Potongan A, kenapa `menu` dan `irisan` isinya berbeda? Mana method yang mengubah array aslinya, dan mana yang tidak?
    - Karena data pada list menu terkena efek dari .pop, .shift, dan .splice, yang bisa memengaruhi isi data pada menu.
    - Sedangkan irisan memakai .slice dimana ia mengembalikan sebagian data dalam array tanpa memengaruhi array aslinya.
2. Pada Potongan B, apa beda `tambah` dan `cetakTambah`? Kenapa `y` bernilai `undefined`?
    - pada function tambah hasilnya langsung dibuat dengan perintah return, sehingga console.log(x) akan menampilkan angka 5.
    - function cetakTambah memakai console.log(a + b) agar hasil perintah bisa dibuat.
    - y menjadi undefined karena perintahnya adalah console.log(y), sedangkan nilai y sendiri adalah console.log(2 + 3).
3. Pada Potongan C, kenapa `hitungDiskonPersen(50000)` tetap menghasilkan angka? Apakah baris `console.log("Baris ini muncul atau tidak?")` tercetak? Kenapa?
    - karena memakai arrow function saat mendeklarasikan variabel hitungDiskonPersen, dan rumusnya langsung dijalankan sehingga hasil akhirnya berupa angka
    - tidak muncul, karena perintah return ditutup dengan nilai "negatif" dan ;, maka dari itu, console.log tidak dijalankan.
*/

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
  return subtotal * 0.11;
};
// menambah return untuk menyimpan hasil operasi perhitungan

console.log(daftarBelanja, adaRoti, terakhir);
console.log(hitungDiskon(100000, 20));
console.log(hitungPajak(80000));

// Total dengan pajak. Seharusnya hitungTotal(80000, 8800) = 88800
const hitungTotal = (subtotal, pajak) => subtotal + pajak;
console.log(hitungTotal(80000, 8800));
// menonaktifkan baris diatas agar tidak dieksekusi.


/*
PERTANYAAN : 
1. Tulis ke-7 kesalahan tadi dalam satu kalimat singkat masing-masing (apa salahnya, dan perbaikannya apa).
    - mengubah metode array agar sesuai dengan hasil yang diinginkan, menambah perintah return untuk memproses dan menyimpan hasilnya.
    - .unshift -> .push
    - .slice -> .splice
    - .indexOf -> .includes
    - menambah operasi '- 1'
    - menambah return
2. Mana kesalahan yang menyebabkan error di console, dan mana yang tidak error tetapi hasilnya salah?
    - console.log(hitungTotal(80000, 8800));
      const hitungTotal = (subtotal, pajak) => subtotal + pajak;
    - karena tidak bisa hoisting makanya kodenya error

3. Kenapa `hitungDiskon` dan `hitungPajak` sama-sama menghasilkan `undefined`, padahal cara menulisnya berbeda?
    - Karena lupa menambah perintah return sehingga prosesnya tidak terjadi dan tersimpan.
*/
