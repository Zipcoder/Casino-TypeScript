/// <reference path="BlackJackPlayer.ts" />
/// <reference path="CardGame.ts" />
/// <reference path="CardPlayer.ts" />
/// <reference path="Deck.ts" />

//commit merge

class BlackJack extends CardGame{
    private dealer: BlackJackPlayer;
    
    constructor(){
        super();
        this.dealer = new BlackJackPlayer();
    }

    thisIsaChange(){
        
    }
    getDealer(): BlackJackPlayer{
        return this.dealer;
    }

    hitPlayer(blackJackPlayer: BlackJackPlayer){
        var nextCard = deck.getTopCard();
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
    
    calculatePlayerScore(blackJackPlayer: CardPlayer): number{
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
var blackJackPlayer = new CardPlayer();
blackJack.addCardPlayer(blackJackPlayer);
blackJack.deal(2);
var score = blackJack.calculatePlayerScore(blackJackPlayer);
console.log(score);

