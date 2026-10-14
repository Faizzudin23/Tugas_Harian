# Tugas Day 32: Kasir Warung dengan Array dan Function

**Materi:** Array dan Array Method (Bab 8), Function (Bab 9)
**Bentuk tugas:** Satu file `tugas_day_32.js`, berisi praktik coding dan penjelasan singkat

---

## Gambaran Tugas

Kamu melanjutkan program kasir warung. Sekarang daftar belanja disimpan dalam **array**, dan perhitungannya dibungkus dalam **function**. Ada 3 langkah, dikerjakan **berurutan di satu file**:

1. **Tebak dulu, baru cek:** menebak hasil array method dan function.
2. **Perbaiki kode yang salah:** ada 7 kesalahan.
3. **Bikin kasir sendiri:** program kasir yang memakai array dan function.

---

## Aturan Pengerjaan

- Ketik kode sendiri, jangan copy-paste dari teman.
- Jalankan di **Console browser** (F12 → Console) atau lewat file `.html`.
- Pakai `let` dan `const` saja (**tanpa `var`**).
- Nama variabel dan function pakai **camelCase**. Konstanta pakai **HURUF_BESAR**.
- Penjelasan ditulis sebagai **komentar** di bawah kodenya, dengan **bahasa sendiri**, cukup **1–2 kalimat**.
- Jika bingung, tulis apa yang kamu pahami dulu. Jawaban yang jujur dan mendekati benar tetap dihargai.

**Pengumpulan:** push ke Git repository masing-masing.

```
tugas-day-32/
├── tugas_day_32.js
└── README.md   ← nama kamu + 1 hal yang kamu pelajari + 1 hal yang masih membingungkan
```

Commit minimal **3 kali** (misalnya setelah selesai tiap langkah) dengan pesan yang jelas, seperti `feat: selesai langkah 1 tebak array dan function`.

Terlambat mengumpulkan: nilai dikurangi 10% per hari, maksimal 3 hari.

---

## Langkah 1: Tebak Dulu, Baru Cek

Salin tiga potongan kode di bawah ke `tugas_day_32.js`, **satu per satu**. Untuk setiap `console.log`:

1. **Tulis tebakan output** di komentar **sebelum** menjalankan kode.
2. Jalankan, lalu tulis **hasil aslinya**.

### Potongan A

```javascript
let menu = ["Kopi", "Teh", "Roti", "Susu"];

menu.push("Jus");
menu.unshift("Air");
let terakhirDibuang = menu.pop();
let pertamaDibuang = menu.shift();
menu.splice(1, 1);
let irisan = menu.slice(1, 3);

console.log(terakhirDibuang);
console.log(pertamaDibuang);
console.log(menu);
console.log(irisan);
console.log(menu.indexOf("Susu"));
console.log(menu.indexOf("Nasi"));
console.log(menu.includes("Kopi"));
console.log(menu[menu.length - 1]);
```

### Potongan B

```javascript
function tambah(a, b) {
  return a + b;
}

function cetakTambah(a, b) {
  console.log(a + b);
}

let x = tambah(2, 3);
let y = cetakTambah(2, 3);
console.log(x);
console.log(y);
```

### Potongan C

```javascript
const hitungDiskonPersen = (harga, persen = 10) => harga - (harga * persen) / 100;
console.log(hitungDiskonPersen(50000, 20));
console.log(hitungDiskonPersen(50000));

function cekAngka(n) {
  if (n < 0) {
    return "negatif";
    console.log("Baris ini muncul atau tidak?");
  }
  return "bukan negatif";
}

console.log(cekAngka(-5));
console.log(cekAngka(5));
```

**Pertanyaan** (jawab di komentar):

1. Pada Potongan A, kenapa `menu` dan `irisan` isinya berbeda? Mana method yang mengubah array aslinya, dan mana yang tidak?
2. Pada Potongan B, apa beda `tambah` dan `cetakTambah`? Kenapa `y` bernilai `undefined`?
3. Pada Potongan C, kenapa `hitungDiskonPersen(50000)` tetap menghasilkan angka? Apakah baris `console.log("Baris ini muncul atau tidak?")` tercetak? Kenapa?

