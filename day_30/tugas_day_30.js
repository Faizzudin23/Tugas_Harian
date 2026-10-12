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
