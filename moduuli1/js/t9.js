
const PRIME_CANDIDATE = parseInt(prompt('give integer to test if it\'s prime'));

let b_prime = true;

for (let x = 2; x < PRIME_CANDIDATE; x++) {
    if (PRIME_CANDIDATE % x == 0) {
        b_prime = false;
    }
}

if (b_prime && PRIME_CANDIDATE > 1) {
    document.querySelector('#prime').innerHTML = PRIME_CANDIDATE + ' is a prime.';
} else {
    document.querySelector('#prime').innerHTML = PRIME_CANDIDATE + ' is not a prime.';
}