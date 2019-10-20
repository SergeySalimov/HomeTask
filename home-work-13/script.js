let num = prompt('Input any positiv whole number:');
let numLenght = num.length;
num = +num;
console.log('Your number by digit is:');
// variant 1 рабочий
// for (let i = numLenght; i > 0; i--) {
//   let digitNumber = Math.floor(num / (10 ** (i - 1)));
//   console.log(digitNumber);
//   num -= digitNumber * (10 ** (i - 1));
// }

// variant 2 без дополнительной переменной

for (let i = numLenght; i > 0; i--) {
  let delitelRazryda = 10**(i-1);
  console.log(Math.floor(num / delitelRazryda));
  num %= delitelRazryda;
}


