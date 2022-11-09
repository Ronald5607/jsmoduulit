const nums = [];
let number = 0;
do {
    number = parseFloat(prompt('give number(0 terminates)'));
    if (number !== 0) {nums.push(number)}
} while (number !== 0);

nums.sort((x, y) => y - x);

console.log(nums);