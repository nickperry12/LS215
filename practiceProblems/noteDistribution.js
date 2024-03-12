// Get Notes Distribution

// Create a function that takes an array of students and returns an object
// representing their notes distribution. Keep in mind that all invalid notes
// should not be counted in the distribution. Valid notes are: 1, 2, 3, 4, 5

/*
P:

We want to create a function that accepts two arguments as the arguments. The
objects contains student data -- their names and their notes. The function
should return an an object that contains the number of valid notes counted from
each student. The valid notes are the numbers 1, 2, 3, 4 and 5.

Rules:
1. The valid notes are the numbers 1, 2, 3, 4 and 5
2. The given array will always contain at least one Object
3. Assume that you will only be given an array of Objects as an argument
4. The notes will always be numbers, won't have to worry about strings
5. It is possible that you will given either `null` or no argument, in which
   case, return the string "Invalid input."
6. The returned object should only contain key-value pairs for which there was a
   valid note. If the a valid note does not appear in the student's notes, don't
   add it as a key, i.e., that key should not exist within the returned Object.
7. It's possible that the notes array in the objects will be empty.
8. If there are valid notes at all, return an empty object.
9. The negative of a valid number does not count as a valid number.
10. It's possible that there will be more than two students in the given
    argument

Data Structures:

Input: Array of Objects
Intermediate: Array, Object
Output: Object

-- Modelling:

I:
[
  {
    "name": "Steve",
    "notes": [5, 5, 3, -1, 6]
  },
  {
    "name": "John",
    "notes": [3, 2, 5, 0, -3]
  }
]

O:
 {
  5: 3,
  3: 2,
  2: 1
}

Iterate through the given array
- Concatenate the arrays that are paired with the notes keys

=> [5, 5, 3, -1, 6] + [3, 2, 5, 0, -3]
=> [5, 5, 3, -1, 6, 3, 2, 5, 0, -3]

Filter out the valid notes

[5, 5, 3, 3, 2, 5,]

Store the numbers as keys in a new object with the counts as keys

-- Algorithm:

Initialize `notes`

Iterate through the given array of student data
- Grab the arrays assigned to the `notes` keys
  - Concatenate each array within each nested Object
    - Assign the resulting array to `notes`

Initialize `validNotesArray`
- Filter out the numbers `1, 2, 3, 4, 5` from the `notes` array
- Place into a new array and assign to this variable
- Sort the array from high to low

Initialize `validNotes`
- Iterate through `validNotesArray`
  - If the current number on iteration exists as a key within `validNotes`
    - Increment the value by 1
  - If it does not exist, set the value to 1

Return `validNotes`
*/
const DISTRIBUTION_ONE = [
  {
    'name' : 'Nick',
    'notes' : [1, 1, 0, 9, 8, 4, 5]
  },
  {
    'name' : 'Rylea',
    'notes' : [5, 5, 3, 0, 4, 4, 1]
  },
  {
    'name' : 'AJ',
    'notes' : [5, 5, 4, 1, 1, 3, 2, 7]
  }
];
const getNotesDistribution = function getNotes(array) {
  let validNotes = [1, 2, 3, 4, 5];

  let notes = array.reduce((accumulator, object) => {
    return accumulator.concat(object.notes);
  }, [])
                   .filter(note => validNotes.includes(note));
  let notesObj = {};
  
  notes.forEach(note => {
    if (notesObj[note]) {
      notesObj[note] += 1;
    } else {
      notesObj[note] = 1;
    }
  })

  return notesObj;
}

console.log(getNotesDistribution([
  {
    "name": "Steve",
    "notes": [5, 5, 3, -1, 6]
  },
  {
    "name": "John",
    "notes": [3, 2, 5, 0, -3]
  }
]));

// Returns:
//  {
//   5: 3,
//   3: 2,
//   2: 1
// }

console.log(getNotesDistribution(DISTRIBUTION_ONE));

// returns
// {
//   1 : 5,
//   2 : 1,
//   3 : 2,
//   4 : 4,
//   5 : 5
// }