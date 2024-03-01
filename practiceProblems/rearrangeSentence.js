"use strict";
// Rearrange the Sentence
/*
Given a sentence with numbers representing a word's location embedded within
each word, return the sorted sentence.

P:
Create a function that accepts a string as an argument, and returns a new
string with the words rearranged based on the digit that is contained within
each word. The new string should have the digit removed from each word.

Rules:
1. The digit contained within the word will represent the position for that word
   in the returned sentence.
2. If the string contains only a space, return an empty string
3. Strings should maintain their original letter case
4. It doesn't appear as if the digits in the string will exceed the number 10,
   but we should be prepared to handle such cases anyway in the event a larger
   string is passed in as an argument
5. The digit must be removed from each word in the final sentence

E:

console.log(rearrange("is3 Cri1stiano 4the Rona2ldo 5best.")); //"Cristiano Ronaldo is the best."
console.log(rearrange("is2 Thi1s T4est 3a")); // "This is a Test"
console.log(rearrange("4of Fo1r pe6ople g3ood th5e the2")); // "For the good of the people"
console.log(rearrange(" ")); // ""
console.log(rearrange("samosa3 I1 e2at")); // "I eat samosa"
console.log(rearrange("h1appy y3all! coding2")); // "happy coding yall!"

Modeling/Algorithm:

Declare and initialize `newSentence` to an empty array
Split the string into individual words
- Iterate over the collection of words
  - Extract the digit from the words, and convert to an integer
    - Subtract 1 from this value and assign the result to `index`
  - Extract all letters form the word
    - Join them back together to form a new word
      - Push this word into `newSentence` at the index position referenced by
        `index`

Join `newSentence` together, separating each word by a space
- Return the result
*/
function rearrange(sentence) {
  if (sentence === ' ') return '';

  let newSentence = [];

  sentence.split(' ').forEach(word => {
    let index = Number(word.match(/[0-9]/g).join('')) - 1;
    let newWord = word.match(/([a-z.!?])/ig).join('');
    newSentence[index] = newWord;
  });

  return newSentence.join(' ');
}


console.log(rearrange("is3 Cri1stiano 4the Rona2ldo 5best.")); //"Cristiano Ronaldo is the best."
console.log(rearrange("is2 Thi1s T4est 3a")); // "This is a Test"
console.log(rearrange("4of Fo1r pe6ople g3ood th5e the2")); // "For the good of the people"
console.log(rearrange(" ")); // ""
console.log(rearrange("samosa3 I1 e2at")); // "I eat samosa"
console.log(rearrange("h1appy y3all! coding2")); // "happy coding yall!"