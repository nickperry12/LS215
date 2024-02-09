// Acronym

/*
Write a function that generates and returns an acronym from a string of words.
For example, the function should return "PNG" for the string "Portable Network
Graphics". Count compound words (words connected with a dash) as separate words

P:

Create a function that takes a string as an argument, and returns an acronym
from the string of words, e.g., if the given string is "Portable NetWork
Grapics", the returned string should be "PNG".

E:

I: 'Portable Network Graphics'
O: 'PNG'

-- Modeling/Algorithm

Replace all non-alphabetics/alphanumerics with a empty string
Split the new string into a collection of individual words
- Transform each word into a single uppercased character found at the start of
  each word
- Join the characters together to form a acronym
- Return the acronym
*/

function replaceNonAlphas(string) {
  return string.replace(/[\-'"]/, ' ');
}

function acronym(string) {
  let newString = replaceNonAlphas(string);
  let words = newString.split(' ');
  return words.map(word => word[0].toUpperCase()).join('');
}

console.log(acronym('Portable Network Graphics'));                  // "PNG"
console.log(acronym('First In, First Out'));                        // "FIFO"
console.log(acronym('PHP: HyperText Preprocessor'));                // "PHP"
console.log(acronym('Complementary metal-oxide semiconductor'));    // "CMOS"
console.log(acronym('Hyper-text Markup Language'));                 // "HTML"