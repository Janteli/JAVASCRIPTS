console.log(typeof "suraz")

let score = "33"

console.log(typeof score)

console.log(typeof(score))

let conversion = Number(score)
console.log(typeof conversion)

let conf = "123abc"

let conv = Number(typeof conf) // Numbers converts null, undefined -> NaN(not a number) boolean gets converted to 1 or 0 and NaN types is number.

let bool = 1
let conve = Boolean(bool) // result true -> if string true if empty string false

let numb = 33
let striNumb = String(numb)

// Comparision

console.log("2"> 1) // true coz string 2 gets converted to number itself

console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) //true

let num1, num2, num3

num1 = num2 = num3 = 2+2

let anum = 100
console.log(anum++) //postfix 101
console.log(++anum) //prefix 101

