export default function decodeNumbers(symbols) {
  // ¡No olvides compartir tu solución en redes!
  // mapear valor de numeros
  const map = {
    '.': 1,
    ',': 5,
    ':': 10,
    ';': 50,
    '!': 100,
  };
  // crear variable temporal para el total
  let total = 0;

  // iterar por cada valor del array
  for (let i = 0; i < symbols.length; i++) {
    // obtener el valor actual
    let currentValue = map[symbols[i]];
    // obtener el proximo valor
    const nextValue = map[symbols[i + 1]];

    if (!currentValue) return NaN;

    currentValue = currentValue < nextValue ? currentValue * -1 : currentValue;
    total += currentValue;
  }
  return total;
}

console.log(decodeNumbers('...')); // 3
console.log(decodeNumbers('.,')); // 4 (5 - 1)
console.log(decodeNumbers(',.')); // 6 (5 + 1)
console.log(decodeNumbers(',...')); // 8 (5 + 3)
console.log(decodeNumbers('.........!')); // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
console.log(decodeNumbers('.;')); // 49 (50 - 1)
console.log(decodeNumbers('..,')); // 5 (-1 + 1 + 5)
console.log(decodeNumbers('..,!')); // 95 (1 - 1 - 5 + 100)
console.log(decodeNumbers('.;!')); // 49 (-1 -50 + 100)
console.log(decodeNumbers('!!!')); // 300
console.log(decodeNumbers(';!')); // 50
console.log(decodeNumbers(';.W')); // NaN
