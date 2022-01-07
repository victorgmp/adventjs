export default function daysToXmas(date) {
  // ¡Y no olvides compartir tu solución en redes!
  const fecha = (new Date('Dec 25, 2021') - date) / (1000 * 3600 * 24);
  return Math.ceil(fecha);
}

const date1 = new Date('Dec 1, 2021');
console.log(daysToXmas(date1)); // 24
const date2 = new Date('Dec 24, 2021 00:00:01');
daysToXmas(date2); // 1
const date3 = new Date('Dec 25, 2021');
daysToXmas(date3); // 0
const date4 = new Date('Dec 26, 2021');
daysToXmas(date4); // -1
