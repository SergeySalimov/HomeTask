let x = +prompt('Input x:');
let y = +prompt('Input y:');
console.log('Numbers from x to y:');
for (let i = x; i <= y; i++) {
  console.log (i);
}
console.log('Even numbers from x to y:');
for (let i = x; i <= y; i++) {
  if (i % 2 === 0) {
    console.log (i);
  }
}

