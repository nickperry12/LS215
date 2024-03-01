// Number of Boomerangs
/*
A boomerang is a V-shaped sequence that is either upright or upside down.
Specifically, a boomerang can be defined as: sub-array of length 3, with the
first and last digits being the same and the middle digit being different.

Some boomerang examples:
[3, 7, 3], [1, -1, 1], [5, 6, 5]

Create a function that returns the total number of boomerangs in an array.

To illustrate:
[3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
// 3 boomerangs in this sequence:  [3, 7, 3], [1, 5, 1], [2, -2, 2]

Be aware that boomerangs can overlap, like so:

[1, 7, 1, 7, 1, 7, 1]
// 5 boomerangs (from left to right): [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1]

P:

We want to create a function, that accepts an array of integers and returns the
total number of boomerangs in the array. A boomerang is defined a subarray that
has a length of 3, with the first and last digits being the same, and the middle
digit being different, e.g., [1, 3, 1] is considered a boomerang. There can be
overlapping boomerangs in the array, e.g., [1, 7, 1, 7, 1, 7, 1] will yield 5
total boomerangs: [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1].

Rules:
1. There can be overlapping boomerangs, meaning the numbers in one boomerang
   can be used in another.
2. The numbers must be sequential to form a boomerang.
3. It's possible that we'll be handling negative numbers in the array.
4. Expect to deal with string digits as well, but handle them like they are
   numbers.
5. If the given array is empty, return 0.
6. If no argument is provided, return undefined.
7. If the given array has a length of 2 or less, return 0.
8. Assume that the given argument will always be an array.
9. Won't have to deal with floating point numbers, nor will we have to deal with
   NaN or Infinity and its variations.
10. If no boomerangs are found, return 0.
11. Negative numbers are distinct from their positive counterparts, a subarr of
    [-9, 9, -9] would be a boomerage

Data Structures:
I: Array
O: Integer

-- Modeling:
I: [9, 5, 9, 5, 1, 1, 1]
O: 2

Create subarrays
[[9, 5, 9], [5, 9, 5], [9, 5, 1] ... ]

Iterate through array of subarrs
- Check if the element at index 0 is the same as the element at index 2, and
  also check that the element at index 0 is not the same as the element at
  index 1
  - If that condition is satisfied, select that subarray

-- Algorithm:

If the length of the given array is less than 2
- Return 0

*/


countBoomerangs([9, 5, 9, 5, 1, 1, 1])   // 2
countBoomerangs([9, '5', 9, '5', '1', 1, 1])   // 2
countBoomerangs([9, -2, 9, -9, 9, 10, 10, 2])   // 2
countBoomerangs([9, 2])   // 0
countBoomerangs([])   // 0
countBoomerangs([1, 7, 1, 7, 1, 7, 1])   // 5
countBoomerangs()   // undefined
countBoomerangs([1, 10, 1, 7, 3, 7, 4, 4, 0, 1, 0])   // 3