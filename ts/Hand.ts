///<reference path="PlayingCard.ts"/>

import {PlayingCard} from "./PlayingCard";

export class Hand {

    // private ArrayList<PlayingCard> cards = new ArrayList<>();
    private cards: PlayingCard[] = new Array<PlayingCard>();

    public constructor() {
    }

    public toString() {
        if (this.isHandEmpty()) {
            return "If there's nothing in your hand, is it a hand?";
        } else {
            let output: string = "";
            this.cards.sort();
            // I took this out of the sort(## Comparator.comparing(PlayingCard::getValue) )
            // if it doesn't work, then I'll need to make a comparator
            for (let i = 0; i < this.cards.length; i++) {
                output += " [" + this.cards[i] + "] ";
            }
            return output;
        }
    }

    public getAllCards() {
        return this.cards;
    }

    public isHandEmpty() {
        return this.cards.length == 0;
    }

    public addCard(card) {
        this.cards.push(card);
    }

    public removeCard(card) {
        let index: number = this.cards.indexOf(card);
        if (index != 0 && index != this.cards.length) {

        }
        this.cards = this.cards.slice(0, index - 1).concat(this.cards.slice(index + 1));
    }

    public getCard(card) {
        this.removeCard(card);
        return card;
    }

    public clear() {
        this.cards = new Array();
    }
}
