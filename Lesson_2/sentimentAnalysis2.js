// Sentiment Analysis 2

/*
Re-implement the sentiment analysis with regex-based positive and negative word
lists. The use of regex to process text-based data is extremely powerful. In the
previous practice problem, we did not count words that were just different forms
of the words in the positive and negative word lists. For instance, we didn't
count "scorns" since it isn't an exact match for "scorn".

We could add the variations of each word; for example: fortune --> fortunes,
respect --> respected, oppress --> oppressed, or death --> deaths. This works,
but we can use regex to make the relationship between variants more evident:

P:

Similar to the previous problem, we now want to refactor our solution so that
instead of using an array of words to match, we're now given a regex pattern to
match. 
*/
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

let positiveRegex = /\bfortunes?\b|\bdream(s|t|ed)?\b|love(s|d)?\b|respect(s|ed)?\b|\bpatien(ce|t)?\b|\bdevout(ly)?\b|\bnobler?\b|\bresolut(e|ion)?\b/gi;
let negativeRegex = /\bdie(s|d)?\b|\bheartached?\b|death|despise(s|d)?\b|\bscorn(s|ed)?\b|\bweary\b|\btroubles?\b|\boppress(es|ed|or('s)?)?\b/gi;

function extractAllPositiveWords(text, pattern) {
  let positiveWords = {};

  let matches = text.match(pattern);
  matches.forEach(word => {
    if (positiveWords[word]) {
      positiveWords[word] += 1;
    } else {
      positiveWords[word] = 1;
    }
  });

  positiveWords['listOfWords'] = matches.map(match => match.toLowerCase());
  return positiveWords;
}

function extractAllNegativeWords(text, pattern) {
  let negativeWords = {};

  let matches = text.match(pattern);
  matches.forEach(word => {
    if (negativeWords[word]) {
      negativeWords[word] += 1;
    } else {
      negativeWords[word] = 1;
    }
  });

  negativeWords['listOfWords'] = matches.map(match => match.toLowerCase());
  return negativeWords;
}

function findWordTotal(obj) {
  let values = Object.values(obj).filter(value => typeof(value) === 'number');
  return values.reduce((accum, val) => accum + val);
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
  return obj.listOfWords.join(', ');
}

function sentiment(text) {
  let positive = extractAllPositiveWords(text, positiveRegex);
  let negative = extractAllNegativeWords(text, negativeRegex);
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

console.log(sentiment(textExcerpt));

// console output

// There are 9 positive type words in the text.
// Positive sentiments: nobler, fortune, devoutly, dream, dreams, respect, love, patient, resolution

// There are 10 negative type words in the text.
// Negative sentiments: troubles, die, heartache, die, death, scorns, oppressor's, despised, weary, death

// The sentiment of the text is Negative.