
if (confirm('Should I calculate the square root?')) {
    const NUM = parseInt(prompt('Give me a number'));
    if ((NUM < 0) || (!NUM)) {
        document.querySelector('#sqrt').innerHTML = 'The square root of a negative number is not defined.';
    } else {
        document.querySelector('#sqrt').innerHTML = `square root of ${NUM} is ${Math.sqrt(NUM)}.`;
    }
} else {
    document.querySelector('#sqrt').innerHTML = 'The square root is not calculated.';
}