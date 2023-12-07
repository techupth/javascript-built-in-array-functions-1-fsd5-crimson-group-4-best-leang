const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

let result=[1,2,3,4].reduce((accumulator, currentValue) => {
  return  accumulator+currentValue;
},)

let result2 = [1, 2, 3, 4].reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});




console.log(result);// Output: 87.5
