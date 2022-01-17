export default function getMinJump(obstacles) {
  // ¡No olvides compartir tu solución en redes!
  const maxInPath = Math.max(...obstacles);
  let jumpSize = 1;
  let step = 0;

  while (step <= maxInPath) {
    if (obstacles.includes(step)) {
      step = 0;
      jumpSize += 1;
    }

    step += jumpSize;

    if (jumpSize > maxInPath) {
      jumpSize = -1;
      break;
    }
  }

  return jumpSize;
}

const obstacles = [5, 3, 6, 7, 9];
console.log(getMinJump(obstacles)); // -> 4

// S es salto, X es obstáculo
/* Así quedaría la representación:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  .  X  .  X  X  X  .  X  .
S-----------S-----------S-------
*/
