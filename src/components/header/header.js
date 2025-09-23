import { DivComponent } from '../../common/div-component.js';
import './header.css';

const logo = '/static/img/logo.svg';
const search = '/static/img/search.svg';
const favorites = '/static/img/favorites.svg';

export class Header extends DivComponent {
  constructor(appState) {
    super();
    this.appState = appState;
  }

  render() {
    this.el.innerHTML = '';
    this.el.classList.add('header');
    this.el.innerHTML = `
      <div class='logo'>
        <img src="${logo}" alt="Logo" />
      </div>
      <div class="menu" >
        <a class="menu__item active" href="#">
          <img src="${search}" alt="search" />
          Book search
        </a>
        <a class="menu__item" href="#favorites">
          <img src="${favorites}" alt="favorites" />
          favorites
          <div class='favoritesCount'>
            ${this.appState.favorites.length}
          </div>
        </a>
      </div>
    `;
    return this.el;
  }
}
