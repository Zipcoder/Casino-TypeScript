/// <reference path="BlackJack.ts" />
/// <reference path="BlackJackPlayer.ts" />
/// <reference path="CardPlayer.ts" />


class BlackJackConsole {

    displayPlayerScore: any;
    userInputEle: any;

    game: BlackJack;
    player: BlackJackPlayer;
    dealer: BlackJackPlayer;
    playerScore: number;

    constructor(player: Player) {
        this.displayPlayerScore = document.getElementById("display player score");
        this.userInputEle = document.getElementById("user_input");

        this.player = new BlackJackPlayer(player);

    }

    public init() {
        this.game = new BlackJack(this.player);
        this.dealer = this.game.getDealer()
        
        this.dealer.clearHand();
        this.player.clearHand();
        this.game.dealCards(this.dealer);
        this.game.dealCards(this.player);
        
        var dealerShowing = this.dealer.getHand()[0].getValue();

        this.playerScore = this.game.calculatePlayerScore(this.player);
        changeDisplay("Your were dealt a hand of " +this.player.displayPlayerHand() +" worth "+  this.playerScore.toString()+ 
                    "<br>The dealer is showing " + dealerShowing +" hit or stay?<br>");
    }

    public hit() {
        this.game.hitPlayer(this.player);
        this.playerScore = this.game.calculatePlayerScore(this.player);
        if(this.playerScore <= 21) {
            changeDisplay("You now have: " + this.player.displayPlayerHand()+" worth "+ this.playerScore + "<br />");
            changeDisplay("Would you like to hit or stay?");
        }
        else {
            changeDisplay("Your hand of " +this.player.displayPlayerHand() +" worth " + this.playerScore + " is a bust!<br />");
            changeDisplay("You lose!");
        }
    }

    public stay() {
        // Do the dealer stuff here
        var dealerFinalHand = this.game.dealerPlays();
        changeDisplay("Dealer plays out the hand, "+ dealerFinalHand);
        
        if(this.game.isPlayerWinner(this.player, this.dealer)){
            changeDisplay("Winner winner, chicken dinner!")
        }else{
            changeDisplay("U, G, L, Y, you ain't got no alibi. You're a loser.")
        }
    }

    public reset(){
        clearDisplay();
        this.init();
    }
}