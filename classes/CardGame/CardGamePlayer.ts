import {Card} from "../CardUtils/Card";
import {CasinoPlayer} from "../CasinoPlayer";

export class CardGamePlayer extends CasinoPlayer{

    hand: Card[];

    constructor(){
        super("Card Player", 1000);
        this.hand = [];
    }

    getHand():Card[]{
        return this.hand;
    }
    addCard(card:Card):void{
        this.hand.push(card);
    }

    clearHand(){
        this.hand = [];
    }

    setHand(hand:Card[]):void{
        this.hand = hand;
    }

    sort():void{
        this.hand.sort();
    }

    displayHand(sort:boolean):void{
        if(sort){
            this.sort()
        }
        let displayHand = document.getElementById("playerHand");
        displayHand.innerHTML = "";
        for (let i = 0; i < this.hand.length; i++) {
            let currentCard: Card = this.hand[i]
            displayHand.innerHTML += this.cardImg(currentCard);
        }
    }

    cardImg(card:Card):string{
        return card.getFace()+ "_of_" +card.getSuit();
    }

}