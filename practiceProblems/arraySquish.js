"use strict";
// Array Squish
/*
Write a function that squishes an array from the left or the right.

Notes:
- Squishing from the left is to successively sum the first two elements of an
  array (shortening the array in the process).
- Squishing from the right is to successively sum the last two elements of an
  array.
- Include the original array as the first element in either squish.
- Return an empty array if the input is an empty array.

P:

Create a function that accepts an array and a string as an argument, that
"squishes" the array from either the left or right, dependent on the string
argument provided.

"Squishing" an array is defined as summing the two integers either from the left
or right side of the array, and reducing the array in the process. We want to
take each squished array, and nest them in an array.

Rules:
1. The original array should be the first subarray within our returned array
2. Our last subarray should only contain one integer, the final sum.
3. The string argument determines which side of the array we squish from.
4. If the string argument provided is not `"left"` or `"right"`, return the
   string `"Invalid direction"`.
5. Assume that the first argument will always be an array
6. If the input array is empty, return an empty array.
7. Assume that the input array can contain both numbers and string digits.
8. If the input array contains string digits, convert them to numbers.
9. Input array will contain both positive and negative numbers.
10. Assume that we will always be passed the correct amount of arguments.
11. Will not have to deal with fractional numbers.
12. Our output array will have the same number of elements as the original
    input array

Examples:

squish([1, 2, 3, 4, 5], "left")   // [[1, 2, 3, 4, 5], [3, 3, 4, 5], [6, 4, 5], [10, 5], [15]]
squish([1, 2, 3, 4, 5], "right")   // [[1, 2, 3, 4, 5], [1, 2, 3, 9], [1, 2, 12], [1, 14], [15]]
squish([1, "2", "3", 4, "5"], "left")   // [[1, 2, 3, 4, 5], [3, 3, 4, 5], [6, 4, 5], [10, 5], [15]]
squish([], "right")   // []
squish([1, 2, 10, 14, 23], "up") //   "Invalid direction"
squish([10, 12, 50, 22, 41], "left")   // [[10, 12, 50, 22, 41], [22, 50, 22, 41], [72, 22, 41], [94, 41], [135]]
squish([-12, 25, '-5', 22, 3], "right")   // [[-12, 25, '-5', 22, 3], [-12, 25, -5, 26], [-12, 25, 21], [-12, 46], [34]]
squish([12, 30, 11, 5, 7, 20, 3, 5, 7], "right")   
// [[12, 30, 11, 5, 7, 20, 3, 5, 7], [12, 30, 11, 5, 7, 20, 3, 12], [12, 30, 11, 5, 7, 20, 15], [12, 30, 11, 5, 7, 35], [12, 30, 11, 5, 42], [12, 30, 11, 47], [12, 30, 58], [12, 88], [100]]



-- Modeling:

Notes:

When slicing from the left, we're summing the integers at index 0 and 1, then
concatenating the elements from the previous array at indices 2 to the last
index.

When slicing from the right, we're summing the integers at the indices
referenced by the array length minus one, and the array length minus two, and
pushing in that value to the slice of the previous array. The slice should start
at index 0, up to the length of the array minus 3, or the length of the array
minus 1, dependent on whether the array length minus 3 is equal to 0 or not.

-- Algorithm:

If the input array is empty
- Return an empty array

If the input string is neither `'right'` or `'left'`
- Return `'Invalid direction'`

Transform all the elements within the input array to numbers

If the input string is `"left"`
- Declare and initialize `squishedArray` to an empty array
- Push the original array into `squishedArray`
- Declare and initialize `arrayToSquish` to the subarray at index 0 of
  `squishedArray`
- Until the length of `squishedArray` is equal to the length of the input array
  - Declare and initialize `subarray` to an empty array
  - Declare and initialize `sliceIndex` and set the value to `2`
  - Sum the first two digits of `arrayToSquish`, and push the value into
    `subarray`, then concatenate a slice of the `arrayToSquish` starting at
    `sliceIndex` to `subarray`
  - Push `subarray` into `squishedArray`
  - Reassign `arrayToSquish` to `subArray`
Return `squishedArray`

If the input string is `"right"`
- Declare and initialize `squishedArray` to an empty array
- Push the original array into `squishedArray`
- Declare and initialize `arrayToSquish` to the subarray at index 0 of
  `squishedArray`
- Until the length of `squishedArray` is equal to the length of the input array
  - Declare and initialize `endIndex`
    - Set to the length of `arrayToSquish` minus 2
  - Declare and initialize `subarray` to an empty array
  - Sum the digits at the last two indices of `arrayToSquish` and push into
    subarray
  - Slice `arrayToSquish`, starting at index 0 and ending at `endIndex`
    - Concatenate this slice with `subarray`, and push the resulting array into
      `squishedArray`
    - Reassign `arrayToSquish` to this resulting concatenated array
Return `squishedArray`
*/
function squishLeft(array) {
  array = array.map(num => parseInt(num));
  let squishedArray = [array];

  for (let i = 0; i < array.length - 1; i += 1) {
    let arrayToSquish = squishedArray[i];
    let valueOne = arrayToSquish[0];
    let valueTwo = arrayToSquish[1];
    let sum = valueOne + valueTwo;
    let subarray = [sum].concat(arrayToSquish.slice(2));
    squishedArray.push(subarray);
  }

  return squishedArray;
}

