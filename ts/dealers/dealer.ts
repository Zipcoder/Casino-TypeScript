///<reference path="../cards/deck.ts"/>

class Dealer extends Deck{

    dealer = Dealer;
    dealtCard = Card;
    deck = Deck;

    constructor() {
        super();
    }

    shuffle (): void {
        this.cards.sort(() => Math.floor(Math.random() * 2 - 1));
    }

    draw(): string {
        let cardDrawn = this.cards[0];
        return cardDrawn.name;
    }

}