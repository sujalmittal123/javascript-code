/// singleton 

// objet literals

const myObj = {
    name: "sujal",
    age: 24,
    email: "sujalagarwal.com",
    college: "ncu"
}

console.log(myObj)

// to declare symbol in javascript

// const symbol1 = Symbol("id")

// [symbol1] = "sujal"

// console.log([symbol1])

/// to acces object in js

console.log(myObj.email)

myObj.email = "kumaragarwal31@.gmail.com"
console.log(myObj)

/// add fucntion in object

myObj.greet = function() {
    console.log("hello world")
}
console.log(myObj.greet())