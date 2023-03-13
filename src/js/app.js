import './modules/isWebp.js';
import tabs from './modules/tabs.js';
import scroll from './modules/scroll.js';
import menu from './modules/menu.js';

window.addEventListener('DOMContentLoaded', () => {
    tabs('.works__tab', '.works__content')
    scroll('.scroll_top')
    menu('.header__btn', '.right__menu-btn__close', '.right__menu')
})





