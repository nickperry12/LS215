function transpose(array) {
  return array[0].map((col, columnIdx) => {
    return array.map(row => row[columnIdx]);
  });
}

let cards = [
  ['green', 1, 'empty', 'squiggle'],
  ['green', 2, 'empty', 'diamond'],
  ['green', 3, 'empty', 'oval']
]

console.log(transpose(cards));