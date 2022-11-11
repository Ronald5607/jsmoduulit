const START_YEAR = parseInt(prompt('Give starting year'));
const END_YEAR = parseInt(prompt('Give ending year'))
let li;

for (let j = START_YEAR; j <= END_YEAR; j++) {
    if (j % 4 == 0 && (j % 100 != 0 || j % 400 == 0)) {
        li = document.createElement("li");
        li.innerText = j.toString();
        document.querySelector('#years').appendChild(li);
    }
}