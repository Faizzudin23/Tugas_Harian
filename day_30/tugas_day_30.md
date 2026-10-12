# Tugas Day 30: Kasir Warung dengan Percabangan

**Materi:** Percabangan (`if`, `else if`, `else`, `switch`, dan Truthy/Falsy)
**Bentuk tugas:** Satu file `tugas_day_30.js`, berisi praktik coding dan penjelasan singkat
**Total nilai:** 100 (+ bonus 5)

---

## Gambaran Tugas

1. **Tebak dulu, baru cek:** menebak hasil `if`, `else if`, `switch`, dan nilai Truthy/Falsy.
2. **Perbaiki kode yang salah:** ada 5 kesalahan.
3. **Bikin kasir sendiri:** program kecil yang memakai semua materi hari ini.

---

## Aturan Pengerjaan

- Ketik kode sendiri, jangan copy-paste dari teman.
- Jalankan di **Console browser** (F12 → Console) atau lewat file `.html`.
- Penjelasan ditulis sebagai **komentar** di bawah kodenya dengan **bahasa sendiri**.
- Jika bingung, tulis apa yang kamu pahami dulu. Jawaban yang jujur dan mendekati benar tetap dihargai.

**Pengumpulan:** push ke Git repository tugas harian yg sudah dibuat sebelumnya di akun masing-masing.

```
tugas-day-30/
├── tugas_day_30.js
└── README.md   ← nama kamu + 1 hal yang kamu pelajari + 1 hal yang masih membingungkan
```

Commit minimal **3 kali** (misalnya setelah selesai tiap langkah) dengan pesan yang jelas, seperti `feat: selesai langkah 1 tebak percabangan`.

---

## Langkah 1: Tebak Dulu, Baru Cek (20 poin)

Salin tiga potongan kode di bawah ke `tugas_day_30.js`, **satu per satu**. Untuk setiap potongan:

1. **Tulis tebakan output** di komentar **sebelum** menjalankan kode.
2. Jalankan, lalu tulis **hasil aslinya**.

### Potongan A

```javascript
if (0) {
  console.log("1: masuk");
}
if ("0") {
  console.log("2: masuk");
}
if ("") {
  console.log("3: masuk");
}
if ([]) {
  console.log("4: masuk");
}
if (null) {
  console.log("5: masuk");
}
if (-1) {
  console.log("6: masuk");
}
```

### Potongan B

```javascript
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
```

### Potongan C

```javascript
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
```

**Pertanyaan** (jawab di komentar):

1. Pada Potongan A, kenapa `"0"` dan `[]` tetap masuk ke dalam `if`, padahal terlihat seperti kosong?
2. Pada Potongan B, `belanja` bernilai 120000 tetapi hasilnya bukan "Diskon 15%". Kenapa? Bagaimana cara memperbaikinya?
3. Pada Potongan C, kenapa yang tercetak dua baris? Apa yang harus ditambahkan agar hanya satu baris yang tercetak?

> **Tips:** Untuk tebakan yang meleset, tulis kenapa hasilnya begitu. Jika semua tebakanmu benar, tulis tebakan yang menurutmu paling sulit dan alasannya.

---

## Langkah 2: Perbaiki 5 Kesalahan (25 poin)

Salin kode di bawah di bawah Langkah 1. Kode ini punya **5 kesalahan**. Komentar `Seharusnya` memberi tahu hasil yang benar.

> Karena Langkah 1 sudah memakai nama `belanja` dan `hari`, kode di bawah memakai nama lain agar tidak bentrok.

```javascript
let totalBelanja = 80000;
let jenisMember = "gold";
let kodeVoucher = "";
let diskon;
let potonganMember;

// Diskon berdasarkan total belanja. Seharusnya: 8000 (diskon 10%)
if (totalBelanja >= 25000) {
  diskon = totalBelanja * 0.05;
} else if (totalBelanja >= 50000) {
  diskon = totalBelanja * 0.1;
} else if (totalBelanja >= 100000) {
  diskon = totalBelanja * 0.15;
} else {
  diskon = 0;
}

// Potongan member. "gold" 5000, "silver" 2000, lainnya 0. Seharusnya untuk "gold": 5000
switch (jenismember) {
  case "gold":
    potonganMember = 5000;
  case "silver":
    potonganMember = 2000;
    break;
  default:
    potonganMember = 0;
}

// Voucher. Seharusnya tercetak: Voucher tidak dipakai
if ((kodeVoucher = "")) {
  console.log("Voucher tidak dipakai");
} else {
  console.log("Voucher dipakai: " + kodeVoucher);
}

// Total akhir. Seharusnya: 67000
let totalAkhir = totalBelanja - diskon - potonganMember;

// Pembayaran dengan uang pas. Seharusnya tercetak: Status: Lunas
let uangBayar = 67000;
if (uangBayar > totalAkhir) {
  console.log("Status: Lunas");
} else {
  console.log("Status: Kurang");
}

console.log(diskon, potonganMember, totalAkhir);
```

**Yang dikerjakan:**

1. Perbaiki ke-5 kesalahan. Tandai tiap perbaikan dengan komentar `// FIX: ...`.
2. Hasil akhir di console harus:

```
Voucher tidak dipakai
Status: Lunas
8000 5000 67000
```

**Pertanyaan** (jawab di komentar):

