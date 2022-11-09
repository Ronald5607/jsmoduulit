const numbers = [];

for (let i = 0; i < 5; i++) {
    numbers[i] = parseFloat(prompt('Give me a number'));
}
console.log(numbers);
for (let i = 4; i >= 0; i--) {
    console.log(numbers[i]);
}
