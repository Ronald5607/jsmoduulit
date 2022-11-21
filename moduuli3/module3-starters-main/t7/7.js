
const trigger = document.getElementById('trigger');
const target = document.getElementById('target');

trigger.addEventListener('mouseenter', () => {
    target.setAttribute('src', 'img/picB.jpg');
})
trigger.addEventListener('mouseleave', () => {
    target.setAttribute('src', 'img/picA.jpg')
})