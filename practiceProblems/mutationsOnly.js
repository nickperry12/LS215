// Mutations Only
/*
Write a function that moves all the zeroes to the end of an array. Do this
without returning a copy of the input array.

P:

We want to create a function that accepts an array of integers as an argument,
and mutates the array in place by placing all `0`s at the end of the array.

Rules:
1. We want to move all `0`s to the back of the array.
2. We must mutate the given array, not return a copy.
3. If the given argument is an empty array, return an empty array.
4. The given may contain strings, but the string will represent digits.
5. The given argument will always be either an array or `null`.
6. If the argument is `null` return `"Invalid input."`.
7. Assume that you will always be given exactly one argument.
8. We will not have to handle sparse arrays.
9. We will not have to worry about dealing with array properties.
10. Will not need to handle `NaN` or `Infinity` values.
11. The integers that are not `0` should maintain their order

Data Structures:
I: Array
Intermediate: Array
O: Mutated Array

-- Modelling

I: [1, 2, 0, 0, 4, 0, 5]
O: [1, 2, 4, 5, 0, 0, 0]

Goal is to move zeros to the end of the array
- Must mutate the array in place
- Other numbers must maintain their order

We can sort the array in place using a callback function
- This should compare two values at at time, and if the second value is a zero,
  we want to return a negative number to move the zero to the back of the array,
  and return `0` if the second value is a non-zero, which will preserve the order

First iteration => a is 1, b is 2 => [1, 2, 0, 0, 4, 0, 5] 
Second iteration => a is 2, b is 0 => [1, 2, 0, 0, 4, 0, 5] 
Third iteration => a is 0, b is 0 => [1, 2, 0, 0, 4, 0, 5] 
Fourth iteration => a is 0, b is 4 => [1, 2, 0, 0, 4, 0, 5] 
Fifth iteration => a is 4, b is 0 => [1, 2, 0, 4, 0, 0, 5]
Sixth iteration => a is 0, b is 5 => [1, 2, 0, 4, 0, 0, 5]

...

Tenth iteration => a is 4, b is 0 => [1, 2, 4, 0, 0, 0, 5]
-- Algorithm:

Iterate through the array and its indices
- Check to see if the current element is a string
  - If it is, reassign that element to the number version of that string

Take the given array and sort it in place
- Check to if the second value in the current iteration is `0`
  - If it is, return `-1`
  - If not, return `0`

Return the sorted array

*/
let array = [1, 2, 0, 0, 3, 4]; 

function zeroesToEnd(array) {
  if (!array) return "Invalid input."
  if (array.length === 0) return [];

  array.forEach((item, index) => {
    if (typeof(item) === 'string') array[index] = parseInt(item);
  })

  array.sort((a, b) => {
    if (b === 0) return -1;
    return 0;
  })

  return array;
}

console.log(zeroesToEnd([1, 2, 0, 0, 4, 0, 5])); // [1, 2, 4, 5, 0, 0, 0]
// console.log(zeroesToEnd([0, 0, 2, 0, 5])); // [2, 5, 0, 0, 0]
// console.log(zeroesToEnd([4, 4, 5])); // [4, 4, 5]
// console.log(zeroesToEnd([0, 0])); // [0, 0]
// console.log(zeroesToEnd([])); // []
// console.log(zeroesToEnd(null)); // "Invalid input."
// console.log(zeroesToEnd(["1", "2", 0, "0", 4, 5, "0"])); // [1, 2, 4, 5, 0, 0, 0]
// console.log(zeroesToEnd(array)); // [1, 2, 3, 4, 0, 0]
// console.log(array); // [1, 2, 3, 4, 0, 0]