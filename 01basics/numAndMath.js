const score = 588
console.log(score)

//to print this proper in number form we need to write in this way//

const balace = new Number(588)
console.log(balace)
console.log(typeof balace)

//to covert number into string we need to write this method//
console.log(balace.toString())
console.log(typeof balace.toString())

//presion value//
const number = 534.23
console.log(number.toPrecision(3))


//++++++++++++++++++++++++++++ math ++++++++++////////////////


//random number//

console.log(Math.random())
console.log(Math.random() * 10)
console.log(Math.floor(Math.random() * 10) + 1)

const min = 23
const max = 100

console.log(Math.floor(Math.random() * (max - min + 1) + min))