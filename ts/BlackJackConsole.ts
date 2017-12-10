/// <reference path="BlackJack.ts" />
/// <reference path="BlackJackPlayer.ts" />
/// <reference path="CardPlayer.ts" />
/// <reference path="Player.ts" />


class BlackJackConsole {

    displayPlayerScore: any;
    hitButtonInputEle: any;
    stayButtonInputEle: any;
    playButtonInputEle: any;
    betInputEle:any;
    betButtonInputEle:any;

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
        this.betInputEle = document.getElementById("betInput");
        this.betButtonInputEle = document.getElementById("betButton");

        this.player = new BlackJackPlayer(player);
        this.wallet = 1000;

    }

    public init(){
        this.game = new BlackJack(this.player);
        this.dealer = this.game.getDealer()
        this.dealer.clearHand();
        this.player.clearHand();
        clearHTMLTag("player-cards");
        clearHTMLTag("dealer-cards");
        
        this.betInputEle.disabled = false;
        this.betButtonInputEle.disabled = false;
        this.playButtonInputEle.disabled = true;
        this.hitButtonInputEle.disabled = true;
        this.stayButtonInputEle.disabled = true;
        changeDisplay("Your current balance is $" + this.player.Wallet+ " enter your wager below and hit \"Bet\" to play! ");

    }

    public startGame() {
        
         this.playButtonInputEle.disabled = true;
         this.hitButtonInputEle.disabled = false;
         this.stayButtonInputEle.disabled = false;
         this.betInputEle.disabled = true;
         this.betButtonInputEle.disabled = true;
         this.game.dealCards(this.dealer);
         this.game.dealCards(this.player);
         
        var dealerShowing = this.dealer.getHand()[0].getValue();

        this.playerScore = this.game.calculatePlayerScore(this.player);
        changeDisplay("You were dealt a hand of " +this.player.displayPlayerHand() +" totaling "+  this.playerScore+ 
                    "<br>The dealer is showing " + dealerShowing +" hit or stay?<br>");
        this.player.displayPlayerHandImages("player-cards");
        this.dealer.displayPlayerHandImageByIndex(0, "dealer-cards");
        
        
    }

    public checkValidBet(){
        var errorMessage = document.getElementById("errorMessage");
        var input = parseInt(this.betInputEle.value);
        try{
            if(isNaN(input)) throw "Not a number";
            if(input< 0) throw "We don't accept negative wagers";
            if(input > this.player.Wallet) throw "Insufficient funds"
            clearHTMLTag("errorMessage");
            this.bet();
        }catch(error){
            document.getElementById("errorMessage").innerHTML = error;
        }
        
        
    }

    public bet() {
        //need to ask how much they want to bet 
       
        var bet = parseInt(this.betInputEle.value);

        this.game.takeBet(bet);
        changeDisplay("You have wagered $"+ this.game.Pot)
        this.startGame();
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
            this.player.Wallet -= this.game.Pot;
            changeDisplay("Your hand of " +this.player.displayPlayerHand() +" worth " + this.playerScore + " is a bust!<br />You lose! Your new balance is $" + this.player.Wallet);
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
            this.player.Wallet += this.game.Pot;
            changeDisplay("Winner winner, chicken dinner! Your new balance is $"+ this.player.Wallet)
            displayWinnerImage();

        }else{
            this.player.Wallet -= this.game.Pot;
            changeDisplay("You're a loser. Your new balance is $" +this.player.Wallet);
            displayLoserImage();
        }
    }

    public reset(){
        clearHTMLTag("display");
        this.init();
    }
}