function squishRight(array) {
  array = array.map(num => parseInt(num));
  let squishedArray = [array];

  for (let i = 0; i < array.length - 1; i += 1) {
    let arrayToSquish = squishedArray[i];
    let endIndex = arrayToSquish.length - 2;
    let valueOne = arrayToSquish[arrayToSquish.length - 1]
    let valueTwo = arrayToSquish[arrayToSquish.length - 2];
    let sum = valueOne + valueTwo;
    let subarray = arrayToSquish.slice(0, endIndex).concat([sum]);
    squishedArray.push(subarray);
  }

  return squishedArray;
}

function squish(array, direction) {
  if (array.length === 0) return [];
  if ((direction !== "right" && direction !== "left")) return "Invalid direction";
  if (direction === "left") return squishLeft(array);
  if (direction === "right") return squishRight(array);
}


console.log(squish([1, 2, 3, 4, 5], "left"));   // [[1, 2, 3, 4, 5], [3, 3, 4, 5], [6, 4, 5], [10, 5], [15]]
console.log(squish([1, 2, 3, 4, 5], "right"));   // [[1, 2, 3, 4, 5], [1, 2, 3, 9], [1, 2, 12], [1, 14], [15]]
console.log(squish([1, "2", "3", 4, "5"], "left"));   // [[1, 2, 3, 4, 5], [3, 3, 4, 5], [6, 4, 5], [10, 5], [15]]
console.log(squish([], "right"));   // []
console.log(squish([1, 2, 10, 14, 23], "up")); //   "Invalid direction"
console.log(squish([10, 12, 50, 22, 41], "left"));   // [[10, 12, 50, 22, 41], [22, 50, 22, 41], [72, 22, 41], [94, 41], [135]]
console.log(squish([-12, 25, '-5', 22, 3], "right"));   // [[-12, 25, '-5', 22, 3], [-12, 25, -5, 26], [-12, 25, 21], [-12, 46], [34]]
console.log(squish([12, 30, 11, 5, 7, 20, 3, 5, 7], "right"));
// [[12, 30, 11, 5, 7, 20, 3, 5, 7], [12, 30, 11, 5, 7, 20, 3, 12], [12, 30, 11, 5, 7, 20, 15], [12, 30, 11, 5, 7, 35], [12, 30, 11, 5, 42], [12, 30, 11, 47], [12, 30, 58], [12, 88], [100]]
