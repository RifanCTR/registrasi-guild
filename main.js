// main.js
$(document).ready(function() {
    $('#registrationForm').submit(function(e) {
        e.preventDefault(); // Prevent default form submission
        
        var namaLengkap = $('#namaLengkap').val();
        var namaPanggilan = $('#namaPanggilan').val();
        var username = $('#username').val();
        var nomorWhatsApp = $('#nomorWhatsApp').val();
        var tempatTinggal = $('#tempatTinggal').val();
        var gender = $('#gender').val();
        var umur = $('#umur').val();

        var gabungan = 'Nama Lengkap: ' + encodeURIComponent(namaLengkap) + '%0A' +
                       'Nama Panggilan: ' + encodeURIComponent(namaPanggilan) + '%0A' +
                       'Username atau ID: ' + encodeURIComponent(username) + '%0A' +
                       'Nomor WhatsApp: ' + encodeURIComponent(nomorWhatsApp) + '%0A' +
                       'Tempat Tinggal: ' + encodeURIComponent(tempatTinggal) + '%0A' +
                       'Gender: ' + encodeURIComponent(gender) + '%0A' +
                       'Umur: ' + encodeURIComponent(umur);

        var token = '6881667147:AAG_C3UWpEys2igKflAF-AagpxC4zjy8a-A';
        var grup = '-1002052635750';
        var statusPesan = $('#statusPesan');

        $.ajax({
            url: 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=' + grup + '&text=' + gabungan + '&parse_mode=html',
            method: 'GET',
            success: function() {
                // Reset form setelah berhasil dikirim
                $('#registrationForm')[0].reset();
                  // Redirect ke halaman indexthank.html setelah pengiriman berhasil
                window.location.href = 'indexthank.html';
                // Tampilkan status pesan
            },
            error: function() {
                // Tampilkan pesan kesalahan
                statusPesan.html('Data gagal dikirim ke Telegram. Silakan coba lagi.');
                statusPesan.css('background-color', '');
            }
        });
    });
});
