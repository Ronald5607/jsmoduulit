const numbers5 = [];

while (true) {
    let number5 = parseFloat(prompt('give number(terminates when a repeat number is given)'));
    if (!numbers5.includes(number5)) { numbers5.push(number5)} else {break}
}
numbers5.sort((x, y) => x - y);
console.log(numbers5);
