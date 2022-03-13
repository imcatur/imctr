// var khlit8nbdgerjj_global_img = 'https://blogger.googleusercontent.com/img/a/AVvXsEjL5_O4oXweKUEx76kcuTjPxa4_zvtpciYocoEqCK_EP8aa0DyVhgHByebauECy13lSS7qpdRWA1LxB-c98vKhJnX4P1RJXTuntWg7Al9-tpRD_UhYhpu-0py45wkIsE1VoFRUsbCFEJujdXOx3l1GlvnhzjN5VdXcFH-y58XsdHSxIUbjnmTo3kPCG';
// var msg = [
// 	{
// 		"img" : khlit8nbdgerjj_global_img,
// 		"txt" : "Mira Telah Memesan <br>Pembuatan Blog Dan Website, <br>Seharga 200K."
// 	},
// 	{
// 		"img" : khlit8nbdgerjj_global_img,
// 		"txt" : "Tina Telah Memesan <br>Toko Online Dengan Opencart, <br>Seharga 200K."
// 	},
// 	{
// 		"img" : khlit8nbdgerjj_global_img,
// 		"txt" : "Rani Telah Memesan <br>Pemasangan Web Server, <br>Seharga 200K."
// 	}
// ];
var khlit8nbdgerjj_global_img = 'https://blogger.googleusercontent.com/img/a/AVvXsEjL5_O4oXweKUEx76kcuTjPxa4_zvtpciYocoEqCK_EP8aa0DyVhgHByebauECy13lSS7qpdRWA1LxB-c98vKhJnX4P1RJXTuntWg7Al9-tpRD_UhYhpu-0py45wkIsE1VoFRUsbCFEJujdXOx3l1GlvnhzjN5VdXcFH-y58XsdHSxIUbjnmTo3kPCG';
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
var t78j45_fd76_nama = 'Dwi Muhammad Nur Dewi Tri Dian Sri Putri Eka Sari Ayu Wahyu Indah Siti Ika Agus Fitri Ratna Andi Agung Ahmad Kurniawan Ilham Budi Adi Eko Nurul Putra Ni Arif Puspita Ari Indra Dyah Rizki Maria Ratih Pratiwi Kartika Wulandari Fajar Bayu Lestari Anita Muhamad Kusuma Rahmawati Fitria Retno Kurnia Novita Aditya Ria Nugroho Putu Handayani Rahayu Yunita Rina Ade Widya Intan Diah Agustina Made Abdul Setiawan Rizky Rini Wahyuni Yulia Maya Puji Utami Amalia Dina Devi Citra Arief Munaroh Bagus Hidayat Hendra Eva Endah Raden Novi Irma Astuti Achmad Aulia Surya Amelia Prima Angga Hadi Diana Anggraini Wulan Saputra Yuni';
var h587jhjf_arr_nama = t78j45_fd76_nama.split(' ');
var jhfjd34hgj_arr_jasa = [
	'Pembuatan Blog Dan Website',
	'Toko Online Dengan Opencart',
	'Pemasangan Web Server'
];
var msg = [];
for(var i = 0; i < 100; i++){
	var jhfdkj546_ambil_nama = h587jhjf_arr_nama[Math.floor(Math.random()*h587jhjf_arr_nama.length)];
	var jhfdkj546_ambil_jasa = jhfjd34hgj_arr_jasa[Math.floor(Math.random()*jhfjd34hgj_arr_jasa.length)];
	msg[i] = {};
	msg[i].txt = jhfdkj546_ambil_nama + ' Telah Memesan <br>' + jhfdkj546_ambil_jasa + ', <br>Seharga ' + getRandomInt(250, 1500) +'K';
	msg[i].img = khlit8nbdgerjj_global_img;
}
