export default function getCoins(change) {
  // ¡No olvides compartir tu solución en redes!
  const coins = [1, 2, 5, 10, 20, 50];
  const result = [0, 0, 0, 0, 0, 0];
  let remaining = change;
  // comparar el cambio con la moneda mas grande
  for (let i = coins.length - 1; i >= 0; i--) {
    const coin = coins[i];

    while (remaining >= coin) {
      remaining -= coin;
      result[i] += +1;
    }
    // if (remaining >= coin) {
    //   remaining -= coin;
    //   result[i] += 1;
    // }

    // const index = coins.findIndex((c) => c === remaining);
    // if (index !== -1) {
    //   result[index] += 1;
    //   break;
    // }
  }

  return result;
}

console.log(getCoins(51)); // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
console.log(getCoins(3)); // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
console.log(getCoins(5)); // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
console.log(getCoins(16)); // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
console.log(getCoins(100)); // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos
