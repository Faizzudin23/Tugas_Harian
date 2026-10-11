// LANGKAH 1 : MENEBAK BARU JALANKAN KODE
console.log(7 + 3 * 2);
// Tebakan  : 13
// Alasan   : Karena operasi perkalian didahulukan baru dilanjutkan 
// dengan operasi pertambahan.
console.log((7 + 3) * 2);
// Tebakan  : 20
// Alasan   : Karena operasi perhitungan di dalam kurung didahulukan 
// baru dilanjutkan di luar kurung.
console.log(17 % 5);
// Tebakan  : 2
// Alasan   : Karena 17 dibagi 5 akan menyisakan angka 2 
console.log(2 ** 3);
// Tebakan  : 8
// Alasan   : Karena 2 pangkat 3 artinya 2*2*2 = 8
console.log(5 == "5");
// Tebakan  : true
// Alasan   : Karena "==" artinya membandingkan hasilnya, 
// karena output dari number 5 dan string 5 hasilnya sama maka hasilnya true.
console.log(5 === "5");
// Tebakan  : false
// Alasan   : Karena "===" artinya membandingkan hasil dan tipe data nilai yang 
// keluar, karena output number 5 dan string 5 memiliki tipe data yang berbeda, maka hasilnya false.
console.log(true && false);
// Tebakan  : false
// Alasan   : Karena penggunaan "&&" harus memenuhi syarat pertama dan kedua dan bernilai true, 
// karena ada satu nilai berupa false, maka output yang dihasilkan adalah false.
console.log(true || false);
// Tebakan  : true
// Alasan   : Karena penggunaan "||" bisa mengeluarkan output true jika salah satunya memiliki nilai true, 
// karena sudah ada satu nilai berupa true, maka hasilnya adalah true.
console.log(!true);
// Tebakan  : false
// Alasan   : Karena penggunaan "!" lebih mudah diartikan untuk membalikkan nilai boolean, 
// karena nilai awalnya true, maka setelah memakai ! hasilnya adalah false.
console.log(10 > 5 && 3 > 8);
// Tebakan  : false
// Alasan   : Karena 10 > 5 bernilai true, 3 > 8 bernilai false, sedangkan penggunaan "&&" menuntut 
// kedua nilai berupa true jika ingin menghasilkan output true.

/*
PERTANYAAN 
1. Untuk tebakan yang **meleset**, tulis kenapa hasilnya begitu. Jika semua benar, tulis tebakan yang menurutmu paling sulit dan alasannya.
    - langkah 10, karena banyak operator yang harus dibaca
2. Kenapa `7 + 3 * 2` hasilnya `13`, bukan `20`?
    - karena operasi perkalian didahulukan baru operasi pertambahan
3. Kenapa `5 == "5"` hasilnya `true`, tetapi `5 === "5"` hasilnya `false`?
    - Karena penggunaan "==" hanya membandingkan nilainya saja, sedangkan "===" membandingkan nilai dan tipe datanya, maka dari itu hasil perbandingannya adalah false.
*/ 


// LANGKAH 2 : 
const hargaKopi = 18000;
const hargaTeh = 7500;
let jumlahMember = 5;
let sudahMember = true;
let uangDiterima = "51000";

// Total 2 kopi + 2 teh. Seharusnya: 51000
// let totalPesanan = hargaKopi + hargaTeh * 2; <<< Kode Asli
// Kode yang seharusnya ditulis adalah :
let totalPesanan = hargaKopi * 2 + hargaTeh * 2;    // FIX : (hargaKopi dikali 2) ditambah (hargaTeh dikali 2) 

// Uang diterima sama persis dengan total? Seharusnya: true
// let uangPas = uangDiterima == totalPesanan;  <<< Kode Asli
// Kode yang seharusnya ditulis adalah :
uangDiterima = 51000;   // FIX : Mengubah tipe data string menjadi tipe data number
let uangPas = uangDiterima === totalPesanan;
// Variabel uangDiterima diubah dulu tipe datanya dari string menjadi number dengan menghapus petik dua, 
// lalu untuk membandingkan nilai dan tipe datanya dipakailah "===" untuk menentukan apa 

// Tambah 1 member baru. Seharusnya jumlahMember jadi 6
// jumlahMember + 1;    <<< Kode Asli
// Kode yang seharusnya ditulis adalah :
jumlahMember += 1;  // FIX : operator yang dipakai seharusnya adalah += untuk menambahkan nilai
// Operator yang dipakai seharusnya adalah "+=" untuk menambah dan menyimpan nilai

