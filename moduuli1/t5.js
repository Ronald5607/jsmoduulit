
const YEAR = parseInt(prompt('Give year:'));


function print_to_html(year) {
    document.querySelector('#leap').innerHTML = NAME + ' , you are ' + room + '.';
}

if (YEAR % 4 == 0 && (YEAR % 100 != 0 || YEAR % 400 == 0)) {
    document.querySelector('#leap').innerHTML = YEAR + ' is a leap year.';
} else {
    document.querySelector('#leap').innerHTML = YEAR + ' is not a leap year.';
}