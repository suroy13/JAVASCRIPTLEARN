//OTP generator
let otp;
let otpRandomGenerator=Math.random();
otp = Math.floor(otpRandomGenerator * 10000).toString().padStart(4, '0');
console.log(`The generated OTP is ${otp}`);


