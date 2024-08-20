const score = 1000;

const balance = new Number(100.78)
// console.log(balance)

// console.log(balance.toString())
// console.log(balance.toFixed(2)) //precission value

const otherNumber = 23.989898
console.log(otherNumber.toPrecision(3)) // three digits including decimal
// const hundreds = 100000000000
// console.log(hundreds.toLocaleString('en-IN')) // default US - standard

// Maths

// console.log(Math); //Objecj 
// console.log(Math.abs9-4) //Returns 4
// console.log(Math.round(4.7))
// console.log(Math.ceil(4.2))
// console.log(Math.floow(4.9))
// console.log(Math.min(4,3,6,8))
// console.log(Math.nax(4,3,6,8))


console.log(Math.random()) //returns value between 0 to 1
console.log(Math.floor(Math.random()*10) + 1) //returns value 1.something

const min = 10
const max = 20


console.log(Math.floor(Math.random() * (max-min + 1))+min)


