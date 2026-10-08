1.  Jelaskan mengapa Merge Conflict bisa terjadi. Sebutkan minimal 2 situasi yang memicunya, dan berikan 1 contoh skenario nyata (misal dua orang mengedit file yang sama)!
    Terdapat perubahan pada baris yang sama pada dua branch misal pada satu elemen html 2 orang mengubahnya, dan pada saat git push terjadilah conflict. 
    Ketika pada satu branch file diubah dan pada branch lain file dihapus, sehingga membingungkan untuk dihapus atau dipertahankan file pada github.

2.  Perhatikan potongan kode berikut:
    ``<<<<<<< HEAD
    <h1 style="color: red;">Selamat Datang</h1>
    =======
    <h1 style="color: blue;">Selamat Datang</h1>
    >>>>>>> branch-teman``

    a. Apa arti dari masing-masing penanda <<<<<<< HEAD, =======, dan >>>>>>> branch-teman?
        <<<<<<< HEAD : adalah tempat awal branch kita yang sedang aktif
        ======== : adalah pemisah antara branch kita dengan branch milik teman
        >>>>>>>> : adalah tempat perubahan milik branch lain.
    b. Baris mana yang merupakan versi dari branch aktifmu?
        <h1 style="color: red;">Selamat Datang</h1>
    c. Baris mana yang merupakan versi dari branch yang datang?
        <h1 style="color: blue;">Selamat Datang</h1>

3.  Jelaskan 2 cara menyelesaikan Merge Conflict: melalui Visual Studio Code dan melalui editor teks manual. Untuk masing-masing cara, sebutkan langkah-langkahnya! Mengapa VS Code direkomendasikan untuk pemula?
    Di VSCode pengguna bisa memilih salah satu antara “Accept Current Change” (mempertahankan perubahan sekarang dan menghapus versi terbaru), “Accept Incoming Change” (membuang versi sekarang, memakai versi terbaru), atau “Accept Both Change” (mempertahankan kedua perubahan)
    Jika di text editor, maka perlu membuka file yang berkonflik, menentukan perubahan apakah mempertahankan perubahan sekarang, mengikuti perubahan versi terbaru, atau menyimpan kedua perubahan dengan menghapus <<<<<<<, =======, >>>>>>>

4.  Setelah semua konflik diselesaikan secara manual, apa yang harus dijalankan di terminal untuk mencatat hasilnya? Tuliskan urutan perintahnya (minimal 3 perintah) dan jelaskan fungsi masing-masing!
    git add nama-file : untuk memindahkan dari working directory ke staging area.
    git status : untuk verifikasi bahwa sudah tidak ada lagi file yang berkonflik.
    git commit -m “pesan” : untuk mencatat apa yang diubah dan mengapa.

5.  Apa fungsi dari perintah git merge --abort? Sebutkan 1 situasi nyata di mana kamu sebaiknya menggunakan perintah ini daripada menyelesaikan konflik secara manual!
    Fungsinya adalah untuk membatalkan merge dan kembali pada kondisi sebelum dilakukannya merge.
    Dilakukan ketika conflict yang muncul terlalu rumit untuk diselesaikan secara mandiri dan perlu diskusi dengan rekan kerja. 

6.  Sebutkan minimal 4 praktik terbaik untuk meminimalkan frekuensi Merge Conflict dalam kerja tim. Untuk masing-masing praktik, jelaskan mengapa praktik tersebut dapat mengurangi risiko konflik!
    Sebelum memulai pekerjaan, lakukan git pull untuk mendapatkan versi terbaru dari github.
    Membuat commit yang terfokus agar mudah melacak konflik yang muncul.
    Berkomunikasi dengan rekan kerja tim, agar perubahan yang muncul tidak saling tumpang tindih.
    Segera menyelesaikan konflik agar proses pengubahan tidak menumpuk semakin banyak.

