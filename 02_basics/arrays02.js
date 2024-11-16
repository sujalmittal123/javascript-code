/// push in arrays

const mobileArr = ["samsung", "oppo", "vivo", "apple"]
console.log(mobileArr)

const friendArr = ["vasu", "vinay", "vivek", "sujal", "vansh"]
console.log(friendArr)

// mobileArr.push(friendArr)
// console.log(mobileArr)

//// concat method
// to declare new array for applying concat method//

const joinArr = mobileArr.concat(friendArr)
console.log(joinArr)

/// spread method is also use in arrays

const joinArr2 = [...mobileArr, ...friendArr]
console.log(joinArr2)

// one more thing  throug spread mthod we can add mutple aarai in line


/// to convert any string ,object into array//

console.log(Array.from("sujal"))

/// convert list of item into arrys

let score1 = 233
let score2 = 234
let score3 = 235

console.log(Array.of(score1, score2, score3))