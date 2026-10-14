### Potongan A
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

### Potongan B

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

### Potongan C

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


