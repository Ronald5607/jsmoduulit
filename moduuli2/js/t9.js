
function even(numbers) {
    return numbers.filter(x => x % 2 === 0);
}

const numbers = [1, 2, 5, 4, 3, 7, 5, 8, 234];

console.log(numbers);
console.log(even(numbers));