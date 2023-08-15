//------ bersenanndung bersama array


// const arraySaya = ['👊', '🫴', '🤡'] // index = 0, 1 , 2,  
// console.log(arraySaya.length)

// const arrayKamu = []
// arrayKamu[0] = '👺'
// arrayKamu[1] = '💩'
// arrayKamu[2] = '💀'
// arrayKamu[5] = '✊'

// console.log(arrayKamu)

// const arraySaya = ['🍏', '🍉', '🍋', '🍌', '🍎']

// const semangka = arraySaya.includes('🍉') //includes untuk menemukan suatu value dalam array
// const posisiSemangka = arraySaya.indexOf('🍉')

// const indexBefore = posisiSemangka - 1
// const indexAfter = posisiSemangka + 1
// const before = arraySaya[indexBefore]
// const after = arraySaya[indexAfter]
// console.log(`buah sebelum semangka adalah ${before}`)
// console.log(`buah sesudah semangka adalah ${after}`)

// const buahAwal = arraySaya.shift()
// console.log(`buah awal saya ${buahAwal}`)

// // const buahTerakhir = arraySaya.pop()
// // console.log(`buah akhir saya ${buahTerakhir}`)

// const buahTerakhir = arraySaya[arraySaya.length - 1]
// console.log(`buah terakhir saya adalah ${buahTerakhir}`)


// // console.log(alpukat)

// if (semangka) {
//   console.log(`buah semangkat itu ada dan berada di posisi index ke-${posisiSemangka}`,)
// }
// else {
//   console.log('gatau dimana bro!')
// }

// const arraySaya = []

// arraySaya['alpuket'] = '🥑'
// arraySaya['lemon'] = '🍋'

// console.log(arraySaya['alpuket'])

// ----- DEEP COPY

// const arraySaya = ['🍉', '🍏', '🍋', '🥑', '🍉']
// // const newArraySaya = [...arraySaya] // kw
// // const newArraySaya = arraySaya.slice()
// const newArraySaya = Array.from(arraySaya)

// // ketiga nya sama membentuk array baru dengan konsep cuplikat copy. 

// newArraySaya[0] = '👹'

// console.log({ arraySaya })
// console.log({ newArraySaya })


// ------ array multidimensional

// const arraySaya = ['🍌', 10, {
//   tomato: function () {
//     console.log('ini tomat')
//   },
// },
//   ['eat', 'food'],
// ]

// console.log(arraySaya[3])

// // jika ingin mengambil 'eat', karena dia array dalam array, bisa gunakan

// console.log(arraySaya[3][0])

// // jika imgin mengambil 'tomato' karena dia bentuknya function, maka

// arraySaya[2].tomato()

// ---- menggabungkan multi array

const arraySaya = ['1', '2', '3']
const arrayKamu = ['4', '5', '6']

const mergeArray = arraySaya.concat(arrayKamu) // concat buat gabunginnya
console.log(mergeArray)

// mapping data

// for (list in mergeArray) console.log(list)

mergeArray.map((value, index) => console.log(index, value))
