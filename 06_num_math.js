// //numbers method 
// // tofixed()  to set delcimal places like 2 decimal places

// let num=100.45987
// console.log(`the length for the folowing ${num} is ${num.length}`)
// console.log(num.toFixed(2));

// // convert the num to string aten get the length
// let stringff= num.toString();
// console.log(stringff.length)
// //----------------------Math--------------------------------------------
// const hundreds=1000000
// console.log(Math)
// // Reversion of -ve value to +ve
// console.log(Math.abs(-9));
// // Round number 
// //console.log(Math.round(5.7))
// console.log(Math.round(num))
// // Max min on an array 
// let maxi=[5, 6, 90, 56, 9]
// console.log(Math.max(5, 6, 90, 56, 9))

//------------------------------------------------------------------

// // math Random function to be used in dice game 
//console.log((Math.random(10)*10)+ 1)
let randNum= (Math.random(10)*10)+ 1
// to print only number before decimal using floor which will do to nearest round off
console.log(`the value without decimal to round of to lowest ${Math.floor(randNum)}`)

const min = 4
const max = 10

console.log(Math.floor(Math.random()*(max-min+1))+min)
