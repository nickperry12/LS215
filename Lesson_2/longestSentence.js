// Longest Sentence

/*
Write a program that determines the sentence with the most words in some text.
Sentences may end with periods (.), exclamation points (!), or question marks
(?). Sentences always begin with a word character. You should treat any sequence
of characters that are not spaces or sentence-ending characters, as a word. Log
the longest sentence and its word count to the console. Pay attention to the
expected output. Note that this problem is about manipulating and processing
strings. As such, every detail about the string matters (e.g., case,
punctuation, tabs, spaces, etc.).

P:

We want to create a function that parses through a string, and finds the longest
string, and the word count of that string. Each sentence can end with either a
period (`'.'`) or an exclamantion point (`'!'`). Any sequence of characters that
are not spaces or sentence-ending characters should be considered a word. The
longest sentence and the word count of the longest sentence should be logged to
the console.

-- Modeling/Algorithm

Get a list of individual sentence
- Split the string with a delimiter
  - Use a regex pattern that contains a character class containing a period and
    exclamation mark
  - Use the above pattern as the delimiter

Find the longest sentence value
- Set `max` to 0
- Transform the list of sentences into a collection of words
  - First remove the whitespace at the beginning and end of each sentence
  - To get the collection of words, split the sentence at each word
    - Need to split at the space
  - Transform the each list of words to the list length
- Iterate through the list of lengths
  - If the current value is greater than `max`, reassign `max` to that value
- Return the value

Log the longest sentence and the length of the sentence to the console
*/

function getSentences(text) {
  let sentences = text.match(/[^\.!\?]+[\.!\?]+/g);
  return sentences;
}

function findLongestLength(sentences) {
  let max = 0;
  let listOfLengths = sentences.map(sentence => {
    sentence = sentence.trim().split(/\s/);
    return sentence.length;
  });

  listOfLengths.forEach(length => {
    if (length > max) {
      max = length;
    }
  });

  return max;
}

function findLongestSentence(sentences) {
  let listsOfWords = sentences.map(sentence => {
    return sentence.trim().split(/\s/);
  });

  return listsOfWords.sort((a, b) => b.length - a.length)[0].join(' ');
}

function longestSentence(text) {
  let listOfSentences = getSentences(text);
  let longestSentence = findLongestSentence(listOfSentences);
  let longestLength = findLongestLength(listOfSentences);

  let output = longestSentence + '\n' +
  `The longest sentence has ${longestLength} words.`;

  console.log(output);
}

let longText = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced. It is rather for' +
  ' us to be here dedicated to the great task remaining' +
  ' before us -- that from these honored dead we take' +
  ' increased devotion to that cause for which they gave' +
  ' the last full measure of devotion -- that we here highly' +
  ' resolve that these dead shall not have died in vain' +
  ' -- that this nation, under God, shall have a new birth' +
  ' of freedom -- and that government of the people, by' +
  ' the people, for the people, shall not perish from the' +
  ' earth.';

longestSentence(longText);

// console output
// It is rather for us to be here dedicated to the great task remaining before
// us -- that from these honored dead we take increased devotion to that cause
// for which they gave the last full measure of devotion -- that we here highly
// resolve that these dead shall not have died in vain -- that this nation,
// under God, shall have a new birth of freedom -- and that government of the
// people, by the people, for the people, shall not perish from the earth.

// The longest sentence has 86 words.