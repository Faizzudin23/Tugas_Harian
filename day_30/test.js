let totalBelanja = 80000;
let jenisMember = "gold";
let kodeVoucher = "";
let diskon;
let potonganMember;

if (totalBelanja >= 100000) {       // FIX : Mengubah nilai dari 25000 menjadi 100000 agar bisa tahu apakah sudah masuk logika pertama atau belum
  diskon = totalBelanja * 0.15;
} else if (totalBelanja >= 50000) {
  diskon = totalBelanja * 0.1;
} else if (totalBelanja >= 25000) { // FIX : Mengubah nilai dari 100000 menjadi 25000 agar logika sebelum baris ini bisa dieksekusi.
  diskon = totalBelanja * 0.05;
} else {
  diskon = 0;
}

switch (jenisMember) {          // FIX : Mengubah variabel jenismember menjadi jenisMember (M besar)
  case "gold":
    potonganMember = 5000;
    break;                      // FIX : Menambah perintah break, agar perintah bisa berhenti setelah mendapat nilai dan mengeksekusinya.
  case "silver":
    potonganMember = 2000;
    break;
  default:
    potonganMember = 0;
}

let totalAkhir = totalBelanja - diskon - potonganMember;

let uangBayar = 67000;
if (uangBayar >= totalAkhir) {      // FIX : Mengganti Operator perbandingan dari '>' menjadi '>=' agar angka 67000 bisa masuk.
  console.log("Status: Lunas");
} else {
  console.log("Status: Kurang");
}

console.log(diskon, potonganMember, totalAkhir);
