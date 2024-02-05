// Sum of Digits

/*
Write a function that takes one argument, a positive integer, and returns the
sum of its digits. Do this without using for, while, or do...while loops -
instead, use a series of method calls to perform the sum.

P:

We want to create a function `sum` that accepts an integer as its argument. The
function should return the sum of each digit in the given integer.

Rules:
Cannot use `for`, `while`, or `do...while` loops.
  - must use built in iterative methods

E:

sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45

-- Modeling:
I: 23
O: 5

Convert the integer into a string
=> '23'

Split the string into a collection of characters
=> ['2', '3']

Transform the collection of strings into integers
=> [2, 3]

Return the sum of the collection
=> 5

Algorithm:

/-- Given an integer --/

Take the given integer and convert into a string
Split the string into a collection of characters
- Transform this each character back to an integer
- Sum the collection and return the result
*/

function convertToDigits(integer) {
  let stringNumber = String(integer);
  let digits = stringNumber.split('');
  digits = digits.map(digit => Number(digit));

  return digits;
}

function sum(integer) {
  let digits = convertToDigits(integer);
  return digits.reduce((accum, val) => accum + val);
}


console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45