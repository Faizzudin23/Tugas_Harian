// LANGKAH 1 : MENEBAK BARU JALANKAN KODE
console.log(7 + 3 * 2);
// Tebakan  : 13
// Alasan   : Karena operasi perkalian didahulukan baru dilanjutkan dengan operasi pertambahan.
console.log((7 + 3) * 2);
// Tebakan  : 20
// Alasan   : Karena operasi perhitungan di dalam kurung didahulukan baru dilanjutkan di luar kurung.
console.log(17 % 5);
// Tebakan  : 2
// Alasan   : Karena 17 dibagi 5 akan menyisakan angka 2 
console.log(2 ** 3);
// Tebakan  : 8
// Alasan   : Karena 2 pangkat 3 artinya 2*2*2 = 8
console.log(5 == "5");
// Tebakan  : true
// Alasan   : Karena "==" artinya membandingkan hasilnya, karena output dari number 5 dan string 5 hasilnya sama maka hasilnya true.
console.log(5 === "5");
// Tebakan  : false
// Alasan   : Karena "===" artinya membandingkan hasil dan tipe data nilai yang keluar, karena output number 5 dan string 5 memiliki tipe data yang berbeda, maka hasilnya false.
console.log(true && false);
// Tebakan  : false
// Alasan   : Karena penggunaan "&&" harus memenuhi syarat pertama dan kedua dan bernilai true, karena ada satu nilai berupa false, maka output yang dihasilkan adalah false.
console.log(true || false);
// Tebakan  : true
// Alasan   : Karena penggunaan "||" bisa mengeluarkan output true jika salah satunya memiliki nilai true, karena sudah ada satu nilai berupa true, maka hasilnya adalah true.
console.log(!true);
// Tebakan  : false
// Alasan   : Karena penggunaan "!" lebih mudah diartikan untuk membalikkan nilai boolean, karena nilai awalnya true, maka setelah memakai ! hasilnya adalah false.
console.log(10 > 5 && 3 > 8);
// Tebakan  : false
// Alasan   : Karena 10 > 5 bernilai true, 3 > 8 bernilai false, sedangkan penggunaan "&&" menuntut kedua nilai berupa true jika ingin menghasilkan output true.

/*
PERTANYAAN 
1. Untuk tebakan yang **meleset**, tulis kenapa hasilnya begitu. Jika semua benar, tulis tebakan yang menurutmu paling sulit dan alasannya.
    - 
2. Kenapa `7 + 3 * 2` hasilnya `13`, bukan `20`?
    - 
3. Kenapa `5 == "5"` hasilnya `true`, tetapi `5 === "5"` hasilnya `false`?
    - 
*/ 
