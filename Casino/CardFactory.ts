import Deck from "./Deck";
import {Cards, Suit} from './Card';
import {CardShuffler, Shuffler} from "./CardShuffler";

let buildStandardDeck = function(): Cards[] {
    let cards = new Array<Cards>();

    for(let suit in Suit) {
        if(!isNaN(parseInt(suit))) {
            let suitAsNumber: number = parseInt(suit);
            for(let rank = 1; rank < 14; rank++) {
                cards.push(new Cards(rank, suitAsNumber));
            }
        }
    }
    return cards;
};

export class CardFactory {
    public static createStandardDeck(): Deck {
        return new Deck(buildStandardDeck(), new CardShuffler());
    }
}