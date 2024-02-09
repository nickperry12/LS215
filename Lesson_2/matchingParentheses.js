// Matching Parentheses

/*
Write a function that takes a string as an argument and returns `true` if the
string contains properly balanced parentheses, `false` otherwise. Parentheses
are properly balanced only when `'('` and `')'` occur in matching pairs, with
each pair starting with `'('`.

P:

We want to create a function that parses through the string and returns `true`
if the string contains properly balanced parentheses, i.e., `'('` and `')'`
occur in matching pairs. If the string contains matching pairs, return `true`
and `false` if not.

E:

isBalanced('What (is) this?');        // true
isBalanced('What is) this?');         // false
isBalanced('What (is this?');         // false
isBalanced('((What) (is this))?');    // true
isBalanced('((What)) (is this))?');   // false
isBalanced('Hey!');                   // true
isBalanced(')Hey!(');                 // false
isBalanced('What ((is))) up(');       // false

-- Modeling/Algorithm:

I: '((What) (is this))?'
O: true

I: 'What ((is))) up('
O: false

Set a `counter` to `0`
Replace all non parentheses characters with empty strings
Split the string into an array of characters
Parse through the collection of characters
- If the character is an opening parentheses, increment counter by 1
- If its a closing parentheses, decrement counter by 1
- If counter is ever less than 0, return false
- If `counter` is equal to `0` at the end of iteration, return `true`


*/
function isBalanced(string) {
  let newString = string.replace(/[^()]/g, '');
  let counter = 0;

  for (let i = 0; i < newString.length; i += 1) {
    if (newString[i] === '(') {
      counter += 1;
    } else if (newString[i] === ')') {
      counter -= 1;
    }

    if (counter < 0) return false;
  }

  return counter === 0;
}


console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false