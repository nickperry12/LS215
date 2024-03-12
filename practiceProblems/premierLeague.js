// Premier League Champions
// Create a function that takes an array of football clubs with properties:
// name, wins, loss, draws, scored, conceded, and returns the team name with the
// highest number of points. If two teams have the same number of points, return
// the team with the largest goal difference.

// How to Calculate Points and Goal Difference:
// team = { name: "Manchester United", wins: 30, loss: 3, draws: 5, scored: 88,
// conceded: 20 }

// Total Points = 3 * wins + 0 * loss + 1 * draws = 3 * 30 + 0 * 3 + 5 * 1 = 95
// points
// Goal Difference = scored - conceded = 88 - 20 = 68
/*
P:

We want to create a function that accepts an array of Objects as an argument.
The Objects within the array will contain the stats for football clubs. Our
function should return a string containing the team name that has the most
points scored. If there are multiple teams with the same number of points,
return the team with the largest goal difference.

Rules:
1. Return the team with the most points scored.
2. If multiple teams have the same number of points scored as the highest,
   return the team that has the largest goal difference.
3. The values for each key-value pair aside from `name` will always be a number.
4. Assume that we will only be dealing with whole numbers in our stats.
5. We won't be dealing with any negative numbers.
6. Assume that the given array will always contain at least one Object.
7. If the given array only contains one Object, return the name of that team.
8. If there are multiple teams that have the same number of points scored and
   the same goal difference, return the team name that appears first in the
   given array of Objects.
9. Expect to deal with `null` or no arguments. If this is the case, return
   `Invalid input.`
10. Other than `null` or no arguments, the given argument will always be an
    Array of Objects.


Data Structures:

Input: Array of Objects
Intermediate: Array, Object
Output: String

-- Modelling:

I:
[
  {
    name: "Manchester United",
    wins: 30,
    loss: 3,
    draws: 5,
    scored: 88,
    conceded: 20,
  },
  {
    name: "Arsenal",
    wins: 24,
    loss: 6,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
  {
    name: "Chelsea",
    wins: 22,
    loss: 8,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
]

O: "Manchester United"

Formula to calculate points:
(3 * wins) + (0 * losses) + (1 * draws) => total points

Formula to calculate goal difference:
Total goals scored - goals conceded => goal difference

The first thing we want to do is create a new object for each team with the team
name, the total points scored, and the goal difference and store it in an array

[
  {
    name: 'Manchester United',
    total: 95,
    goalDifference: 68
  },
  {
    name: 'Arsenal',
    total: 80,
    goalDifference: 71
  }
]

Sort the array by the value of the `total` key
- If the totals between two objects are equal, sort by the goal difference
  instead

Return the team name of the team at the firstt index

-- Algorithm:

Helper function to calculate `total`:
- Accept an object as the argument
- Initialize `total`
  - Assign it the sum of the following:
    - Multiply the object `wins` by 3 and the objects `draws`

Helper function to calculate `goalDifference`:
- Accept an objectt as the argument
- Initialize `total`
  - Assign it the value of `object[scored]` minus `object[conceded]`

Main function:

Initialize `teamsAndStats` to an empty collection

Iterate through the given array of teams
- Initialize `newObj` to an Object containing the following key-value pairs:
  - The `name` key with the value of the current teams name
  - The `total` key with the value of their total points
    - Use the helper function to calculate the total
  - The `goalDifference` key to the value of the goal difference
    - Use the helper function to calculate the goal difference
- Push the resulting object into `teamsAndStats`

Sort `teamsAndStats` with the following criteria:
- If the two teams being compared have the same total points, sort by their goal
  difference
- Otherwise, sort by their total points

Return `teamsAndStats`
*/

const groupOne = [
  {
    name: "Manchester United",
    wins: 30,
    loss: 3,
    draws: 5,
    scored: 88,
    conceded: 20,
  },
  {
    name: "Arsenal",
    wins: 24,
    loss: 6,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
  {
    name: "Chelsea",
    wins: 22,
    loss: 8,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
];

const groupTwo = [
  {
    name: "Manchester City",
    wins: 30,
    loss: 8,
    draws: 0,
    scored: 67,
    conceded: 20,
  },
  {
    name: "NewCastle United",
    wins: 34,
    loss: 2,
    draws: 2,
    scored: 118,
    conceded: 36,
  },
  {
    name: "Leicester City",
    wins: 34,
    loss: 2,
    draws: 2,
    scored: 108,
    conceded: 21,
  },
];

const groupThree = [
  {
    name: "Leicester City",
    wins: 34,
    loss: 2,
    draws: 2,
    scored: 108,
    conceded: 21,
  },
];

const groupFour = [
  {
    name: "Manchester United",
    wins: 30,
    loss: 3,
    draws: 5,
    scored: 88,
    conceded: 20,
  },
  {
    name: "Arsenal",
    wins: 30,
    loss: 3,
    draws: 5,
    scored: 100,
    conceded: 29,
  },
  {
    name: "Chelsea",
    wins: 22,
    loss: 8,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
];

const groupFive = [
  {
    name: "Manchester United",
    wins: 30,
    loss: 3,
    draws: 5,
    scored: 88,
    conceded: 20,
  },
  {
    name: "Arsenal",
    wins: 30,
    loss: 3,
    draws: 5,
    scored: 88,
    conceded: 20,
  },
  {
    name: "Chelsea",
    wins: 30,
    loss: 3,
    draws: 5,
    scored: 88,
    conceded: 20,
  },
];

function calculateTotal(object) {
  let total = object.wins * 3 + object.draws;
  return total;
}

function calculateGoalDifference(object) {
  let goalDifference = object.scored - object.conceded;
  return goalDifference;
}

function champions(teams) {
  if (!teams) return "Invalid input.";
  let teamsAndStats =  teams.map(team => {
    let newObj = {
      'name': team.name,
      'total': calculateTotal(team),
      'goalDifference': calculateGoalDifference(team)
    };

    return newObj;
  });

  teamsAndStats.sort((a, b) => {
    if (a.total === b.total) {
      return b.goalDifference - a.goalDifference;
    } else {
      return b.total - a.total;
    }
  })

  return teamsAndStats[0].name;
}

console.log(champions(groupOne));
// Returns: "Manchester United"
console.log(champions(groupTwo));
// // Returns: "Leicester City"
console.log(champions(groupThree));
// // Returns: "Leicester City"
console.log(champions(groupFour));
// // Returns: "Arsenal"
console.log(champions(groupFive));
// // Returns: "Manchester United"
console.log(champions(null));
// // Returns: "Invalid input."