
const calc = document.getElementById('calculation');
const start = document.getElementById('start');
const result = document.getElementById('result');

function splitter(operation) {
    const nums = calc.value.split(operation);
    for (let i = 0; i < nums.length; i++) {
        nums[i] = parseInt(nums[i]);
    }
    return nums
}

start.addEventListener('click', () => {
    if (calc.value.includes('+')) {
        const nums = splitter('+');
        result.innerText = nums.reduce((a,b) => {return a+b});
    } else if (calc.value.includes('-')) {
        const nums = splitter('-');
        result.innerText = nums.reduce((a,b) => {return a-b});
    } else if (calc.value.includes('/')) {
        const nums = splitter('/');
        result.innerText = nums.reduce((a,b) => {return a/b});
    } else if (calc.value.includes('*')) {
        const nums = splitter('*');
        result.innerText = nums.reduce((a, b) => {return a*b});
    } else {
        result.innerText = 'error';
    }
})