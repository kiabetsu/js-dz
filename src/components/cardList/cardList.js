import { DivComponent } from '../../common/div-component';
import { Card } from '../card/card';
import './cardList.css';

export class CardList extends DivComponent {
  constructor(appState, state) {
    super();
    this.state = state;
    this.appState = appState;
  }

  render() {
    console.log(this.state);
    this.el.classList.add('classList');

    if (!this.state) {
      return this.el;
    }
    const cardGrid = document.createElement('div');
    cardGrid.classList.add('cardGrid');
    this.el.append(cardGrid);
    for (const card of this.state) {
      const cardComponent = new Card(this.appState, card);
      cardGrid.append(cardComponent.render());
    }

    return this.el;
  }
}
