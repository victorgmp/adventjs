export default function createXmasTree(height) {
  // ¡Y no olvides también poner los turrones!
  let arbol = '';

  const separadores = [];
  const asteriscos = [];

  for (let i = 1; i <= height; i++) {
    separadores.unshift(i - 1);

    const numAst = 2 * i - 1;
    asteriscos.push(numAst);
  }

  for (let j = 0; j < height; j++) {
    arbol += `${'_'.repeat(separadores[j]) + '*'.repeat(asteriscos[j]) + '_'.repeat(separadores[j])}\n`;
  }

  // console.log('arbol', arbol);

  // console.log('separadores', separadores);
  // console.log('asteriscos', asteriscos);

  arbol += `${'_'.repeat(separadores[0])}#${'_'.repeat(separadores[0])}\n`;
  arbol += `${'_'.repeat(separadores[0])}#${'_'.repeat(separadores[0])}`;

  return arbol;
}

console.log(createXmasTree(5));
