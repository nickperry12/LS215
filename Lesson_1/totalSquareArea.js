/*
For this practice problem, we'll represent rectangles as Arrays with two
elements: a height and a width.

Write a Function named `totalArea` that takes an Array of rectangles as an
argument. The Function should return the total area covered by all the
rectangles.

Abstraction:

For each rectangle, find the area by calculating the product of the length and
width

*/

function calculateArea(length, width) {
  return length * width;
}

function sumAreas(firstValue, secondValue) {
  return firstValue + secondValue;
}

function totalArea(array) {
  let listOfAreas = array.map(rectangle => {
    return rectangle.reduce(calculateArea);
  })

  return listOfAreas.reduce(sumAreas);
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));   // 141

/*
Now, write a second Function named `totalSquareArea`. This Function should
calculate the total area of a set of rectangles, just like `totalArea`. However,
it should only include squares in its calculations: it should ignore rectangles
that aren't square.

Abstraction:

Go through all rectangles and extract the ones that are squares
Find the area of all the squares
Find the sum of all the areas
*/

function checkForSquare(rectangle) {
  return rectangle[0] === rectangle[1];
}

function extractAllSquares(rectangles) {
  let squares = rectangles.filter(checkForSquare);
  return squares;
}

function totalSquareArea(rectangles) {
  let squares = extractAllSquares(rectangles);
  return totalArea(squares);
}

let moreRectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalSquareArea(moreRectangles));    // 121