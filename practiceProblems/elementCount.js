// Count How Many Times an Element is Repeated

//  Given an array, create a function that returns an object detailing how many
//  times each element was repeated. Sort the object by value in descending
//  order.

/*
P:

Create a function that accepts an array as an argument, and returns an object
with each array element as a key, and the number of times it occurs in the array
as the value. The array elements can be any data type. The Object should be
sorted by the value in descending order.

Rules:
1. The keys in our Object should be the elements of the array, and the values
   the number of times it occurs in the array.
2. The array elements can be anything.
3. If the given array is empty, return an empty object
4. Treat strings as case insensitive, when returned in the Object, the strings
   should be downcased
5. Elements can be anything including `null`, `Infinity` and `NaN`, but
   excluding things like Objects and Arrays.
6. Assume that the given argument will always be an array.
7. If provided no arguments, return `No argument provided.`
8. Sort order for the items that have the same count does not matter

Data Structures:
I: Array
Intermediate: Array, Object
O: Object

-- Modelling:
I: ["cat", "dog", "cat", "cow", "cow", "cow"]
O: { cow: 3, cat: 2, dog: 1 }

Create a new obj
=> {}

Iterate through array
=> First element: "cat"

Check if the element exists as a key in new object
=> it doesn't

Create a key-value pair with the element as the key and the value set to 1

Repeat this, and if the element does exist as a key, increment the value by 1

Make sure to downcase the strings before we check if it exists as a key

-- Algorithm:

Initialize `charCounts` to an empty Object

Iterate through the given array
- If the current element is a string
  - Downcase the string
- Check to see if the current element exists as a key within `charCounts`
  - If it doesn't, set the element as a key, and it's value to 1
  - If it does, increment the value by 1

Get the entries from `charCounts` and store in a collection
- Sort this collection based off the `count` value in descending order
- Convert the collection of entries back into a Object
- Return the resulting Object
*/
function countRepetitions(array) {
  if (!array) return "No argument provided.";
  if (array.length === 0) return {};

  let charCounts = {};

  array.forEach(item => {
    if (typeof(item) === 'string') item = item.toLowerCase();
    if (charCounts[item]) {
      charCounts[item] += 1;
    } else {
      charCounts[item] = 1;
    }
  })

  let entries = Object.entries(charCounts).sort((a, b) => b[1] - a[1]);
  return Object.fromEntries(entries);
}

console.log(countRepetitions(["cat", "dog", "cat", "cow", "cow", "cow"])); 
// { cow: 3, cat: 2, dog: 1 }
// console.log(countRepetitions([1, 2, 1, 3, 4, 1, 5])); 
// // { 1: 3, 2: 1, 3: 1, 5: 1}
console.log(countRepetitions([NaN, Infinity, Infinity, NaN, 'c', 'C', 'string', 250])); 
// { Infinity: 2, NaN: 2, 'c': 2, 'string': 1, 250: 1}
console.log(countRepetitions(['STRING', 'stRing', 1, 1, 1, NaN, 'two'])); 
// { 1: 3, 'string': 2, NaN: 1, 'two': 1}
console.log(countRepetitions([])); // {}
console.log(countRepetitions()); // No argument provided.