export default function listGifts(letter) {
  // ¡Tú puedes!
  const wordsArray = letter.trim().split(' ');

  return wordsArray.reduce((acc, currValue) => {
    if (!currValue.includes('_')) {
      if (!acc[currValue]) {
        acc[currValue] = 0;
      }
      acc[currValue] += 1;
    }
    return acc;
  }, {});
}

const carta = 'bici coche balón _playstation bici coche peluche';

const regalos = listGifts(carta);

console.log(regalos);
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/
