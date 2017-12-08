///<reference path="BlackJack.ts"/>
///<reference path="User.ts"/>

// import {BlackJack} from "./BlackJack";
// import {User} from "./User";

class BlackJackConsole {

    inputElement: any;
    displayElement: any;
    hitButton: any;
    continueButton: any;
    quitButton: any;
    submitBetButton: any;

    private game: BlackJack = new BlackJack();
    private player: User;
    private potBet: number;

    public constructor(user: User) {
        this.player = user;
    }

    updateDisplay(stringToDisplay: string): void {
        this.displayElement.innerHTML += "</br>" + stringToDisplay;
    }

    initialize(): void {
        this.displayElement = document.getElementById("display");
        this.inputElement = document.getElementById("input");
        this.inputElement.innerHTML = '<input type="number" name="bet_input" id="bet_input">' +
            '<input type="submit" value="Bet" id="bet_submit" onclick="blackjack.getInput()"/>    ' +
            '<input type="button" value="Hit" id="hit" onclick="blackjack.determineFirstRoller()"/>    ' +
            '<input type="button" value="Continue" id="continue" onclick="blackjack.welcomePlayer()"/>' +
            '<input type="button" value="Quit" id="quit" onclick="blackjack.finalize()"/>';
        this.submitBetButton = document.getElementById("bet_submit");
        this.hitButton = document.getElementById("hit");
        this.continueButton = document.getElementById("continue");
        this.quitButton = document.getElementById("quit");
    }

    finalize(): void {
        this.inputElement.innerHTML = '<input type="text" name="user_input" id="user_input"> ' +
            '<input type="submit" value="Submit" onclick="blackjack.run()">';
        this.displayElement.innerText = '';
    }

    getInput(): number {
        let inputAlias: any = document.getElementById("bet_input");

        return +inputAlias.value;
    }

    initialBet(): void {

        this.updateDisplay(this.game.toString());


        // if (this.game.getPlayerTurn()) {
        //     this.opponentInitialBets(this.generateBotBet());
        // }
        // else {
            this.updateDisplay("Enter your bet in the field below and click 'Bet'");
            this.submitBetButton.onclick(this.playerInitialBets());
        // }

    }

    playerInitialBets(): void {
        do {
            this.potBet = this.getInput();
        } while (this.player.getWallet().getMoney() < this.potBet);

        this.game.takeBet(this.player.getWallet().takeOutMoney(this.potBet));//player bet
        this.game.takeBet(this.potBet);//house bet matches

        this.displayPlayerBetting(this.potBet);

    }

    opponentInitialBets(betToMatch: number): void {
        this.game.takeBet(betToMatch);//house bet to match
        this.game.takeBet(this.player.getWallet().takeOutMoney(betToMatch));//player matches bet
        this.potBet = betToMatch;

        this.displayOpponentBetting(betToMatch);
    }

    displayOpponentBetting(passedOpponentBet: number): void {//Called _AFTER_ the money transfers have already taken place

        this.updateDisplay("Opponent bets $" + passedOpponentBet);
        this.updateDisplay("You match $" + passedOpponentBet);
        this.updateDisplay("You have $" + this.player.getWallet().getMoney() + " in your wallet");
        this.printPots();
        this.enterAnyKeyToContinue();
    }

    displayPlayerBetting(passedPlayerBet: number): void {//Called _AFTER_ the money transfers have already taken place
        //_AND_ after the player enters their bet amount
        this.updateDisplay("You bet $" + passedPlayerBet);
        this.updateDisplay("Opponent matches $" + passedPlayerBet);
        this.updateDisplay("You have $" + this.player.getWallet().getMoney() + " in your wallet");
        this.printPots();
        this.enterAnyKeyToContinue();
    }

    printPots(): void {
        this.updateDisplay("$" + this.game.showPot() + " now in Main Pot");
        this.updateDisplay("$" + this.game.showPot() + " now in Side Pot</br>");
    }

    enterAnyKeyToContinue(): void {

    }

    generateBotBet(): number {
        return (Math.random() * (this.player.getWallet().getMoney() / 2));
    }

    changeTurns(): void {
        this.resetFlags();
        this.game.changePlayerTurn();

    }

    resetFlags(): void {
        this.potBet = 0;

        this.game.resetTurn();
    }

    public run() : void{
        this.initialize();
        this.welcomePlayer();
    //     do {
    //         game = new BlackJack();
    //         playerBets();
    //         System.out.println(game.toString());
    //         playerHitOrStayCycle();
    //         game.dealerHitUntilFinished();
    //         System.out.println(game.toString());
    //         determineWinOrLoss();
    //     }while(game.play(getStringInput("Continue playing? [Y/N] ")));
    //
    }

    private determineWinOrLoss(): void {
        if (this.game.playerWins()) {
            this.updateDisplay("You win! ");
            this.updateDisplay(this.game.finalTableDisplay())
            this.settlePlayerWon();
        }
        else {
            this.updateDisplay("You lose. ");
            this.updateDisplay(this.game.finalTableDisplay());
            this.settlePlayerLost();
        }
    }

    private settlePlayerLost(): void {
        this.potBet = this.game.emptyPot();
        this.updateDisplay("You have " + this.player.getWallet().getMoney() + " " +
            "in your wallet.");
    }

    private settlePlayerWon(): void {
        this.player.getWallet().addMoney(this.game.emptyPot());
        this.updateDisplay("You have " + this.player.getWallet().getMoney() + " " +
            "in your wallet.");
    }

    // private playerHitOrStayCycle(): void {
    //     while (this.game.getPlayerScore() < 21 &&
    //     "Y".equalsIgnoreCase(getStringInput("Hit? [Y/N] "))) {
    //         game.playerHit();
    //         System.out.println(game.toString());
    //     }
    // }

    private playerBets(): void {
        this.updateDisplay("You have " + this.player.getWallet().getMoney() + ". <br />" +
            " How much do you wish to bet? ");

        this.game.takeBet(this.player.getWallet().takeOutMoney(this.potBet));
        this.updateDisplay("Your opponent matches your bet of " + this.potBet + ". ")
        this.game.takeBet(this.potBet);
    }

    private welcomePlayer(): void {
        this.updateDisplay("Hello, " + this.player.getName() + ". Welcome to the BlackJack table.");
        this.updateDisplay("How tough are ye'?");
    }
}
