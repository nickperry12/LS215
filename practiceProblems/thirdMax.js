// Third Max

/*
Given an array of integers, `nums`, return the third largest number in the
array. If the third largest number does not exist, return the greatest number.

P:

Create a function that takes an array of numbers and returns the third largest
number in the array. If the third largest number does not exist, return the
largest number.

Rules/Definitions:

We are not allowed to sort the array
- If we created a new array to push numbers into, are we allowed to sort that
  array?
  - No, no sorting of any arrays are allowed

Return the third largest number in the array

If the third largest number doesn't exist, return the largest number

What if the array contains less than three elements?
- Return the largest number

Will we have to account for `NaN`, `Infinity` or `-Infinity`?
- Yes we will

How should we handle values such as `NaN` or variations of `Infinity`?
- They should not be taken into consideration when finding the third largest num

Will the given array contain only integers?
- No, it's possible for it to contain other data types

Will we be dealing with any negative numbers?
- Numbers will always be positive

Will we be dealing with floating point numbers?
- Yes, floating point numbers may be included

How should we handle an empty array?
- If the given array is empty, return `0`

Will we have to handle too few arguments or too many arguments?
- Assume that we will always be given exactly one argument

What if the argument provided is not an array?
- Return an error message stating "Invalid argument, not an array"

Can the given array contain no numbers at all?
- Assume that the given array will always contain at least one number

Does the sequence of the numbers matter? Will the numbers always be in order?
- No the numbers will not always be in numerical order, but this should have no
  bearing on the outcome

What if we had an array with 3 non-unique values and only 3 elements, i.e., [3,
3, 3]
- Return the greatest number
E:

thirdMax([3, 2, 1]); // 1
thirdMax([]); // 0
thirdMax('s'); // Invalid argument, not an array.
thirdMax(['s', true, 25, 44, 37, 1, 2, 10, 12, {a: 'hi'}]); // 25
thirdMax([1, 1000]); // 1000
thirdMax(['asdf', 2, true, NaN, -Infinity]); // 2
thirdMax(['asdf', 2, true, NaN, -Infinity, 100, 77, 200, 23, 82]); // 82
thirdMax([11, 10041, 300, 402, 726, 726.1]); // 726
thirdMax([3, 3, 3, 's', 'a', 'b']); // 3

-- Modeling

I: thirdMax(['asdf', 2, true, NaN, -Infinity, NaN, true, false, {}, 100, 77, 200, 23, 82]);
O: 82

['asdf', 2, true, NaN, -Infinity, NaN, true, false, {}, 100, 77, 200, 23, 82]
get rid of anything that isn't a number
=> [2, 100, 77, 200, 23, 82]

Find the max, we can then find the second max, and then find the third max
Find 200, then we can find 100, then find 82

Algorithm:

Take the list of numbers, and filter out everything that isn't a valid number

If the filtered array has a size less than 3
- Find the max and return it
- If the filtered array has all the same numbers, return the number at the 0 idx

Otherwise, if the filtered array has more than 3 elements:

Declare and initialize `max` to `0`
Declare and initialze `secondMax` to `0`

Find the max from the filtered array, assign to `max` and push into `bigThree`
- Iterate through the filtered array, if the current num is greater than `max`
  then reassign it `max` to that number

Find the number from the filtered array that is less than `max` but is greater
than the rest of the nums, and assign to `secondMax` and push into `bigThree`
- Iterate through filtered array, if the current num is less than `max` but
  greater than `secondMax`, assign it to `secondMax`

Filter the array of nums again
- Filter out the numbers that are not equal to `max` or `secondMax`
  - If the size of this array is 0, return `max`
- Find the max of this array and return that number

*/
function findMax(array) {
  let max = 0;
  array.forEach(num => {
    if (num > max) {
      max = num;
    }
  });

  return max;
}

function findSecondMax(array, max) {
  let secondMax = 0;

  array.forEach(num => {
    if (num > secondMax && num < max) {
      secondMax = num;
    }
  });

  return secondMax;
}

function thirdMax(array) {
  if (Array.isArray(array) === false) return "Invalid argument, not an array.";
  if (array.length === 0) return 0;
  let nums = array.filter(item => Number.isFinite(item));

  if (nums.length === 2) {
    return findMax(nums);
  } else if (nums.every(num => num === nums[0])) {
    return nums[0];
  }

  let max = findMax(nums);
  let secondMax = findSecondMax(nums, max);

  let newNums = nums.filter(num => num < secondMax && num < max);
  if (newNums.length === 0) return max;
  let thirdMax = findMax(newNums);
  return thirdMax;
}

console.log(thirdMax([3, 2, 1])); // 1
console.log(thirdMax([])); // 0
console.log(thirdMax('s')); // Invalid argument, not an array.
console.log(thirdMax(['s', true, 25, 44, 37, 1, 2, 10, 12, {a: 'hi'}])); // 25
console.log(thirdMax([1, 1000])); // 1000
console.log(thirdMax(['asdf', 2, true, NaN, -Infinity])); // 2
console.log(thirdMax(['asdf', 2, true, NaN, -Infinity, 100, 77, 200, 23, 82])); // 82
console.log(thirdMax([11, 10041, 300, 402, 726, 726.1])); // 726
console.log(thirdMax([3, 3, 3, 's', 'a', 'b'])); // 3
console.log(thirdMax([3, 3, 3, 2, 2, 5, 5, 1])); // 2
console.log(thirdMax([3, 3, 3, 2, 2, 2])); // 3