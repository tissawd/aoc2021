const fs = require('fs');

const input = fs.readFileSync('./input.txt', {encoding: 'utf-8'});

const inputArray = input.split('\n');

var increases = 0;
var prevNum = null
inputArray.forEach(num => {
    if (prevNum == null) {
        prevNum = num;
    }
    else if(num > prevNum){
        increases++;
        prevNum = num;
    }
    else {
       prevNum = num; 
    };
})
console.log(increases);
return increases;
