import { AbstractView } from '../../common/view.js';
import onChange from 'on-change';
import { Header } from '../../components/header/header.js';
import { Search } from '../../components/search/search.js';
import { CardList } from '../../components/cardList/cardList.js';

export class MainView extends AbstractView {
  state = {
    list: [],
    numFound: 0,
    loading: false,
    searchQuery: undefined,
    offset: 0,
  };

  constructor(appState) {
    super();
    this.setTitle('Book search');

    this.appState = appState;
    this.appState = onChange(this.appState, (path) => this.appStateHook(path));

    this.state = onChange(this.state, (path) =>
      this.stateHook(path, this.state.searchQuery, this.state.offset),
    );
  }

  destroy() {
    onChange.unsubscribe(this.appState);
    onChange.unsubscribe(this.state);
  }

  appStateHook(path) {
    if (path === 'favorites') {
      this.render();
    }
  }

  async stateHook(path, q, offset) {
    if (path === 'searchQuery') {
      this.state.loading = true;
      const data = await this.loadList(q, offset);
      this.state.list = data.docs;
      this.state.numFound = data.numFound;
      this.state.loading = false;
    }
    if (path === 'list' || path === 'loading') {
      this.render();
    }
  }

  async loadList(q, offset) {
    const res = await fetch(`https://openlibrary.org/search.json?q=${q}&offset=${offset}`);
    return res.json();
  }

  render() {
    const main = document.createElement('div');
    const header = new Header(this.appState).render();
    const search = new Search(this.state).render();
    const cardList = new CardList(this.appState, this.state.list).render();
    main.append(search);
    const status = document.createElement('div');
    status.innerHTML = `
      <h1 class="searchStatus">
        ${
          this.state.loading
            ? 'Looking for your book...'
            : `Book found - ${this.state.numFound ? this.state.numFound : 0}`
        }  
      </h1>  
    `;
    main.append(status);
    main.append(cardList);
    main.prepend(header);
    this.app.innerHTML = '';
    this.app.append(main);
  }
}
