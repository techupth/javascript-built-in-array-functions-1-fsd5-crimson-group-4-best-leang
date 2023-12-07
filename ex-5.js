const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

let scoreTotal=students.reduce((accumulator, currentValue) => (accumulator+currentValue.score),0);

let averageScore=scoreTotal/students.length;

console.log(`output: ${averageScore}`); //Output: 87.5

//let scoreTotal=students.reduce((accumulator, currentValue) => accumulator+currentValue.score,0);
