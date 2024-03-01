// Create a function that returns which chapter is nearest to the page you're
// on. If two chapters are equidistant, return the chapter with the higher page
// number.
/*
P:

Write a function that accepts an object literal as the first argument and a
number as the second, with the number representing the current page you're on,
and returns the chapter to which you're closest to.

The object is going to contain key-value pairs, with the keys being the chapter
and the values being the page that chapter starts on.

Rules:

1. If two chapters are equidistant from the page you're on, return the chapter with the higher page number
2. Chapters can contain text and digits
3. Chapter keys will always be strings
4. The values will always be numbers
5. Values wil always be greater than 0
6. Object will always be populated with at least one key-value pair
7. We want to return the key of the chapter we're closest to
8. Assume we will always have at least 2 arguments, if we do receive more, ignore the excess
9. Assume that the first argument will always be an object literal
10. Assume the given number will always be a whole number


Questions to ask that I missed:

What if the given number is greater than the available chapter pages?
If there were more than two chapters with the same equidistance, which should we return?


Data Structures:

I: Object literal
Intermediate: 
O: String

-- Modelling:

I: "Chapter 1" : 1,
  "Chapter 2" : 15,
  "Chapter 3" : 37
},
10

O: "Chapter 2"

[1, 15, 37]
[9, 5, 27]

Idx 1 => smallest delta => 15

I: "New Beginnings" : 1,
  "Strange Developments" : 62,
  "The End?" : 194,
  "The True Ending" : 460
},
200

min => 999999
if current number is less than min => reassign min => find the index of the min
number in deltas

O: "The End?"

[1, 62, 194, 460]
[199, 138, 6, 260]

index 1 => smallest delta (138) => "The End?"

[1, 2000, 20000000000, 5] => get a copy this => sort from high to low => set min
to the value at index 0 =>
[20000000000, 2000, 5, 1]
Index 0 => 20000000000

nearestChapter({
  "Chapter 1a" : 1,
  "Chapter 1b" : 5
}, 
3
[1, 5]
[2, 2]

min => 2
Iterate through deltas => if the delta is equal to min => push the index into an
array => grab the index at the last position in the array => last position would
be array length - 1




-- Algorithm:

Declare and initialize `sortedPageNums` the sort values of the given object literal
- Sort from high to low

Declare and initialize `chapterNames` to the keys from the given object literal
Declare and initialize `pageNumbers` to all the values from the given object literal
Declare and initialize `deltas`
- Iterate through `pageNumbers` and subtract the given number from each number and convert it to the absolute
Declare and initialize `indices` to an empty array

Declare and initialize `min` to the value at index 0 of `sortedPageNums`

Iterate through `deltas`
- Comapre the current number to `min`
  - If it's lower, reassign `min` to the current number

Iterate through `deltas`
- If the current delta is equal to min, push the index into `indices`

Declare and initialize `minIndex`
- Set it to the length of `indices` minus 1
  - Use this index to find the chapter name in `chapterNames`
*/

function nearestChapter(book, currentPage) {
  let sortedPageNums = Object.values(book).sort((a, b) => b - a);
  let chapterNames = Object.keys(book);
  let pageNumbers = Object.values(book);
  let min = sortedPageNums[0];
  let indices = [];
  let deltas = pageNumbers.map(number => {
    return Math.abs(number - currentPage);
  });

  deltas.forEach(number => {
    if (number < min) {
      min = number;
    }
  });

  deltas.forEach((number, index) => {
    if (number === min) {
      indices.push(index);
    }
  })

  let minIndex = indices[indices.length - 1];

  console.log(chapterNames[minIndex]);
}

nearestChapter({
  "Chapter 1" : 1,
  "Chapter 2" : 15,
  "Chapter 3" : 37
}, 10) // "Chapter 2"


nearestChapter({
  "New Beginnings" : 1,
  "Strange Developments" : 62,
  "The End?" : 194,
  "The True Ending" : 460
}, 200) // "The End?"


nearestChapter({
  "Chapter 1a" : 1,
  "Chapter 1b" : 5
}, 3) // "Chapter 1b"

nearestChapter({
  "Chapter 1a" : 1,
  "Chapter 1b" : 5
}, 3, 265) // "Chapter 1b"