function sum (x,y){
    console.log ('before return');
    s= x+y;
    return s;
    //Note: The code after the return statement of any function is not executed.
    console.log ('after return');
}
let val= sum(4,4);
console.log (val);

// using arrow function
const sumtol =(x,y)=>{
    console.log ('before return');
    s= x+y;
    return s;
    //Note: The code after the return statement of any function is not executed.
    console.log ('after return');
}

const total=sumtol(88,999);
console.log (total);

// return of vowels from a word using the FOR of Loop

function Isvowel(letts) {

const vowel='aeiouAEIOU'
let result=''
for (const char of letts){
  
    if (vowel.includes(char)){

result=char

        console.log(result)

    }

}

}

Isvowel('Subhankar Roy')
// for each function in javascript

const marks=[2,4,5,6]
let totl=0
marks.forEach(summation);

function summation(num){

    totl+=num
 console.log(totl)
}

//------------------
const fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

function myFunction (element){
 console.log(element)
}
// with arrow function
fruits.forEach((element)=>{
    console.log('i am foreach loop:'+element)
});

// Excersise of foreach to do square of array elements 

let arr=[1,2,3,4]

arr.forEach((sqr)=>{

    console.log(sqr*sqr)}
)

let fname='subhankar'

console.log(fname.concat(' Roy'));




