export default function maxProfit(prices) {
  // ¡Y no olvides compartir tu solución en redes!
  let minBuyPrice = Infinity;
  let profit = 0;

  // eslint-disable-next-line no-restricted-syntax
  for (const price of prices) {
    if (price < minBuyPrice) {
      minBuyPrice = price;
    } else if (price - minBuyPrice > profit) {
      profit = price - minBuyPrice;
    }
  }

  if (profit === 0) return -1;

  return profit;
}

const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
console.log(maxProfit(pricesBtc)); // -> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70];
console.log(maxProfit(pricesEth)); // -> 60 (compra a 10, vende a 70)

console.log(maxProfit([6, 5, 4, 3]));
console.log(maxProfit([18, 15, 12, 11, 9, 7]));
