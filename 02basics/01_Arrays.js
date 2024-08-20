// array

// const myArr = [0, 1, 3, 4, 5, 6,]  
// resizebale, mixed, single type, 0-based index
// Shallow copy - properties shares same reference changes in original store also


// const newArr = new Array(1,2,3,4)

// // Array Methods

// newArr.push(5) // Add to last
// newArr.pop() // remove last elem
// console.log(newArr)

// let Arr = [1,2,3,4,5,6,7]

// // Arr.unshift(0) //add to first
// // Arr.shift() //Removes first elem

// // console.log(Arr.includes(2))
// // console.log(Arr.indexOf(3))

// // const newArray = Arr.join() // converted into string

// console.log("A", Arr)

// const myn1 = Arr.slice(1,4) // return new array with including first index excluding last index given
// console.log(myn1)
// console.log("B", Arr)


// const myn2 = Arr.splice(1,4) //retun new array with including first  and last index mentioned
// console.log(myn2)
// console.log("C", Arr)

// console.log(Arr) //slice doesnt manupulate original array but spice does

const marvelHeros = ["Thor", "Ironman", "Spiderman"]
const dcHeros = ["Superman", "Flash", "Batman"]

// marvelHeros.push(dcHeros)

// console.log(marvelHeros) // creates dcHeros as a nested Array within a marvelHeros ; assumes dcHeros as a single data [ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]

// let concatArr = marvelHeros.concat(dcHeros) 
// console.log(concatArr) // results [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

const allNewHeros = [...marvelHeros, ...dcHeros] // results [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

const another_array = [1 ,2 ,3 , [4, 5, 6], 7, [ 8, 9, [4 , 5]]]
const realAnother_array = another_array.flat(2)
console.log(realAnother_array)


