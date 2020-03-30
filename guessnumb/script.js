
/*GAME TEBAK ANGKA*/
var kesempatan = 3;
alert("Tebak angka dari 1-10");



var comp = Math.floor(Math.random() * 10 + 1);

var hasil = "";

while (kesempatan > 0) {
var p = parseInt(prompt("Masukkan tebakan"));

if ( p == comp) {
 		hasil = "Anda BENAR! \nAngka yang ditebak adalah " + comp;
 		kesempatan = 0;
 	} else if ( p > comp){
 		kesempatan--;
 		hasil = "Terlalu TINGGI! \nMasih ada " + kesempatan + " kesempatan";
 	} else if ( p < comp){
 		kesempatan--;
 		hasil = "Terlalu RENDAH! \nMasih ada " + kesempatan + " kesempatan";
 	} else {
 		hasil = "Nilai yang Anda masukkan SALAH!";
 	}

 	alert(hasil);
 }
 alert("Terima kasih!");