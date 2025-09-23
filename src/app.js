import { FavoritesView } from './views/favorites/favorites.js';
import { MainView } from './views/main/main.js';

class App {
  routs = [
    { rout: '', view: MainView },
    { rout: '#favorites', view: FavoritesView },
  ];

  appState = {
    favorites: [],
  };

  constructor() {
    window.addEventListener('hashchange', () => {
      this.rout();
    });
    this.rout();
  }

  rout() {
    if (this.currentView) {
      this.currentView.destroy();
    }
    const view = this.routs.find((r) => r.rout === location.hash).view;
    this.currentView = new view(this.appState);
    this.currentView.render();
  }
}

new App();
