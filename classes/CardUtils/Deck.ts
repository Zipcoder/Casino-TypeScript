///<reference path = "Card.ts"/>

import {Card} from "./Card";

export class Deck {

    private deck: Card[];
    private suits: string[];
    private faces: string[];

    constructor() {
        this.deck = [];
        this.suits = ["clubs","spades","hearts","diamonds"];
        this.faces = ["ace","2","3","4","5","6","7","8","9","10","jack","queen","king"]
    }

    newDeck(): void {
        //for every suit inside this.suits
        for (let suit of this.suits) {
            for (let i = 0; i < this.faces.length; i++) {
                //no zero value cards
                let num = i + 1;
                if (num > 10){
                    //all faces are 10
                    num = 10
                }
                this.deck.push(new Card(suit, num, this.faces[i]))
            }
        }
        this.shuffle();
    }

    getDeck():Card[]{
        this.newDeck();
        return this.deck;
    }

    shuffle():void{
        for (let i = 0; i < this.deck.length; i++) {
            let ranNum: number = Math.floor(Math.random()*this.deck.length);
            [this.deck[i], this.deck[ranNum]] = [this.deck[ranNum],this.deck[i]];
        }
    }
}

// checking if file works
var deck;
deck = new Deck();
deck.newDeck();
console.log(deck);
