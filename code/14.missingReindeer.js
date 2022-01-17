// export default function missingReindeer(ids) {
//   // ¡No olvides compartir tu solución en redes!
//   const maxId = Math.max(...ids);

//   if (maxId === 0) return 1;

//   for (let i = 0; i < maxId; i++) {
//     if (!ids.includes(i)) {
//       return i;
//     }
//   }

//   return maxId + 1;
// }
export default function missingReindeer(ids) {
  // ¡No olvides compartir tu solución en redes!
  const sortedIds = ids.sort((a, b) => a - b);
  const n = sortedIds.length;
  const total = (n * (n + 1)) / 2;

  const sum = sortedIds.reduce((acc, curr) => acc + curr, 0);

  return total - sum;
}

console.log(missingReindeer([0, 2, 3])); // -> 1
console.log(missingReindeer([5, 6, 1, 2, 3, 7, 0])); // -> 4
console.log(missingReindeer([0, 1])); // -> 2 (¡es el último el que falta!)
console.log(missingReindeer([3, 0, 1])); // -> 2
console.log(missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1])); // -> 8
console.log(missingReindeer([0])); // -> 1 (¡es el último el que falta!)
