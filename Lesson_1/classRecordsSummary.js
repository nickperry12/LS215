/*
P:

We want to create a function that takes an array of nested objects. Each object
contains student information inside of an object. The object will contain the
following key-value pairs: a student id and its value, scores with the value of
an object containg a key-val pair for exams and exercises.

The function should parse through each student object, and compute the average
exam score, the total score on their exercises, and then return their grade in
string format. Our return value should be an object that contains two key-value
pairs:

1. studentGrades: an array of student grades in string format
2. exams: an array containing 4 objects, with each object containing 3 k-v pairs:
  - the average for the exam, the minimum score for the first exam, and
    the max score
    - this should be done for all 4 exams

The following steps can be used to determine their grade:

1. Compute the student's average exam score: (90 + 80 + 95 + 71) / 4 = 84
2. Compute the student's total exercise score: 20 + 15 + 40 = 75
3. Apply weights to determine the final percent grade: 84 * .65 + 75 * .35 =
   80.85
4. Round the percent grade to the nearest integer: 81
5. Lookup the letter grade in the table above: C
6. Combine the percent grade and letter grade: "81 (C)"

Example Input:

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

Example Output:

{
  studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
  exams: [
    { average: 75.6, minimum: 50, maximum: 100 },
    { average: 86.4, minimum: 70, maximum: 100 },
    { average: 87.6, minimum: 60, maximum: 100 },
    { average: 91.8, minimum: 80, maximum: 100 },
  ],
}

-- Modeling/Algo:

Given an object containing all the student data, create an array of keys from
the object
=> [student1, student2 ...]

Transform the array into an array containing objects of the students exam and
exercise data
=> [ {exams: [exams score...}, exercises: {exercise scores...}, ....]

Now, using the above data, we need to do the following:
- Calculate each students average exam scores
  - This will iterate over an array of subarrays
    - Each subarray will contain a students exam scores
- Calculate each students total exercise scores
  - This will iterate over an array of subarrays
    - Each subarray will contain a students exercise scores
- Use the above scores to get their grade based off the given table
  =>[ { scores: { exams: [], 
                  exercises: [] 
                }
    - Access the exam values and find the average and multiply by .65 (the weight)
    - Access the exercise values and find the total and mutliply by .35 (weight)
    - Using the weighted scores, find the grade

Using the exam data, we need to get the following:
- The scores for each exam in an array of arrays
=> [[student1Exam1Score, student2ExamScore1, student3ExamScore1...], ...]
- Find the maximum score for each exam
- Find the minimum score for each exam
- This should be returned in an object
=> {
  average: average exam scores,
  minimum: minimum score,
  maximum: max score
}

*/

function calculateExamAverage(exams) {
  let scoreSum = exams.reduce((accum, current) => accum + current);
  return scoreSum / exams.length;
}

function calculateExerciseScore(exercises) {
  let total = exercises.reduce((accum, val) => accum + val);
  return total;
}

function getStudentGrade(scoreObj) {
  let examsAvg = calculateExamAverage(scoreObj.exams);
  let exerciseTotal = calculateExerciseScore(scoreObj.exercises);
  let percentageGrade = Math.round(examsAvg * 0.65 + exerciseTotal * 0.35);

  let getLetterGrade = function (percentageGrade) {
    if (percentageGrade >= 93) {
      return 'A';
    } else if (percentageGrade >= 85 && percentageGrade < 93) {
      return 'B';
    } else if (percentageGrade >= 77 && percentageGrade < 85) {
      return 'C';
    } else if (percentageGrade >= 69 && percentageGrade < 77) {
      return 'D';
    } else if (percentageGrade >= 60 && percentageGrade < 69) {
      return 'E';
    } else {
      return 'F';
    }
  };

  return String(percentageGrade) + ' (' + getLetterGrade(percentageGrade) + ')';
}

function getExamSummary(examData) {
  let scoresPerExam = transpose(examData);

  return scoresPerExam.map(examScores => {
    return {
      average: calculateExamAverage(examScores),
      minimum: calculateExamMinimum(examScores),
      maximum: calculateExamMaximum(examScores),
    }
  });
}

function calculateExamMaximum(examData) {
  let max = 0;

  examData.forEach(score => {
    if (score > max) {
      max = score;
    }
  })

  return max;
}

function calculateExamMinimum(examData) {
  let min = Infinity;

  examData.forEach(score =>{
    if (score < min) {
      min = score;
    }
  })

  return min;
}

function transpose(array) {
  return array[0].map((col, columnIdx) => {
    return array.map(row => row[columnIdx]);
  });
}

function generateClassRecordSumamry(studentScores) {
  let scoreData = Object.keys(studentScores).map(student => studentScores[student].scores);
  let examData = scoreData.map(score => score.exams);
  let studentGrades = scoreData.map(scoreObj => getStudentGrade(scoreObj));

  return {
    studentGrades: studentGrades,
    exams: getExamSummary(examData)
  };
}

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

console.log(generateClassRecordSumamry(studentScores));