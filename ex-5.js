const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

let scoreTotal = students.reduce((accumulator, currentValue) => {
       accumulator = accumulator + currentValue.score;
       return accumulator;
},0);
scoreTotal=scoreTotal/students.length;
console.log(`output: ${scoreTotal}`); //Output: 87.5

//let scoreTotal=students.reduce((accumulator, currentValue) => accumulator+currentValue.score,0);
