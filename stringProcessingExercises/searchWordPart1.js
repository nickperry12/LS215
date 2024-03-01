"use strict";
// Search Word Part 1

/*
Write a function that takes two arguments, a word and a string of text, and
returns an integer representing the number of times the word appears in the
text.

You may assume that the word and text inputs will always be provided, and that
all word breaks are spaces. Thus, some words will include punctuation such as
periods and commas.

P:

We want to create a function that takes two strings as arguments, a word and a
chunk of text. The function should return an integer that represents the amount
of times the word appears in the chunk of text.

Algo:
*/

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

function searchWord(word, text) {
  const PATTERN = new RegExp(`\\b(${word})\\b`, "ig")
  let matches = text.match(PATTERN);
  return matches ? matches.length : 0;
}

console.log(searchWord('sed', text));      // 3
console.log(searchWord('qui', text));      // 4