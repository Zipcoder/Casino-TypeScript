/// <reference path="Game.ts" />
abstract class CardGame{

    private deck: Deck;
    protected cardPlayers: CardPlayer[];
    
    constructor(){
        this.deck = new Deck;
        this.cardPlayers = []
    }

    getCardPlayers(){
        return this.cardPlayers;
    }

    addCardPlayer(cardPlayer: CardPlayer){
        this.getCardPlayers().push(cardPlayer);
    }

    deal(numCards: number){
        deck.shuffle(47);
        for(var i = 0; i < numCards; i++){
            for(var j = 0; j < this.getCardPlayers().length; j++){
                var nextCard = deck.getTopCard();
                this.getCardPlayers()[j].getHand().push(nextCard);
            }
        }
}

    showPlayerHand(){
        for(var i = 0; i< this.getCardPlayers()[0].getHand().length;i++){
            console.log(this.getCardPlayers()[0].getHand()[i].getValue()
                 + ", "+this.getCardPlayers()[0].getHand()[i].getSuit());
        }
    }

}