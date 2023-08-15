// // alert("hello world")


// // let nama = prompt('siapa nama kamu?');
// // alert('nama anda sangat nyebelin uhuy wahai' + " " + nama);

// //let nama = prompt('siapa namamu?');
// //let usia = prompt('berapa umurnya?');
// //alert(`terimakasih sudah mengisi ${nama} yang berusia ${usia} tahun. ayo mandi wahai sangat nyebelin, love uu`);


// let nama = 'zidane'; // tipe string
// let usia = 23; // tipe integer
// let ketinggian = 171.5 // tipe float
// let beratBadan // undefined (camelCase)
// let pacar = 123131

// beratBadan = 60;

// // if (pacar == null) {
// //   pacar = 'udah ada'
// // } else {
// //   pacar = 'jomblo euy'
// // }

// let saldoAwal = 50000;
// let saldoTambahan = 80000;
// const hutang = 30000
// const saldoAkhir = saldoAwal + saldoTambahan - hutang

// const x = 3
// const y = 5
// const z = x * y

// alert(`nilai x = ${x} dikali nilai y = ${y} maka hasilnya ${z}`)


// alert(`nama anda adalah ${nama} dan usia anda adalah ${usia} dengan tinggi badan sebesar ${ketinggian} cm dan beratnya sebesar ${beratBadan} kg dan pacar saya ${pacar}`);

// alert(`saldo awal saya sebesar Rp.${saldoAwal} dan saldo tambahan saya sebesar Rp.${saldoTambahan} sehingga saldo akhir Rp${saldoAkhir}`)


// // switch (pacar) {
//   // case 1:
// // pacar = "punya 1 aja"
// // break
//   // case 2:
// // pacar = "punya pacar 2, playboy amat"
// // break
//   // default:
// // pacar = 'belum ada bro'
// // break
// //} 


// ARRAY


// let namaGuru = ['jodi', 'bunga', 'rahman']
// namaGuru.push('zidane', 'dini') // push berfungsi untuk memasukkan value baru
// namaGuru.shift() // shift buat ilangin value dalam array
// namaGuru.pop // pop untuk menghapus value terakhir
// alert(namaGuru)

// let namaGuru = []

// namaGuru[0] = 'zidane'
// namaGuru[1] = 'dini'

// console.log(namaGuru)




// FOR LOOP (pengulangan berkali-kali)

// butuh 3 statement

// const namaGuru = ['zidane', 'angga', 'dini', 'ojan']
// console.log(namaGuru.length) // .length untuk mengetahui jumlah index dalam array

// for (let i = 0; i < namaGuru.length; i++) {
//   console.log(namaGuru[i])
// }


// WHILE LOOP VS DO WHILE

// let i = 10
// while (i < 20) {
//   i++
//   console.log('zidane')
// }

// do {
//   i++
//   console.log('zidane ibrahim')
// } while (i < 10)

/// tugas kecil

// 1) promp mengetahui saldo akhir yg diinput oleh user
// 2) menentukan hari dari tanggal yang ada saat ini di pc kalian

// let saldoAwal = prompt(`Berapa saldo yang anda punya?`)
// let hutang = prompt(`Berapa hutang anda?`)

// const saldoAkhir = saldoAwal - hutang;

// alert(`saldo akhir anda setelah dihitung oleh kami sebesar ${saldoAkhir}`)

// =---/


// const weekday = ['Minggu', 'senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu']
// const d = new Date()
// let day = weekday[d.getDay()]

// console.log(`hari ini adalah hari ${day}`)

