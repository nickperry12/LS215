// Nearest Vowel
/*
Write a function that takes in a string and for each character, returns the
distance to the nearest vowel in the string. If the character is a vowel itself,
return 0.

P:

Create a function that accepts a string as an argument, and for each character
in that string, return the numerical distance to the nearest vowel. If the
character is a vowel, the distance should be zero.

Rules:
1. The given string will always be lowercased
2. The given sting will always contain at least one vowel.
3. The vowels are a, e, i, o, u.
4. The output should be an array containing numbers.
5. The given string may contain special characters and numericals
6. The given string won't contain any spaces.
7. We're looking for the distance between the current char and the nearest vowel
   in the given string
8. If no argument is provided, return `undefined`.
9. If too many arguments are provided, ignore the extra arguments.
10. If a character is equidistant from two different vowels, it will not affect
    the returned distance, as the distance will be the same for either vowel.
11. There are 26 characters in the alphabet
12. When looking for the nearest vowel, we're looking both forward and back

-- Modelling:

I: "abcdabcd"
O: [0, 1, 2, 1, 0, 1, 2, 3]

Create an object to house all the alphabetical characters and their alphabetical
position

Break the string into chars => ["a", "b", "c", "d", "a", "b", "c", "d"]

Declare and initialize `vowelIndices` => [0, 4]

Create an object that contains the character key and the values are the
distances to each vowel in the string
 - If the char shows up multiple times, append a "+" to the char name

-- Algorithm:

If there are no arguments given, return `undefined`

Declare and intialize `vowels` to a collection containing the vowel strings
"a", "e", "i", "o", "u"

Declare and initialize `vowelIndices` to an empty collection

Declare and initialize `chars`
- Split the given stringg into individual characters and store them into this
  collection

Declare and initialize `results` to an empty collection

Iterate through `chars` and its indices
- If the character is a vowel, store the index in `vowelIndices`

Iterate through `chars` and its indices
- If the current character is a vowel, push `0` into `results and move onto
  the next iteration
- In an inner iteration, iterate through `vowelIndices`
  - Declare and initialize `min` to `Infinity`
  - Find the deltas between the current index on the outer and the current
    value in `vowelIndices`
    - If the delta is lower tha `min`, reassign `min` to the delta
  - At the end of iteration, push `min` into `result`

Return `results`
*/
var vowels = ["a", "e", "i", "o", "u"];

function findVowelIndices(chars) {
  let indices = [];

  chars.forEach((char, idx) => {
    if (vowels.includes(char)) {
      indices.push(idx);
    }
  })

  return indices;
}

function findDeltas(chars, vowelIndices) {
  let deltas = [];

  chars.forEach((char, i) => {
    if (vowels.includes(char)) {
      deltas.push(0);
      return;
    }

    let min = Infinity;

    vowelIndices.forEach((index) => {
      let delta = Math.abs(i - index);
      if (delta < min) min = delta;
    })

    deltas.push(min);
  })

  return deltas;
}

function distanceToNearestVowel(string) {
  if (!string) return undefined;

  let chars = string.split('');
  let vowelIndices = findVowelIndices(chars);
  return findDeltas(chars, vowelIndices);
}

console.log(distanceToNearestVowel("abcdabcd")); // [0, 1, 2, 1, 0, 1, 2, 3]
console.log(distanceToNearestVowel("a7b-c-d:a/b;c=d"));
// [
//   0, 1, 2, 3, 4, 3,
//   2, 1, 0, 1, 2, 3,
//   4, 5, 6
// ]
console.log(distanceToNearestVowel("aazutrspno")); // [0, 0, 1, 0, 1, 2, 3, 2, 1, 0]
console.log(distanceToNearestVowel("shopper")); // [2, 1, 0, 1, 1, 0, 1]
console.log(distanceToNearestVowel()); // undefined
console.log(distanceToNearestVowel("babbb", "second string")); // [1, 0, 1, 2, 3]
