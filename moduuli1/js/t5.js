
const YEAR = parseInt(prompt('Give year:'));


if (YEAR % 4 == 0 && (YEAR % 100 != 0 || YEAR % 400 == 0)) {
    document.querySelector('#leap').innerHTML = YEAR + ' is a leap year.';
} else {
    document.querySelector('#leap').innerHTML = YEAR + ' is not a leap year.';
}