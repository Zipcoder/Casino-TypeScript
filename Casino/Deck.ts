import {Cards, Suit} from "./card";
import {CardShuffler} from "./CardShuffler";

interface DeckofCards {
    privateCards: Cards[];
    shuffle(): void;
    dealCard(): Cards;
}

let privateCards: Cards[];

let getNextCard = function*() {
    while(privateCards.length > 0) {
        let card: Cards = privateCards.splice(0, 1)[0]
        yield card;
    }
};

let cardSequence: IterableIterator<Cards> = getNextCard();


class Deck implements DeckofCards{
    cardShuffler: CardShuffler;
    privateCards: Cards[];

    constructor(cards: Cards[], cardShuffler: CardShuffler) {
        privateCards = cards.slice(0);
        this.cardShuffler = cardShuffler;
    }

    shuffle() {
        let shuffledDeck = this.cardShuffler.shuffle(privateCards);
        privateCards = shuffledDeck.slice(0);
    }

    getCards(): Cards[] {
        return privateCards;
    }

    dealCard(): Cards {
        return cardSequence.next().value;
    }
}
export default Deck;