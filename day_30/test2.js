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
