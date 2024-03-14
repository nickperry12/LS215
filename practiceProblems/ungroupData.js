// Ungroup Data in an Object

// You volunteered to help out teaching a preschool in your area! You were given
// an array of all students and some important data about them, grouped by their
// teacher. Create a function that will ungroup every student so you can look at
// their details individually.

/*
P: 

We want write a function that accepts an array as an argument. This array will
contain nested objects, which may contain arrays with a nested object as their
value. These nested objects represent teachers and their student's data. This
function should return an array with nested objects, that unpacks the data in
the given argument so that we may look at student data individually.

Rules:
1. The array may contain multiple nested objects.
2. Each nested object represents student data grouped by their teacher.
3. In the given argument, each nested object will have a `data` key, which
   contains another array of nested objects. Each nested object will represent a
   student and it's data.
4. Our goal is to return an array of Objects with each object reprsenting the
   data of an individual student.
5. Each nested Object in the return array should contain the same key-value
   pairs that appear in the given argument.
6. The given array will always contain at least one Object.
7. The Objects contained in the array will always have the following keys
   `teacher` and `data`.
8. The value for the `data` key will always be populated with an array of Objects.
9. There will always be data for at least one student in the `data` value.
10. Some students will have `allergy` data, only include this key-value pair in
    the return data if the student has allergies.
11. Some students will also have `age` data. Again, only include this for the
    students that have this data.


Data Structures:
I: Array of Objects (hashes)
Intermediate: Arrays, Objects
O: Array of Objects

-- Modeling:

Input: 
[{
  teacher: "Ms. Car",
  data: [{
     name: "James",
     emergencyNumber: "617-771-1082",
  }, {
     name: "Alice",
     alergies: ["nuts", "carrots"],
  }],
}, {
  teacher: "Mr. Lamb",
  data: [{
    name: "Aaron",
    age: 3
  }]
}]

Output:
[{
  teacher: "Ms. Car",
  name: "James",
  emergencyNumber: "617-771-1082",
}, {
  teacher: "Ms. Car",
  name: "Alice",
  alergies: ["nuts", "carrots"],
}, {
  teacher: "Mr. Lamb",
  name: "Aaron",
  age: 3,
}]

We want to unpack each of the students data, and return it individually in its
own object, and place that object into an array.

Iterate through the array of objects =>

First object in the given array:

[
  {
  teacher: "Ms. Car",
  data: 
    [
      {
        name: "James",
        emergencyNumber: "617-771-1082",
      }, 
      {
        name: "Alice",
        alergies: ["nuts", "carrots"],
      }
    ]
  }
]

On the first level of iteration, initialize an object to `studentData`
- Set the `teacher` to `obj.teacher`
- Iterate through `data`
  - Get the keys of the current object on second level of iteration
    - Set `studentData[key]` to the value of `data[key]`
- Push `studentData` into a resulting array

What we want return from this:

[
  {
    teacher: "Ms. Car",
    name: "James",
    emergencyNumber: "617-771-1802"
  }, 
  {
    teacher: "Ms. Car",
    name: "Alice",
    allergies: ["nuts", "carrots"]
  }
]

-- Algorithm:

Initialize `ungroupedData` to an empty array

Iterate through the given array
- Initialize `teacherName` to the value of the `teacher` key
- Initialize `studentData`, and place in a key-value pair that contains
  `teacher` with the value of `teacherName`
- Iterate through the array contained in `data`
  - Get the keys of the current object on iteration
    - Iterate through each key
      - Create a key for `studentData` using the current key on iteration, set
        the value to the value of `data[key]`
- Push the object into `ungroupedData`

Return `ungroupedData`
*/
function ungroupStudents(groupedData) {
  let ungroupedData = [];

  groupedData.forEach(teacherData => {
    let teacherName = teacherData.teacher;

    teacherData.data.forEach(student => {
      let studentData = {
        teacher: teacherName
      }
      Object.keys(student).forEach(key => {
        studentData[key] = student[key];
      })
      ungroupedData.push(studentData);
    })

  })

  return ungroupedData;
}

console.log(ungroupStudents([{
  teacher: "Ms. Car",
  data: [{
     name: "James",
     emergenceNumber: "617-771-1082",
  }, {
     name: "Alice",
     alergies: ["nuts", "carrots"],
  }],
}, {
  teacher: "Mr. Lamb",
  data: [{
    name: "Aaron",
    age: 3
  }]
}]));

// Returns:

// [{
//   teacher: "Ms. Car",
//   name: "James",
//   emergencyNumber: "617-771-1082",
// }, {
//   teacher: "Ms. Car",
//   name: "Alice",
//   alergies: ["nuts", "carrots"],
// }, {
//   teacher: "Mr. Lamb",
//   name: "Aaron",
//   age: 3,
// }]