> **Tips:** Untuk tebakan yang meleset, tulis kenapa hasilnya begitu. Jika semua tebakanmu benar, tulis tebakan yang menurutmu paling sulit dan alasannya.

---

## Langkah 2: Perbaiki 7 Kesalahan

Salin kode di bawah di bawah Langkah 1. Kode ini punya **7 kesalahan**. Komentar `Seharusnya` memberi tahu hasil yang benar.

> Nama di kode ini sengaja berbeda dari Langkah 1 agar tidak bentrok.

```javascript
let daftarBelanja = ["Kopi", "Teh", "Roti"];

// Tambah "Susu" di akhir daftar. Seharusnya: ["Kopi", "Teh", "Roti", "Susu"]
daftarBelanja.unshift("Susu");

// Hapus "Teh" (indeks 1) dari daftar. Seharusnya: ["Kopi", "Roti", "Susu"]
daftarBelanja.slice(1, 1);

// Cek apakah "Roti" ada di daftar. Seharusnya: true
let adaRoti = daftarBelanja.indexOf("Roti");

// Elemen terakhir daftar. Seharusnya: "Susu"
let terakhir = daftarBelanja[daftarBelanja.length];

// Harga setelah diskon. Seharusnya hitungDiskon(100000, 20) = 80000
function hitungDiskon(harga, persen) {
  harga - (harga * persen) / 100;
}

// Pajak 11%. Seharusnya hitungPajak(80000) = 8800
const hitungPajak = (subtotal) => {
  subtotal * 0.11;
};

console.log(daftarBelanja, adaRoti, terakhir);
console.log(hitungDiskon(100000, 20));
console.log(hitungPajak(80000));

// Total dengan pajak. Seharusnya hitungTotal(80000, 8800) = 88800
console.log(hitungTotal(80000, 8800));
const hitungTotal = (subtotal, pajak) => subtotal + pajak;
```

**Yang dikerjakan:**

1. Perbaiki ke-7 kesalahan. Tandai tiap perbaikan dengan komentar `// FIX: ...`.
2. Hasil akhir di console harus:

```
[ 'Kopi', 'Roti', 'Susu' ] true Susu
80000
8800
88800
```

**Pertanyaan** (jawab di komentar):

1. Tulis ke-7 kesalahan tadi dalam satu kalimat singkat masing-masing (apa salahnya, dan perbaikannya apa).
2. Mana kesalahan yang menyebabkan error di console, dan mana yang tidak error tetapi hasilnya salah?
3. Kenapa `hitungDiskon` dan `hitungPajak` sama-sama menghasilkan `undefined`, padahal cara menulisnya berbeda?

---

## Langkah 3: Bikin Kasir Sendiri

Buat program kasir di bagian paling bawah file. Beri nama variabel dan function yang **berbeda** dari Langkah 1 dan 2 (misalnya awali dengan `kasir`, seperti `kasirHitungDiskon`).

**Data awal:**

Buat dua array **paralel** (urutannya berpasangan) berisi minimal 5 menu, serta satu array keranjang yang awalnya kosong.

```javascript
const kasirNamaMenu = ["Kopi Susu", "Es Teh", "Roti Bakar", "Nasi Goreng", "Jus Jeruk"];
const kasirHargaMenu = [18000, 7500, 15000, 22000, 12000];
let kasirKeranjang = [];
```

Isi menu dan harga boleh kamu ganti sendiri.

**Aturan program:**

