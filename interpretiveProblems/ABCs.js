// Now I Know My ABCs
/*
A collection of spelling blocks has two letters per block, as shown in this
list:

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

This limits the words you can spell with the blocks to only those words that do
not use both letters from any given block. You can also only use each block
once.

Write a function that takes a word string as an argument and returns true if the
word can be spelled using the set of blocks, false otherwise. You can consider
the letters to be case-insensitive when you apply the rules.

P:

Create a function that accepts a string as an argument, and returns `true` if
the given string can be spelled using the provided set of blocks, and `false`
if not. The limitations to this are as follows:

We can only use one letter from a given block, and we can only use that block
once.

Rules:
1. We can only use a block once.
2. We can only use one letter on a block.
3. Consider the letters to be case-insensitive when applying the rules.
4. The input string can be uppercased or lowercased.
5. Assume the string will always have at least one character.
6. Assume that the input string will only contain alphabetical chars.
7. If the string can be spelled using the blocks, return `true`, `false` if not.

-- Modelling:

Blocks:

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

I: 'BATCH'
O: true

{
  'B':'O',
  'X':'K',
  'D':'Q',
  'C':'P',
  'N':'A',
  'G':'T',
  'R':'E',
  'F':'S',
  'J':'W',
  'H':'U',
  'V':'I',
  'L':'Y',
  'Z':'M'
}

Iterate through the chars of the string
- Iterate through each key-val pair of the blocks object
  - If the current character matches any character in the current key-val pair,
    push the key-val into a collection

While iterating we also need to check if the letters have been used already

-- Algorithm:

Declare and initialize `blocks` to the given block objects
Declare and initialize `usedLetters` to an empty collection

Reassign the given stringo to it's uppercased version

Iterate through the characters of the given string
- Iterate through the entries of `blocks`
  - Check for the following:
    - If the current character is not contained in `usedLetters` and if the
      character matches any of the characters in the current entry
        - If it passes this check, move onto the next iteration, and push both
          characters of the current block entry into `usedLetters`
        - If it does not pass this check, return `false`

If both iterations successfully complete, return `true`
*/
const blocks = {
  'B':'O',
  'X':'K',
  'D':'Q',
  'C':'P',
  'N':'A',
  'G':'T',
  'R':'E',
  'F':'S',
  'J':'W',
  'H':'U',
  'V':'I',
  'L':'Y',
  'Z':'M'
};

function isBlockWord(string) {
  string = string.toUpperCase();
  let usedLetters = [];
  let entries = Object.entries(blocks);

  for (let i = 0; i < string.length; i += 1) {
    for (let ii = 0; ii < entries.length; ii += 1) {
      let char = string[i];
      let entry = entries[ii];
      if (!usedLetters.includes(char) && entry.includes(char)) {
        usedLetters.push(entry[0]);
        usedLetters.push(entry[1]);
      } else if (usedLetters.includes(char) && entry.includes(char)) {
        return false;
      }
    }
  }

  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true