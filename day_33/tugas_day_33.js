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
  console.log(huruf);           // Tebakan : K, o, p, i (v)
}
/*
for (let x of kopi) {
    console.log(x);             // Tebakan : error : object is not iterable
}
*/

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


// LANGKAH 2 : PERBAIKI KESALAHAN
const warung = {
  nama: "Warung Senja",
  saldoKas: 100000,

  // Menambah kas. Seharusnya: setelah tambahKas(50000), saldoKas menjadi 150000
  tambahKas(jumlah) {
    warung.saldoKas += jumlah;          // Mengganti saldoKas dengan memakai metode dot notation untuk mengambil key dan value pada variabel warung.
  },

  // Mengambil kas. Seharusnya mengembalikan sisa saldoKas
  ambilKas(jumlah) {
    this.saldoKas -= jumlah;
    return this.saldoKas;               // Menambah perintah return this.saldoKas agar value nya bisa ditangkap dan ditampilkan pada terminal.
  },
};

warung.tambahKas(50000);
console.log(warung.saldoKas);
console.log(warung.ambilKas(30000));

// Key dengan tanda hubung. Seharusnya tercetak: 08123
const kontak = { "no-wa": "08123" };
console.log(kontak["no-wa"]);           // Mengganti kontak.no-wa menjadi kontak["no-wa"] atau mengubah dari dot notation menjadi bracket notation.

// Hapus kataSandi dari akun. Seharusnya tercetak: { nama: 'Rina' }
const akun = { nama: "Rina", kataSandi: "abc123" };
delete akun.kataSandi;                  // Mengganti akun.kataSandi = undefined, menjadi delete akun.kataSandi.
console.log(akun);

// Cetak semua isi array, satu per baris. Seharusnya: Kopi, Teh, Roti
const menu = ["Kopi", "Teh", "Roti"];
for (let item of menu) {                // Mengganti let item in menu menjadi let item of menu
  console.log(item);
}

// Cetak semua properti object. Seharusnya: nama: Warung Senja dan kota: Yogyakarta
const info = { nama: "Warung Senja", kota: "Yogyakarta" };
for (let kolom in info) {               // Mengganti let kolom of info menjadi let kolom in info
  console.log(kolom + ": " + info[kolom]);
}

// Daftar kunci object. Seharusnya: [ 'nama', 'kota' ]
console.log(Object.keys(info));         // Memperbaiki typo 'key' menjadi 'keys'

/*
PERTANYAAN
1. Tulis ke-7 kesalahan tadi dalam satu kalimat singkat masing-masing (apa salahnya, dan perbaikannya apa).
    - menambah variabel warung sebelum mengambil properti saldoKas.
    - menambah perintah return agar nilainya bisa ditangkap dan disimpan.
    - mengubah dari dot notation menjadi bracket notation.
    - mengganti akun.kataSandi menjadi delete akun.kataSandi
    - mengganti 'in' menjadi 'of'
    - mengganti 'of' menjadi 'in'
    - memperbaiki typo 'key' menjadi 'keys'
2. Mana kesalahan yang menyebabkan error di console, dan mana yang tidak error tetapi hasilnya salah?
    - yang menyebabkan error adalah 
        ````const kontak = { "no-wa": "08123" };
            console.log(kontak.no-wa);````
        karena menggunakan dot notation untuk mengambil object
    - yang tidak error tapi hasilnya tidak sesuai
    ````const menu = ["Kopi", "Teh", "Roti"];
        for (let item in menu) {
        console.log(item);
        }````
3. Kenapa `akun.kataSandi = undefined` tidak sama dengan `delete akun.kataSandi`? Tunjukkan bedanya memakai `in`.
    - karena `akun.kataSandi = undefined` itu sama saja dengan mengganti value kataSandi, sedangkan `delete akun.kataSandi` artinya menghapus dari objek akun.
*/


