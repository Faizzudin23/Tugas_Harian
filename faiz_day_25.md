1.  Jelaskan dua arah aliran kode antara komputer lokal dan GitHub (push dan pull). Berikan 1 contoh situasi nyata kapan kamu perlu melakukan push, dan 1 situasi kapan kamu perlu melakukan pull!  
    git push merupakan aliran kode dimana kita sebagai pengembang melakukan pengiriman commit pada repository lokal ke repository github. cocok dilakukan ketika kita sudah selesai melakukan perubahan dan melakukan commit pada repositori lokal untuk kemudian di upload ke github, agar pengembang lain bisa melihatnya.  
    git pull merupakan aliran kode dimana kita sebagai pengembang menarik semua data dan riwayat commit yang sudah diubah pada repository github ke repository lokal atau di laptop pengembang. cocok dipakai untuk memastikan pengembang memakai versi terbaru dan untuk menghindari konflik dengan perubahan yang sudah dilakukan orang lain sebelum dilakukan git push.  

2.  Jelaskan fungsi perintah git push. Lalu jelaskan:  
    Git push merupakan perintah yang melakukan pengiriman kode dan riwayat commit pada repository lokal ke repository github.  
    a.  Apa fungsi opsi -u pada git push -u origin main?  
        Singkatan dari –set-upstream, yang menghubungkan antara repository lokal dengan repository github, sehingga ketika sudah selesai melakukan perubahan cukup mengetik git push dan data repository lokal akan terkirim.  
    b.  Apa yang terjadi jika opsi -u tidak disertakan pada push pertama?  
        Maka setiap kali melakukan git push perlu menambahkan 2 variabel yaitu origin dan nama cabang  
    c.  Mengapa setelah -u ditetapkan, kita cukup menjalankan git push saja?  
        Karena dengan menambahkan -u artinya repository lokal akan dihubungkan dengan repository github sehingga tidak perlu lagi mengetik panjang seperti git push origin main setiap kali ingin mengupload ke github.  

3.  Jelaskan perbedaan mendasar antara git clone dan git init. Mengapa setelah git clone, kita tidak perlu menjalankan git init lagi?  
    Git clone adalah perintah untuk mendownload sebuah repository github secara lengkap, mulai dari file hingga riwayat commit yang tersimpan ke dalam repository lokal.  
    Karena dengan melakukan git clone, folder .git juga ikut di download, maka dari itu tidak perlu lagi melakukan git init.  

4.  Jelaskan fungsi perintah git pull. Mengapa perintah ini sangat penting dalam kerja tim? Sebutkan 2 momen spesifik kapan sebaiknya menjalankan git pull  
    Ada kalanya ketika dalam sebuah proyek ada orang yang sudah melakukan beberapa perubahan pada proyek. fungsi dari git pull adalah mengambil perubahan tersebut untuk digabungkan pada repository lokal pengembang.  
    2 momen perlu dilakukan git pull adalah ketika pengembang ingin memastikan bahwa ia bekerja pada versi terbarunya, dan dilakukan sebelum melakukan git push agar terhindar dari adanya konflik dengan perubahan yang sudah dikirimkan orang lain.  

5.  Tuliskan alur kerja harian yang direkomendasikan dalam bentuk urutan  (command). Jelaskan mengapa setiap langkah dalam urutan tersebut penting  
    git pull : menarik repository github ke repository lokal.  
    git add . : untuk memindahkan perubahan dari working directory ke staging area.  
    git commit -m “pesan perubahan” : untuk mencatat perubahan dari staging area ke repository lokal.  
    git push : mengirim semua repository lokal ke repository github  

6.  Apa itu Fork? Sebutkan minimal 2 situasi nyata di mana seseorang perlu melakukan fork. Apa perbedaan mendasar antara fork dan clone?  
    Adalah metode untuk menyalin sebuah repository github yang dimiliki orang lain ke repository pribadi, yang hasilnya berupa repository independen dimana semua perubahan yang terjadi tidak akan berpengaruh pada repository aslinya.  
    Ketika ingin berkontribusi pada proyek open source yang tidak kita miliki.  
    Saat ingin mencoba belajar satu proyek tanpa merusak repository asli.  

