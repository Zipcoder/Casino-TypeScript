/// <reference path="CardPlayer.ts" />

class BlackJackPlayer extends CardPlayer{

    constructor(){
        super();
    }

    hasAceInHand(): boolean{
        return this.hasCardOfValue("Ace");
    }
}