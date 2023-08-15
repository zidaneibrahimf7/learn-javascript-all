//--- phasing data

//function addName(firstName, lastName) {
// return fullName

//  console.log(firstName, lastName)
// }

// alert(addName()); // kalo dikasih tanda kurung  itu nunjuk ke value return 

// alert(addName('ibrahim'))

// addName('ibrahim', 'fadela')

// pemanggilan juga langsung bisa dengan argument tanpa harus menulis variabel nya

// versi 1
// function addName() {
//   // for (let i = 0; i < arguments.length; i++) //
//     console.log(arguments)
//   console.log(arguments[0])
//   console.log(arguments[1])
// }

// addName('zidane', 'ibrahim')

//versi 2
// const fullName = function addName(firstName, lastName) {
//   console.log(firstName, lastName)
// }

// fullName('zidane', 'ibrahim')

// versi 3
// function addName(firstName, lastName) {
//   console.log(firstName, lastName)
// }

// const fullName = new Function('firstName', 'lastName', 'console.log(firstName, lastName)',
// )

// fullName('zidane', 'ibrahim')

function addName(firstName, lastName) {
  console.log(firstName, lastName)
}

// cara 1 keywoard new
const sum1 = new Function('x', 'y', 'console.log(x+y)')

// cara 2  standar function
function sum2(x, y) {
  console.log(x + y)
}

// cara 3 arrow function
const sum3 = (x, y) => {
  console.log(x + y)
}
sum1(1, 1)
sum2(2, 2)
sum3(3, 3)