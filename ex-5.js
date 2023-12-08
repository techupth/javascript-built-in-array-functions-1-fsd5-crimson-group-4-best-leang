const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  let totalScore = students.reduce(function (accumulator, students) {
    return accumulator + students.score;
  }, 0);
  return console.log(totalScore / students.length);
}

getAverageStudentScore(students); // Output: 87.5
