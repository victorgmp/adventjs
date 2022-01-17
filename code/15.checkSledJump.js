export default function checkSledJump(heights) {
  // ¡No olvides compartir tu solución en redes!
  let going = 'up';

  for (let i = 1; i < heights.length; i++) {
    if (heights[i] === heights[i - 1]) {
      return false;
    }

    if (going === 'up' && heights[i] < heights[i - 1]) {
      going = 'down';
    }

    if (going === 'down' && heights[i] > heights[i - 1]) {
      return false;
    }
  }

  return going === 'down';
}

console.log(checkSledJump([1, 2, 3, 2, 1])); // true: sube y baja de forma estricta
console.log(checkSledJump([0, 1, 0])); // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 3, 2, 1])); // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 1000, 1])); // -> true: sube y baja de forma estricta
console.log(checkSledJump([2, 4, 4, 6, 2])); // false: no sube de forma estricta
console.log(checkSledJump([1, 2, 3])); // false: sólo sube
console.log(checkSledJump([1, 2, 3, 2, 1, 2, 3])); // false: sube y baja y sube... ¡no vale!
