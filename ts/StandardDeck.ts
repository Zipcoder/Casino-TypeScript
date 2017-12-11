import {CardPile} from './CardPile'
import {Card} from './Card'

export class StandardDeck extends CardPile {

  constructor() {
    super();
    this.populateStandardDeck();
  }

  populateStandardDeck() {
    for(let faceValue in Card.faceValues) {
      for(let suit in Card.suits) {
        this.addCardToPile(new Card(faceValue, suit));
      }
    }
    this.shuffle();
  }
}
