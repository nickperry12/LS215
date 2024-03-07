// Word to Digit
/*
Write a function that takes a sentence string as an argument and returns that
string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three',
'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding
digit character.

P:

We want to create a function that accepts a string as an argument, and returns
the string with every number word converted to its respecitive digit.

Rules:

1. Convert all number words to their respective digits.
2. Leave the rest of the string as is.
3. Must maintain punctuation.

Data Structures:
I: String
Intermediate: Regex, maybe array
O: String

-- Algorithm:

Split the string into individual words

*/
const numWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

function wordToDigit(string) {
  let pattern = new RegExp('(zero|one|two|three|four|five|six|seven|eight|nine)', 'ig');
  return string.replace(pattern, match => numWords.indexOf(match));
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."