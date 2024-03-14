// Hall Monitor 2

// A floor plan is arranged as follows:

// You may freely move between rooms 1 and 2.
// You may freely move between rooms 3 and 4.
// However, you can enter the hallway to move between rooms 2 and 4

// Create a function that validates whether the route taken between rooms is
// possible. The hallway will be given as the letter "H".

// A route may begin or end in any room (including the hallway).
// All inputs are either numbers 1-4 or the letter "H".
// No rooms will repeat.

// -------------------------------
// |         |         |         |
// |    1    |    2    |         |
// |_________|_________|         |
//                     |         |
//                     |    H    |
//                     |         |
// --------------------|         |
// |         |         |         |
// |    3    |    4    |         |
// |_________|_________|_________|
/*
P:

We want to create a function that accepts an array as an argument. Each element
in the array will represent a room number or the hallway in a floor plan. The
function should return a boolean -- `true` if the route taken between rooms is
possible and `false` if not. You can only access the hallway from rooms 2 and 4.

Rules:
1. Assume that the given array will only contain valid room numbers and 'H'
2. You can only access the hallway from rooms 2 and 4.
3. No rooms will repeat, i.e., `1` will never be followed by `1` in the given
   array.
4. You can start in any room including the hallway.
5. You can only traverse from rooms 2 to 4 through the hallway, you cannot go
   directly to 4 from 2 and vice versa.
6. You cannot go directly from 1 to 3 and vice versa.
7. The input array will always have at least two rooms
8. Assume the letter `'H'` will always be capitalized
9. Can end in any room, the path just has to be valid.

Data Structures:
I: Array of numbers and strings
Intermediate: Array, looping structure
O: Boolean

-- Modelling:

I: [1, 2, "H", 4, 3]
O: true

In order for the path to be valid, the following must be true:
- 2 must always follow 1
- 1 or 'H' must always follow 2
- 2 or 4 must always follow 'H'
- 3 or 'H' must always follow 4
- 4 must always follow 3

We can create arrays that house the valid moves after each room 

validAfter1 => [2]
validAfter2 => [1, 'H']
validAfterH => [2, 4]
validAfter3 => [4]
validAfter4 => [3, 'H']

Iterate through the chars of the given array
- Use an `if` statement to determine which char we're working with
  - Check to see if the char after is valid using the previous collections
    - If it is, go to the next iteration

If iteration completes return `false`

Alternative Solution:

Can we solve this using an Object?

Say we had an object, with each room as a key, and the values as the valid rooms
after the key

Initialize `validPaths` to an Object
- Set each room as a key, and the value to an array containing the valid paths
  from each room

=>
{
  1: [2],
  2: [1, 'H'],
  3: [4],
  4: [3, 'H'],
  'H': [2, 4]
}

Initialize `status` to `true`

Iterate over the array of rooms
- If the current index is the last index in the array, do nothing.
- If the status is `false`, go to the next iteration.
  - Otherwise, use the current char to reference a key in `validPaths`
    - Check to see if char at the index position one ahead of the current index
      is contained in the array referenced by the property value
      - If it isn't set the status to `false`, `true` otherwise

Return `status`

-- Algorithm:

Initialize `validAfter1` to an array containing the integer `2`
Initailize `validAfter2` to an array containing the integer `1` and the string
`'H'`
Initialize `validAfterH` to an array containing the integers `2` and `4`
Initialize `validAfter3` to an array containing the integer `4`
Initialize `validAfter4` to an array containing the interger `3` and the string
`'H'`

Iterate through the given array
- If the index is equal to the array length - 1
  - Return `true`
- Check the current char on iteration
  - If it's `1`
    - Check to see if the next char in the array is included in `validAfter1`
  - If it's `2`
    - Check to see if the next char is in `validAfter2`
  - If it's `H`
    - Check if next char is in `validAfterH`
  - If it's `3`
    - Check if next char is in `validAfter3`
  - If it's `4`
    - Check if next char is `validAfter4`
  - If any of these checks do not pass, return `false`
*/
// function possiblePath(rooms) {
//   let validAfter1 = [2];
//   let validAfter2 = [1, 'H'];
//   let validAfterH = [2, 4];
//   let validAfter3 = [4];
//   let validAfter4 = [3, 'H'];

//   for (let idx = 0; idx < rooms.length; idx += 1) {
//     if (idx === rooms.length - 1) return true;
//     if (rooms[idx] === 1) {
//       if (validAfter1.includes(rooms[idx + 1])) continue;
//       return false;
//     } else if (rooms[idx] === 2) {
//       if (validAfter2.includes(rooms[idx + 1])) continue;
//       return false;
//     } else if (rooms[idx] === 3) {
//       if (validAfter3.includes(rooms[idx + 1])) continue;
//       return false;
//     } else if (rooms[idx]=== 4) {
//       if (validAfter4.includes(rooms[idx + 1])) continue;
//       return false;
//     } else if (rooms[idx] === 'H') {
//       if (validAfterH.includes(rooms[idx + 1])) continue;
//       return false;
//     }
//   }

//   return true;
// }

function possiblePath(rooms) {
  const VALID_PATHS = {
    1: [2],
    2: [1, 'H'],
    3: [4],
    4: [3, 'H'],
    'H': [2, 4]
  }

  let status = true;

  rooms.forEach((room, idx) => {
    if (idx === rooms.length - 1) return;
    if (status === false) {
      return;
    } else {
      status = VALID_PATHS[room].includes(rooms[idx + 1]);
    }
  });

  return status;
}

console.log(possiblePath([1, 2, "H", 4, 3])); // true
console.log(possiblePath(["H", 1, 2])); // false
console.log(possiblePath([4, 3, 4, "H", 4, "H"])); // true