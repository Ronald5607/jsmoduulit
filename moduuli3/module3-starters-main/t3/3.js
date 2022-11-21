'use strict';
const names = ['John', 'Paul', 'Jones'];

const element = document.getElementById('target');

for (let name of names) {
    element.innerHTML += '<li>' + name + '</li>';
}
