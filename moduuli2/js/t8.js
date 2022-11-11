

function concat(strings) {
    return strings.reduce((a, b) => a + b);
}

const strings = ['aaa', 'bbbb', 'cccc'];

document.querySelector('#t8').innerHTML = concat(strings);