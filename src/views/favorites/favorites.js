import { AbstractView } from '../../common/view.js';
import onChange from 'on-change';
import { Header } from '../../components/header/header.js';
import { CardList } from '../../components/cardList/cardList.js';

export class FavoritesView extends AbstractView {
  constructor(appState) {
    super();
    this.setTitle('Favorites books');

    this.appState = appState;
    this.appState = onChange(this.appState, (path) => this.appStateHook(path));
  }

  destroy() {
    onChange.unsubscribe(this.appState);
  }

  appStateHook(path) {
    if (path === 'favorites') {
      this.render();
    }
  }

  render() {
    const favorites = document.createElement('div');
    const header = new Header(this.appState).render();
    const cardList = new CardList(this.appState, this.appState.favorites).render();

    favorites.append(cardList);
    favorites.prepend(header);
    this.app.innerHTML = '';
    this.app.append(favorites);
  }
}
