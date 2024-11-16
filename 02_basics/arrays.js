const myArr = [0, 1, 2, 3, 4, 5]

//// method in arrays ////

//myArr.push(6) // this is use to add element in array
//myArr.pop() // this is use to remove last element in array
//myArr.shift() // this is use to remove first element in array
//myArr.unshift(0) // this is use to add first element in array

const newArr = myArr.join()
console.log(myArr)
console.log(newArr)

console.log(typeof(newArr))
console.log(typeof(myArr))

//slice or splice

console.log("A ", myArr)

const myn1 = myArr.slice(1, 3)
console.log(myn1)

const myn2 = myArr.splice(1, 3)
console.log(myn2)