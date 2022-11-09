const num = parseInt(prompt('number of participants?'))

for (let i = 0; i < num; i++) {
    document.querySelector('#t2').innerHTML += `<li>${prompt('name of participant ' + (i+1))}</li>`;
}

