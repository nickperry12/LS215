// You are given two inputs:

// An array of abbreviations.
// An array of words.
// Write a function that returns true if each abbreviation uniquely identifies a
// word, and false otherwise.

/*
P:

We want to create a function that accepts two arrays as arguments, one array
containing abbreviations, and the second array containing words. The function
should check if each abbreviation uniquely identifies a word, that is it only
identify exactly one word from the second list.

Rules:
- each abberviation matches exactly one word from the list
  - return true if that is the case, false if not
- all inputs will be lowercase
  - will not have to handle any uppercased words
- strings will contain all letters
  - will not have to handle whitespace or digits
  - will not have to handle empty strings
- we can assume that both arrays passed will always contain strings
  - we won't have to handle empty arrays
- in the case of a single letter abbreviation, it should match any word that
  starts with that letter
- won't have to handle any missing arguments
  - no null or undefined values
- will not have to handle any sparse arrays or array properties
- both arrays will always contain the same number of strings
  - if one has 3 the other will have 3
- arrays will be one dimensional
- each abbreviation in the first list must match at least one and only one from
  the second list
  - two conditions to return true:
    - 1. each abbreviation matches a word
    - 2. each abbreviation matches only one word
- abbreviation should match the beginning of the word up to and exlcuding the
  last character of the word we're matching against
- abbreviations can be any possible substring of the given words except for the
  word itself

E:

uniqueAbbrev(["ho", "h", "ha"], ["house", "hope", "happy"]) // false
uniqueAbbrev(["ho", "eh", "a"], ["house", "hope", "happy"]) // false
uniqueAbbrev(["ho", "ta", "ja"], ["house", "javascript", "talk"]) // true
uniqueAbbrev(["a", "b", "c"], ["all", "bone", "cat"]) // true
uniqueAbbrev(["doghous", "beeh", "ca"], ["doghouse", "beehive", "cataracts"]) // true
uniqueAbbrev(["c"], ["truck"]) // false
uniqueAbbrev(["compu", "com"], ["computer", "computational"]) // false

Data Structures:

Input: two arrays, one with abbreviations, another with words
Output: boolean

Intermediate:
Object literal

Algo:

Populate matches object
- Iterate through collection of abbreviations
  - Use each abbreviation as a key for the object and set the inital value to 0

Declare and initialize `matches` to an empty object

In an outer loop, iterate through the first given array
In an inner loop, iterate through the second given array
- Compare the abbreviation on the outer iteration to the word on the inner
  iteration
  - If the abbreviation matches characters starting at the first character of
    the word up until the abbreviations length in the word, store the
    abberviation as a key in `matches` and set the value to 1
    - If there are any more matches in further iterations, increment the value
      by 1
      - If the value gets incremented by 1, break out of the loop and have the
        function return `false`
After the outer loop iteration completes, check the following:
- Get the values of `matches`
- Check to see that each value is equal to 1
  - Return true if so, false if not
*/

function populateObject (list) {
  let matches = {};
  list.forEach(item => matches[item] = 0);

  return matches;
}

function uniqueAbbrev(abbrevs, words) {
  let matches = populateObject(abbrevs);

  for (let outer = 0; outer < abbrevs.length; outer += 1) {
    for (let inner = 0; inner < words.length; inner += 1) {
      let endIdx = abbrevs[outer].length;
      if (abbrevs[outer] === words[inner].substring(0, endIdx)) {
        matches[abbrevs[outer]] += 1;
      }

      if (matches[abbrevs[outer]] > 1) return false;
    }
  }

  let values = Object.values(matches);
  return values.every(value => value === 1);
}

console.log(uniqueAbbrev(["ho", "h", "ha"], ["house", "hope", "happy"])); // false
console.log(uniqueAbbrev(["ho", "h", "ha"], ["house", "hope", "happy"])); // false
console.log(uniqueAbbrev(["ho", "eh", "a"], ["house", "hope", "happy"])); // false
console.log(uniqueAbbrev(["ho", "ta", "ja"], ["house", "javascript", "talk"])); // true
console.log(uniqueAbbrev(["a", "b", "c"], ["all", "bone", "cat"])); // true
console.log(uniqueAbbrev(["doghous", "beeh", "ca"], ["doghouse", "beehive", "cataracts"])); // true
console.log(uniqueAbbrev(["c"], ["truck"])); // false
console.log(uniqueAbbrev(["compu", "com"], ["computer", "computational"])); // false