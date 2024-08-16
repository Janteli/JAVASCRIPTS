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
