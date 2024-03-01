"use strict";
// Swap Case

/*
Write a function that takes a string as an argument and returns that string with
every lowercase letter changed to uppercase and every uppercase letter changed
to lowercase. Leave all other characters unchanged.

P:

Create a function that takes a string and swaps the case of all the alphabetical
characters in it; if the character is uppercase, swap it to lowercase, if it's
lowercase, swap it to uppercase. Non-alphabetical characters should remain unchanged.

Rules:
1. Swap the case of each character in the string
2. Leave non-alphabeticals unchanged
3. String can contain characters that aren't letters
4. Word order should remain the same

Algo:

Split the string into an array of characters
Iterate over the array of chars
- If the current char is uppercased, swap it to lowcase
- If the current char is lowcase, swap it to uppercase
- Ignore it if the char is a special character or non-alphabetical

Join the chars back into a string

*/
let swapCase = (string) => {
  let chars = string.split('');
  let modified = chars.map(char => {
    if (char.match(/[A-Z]/)) {
      return char.toLowerCase();
    } else {
      return char.toUpperCase();
    }
  })

  return modified.join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"