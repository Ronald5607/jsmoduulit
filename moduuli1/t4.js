
let name2 = prompt('What is your name?');

const RAND = Math.floor(Math.random() * 4);

function print_to_html(room) {
    document.querySelector('#potter').innerHTML = name2 + ' , you are ' + room + '.';
}
switch (RAND) {
    case 0:
        print_to_html('Daredevil');
        break;
    case 1:
        print_to_html('Slytherin');
        break;
    case 2:
        print_to_html('Hufflepuff');
        break;
    case 3:
        print_to_html('Ravenclaw');
        break;
}