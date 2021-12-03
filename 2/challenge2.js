const fs = require('fs');

const input = fs.readFileSync('./input.txt', {encoding: 'utf-8'});

const inputArray = input.split('\n');

let aim = 0;
let depth = 0;
let x = 0;

inputArray.forEach(command => {
    let direction = command.split(' ')[0];
    let amount = parseInt(command.split(' ')[1]);
    if (direction == 'forward'){
        x += amount;
        depth += amount * aim;
    } else if (direction == 'down'){
        aim += amount
    } else {
        aim -= amount
    }
});

console.log(aim);
console.log(depth);
console.log(x);
console.log(x*depth);