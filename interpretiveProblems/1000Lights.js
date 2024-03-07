// 1000 Lights
/*
You have a bank of switches before you, numbered from 1 to n. Every switch is
connected to exactly one light that is initially off. You walk down the row of
switches and toggle every one of them. You walk back to the beginning of the row
and start another pass. On this second pass, you toggle switches 2, 4, 6, and so
on. On the third pass, you go back to the beginning again, this time toggling
switches 3, 6, 9, and so on. You continue to repeat this process until you have
gone through n repetitions.

Write a program that takes one argument—the total number of switches—and returns
an array of the lights that are on after n repetitions.

P:

We want to create a function that accepts an integer as an argument, and returns
an array of integers, where each integer represents a light switch that is left
on. Initially, each light switch is off. On the first pass through the switches,
every light is toggled. On the second pass, the switches 2, 4, and 6 are
toggled. On the third pass, the switches 3, 6, and 9 are toggled. This process
is repeated until `n` repetitions have been eprformed.

Rules:
1. Assume that all integers will be positive.
2. If the input array is empty, return an empty array.
3. If no arguments are provided, return `undefined`.
4. Assume that `n` will always be greater than `0`.
5. There will always be at least one light left on.
6. Assume that the array will only ever contain integers.
7. There is no max to `n`.

Data Structures:

Input: Number
Intermediate: Array
Output: Array of numbers

-- Modelling/Algorithm:

Pattern => each number in the returned array is a perfect square

Declare and initialize `lightsOn` to an empty collection

Iterate from 1 to `n`
- Check if the current number is a perfect square
  - To check if it's a perfect square, find the square root, and modulo by 1
    - If the returned value is a whole number, it's a perfect square
    - Push the perfect square into `lightsOn`

Return `lightsOn`
*/
function checkForPerfectSquare(number) {
  return Math.sqrt(number) % 1 === 0;
}

function lightsOn(switches) {
  let lightsOn = [];

  for (let i = 1; i <= switches; i += 1) {
    if (checkForPerfectSquare(i)) lightsOn.push(i);
  }

  return lightsOn;
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]