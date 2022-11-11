
let name2 = prompt('What is your name?');

const RAND = Math.floor(Math.random() * 4);

function to_HTML(room) {
    document.querySelector('#potter').innerHTML = name2 + ' , you are ' + room + '.';
}
switch (RAND) {
    case 0:
        to_HTML('Daredevil');
        break;
    case 1:
        to_HTML('Slytherin');
        break;
    case 2:
        to_HTML('Hufflepuff');
        break;
    case 3:
        to_HTML('Ravenclaw');
        break;
}