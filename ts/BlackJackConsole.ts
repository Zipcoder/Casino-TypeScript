/// <reference path="BlackJack.ts" />
/// <reference path="BlackJackPlayer.ts" />
/// <reference path="CardPlayer.ts" />
/// <reference path="Player.ts" />


class BlackJackConsole {

    displayPlayerScore: any;
    hitButtonInputEle: any;
    stayButtonInputEle: any;
    playButtonInputEle: any;

    game: BlackJack;
    player: BlackJackPlayer;
    dealer: BlackJackPlayer;
    playerScore: number;
    wallet: number;

    constructor(player: Player) {
       // this.displayPlayerScore = document.getElementById("display player score");
        this.hitButtonInputEle = document.getElementById("hit");
        this.stayButtonInputEle = document.getElementById("stay");
        this.playButtonInputEle = document.getElementById("play again");

        this.player = new BlackJackPlayer(player);
        this.wallet = 1000;

    }

    public init() {
        this.game = new BlackJack(this.player);
        this.dealer = this.game.getDealer()
        
        this.dealer.clearHand();
        this.player.clearHand();
        clearHTMLTag("player-cards");
        clearHTMLTag("dealer-cards");
        this.game.dealCards(this.dealer);
        this.game.dealCards(this.player);

         this.playButtonInputEle.disabled = true;
         this.hitButtonInputEle.disabled = false;
         this.stayButtonInputEle.disabled = false;
    
        var dealerShowing = this.dealer.getHand()[0].getValue();

        this.playerScore = this.game.calculatePlayerScore(this.player);
        changeDisplay("You were dealt a hand of " +this.player.displayPlayerHand() +" totaling "+  this.playerScore+ 
                    "<br>The dealer is showing " + dealerShowing +" hit or stay?<br>");
        this.player.displayPlayerHandImages("player-cards");
        this.dealer.displayPlayerHandImageByIndex(0, "dealer-cards");
    }

    public bet() {
        changeDisplay("Your current balance is " + this.player.Wallet);
        //need to ask how much they want to bet
        //need to call takeBet here
        //need to update wallet (subtract if player loses bet and add amount to wallet if player wins) 
    }

    public hit() {
        this.game.hitPlayer(this.player);
        this.playerScore = this.game.calculatePlayerScore(this.player);
        if(this.playerScore <= 21) {
            changeDisplay("You now have: " + this.player.displayPlayerHand()+" worth "+ this.playerScore + "<br />");
            changeDisplay("Would you like to hit or stay?");
            clearHTMLTag("player-cards");
            this.player.displayPlayerHandImages("player-cards");  
        }
        else {
            changeDisplay("Your hand of " +this.player.displayPlayerHand() +" worth " + this.playerScore + " is a bust!<br />You lose!");
            clearHTMLTag("player-cards");
            this.player.displayPlayerHandImages("player-cards");  
            displayLoserImage();
            this.hitButtonInputEle.disabled = true;
            this.stayButtonInputEle.disabled = true;
            this.playButtonInputEle.disabled = false;
            
        }
    }

    public stay() {
        // Do the dealer stuff here
        var dealerFinalHand = this.game.dealerPlays();
        changeDisplay("Dealer plays out the hand, " + dealerFinalHand );
        clearHTMLTag("dealer-cards");
        this.dealer.displayPlayerHandImages("dealer-cards");
        this.hitButtonInputEle.disabled = true;
        this.stayButtonInputEle.disabled = true;
        this.playButtonInputEle.disabled = false;
        
        if(this.game.isPlayerWinner(this.player, this.dealer)){
            changeDisplay("Winner winner, chicken dinner!")
            displayWinnerImage();

        }else{
            changeDisplay("U, G, L, Y, you ain't got no alibi. You're a loser.");
            displayLoserImage();
        }
    }

    public reset(){
        clearHTMLTag("display");
        this.init();
    }
}