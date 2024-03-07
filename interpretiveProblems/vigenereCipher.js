// Vigenere Cipher
/*
The Vigenere Cipher encrypts alphabetic text using polyalphabetic substitution.
It uses a series of Caesar Ciphers based on the letters of a keyword. Each
letter of the keyword is treated as a shift value. For instance, the letter 'B'
corresponds to a shift value of 1, and the letter 'd' corresponds to a shift
value of 3. In other words, the shift value used for a letter is equal to its
index value in the alphabet. This means that the letters 'a'-'z' are equivalent
to the numbers 0-25. The uppercase letters 'A'-'Z' are also equivalent to 0-25.

Applying the Vigenere Cipher is done sequentially for each character by applying
the current shift value to a Caesar Cipher for that particular character. To
make this more concrete, let's look at the following example:

plaintext: Pineapples don't go on pizzas! 
keyword: meat

Applying the Vigenere Cipher for each alphabetic character: 
plaintext : Pine appl esdo ntgo onpi zzas
shift     : meat meat meat meat meat meat 
ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

result: Bmnxmtpeqw dhz'x gh ar pbldal!

Notice that in the example, the key isn't moved forward if the character isn't
in the alphabet. Like the Caesar Cipher, the Vigenere Cipher only encrypts
alphabetic characters.

Write a function that implements the Vigenere Cipher. The case of the keyword
doesn't matter—in other words, the resulting encryption won't change depending
on the case of the keyword's letters (e.g., 'MEat' === 'mEaT').

P:

We want to create a function that accepts two strings as arguments, the plain
text we wish to encrypt, and a keyword that determiens how we will encrypt the
plain text. The plain text will be encrypted using the Vignere Cipher.

Rules:
1. The index of each letter in the alphabet represents a shift value. "A" starts
   at the index 0.
2. Uppercase and lowercase letters share the same index value.
3. When encrypting each character, we must maintain case.
4. Assume that the plain text and keyword will always contain at least one
   character.
5. Strings may contain special characters and digits, and should be ignored.

Data Structures:
I: Strings
Intermediate: Array
O: String

-- Modelling:

Based off the given example, we want to iterate through the characters of the
keyword to determine how we are going to encrypt each character

For example:

First char of plain text => "P"
First char of keyword => "m"

This means we want to rotate "P" 12 spaces => index of "m" is 12

Second char of plain text => "i"
Second char of keyword => "e"

Rotate "i" 4 spaces => index of "e" is 4

Once we hit the last letter of the keyword, we start back at the beginning, and
follow this pattern throughout the plaintext.

We need an array housing the alphabet to get our index positions

["a", "b", "c", "d", "e", "f", "g" ...]

Set the `keyPosition` to `0`
Set `shiftVal` to the index of the current character of the keyword, which will
be identified using the `keyPosition`

-- Algorithm:

Initialize `upperAlphabet` to a collection of the uppercased alphabeticals
Initialize `lowerAlphabet` to a collection of the lowercased alphabeticals

Initialize `encryptedText` to an empty string
Initialize `keyPosition` to `0`

Iterate through the characters of the given string
- Initialize `shiftValue` to the index of `keyChar` from `upperAlphabetical`
  - If the current `keyChar` is `"a"` or `"A"`, assign `0` to this var instead
- Initialize `char` to the current char on iteration
- Initialize `keyChar` to the character at the index of `keyPosition` in
  `keyword`
- If the current character is a non-alphabetical
  - Concatenate that character to `encryptedText` as is
- If the current character is an alphabetical
  - Encrypt the character using the caesar cipher, and concatenate the resulting
    character to `encryptedText`
  - If the value of `shiftValue` is less than the length of the keyword - 1
    - Increment `shiftValue` by 1
    - Otherwise, reassign it to `0`
Return `encryptedText`
*/
const charCodeForA = "A".charCodeAt();
const charCodeForLowA = "z".charCodeAt();
const charCodeForZ = "Z".charCodeAt();
const charCodeForLowZ = "z".charCodeAt();
const alphas = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']

function caesarEncrypt(string, shiftVal) {
  const idxOfZ = 26;
  let chars = string.split('');
  
  let encryptedChars = chars.map(char => {
    let charCode = char.charCodeAt();
    if (char.match(/[A-Z]/g)) {
      let newCharCode = charCode + shiftVal > charCodeForZ
      ? charCode - (idxOfZ - shiftVal)
      : charCode + shiftVal;
      return String.fromCharCode(newCharCode);
    } else if (char.match(/[a-z]/g)) {
      let newCharCode = charCode + shiftVal > charCodeForLowZ
      ? charCode - (idxOfZ - shiftVal)
      : charCode + shiftVal;
      return String.fromCharCode(newCharCode);
    } else {
      return char;
    }
  })

  return encryptedChars.join('');
}

function vignereEncrypt(plainText, keyword) {
  keyword = keyword.toUpperCase();
  let encryptedText = '';
  let keyPosition = 0;

  for (let i = 0; i < plainText.length; i += 1) {
    let char = plainText[i];
    let keyChar = keyword[keyPosition];
    let shiftValue = keyChar.match(/a/i) ? 0 : alphas.indexOf(keyChar);

    if (char.match(/[^a-z]/ig)) {
      encryptedText += char;
    } else {
      encryptedText += caesarEncrypt(char, shiftValue);
      keyPosition = (keyPosition + 1) > (keyword.length - 1) ? 0 : keyPosition + 1;
      console.log(char, caesarEncrypt(char, shiftValue));
    }
  }

  return encryptedText;
}


console.log(vignereEncrypt("Pineapples don't go on pizzas!", "meat"))
// plaintext : Pine appl esdo ntgo onpi zzas
// shift     : meat meat meat meat meat meat 
// ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

// result: Bmnxmtpeqw dhz'x gh ar pbldal!