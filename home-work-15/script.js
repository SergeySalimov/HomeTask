const arrWithRepeat = [1, 3, 6, 'a', 'd', 1, 8, 'a', 1];
console.log(arrWithRepeat);

let arrWithoutRepeat = deleteFromArrRepeat(arrWithRepeat);
console.log(arrWithoutRepeat);


function deleteFromArrRepeat(arrWork) {
  let newArr = [];
  for (let i1=0; i1 < (arrWork.length-1); i1++) {
    for ( let i2=arrWork.length; i2 > 1; i2--) {
      if (arrWork[i1] === arrWork[i2]) {
        arrWork.splice(i2,1);
      }
    }
    return arrWork;
  }
}
