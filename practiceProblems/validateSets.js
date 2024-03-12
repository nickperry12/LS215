// Validating a Set in the Set Game
// In the game Set, three cards form a set if each of the cards are identical or
// completely different for each of the four properties. All three cards must:

// Have the same color or different colors.
// Have the same number or different numbers.
// Have the same shades or different shades.
// Have the same shape or different shapes.
// The four properties are:

// Colors: red, purple, green
// Numbers: 1, 2, 3
// Shades: empty, lined, full
// Shapes: squiggle, oval, diamond
// Here, a set is represented by an array containing three cards. Each card is
// represented by an object of properties and values. Write a function that
// determines whether three cards constitute a valid set.

// Here is an example of a set:
// [
//   { color: "red", number: 1, shade: "empty", shape: "squiggle" },
//   { color: "red", number: 2, shade: "lined", shape: "diamond" },
//   { color: "red", number: 3, shade: "full", shape: "oval" }
// ]

// "Same" properties: color
// "Different" properties: numbers, shading and shapes

// The following is not a set:
// [
//   { color: "red", number: 1, shade: "empty", shape: "squiggle" },
//   { color: "red", number: 2, shade: "lined", shape: "diamond" },
//   { color: "purple", number: 3, shade: "full", shape: "oval" }
// ]

// Colors are not all identical, but not all different.
/*
P:

We want to create a function that accepts an array of Objects. Each object
represents a card with 3 properties: a color, a number, a shade and a shape.
This function should return a boolean, `true` or `false`, dependent on whether
we have a valid set of cards in the given array. In order to have a valid set,
our cards must have the following:

The same or all different colors
The same or all different numbers
The same or all different shades
The same or all different shapes

The four properties are:

Colors: red, purple, green
Numbers: 1, 2, 3
Shades: empty, lined, full
Shapes: squiggle, oval, diamond

Rules:
1. Each group of cards has exactly 3 cards
2. To have a valid set it must satisfy the above conditions
3. Assume that the given argument will always be an array
4. If no argument is given, return "Invalid input."
5. Assume that each property will be a valid property of the card.
6. If we have a valid set, return `true`, `false` if not
7. Assume that the given array will always contain exactly 3 cards.
8. Assume that the given array will always contain Objects.

Data Structures:
I: Array of Objects
Intermediate: Array
O: Boolean

-- Modelling:

I: [
  { color: "green", number: 1, shade: "empty", shape: "squiggle" },
  { color: "green", number: 2, shade: "empty", shape: "diamond" },
  { color: "green", number: 3, shade: "empty", shape: "oval" }
]

O: true

Iterate through the collection of cards, and transform each object into a list
that contains the values

=>
[
  [green, 1, empty, squiggle],
  [green, 2, empty, diamond],
  [green, 3, empty, oval]
]

From there, we need to determine they are valid by seeing if they satisfy the
above conditions.

We can use helper functions that check each property. The function should
evaluate the property values and determine whether they're all the same.

To make it easier, we can group all the property values into their own
collections.

=>

[
  [green, green, green], => all the same
  [1, 2, 3], => all different
  [empty, empty, empty], => all the same
  [squiggle, diamond, oval] => all different
]

-- Algorithm:

Iterate through the collection of cards
- Transform each card into a collection of their values
  - Group each property value together into their own collection

Iterate over the new collection of grouped property values
- Check the current collection for the following
  - If the all the values are the same as the first value in the collection
    - If they aren't, check to see they are all different
  - If either of these conditions are satisfied, move onto the next group of
    values and perform the same check
  - If each collection satisfies the rules, return `true`
  - If any one of the collections does not satisfy the check, exit iteration and
    `return` false
*/
// Groups all property values together
function transpose(array) {
  return array[0].map((col, colIdx) => {
    return array.map(row => row[colIdx]);
  });
}

function getCardProperties(cards) {
  return cards.map(card => Object.values(card));
}

function isSet(cards) {
  let cardProperties = transpose(getCardProperties(cards));

  for (let i = 0; i < cardProperties.length; i += 1) {
    let properties = cardProperties[i];
    let first = properties[0];
    let second = properties[1];
    let third = properties[2];

    if (properties.every(property => property === first)) {
      continue;
    } else if (first !== second &&
               first !== third && 
               second !== third) {
      continue;
    } else {
      return false;
    }
  }

  return true;
}



console.log(isSet([
  { color: "green", number: 1, shade: "empty", shape: "squiggle" },
  { color: "green", number: 2, shade: "empty", shape: "diamond" },
  { color: "green", number: 3, shade: "empty", shape: "oval" }
])); // true

console.log(isSet([
  { color: "purple", number: 1, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 1, shade: "full", shape: "oval" }
])); // true

console.log(isSet([
  { color: "purple", number: 3, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
])); // false

console.log(isSet([
  {color: "red", number: 1, shade: "empty", shape: "squiggle"}, 
  {color: "red", number: 2, shade: "lined", shape: "diamond"}, 
  {color: "purple", number: 3, shade: "full", shape: "oval"}
])); // false