function transpose(array) {
  return array[0].map((col, colIdx) => {
    return array.map(row => row[colIdx])
  })
}

let array = [
  ['string', 1, 2, 3, 4],
  ['string', 1, 2, 3, 4],
  ['string', 1, 2, 3, 4]
]

console.log(transpose(array));