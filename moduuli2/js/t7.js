
function diceroll(number_of_faces) {
    return Math.floor(Math.random() * number_of_faces) + 1;
}

const faces = parseInt(prompt('how many faces does your die have?'));
let roll = 0;
while (roll !== faces) {
    roll = diceroll(faces);
    document.querySelector('#t7').innerHTML += `<li>${roll}</li>`;
}