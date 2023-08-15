//  buat ambil isi titel
// console.log(document.title)

// document.title = 'zidane belajar JS'

// console.log(document.title)

// buat ambil isi body
// console.log(document.body)

// konsep APPEND

// let body = document.body

// body.append('hello world') //append untuk mengisi value sesuatu..


// const h1 = document.createElement('h1') // <h1></h1>
// h1.textContent = '<marquee>ini h1 broder</marquee>' //<h1>ini h1 broder</h1>

// body.append(h1)

// const namaSaya = document.createElement('p');
// namaSaya.innerHTML = '<marquee>zidane</marquee>'

// body.append(namaSaya)

// const namaKamu = document.createElement('b')
// namaKamu.innerText = '<marquee>dini</marquee>'

// body.append(namaKamu)


//----- STYLING BUTTON
const body = document.body
const btn1 = document.getElementById('btn1');
const btn2 = document.querySelector('.btn2');

const defaultText = 'klik saya 1'

btn1.textContent = defaultText

btn1.style.border = 'none'
btn1.style.padding = '8px'
btn1.style.fontSize = '24px'
btn1.style.background = 'wheat'

//  console.log(btn2)

// function gantiWarna() {
//   console.log('aman')
//   alert('aman')
// }

function clickButton() {
  btn1.style.background = 'aqua';
  const newText = document.createElement('p')
  newText.textContent = 'aku sayang kamu'
  body.append(newText)

}

function ubahText() {
  btn1.textContent = 'aku sayang u'
}

function oriText() {
  btn1.textContent = defaultText
}

