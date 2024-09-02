//Slice operator 
const url= "https://hitesh.com/%20choudhury"
console.log((url.replace('%20','-')).trim());
const newurl=(url.replace('%20','-')).trim();
// validate sctrings include or not 

console.log(url.includes('com'));

// convert a string to a array

console.log(newurl.split('-'))
let address = newurl.split('-');
console.log(address[0])
console.log(address[1])

const nameMy=new String ('subhankar')
console.log(nameMy.bold())
//concat atstring without +
console.log(nameMy.concat(address[1]))
//slice a string based on the index cordinates
console.log(url.slice(0,9));

//Backlit to provide string 
// by Subhankar 
console.log(`Hi My name is ${nameMy} and I Use the ${url}`)

