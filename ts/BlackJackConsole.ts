/// <reference path="BlackJack.ts" />
/// <reference path="BlackJackPlayer.ts" />
/// <reference path="CardPlayer.ts" />


class BlackJackConsole {

    displayPlayerScore: any;
    userInputEle: any;

    game: BlackJack;
    player: BlackJackPlayer;
    playerScore: number;

    constructor(player: Player) {
        this.displayPlayerScore = document.getElementById("display player score");
        this.userInputEle = document.getElementById("user_input");

        this.player = new BlackJackPlayer(player);

    }

    public init() {
        this.game = new BlackJack(this.player);
        this.playerScore = this.game.calculatePlayerScore(this.player);

        changeDisplay("Your current score is: " + this.playerScore.toString());
    }

    public hit() {
        this.game.hitPlayer(this.player);
        this.playerScore = this.game.calculatePlayerScore(this.player);
        if(this.playerScore <= 21) {
            changeDisplay("You now have: " + this.playerScore + "<br />");
            changeDisplay("Would you like to hit or stay?");
        }
        else {
            changeDisplay("Your current score is: " + this.playerScore + "<br />");
            changeDisplay("You lose!");
        }
    }

    public stay() {
        // Do the dealer stuff here
    }
}