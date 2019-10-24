let num1 = +prompt('Input any positive whole number:');
console.log('Your number by digit is:');
do {
  console.log(num1 % 10);
  num1 = Math.floor(num1 /= 10);
} while (num1 > 1);


