/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
require('../scss/main.scss');

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// const $ = require('jquery');



require('../js/components.js');




const avatarArr = document.querySelectorAll('.img-grid > .img');

avatarArr.forEach(function ($avatar) {
    $avatar.addEventListener('click', function(e) {
        avatarArr.forEach(function ($avatarSub) {
            $avatarSub.classList.remove('active');
        });
        e.currentTarget.classList.add('active');
    });
});
