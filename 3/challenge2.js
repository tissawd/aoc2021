const inputArray = require('./input.json');

const total = inputArray.length;

const digits = [...Array(inputArray[0].length).keys()];
var ones = [];
var zeroes = [];
var index = 0
var O2;
var CO2;

function sortInputs(inputs){
  if (inputs.length === 1) {
    if (inputs[0][0] == 1){
      O2 = parseInt(inputs[0],2);
    } else{
      CO2 = parseInt(inputs[0],2)
    }
  } 
  ones = [];
  zeroes = [];
  for (let input of inputs){
    input[index] == 1 ? ones.push(input) : zeroes.push(input)
  }
}

function getRating(gasType){
  if (gasType === 'O2'){
    ones.length >= zeroes.length ? sortInputs(ones) : sortInputs(zeroes);
  } else if (gasType === 'CO2'){
    ones.length < zeroes.length ? sortInputs(ones) : sortInputs(zeroes);
  }
  return index === total - 1 ? rating : index++
}

sortInputs(inputArray);
for (let digit of digits){
  getRating('O2');
}
index = 0;
sortInputs(inputArray);
index = 1;
for (let digit of digits){
  getRating('CO2');
}

console.log(O2 * CO2);