// LANGKAH 3 : BIKIN KASIR
const kasirKedai = {
    nama: "Kedai Senja",
    kota: "Yogyakarta",
    saldoKas: 0,
    jamOperasional: { 
        buka: "08:00", 
        tutup: "21:00" 
    },
    menu: [
        { nama: "Kopi Susu", kategori: "minuman", harga: 18000, stok: 10 },
        { nama: "Es Teh Manis", kategori: "minuman", harga: 7000, stok: 15 },
        { nama: "Roti Bakar", kategori: "makanan", harga: 15000, stok: 8 },
        { nama: "Nasi Goreng", kategori: "makanan", harga: 25000, stok: 5 },
        { nama: "Pisang Goreng", kategori: "makanan", harga: 10000, stok: 12 }
    ],
    keranjang: [],

    // 2. Method cariHarga
    cariHarga(namaMenu) {
        for (let item of this.menu) {
            if (item.nama.toLowerCase() === namaMenu.toLowerCase()) {
                return item.harga;
            }
        }
        return 0;
    },

    // 3. Method tambahKeKeranjang
    tambahKeKeranjang(namaMenu, jumlah) {
        for (let item of this.menu) {
            if (item.nama.toLowerCase() === namaMenu.toLowerCase()) {
                if (item.stok >= jumlah) {
                    this.keranjang.push({ nama: item.nama, jumlah: jumlah });
                    item.stok -= jumlah;
                    return true;
                }
            }
        }
        return false;
    },

    // 4. Method hitungSubtotal
    hitungSubtotal() {
        let subtotal = 0;
        for (let pesanan of this.keranjang) {
            let hargaSatuan = this.cariHarga(pesanan.nama);
            subtotal += hargaSatuan * pesanan.jumlah;
        }
        return subtotal;
    },

    // 5. Method hitungDiskon
    hitungDiskon(subtotal) {
        if (subtotal >= 100000) {
            return subtotal * 0.15;
        } else if (subtotal >= 50000) {
            return subtotal * 0.10;
        } else if (subtotal >= 25000) {
            return subtotal * 0.05;
        } else {
            return 0;
        }
    },

    // 6. Method cetakStruk
    cetakStruk() {
        console.log(`           STRUK ${this.nama.toUpperCase()}         `);
        console.log(`========================================`);
        
        let subtotal = this.hitungSubtotal();
        let diskon = this.hitungDiskon(subtotal);
        let setelahDiskon = subtotal - diskon;
        let pajak = setelahDiskon * 0.11;
        let totalAkhir = setelahDiskon + pajak;

        console.log(`Daftar Pesanan:`);
        let no = 1;
        for (let pesanan of this.keranjang) {
            let harga = this.cariHarga(pesanan.nama);
            console.log(`${no}. ${pesanan.nama} (${pesanan.jumlah}x) - Rp ${harga * pesanan.jumlah}`);
            no++;
        }

        console.log(`----------------------------------------`);
        console.log(`Subtotal     : Rp ${subtotal}`);
        console.log(`Diskon       : Rp ${diskon}`);
        console.log(`Pajak (11%)  : Rp ${pajak.toFixed(2)}`);
        console.log(`Total Akhir  : Rp ${totalAkhir.toFixed(2)}`);
        console.log(`========================================`);

        // Menambahkan total ke saldoKas
        this.saldoKas += totalAkhir;
    }
};

// 7. Properti Dinamis
let propWebsite = "website";
kasirKedai[propWebsite] = "www.kedaisenja.com";
console.log(`Cek properti pakai 'in' (sebelum hapus):`, propWebsite in kasirKedai);
delete kasirKedai[propWebsite];
console.log(`Cek properti pakai 'in' (sesudah hapus):`, propWebsite in kasirKedai);

// 8. Perulangan for...in pada jamOperasional dan menu pertama
console.log(`\n--- Jam Operasional (for...in) ---`);
for (let kunci in kasirKedai.jamOperasional) {
    console.log(`${kunci}: ${kasirKedai.jamOperasional[kunci]}`);
}

console.log(`\n--- Menu Pertama (for...in) ---`);
for (let kunci in kasirKedai.menu[0]) {
    console.log(`${kunci}: ${kasirKedai.menu[0][kunci]}`);
}

// 9. Object.keys dan Object.values
console.log(`\nKeys Jam Operasional   :`, Object.keys(kasirKedai.jamOperasional));
console.log(`Values Jam Operasional :`, Object.values(kasirKedai.jamOperasional));

// 10. Menghitung huruf "a" kecil pada nama kedai dengan for...of pada string
let jumlahHurufA = 0;
for (let huruf of kasirKedai.nama) {
    if (huruf === "a") {
        jumlahHurufA++;
    }
}
console.log(`\nJumlah huruf "a" kecil pada "${kasirKedai.nama}": ${jumlahHurufA}`);


console.log(`----------------------------------------`);
console.log(`           SIMULASI SKENARIO 1          `);
console.log(`----------------------------------------`);
kasirKedai.keranjang = []; 
kasirKedai.tambahKeKeranjang("Kopi Susu", 2);
kasirKedai.tambahKeKeranjang("Roti Bakar", 1);
kasirKedai.cetakStruk();

console.log(`----------------------------------------`);
console.log(`           SIMULASI SKENARIO 2          `);
console.log(`----------------------------------------`);
kasirKedai.keranjang = []; 
kasirKedai.tambahKeKeranjang("Nasi Goreng", 4);
kasirKedai.tambahKeKeranjang("Es Teh Manis", 5);
kasirKedai.cetakStruk();

