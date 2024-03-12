// Splitting Objects Inside an Array
// You bought a few bunches of fruit over the weekend. Create a function that
// splits a bunch into singular objects inside an array.
/*
P:

We want to create a function that accepts an array of Objects as the argument,
and splits the Object into multiple objects based on the number referenced in
the `quantity` key.

Rules:
1. We want to split each single object into multiple objects with the same
   key-value pairs.
   1a. The amount of objects we're splitting them into will be based on the
   value contained in the `quantity` key.
2. The quantity key will always have a number value.
3. The number value will always be a whole number and will always be greater
   than 0.
4. The value of `quantity` will never be negative.
5. If the given array is empty, return an empty array.
6. It's possible to receieve either `null` or no arguments, return "Invalid
   input." if that is the case.
7. The `name` key will always have a string value.
   7a. It may be upcased or downcased, but it is irrelevant to the problem.
8. The given array may contain multiple objects.
9. We want to return the multiple objects in an array.
10. We are returning a new array, not mutating it.
11. Maintain the order in which the objects appear in the given array.
12. If there are identical objects with the same `name` value, treat it as an
    individual object.

Data Structures:
I: Array of Objects
Intermediate: Array, Object
O: Array of Objects

-- Modelling:
I: { name: "grapes", quantity: 2 }
O: 
[
  { name: "grapes", quantity: 1 },
  { name: "grapes", quantity: 1 }
]

Iterate through the given array
- take the quantity value and use that determine how many times we're going to
  create a new object
  - the new object should contain the same key-value pairs, with the `quantity`
    key set to a value of 1
- push each object into a new array

-- Algorithm:

Intilize `split` to an empty collection

Iterate through the given array
- Initialize `num` to the value of the `quantity` key of the current Object
- Repeat the following `num` amount of times
  - Create an object with the same key-value pairs as the current object,
    setting the `quantity value to `1`
  - Push the object into `split`

Return `split`

*/
const splitBunches = function splitBunches(array) {
  if (!array) return "Invalid input.";
  if (array.length === 0) return [];
  let split = [];

  array.forEach(obj => {
    let num = obj.quantity;
    for (let i = 1; i <= num; i += 1) {
      let newObj = { name: obj.name, quantity: 1 };
      split.push(newObj);
    }
  });

  return split;
}

console.log(splitBunches([
  { name: "grapes", quantity: 2 }
]));
// Returns:
// [
//   { name: "grapes", quantity: 1 },
//   { name: "grapes", quantity: 1 }
// ]
console.log(splitBunches([
  { name: "grapes", quantity: 2 },
  { name: "apples", quantity: 4},
  { name: "oranges", quantity: 2}
]));
// // Returns:
// // [
// //   { name: 'grapes', quantity: 1},
// //   { name: 'grapes', quantity: 1},
// //   { name: 'apples', quantity: 1},
// //   { name: 'apples', quantity: 1},
// //   { name: 'apples', quantity: 1},
// //   { name: 'apples', quantity: 1},
// //   { name: 'oranges', quantity: 1},
// //   { name: 'oranges', quantity: 1},
// // ]
console.log(splitBunches([
  { name: "grapes", quantity: 2 },
  { name: "apples", quantity: 4},
  { name: "ORANGES", quantity: 2}
]));
// // Returns:
// // [
// //   { name: 'grapes', quantity: 1},
// //   { name: 'grapes', quantity: 1},
// //   { name: 'apples', quantity: 1},
// //   { name: 'apples', quantity: 1},
// //   { name: 'apples', quantity: 1},
// //   { name: 'apples', quantity: 1},
// //   { name: 'ORANGES', quantity: 1},
// //   { name: 'ORANGES', quantity: 1},
// // ]
console.log(splitBunches([
  { name: "grapes", quantity: 2 },
  { name: "apples", quantity: 4},
  { name: "ORANGES", quantity: 2},
  { name: "grapes", quantity: 2 }
]));
// // Returns:
// // [
// //   { name: 'grapes', quantity: 1},
// //   { name: 'grapes', quantity: 1},
// //   { name: 'apples', quantity: 1},
// //   { name: 'apples', quantity: 1},
// //   { name: 'apples', quantity: 1},
// //   { name: 'apples', quantity: 1},
// //   { name: 'ORANGES', quantity: 1},
// //   { name: 'ORANGES', quantity: 1},
// //   { name: 'grapes', quantity: 1},
// //   { name: 'grapes', quantity: 1}
// // ]
console.log(splitBunches([]));
// // Returns: [];
console.log(splitBunches(null));
// // Returns: Invalid input.
console.log(splitBunches());
// // Returns: Invalid input.