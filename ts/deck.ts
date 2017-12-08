///<reference path="card.ts"/>
///<reference path="suit.ts"/>
///<reference path="cardValue.ts"/>


class Deck {


    public cards: Card[] = new Array();

    constructor() {
        this.populate();
        this.shuffle();
        console.log(this.getDeckSize() + " " + this.cards.pop().toString());
    }

    private populate() {
        for (let suit of Suit.getAllSymbols()) {
            for(let card of CardValue.getAllValues()) {
                this.cards.push(new Card(suit, card));
            }
        }
        // for (let suit of Suit) {
        //     // console.log(Suit[suit]);
        //     let cardValues = CardValue.getValues() as CardValue[];
        //
        //     for (let value of cardValues) {
        //
        //         console.log("TypeOf = " + typeof value);
        //         console.log("Value = " + value);
        //         // console.log("TypeOf Object = " + typeof object);
        //         // console.log("Object = " + object);
        //         console.log("Object Value = " + value.getValue());
        //
        //         // let cardVal = value as CardValue;
        //
        //         // console.log(value);
        //         // this.cards.push(new Card(suit, value.getValue()));
        //     }
        // }
    }

    public shuffle() {
        let counter = this.cards.length;

        while (counter > 0) {
            let index = Math.floor(Math.random() * counter);
            counter--;
            let temp = this.cards[counter];
            this.cards[counter] = this.cards[index];
            this.cards[index] = temp;
        }
    }


    public getDeckSize(): number {
        return this.cards.length;
    }
}