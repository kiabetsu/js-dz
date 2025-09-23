export class AbstractView {
  appState = [];

  constructor() {
    this.app = document.getElementById('root');
  }

  setTitle(title) {
    document.title = title;
  }

  render() {}

  destroy() {}
}
