/// <reference path="BlackJackPlayer.ts" />
/// <reference path="CardGame.ts" />
/// <reference path="Deck.ts" />

class BlackJack extends CardGame{
    private dealer: BlackJackPlayer;
    private blackJackPlayers: BlackJackPlayer[];
    private deck: Deck;

    constructor(){
        super();
        this.dealer = new BlackJackPlayer();
        this.blackJackPlayers = [];
        this.deck = new Deck();
    }

    addBlackJackPlayer(player: BlackJackPlayer){
        this.blackJackPlayers.push(player);
    }

    getDealer(): BlackJackPlayer{
        return this.dealer;
    }

    dealInitialCards(){
        this.deck.shuffle(47);
        for(var i = 0; i < 2; i++){
            for(var j = 0; j < this.blackJackPlayers.length; j++){
                var nextCard = this.deck.getTopCard();
                this.blackJackPlayers[j].getHand().push(nextCard);
            }
        }
    }

    hitPlayer(blackJackPlayer: BlackJackPlayer){
        var nextCard = this.deck.getTopCard();
        blackJackPlayer.getHand().push(nextCard);
    }

    getCardPointValue(card: Card): number{
        if(card.getValue() == "K"||
            card.getValue() == "Q" || 
            card.getValue() == "J") {
                return 10;
            }
        else if(card.getValue() == "A"){
            return 1;
        }
        else{
            return parseInt(card.getValue());
        }
    }
    
    calculatePlayerScore(blackJackPlayer: BlackJackPlayer): number{
        var score = 0;
        for(var i = 0; i < blackJackPlayer.getHand().length; i++){
            score += blackJack.getCardPointValue(blackJackPlayer.getHand()[i]);
        }
        return score;
    }

    // play()     
    pressPlay(){
        //creates a blackJackGame
        //creates a player and a dealer
        //adds player/dealer to the gam
    }
    
    askForHitOrStay(){

    }
    
    dealerPlay(){
    }
    
    isPlayerWinner(blackJackPlayer: BlackJackPlayer, dealer: BlackJackPlayer): boolean{
        return false;
    }
    
    playAgain(input: boolean): boolean{
        return input;

    }
    
}
    


var blackJack = new BlackJack();
var blackJackPlayer = new BlackJackPlayer();
blackJack.addBlackJackPlayer(blackJackPlayer);
blackJack.dealInitialCards();
var score = blackJack.calculatePlayerScore(blackJackPlayer);
console.log(score);

