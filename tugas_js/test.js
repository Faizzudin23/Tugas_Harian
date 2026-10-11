/* const nama_usaha = "Shoe Cleaner";
const nama_pemilik = "Budi Santoso";
const kota = "Semarang";
const tahun_berdiri = 2024;
const status_buka = true;
const nomor_whatsapp = "085974268536";
let website = null; */
const usaha = {
    namaPerusahaan: "Fried Chicken",
    namaPengusaha: "Akhmad Rudi Yanto",
    kota: "Semarang",
    tahunBuka: 2023,
    statusPembukaan: true,
    nomorTelepon: "081465935782",
    webSite: null,
};

let daftarMenu = [
    {
    kilat: 35000
    }
];
console.log("Nama Perusahaan : " + usaha.namaPerusahaan);
console.log("Asal Kota : " + usaha["kota"]);
console.log("Jasa Pertama : " + daftarMenu[kilat]);

/*
PERTANYAAN :
1. Mengapa nomor WhatsApp (contoh `"08123456789"`) lebih tepat disimpan sebagai **string**? Beri satu alasan konkret.
    - Karena nilai yang dimiliki bukan ditujukan sebagai angka perhitungan melainkan sebagai teks saja.
2. Mengapa `website` diberi `null`, bukan dibiarkan tanpa nilai seperti di kode awal? Apa bedanya `null` dan `undefined`?
    - Karena data pada 'website' masih belum dimuat dan memang sengaja dikosongkan. 
    - Null artinya nilai pada variabel sengaja dikosongkan, sedangkan Undefined adalah pemberian nilai berupa 'tidak ada' yang dilakukan secara otomatis.
3. Mengapa `daftarProduk[4]` tidak berisi produk ke-4, dan apa yang tercetak jika kamu mengaksesnya?
    - Karena pemanggilan data index dimulai dari 0 bukan 1, sehingga untuk memanggil data 4 maka harus memakai index 3.
    - Jika diakses maka outputnya menjadi undefined.
*/
