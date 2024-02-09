// All Substrings

/*
Write a function that returns a list of all substrings of a string. Order the
returned list by where in the string the substring begins. This means that all
substrings that start at index position 0 should come first, then all substrings
that start at index position 1, and so on. Since multiple substrings will occur
at each position, return the substrings at a given index from shortest to
longest.

You may (and should) use the leadingSubstrings function you wrote in the
previous exercise:

-- Modeling/Algo

In an outer iteration, set `i` to 0 and iterate while `i` is less than or
equal to the string length
- In an inner iteration, set `ii` to `i + 1`, and iterate while `ii` is less
than the string length
- Push a slice of the given string from `i` to `ii` into a collection
- return the resulting collection
*/

function substrings(string) {
  let substrings = [];

  for (let i = 0; i <= string.length; i += 1) {
    for (let ii = i + 1; ii <= string.length; ii += 1) {
      substrings.push(string.slice(i, ii));
    }
  }

  return substrings;
}

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]