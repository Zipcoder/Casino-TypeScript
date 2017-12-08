/// <reference path="CardPlayer.ts" />

class BlackJackPlayer extends CardPlayer{

    constructor(player: Player){
        super(player);
    }

    hasAceInHand(): boolean{
        return this.hasCardOfValue("Ace");
    }
}