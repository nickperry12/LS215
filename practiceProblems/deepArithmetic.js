// Deep Arithmetic
/*
Write a function that takes an array of strings of arbitrary dimensionality ([],
[][], [][][], etc.) and returns the sum of every separate number in each string
in the array.

P:

Create a function that accepts an array of nested arrays as an argument. The
nested arrays can have arbitrary dimensionality (can be nested on many levles),
and will ultimately contain a string. The function should return the sum of each
separate number in each string.

Rules:
1. The arrays can be nested an arbitrary number of times.
2. We want to find the sum of every separate number in each string in the array.
3. The numbers in the string can be negative.
4. The negative numbers will be the entire sequence of digits after a "-" char.
   The sequence ends when a non-digit character appears.
5. Numbers can appear before the "-", count them as their own number.
6. Strings might not contain any digits.
7. Arrays can be empty.
8. Numbers will always be base-10 integers.
9. Strings may contain other special characters that are not a "-", digit or
   alphabetical char.
10. If the given array is empty, return `0`.
11. If we're not given an argument, return `undefined`.

-- Modelling:

I: ["1", "five", "2wenty", "thr33", "+==.,10", ["250---44"]]
O: 340

Flatten the array => ["1", "five", "2wenty", "thr33", "+==.,10", "250---44"]

Extract all nums => ["1", "0", "2", "33", "10", "250", "44"]

Convert to ints => find the sum

-- Algorithm:

Flatten the given array to a one dimensional array

Iterate over the collection of strings
- Extract all the digits out of the current string
  - If the current string does not have any digits, replace it with the string `"0"`

Transform all the string digits into numbers
- Find and return the sum
*/
function extractDigits(string) {
  let digits = string.match(/-\d+|\d+/g) ? string.match(/-\d+|\d+/g) : "0";
  return digits;
}

function sum(array) {
  if (!array) return undefined;
  if (array.flat(Infinity).length === 0) return 0;

  array = array.flat(Infinity)
               .map(string => extractDigits(string))
               .flat(Infinity);

  let numbers = array.map(string => parseInt(string));
  return numbers.reduce((val, accum) => {
    return val + accum;
  })
}

console.log(sum(["1", "five", "2wenty", "thr33"])); // 36
console.log(sum(["1", "five", "2wenty", "thr33", "+==.,10"])); // 46
console.log(sum(["1", "five", "2wenty", "thr33", "+==.,10", ["250---44"]])); // 252
console.log(sum([["1X2", "t3n"],["1024", "5", "64"]])); // 1099
console.log(sum([[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"],"-1s0"]])); // 759
console.log(sum([[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"],"-1s0"], []])); // 759
console.log(sum(["asdf", "qwer", "zxdc"])); // 0
console.log(sum([])); // 0
console.log(sum()); // undefined
console.log(sum([[[[[["-32-64", "a-zA-Z"], ["01-1"]]]]]])); // -96
console.log(sum([[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]])); // 0