1. Tulis ke-5 kesalahan tadi dalam satu kalimat singkat masing-masing (apa salahnya, dan perbaikannya apa).
2. Mana kesalahan yang menyebabkan error di console, dan mana yang tidak error tetapi hasilnya salah?
3. Pada `if (kodeVoucher = "")`, apa bedanya `=`, `==`, dan `===`? Kenapa kodenya tidak error?

---

## Langkah 3: Bikin Kasir Sendiri (35 poin)

Buat program kasir di bagian paling bawah file. Beri nama variabel yang **berbeda** dari Langkah 1 dan 2 (misalnya awali dengan `kasir`, seperti `kasirTotalBelanja`).

**Data awal** (isi sendiri, boleh diubah-ubah):

| Variabel       | Contoh nilai |
| -------------- | ------------ |
| nama pelanggan | `"Rina"`     |
| total belanja  | `90000`      |
| hari           | `"sabtu"`    |
| jenis member   | `"silver"`   |
| kode voucher   | `"SENJA10"`  |
| uang bayar     | `100000`     |

**Aturan program:**

| No  | Syarat                                                                                                                                                                                                               | Poin |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| 1   | Data di atas disimpan dalam variabel dengan `let` / `const` yang tepat                                                                                                                                               | 1    |
| 2   | **Diskon** berdasarkan total belanja memakai `if...else if...else`: minimal 100000 diskon 15%, minimal 50000 diskon 10%, minimal 25000 diskon 5%, selain itu 0                                                       | 4    |
| 3   | **Potongan member**: `"gold"` 5000, `"silver"` 2000, selain itu 0                                                                                                                                                    | 2    |
| 4   | **Promo hari** memakai `switch`: `"jumat"` potongan 3000, `"sabtu"` dan `"minggu"` potongan 5000 (kedua case digabung **tanpa `break` di antaranya**), selain itu 0. Case lain wajib memakai `break`                 | 5    |
| 5   | **Validasi nama** memakai Truthy/Falsy: jika nama kosong, cetak "Nama pelanggan belum diisi", jika tidak cetak "Pelanggan: (nama)"                                                                                   | 2    |
| 6   | **Voucher** memakai Truthy/Falsy: jika kode voucher terisi, potongan voucher 2000, jika kosong potongan 0. Cetak status voucher                                                                                      | 2    |
| 7   | **Total akhir** = total belanja dikurangi diskon, potongan member, promo hari, dan potongan voucher                                                                                                                  | 2    |
| 8   | **Status pembayaran** memakai `if...else if...else`: uang bayar lebih besar dari total akhir → "Lunas" beserta kembalian, sama dengan total akhir → "Lunas (uang pas)", lebih kecil → "Kurang" beserta kekurangannya | 3    |
| 9   | Hasil dicetak dengan **template literal** dan rapi                                                                                                                                                                   | 1    |
| 10  | **Uji 3 skenario** (lihat di bawah)                                                                                                                                                                                  | 5    |

**Uji 3 skenario:**

Ubah data awal, jalankan program, lalu tulis hasil tiap skenario di komentar. Ketiga skenario harus berbeda dan, **secara keseluruhan**, harus membuat:

- minimal 3 tingkat diskon yang berbeda,
- `switch` jatuh ke `"jumat"`, ke `"sabtu"` atau `"minggu"`, dan ke `default`,
- status pembayaran: lebih, pas, dan kurang,
- nama kosong minimal satu kali dan voucher kosong minimal satu kali.

Contoh format hasil skenario:

```javascript
// Skenario 1: nama "Rina", belanja 90000, hari "sabtu", ...
// Hasil:
// Pelanggan: Rina
// Voucher dipakai: SENJA10
// Total akhir: ...
// Status: ...
```

**Pertanyaan** (jawab di komentar):

1. Kenapa urutan `else if` pada diskon dimulai dari angka terbesar? Apa yang terjadi jika dibalik?
2. Kenapa promo hari lebih cocok memakai `switch`, bukan `if...else if`?
3. Pada `switch` promo hari, di mana kamu sengaja tidak menulis `break`, dan kenapa hasilnya tetap benar?
4. Sebutkan 3 nilai yang membuat `if (namaPelanggan)` bernilai `false`.
5. Jika jumlah beli bernilai `-1`, apa hasil `if (jumlahBeli)` dan `if (jumlahBeli > 0)`? Kenapa berbeda?

---

## Bonus (+5 poin)

Buat program yang menentukan jumlah hari dalam satu bulan dari angka bulan (`1` sampai `12`) memakai `switch`:

- bulan `4`, `6`, `9`, `11` → 30 hari,
- bulan `2` → 28 atau 29 hari,
- bulan lainnya (`1`, `3`, `5`, `7`, `8`, `10`, `12`) → 31 hari,
- angka di luar 1–12 → cetak "Bulan tidak valid".

Tulis di komentar kenapa kamu bisa menggabungkan beberapa `case` tanpa `break` di antaranya.

---

## Daftar Periksa Sebelum Dikumpulkan

- [ ] Tebakan di Langkah 1 ditulis **sebelum** kode dijalankan
- [ ] Ke-5 kesalahan di Langkah 2 sudah diperbaiki, hasilnya sesuai
- [ ] Kasir di Langkah 3 memenuhi semua 10 syarat, dan 3 skenario dicatat
- [ ] Semua pertanyaan dijawab di komentar dengan bahasa sendiri
- [ ] Sudah di-_push_ ke repository dan `README.md` terisi
