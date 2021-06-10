import './sass/main.scss';
import cards from './menu.json';
import menuCardsTpl from './templates/menuCardsTpl.hbs';
import {onChangeCheckbox} from './js/checkbox.js';

const menuCards = menuCardsTpl(cards);
const menuRender = document.querySelector('.js-menu');
const checkboxRef = document.querySelector('#theme-switch-toggle');

savedThemeLoad ();

menuRender.insertAdjacentHTML('afterbegin', menuCards);
checkboxRef.addEventListener('change', onChangeCheckbox);

function savedThemeLoad () {
    const savedTheme = localStorage.getItem('Theme');
    const bodyRef = document.querySelector('body');
    if (savedTheme) {
        bodyRef.classList.add(savedTheme);
        if (savedTheme === 'dark-theme') {
            checkboxRef.checked = true;
        };
    };
}
