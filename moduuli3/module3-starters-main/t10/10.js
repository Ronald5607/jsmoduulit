
const source = document.getElementById('source');
const target = document.getElementById('target');

source.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const inputs = document.querySelectorAll('input');
    target.innerText = inputs[0].value + inputs[1].value;
})