import './sass/main.scss';
import cards from './menu.json';
import menuCardsTpl from './templates/menuCardsTpl.hbs';
import onSwitchTogglle from './js/switch-toggle.js';

const menuCards = menuCardsTpl(cards);
const refs = {
    switchToggle: document.querySelector('#theme-switch-toggle'),
    menuRender: document.querySelector('.js-menu'),
};

savedThemeLoad ();

refs.menuRender.insertAdjacentHTML('afterbegin', menuCards);
refs.switchToggle.addEventListener('change', onSwitchTogglle);


function savedThemeLoad () {
    const savedTheme = localStorage.getItem('Theme');
    const savedCheckbox = localStorage.getItem('checked');
    if (savedTheme) {
        document.querySelector('body').classList.add(savedTheme);
        if (savedTheme === 'dark-theme') {
            refs.switchToggle.checked = true;
        };
    };
};

