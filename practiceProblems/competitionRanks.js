// Standard Competition Ranking
// Standard competition ranking (also known as "1224" ranking) assigns the same
// rank to matching values. Rank numbers are increased each time, so ranks are
// sometimes skipped. If we have 5 scores (the highest score having a rank of
// 1):

// No matching values:

// Scores = [99, 98, 97, 96, 95]
// Rank = 1,  2,  3,  4,  5
// With matching values:

// Scores = [99, 98, 98, 96, 95]
// Rank = 1,  2,  2,  4,  5

// Second and third scores are equal, so rank "3" is skipped.

// Given an object containing the names and scores of 5 competitors, and a
// competitor name, return the rank of that competitor after applying
// competition ranking.

// Note:
// The highest score has a rank value of 1.

/*
P:

We want to create a function that accepts an Object and a string as an argument.
The Object contains the names and scores of competitors, and the string will
represent a name who's rank we are looking for.

We are to apply competition ranking to each competitor using their score, and
return the rank for the competitor's name who's is passed in as an argument.

Rules:
1. Rankings are applied to each score, with 1 being assigned to the highest rank.
2. The rank number should increment with each assignment to a score.
   2b. If the score is the same between two competitors, they will share the
   same rank, and the next rank that is not the same continues at the last rank
   position plus the number of same scores minus one
3. The maximum score is 100, the minimum score is 0.
4. There is no minimum rank. 
5. The highest rank someone can have is 1.
6. The given object will always contain at least one competitor.
7. There is no maximum to the number of competitors.
8. Assume that we'll always be given exactly two arguments, one of which will be
   an Object and the other a string.
9. Scores will always be represented as numbers.
10. Scores will always be a positive number and will always be a whole number.
11. If multiple people share the same score, they will all share the same rank.
    The same rule of the next rank applies where the next rank is the previous
    rank + the number of same scores minus one.
12. The given string will always have a value, and we can assume it will always
    represent a competitor that is included in the Object.

-- Modelling:

I:
{
  George: 96,
  Emily: 95,
  Susan: 93,
  Jane: 89,
  Brett: 82
}, "Jane"

O: 4

Initialize `rankings` to an empty collection

Get a collection of the scores
Iterate from `1` to the length of (`scores` - 1)
- If the rank at the current index is the same as the rank at the current index
  - 1
  - Push the value of the previous rank into `rankings`
- Otherwise, push index + 1 into `rankings`

Get a collection of entries from the given Object
- Iterate over the collection and its indices
  - Replace the score in each entry with a ranking from `rankings` with the
    current index on iteration
- Convert the collection of entries back into an object

Return the value of the given string

Data Structures:

Input: Object, String
Intermediate: Array
Output: Number

-- Algorithm:

Initialize `rankings` to an empty collection

Get a collection of the scores
Iterate from `1` to the length of (`scores` - 1)
- If the rank at the current index is the same as the rank at the current index
  - 1
  - Push the value of the previous rank into `rankings`
- Otherwise, push index + 1 into `rankings`

Get a collection of entries from the given Object
- Sort the entries by each score from high to low
- Iterate over the collection and its indices
  - Replace the score in each entry with a ranking from `rankings` with the
    current index on iteration
- Convert the collection of entries back into an object

Return the value at the key of the given name from the new Object
*/
function competitionRank(competitors, name) {
  let rankings = [1];
  let scores = Object.values(competitors).sort((a, b) => b - a);
  
  for (let i = 1; i < scores.length; i += 1) {
    if (scores[i] === scores[i - 1]) {
      rankings.push(rankings[i - 1]);
    } else {
      rankings.push(i + 1);
    }
  }

  let competitorRanks = Object.entries(competitors);
  competitorRanks.sort((a, b) => {
    return b[1] - a[1];
  });

  competitorRanks = competitorRanks.map((competitor, idx) => {
    return [competitor[0], rankings[idx]];
  });

  return Object.fromEntries(competitorRanks)[name];
}



console.log(competitionRank({
  George: 96,
  Emily: 95,
  Susan: 93,
  Jane: 89,
  Brett: 82
  }, "Jane")); // 4

console.log(competitionRank({
  Kate: 92,
  Carol: 92,
  Jess: 87,
  Bruce: 87,
  Scott: 84
  }, "Bruce")); // 3

console.log(competitionRank({
  Kate: 45,
  Carol: 92,
  Jess: 87,
  Bruce: 87,
  Scott: 87
}, "Kate")); // 5

console.log(competitionRank({
  Nina: 81,
  Tommy: 79,
  Tyler: 84,
  Leo: 79,
  Hallie: 79
}, "Nina")); // 2