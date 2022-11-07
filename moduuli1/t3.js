let  i = 0;
let numbers = [];
do {
    let num = Number(prompt('Give integer: '));
    if (Number.isInteger(num)) {
        numbers[i] = num;
        i++;
    } else {
        alert('Number you gave was not an integer.')
    }
} while (i < 3)
const sum = numbers.reduce((partial, x) => partial + x, 0);
const product = numbers.reduce((partial, x) => partial * x, 1);
const average = sum / 3;
document.querySelector('#numbers1').innerHTML = `Your numbers were: ${numbers[0]},
                                                                            ${numbers[1]},
                                                                            ${numbers[2]}.`;
document.querySelector('#numbers2').innerHTML = `sum = ${sum},
                                                        product = ${product},
                                                        average = ${average}.`;
