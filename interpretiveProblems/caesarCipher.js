// Caesar Cipher
/*
Write a function that implements the Caesar Cipher. The Caesar Cipher is one of
the earliest and simplest ways to encrypt plaintext so that a message can be
transmitted securely. It is a substitution cipher in which each letter in a
plaintext is substituted by the letter located a given number of positions away
in the alphabet. For example, if the letter 'A' is right-shifted by 3 positions,
it will be substituted with the letter 'D'. This shift value is often referred
to as the key. The "encrypted plaintext" (ciphertext) can be decoded using this
key value.

The Caesar Cipher only encrypts letters (including both lower and upper case).
Any other character is left as is. The substituted letters are in the same
letter case as the original letter. If the key value for shifting exceeds the
length of the alphabet, it wraps around from the beginning.

P:

Create a function that accepts a string and a number as an argument, and
transforms it using the "Caesar Cipher". The cipher takes each character in the
string, and rotates a given number `n` spaces, i.e., if the given number is `3`
and the character is "a", it is rotated `3` spaces ahead and becomes "d". If the
given string is a sentence, each alphabetical character in the string must be
rotated with all special characters ignored.

Rules:
1. Rotate each alphabetical character in the given string `n` characters ahead.
2. If the rotation moves the string passed "z", it should wrap from the
   beginning.
3. All character should maintain their original case.
4. If the given number is `0`, the characters should not be rotated.
5. Special characters should be ignored.
6. Assume that the given string will always contain one character.
7. Assume that the given number will always be a positive, whole number.
8. Assume that we'll always be given exactly two arguments.

-- Modelling:

Rotate each character in the string by `n` spaces.

I: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25
O: "ZABCDEFGHIJKLMNOPQRSTUVWXY"

Get the char codes for "A", "a", "Z", "z"

Split the string into individual characters
- Replace each character with the character 3 spaces ahead
  - If that exceeds the char code of "Z" or "z", we need to wrap it around
    - "Z" moves 1 spaces to "A", how do we get this?
      - 26 - 1 => 25 spaces => 90 - 25 => 65 => "A"
      - "W" moves 5 spaces => "B" => 26 - 5 => 21 spaces => 87 - 21 =>

-- Algorithm:

Declare and initialize `charCodeForA` to the ASCII code for "A"
Declare and initialize `charCodeForLowA` to the ASCII code for "a"
Declare and initialize `charCodeForZ` to the ASCII code for "Z"
Declare and initialize `charCodeForLowA` to the ASCII code for "z"

Declare and initialize `chars` to a collection of the individual chars in the
given string

Iterate over `chars` and transform each character
- Check to see if the current char on iteration matches an uppercase or
  lowercase alphabetical letter
  - If it matches, perform the following:
    - Find the characters ASCII code and add `n`
      - If the sum of this value exceeds the ASCII code value for "z" or "Z",
        subtract `n` from `26`.
          - Subtract the difference from the current characters ASCII code value
            and use this code value to find the character to replace the current
            character
  - If the character does not match, move onto the next iteration

Join the transform collection of characters back into a string
- Return the resulting string

*/
const charCodeForA = "A".charCodeAt();
const charCodeForLowA = "z".charCodeAt();
const charCodeForZ = "Z".charCodeAt();
const charCodeForLowZ = "z".charCodeAt();

function caesarEncrypt(string, shiftVal) {
  let chars = string.split('');
  
  let encryptedChars = chars.map(char => {
    let charCode = char.charCodeAt();
    if (char.match(/[A-Z]/g)) {
      let newCharCode = charCode + shiftVal > charCodeForZ
      ? charCode - (26 - shiftVal)
      : charCode + shiftVal;
      return String.fromCharCode(newCharCode);
    } else if (char.match(/[a-z]/g)) {
      let newCharCode = charCode + shiftVal > charCodeForLowZ
      ? charCode - (26 - shiftVal)
      : charCode + shiftVal;
      return String.fromCharCode(newCharCode);
    } else {
      return char;
    }
  })

  return encryptedChars.join('');
}



// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// // all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// // "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// // "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// // many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// // "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"