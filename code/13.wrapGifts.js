export default function wrapGifts(gifts) {
  // ¡No olvides compartir tu solución en redes!
  if (gifts.length === 0) return [];

  const giftLength = (gifts[0].length);
  const asterisk = `*${'*'.repeat(giftLength)}*`;
  const wrappedGifts = gifts.map((gift) => `*${gift}*`);

  wrappedGifts.unshift(asterisk);
  wrappedGifts.push(asterisk);

  return wrappedGifts;
}

console.log(wrapGifts(['📷', '⚽️']));
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

// wrapGifts(["🏈🎸", "🎮🧸"])
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

// wrapGifts(["📷"])
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/
