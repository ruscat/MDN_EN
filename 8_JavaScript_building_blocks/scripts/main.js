'use strict';
let displayedImage = document.querySelector('.displayed-img');
let thumbBar = document.querySelector('.thumb-bar');

let btn = document.querySelector('button');
let overlay = document.querySelector('.overlay');

/* Looping through images */
for(let i=1; i<6; i++){
    let newImage = document.createElement('img');
    newImage.setAttribute('src', `images/pic${i}.jpg`);
    thumbBar.appendChild(newImage);
}
// from small to bid img handler
thumbBar.addEventListener('click', run);
function run(e) {
    let small= e.target;
    //console.log(small);
    displayedImage.setAttribute('src', small.getAttribute('src'));
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', run2);
function run2(e) {

}