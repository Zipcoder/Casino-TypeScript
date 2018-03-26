///<reference path="../CardUtils/Card.ts"/>
///<reference path="../CardUtils/Deck.ts"/>

import {Card} from "../CardUtils/Card";
import {Deck} from "../CardUtils/Deck";
import {CardGamePlayer} from "./CardGamePlayer";

export class CardGame {

    deck : Card[];

    constructor(){
        this.deck = new Deck().getDeck();
    }

    dealCards(dealer: CardGamePlayer, player: CardGamePlayer, amount: number){
        //clear hands
        dealer.clearHand();
        player.clearHand();

        for (let i = 0; i < amount; i++) {
            dealer.addCard(this.deck.pop());
            player.addCard(this.deck.pop());
        }
    }

    dealCard (player: CardGamePlayer, amount: number){
        for (let i = 0; i < amount; i++) {
            player.addCard(this.deck.pop());
        }
    }

    createNewDeck():void{
        this.deck = new Deck().getDeck();
    }

    getDeck():Card[]{
        return this.deck;
    }
}