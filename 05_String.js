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
