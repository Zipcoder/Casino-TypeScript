/// <reference path="Game.ts" />
abstract class CardGame{

    abstract deck: Deck;

    
    // constructor(){
    //     this.deck = new Deck;
    //     this.cardPlayers = []
    // }

    // getCardPlayers(){
    //     return this.cardPlayers;
    // }

    // addCardPlayer(cardPlayer: CardPlayer){
    //     this.getCardPlayers().push(cardPlayer);
    // }



    // showPlayerHand(){
    //     for(var i = 0; i< this.getCardPlayers()[0].getHand().length;i++){
    //         console.log(this.getCardPlayers()[0].getHand()[i].getValue()
    //              + ", " + this.getCardPlayers()[0].getHand()[i].getSuit());
    //     }
    // }
    //
    // showDealerHand(){
    //     for(var i = 0; i< this.getCardPlayers()[1].getHand().length;i++){
    //         console.log(this.getCardPlayers()[1].getHand()[i].getValue()
    //              + ", " + this.getCardPlayers()[1].getHand()[i].getSuit());
    //     }
    // }
}