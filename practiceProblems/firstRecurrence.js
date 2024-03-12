// First Recurrence Index

// Create a function that identifies the very first item that has recurred in
// the string argument passed. It returns the identified item with the index
// where it first appeared and the very next index where it resurfaced --
// entirely as an object; or as an empty object if the passed argument is either
// null, undefined, empty string, or no recurring item exists.
/*
P:

We want to create a function that accepts a string as an argument. The function
should find a character that occurs at least twice, and returns an object with
that character as the key, and the the value as an array with the first index it
appears, and the index where it reoccurs.

If multiple characters occurs more than once, return the character that reoccurs
first.

Rules:
1. We want to find the character that occurs more than once.
2. If multiple characters occur more than once, return the character that
   reoccurs first.
3. Return an empty object if the argument is either `null`, `undefined`, an
   empty string or if no recurring item exits.
4. Case matters when finding a recurring character.
5. The string may contain digits and special characters.
6. Treat digits and special characters just like alphabeticals.
7. The string will not contain any spaces.
8. Other than `null` or `undefined`, assume that we will only be getting a
   string for an argument.

Data Structures:

Input: String
Intermediate: Array, Object
Output: Object

-- Modelling/Algorithm:

Initialize `recurringChars` to an empty collection

Iterate on an outer level through the indices of the given string
- Iterate on an inner level through the indices of the given string starting at
  the index one position ahead of the outer
  - If the current char on the inner is the same as the char on the outer
    - Place the char into an array, and then in a sub array store the index of
      the outer and the inner
    - Push the array into a collection

Sort `recurringChars` by the second value of its contained subarray in ascending
order
- Return the first element of this collection as an Object
*/
function recurIndex(string) {
  if (!string) return {};

  let recurredIndex = Infinity;
  let recurrences = {};

  for (let i = 0; i < string.length; i += 1) {
    if (i > recurredIndex) break;
    for (let ii = i + 1; ii < string.length; ii += 1) {
      if (string[i] === string[ii] && ii < recurredIndex) {
        let char = string[i];
        recurrences = {[char]: [i, ii]};
        recurredIndex = ii;
      }
    }
  }

  return recurrences;
}

console.log(recurIndex("DXTDXTXDTXD")); // {"D": [0, 3]}
console.log(recurIndex("tXpNozzt")); // {"z": [5, 6]}
console.log(recurIndex("GgabbcDD")); // {"b": [3, 4]}
console.log(recurIndex("D-A-Z-N-D")); // {"-": [1, 3]}
console.log(recurIndex("AbCDeF40014")); // {"0": [7, 8]}
console.log(recurIndex("abcdefghi")); // {}
console.log(recurIndex("")); // {}
console.log(recurIndex(null)); // {}
console.log(recurIndex(undefined)); // {}
