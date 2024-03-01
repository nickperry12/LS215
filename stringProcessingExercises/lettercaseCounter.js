"use strict";
// Lettercase Counter

/*
Write a function that takes a string and returns an object containing three
properties: one representing the number of characters in the string that are
lowercase letters, one representing the number of characters that are uppercase
letters, and one representing the number of characters that are neither.

P:

Create a function that accepts a string as an argument and returns an object
that contains the counts for characters that are lowercase, uppercase and
neither. In the context of this problem, "neither" refers to characters
that are non-alphabeticals.

Rules:

1. Need to return an object with counts of uppercase and lowercase characters as
   well as characters that are not alphabeticals.
2. If the given string is empty, all counts should have values of 0.
3. Spaces count as a character
4. Assume that the argument will always be a string

Algo:

Declare and initialize `counts` to an object
- Set 3 properties: lowercase, uppercase, and neither
  - Set the values to `0`

Split the given string into a collection of characters
- Iterate over the each character
  - If the current character matches an uppercase character
    - Increment counts.uppercase by 1
  - If the current character is lwoercase
    - Increment the lowercase property of counts by 1
  - If neither, increment the `neither` property of `counts` by 1

Return `counts`
*/
function letterCaseCount(string) {
  let counts = { lowercase: 0, uppercase: 0, neither: 0};
  const upperPattern = /([A-Z])/;
  const lowerPattern = /([a-z])/;

  let chars = string.split('');
  chars.forEach(char => {
    if (char.match(upperPattern)) {
      counts['uppercase'] += 1;
    } else if (char.match(lowerPattern)) {
      counts['lowercase'] += 1;
    } else {
      counts['neither'] += 1;
    }
  });

  return counts;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }