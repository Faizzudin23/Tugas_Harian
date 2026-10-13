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


