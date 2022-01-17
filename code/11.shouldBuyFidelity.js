export default function shouldBuyFidelity(times) {
  // ¡No olvides compartir tu solución en redes!
  const priceTicket = 12;
  const constFidelityCard = 250;
  const discount = 0.75;
  const normalTicket = priceTicket * times;
  let loyaltTicket = constFidelityCard;

  for (let time = 1; time < times; time++) {
    loyaltTicket += priceTicket * discount ** (time + 1);
  }

  return loyaltTicket < normalTicket;
}

console.log(shouldBuyFidelity(1)); // false -> Mejor comprar tickets de un sólo uso
console.log(shouldBuyFidelity(100)); // true -> Mejor comprar tarjeta fidelidad
