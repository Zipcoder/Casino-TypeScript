///<reference path="PlayingCard.ts"/>

// import {PlayingCard} from "./PlayingCard";

class Hand {

    private cards: PlayingCard[] = new Array<PlayingCard>();

    public constructor() {
    }

    public toString(): string {
        if (this.isHandEmpty()) {
            return "If there's nothing in your hand, is it a hand?";
        } else {
            let output: string = "";
            this.cards.sort();
            // I took this out of the sort(## Comparator.comparing(PlayingCard::getValue) )
            // if it doesn't work, then we'll need to make a comparator
            for (let i = 0; i < this.cards.length; i++) {
                output += " [" + this.cards[i] + "] ";
            }
            return output;
        }
    }

    public getAllCards(): PlayingCard[] {
        return this.cards;
    }

    public isHandEmpty(): boolean {
        return this.cards.length == 0;
    }

    public addCard(card: PlayingCard): void {
        this.cards.push(card);
    }

    public removeCard(card : PlayingCard): void {
        let index: number = this.cards.indexOf(card);
        if (index != 0 && index != this.cards.length) {

        }
        this.cards = this.cards.slice(0, index - 1).concat(this.cards.slice(index + 1));
    }

    public removeAllOf(movingCards: PlayingCard[]): void {
        for(let i = 0; i < movingCards.length; i++) {
            for(let j = 0; j < this.cards.length; j++) {
                if(movingCards[i] === this.cards[j]) {
                    this.cards.splice(j, 1);
                }
            }
        }
    }

    public getCard(card : PlayingCard): PlayingCard {
        this.removeCard(card);
        return card;
    }

    public clear(): void {
        this.cards = new Array();
    }
}
