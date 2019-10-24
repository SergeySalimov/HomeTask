let num = prompt('Input any positive whole number:');
let numLenght = num.length;
num = +num;
console.log('Your number by digit is:');
for (let i = numLenght; i > 0; i--) {
  let delitelRazryda = 10**(i-1);
  console.log(Math.floor(num / delitelRazryda));
  num %= delitelRazryda;
}


