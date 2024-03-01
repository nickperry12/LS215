"use strict";
// Rotation Part 2
/*
Write a function that rotates the last n digits of a number. For the rotation,
rotate by one digit to the left, moving the first digit to the end.

P:

Create a function that accepts two integers as argument. The function should
rotate the last `n` digits of the first given number, i.e., if the second given
number is `1`, the last digit should be rotated, if the given number is 2,
rotate the positions of the last 2 numbers, and so on.
*/
function rotateRightmostDigits(num, n) {
  let unchangedDigits = num.toString().split('');
  let slicePoint = unchangedDigits.length - n;
  unchangedDigits = unchangedDigits.slice(0, slicePoint);
  let digitsToRotate = num.toString().split('')
  digitsToRotate = digitsToRotate.slice(slicePoint);

  digitsToRotate.push(digitsToRotate.shift());

  let rotated = unchangedDigits.concat(digitsToRotate).join('')
  return parseInt(rotated);
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917