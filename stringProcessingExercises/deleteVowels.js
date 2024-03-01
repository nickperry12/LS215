// Delete Vowels

/*
Write a function that takes an array of strings and returns an array of the same
string values, but with all vowels (a, e, i, o, u) removed.

P:

Create a function that accepts an array of strings, and return a new array with
the same strings but with all of their vowels removed.

Rules:
1. Remove all vowels from each string in the array
2. Strings can be uppercase or lowercase
3. If a string contains all vowels, an empty string should replace it
4. All strings will contain only alphabeticals
5. We can assume that the array will always contain at least one string
6. Each string will have at least one character

E:

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]

Algo:

Iterate through the array
- Transform each string
  - Remove all vowels, and replace them with an empty string

Return the new array
*/

function removeVowels(array) {
  return array.map(string => string.replace(/([aeiou])/ig, ''));
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]