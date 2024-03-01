"use strict";
// Word Lengths

/*
Write a function that takes a string as an argument and returns an array that
contains every word from the string, with each word followed by a space and the
word's length. If the argument is an empty string or if no argument is passed,
the function should return an empty array.

You may assume that every pair of words in the string will be separated by a
single space.

P:

Create a function that accepts a string as an argument, and returns an array of
strings. The strings in the returned array should be a word from the given
string and the length of that word. 

Rules:
1. If the given string is empty, return an empty array
2. If we don't receive any arguments, return an empty array
3. The given string can contain one or more words
4. Words can caontain special characters, and the special character contribute
   to the length of that word.
5. If the word contains a special character, or is followed directly by a
   special character, include that character in the array with the word and
   count it as apart of the words length

E:

wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []

Algo:

Split the string into a collection of words
- make sure to include any special characters that may be apart of that word
  such as commas, question marks, periods or dashes

Iterate over the collection of words and transform each element
- Transform into a new string
  - The string should ocntain the word as well as the length of that word

Return the new array
*/
function wordLengths(string) {
  if (!string) return [];
  let words = string.match(/[A-Z,'-\.?]+/ig) || [];

  words = words.map(word => `${word} ${word.length}`)
  return words;
}

console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []