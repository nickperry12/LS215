// Alphabetical Numbers

/*
Write a function that takes an array of integers between 0 and 19 and returns an
array of those integers sorted based on the English word for each number:

zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve,
thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

Do not mutate the argument.

P:

Create a function that accepts an array of integers. The integers will be
between 0 and 19 (inclusive). The function should return a sorted array that
sorts the numbers based on the english word for the number. It should return
a new array, not mutate the argument.

E:

alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

-- Modeling:

Create an object containing integers as the key, and their value being their
respective english word

Create a copy of the given array
- Sort this array
  - Sort it by comparing the values at the key referenced by the current integer
  - return the sorted array
*/

const ALPHABETICAL_NUMS = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
}

function compareAlphabeticalNums(numOne, numTwo) {
  if (ALPHABETICAL_NUMS[numOne] < ALPHABETICAL_NUMS[numTwo]) {
    return -1;
  } else if (ALPHABETICAL_NUMS[numOne] > ALPHABETICAL_NUMS[numTwo]) {
    return 1;
  } else {
    return 0;
  }
}

function alphabeticNumberSort(array) {
  arrayCopy = array.slice();
  return arrayCopy.sort(compareAlphabeticalNums);
}

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));