const button = document.querySelector('.btn');
const body = document.querySelector('body');
body.style.backgroundColor = 'yellow';
let color = body.style.backgroundColor;
button.innerText = color;

button.addEventListener('click', () => {
    if (body.style.backgroundColor == 'yellow' ) {
        body.style.backgroundColor = 'pink';
        color = body.style.backgroundColor;
        button.innerText = color;
    } 
    else if (body.style.backgroundColor == 'pink' ) {
        body.style.backgroundColor = 'green';
        color = body.style.backgroundColor;
        button.innerText = color;
    } 
    else if (body.style.backgroundColor == 'green' ) {
        body.style.backgroundColor = 'black';
        color = body.style.backgroundColor;
        button.innerText = color;
    } 
    else if (body.style.backgroundColor == 'black' ) {
        body.style.backgroundColor = 'khaki';
        color = body.style.backgroundColor;
        button.innerText = color;
    } 
    else if (body.style.backgroundColor == 'khaki' ) {
        body.style.backgroundColor = 'orange';
        color = body.style.backgroundColor;
        button.innerText = color;
    } 
    else if (body.style.backgroundColor == 'orange' ) {
        body.style.backgroundColor = 'tomato';
        color = body.style.backgroundColor;
        button.innerText = color;
    } 
    else if (body.style.backgroundColor == 'tomato' ) {
        body.style.backgroundColor = 'gray';
        color = body.style.backgroundColor;
        button.innerText = color;
    } 
    else if (body.style.backgroundColor == 'gray' ) {
        body.style.backgroundColor = 'yellow';
        color = body.style.backgroundColor;
        button.innerText = color;
    } 
});

