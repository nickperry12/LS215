// Multiple All Pairs

/*
Write a function that takes two array arguments, each containing a list of
numbers, and returns a new array containing the products of all combinations of
number pairs that exist between the two arrays. The returned array should be
sorted in ascending numerical order.

You may assume that neither argument will be an empty array.

P:

Given two arrays, both containing postive integers, create a function that
multiples both numbers in the first array, by all of the numbers in the second
array, and returns the products in a new array. The new array should be sorted
numerically.

E:

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]

Algorithm:

Iterate through the first array
- In a nested iteration, iterate through the second array
  - Multiple the current outer number, by the current inner number
  - Push the product into a new collection
  - Repeat for all outer nums and inner nums

Sort the collection of products numerically
- Return the collection
*/

function compareNums(numOne, numTwo) {
  if (numOne > numTwo) {
    return 1;
  } else if (numOne < numTwo) {
    return -1;
  } else {
    return 0;
  }
}

function multiplyAllPairs(arrayOne, arrayTwo) {
  let products = [];

  arrayOne.forEach(outerNum => {
    arrayTwo.forEach(innerNum => {
      products.push(outerNum * innerNum);
    })
  })

  return products.sort(compareNums);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]