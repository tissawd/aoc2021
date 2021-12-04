const inputArray = require('./input.json');

const total = inputArray.length;

const digits = [...Array(inputArray[0].length).keys()];
var digitTotals = {};
for (digit of digits){
  digitTotals[digit] = 0
  inputArray.forEach(input => {
    digitTotals[digit] += parseInt(input[digit]);
  }) 
}

const gamma = Object.keys(digitTotals).map(key => (digitTotals[key] > total/2 ? '1' : '0')).join('');
const epsilon = gamma.split('').map(num => num == '1' ? '0' : '1').join('');

const solution = parseInt(gamma, 2) * parseInt(epsilon, 2);
console.log(digitTotals);
console.log(gamma);
console.log(epsilon);
console.log(solution);