'use strict';
const DICE = parseInt(prompt('How many dices?'))

let summa = 0;
for (let i = 0; i < DICE; i++) {
    let rand = Math.floor(Math.random() * 6) + 1;
    summa += rand;
}

document.querySelector('#dice').innerHTML = 'The sum of dicerolls were: ' + summa;