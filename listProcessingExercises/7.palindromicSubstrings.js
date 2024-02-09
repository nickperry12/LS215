// Palindromic Substrings

/*
Write a function that returns a list of all substrings of a string that are
palindromic. That is, each substring must consist of the same sequence of
characters forwards as backwards. The substrings in the returned list should be
sorted by their order of appearance in the input string. Duplicate substrings
should be included multiple times.

You may (and should) use the substrings function you wrote in the previous
exercise.

For the purpose of this exercise, you should consider all characters and pay
attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA'
are not. In addition, assume that single characters are not palindromes.

P:
We need to create a function that accepts a string as its argument, and returns
an array that contains all palindromic substrings.

A palindrome is a string that is identical to its original string when reverse.
The case of the string matters -- "aba" is a palindrome but "Aba" is not.

-- Modeling/Algorithm:

For validating a palindrome:
- Split the string into characters
- Reverse the order
- Join the characters back together
- If it matches the original string, its a palindrome

Create slices of a string using a two level iteration
- On the outer iteration, set `outer` to 0 and iterate while its less than or equal
  to the string length
  - On the inner iteration set `inner` to `outer` and iterate while its less
    than or equal to the string length
    - Create use outer as the start point and inner for the end point of the
      slice
    - Check to see if the created substring is a palindrome
      - If it is, push the substring into a collecting of palindromes

Return the collection of palindromes
*/

function checkForPalindrome(string) {
  if (string.length <= 1) return false;
  let reversedString = string.split('').reverse().join('');
  return string === reversedString;
}

function substrings(string) {
  let substrings = [];

  for (let i = 0; i <= string.length; i += 1) {
    for (let ii = i + 1; ii <= string.length; ii += 1) {
      substrings.push(string.slice(i, ii));
    }
  }

  return substrings;
}

function palindromes(string) {
  let substrs = substrings(string);
  return substrs.filter(checkForPalindrome);
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]