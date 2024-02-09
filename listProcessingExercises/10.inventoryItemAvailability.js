// Inventory Item Availability
/*
Building on the previous exercise, write a function that returns true or false
based on whether or not an inventory item is available. As before, the function
takes two arguments: an inventory item and a list of transactions. The function
should return true only if the sum of the quantity values of the item's
transactions is greater than zero. Notice that there is a movement property in
each transaction object. A movement value of 'out' will decrease the item's
quantity.

You may (and should) use the transactionsFor function from the previous
exercise.

P:

We want to create a function that accepts and integer and an array of
transactions as arguments. The function should return `true` if the item
referenced by the `id` is available. To determine it's availability, we need to
calculate the sum of the items quantities. The sum must be greater than 0. If
the `movement` of the item is `out` then we subtract from the `sum`, and the
movement is `in`, we add to the sum.

-- Modeling/Algorithm:

Filter out the transactions that match the given `id`
Set `sum` to `0`
Iterate through the filtered array
- If the `movement` value is `in`, add the quantity to `sum`
- If the `movement` value is `out`, subtract the quantity from `sum`

Return `true` if `sum` is greater than 0, `false` if not
*/

function transactionsFor(id, transactions) {
  return transactions.filter(transaction => transaction.id === id);
}

function isItemAvailable(id, transactions) {
  let filteredTransactions = transactionsFor(id, transactions);
  let sum = 0;

  filteredTransactions.forEach(transaction => {
    if (transaction.movement === 'in') {
      sum += transaction.quantity;
    } else if (transaction.movement === 'out') {
      sum -= transaction.quantity;
    }
  });

  return sum > 0;
}

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true