
const DICE = parseInt(prompt('How many dice'));
const SUM = parseInt(prompt('What sum are you looking for'))

let times = 0;
let tests = 10000;
for (let i = 0; i < tests; i++) {
    let summa = 0;
    for (let j = 0; j < DICE; j++) {
        let rand = Math.floor(Math.random() * 6) + 1;
        summa += rand;
    }
    if (summa == SUM) times++;
}

const PROB = times/tests * 100;

document.querySelector('#roll').innerHTML = `Probability to get sum ${SUM} with ${DICE} dice is ${PROB.toFixed(2)}%`;