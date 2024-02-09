/*
Create a variable named `firstName` and set it equal to your first name. Set
another variable named `lastName` to your last name. Join the two together,
separated by a space and store the result in a variable named `fullName`. Log
the value of `fullName`.
*/

let firstName = 'Nick';
let lastName = 'Perry';
let fullName = firstName + ' ' + lastName;

console.log(fullName);

/*
Call concat on firstName using lastName as an argument. Log the return value.
*/

console.log(firstName.concat(lastName));

/*
Split the fullName variable into an array that contains the first and last names
as separate strings. Log the value of the array.
*/

console.log(fullName.split(' '));

/*
Create a variable named language and set it equal to 'JavaScript'. Find the
index of the first occurrence of the letter 'S' and save it to a variable named
idx variable. Log the value of idx.
*/

let language = 'JavaScript';
let idx = language.indexOf('S');
console.log(idx);

/*
Call charCodeAt on the language variable with an argument of idx. Save the
return value to a variable named charCode, then log the value of charCode.
*/

let charCode = language.charCodeAt(idx);
console.log(charCode); // 83

/*
Log the return value of String.fromCharCode when you pass it charCode as an
argument.
*/

console.log(String.fromCharCode(charCode));   // S

/*
Find the index of the last occurrence of the letter 'a' in the language variable
and log the result.
*/

console.log(language.lastIndexOf('a'));

/*
Create two variables, a = 'a' and b = 'b'. Log a "greater than" comparison
between the two variables. Reassign the value 'B' to variable b, then compare
the two variables again, and log the comparison value.
*/

let a = 'a';
let b = 'b';

console.log(a > b);  // false

b = 'B';

console.log(a > b); // true

/*
Call the language.slice method with arguments 1 and 4. Next, call the method
with arguments 2 and 4. Log the return values.
*/

console.log(language.slice(1, 4));  // ava
console.log(language.slice(2, 4));  // va

/*
Repeat the previous problem, but this time use substring instead of slice. Do
the results differ in any way?

There was no difference in the results.
*/

console.log(language.substring(1, 4));  // ava
console.log(language.substring(2, 4));  // va

/*
Call the language.slice method with arguments 1 and -1. Next, call the method
with arguments 2 and -1. Log the return values.
*/

console.log(language.slice(1, -1)); // avaScrip
console.log(language.slice(2, -1)); // vaScrip

/*
Repeat the previous problem, but this time use substring instead of slice. Do
the results differ in any way?

Arguments that are less than `0` are treated as if it were `0`. Because the
first argument is greater than the argument being treated as `0`, they are
swapped. The substring returned starts at index `0` up to (but not including)
the greater value.
*/

console.log(language.substring(1, -1)); // J
console.log(language.substring(2, -1)); // Ja

/*
Create variables named fact1 and fact2 and set them equal to 'JavaScript is fun'
and 'Kids like it too', respectively. Combine the values of the two variables
with the string ' and ' between them, and store the result in a variable named
compoundSentence. Make sure the first letter of fact2 shows up as lowercase in
compoundSentence. Log the value of compoundSentence.
*/

let fact1 = 'JavaScript is fun';
let fact2 = 'Kids like it too';
let compoundSentence = fact1 + ' and ' + fact2.toLowerCase();
console.log(compoundSentence);

/*
Log the first letter of fact1 and fact2 using bracket notation.
*/

console.log(fact1[0]); // J
console.log(fact2[0]); // K

/*
Create a variable named pi and set it to the result of 22 / 7. Convert pi to a
String using the toString method. Search the resulting string for the final
occurrence of '14', and log its index position.
*/

let pi = 22 / 7;
console.log(pi.toString().lastIndexOf('14'));    // 14

/*
Create a variable named boxNumber and set it to the result of calling
356.toString(), and log the result. Before moving on, try to run your program.
*/

let boxNumber = (356).toString();
console.log(boxNumber); // 356

/*
Convert the boxNumber variable back to a number using parseInt. To make sure the
result is a number, you can log typeof boxNumber to verify the type of the
result. Now convert the number back to a String by using the String function and
log the typeof of the result to verify it is now a String.
*/

boxNumber = parseInt(boxNumber);
console.log(typeof(boxNumber));   // number
boxNumber = String(boxNumber);
console.log(typeof(boxNumber));   // string

/*
Write a program that asks for a user's name, then greets the user with that
name. If the user appends a ! to his name (e.g., 'Bill!'), the computer should
"yell" its greeting: that is, it should log everything to the console in
uppercase. You can check whether the name ends with a ! using
String.prototype.endsWith (ES6 only). You can remove the ! from the user's name
with String.prototype.slice.
*/

const rlSync = require('readline-sync');
let name = rlSync.question('What\'s your name?\n');

function greet(name) {
  if (name.endsWith('!')) {
    console.log(name.slice(0, name.length - 1).toUpperCase());
  } else {
    console.log(name)
  }
}

greet(name);

