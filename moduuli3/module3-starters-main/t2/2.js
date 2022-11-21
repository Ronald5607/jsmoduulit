const element = document.querySelector('#target');

function addlist(text) {
    const list = document.createElement('li');
    list.innerText = text;
    return list;
}

element.appendChild(addlist('First item'));
const list = addlist('Second item');
list.className = 'my-item';
element.appendChild(list);
element.appendChild(addlist('Third item'));