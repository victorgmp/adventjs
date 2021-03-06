export default function wrapGifts(gifts) {
  // Â¡No olvides compartir tu soluciÃ³n en redes!
  if (gifts.length === 0) return [];

  const giftLength = (gifts[0].length);
  const asterisk = `*${'*'.repeat(giftLength)}*`;
  const wrappedGifts = gifts.map((gift) => `*${gift}*`);

  wrappedGifts.unshift(asterisk);
  wrappedGifts.push(asterisk);

  return wrappedGifts;
}

console.log(wrapGifts(['ð·', 'â½ï¸']));
/* Resultado:
[ '****',
  '*ð·*',
  '*â½ï¸*',
  '****'
]
*/

// wrapGifts(["ðð¸", "ð®ð§¸"])
/* Resultado:
[ '******',
  '*ðð¸*',
  '*ð®ð§¸*',
  '******'
]
*/

// wrapGifts(["ð·"])
/* Resultado:
[ '****',
  '*ð·*',
  '****'
]
*/
