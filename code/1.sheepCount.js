export default function contarOvejas(ovejas) {
  // aquí tu magia
  return ovejas.filter((oveja) => oveja.name.toLowerCase().indexOf('n') !== -1
    && oveja.name.toLowerCase().indexOf('a') !== -1
    && oveja.color === 'rojo');
}

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' },
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo' },
];

const ovejasFiltradas = contarOvejas(ovejas);

console.log(ovejasFiltradas);