7.  Jelaskan 6 langkah alur kontribusi pada proyek open source menggunakan Fork + Pull Request. Untuk setiap langkah, jelaskan tujuannya masing-masing!  
    Melakukan fork dari repository orang lain ke repository pribadi.  
    Git clone repository fork tadi ke repository lokal.  
    Git switch -c branch-baru untuk membuat cabang baru dan langsung masuk ke cabang tersebut.  
    Melakukan perubahan, kemudian melakukan git add . dan kemudian git commit agar semua perubahan sudah tersimpan dengan baik sebelum git push  
    Git push repository lokal ke repository github.  
    Di github buka pull request untuk menggabungkan repository lokal ke repository github.  

8.  Apa yang dimaksud dengan Pull Request? Jelaskan peran PR dalam kerja tim — mengapa tim profesional tidak langsung merge setiap perubahan ke main, tetapi harus melalui PR terlebih dahulu? Sebutkan minimal 2 keuntungan menggunakan PR!  
    Adalah perintah pengajuan perubahan untuk ditinjau terlebih dahulu sebelum digabungkan dengan repository asli.  
    Karena dengan PR semua anggota tim bisa mengetahui perubahan apa yang terjadi dan siapa yang mengubah, serta menentukan perubahan mana yang akan dimasukkan ke repository github.  
    Terdapat judul dan deskripsi pull request untuk memudahkan melihat riwayat perubahan.  

9.  Perhatikan skenario berikut:  
    Andi dan Budi mengerjakan proyek yang sama. Andi push perubahan ke GitHub pagi ini. Budi kemarin terakhir pull, lalu pagi ini langsung mengedit file style.css di komputernya dan berusaha push.  
    a.  Apa yang kemungkinan besar terjadi saat Budi mencoba push?  
        Akan terjadi error berupa penolakan push oleh budi  
    b.  Mengapa hal ini bisa terjadi? Kaitkan dengan konsep git pull.  
        Perubahan yang dikirim andi sudah tergabung pada branch master sehingga ketika budi melakukan git push, akan terjadi penumpukan kode yang bisa saja merusak proyek.  
    c.  Apa yang seharusnya Budi lakukan sebelum mulai mengedit file tersebut?  
        Sebelum mengerjakan style.css seharusnya budi melakukan git pull terlebih dahulu untuk memperbarui repository lokalnya ke versi terbarunya (termasuk perubahan yang dikirim andi)  
    d.  Tuliskan urutan perintah yang seharusnya dilakukan Budi sejak pagi hari!  
        Git pull -> melakukan perubahan -> git add . -> git commit -m “perubahan” -> git push  

10. Studi Kasus — Alur Kerja Lengkap: Perhatikan urutan perintah berikut:  
    ```git clone https://github.com/andi/proyek.git  
        cd proyek  
        git switch -c perbaikan-bug  
        touch fix.js  
        git add fix.js  
        git commit -m "Memperbaiki bug pada validasi form"  
        git push origin perbaikan-bug```  

    Analisislah skenario tersebut dengan menjawab:  
    a.  Apa yang dilakukan oleh perintah git clone pada baris pertama?  
        Melakukan clone repository github proyek milik andi, ke repository lokal  
    b.  Mengapa pengguna membuat branch perbaikan-bug sebelum mulai bekerja? Mengapa tidak langsung di main?  
        Agar perubahan yang terjadi tidak mempengaruhi branch main dan hanya berlaku pada branch perbaikan-bug, pada branch baru ini salinan kodenya bersifat independen sehingga pengembang bisa bereksperimen, menambah fitur atau memperbaiki bug.  
    c.  Apa tujuan git push origin perbaikan-bug — mengapa tidak git push saja?  
        Karena fungsi git push artinya mengirim repository lokal dan riwayat commit pada branch main yang bisa saja mempengaruhi kestabilan proyek, sedangkan git push origin perbaikan-bug artinya pengembang mengirim repository serta perubahannya pada branch perbaikan-bug.  
    d.  Setelah perintah terakhir dijalankan, langkah apa yang harus dilakukan di antarmuka web GitHub untuk mengajukan perubahan ke pemilik repo?  
        Membuat pull request, dimana pada github akan muncul notifikasi bahwa satu branch baru saja di push, komparasikan perubahan baru pull request, beri deskripsi apa dan mengapa bagian itu diubah?  
    e.  Jika pemilik repo meminta revisi, apa yang harus dilakukan pengguna? Jelaskan alurnya!  
        Pengguna harus melakukan git pull lagi untuk memperbarui repository lokal, kemudian melakukan perubahan lagi, lalu git add . dan kemudian commit perubahan pada repository lokal, baru lakukan git push lagi.  
