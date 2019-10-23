let num = +prompt('Input any positiv whole number:');

// let numLenght = num.length;
let numLenght = getDigitLenght(num);

// num = +num;
console.log('Your number by digit is:');
for (let i = numLenght; i > 0; i--) {
  let delitelRazryda = 10**(i-1);
  console.log(Math.floor(num / delitelRazryda));
  num %= delitelRazryda;
}

function getDigitLenght (number) {
  let countOfLenght = 0;
  do {
    number /= 10;
    countOfLenght++;
  } while (number > 1)
  return countOfLenght;
}
