export default function isValid(letter) {
  // ¡No dejes que el Grinch gane!
  return /^[^{[()]*\([^{[()]+\)+.*/g.test(letter);
}

const a = 'peluche (bici [coche) bici coche balón';
const b = 'bici coche (balón bici coche';
const c = '(muñeca) consola bici';
const d = ')bici( casa play';

console.log(isValid(a));
console.log(isValid(b));
console.log(isValid(c));
console.log(isValid(d));