console.log("Saldo Kas Akhir di Kedai: Rp " + kasirKedai.saldoKas.toFixed(2));

/*
PERTANYAAN 
1. Apa beda dot notation dan bracket notation? Beri contoh dari kodemu, dan jelaskan kapan bracket notation wajib dipakai.
    - Dot notation (.): Digunakan untuk mengakses properti objek secara langsung dengan menuliskan nama propertinya setelah tanda titik (contoh dari kode: kasirKedai.nama).
    - Bracket notation ([...]): Digunakan dengan memasukkan nama properti sebagai string di dalam tanda kurung siku (contoh dari kode: kasirKedai["kota"] atau pada properti dinamis kasirKedai[propWebsite]).
    - Kapan bracket notation wajib dipakai: Bracket notation wajib dipakai ketika nama properti mengandung spasi, karakter khusus, diawali dengan angka, atau ketika nama propertinya tersimpan di dalam sebuah variabel (seperti variabel propWebsite).
2. Kenapa di dalam method kamu menulis `this.saldoKas`, bukan `saldoKas`? Apa yang terjadi jika kata `this` dihapus? Buktikan dengan kode, lalu jadikan baris percobaan itu komentar dan tulis pesan errornya.
    - Kata kunci this merujuk langsung ke objek tempat method itu berada (kasirKedai). Jika this dihapus dan kita hanya menulis saldoKas, JavaScript akan mencari variabel lokal bernama saldoKas di dalam ruang lingkup (scope) method tersebut, 
      bukan di dalam properti objek, sehingga program akan gagal mengenalinya atau bernilai undefined.
3. Apa beda `for...of` dan `for...in`? Tunjuk satu tempat di kodemu yang memakai masing-masing, dan jelaskan kenapa yang satu tidak bisa ditukar dengan yang lain.
    - for...of: Digunakan untuk mengulang atau menelusuri nilai (values) dari objek yang dapat diiterasi (iterable) seperti Array atau String. Contoh penggunaannya di kode: saat melooping for (let item of this.menu).
    - for...in: Digunakan untuk menelusuri kunci atau nama properti (keys) dari sebuah objek. Contoh penggunaannya di kode: saat melooping for (let kunci in kasirKedai.jamOperasional).
    - Kenapa tidak bisa ditukar, for...of tidak bisa dipakai langsung pada objek biasa karena objek tidak iterable secara default, sedangkan for...in akan mengembalikan kunci propertinya saja, sehingga tidak cocok jika dipakai untuk mengambil isi item array secara langsung.
4. Kenapa `for...of` pada `kasirKedai` (object) menghasilkan error, sedangkan pada string dan array tidak? Tulis pesan errornya.
    - Array dan String secara bawaan memiliki protokol iterable yang didukung oleh JavaScript, sehingga for...of bisa membaca elemen atau karakternya satu persatu. Sebaliknya, objek biasa (kasirKedai) tidak memiliki iterator bawaan tersebut.
    - Pesan errornya: TypeError: kasirKedai is not iterable
5. Apa beda `Object.keys` dan `Object.values`? Tunjuk hasilnya dari kodemu.
    - Object.keys(): Berfungsi untuk mengambil semua nama kunci (keys) dari sebuah objek dan mengembalikannya dalam bentuk array.
    - Object.values(): Berfungsi untuk mengambil semua nilai (values) dari sebuah objek dan mengembalikannya dalam bentuk array.
6. Kenapa `cariHarga` dan `hitungSubtotal` harus memakai `return`, sedangkan `cetakStruk` boleh tidak? Apa yang terjadi jika `hitungSubtotal` hanya memakai `console.log`?
    - cariHarga dan hitungSubtotal adalah fungsi kalkulasi yang nilainya harus dikembalikan agar bisa diolah atau dipakai lagi oleh fungsi lain (seperti dimasukkan ke dalam perhitungan diskon dan total akhir). Sementara itu, cetakStruk tujuannya hanya untuk mencetak tampilan 
      teks ke konsol, sehingga tidak wajib mengembalikan nilai (return).
    - Jika hitungSubtotal hanya memakai console.log: Nilai subtotal tidak akan pernah tersimpan atau dikembalikan ke pemanggil fungsinya. Akibatnya, saat variabel penampung mencoba membaca hasil dari hitungSubtotal(), nilainya akan terbaca sebagai undefined, dan perhitungan 
      diskon serta total akhir di kasir akan menjadi NaN (Not a Number).
*/
