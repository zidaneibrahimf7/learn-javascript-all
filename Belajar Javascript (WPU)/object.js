// object literal 
var orang = {
  nama: 'zidane',
  umur: 23,
  kelas: [2, 3, 4, 5]
};

let mahasiswa = {
  nama: 'naruto'
}

// function declaration

function objectMahasiswa(nama, nrp, email, jurusan) {
  var mhs = {};
  mhs.nama = nama;
  mhs.nrp = nrp;
  mhs.email = email;
  mhs.jurusan = jurusan;
  return mhs;
}

let mhs3 = objectMahasiswa('zidane', '089898', 'test@gmail.com', 'ilkom');

//contructor 
function Mahasiswa(nama, nrp, email) {

  this.nama = nama;
  this.nrp = nrp;
  this.email = email;
}

var mhs4 = new Mahasiswa('ibrahim', '90090', 'sa@gmail.com', 'bisnis')