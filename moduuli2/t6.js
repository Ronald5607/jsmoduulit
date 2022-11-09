
function diceroll() {
    return Math.floor(Math.random() * 6) + 1;
}
let roll = 0;
while (roll !== 6) {
    roll = diceroll();
    document.querySelector('#t6').innerHTML += `<li>${roll}</li>`;
}