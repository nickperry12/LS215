// Sentiment Analysis 1

/*
Implement a function that takes some text as an argument and logs some
information about whether the text has a positive, negative, or neutral
sentiment.

P:

We want to implement a function that accepts a string as an argument. The
function should parse through the string, and counter the amount of words that
have a positive and negative connotation, and then find the difference between
the two. If the difference is a positive number, the overall connotation is
positive, if it's negative, the overall connotation is negative, and if it's
zero, the connotation of the string is neutral. The positive and negative words
should be stored within separate collections to be use in the function output. A
message should be logged to the console stating the results of the analysis in
the following format:

There are `num` positive words in the text. Positive sentiments: fortune, dream,
respect, love, resolution

There are `num` negative words in the text. Negative sentiments: die, heartache,
die, death, weary, death

The sentiment of the text is `connotation result`

-- Modeling/Algorithm:

Extract all positive words
- Iterate through the collection of positive words, and find all matches within
  the given text
  - If there is a match for a word
    - Create a key value pair, where the key is the word and the value is the
      amount of times that word appears
    - Store the key value pairs in an object
- Return the object

Extract all negative words
- Iterate through the collection of negative words, and find all matches within
  the given text
    - If there is a match for a word
    - Create a key value pair, where the key is the word and the value is the
      amount of times that word appears
    - Store the key value pairs in an object
- Return the object

Analyze the given text
- Find all positive words, store in object
  - Sum all of the values in the object to find the total number of positive
    words
  - Use the list keys to find all positive words from the text
- Find all negative words
  - Sum all of the values in the object to find the total number of negative
    words
  - Use the list keys to find all negative words from the text

Find the difference between the total positive words and the total negative
words
- The result should be `'positive'` if the difference is positive, `'negative'`
  if it's negative, and `'neutral'` if it's neutral

Return the results in the required message format


*/

function extractAllPositiveWords(text, words) {
  let positiveWords = {};

  words.forEach(word => {
    let regex = new RegExp('\\b' + word + '\\b', 'ig');
    if (text.match(regex)) {
      positiveWords[word] = text.match(regex).length;
    }
  })

  return positiveWords;
}

function extractAllNegativeWords(text, words) {
  let negativeWords = {};

    words.forEach(word => {
    let regex = new RegExp('\\b' + word + '\\b', 'ig');
    if (text.match(regex)) {
      negativeWords[word] = text.match(regex).length;
    }
  })

  return negativeWords;
}

function findWordTotal(obj) {
  return Object.values(obj).reduce((accum, val) => accum + val);
}

function findConnotation(positives, negatives) {
  let difference = positives - negatives;
  if (difference > 0) {
    return 'Positive';
  } else if (difference < 0) {
    return 'Negative'
  } else {
    return 'Neutral';
  }
}

function listConnotations(obj) {
  let connotations = [];
  let words = Object.keys(obj);

  words.forEach(word => {
    for (let i = obj[word]; i > 0; i -= 1) {
      connotations.push(word);
    }
  })

  return connotations.join(', ');
}

function sentiment(text) {
  let positive = extractAllPositiveWords(text, positiveWords);
  let negative = extractAllNegativeWords(text, negativeWords);
  let totalPositiveWords = findWordTotal(positive);
  let totalNegativeWords = findWordTotal(negative);
  let connotation = findConnotation(totalPositiveWords, totalNegativeWords);

  let analysis = `There are ${totalPositiveWords} positive words in the text.\n` +
    `Positive sentiments: ${listConnotations(positive)}\n` +
    '\n' +
    `There are ${totalNegativeWords} negative words in the text.\n` +
    `Negative sentiments: ${listConnotations(negative)}\n` +
    '\n' +
    `The sentiment is ${connotation}.`
    
  return analysis;
}

let textExcerpt = 'To be or not to be-that is the question:\n' +
  'Whether \'tis nobler in the mind to suffer\n' +
  'The slings and arrows of outrageous fortune,\n' +
  'Or to take arms against a sea of troubles,\n' +
  'And, by opposing, end them. To die, to sleep-\n' +
  'No more-and by a sleep to say we end\n' +
  'The heartache and the thousand natural shocks\n' +
  'That flesh is heir to-\'tis a consummation\n' +
  'Devoutly to be wished. To die, to sleep-\n' +
  'To sleep, perchance to dream. Aye, there\'s the rub,\n' +
  'For in that sleep of death what dreams may come,\n' +
  'When we have shuffled off this mortal coil,\n' +
  'Must give us pause. There\'s the respect\n' +
  'That makes calamity of so long life.\n' +
  'For who would bear the whips and scorns of time,\n' +
  'Th\' oppressor\'s wrong, the proud man\'s contumely, [F: poor]\n' +
  'The pangs of despised love, the law’s delay, [F: disprized]\n' +
  'The insolence of office, and the spurns\n' +
  'That patient merit of the unworthy takes,\n' +
  'When he himself might his quietus make\n' +
  'With a bare bodkin? Who would fardels bear, [F: these Fardels]\n' +
  'To grunt and sweat under a weary life,\n' +
  'But that the dread of something after death,\n' +
  'The undiscovered country from whose bourn\n' +
  'No traveler returns, puzzles the will\n' +
  'And makes us rather bear those ills we have\n' +
  'Than fly to others that we know not of?\n' +
  'Thus conscience does make cowards of us all,\n' +
  'And thus the native hue of resolution\n' +
  'Is sicklied o\'er with the pale cast of thought,\n' +
  'And enterprises of great pitch and moment, [F: pith]\n' +
  'With this regard their currents turn awry, [F: away]\n' +
  'And lose the name of action.-Soft you now,\n' +
  'The fair Ophelia.-Nymph, in thy orisons\n' +
  'Be all my sins remembered';

let positiveWords = ['fortune',
                     'dream',
                     'love',
                     'respect',
                     'patience',
                     'devout',
                     'noble',
                     'resolution'
                    ];

let negativeWords = ['die', 
                     'heartache',
                     'death',
                     'despise',
                     'scorn',
                     'weary',
                     'trouble',
                     'oppress'
                    ];

console.log(sentiment(textExcerpt));