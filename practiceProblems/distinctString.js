// Distinct String

/*
A distinct string is a string that is present only once in an array.

Given an array of strings, `arr`, and an integer, `k`, return the `k`th distinct
string present in `arr`. If there are fewer than `k` distinct strings, return an
empty string `""`.

Note that the result string is the one encountered earliest in the array.

P:

We want to create a function that takes two arguments, an array of strings and a
integer, `n`. The function should return the `n`th distinct string (a string
that is only present once in the array).

Rules:
Return the `n`th distinct string from the given array
- E.g., if `n` is 2, and our distinct strings are "d" and "a", return the one
  that appears second, i.e., "a".

Will the array contain anything either than strings?
=> Yes, it will only contain strings. Won't have to worry about processing any
   other data type.

Will the strings be single letters or can they be mutli character strings?
- We will have to handle multi character strings, i.e., words.

Will the strings contain only alphabeticals or will they contain digits as 
well?
- They will contain only alphabeticals

If there are fewer than `n` distinct strings return an empty string

What if `n` is equal to `0`?
- Assume that `n` will always be greater than or equal to 1.

Do we have to worry about too few or too many arguments being passed?
- Assume that we will always be passed exactly two arguments

Invalid inputs?
- if `n` is `NaN` return `undefined`

What if the given array is empty?
- return an empty string

Can the array contain any number of elements?
- Yes, assume that you'll have to process extremely large arrays

What is the maximum integer we can expect to be passesd for `n`?
- Maximum will be less than `Infinity` the minimum is `1`


E:

distinctString(["d","b","c","b","c","a"], 2); // "a"
distinctString(["a", "b", "word", "a", "dog"], 2); // "word"
distinctString(["a", "a", "z", "k", "b", "b", "just"], 7); // ""
distinctString(["a", "z", "zoo"], NaN); // undefined
distinctString([], 4); ""
distinctString(["launch", "school", "a", "a", "b"], 1); // 1

Data Structures:

Input: Array of strings
Output: string or undefined (if the `n` is NaN)

Intermediate:

An object to store string counts

-- Modeling/Algo

I: ["a", "b", "word", "a", "dog"], 2
O: "word"

If the second argument `n` is not a number
- Return `undefined`

Declare and initialize `counts` to an empty object

Iterate over the elements from the given list
- Store the current string as a key and set the value to 1
  - If the key already exists, increment the value by 1


Filter out strings from the given array
- If the string that matches a key from `counts` has a value equal to 1
  - Filter that string out into a new array

If `n` is greater than the length of the filtered array
- Return an empty string
- Otherwise, return the string at index `n` - 1
*/
function getCounts(array) {
  let counts = {};

  array.forEach(string => {
    if (counts[string]) {
      counts[string] += 1;
    } else {
      counts[string] = 1;
    }
  });

  return counts;
}

function distinctString(array, n) {
  if (Number.isNaN(n)) return undefined;
  let counts = getCounts(array);

  let filteredArray = array.filter(word => counts[word] === 1);
  if (filteredArray.length < n) {
    return "";
  } else {
    return filteredArray[n - 1];
  }
}

// Array to hold the 200 strings
let arrayWithUniqueAndNonUnique = [];

// Add 22 unique strings
const uniqueStrings = [
  "unique1",
  "unique2",
  "unique3",
  "unique4",
  "unique5",
  "unique6",
  "unique7",
  "unique8",
  "unique9",
  "unique10",
  "unique11",
  "unique12",
  "unique13",
  "unique14",
  "unique15",
  "unique16",
  "unique17",
  "unique18",
  "unique19",
  "unique20",
  "unique21",
  "unique22"
];

arrayWithUniqueAndNonUnique.push(...uniqueStrings);

// Add non-unique strings (repeats)
for (let i = 0; i < 178; i++) {
  arrayWithUniqueAndNonUnique.push("nonUnique");
}

console.log(distinctString(["d","b","c","b","c","a"], 2)); // "a"
console.log(distinctString(["a", "b", "word", "a", "dog"], 2)); // "word"
console.log(distinctString(["a", "a", "z", "k", "b", "b", "just"], 7)); // ""
console.log(distinctString(["a", "z", "zoo"], NaN)); // undefined
console.log(distinctString([], 4)); ""
console.log(distinctString(["launch", "school", "a", "a", "b"], 1)); // "launch"
console.log(distinctString(arrayWithUniqueAndNonUnique, 17)); // "unique17"