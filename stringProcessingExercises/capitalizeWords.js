"use strict";
// Capitalize Words

/*
Write a function that takes a string as an argument and returns that string with
the first character of every word capitalized and all subsequent characters in
lowercase.

You may assume that a word is any sequence of non-whitespace characters.

P:

Create a function that takes a string and returns a new string with the first
character of every word capitalized, and the rest of the characters in lowercase

Rules:
1. A word is any sequence of non-whitespace characters
2. If a word is wrapped in quotations, don't capitalize it
3. We can assume that there will be no empty strings passed in
4. Each string will have multiple words

Algo:

Split the given string at each space character
- Iterate and transform the collection of strings
  - Capitalize the first character of each string and lowercase the rest
- Join each string back together separated by a space
*/

function wordCap(string) {
  return string.split(' ')
               .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
               .join(' ');
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'