const fs = require('fs');

const input = fs.readFileSync('./input.txt', {encoding: 'utf-8'});

const inputArray = input.split('\n');

const x = inputArray.reduce((accum, curr) => {
    let direction = curr.split(' ')[0];
    let amount = parseInt(curr.split(' ')[1]);
    if (direction == 'forward'){
        return accum + amount
    }
    else return accum
}, 0);

const y = inputArray.reduce((accum, curr) => {
    let direction = curr.split(' ')[0];
    let amount = parseInt(curr.split(' ')[1]);
    if (direction == 'down'){
        return accum + amount
    }
    else if (direction == 'up'){
        return accum - amount
    }
    else return accum;
}, 0);

console.log(x);
console.log(y);
console.log(x*y);