7.  Jelaskan mengapa pesan commit yang jelas sangat penting. Berikan 3 contoh pesan commit yang buruk dan 3 contoh pesan commit yang baik!
    Dengan memberi pesan commit yang jelas, pembaca akan mudah untuk membaca dan memahami perubahan apa yang terjadi didalamnya.
    contoh buruk :
        git commit -m “perubahan1”
        git commit -m “revisi-atasan”
        git commit -m “proyek selesai”
    contoh baik : 
        git commit -m “menambahkan fitur tombol submit”
        git commit -m “memperbaiki kerusakan input email”
        git commit -m “merapikan struktur kode”

8.  Jelaskan format penulisan Conventional Commits. Sebutkan minimal 4 tipe commit beserta fungsinya, dan berikan 1 contoh pesan commit untuk masing-masing tipe!
    feat : penambahan fitur baru
    fix : memperbaiki bug
    docs : perubahan dokumentasi
    style : pengubahan gaya penulisan kode
    git commit -m “feat: menambah fitur upload foto”

9.  Perhatikan 3 pesan commit berikut:
    - git commit -m "update"
    - git commit -m "fix bug tombol"
    - git commit -m "feat: menambahkan fitur pencarian produk di navbar"
    Mana yang paling baik? Jelaskan alasanmu berdasarkan prinsip penulisan pesan commit yang benar!
    git commit -m "feat: menambahkan fitur pencarian produk di navbar" adalah yang terbaik, karena berdasarkan conventional commits, pesan yang dimasukkan mengandung tipe commit, yaitu feat (feature), dan pesannya juga jelas, yaitu menambah fitur pencarian produk di navbar.

10. Apa fungsi file .gitignore dalam proyek Git? Sebutkan minimal 4 jenis file yang sebaiknya dimasukkan ke dalam .gitignore, dan jelaskan mengapa masing-masing jenis file tersebut tidak perlu di-upload ke GitHub!
    Fungsinya adalah agar git mengupload file .gitignore di repository github dan mengabaikannya.
    File dependesi node.js, ukurannya sangat besar dan bisa diunduh dari package.json
    File konfigurasi rahasia, berisi kata sandi atau data yang tidak boleh tersebar
    File sistem operasi, berisi file sampah yang tidak berkaitan dengan proyek.
    File hasil build, karena dapat dibuat ulang dari kode sumbernya.

11. Jelaskan format standar penamaan branch yang direkomendasikan. Berikan 3 contoh penamaan branch yang baik, beserta alasan mengapa format ini lebih baik dibanding penamaan yang bebas!
    Format penamaan yang baik adalah dengan cara memberi [tipe]/[deskripsi-singkat]
    git branch feat/fitur-tambah-kontak
    git switch -c fix/layar-tidak-sesuai-mobile
    git switch -c docs/update-readme-instalasi

12. Jelaskan peran masing-masing dari ketiga teknologi web (HTML, CSS, JavaScript) dalam pengembangan website. 
    HTML : Tulang dan otot dari sebuah tubuh
    CSS : Baju atau kulit pada tubuh
    JavaScripst : Otak dalam sebuah tubuh

13. Jelaskan 2 lingkungan tempat JavaScript dapat dijalankan.
    Front-end, js memang dirancang untuk bisa bekerja di browser agar tindakan bisa muncul di layar pengguna.
    Back-end, bisa dijalankan lansung pada sistem operasi komputer, untuk membangun server dan API, mengelola database

14. Jelaskan perbedaan antara JavaScript dan ECMAScript (ES). Berikan 1 contoh perbandingan kode antara gaya lama dan gaya modern!
    Javascript adalah merk suatu bahasa program, sedangkan ECMAScript adalah standar resmi dalam memakai js agar bisa berjalan di berbagai browser.
    contoh lama : 
        var nama = "Budi";
        function sapa(nama) {
          return "Halo, " + nama + "!";
    Contoh modern : 
        const nama = "Budi";
        const sapa = (nama) => `Halo, ${nama}!`;

