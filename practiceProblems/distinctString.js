// A distinct string is a string that is present only once in an array.

// Given an array of strings, arr, and an integer, k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".

// Note that the result string is the one encountered earliest in the array.

/*
P:

A distinct string is defined a string that only appears once in a collection. I need to write a function that accepts an array and an integer `n` as arguments, and returns the `n`th distcint string from the given array.

Rules:
1. We want to return `n`th distinct string
2. Won't be dealing with empty strings, will always be at least one characters
3. Expect to deal with strings with multiple characters
4. Strings can contain any type of character: alphabeticals, alphanumerics, punctuation, special characters, whitespace etc.
5. Dealing with strictly strings in our array, don't expect any other data types
6. Will always receive a positive integer that is greater than 0, but there is no maximum
7. If `n` is greater than the amount of distcint strings, return an empty string
8. If no arguments are received, return an error message stating `"Empty input."`
9. If an empty array is received, return a string stating "Empty input."
10. If there are no distcint strings, return an empty string.
11. Strings are case sensitive, i.e., if we have the words "launch" and "LAUNCH", consider the strings to be distcint
12. We can expect the first argument to either be an array or an object literal.
13. In the event that we are passed an object literal as the first argument, we want to extract the values to retrieve the strings

-- Modelling/Algorithm

If we receive no inputs
- Return the string "Empty input."

If the given first argument (an array or object literal) is empty
- Return the string "Empty input."

If the first argument is an object literal
- Extract all the values into an array

Declare and initialize `counts` to an empty object
- Iterate over the collection of strings
  - Using the current string as a key, check to see if that key exists within `counts`
    - If it doesn't exist, create a key value pair with the string as the key, and set the value to 1
    - If the key does exist, increment its value by 1

Declare and initialize an array to `uniqueStrings`
- Place all the keys from `counts` within it
- Filter out all the keys that have a value greater than 1

If the given integer `n` is greater than the length of `uniqueStrings`
- Return an empty string

Delcare and initialize `index` to `n` - 1
- Return the string at `index` of `uniqueStrings`
*/
function getCounts(array) {
  let counts = {}

  array.forEach(string => {
    if (counts[string]) {
      counts[string] += 1;
    } else {
      counts[string] = 1;
    }
  });

  return counts;
}

function distinctString(collection, n) {
  if (!collection && !n) return "Empty input."
  if (Array.isArray(collection)) {
    if (collection.length === 0) return "Empty input"
  } else if (Object.keys(collection).length === 0) {
    return "Empty input."
  }

  if (!Array.isArray(collection)) {
    collection = Object.values(collection);
  }

  let counts = getCounts(collection);
  let uniqueStrings = Object.keys(counts).filter(key => counts[key] === 1);
  let index = (n - 1);

  if (n > uniqueStrings.length) {
    return "";
  } else {
    return uniqueStrings[index];
  }
}

// Test Case(s)

console.log(distinctString(["d","b","c","b","c","a"], 2)); // "a"
console.log(distinctString([], 5)); // "Empty input."
console.log(distinctString()); // "Empty input."
console.log(distinctString(["words", "launch", "snow", "rain", "mountains", "launch", "a", "a", "b"], 12)); // ""
console.log(distinctString(["a", "a", "b", "c", "e", "c", "d", "z"], 4)); // "z"
console.log(distinctString(["a", "A", "b", "B", "launch", "LAUNCH", "launch", "a"], 1)); // "A"
console.log(distinctString({a: "a", b: "b", word: "word", z: "a", m: "n", another: "word", e: "e"}, 3)); // "e"
console.log(distinctString(["a", "a", "a", "a", "a"], 5)); // ""
console.log(distinctString(["a014a", "#00f131", "half", "coffee", "a014a", "halfsies"], 1)); // "#00f131"
console.log(distinctString({}, 10)); // "Empty input."