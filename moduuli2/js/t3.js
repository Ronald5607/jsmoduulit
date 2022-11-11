const dogs = [];

for (let i = 0; i < 6; i++) {
    dogs.push(prompt('give dogs name'))
}

dogs.sort()
dogs.reverse()

for (let dog of dogs) {
    document.querySelector('#t3').innerHTML += `<li>${dog}</li>`;
}