// Simplify an Object by Two Properties

// You were tasked with making a list of every makeup item your local pharmacy
// had in stock. You created a very long array of each item, with each element
// having both a name and brand property. Now you're looking to simplify the
// list by combining duplicate items, and adding a count property to everything.

// Notes
// There will always be one or more element in the given array.
// Each element will always have a brand and name property.
// All duplicates will be displayed in order.

/*
P:

We want to create  a function that accepts an array of Objects as the argument.
The array will contain duplicate objects (objects that contain the same
properties and values). Our function should return an array containing only one
of each unique Object, with an added `count` property that has a value of the
total number of times that Object appears in the given array.

Rules:
1. There will always be one or more elements in the given array.
2. Each Object will always have a brand and name property.
3. All duplicates will be displayed in order.
4. The Object properties will always have string values.
5. The strings are case sensitive. A brand name of `NARS` is not the same as
   `nars`. The same goes for the product name.
6. The minimum count for each object will be 1.
7. The value of `count` should be a whole number.
8. Maintain the order in which the Objects first appear.
9. Assume you'll always receive an argument.
10. Assume the values for the `name` and `brand` properties will not be empty
    strings.

-- Modelling:

I: 
[
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "Urban Decay", name: "Naked Honey Pallete" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" }
]

O:
[
  { brand: "NARS", name: "Cosmetics Voyageur Pallete", count: 2 },
  { brand: "Urban Decay", name: "Naked Honey Pallete", count: 1 },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick", count: 3 }
])

Set `currentObj` to the first Object in the given array

Iterate through the array
- Set counter to 1
- Check to see if the current object has matching brand and name properties
  - If they match, increment `count` by 1 and move onto the next iteration
  - If they don't match
    - Add a property `count` to `currentObject` with the current value of
      `counter`
    - Push that object into an array
    - Reassign counter to 1
    - Reassign `currentObject` to the current Object on iteration

counter => 1
currentObj => { brand: "NARS", name: "Cosmetics Voyageur Pallete" }

Iterate though array through array starting at index 1

First iteration => { brand: "NARS", name: "Cosmetics Voyageur Pallete" }

=> matching name and brands
=> increment counter by 1

counter = 2
Second iteration => { brand: "Urban Decay", name: "Naked Honey Pallete" }

=> no match on brand and name
=> Push currentObj into an array with new `count` property with a value of
`counter`
=> Set `counter` to 1
=> set `currentObj` to current object on iteration

We will need a check at the beginning of iteration to see if the current index
is equal to the length of the array - 1. And if it is, perform the same checks
as above.

Data Structures:

Input: Array of Objects
Intermediate: Array, some sort of looping/iteration structure
Output: Array of Objects

-- Algorithm:

Initialize `currentObject` to the Object at index 0 of the given array
Initailize `simplifiedList` to an empty collection
Initialize `counter` to 1

Create a slice of the given array, starting at index 1
- Iterate through this slice of the array and its indices
  - If the current index is equal to the given array length - 1
    - Check to see if the `brand` and `name` property values match the values of
      `currentObject`
      - If there is a match, increment `counter` by 1, add a `count` property to
        `currentObject` and set to `counter`, and push the object into
        `simplifiedList`
      - If there is no match, add a `count` property to the current object and
        set the value to `1`
        - Push the Object into `simplifiedList`
  - Otherwise, perform the following:
    - Check for matching values of the `brand` and `name` properties
      - If there is a match, increment `counter` by 1
    - If there is no match
      - Add a `count` property to `currentObject` and set the value to `counter`
      - Push `currentObject` into `simplifiedList`
      - Set `counter` to 1
      - Set `currentObject` to the current Object on iteration

Return `simplifiedList`
*/
function simplifyList(list) {
  let simplifiedList = [];
  let currentObj = list[0];
  let counter = 1;
  
  list.slice(1).forEach((obj, idx) => {
    if (idx === (list.length - 2)) {
      if (obj.brand === currentObj.brand && obj.name === currentObj.name) {
        currentObj.count = counter + 1;
        simplifiedList.push(currentObj);
      } else {
        let current = obj;
        currentObj.count = counter;
        current.count = 1;
        simplifiedList.push(currentObj);
        simplifiedList.push(current);
      }
    } else {
      if (obj.brand === currentObj.brand && obj.name === currentObj.name) {
        counter += 1;
      } else {
        currentObj.count = counter;
        simplifiedList.push(currentObj);
        counter = 1;
        currentObj = obj;
      }
    }
  })

  return simplifiedList;
}

console.log(simplifyList([
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "Urban Decay", name: "Naked Honey Pallete" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" }
]));

// [
//   { brand: "NARS", name: "Cosmetics Voyageur Pallete", count: 2 },
//   { brand: "Urban Decay", name: "Naked Honey Pallete", count: 1 },
//   { brand: "Stila", name: "Stay All Day Liquid Lipstick", count: 3 }
// ])

console.log(simplifyList([
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "nars", name: "Cosmetics Pallete" },
  { brand: "Urban Decay", name: "Naked Honey Pallete" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "STILA", name: "Liquid Lipstick" }
]));

// [
//   { brand: "NARS", name: "Cosmetics Voyageur Pallete", count: 1 },
//   { brand: "nars", name: "Cosmetics Pallete", count: 1 },
//   { brand: "Urban Decay", name: "Naked Honey Pallete", count: 1 },
//   { brand: "Stila", name: "Stay All Day Liquid Lipstick", count: 2 },
//   { brand: "STILA", name: "Liquid Lipstick", count: 1 }
// ])

console.log(simplifyList([
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "NARS", name: "cosmetics voyageur pallete" },
  { brand: "Urban Decay", name: "Naked Honey Pallete" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "stay all Day liquid lipstick" }
]));

// [
//   { brand: "NARS", name: "Cosmetics Voyageur Pallete", count: 1 },
//   { brand: "NARS", name: "cosmetics voyageur pallete", count: 1 },
//   { brand: "Urban Decay", name: "Naked Honey Pallete", count: 1 },
//   { brand: "Stila", name: "Stay All Day Liquid Lipstick", count: 2 }
//   { brand: "Stila", name: "stay all Day liquid lipstick", count: 1 },
// ])