| No | Syarat |
|----|--------|
| 1 | **Keranjang** dikelola memakai array method: `push` untuk menambah item, `unshift` untuk menambah item prioritas di depan, `pop` atau `shift` untuk membatalkan satu item, dan `splice` untuk mengganti satu item. Isi keranjang akhir minimal 4 item |
| 2 | Pakai `includes` untuk mengecek apakah satu menu ada di keranjang, dan `slice` untuk mengambil 3 item pertama keranjang sebagai "paket cepat". Cetak hasilnya |
| 3 | **Function pertama (function declaration):** `kasirCariHarga(namaMenu)`. Function ini memakai `indexOf` pada `kasirNamaMenu`, lalu **mengembalikan** harga dari `kasirHargaMenu`. Jika menu tidak ditemukan (`indexOf` bernilai `-1`), kembalikan `0` |
| 4 | **Function kedua (function expression):** `kasirHitungSubtotal`, menjumlahkan harga semua item di keranjang (boleh memakai `for` seperti contoh di materi array dan boleh memanggil `kasirCariHarga`) lalu **mengembalikan** subtotal |
| 5 | **Function ketiga (arrow function dengan kurung kurawal dan `return`):** `kasirHitungDiskon`, menerima `subtotal` dan mengembalikan besar diskon memakai `if...else if...else`: minimal 100000 diskon 15%, minimal 50000 diskon 10%, minimal 25000 diskon 5%, selain itu 0 |
| 6 | **Function keempat (arrow function ringkas satu baris dengan nilai default):** `kasirHitungPajak(nilai, tarif = 0.11)`, mengembalikan pajak |
| 7 | **Function kelima:** `kasirCetakStruk`, menerima `subtotal`, `diskon`, dan `pajak`, lalu **mencetak** struk rapi (memakai template literal). Function ini boleh tidak memakai `return`. Struk juga menampilkan daftar item keranjang bernomor |
| 8 | Total akhir = subtotal dikurangi diskon, ditambah pajak (pajak dihitung dari subtotal setelah diskon) |
| 9 | **Uji 2 skenario** (lihat di bawah) |

**Uji 2 skenario:**

Ubah isi keranjang, jalankan program, lalu tulis hasil tiap skenario di komentar. Kedua skenario harus berbeda dan membuat tingkat diskon yang berbeda.

Contoh format hasil skenario:

```javascript
// Skenario 1: keranjang berisi ["Kopi Susu", "Es Teh", ...]
// Hasil:
// Subtotal: ...
// Diskon  : ...
// Pajak   : ...
// Total   : ...
```

**Pertanyaan** (jawab di komentar):

1. Pilih satu array method yang kamu pakai di keranjang. Apakah method itu mengubah array aslinya? Buktikan dengan `console.log` sebelum dan sesudah.
2. Apa beda `splice` dan `slice`? Beri contoh dari kodemu sendiri.
3. Kenapa `kasirCariHarga` memakai `return`, bukan `console.log`? Apa yang akan terjadi pada `kasirHitungSubtotal` jika diganti `console.log`?
4. Tunjuk satu **parameter** dan satu **argumen** dari kodemu, lalu jelaskan bedanya.
5. Kenapa `kasirHitungPajak` boleh dipanggil dengan satu argumen maupun dua argumen?
6. Apa yang terjadi jika kamu memanggil `kasirHitungSubtotal` sebelum baris pendefinisiannya? Kenapa berbeda dengan memanggil `kasirCariHarga` sebelum pendefinisiannya? Buktikan dengan kode, lalu jadikan baris percobaan itu komentar dan tulis hasilnya (termasuk pesan error jika ada).

---

## Bonus (opsional)

Tambahkan function `kasirBatalkanItem(namaMenu)` yang:

- mencari posisi `namaMenu` di keranjang memakai `indexOf`,
- jika ditemukan, menghapusnya memakai `splice` dan mengembalikan `true`,
- jika tidak ditemukan, mengembalikan `false`.

Panggil function ini dua kali (satu menu yang ada, satu yang tidak ada), lalu tulis hasilnya di komentar.

---

## Daftar Periksa Sebelum Dikumpulkan

- [ ] Tebakan di Langkah 1 ditulis **sebelum** kode dijalankan
- [ ] Ke-7 kesalahan di Langkah 2 sudah diperbaiki, hasilnya sesuai
- [ ] Kasir di Langkah 3 memenuhi semua 9 syarat, dan 2 skenario dicatat
- [ ] Semua pertanyaan dijawab di komentar dengan bahasa sendiri
- [ ] Tidak ada `var`
- [ ] Sudah di-*push* ke repository dan `README.md` terisi
