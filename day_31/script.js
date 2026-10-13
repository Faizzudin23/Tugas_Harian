// BAGIAN 1
for (let i = 8; i >= 0; i--) {
    console.log(i);
}
console.log("Start!");

// BAGIAN 1.2
let total = 1;

for (let i = 1; i <= 15; i++) {
    total += 1;
}
console.log("Total : ", total);

// BAGIAN 1.3
const makanan = ["soto", "sate", "rawon", "pecel", "gudeg", "mie"];

for (let i = 0; i < buah.length; i++) {
    console.log(i + 1 + ".", buah[i])
}


// BAGIAN 2 
let angkaMisteri = 9;
let tebakan = 0;
let percobaan = 0;

while (tebakan !== angkaMisteri) {
    percobaan++;
    tebakan = Math.floor(Math.random() * 10) + 1;
    console.log("Percobaan ke-" + percobaan + " : menebak angka", tebakan);
}

console.log(
    "Berhasil menebak angka ",
    angkaMisteri,
    " dalam ",
    percobaan,
    " percobaan.",
);


// BAGIAN 3
let konfirmasi;

do {
    konfirmasi = prompt("Ketik 'batal' untuk membatalkan : ");
}   while (konfirmasi !== "batal");

console.log("Pengguna telah mengkonfirmasi. Melanjutkan proses...");


// BAGIAN 4
for (let i = 1; i <= 50; i++) {
    if (i === 25) {
        console.log(
            "Koordinat ditentukan pada posisi ke-" + i + ". Pencarian dihentikan",
        );
        break;
    }
    console.log("Memeriksa posisi ke-" + i)
};


// BAGIAN 5
const nilai = [78, -4, 94, -19, 70, -27, 65];

console.log("Nilai valid: ");
for (let i = 0; i < nilai.length; i++) {
    if (nilai[i] < 0) {
        continue;
    }
    console.log("-", nilai[i]);
}
// BAGIAN 6
const nilaiAkhir = [90, 62, 53, -5, 19, 59, 32, 0, 63];
let jumlah = 0;
let benar = 0;
let salah = 0;

for (let i = 0; i < nilaiAkhir.length; i++) {
    const nilai = nilaiAkhir[i];

    if  (nilai < 0 || nilai > 100) {
        console.log("Nilai salah dilewati : ", nilai);
        salah++;
        continue;
    }

    jumlah += nilai;
    benar++;
};

const nilaiRataRata = jumlah / valid;

console.log("---------");
console.log("Total Data     : ", nilaiAkhir.length);
console.log("Data Benar     : ", benar);
console.log("Data Salah     : ", salah);
console.log("Rata Rata      : ", nilaiRataRata.toFixed(2));
