export default function pangram(letter) {
  // ¡No olvides compartir tu solución en redes!
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const includesEne = letter.includes('ñ');

  const letterNormalized = letter
    .toLowerCase()
    .normalize('NFD');

  return alphabet.every((item) => (letterNormalized.includes(item) && includesEne));
}

console.log(pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho')); // true
console.log(pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!')); // true

console.log(pangram('Esto es una frase larga pero no tiene todas las letras del abecedario')); // false
console.log(pangram('De la a a la z, nos faltan letras')); // false
