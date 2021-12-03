const fs = require('fs');

const input = fs.readFileSync('./input.txt', {encoding: 'utf-8'});

const inputArray = input.split('\n');

var increases = 0;
var win1Start = 0;
var win2Start = 1;
var prevSum = parseInt(inputArray[win1Start]) + parseInt(inputArray[(win1Start + 1)]) + parseInt(inputArray[(win1Start + 2)]);
var sum = parseInt(inputArray[win2Start]) + parseInt(inputArray[(win2Start + 1)]) + parseInt(inputArray[(win2Start + 2)]);
var end = inputArray.length - 1;

function slideWindows(){
    win1Start++;
    win2Start++;
    prevSum = sum;
    sum = parseInt(inputArray[win2Start]) + parseInt(inputArray[(win2Start + 1)]) + parseInt(inputArray[(win2Start + 2)]);
};

while (win2Start + 2 < end){
 if (sum > prevSum){
     increases++;
 } 
 slideWindows();
};
console.log(win2Start);

console.log(increases);
return increases;
