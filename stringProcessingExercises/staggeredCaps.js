"use strict";
// Staggered Caps

/*
Write a function that takes a string as an argument and returns that string with
a staggered capitalization scheme. Every other character, starting from the
first, should be capitalized and should be followed by a lowercase or
non-alphabetic character. Non-alphabetic characters should not be changed, but
should be counted as characters for determining when to switch between upper and
lower case.

P:

Creating a function that takes a string as an argument, and returns a new string
where the case of each character alternates from uppercase to lowercase starting
with an uppercased character as the first character. Non-alphabetic characters
should remain unchanged, but we must take them into consideration when determing
when to switch between upper and lower case.

Rules:
1. Starting at the character, alternate between uppercase and lowercase for each
   character.
2. Non-alphabeticals can appear in the string
3. Non-alphabeticals should remain unchanged
4. Non-alphabeticals are counted as character when determining when to swap
   between uppercase and lowercase character, e.g., `G_o_o_d` => `G_O_O_D`
5. If the given string is empty, return `null`
6. If the given string contains only one character, upcase that character
7. Spaces count as characters

E:

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"
staggeredCase(''); // null
staggeredCase('s'); // S

Algo:
Split the string into a collection of characters
- Iterate over the collection of characters
  - If the index of the current chracter is even, upcase that character
  - If the index is odd, downcase that character
- Join the character back together, return the new string
*/
function staggeredCase(string) {
  if (string === '') return null;

  let chars = string.split('');
  return chars
    .map((char, index) => {
      if (index % 2 === 0) {
        return char.toUpperCase();
      } else if (index % 2 === 1) {
        return char.toLowerCase();
      }
    })
    .join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"
console.log(staggeredCase('')); // null
console.log(staggeredCase('s')); // S