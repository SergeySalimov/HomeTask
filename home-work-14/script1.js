
// Task 3
let factorialNumber = +prompt('Input number for factorial:');
let answerNumber = 1;
for (let i = 1; i <= factorialNumber; i++) {
  answerNumber *= i;
}
console.log (`Factorial of number ${factorialNumber} = ${answerNumber}`);

let numberForRange = +prompt('Input number for checking:');

// Task 4
if (isNumberInRange(numberForRange)) {
  console.log('This number in range');
} else {
  console.log('Number is not in range');
}

function isNumberInRange (number) {
  if (number > 0 && number < 10) {
    return true
  } else {return false}
}

// Task 5

let numberForSum = +prompt('Input number for sum:');
console.log(`Sum of all numbers of the ${numberForSum} is equal ${getDigitSum(numberForSum)}`);

function getDigitSum(number) {
  let sumNumber = 0;
  for (let i = 0; i <= number; i++) {
    sumNumber += i;
  }
  return sumNumber;
}