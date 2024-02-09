// Leading Substrings

/*
Write a function that takes a string argument and returns a list of substrings
of that string. Each substring should begin with the first letter of the word,
and the list should be ordered from shortest to longest.

P:
Create a function that takes one argument, a string, that returns a list of
substrings for that string. The list should be ordered from shortest substring
to longest.

E:
leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

-- Modeling/Algo

Set `endPoint` to 1
Take slices of the string and push into an array
- Slices should start at the start of the string to `endPoint`
- Increment `endPoint` by 1
- Do this while `endPoint` is less than or equal to the length of the string
*/

function leadingSubstrings(string) {
  let substrings = [];

  for (let endPoint = 1; endPoint <= string.length; endPoint += 1) {
    substrings.push(string.slice(0, endPoint));
  }

  return substrings;
}


console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

/*
Further Exploration 

Rewrite leadingSubstrings using list processing functions. That is, convert the
string into an array of some sort and use functions like map, filter, or reduce
to get the desired substrings. (You will also need to use join.) Try not to use
forEach as that is too similar to the for loop approach.

A:

Split the string into an array of chars
- Transform each character in the array into a slice of the original string
- Use the current index + 1 as the end point
- Return the new array
*/

function substrings(string) {
  let chars = string.split('');

  return chars.map((char, idx) => string.slice(0, idx + 1));
}

console.log(substrings('abc'));
console.log(substrings('a'));
console.log(substrings('xyzzy'));