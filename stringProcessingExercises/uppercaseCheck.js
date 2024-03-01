"use strict";
// Uppercase Check

/*

Write a function that takes a string argument and returns true if all of the
alphabetic characters inside the string are uppercase; otherwise, return false.
Ignore characters that are not alphabetic.

P:

Create a function that accepts a string as an argument, and returns `true` if
all alphabetical characters in the string are uppercase, and `false` if not.
The function should ignore all non-alphabetical characters.

Rules:
1. If all letters in the given string are uppercase, return `true`
2. Ignore all non-alphabetical characters
3. If the string is empty, return `true`
4. Single character strings are allowed
5. Assume that the argument passed in will always be a string
6. We won't have to handle too few or too many arguments

Algo:

Return `true` if the given string is empty

Extract all alphabetical characters from the given string and store them in an
array

Check to see if every character in the array of letters is uppercased
- If they are, return `true`, otherwise, return `false`

*/

function isUppercase(string) {
  if (string.length === 0) return true;

  let letters = string.match(/[A-Z]/ig);

  return letters.every(letter => letter.toUpperCase() === letter);
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true