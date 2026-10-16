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

// LANGKAH 2 : PERBAIKAN 
let totalBelanja = 80000;
let jenisMember = "gold";
let kodeVoucher = "";
let diskon;
let potonganMember;

// Diskon berdasarkan total belanja. Seharusnya: 8000 (diskon 10%)
if (totalBelanja >= 100000) {       // FIX : Mengubah nilai dari 25000 menjadi 100000 agar bisa tahu apakah sudah masuk logika pertama atau belum
  diskon = totalBelanja * 0.15;
} else if (totalBelanja >= 50000) {
  diskon = totalBelanja * 0.1;
} else if (totalBelanja >= 25000) { // FIX : Mengubah nilai dari 100000 menjadi 25000 agar logika sebelum baris ini bisa dieksekusi.
  diskon = totalBelanja * 0.05;
} else {
  diskon = 0;
}

// Potongan member. "gold" 5000, "silver" 2000, lainnya 0. Seharusnya untuk "gold": 5000
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

// Voucher. Seharusnya tercetak: Voucher tidak dipakai
if ((kodeVoucher == "")) {                  // FIX : Mengganti operator penugasan '=' menjadi operator pembanding '==' untuk mendapatkan nilai yang sama.
  console.log("Voucher tidak dipakai");
} else {
  console.log("Voucher dipakai: " + kodeVoucher);
}

// Total akhir. Seharusnya: 67000
let totalAkhir = totalBelanja - diskon - potonganMember;

// Pembayaran dengan uang pas. Seharusnya tercetak: Status: Lunas
let uangBayar = 67000;
if (uangBayar >= totalAkhir) {      // FIX : Mengganti Operator perbandingan dari '>' menjadi '>=' agar angka 67000 bisa masuk.
  console.log("Status: Lunas");
} else {
  console.log("Status: Kurang");
}

console.log(diskon, potonganMember, totalAkhir);

/*
PERTANYAAN : 
1. Tulis ke-5 kesalahan tadi dalam satu kalimat singkat masing-masing (apa salahnya, dan perbaikannya apa).
    - Mengubah urutan kondisi 100000 menjadi kondisi teratas
    - Mengubah urutan kondisi 25000 menjadi kondisi ketiga
    - Mengubah jenismember menjadi jenisMember (huruf M besar)
    - Menambah kode 'break' setelah console.log milik case "gold"
    - Mengganti operator penugasan '=' menjadi operator perbandingan longgar '=='
    - Mengganti operator pembanding '>' menjadi '>=' agar angka 67000 bisa masuk
2. Mana kesalahan yang menyebabkan error di console, dan mana yang tidak error tetapi hasilnya salah?
    - Yang menyebabkan error adalah pada switch (jenismember),
    - Untuk yang lainnya hasilnya berjalan normal namun tidak sesuai dengan yang diharapkan.
3. Pada `if (kodeVoucher = "")`, apa bedanya `=`, `==`, dan `===`? Kenapa kodenya tidak error?
    - Karena '=' artinya operator penugasan yang berfungsi memberi nilai.
    - '==' adalah operator pembanding yang sifatnya longgar.
    - '===' adalah operator pembanding yang sifatnya ketat. 
    - Tidak terjadi error karena nilai dan tipe datanya sudah sama.
*/


// DATA TRANSAKSI
const dataTransaksi = [
    {
        nama: "Hannah",
        total: 60000,
        hari: "jumat",
        member: "gold",
        kode: "",
        uang: 46000
    },
    {
        nama: "Denny",
        total: 120000,
        hari: "sabtu",
        member: "silver",
        kode: "SENJA10",
        uang: 150000
    },
    {
        nama: "Mutia",
        total: 35000,
        hari: "minggu",
        member: "",
        kode: "",
        uang: 25000
    }
];

for (let i = 0; i < 3; i++) {
    // DISKON 
    if (dataTransaksi[i].total >= 100000) {       
      diskon = dataTransaksi[i].total * 0.15;
    } else if (dataTransaksi[i].total >= 50000) {
      diskon = dataTransaksi[i].total * 0.1;
    } else if (dataTransaksi[i].total >= 25000) { 
      diskon = dataTransaksi[i].total * 0.05;
    } else {
      diskon = 0;
    }


    // POTONGAN MEMBER
    switch (dataTransaksi[i].member) {          
      case "gold":
        potonganMember = 5000;
        break;                     
      case "silver":
        potonganMember = 2000;
        break;
      default:
        potonganMember = 0;
    }


    // PROMO HARI
    switch (dataTransaksi[i].hari) {
        case "jumat":
            promoHarian = 3000;
            break;
        case "sabtu", "minggu":
            promoHarian = 5000;
            break;
      default:
            promoHarian = 0;
    }

    let totalBiayaAkhir = dataTransaksi[i].total - diskon - potonganMember - promoHarian
    let pembayaran;
    // STATUS BAYAR
    if (dataTransaksi[i].uang > totalBiayaAkhir) {
        pembayaran = "Lunas dengan kembalian";
    }
    else if (dataTransaksi[i].uang >= totalBiayaAkhir) {
        pembayaran = "Lunas tanpa kembalian";
    }
    else {
        pembayaran = "Uang Kurang";
    }

    console.log("========= SKENARIO KE-", i + 1, "=========");
    console.log("Nama Pelanggan         : ", dataTransaksi[i].nama);
    console.log("Hari                   : ", dataTransaksi[i].hari);
    console.log("Jenis Member           : ", dataTransaksi[i].member);
    console.log("Kode Voucher           : ", dataTransaksi[i].kode);
    console.log("");
    console.log("Total Belanja          : Rp. ", dataTransaksi[i].total);
    console.log("Diskon                 : Rp. ", diskon);
    console.log("Potongan Member        : Rp. ", potonganMember);
    console.log("Promo Hari Khusus      : Rp. ", promoHarian);
    console.log("_____________________________________ -");
    console.log("Uang Yang Dibayar      : Rp. ", dataTransaksi[i].uang);
    console.log("Status Pembayaran      : ", pembayaran);
    console.log("==================================");
    console.log("");
}
