export default function fixFiles(files) {
  // ¡No olvides compartir tu solución en redes!
  const map = {};

  return files.map((file) => {
    if (!map[file]) {
      map[file] = 0;
    }

    map[file] += 1;

    if (map[file] > 1) {
      return `${file}(${map[file] - 1})`;
    }
    return file;
  });
}

const files = ['photo', 'postcard', 'photo', 'photo', 'video'];
console.log(fixFiles(files)); // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

const files2 = ['file', 'file', 'file', 'game', 'game'];
console.log(fixFiles(files2)); // ['file', 'file(1)', 'file(2)', 'game', 'game(1)']

// ojo que los elfos ya tenían archivos con (1)... ¡y pueden estar repetidos!
const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)'];
console.log(fixFiles(files3)); // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']