// Dapat diskon jika sudah member ATAU total lebih dari 100000. Seharusnya: true
// let dapatDiskon = sudahMember && totalPesanan > 100000;  <<< Kode Asli
let dapatDiskon = sudahMember || totalPesanan > 100000;     // FIX : Mengubah operator && (AND) menjadi || (OR)

console.log(totalPesanan, uangPas, jumlahMember, dapatDiskon);

/*
PERTANYAAN :
1. Tulis 4 kesalahan tadi dalam satu kalimat singkat masing-masing (apa salahnya, dan perbaikannya apa).
    - Menambahkan operator * 2 pada totalPesanan, menghapus "" agar tipe datanya 
      menjadi number, mengganti operator menjadi += agar penghitungan bisa tersimpan, mengganti && menjadi || agar output nilainya menjadi true
2. Jika kamu mengganti `==` menjadi `===` pada `uangPas`, ternyata hasilnya `false`. Kenapa? Apa yang harus diubah supaya hasilnya `true`?
    - Karena '===' melakukan perbandingan lebih ketat yaitu nilai dan tipe datanya, karena itulah hasilnya false, 
      yang perlu dilakukan adalah mengganti tipe data uangDiterima dari string menjadi number dengan menghapus petik dua
3. Apa beda `&&` dan `||`? Jelaskan dengan contoh dari kode `dapatDiskon`.
    - Dalam menggunakan && kedua syarat harus terpenuhi jika ingin menghasilkan output true, sedangkan dengan ||, jika salah satu nilainya
      bernilai true maka output yang dihasilkan adalah true
    - let dapatDiskon = sudahMember && totalPesanan > 100000;   >>> outputnya false
      let dapatDiskon = sudahMember || totalPesanan > 100000;   >>> outputnya true
*/ 


// LANGKAH 3 : MEMBUAT KASIR SENDIRI
const namaBarang = "Sepatu Lari Niku";
const hargaSatuan = 245000;
const TARIF_PAJAK = 0.12;

let jumlahBeli = 2;
let uangDibayar = 600000;

let subTotal = hargaSatuan * jumlahBeli;
let pajak = subTotal * TARIF_PAJAK;
let totalBayar = subTotal + pajak;
let kembalian = uangDibayar - totalBayar;
let modulus = jumlahBeli % 2;
let genap = modulus === 0;

let uangCukup = uangDibayar >= totalBayar;
let gratisKantong = subTotal >= 300000 || jumlahBeli >= 5;
let termasukPajak = totalBayar >= subTotal;

console.log("Hitungan Awal      : Rp. " + subTotal);
console.log("Biaya Pajak        : Rp. " + pajak);
console.log("Total Biaya        : Rp. " + totalBayar);
console.log("Kembalian          : Rp. " + kembalian);
console.log("Sisa Modulus       : " + modulus);
console.log("Pembelian Genap?   : " + genap);
console.log("Uang Cukup?        : " + uangCukup);
console.log("Gratis Kantong?    : " + gratisKantong);
console.log("Termasuk Pajak?    : " + termasukPajak);

/*
PERTANYAAN :
1. Pilih **satu** variabel Boolean buatanmu. Jelaskan artinya dengan kata-kata sendiri. Apa hasilnya sekarang, dan kenapa?
    - let uangCukup = uangDibayar >= totalBayar;
    - let artinya mendeklarasikan sebuah variabel yang nilainya bisa diubah.
    - uangCukup adalah variabel atau wadah untuk nilai.
    - = adalah operasi penugasaan dasar menyimpan nilai pada variabel.
    - uangDibayar adalah nilai pembandingan pertama.
    - >= adalah operasi perbandingan antara nilai pertama dengan nilai kedua.
    - totalBayar adalah nilai kedua yang akan dibandingkan dengan nilai pertama.
    - ; adalah tanda bahwa satu perintah telah dibuat.

2. Coba ganti `&&` menjadi `||` (atau sebaliknya) di salah satu Boolean-mu. Apakah hasilnya berubah? Tulis hasil sebelum dan sesudah, lalu jelaskan.
    - let gratisKantong = subTotal >= 300000 || jumlahBeli >= 5;    >>> Hasilnya True
    - let gratisKantong = subTotal >= 300000 && jumlahBeli >= 5;    >>> Hasilnya False
    - Hasilnya berbeda karena penggunaan keduanya menerapkan dua hal berbeda, || akan menghasilkan nilai true jika salah satu syaratnya memiliki nilai
      true, sedangkan &&, jika ingin menghasilkan nilai true maka kedua syarat harus terpenuhi menjadi true.

3. Tulis satu contoh di programmu di mana tanda kurung `()` mengubah hasil perhitungan. Apa hasilnya **dengan** kurung dan **tanpa** kurung?
    - 
*/
