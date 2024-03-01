"use strict";
// Likes vs Dislikes
/*
YouTube currently displays a like and a dislike button, allowing you to express
your opinions about particular content. It's set up in such a way that you
cannot like and dislike a video at the same time.

There are two other interesting rules to be noted about the interface:

Pressing a button, which is already active, will undo your press.

If you press the like button after pressing the dislike button, the like button
overwrites the previous "dislike" state. The same is true for the other way
round.

Create a function that takes an array of button inputs and returns the final
state.

Examples
likeOrDislike(["Dislike"]) // "Dislike"
likeOrDislike(["Like", "Like"]) // "Nothing"
likeOrDislike(["Dislike", "Like"]) // "Like"
likeOrDislike(["Like", "Dislike", "Dislike"]) // "Nothing"

Notes
If no button is currently active, return "Nothing".
If the array is empty, return "Nothing".

P:
Create a function that accepts an array as its argument. The array given array
will contain the strings "Like" and/or "Dislike". Our function should return
the final state of the "Like" status based on the strings in the array.

For example, given the array: ["Like, Dislike"], the final status will be
"Dislike". 

Rules:

1. Pressing the "Like" button after the "Dislike" button will override the
   "Dislike" status that was first set. The reverse is also true.
2. Pressing the same button twice, i.e., if the string appears twice in a 
   row, the status will be "Nothing"
3. If the given array is empty, the function should return "Nothing"
4. The final status will be the last string in the given array, unless that
   string appears twice in a row.
5. Expect to only deal with arrays as the arguments
6. It's possible that the given array will contain strings other than "Like"
   or "Dislike", so we should be prepared to handle those accordingly
7. The array will only contain strings
8. Assume that we will only have to deal with exactly one argument
9. Assume that the first character in the strings of importance will always
   have the first letter capitalized
10. If the same button is pressed more than twice in a row, i.e., it's pressed
    three times in a row, does the status remain as "Nothing", or will pressing
    it a third time activate the button again?
    - Nothing to indicate how this should be handled, be prepared to test for both
    - After first initial round of tests, we can now confirm that if a button is
      clicked three times in a row, the second time will deactivate the button
      and the third time will reactivate it

Examples:

likeOrDislike([]) // "Nothing"
likeOrDislike(["a"]) // "Nothing"
likeOrDislike(["Like", "Likelike", "Dislike", "a", "B"]) // "Dislike"
likeOrDislike([""])
likeOrDislike(["Dislike"]) // "Dislike"
likeOrDislike(["Like", "Like"]) // "Nothing"
likeOrDislike(["Dislike", "Like"]) // "Like"
likeOrDislike(["Like", "Dislike", "Dislike"]) // "Nothing"


-- Modeling:
We're only really concerned with the last 2 entries in the array
- We want to check if the last two elements are the same
  - If they are, we should return the string "Nothing"
  - If they aren't the same, then we should return the string at the last
    index position


Algorithm:

If the given array is empty, return "Nothing"

Filter all strings that are either "Like" or "Dislike" from the given array

Declare and initialize `currentStatus` to an empty string
Declare and initialize `previousStatus` to an empty string

Iterate through the given array
- If the current element is `"Like"`
  - Set `previousStatus` to `currentStatus`
  - Set `currentStatus` to `"Like"`
- If the current element is `"Dislike"`
  - Set `previousStatus` to `currentStatus`
  - Set `currentStatus` to `"Dislike"`

Once iteration is complete
- If `previousStatus` and `currentStatus` are the same, return `"Nothing"`
- Otherwise, return `currentStatus`
*/

function likeOrDislike(buttonClicks) {
  buttonClicks = buttonClicks.filter(click => {
    return click === "Like" || click === "Dislike"
  });
  
  if (buttonClicks.length === 0) return "Nothing";

  let previousStatus = '';
  let currentStatus = '';

  buttonClicks.forEach(click => {
    if (click === "Like") {
      previousStatus = currentStatus;
      previousStatus === click ? currentStatus = "Nothing" : currentStatus = click;
    } else if (click === "Dislike") {
      previousStatus = currentStatus;
      previousStatus === click ? currentStatus = "Nothing" : currentStatus = click;
    }
  });

  return currentStatus;
}

console.log(likeOrDislike([])); // "Nothing"
console.log(likeOrDislike(["a"])); // "Nothing"
console.log(likeOrDislike(["Like", "Likelike", "Dislike", "a", "B"])); // "Dislike"
console.log(likeOrDislike([""])); // Nothing
console.log(likeOrDislike(["Dislike"])); // "Dislike"
console.log(likeOrDislike(["Like", "Like"])); // "Nothing"
console.log(likeOrDislike(["Dislike", "Like", "Dislike", "Like"])); // "Like"
console.log(likeOrDislike(["Like", "Dislike", "Dislike"])); // "Nothing"
console.log(likeOrDislike(["Like", "Like", "Like"])); // "Like"

/*
first iteration:
prevStatus is ''
currentStatus is ''

prevStatus gets set to currentStatus => prev is '', current is like

second iteration:
prevStatus gets set to currentStatus => prev is like
currentStatus gets set to new click => currentStatus is like
*/