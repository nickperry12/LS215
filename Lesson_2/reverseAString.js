// Reverse a String

/*
Implement a function that takes a string as an argument and returns a new string
that contains the original string in reverse.

-- Modeling/Algo:

Take the given string and split into single characters
- Reverse the order
- Join the characters together and return the result
*/

function reverse(string) {
  let chars = string.split('');
  let reversedString = chars.reverse().join('');
  console.log(reversedString);
  return reversedString;
}

reverse('hello');                  // returns "olleh"
reverse('The quick brown fox');    // returns "xof nworb kciuq ehT"