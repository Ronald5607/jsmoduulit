
const button = document.getElementById('start');
const operation = document.getElementById('operation');
const result = document.getElementById('result');

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');

button.addEventListener('click', () => {
    switch (operation.value) {
        case 'add':
            result.innerText = (parseInt(num1.value) + parseInt(num2.value)).toString();
            break;
        case 'sub':
            result.innerText = (parseInt(num1.value) - parseInt(num2.value)).toString();
            break;
        case 'multi':
            result.innerText = (parseInt(num1.value) * parseInt(num2.value)).toString();
            break;
        case 'div':
            if (num2.value === '0') {
                result.innerText = 'No division by 0';
            } else {
                result.innerText = (parseInt(num1.value) / parseInt(num2.value)).toString();
            }
            break;
    }
})