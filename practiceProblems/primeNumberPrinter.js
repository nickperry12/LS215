// Prime Number Printer

/*
Write a function, primeNumberPrinter, that prints all prime numbers present as
substrings in a given string.

P:

We want to create a function that takes a string as an argument, and prints all
prime numbers that are present as substrings from the given string.

Rules:

Find digit substrings that exist in the given string and return the digits that
are prime numbers in an array.

When we extract the digit substrings, should we keep them as strings, or should
we convert them to numbers?
- Convert to numbers

Will we have to deal with floating point numbers?
- Assume that all numbers will be whole numbers

Will we have to handle too few or too many arguments?
- Assume that we will always be passed exactly one argument

How should we handle empty strings?
- If the input is an empty string, return an empty array

Does case affect anything? Will we need to handle lowercase or uppercase?
- Case does not affect the output, but expect strings with both lowercase and
  uppercase letters

What if the string contains no digits or no prime numbers?
- Return an empty array

Will the argument always be a string? If not, how should we handle non-string
arguments?
- Expect to receive non-string arguments. If the argument is not a string,
  return an error message.

Is there a maximum length for the string?
- No

How should we handle duplicate numbers?
- The returned array should contain only unique numbers

In regards to the returned array, does the order of the numbers matter?
- the order of numbers should be sorted by numerical value from lowest to
  highest

Will the string contain any characters that are not alphanumerics or
alphabeticals?
- Yes, it's possible for the string to contain special characters

Do special characters need to be handled in a certain way?
- No

Can the string contain negative numbers?
- No, assume the string will contain all positive numbers, if the a digit
  contains a `'-'` before it, process the digit normally

Algorithm:

If the given argument is not a string
- Return an error message

Check to see if a number is prime
- Iterate from the number 2 to the given number minus one
  - If the given number is evenly divisible by any number in this range
    - Return false
- Return true if iteration completes

Declare and initialize `digits` to an empty array

Extract all characters from the given string that are digits
- Place them into `digits`

Transform all the strings within `digits` to numbers
- Filter out all the numbers that are not prime numbers
- Remove any duplicates
  - Declare and initialize `uniqueArray`
    - Iterate through the collection prime numbers, and if `uniqueArray` does
      not include that number, push that number into `uniqueArray`
- Sort `uniqueArray` from low to high
  - Return the resulting array

*/

function primeChecker(number) {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function transformToNumbers(array) {
  return array.map(item => Number.parseInt(item));
}

function getUniqueNums(array) {
  let uniqueNums = [];
  array.forEach(num => {
    if (!uniqueNums.includes(num)) {
      uniqueNums.push(num);
    }
  });

  return uniqueNums;
}

function primeNumberPrinter(string) {
  if (typeof string !== 'string') return "Invalid input; String expected.";

  let digits = string.match(/\d+/g) || [];
  digits = transformToNumbers(digits);

  let primeNumbers = digits.filter(num => primeChecker(num));
  let uniquePrimes = getUniqueNums(primeNumbers);
  return uniquePrimes.sort((a, b) => a - b);
}

console.log(primeNumberPrinter("a4bc2k13d")); // [2, 13]
console.log(primeNumberPrinter("")); // []
console.log(primeNumberPrinter("oasdkka")); // []
console.log(primeNumberPrinter([1, 2, 3])); // "Invalid input; String expected."
console.log(primeNumberPrinter("asdf3n7n3pio10lka11")); // [3, 7, 11]
console.log(primeNumberPrinter("-101akanza12031mansd-==-!!?*3*22iop7nbr5asd67start87")); // [3, 5, 7, 67, 101]
console.log(primeNumberPrinter("AB3C7cdA101,,.7,UAOSD67aa5asldkj5")); // [3, 5, 7, 67, 101]