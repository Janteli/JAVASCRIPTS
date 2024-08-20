//////// Date ////
// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())

// console.log(typeof myDate) // object

// let myCreatedDate = new Date(2024,5,29)
// console.log(myCreatedDate.toDateString())

// let createdDate = new Date("2024-01-14")
// console.log(createdDate.toDateString())

// let myTimesStamp = Date.now()
// console.log(myTimesStamp)
// console.log(createdDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate.getMonth())
console.log(newDate.getDay())

newDate.toLocaleString('default',{
    weekday: "long"
})
