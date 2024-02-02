// Write a Function named `myForEach` that is similar to the built-in
// [Array.prototype.forEach] method

// - The Function should take an array and another Function as arguments.
// - The Function passed to `myForEach` should reassign a variable in the outer
//   scope.

// For instance, in the code fragment below, the Function passed to `myForEach`
// reassigns the `min` variable.

/*
For each element in a list, perform an some sort of action.
*/

function myForEach(array, callback) {
  for (let i = 0; i < array.length; i += 1) {
    callback(array[i], i, array);
  }

  return undefined;
}

let min = Infinity;
let getMin = value => (min = value <= min ? value : min);
myForEach([4, 5, 12, 23, 3], getMin);
console.log(min);