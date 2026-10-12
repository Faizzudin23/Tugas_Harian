// LANGKAH 1 : TEBAK -> CEK
// ### Potongan A

if (0) {
  console.log("1: masuk");
}
// Hasil Tebakan    : kosong
// Hasil Asli       : tidak ada
if ("0") {
  console.log("2: masuk");
}
// Hasil Tebakan    : 2: masuk
// Hasil Asli       : 2: masuk
if ("") {
  console.log("3: masuk");
}
// Hasil Tebakan    : kosong
// Hasil Asli       : tidak ada
if ([]) {
  console.log("4: masuk");
}
// Hasil Tebakan    : 4: masuk
// Hasil Asli       : 4: masuk
if (null) {
  console.log("5: masuk");
}
// Hasil Tebakan    : kosong
// Hasil Asli       : tidak ada
if (-1) {
  console.log("6: masuk");
}
// Hasil Tebakan    : 6: masuk
// Hasil Asli       : 6: masuk

// ### Potongan B

let belanja = 120000;

if (belanja >= 25000) {
  console.log("Diskon 5%");
} else if (belanja >= 50000) {
  console.log("Diskon 10%");
} else if (belanja >= 100000) {
  console.log("Diskon 15%");
} else {
  console.log("Tidak ada diskon");
}
// Hasil Tebakan    : Diskon 15%
// Hasil Asli       : Diskon 5%

// ### Potongan C

let hari = "sabtu";

switch (hari) {
  case "jumat":
    console.log("Promo Jumat Berkah");
  case "sabtu":
    console.log("Promo Akhir Pekan");
  case "minggu":
    console.log("Promo Keluarga");
    break;
  default:
    console.log("Tidak ada promo");
}
// Hasil Tebakan    : Promo Akhir Pekan
// Hasil Asli       : Promo Akhir Pekan
//                    Promo Keluarga 

/*
PERTANYAAN :
1. Pada Potongan A, kenapa `"0"` dan `[]` tetap masuk ke dalam `if`, padahal terlihat seperti kosong?
    - Karena "0" bukanlah string kosong melainkan punya nilai 0 dalam bentuk teks, dan [] juga termasuk dalam tipe thruthy sehingga,
      dua tipe nilai expression diatas termasuk ke dalam nilai true.
2. Pada Potongan B, `belanja` bernilai 120000 tetapi hasilnya bukan "Diskon 15%". Kenapa? Bagaimana cara memperbaikinya?
    - Karena kondisi pertama yaitu : 
        if (belanja >= 25000) {
            console.log("Diskon 5%");
            } 
      Dalam struktur logika nilai 120000 memang melebihi nilai 25000, maka dari itu perintah didalam kurung kurawal langsung dijalankan.
    - Untuk memperbaikinya bisa dilakukan dengan cara memutar posisi urutan syaratnya, dimulai dari yang terbesar yaitu 100000 diletakkan
      pada urutan pertama sebelum nilai lainnya.
3. Pada Potongan C, kenapa yang tercetak dua baris? Apa yang harus ditambahkan agar hanya satu baris yang tercetak?
    - Karena peletakan break berada dibawah case "sabtu" sehingga perintah console.log dilakukan sampai perintah menemukan baris break, 
      barulah perintah berhenti berjalan.
    - Agar hanya satu baris yang bisa tercetak, maka bisa menambahkan break setiap kali setelah console.log pada indentasi case sehingga,
      setiap kali perintah menemukan "jalan" untuk bisa menampilkan output ke terminal, perintah akan langsung berhenti.
*/

