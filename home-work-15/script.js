const arrWithRepeat = [1, 1, 1, 1, 3, 6, 'a', 'd', 1, 8, 'a', 1, 22, 'd', 22];
console.log(arrWithRepeat);

let arrWithoutRepeat = deleteFromArrRepeat(arrWithRepeat);
console.log(arrWithoutRepeat);


function deleteFromArrRepeat(arrWork) {
  let newArr = [];
  for (let value of arrWork) {
    newArr.push(value);
  }
  // console.log(newArr);

  for (let i1=0; i1<(newArr.length - 1); i1++) {

    for (let i2 = (newArr.length-1); i2 > i1; i2--) {
      if (newArr[i1] === newArr[i2]) {
        newArr.splice(i2, 1);
      }
    }
  }
  return newArr;
}
