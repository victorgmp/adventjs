// function sumPairs2(numbers, result) {
//   // ¡Y no olvides compartir tu solución en redes!
//   // const hashMap = {};

//   let actualIndex = 0;
//   let currentValue = 0;
//   let neededValue = 0;
//   let exist = false;

//   for (let i = 0; i < numbers.length; i++) {
//     actualIndex = i;
//     neededValue = result - numbers[i];
//     currentValue = numbers[i];

//     for (let j = actualIndex + 1; j < numbers.length; j++) {
//       if (neededValue === numbers[j]) {
//         exist = true;
//         break;
//       }
//     }

//     if (exist) { break; }
//   }

//   return exist ? [currentValue, neededValue] : null;
// }

export default function sumPairs(numbers, result) {
  // ¡Y no olvides compartir tu solución en redes!
  const hashMap = {};

  for (let i = 0; i < numbers.length; i++) {
    const currentValue = numbers[i];
    hashMap[i] = currentValue;
  }

  for (let j = 0; j < numbers.length; j++) {
    const currentValue = numbers[j];
    const neededValue = result - currentValue;
    const neededValueIndex = numbers.indexOf(neededValue);

    if (hashMap[neededValueIndex] && neededValueIndex !== j) {
      return [currentValue, hashMap[neededValueIndex]];
    }
  }

  return null;
}

console.log(sumPairs([3, 5, 7, 2], 10)); // [3, 7]
console.log(sumPairs([-3, -2, 7, -5], 10)); // null
console.log(sumPairs([2, 2, 3, 1], 4)); // [2, 2]
console.log(sumPairs([6, 7, 1, 2], 8)); // [6, 2]
console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)); // [1, 5]
