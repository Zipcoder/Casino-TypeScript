import {PlayingCard} from "./PlayingCard";

class Hand {

    // private ArrayList<PlayingCard> cards = new ArrayList<>();
    cards: PlayingCard[] = new Array<PlayingCard>();

    public constructor() {
    }

    toString() {
        if (this.isHandEmpty()) {
            return "If there's nothing in your hand, is it a hand?";
        } else {
            let output: string = "";
            this.cards.sort();
            // I took this out of the sort(## Comparator.comparing(PlayingCard::getValue ##) )
            // if it doesn't work, then I'll need to make a comparator
            for (let i = 0; i < this.cards.length; i++) {
                output += " [" + this.cards[i] + "] ";
            }
            return output;
        }
    }

    getAllCards() {
        return this.cards;
    }

    isHandEmpty() {
        return this.cards.length == 0;
    }

    addCard(card) {
        this.cards.push(card);
    }

    removeCard(card) {
        let index: number = this.cards.indexOf(card);
        if (index != 0 && index != this.cards.length) {

        }
        this.cards = this.cards.slice(0, index - 1).concat(this.cards.slice(index + 1));
    }

    getCard(card) {
        this.removeCard(card);
        return card;
    }

    clear() {
        this.cards = new Array();
    }
}
