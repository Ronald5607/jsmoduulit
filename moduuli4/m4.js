'use strict';
const tvmaze = 'https://api.tvmaze.com/search/shows?q=';
const section = document.getElementById('target');
const dialog = document.querySelector('dialog');
const dialogiframe = document.querySelector('dialog iframe');

async function getter(url, arg) {
    const response = await fetch(url + arg);
    return await response.json();
}

document.querySelector('dialog span').addEventListener('click', () => {
    dialog.style.pointerEvents = 'none';
    dialog.close();
    dialogiframe.setAttribute('src', '');
})

async function articlemaker(arg) {
    const data = await getter(tvmaze, arg);
    for (let show of data) {

        const article = document.createElement('article');

        //Name of the show
        const heading = document.createElement('h2');
        heading.innerText = show['show']['name'];
        article.appendChild(heading);

        //Adding image
        const image = document.createElement('img');
        try {
            image.setAttribute('src', show['show']['image']['medium']);
            image.setAttribute('alt', show['show']['name']);
        } catch (error) {
            image.setAttribute('src', 'https://via.placeholder.com/210x295?text=img+not+found');
        }
        article.appendChild(image);

        //Genres
        const genres = document.createElement('p');
        genres.setAttribute('id', 'genre');
        for (let i = 0; i < show['show']['genres'].length; i++) {
            genres.innerText += show['show']['genres'][i];
            if (i < show['show']['genres'].length - 1) {
                genres.innerText += ' | ';
            }
        }
        article.appendChild(genres);

        //Summary
        article.innerHTML += show['show']['summary'];

        //link
        const link = document.createElement('button');
        link.addEventListener('click',() => {
            dialogiframe.setAttribute('src', show['show']['url']);

            dialog.style.pointerEvents = 'all';
            dialog.showModal();
        });
        link.innerText = 'Learn more';
        article.appendChild(link);

        section.appendChild(article);

        }
}

document.querySelector('.container form').addEventListener('submit', (evt) => {
    evt.preventDefault();
    section.innerHTML = '';
    const name = document.getElementById('query');

    articlemaker(name.value);
})

































getter(tvmaze, 'high').then((result) => {console.log(result)});
// getter(tvmaze, 'high').then((result) => {
//     const a = document.createElement('p');
// const img = document.createElement('img');
//     a.innerText = result[0]['show']['name'] + ' ' + result[0]['show']['url'];
//     document.body.innerHTML += result[0]['show']['summary'];
//     img.setAttribute('src', result[0]['show']['image']['medium']);
//     document.body.appendChild(a);
//     document.body.appendChild(img);
// });
