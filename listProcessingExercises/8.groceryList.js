// Grocery List

/*
Write a function that takes a grocery list in a two-dimensional array and
returns a one-dimensional array. Each element in the grocery list contains a
fruit name and a number that represents the desired quantity of that fruit. The
output array is such that each fruit name appears the number of times equal to
its desired quantity.

In the example below, we want to buy 3 apples, 1 orange, and 2 bananas. Thus, we
return an array that contains 3 apples, 1 orange, and 2 bananas.

P:
We want to create a function that takes a 2D array as an argument. In each
subarray contains a food item and an integer representing the number of that
item that is needed. Our function should return a 1D array containing the food
item appearing the number of times as the integer in its subarray.

-- Modeling/Algorithm:

Iterate through the given array
- Set `counter` to index 1 of the subarray
- Push the string at index 0 into a collection, then decrement `counter` by 1
  - Repeat until `counter` is 0
- Return the new collection of strings
*/
function buyFruit(list) {
  let newList = [];

  list.forEach(item => {
    let counter = item[1];
    while (counter > 0) {
      newList.push(item[0]);
      counter -= 1;
    }
  })

  return newList;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]