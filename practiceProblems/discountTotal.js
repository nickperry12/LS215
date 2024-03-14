// 25% Discount on Most Expensive Item

// You want to introduce a discount for your online store. Every customer gets a
// 25% discount on the most expensive item in the shopping cart. The discount
// will be calculated on just one item, even if the customer buys more than one
// of the most expensive item.

// Create a function that takes an object and returns the total price after
// discount.

/*
P:

We want to create a function that accepts an arry of Objects as the argument.
The array represents a customers shopping cart, and each Object represents an
item in the card, with the properties `name`, `quantity` and `price`. The
function should apply a 25% discount to exactly ONE of the most expensive items,
and then return the total price for everything in the cart.

Rules:
1. We only apply a 25% discount to exactly ONE of the most expensive items in
   the cart.
2. The price reflects the cost of one item, not all items of that type.
3. Quantity will always be at least 1 or greater.
4. It's possible for the price to be a decimal point number.
5. The decimal point numbers should always be rounded to two decimals.
6. The total value represents the sum of each items cost along with the 25%
   discount on ONE of the most expensive items.
7. Assume the given price will always be a number type.
8. The price will always be greater than 0.
9. The given array is empty, return `0`.
10. Will not be dealing with sparse arrays.
11. If there is only one item, return the product of the price * 25%, rounded to
    two decimal places.

Data Structures:
I: Array of Objects
Itermediate: Array, Object
O: Number

-- Modelling:

I: [
  { name: "Hat", quantity: 1, price: 51.50 },
  { name: "Shoes", quantity: 1, price: 100 },
  { name: "PS5", quantity: 4, price: 750.10 },
  { name: "Pack of Pencils", quantity: 2, price: 10.99 }
]

O: 2429.41

The first thing we want to do is get a list of all the prices
- Iterate through each object, push the value of `price` into a collection
  - Repeat repeat this for each price according to the quantity amount

[750.1, 750.1, 750.1, 750.1, 51.5, 51.5, 100, 10.99, 10.99]

Iterate over this collection
- If the index is 0
  - Transform the element to its value minus (.25 * value)
- Otherwise, return the original value

Then sum the array

-- Algorithm:
If the array size is 0, return 0

Initialize `prices` to an empty collection

Iterate through the given array
- Initialize `i`
  - Unitl `i` is greater than or equal to the `quantity` of the given object
    - Push the value of `price` into `prices`
- Repeat for each Object in the array

Sort `prices` in descending order

Iterate through `prices`
- If the index is `0`
  - Convert the element to it's value minus 25% of it's value
- Otherwise, leave the value as is

Sum `prices` and return the value rounded to two decimal places
*/
// function getPricesWithDiscount(cart) {
//   let prices = [];

//   cart.forEach(item => {
//     for (let i = 1; i <= item.quantity; i += 1) {
//       prices.push(item.price);
//     }
//   })

//   return prices.sort((a, b) => b - a)
//                 .map((price, index) => {
//                   if (index === 0) {
//                     return Math.round((price - (price * .25)) * 100) / 100;
//                   } else {
//                     return price;
//                   }
//                 });
// }

// function sumPrices(prices) {
//   let sum = prices.reduce((accum, current) => {
//     return accum + current;
//   }, 0);

//   return Math.round(sum * 100) / 100;
// }

// function twentyFiveOnOne(cart) {
//   if (cart.length === 0) return 0;
//   let prices = getPricesWithDiscount(cart);

//   return sumPrices(prices);
// }
function twentyFiveOnOne(cart) {
  if (cart.length === 0) return 0;
  let max = 0;
  let total = 0;

  cart.forEach(item => {
    if (item.price > max) max = item.price;
    total += (item.price * item.quantity);
  });

  let discount = (max * .25);
  return Math.round((total - discount) * 100) / 100;
}

console.log(twentyFiveOnOne([
  { name: "Iphone 20x", quantity: 1, price: 1350 },
  { name: "Samsung x30", quantity: 1, price: 1225 },
  { name: "Nokia 9250", quantity: 1, price: 800 },
  { name: "Tesla Model Y", quantity: 1, price: 72999 }
])); // 58124.25
console.log(twentyFiveOnOne([
  { name: "Hat", quantity: 1, price: 51.50 },
  { name: "Shoes", quantity: 1, price: 100 },
  { name: "PS5", quantity: 1, price: 750.10 },
  { name: "Pack of Pencils", quantity: 2, price: 10.99 }
])); // 736.06
console.log(twentyFiveOnOne([
  { name: "Floor mat", quantity: 1, price: 30 },
  { name: "Blinds", quantity: 1, price: 300 },
  { name: "Stove", quantity: 1, price: 750 },
  { name: "Cutlery set", quantity: 1, price: 60 }
])); // 952.50
console.log(twentyFiveOnOne([
  { name: "Iphone 20x", quantity: 1, price: 1350 },
  { name: "Samsung x30", quantity: 1, price: 1225 },
  { name: "Nokia 9250", quantity: 5, price: 800 },
  { name: "Tesla Model Y", quantity: 1, price: 72999 }
])); // 61324.25
console.log(twentyFiveOnOne([
  { name: "Hat", quantity: 1, price: 51.50 },
  { name: "Shoes", quantity: 1, price: 100 },
  { name: "PS5", quantity: 4, price: 750.10 },
  { name: "Pack of Pencils", quantity: 2, price: 10.99 }
])); // 2986.36
console.log(twentyFiveOnOne([
  { name: 'chair', quantity: 4, price: 125 },
  { name: 'table', quantity: 1, price: 450 },
  { name: 'couch', quantity: 1, price: 899.95 }
])); // 1624.96
console.log(twentyFiveOnOne([])); // 0