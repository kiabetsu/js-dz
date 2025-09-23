import { DivComponent } from '../../common/div-component';
import './search.css';

export class Search extends DivComponent {
  constructor(state) {
    super();
    this.state = state;
  }

  search() {
    const value = this.el.querySelector('input').value;
    this.state.searchQuery = value;
  }

  render() {
    this.el.classList.add('search');
    this.el.innerHTML = `
      <div class="search__wrapper">
        <input
          type="text"
          class="search__input"
          placeholder="Find a book or author...."
          value="${this.state.searchQuery ? this.state.searchQuery : ''}"
        />
        <img src="/static/img/search.svg" alt="search icon" />
      </div>
      <button><img src="/static/img/search-white.svg" alt="" /></button>
    `;
    this.el.querySelector('button').addEventListener('click', () => this.search());
    this.el.querySelector('input').addEventListener('keydown', (event) => {
      if (event.code === 'Enter') {
        this.search();
      }
    });
    return this.el;
  }
}
