import {Player} from './Player';
import {CardGame} from './CardGame';
import {CardPile} from './CardPile';
import {Card} from './Card';

export abstract class CardPlayer<T extends CardGame<T>> extends Player<T> {

    private hand = new CardPile();

    constructor( name:string) {
        super(name);
    }

    public addCardToHand(card:Card) {
        this.hand.addCardToPile(card);
    }

    public addCardsToHand( cardPile:CardPile) {
        this.hand.addCardsToPile(cardPile);
    }

    public hasCardsOfRank(rank: string):boolean {
        let hand:CardPile = this.getHand();
        for(let key in Object.keys(Card.suits)) {
          let suit = Object.keys(Card.suits)[key];
          let cardToCheck: Card = new Card(rank, suit);
          if(hand.contains(cardToCheck)) {
              return true;
          }
        }
        return false;
    }

    public getHand():CardPile {
        return this.hand;
    }

}
