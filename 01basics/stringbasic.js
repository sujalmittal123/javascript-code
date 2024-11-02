// synatx to write string is "sujal"//
// syntax to add two string is "sujal" + "kumar"//

//  in string we use  string interpretion//
// ${}  this is use in string interpretion//

const name = "sujal"
const repocount = 34

console.log(`my name is ${name} and my repo count is ${repocount}`)

// string can be declared in other way like this//

const nameOfGame = new String('sujal')
console.log(nameOfGame[1])

// to check string lenght//
console.log(nameOfGame.length)

// to convert string into lower case and upper case//
console.log(nameOfGame.toUpperCase())

//to check the character in string//
console.log(nameOfGame.charAt(2))

//to chech index of character//
console.log(nameOfGame.indexOf('a'))

//subtracting method in string//
console.log(nameOfGame.substring(0, 3))

//slice method in string//
console.log(nameOfGame.slice(0, 3))
    // slice can reverswe the and print the numbewr in reverse//

//trime methos in string//
const newName = '  sujal  '
console.log(newName)
console.log(newName.trim())

//url replace in string//

const url = 'https://google.com'

console.log(url.replace('https', 'http'))