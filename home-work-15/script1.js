const numbers1 = [1, 5, 7, 1, 3, 6, 5, 12, 33];
const numbers2 = [3, 1, 9, 1, 0, 6, 11, 22, 4, 56, 5];

console.log(`Summ of massive ${numbers1} 
and massive     ${numbers2}
is equal        ${numbers1.length>numbers2.length ? arrSummBigerFirst(numbers1,numbers2) : arrSummBigerFirst(numbers2,numbers1)}`);

function arrSummBigerFirst (arr1,arr2) {
  let newNumbers = [];
  for (let i=0; i<arr1.length; i++) {
    arr2.length > i ? newNumbers.push(arr1[i]+arr2[i]) : newNumbers.push(arr1[i])
  }
  return newNumbers;
}
