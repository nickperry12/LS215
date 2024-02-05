// Sum of Sums

/*
Write a function that takes an array of numbers and returns the sum of the sums
of each leading subsequence in that array. Examine the examples to see what we
mean. You may assume that the array always contains at least one number.

P:
Create a function that takes an array of integers, and returns the sum of each
leading subsequence in the array. In other words, imagine that we had an array
of sub arrays, with each subarray containing the first element, followed by
the first element + the next, with value of `next` incrememnting by one.

E:
sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35

-- Modeling
First, create an array of subarrays.
- Find all possible subarrays while maintaining the order

Iterate over the array of subarrays
- Transform each subarray to the sum of the nums contained within it
- Find the sum of the resulting array of sums
*/

function createSubarrays(array) {
  let arrayOfArrays = [];

  for (let i = 1; i <= array.length; i += 1) {
    arrayOfArrays.push(array.slice(0, i));
  }

  return arrayOfArrays;
}

function sumOfSums(array) {
  let arrayOfSums = createSubarrays(array).map(subarr => {
    return subarr.reduce((accum, currentVal) => accum + currentVal);
  })

  return arrayOfSums.reduce((accum, currentVal) => accum + currentVal);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35