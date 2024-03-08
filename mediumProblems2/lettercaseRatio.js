// Lettercase Percentage Ratio
/*
Write a function that takes a string and returns an object containing the
following three properties:

- the percentage of characters in the string that are lowercase letters
- the percentage of characters that are uppercase letters
- the percentage of characters that are neither
- You may assume that the string will always contain at least one character.

P:

We want to create a function that accepts a string as an argument, and returns
an Object literal that contains the following information:

The percentage of characters in the given string that are lowercase
The percentage of characters in the given string that are uppercase
The percentage of characters in the given string that are neither

Rules:
1. The percentage should be rounded to two decimal places
2. Any non-alphabetical character is classified as `neither` including spaces
3. If the given string is empty, return an empty object
4. If no argument is provided, or if the argument is `null`, return an empty
   object
5. The string will contain both alphabeticals and special characters and spaces

Data Structures:

I: String
Intermediate: numbers, possibly an array?
O: Object literal

-- Modelling:

How do we get the ratio?
- We find the total number of matching characters, divided by the string length,
  multipled by 100
  - we do this for uppercase chars, lowercase chars, and neither

We can use a helper function to get the ratios, and return the ratios in an
object where the variable names are the key
- We can pass in a regex pattern to the function
  - the pattern will be used to replace all non-matching characters to an empty
    string
  - We then get the length, divide by the string length, multiple by 100 and
    round to 2 decimal places

-- Algorithm:

To get the ratio of uppercase, lowercase, and non-alphabetical characters, do
the following:
- Replace all characters that don't match the type we want i.e., for uppercase
  we want to replace non-uppercase alphas with an empty string, for lowercase
  replace all non-lowercase alphas with an empty string, and for `neither`
  replace all alphabeticals with an empty string
  - Get the length of the resulting string, divide by the length of the given
    given string
    - Multiple by 100 and then round to 2 decimal places

Return an object where the variable names as key and its value as the value


*/
function letterPercentages(string) {
  let total = string.length;
  const getRatio = (pattern) => {
    return ((string.replace(pattern, '').length / total) * 100).toFixed(2);
  }

  return {
    'lowercase' : getRatio(/[^a-z]/g),
    'uppercase' : getRatio(/[^A-Z]/g),
    'neither' : getRatio(/[a-z]/gi)
  }
}


console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }