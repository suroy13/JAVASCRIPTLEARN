// const arr1=[1,2,3,4,5,6,7,8,9]

// for (const arrNum of arr1){

//     arrNum === 5 ? console.log(`Got It ${arrNum}`): console.log("Keep going!");
// }

// breaking a word into an array 

// const name = "Cognizant Technology Solutions Pvt.ltd"

// for (const cts of name){

//     console.log(cts);
// }
// implementation of map Objects 
// The entries will be uniques 

const mmap=new Map()
mmap.set('IN','India')
mmap.set('US','USA')
mmap.set('CA','Canada')
mmap.set('EU','European Union')
// destructing of the array 
for (const [key, value] of mmap) {
    if (value === "USA") {
        console.log(`The value of the ${key}:- ${value}`);
        break;
    } else {
        console.log(`The value of the ${key}:- ${value}`);
    }
}
