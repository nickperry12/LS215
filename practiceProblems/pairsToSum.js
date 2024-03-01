// Create a function that returns all pairs of numbers in an array that sum to a
// target. Sort the pairs in ascending order with respect to the smaller number,
// then order each pair in this order: [smaller, larger].

/*
P:
Write a function that accepts an array of integers and an integer as an
argument, and returns an array that contains subarrays, with each subarray
containing pairs from the given array that sum to the target integer. We want to
sort the overall array by comparing the smaller digits in each subarray, and
then sort each subarray in the following format: [smaller, larger]

Rules:

1. Each subarray should only contain two digits
2. The two integers in the returned subarray should sum to the target integer
3. Our target number is always going to be a positive number
4. Expect only positive numbers in the given array
5. Assume that all data types within the given array will only be numbers
6. If given too few arguments, return "undefined"
7. If given too many arguments, ignore the excess arguments
8. Will not have to deal with sparse arrays or empty elements
9. Return an empty array if the given array is empty
10. Don't have to worry about extremely large numbers or extremely large arrays
11. Won't have to deal with floating point numbers, only dealing with whole
    numbers
12. Won't have to deal with Object literals as the first argument, the first
    argument will always be an array
13. Return an array with only unique pairs
14. Return an empty array if no nums sum to the target

Examples:
allPairs([], 10)    // []
allPairs()    // "undefined"
allPairs([1, 2, 3, 4, 5])    // "undefined"
allPairs([10, 5, 7, 5, 2, 3, 5, 7], 12)    // [[2, 10], [5, 7], [5, 7]]
allPairs([2, 3, 1, 9, 7, 8, 11, 15, 20, 16, 17, 10, 2], 19)    // [[2, 17], [3, 16], [8, 11], [9, 10]]
allPairs([2, 4, 6, 10, 5, 1, 12], 100)    // []
allPairs([2, 4, 6, 10, 5, 1, 12, 100, 20, 55], 205, {a: 20})    // []

--- Modelling/Algorithm:

If the given array is empty
- Return an empty array

If 1 or fewer arguments are provided
- Return "undefined"

Declare and initialize `pairs` to an empty array
Declare and initialize `arrayOne` to an empty array
Declare and initialize `arrayTwo` to an empty array

Sort the given array from high to low

Iterate through the given array
- Iterate through the given array in an inner iteration starting at the element
  ahead of the outer array
  - If the element at the outer position and the element at the inner position
    sum to the target num, and the numbers do not exist in `arrayOne` and
    `arrayTwo`
    - Push the outer into `arrayOne`
    - Push the inner into `arrayTwo`
    - Push the outer and inner into an array, push the resulting array into
      `pairs`

Return `pairs`
*/
function sortArrayOfNums(array) {
  return array.sort((a, b) => a - b);
}

function allPairs(array, target) {
  if (!array || !target) return "undefined";
  if (array.length === 0) return [];

  sortArrayOfNums(array);
  let pairs = [];
  let arrayOne = [];
  let arrayTwo = [];
  
  for (let i = 0; i < array.length; i += 1) {
    for (let ii = i + 1; ii < array.length; ii += 1) {
      let valueOne = array[i];
      let valueTwo = array[ii];
      let pair = [valueOne, valueTwo];
      let sum = pair.reduce((accum, val) => accum + val);

      if ((!arrayOne.includes(valueOne) && !arrayTwo.includes(valueTwo)) && sum === target) {
        arrayOne.push(valueOne);
        arrayTwo.push(valueTwo);
        pairs.push(pair);
      }
    }
  }

  return pairs;
}

console.log(allPairs([], 10));    // []
console.log(allPairs());    // "undefined"
console.log(allPairs([1, 2, 3, 4, 5]));    // "undefined"
console.log(allPairs([10, 5, 7, 5, 2, 3, 5, 7], 12));    // [[2, 10], [5, 7]]
console.log(allPairs([2, 3, 1, 9, 7, 8, 11, 15, 20, 16, 17, 10, 2], 19));    // [[2, 17], [3, 16], [8, 11], [9, 10]]
console.log(allPairs([2, 4, 6, 10, 5, 1, 12], 100));    // []
console.log(allPairs([2, 4, 6, 10, 5, 1, 12, 100, 20, 55], 205, {a: 20}));    // []