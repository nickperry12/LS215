/*
Write a function that takes in an array of integers and returns the integers
that are either palindromes or almost-palindromes. An almost-palindrome is any
integer that can be rearranged to form a palindrome.

For example, the numbers 677 and 338 are both almost-palindromes, since they can
be rearranged to form 767 and 383, respectively.

Return an empty array if none of the numbers are palindromes or
almost-palindromes.

P:

Create a function that accepts an array of numbers as the argument, and returns
the integers that are either palindromes or almost palindromes. An
'almonst-palindrome' is defined as any integer that can be rearranged to form a
palindrome.

Rules:
1. A palindrome is a sequence of characters thatt when reversed, is the same as
   the original sequence
2. An almost palindrome will be a sequence of integers that CAN be rearranged to
   form a palindrome
3. Return the numbers as number data types
4. If the given array is empty, return an empty array
5. The returned array should maintain the order of the given array, i.e., the
   integers that appear should appear in the same order they appear in the given
   array
6. Won't have to deal with negative numbers
7. If no argument is given, return an empty array
8. Input array will contain only numbers, won't have to deal with strings
9. Assume that the given argument will always be an array
10. Return the number as the original number, not as a palindrome
11. No fractional/decimal point numbers

Data Structures:

Input: array of numbers
Output: array of numbers

-- Modelling
To test if a string is a palindrome
- Reverse the string and compare to the original
  - If it's the same, it's a palindrome

Convert each number into a string

I: [1010, 10002, 50066, 30330, 20420]
O: [1010, 50066, 30330, 20420]

First num => 1010
Palindrome vers => 1001, 0110

Second num => 10002
Palindrome vers => none

Third num => 50066
Palindrome vers => 60506

odd lengthed palindromes have one digit where the count is odd, and the rest
have even counts

{
  5: 1,
  0: 2,
  6: 2,
}

420030042

{
  0: 4,
  2: 2,
  3: 1,
  4: 2
}

even lengthed palindromes have all digits with even counts

Algo:


Declare and initialize `results` to an empty array
Declare and initialize `digitCounts` to an Object literal

Iterate over the given array
- Conver the current number into a string

- Split the current string into a collection of digits
- Iterate over the collection of digits
  - If the current digit exists as a key in `digitsCounts`, increment its value by 1
  - If the current digit does not exist, set the initial value to 1

Declare and initialize `odds` to 0

Iterate over the values of `digitCounts`
- If the current value is odd, increment `odds` by 1

Check the current length of the string
- If the length is even
  - Check to see if `odds` is equal to 0
    - If it is, push the current number into `results`
- If the lenght is odd
  - If `odd` is equal to 1, push the number into `results`
*/
function getDigitCounts(digits) {
  let counts = {};

  digits.forEach(digit => {
    if (counts[digit]) {
      counts[digit] += 1;
    } else {
      counts[digit] = 1;
    }
  });

  return counts;
}

function palindromeSieve(array) {
  if (!array || array.length === 0) return [];
  let results = [];

  array.forEach(number => {
    let digits = number.toString().split('');
    let counts = Object.values(getDigitCounts(digits));
    let odds = 0;

    counts.forEach(count => {
      if (count % 2 === 1) {
        odds += 1;
      }
    })

    if (digits.length % 2 === 0) {
      if (odds === 0) results.push(number);
    } else {
        if (odds === 1) results.push(number);
      }
    })

  return results;
}

console.log(palindromeSieve([443, 12, 639, 121, 3232]));   // [443, 121, 3232]
console.log(palindromeSieve([]));   // []
console.log(palindromeSieve());   // []
console.log(palindromeSieve([1234, 1235]));   // []
console.log(palindromeSieve([1010, 10002, 50066, 30330, 20420]));   // [1010, 50066, 30330, 20420]
console.log(palindromeSieve([112, 330, 501, 601, 552]));   // [112, 330, 552]
console.log(palindromeSieve([100100, 42000042, 420030042]))