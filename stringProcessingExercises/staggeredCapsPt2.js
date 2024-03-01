"use strict";
// Staggered Caps Part 2

/*
Modify the function from the previous exercise so that it ignores non-alphabetic
characters when determining whether a letter should be upper or lower case.
Non-alphabetic characters should still be included in the output string, but
should not be counted when determining the appropriate case.

P:

Write a function that accepts a string as an argument, and returns a new string
alternating the case of each alphabetical character.

Rules:
1. Ignore all non-alphabetical characters when determining the case to swap to
2. Strings can have characters that are alphabeticals or non-alphabeticals
3. Only the case of alphabetical characters
4. Specifically, the order of case should only matter with alphabetical chars
5. Assume that the argument will always be a string
6. If the string is empty, return an empty string
7. It's possible for the starting character to be a space or special character

Algo:

Declare and initialize `previousChar` to an empty string

Split the stringg into a collection of characters
- Iterate through the collection and transform the characters
  - If the current character is a space or special char, move on to the next
    iteration
  - If the current character is an alphabetical, check if it's uppercased, and
    if it is, downcase the current character, and then reassign `previousChar`
    to the current char with its new letter case
  - Repeat the above except with uppercase if `previousChar` is lowcased
- Join the chars back together and return the string

*/
const staggeredCase = (string) => {
  let chars = string.split('');
  let previousChar = ''

  let staggeredChars = chars.map(char => {
    if (char.match(/[^a-z]/ig)) return char;

    if (previousChar === previousChar.toLowerCase()) {
      previousChar = char.toUpperCase();
      return char.toUpperCase();
    } else {
      previousChar = char.toLowerCase();
      return char.toLowerCase();
    }
  });

  return staggeredChars.join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"
console.log(staggeredCase('')); // ''
console.log(staggeredCase(' the FirST chaRactER is a SPACE')); // ' ThE fIrSt ChArAcTeR iS a SpAcE'