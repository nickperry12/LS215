// Super Strict Grading

// Given an object literal of student names and an array of their test scores
// over the semester, return a list of all the students who passed the course
// (in alphabetical order). However, there is one more thing to mention: the
// pass mark is 100% in everything!
/*
P:

We want to create a function that accepts an Object literal as the argument. The
Object contains student names as the key, and an array of their marks as the
value. They marks contained within the array are strings in the format of
`score/available marks`. The function should return an array containing the
names of the students who passed. A student must get 100% on all their scores to
get a pass.

Rules:
1. In order to pass, a student must have 100% on all of their scores
2. The returned array should be sorted by alphabetical order
3. Not all students will have the same amount of scores, but must still score
   100% in all the available scores to get a pass.
4. Students scores will not have the same total marks for their scores.
5. The scores will always be represented as strings.
6. Assume that there will always be at least one score in the array.
7. The total marks for each score will always be greater than 0.
8. It's possible for the student to get a `0` for their score.
9. If the given argument is an empty object, return an empty array.
10. If no students pass, return an empty array.
11. If you are given no argument or if the argument is null, return an empty
    array.
12. If there is more than one argument, ignore the excess.

Data Structures:

Input: Object literal
Intermediate: Array, Object
Output: Array of Strings

-- Modelling:

I:
{
  "John" : ["5/5", "50/50", "10/10", "10/10"],
  "Sarah" : ["4/8", "50/57", "7/10", "10/18"],
  "Adam" : ["8/10", "22/25", "3/5", "5/5"],
  "Barry" : ["3/3", "20/20"]
}

O: ["Barry", "John"]

Convert each key-val pair into an array
=> ["John", ["5/5", "50/50", "10/10", "10/10"]]

Iterate over the collection of entries
- Transform the current entries subarray at index 1
  - Iterate over each value in the subarray
    - Split the string at the `'/'`
      - Convert each string in the split collection to a number, divide the
        number at index 0 by the number at index 1, and multiply the result by
        100
      - Transform the current string in the collection to the resulting number

-- Algorithm:

Initialize `entries` to a collection of key-val pairs converted into an array
from the given Object

Iterate over the collection of entries
- Transform the current entries subarray at index 1
  - Iterate over each value in the subarray
    - Split the string at the `'/'`
      - Convert each string in the split collection to a number, divide the
        number at index 0 by the number at index 1, and multiply the result by
        100
      - Transform the current string in the collection to the resulting number
      - Repeat for all values in the subarray
    - Reassign each subarray at index 1 to this new subarray of numbers

Filter out the students with test scores that are all equal to 100
- Convert this collection of students and their scores back into an Object
  literal
  - Return the keys of this Object, sorted in alphabetical order
*/
function whoPassed(studentScores) {
  if (!studentScores) return [];
  if (Object.keys(studentScores).length === 0) return [];

  let entries = Object.entries(studentScores);

  entries.forEach(student => {
    let scores = student[1];
    scores = scores.map(score => {
      let nums = score.split('/');
      let totalScore = parseInt(nums[0]) / parseInt(nums[1]) * 100;
      return totalScore;
    })

    student[1] = scores;
  })

  let perfectScores = entries.filter(entry => {
    return entry[1].every(score => score === 100);
  })

  return Object.keys(Object.fromEntries(perfectScores)).sort();
}

console.log(whoPassed({
  "John" : ["5/5", "50/50", "10/10", "10/10"],
  "Sarah" : ["4/8", "50/57", "7/10", "10/18"],
  "Adam" : ["8/10", "22/25", "3/5", "5/5"],
  "Barry" : ["3/3", "20/20"]
})); // ["Barry", "John"]

console.log(whoPassed({
  "John" : ["5/5", "50/50", "10/10", "10/10"],
  "Sarah" : ["4/8", "50/57", "7/10", "10/18"],
  "Adam" : ["10/10", "25/25", "5/5", "5/5"],
  "Barry" : ["0/3", "0/20"]
})); // ["Adam", "John"]

console.log(whoPassed({
  "Clive" : ["0/10", "3/4", "2/22"]
})); // []

console.log(whoPassed({})); // []
console.log(whoPassed()); // []
console.log(whoPassed(null)); // []