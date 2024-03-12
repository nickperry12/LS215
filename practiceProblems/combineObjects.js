// Combine Two Objects Into One, Summing Like Values

// Take two objects with similar key values and combine them into a new object
// summing any values that belong to the same category.

// There's a married couple, Hank and his spouse Sheila. Hank works at a power
// plant making $70,000 a year, and Sheila is a teacher making $40,000 a year.
// They both earn rental income from separate rental properties, Hank will get
// $12,000 and Sheila $10,000. The new object will show their separate income
// but combine the rental income because it fits the same category.

// Arguments
// user1Income (Object) ⁠— an income object for user1
// user2Income (Object) ⁠— an income object for user2
// returns: A new object with like values combined

// Challenges
// They won't have the same number of key-value pairs.
// The return object must return the values ordered from lowest to highest so
// your answers can match the test answers.
/*
P:

We want to create a function that accepts two Objects as arguments, and returns
a single object that combines the key-value pairs. If the key-value pair exists
in both, combine the values and pair with a single key with the same name.

Rules:
1. We want to combine the two given objects into a single object.
2. If a key-value pair exists within both given objects, combine the values and
   pair with the given key.
3. The returned object must have the values ordered from lowest to highest.
4. The given objects won't have the same number of key-value pairs.
5. The values of the given objects will always be a number.
6. The values of the given objects will always be a whole number.
7. Assume that both ojects will always contain at least one key-value pair.
8. If neither objects share any key-value pairs, simply combine the key-value
   pairs of both objects into one object.
9. Assume that we'll always be given at least two arguments.
10. If we are given more than two arguments, ignore the excess.
11. Assume the given arguments will always be an Object.


Data Structures:

Input: Object x2
Intermediate: Array, Object
Output: Object

-- Modelling:

The first step would be to get a collection of keys of both objects

Iterate through the collection of keys and use it to populate a new object
- Check to see if the current key exists in the new object
  - If it doesn't, perform the following checks:
    - If it exists in both obj1 and obj2
      - If it does, add the key to the new object and the value as the summed
        value from obj1 and obj2
    - If it exists in obj1
      - If it does, add the key-value pair
    - If it doesn't exists in obj1, add the key-value pair from obj2

To get a sorted object from low to high
- Get the entries from the new object
  - Sort it based on the value of each subarrays index 1 position
- Reassign the object to the entries from this sorted array of entries

-- Algorithm:

Iterate through the collection of keys and use it to populate a new object
- Check to see if the current key exists in the new object
  - If it doesn't, perform the following checks:
    - If it exists in both obj1 and obj2
      - If it does, add the key to the new object and the value as the summed
        value from obj1 and obj2
    - If it exists in obj1
      - If it does, add the key-value pair
    - If it doesn't exists in obj1, add the key-value pair from obj2

To get a sorted object from low to high
- Get the entries from the new object
  - Sort it based on the value of each subarrays index 1 position
- Reassign the object to the entries from this sorted array of entries
*/
const user1 = {
  powerPlant: 70000,
  rental: 12000
}

const user2 = {
  teaching: 40000,
  rental: 10000
}

// becomes ➞ {
//   rental: 22000,   // The rental income is added together.
//   teaching: 40000,
//   powerPlant: 70000
// }

const test1User1Income = {
  softwareDeveloping: 70000,
  rental: 10000
};

const test1User2Income = {
  teaching: 40000,
  rental: 12000
};

// const test1Answer = {
//   rental: 22000,
//   teaching: 40000,
//   softwareDeveloping: 70000
// };

const test3User1Income = {
  softwareDeveloping: 70000,
  pizzaDeliverying: 6000,
  sellingGarlic: 6000,
  rental: 10000,
};

const test3User2Income = {
  rental: 12000,
  sellingGarlic: 32000,
};

// const test3Answer = {
//   pizzaDeliverying: 6000,
//   rental: 22000,
//   sellingGarlic: 38000,
//   softwareDeveloping: 70000,
// };

const sortedObject = function sortObject(object) {
  let entries = Object.entries(object);
  entries.sort((a, b) => a[1] - b[1]);
  return Object.fromEntries(entries);
}

const combinedObject = function combine(obj1, obj2) {
  let keys = Object.keys(obj1).concat(Object.keys(obj2));
  let combinedObject = {};

  keys.forEach(key => {
    if (!combinedObject[key]) {
      if (obj1[key] && obj2[key]) {
        combinedObject[key] = obj1[key] + obj2[key];
      } else if (obj1[key]) {
        combinedObject[key] = obj1[key];
      } else {
        combinedObject[key] = obj2[key];
      }
    }
  })

  return sortedObject(combinedObject);
}

console.log(combinedObject(user1, user2));
console.log(combinedObject(test1User1Income, test1User2Income));
console.log(combinedObject(test3User1Income, test3User2Income));