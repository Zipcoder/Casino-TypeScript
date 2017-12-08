import {Player} from './Player';
import {CardGame} from './CardGame';

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

    public hasCardsOfRank(rank:Card.FaceValue):boolean {
        let hand:CardPile = this.getHand();
        for(Card.Suit suit : Card.Suit.values()) {
             cardToCheck:Card = new Card(rank, suit);
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
