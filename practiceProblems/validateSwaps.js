/*
Given an array of strings and an original string, write a function to output an
array of boolean values - true if the word can be formed from the original word
by swapping two letters only once and false otherwise.

P:

Create a function that accepts an array of strings as the first argument and
another string as the second argument, that returns an array of booleans. The
array should contain true if the word can be formed from the orignal word by
swapping two letters only once, and false if it cannot.

Rules:

1. Swap two letters only once to form the given string to get a return value of
   true.
2. The input strings can be treated as case insensitive.
3. Input string and array strings can contain digits and special characters
4. In the case that the input array is empty, return an empty array
5. Assume that we will always receive both arguments
6. If provided more arguments than necessary, ignore them
7. Will always receive an array as the first argument
8. The second argument provided will always be a string
9. It is possible to be given an empty string, and if that is the case, treat it
   as a populated string and populate the array with the correct booleans
10. We can swap any two characters to make the input string, so long as its
    strictly two characters. It does not matter if we're able to swap a second
    set, it should return true regardless.
11. We can also receive a lowercase string for the input string
12. Assume the input array will only contain strings

-- Modelling

I: ["BACDE", "EBCDA", "BCDEA", "ACBED"], "ABCDE"
O: [true, true, false, false]

First test string => "BACDE"
Letters swapped => "B" at index 0, "A", at index 1
Append the start slice and end slices

Start slice will start at 0, and end at the index position of the first char
swapped

End slice will start at the index position one ahead of the second char being
swapped

Start slice => (0, 0) => ''
End slice => (2, string length) => 'CDE'
Concat the swapped chars with the slices
'' + 'A' + 'B' + 'CDE' => 'ABCDE'

Second test string => "EBCDA"
Letters are swapped => "E" at index 0, "A" at index 4

Outer iteration that starts at index 0
- Inner iteration that starts at the index position 1 ahead of the outer
  - Swap the two letters, check to see if they are equivalent to the input string

-- Algorithm:

If the input array is empty
- Return an empty array

Iterate over the input array
- Transform all the strings into lowercase strings

Reassign the input string to it's lowercase equivalent

Declare and initialize `results` to an empty array

Iterate through the array of strings
- Declare and initialize `chars` to a collection of the characters contained in
  the given string
- Check to see if the current string is the same length as the input string
  - If it isn't, push `false` into `results` and move onto the next word
  - If it is, perform the following check:
    - In a second level of iteration, iterate through the characters in `chars`
      - In a third level of iteration, iterate through the characters of `chars`
        start at the index position one ahead of the second level
        - Swap the characters at the index positions in the second and third
          levels, join the collection back together to form a string and compare
          to the given string. If the string is the same, push `true` into
          `results`, and move onto the next word in the first iteration level
  - If the second and third level iteration completes without finding a match,
    push `false` into `results` and move onto the next word

Return `results`
*/
function swapCheck(string, original) {
  for (let i = 0; i < string.length; i += 1) {
    for (let ii = i + 1; ii < string.length; ii += 1) {
      let chars = string.split('');
      [chars[i], chars[ii]] = [chars[ii], chars[i]];
      if (chars.join('') === original) return true;
    }
  }

  return false;
}

function validateSwaps(words, string) {
  if (words.length === 0) return [];
  string = string.toLowerCase();
  words = words.map(word => word.toLowerCase());
  let results = [];

  words.forEach(word => {
    if (word.length !== string.length) next;
    if (swapCheck(word, string)) {
      results.push(true);
    } else {
      results.push(false);
    }
  })
  
  return results;
}

console.log(validateSwaps(["BACDE", "EBCDA", "BCDEA", "ACBED"], "ABCDE"));   // [true, true, false, false]
console.log(validateSwaps(["bacde", "ebcda", "bcdea", "abced"], "ABCDE"));   // [true, true, false, true]
console.log(validateSwaps([], "STRING"));   // []
console.log(validateSwaps(["launch", "school", "study", "assessment"], ''));   // [false, false, false, false]
console.log(validateSwaps(["CBCBA", "BCABD", "LSTV", "OTGFAD"], "ABCBC", "hello"));  // [true, false, false, false]
console.log(validateSwaps(["hel2lo", "go0dby3", "f41l", "t3st"], "2hello")); // [false, false, false, false]