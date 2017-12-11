///<reference path="Deck.ts"/>
///<reference path="Player.ts"/>


class BlackJack {
    private casino: Casino;
    private player: Player;
    private dealer: Player;
    private deck: Deck;
    private pot: number;

    constructor(casino: Casino) {
        this.casino = casino;
        this.dealer = new Player("Dealer", 1000);
    }

    public getDealer(): Player {
        return this.dealer;
    }

    public setDealer(dealer: Player): void {
        this.dealer = dealer;
    }

    public getPot(): number {
        return this.pot;
    }

    public setPot(pot: number): void {
        this.pot = pot;
    }

    public takeBet(amountToBet: number): void {
        this.pot += amountToBet;
    }

    public playBlackJack(): void {
        this.player = casino.aPlayer;
        this.player.clearHand();
        this.dealer.clearHand();
        this.deck = new Deck();
        this.deck.shuffle();
        this.pot = 0.0;

        blackJackConsole.blackJackIntro();

        blackJackConsole.takeBetButtonLogic();
        document.getElementById("newButton").setAttribute("onclick", "blackJack.takeBetAmount()");
    }

    public takeBetAmount(): void {
        let betAmountHTML = <HTMLInputElement>document.getElementById("newButtonInput");
        let betAmountString: string = betAmountHTML.value;
        let betAmountFloat = parseFloat(betAmountString);
        if (betAmountString.match("^[0-9]*$") && betAmountFloat>0 && betAmountFloat <= this.player.getMoney()) {
            this.pot += betAmountFloat;
            this.player.setMoney(this.player.getMoney() - betAmountFloat);
            document.getElementById("playersMoney").innerHTML = "Player's Money: $" + this.player.getMoney();
            WebPageInteraction.getInstance().displayToWebpage("<br>You bet $" + betAmountString);
            blackJackConsole.dealCardsButtonLogic();
            document.getElementById("newButton").setAttribute("onclick", "blackJack.dealCards()");
            //button change goes here
            //doc goes here
        }
        else {
            WebPageInteraction.getInstance().displayToWebpage("<br>Please enter a valid amount to bet.");
        }
    }

    public dealCards(): void {
        for (let i = 0; i < 2; i++) {
            this.dealCard(this.player);
            this.dealCard(this.dealer);
        }

        WebPageInteraction.getInstance().displayToWebpage("<br>This is your hand: <br>"+this.player.getHand().toString() + " ("+this.player.calculateScore()+")");
        WebPageInteraction.getInstance().displayToWebpage("<br>This is the dealers top card: <br>"+this.dealer.getHand()[0].toString());
        WebPageInteraction.getInstance().displayToWebpage("<br>Would you like to hit or stay?<br>");
        blackJackConsole.hitOrStayButtonLogic();

        //not sure of this is needed;
        //this.checkFor21();

        document.getElementById("hitButton").setAttribute("onclick", "blackJack.hitLogic()");
        document.getElementById("stayButton").setAttribute("onclick", "blackJack.stayLogic()");

    }

    public dealCard(playerToReceiveCard: Player): void{
        let card: Card = this.deck.getCard();
        playerToReceiveCard.addToHand(card);
    }

    public hitLogic() {
        this.dealCard(this.player);
        WebPageInteraction.getInstance().displayToWebpage("Your hand is now: "+this.player.getHand().toString()+ " ("+this.player.calculateScore()+")");
        this.checkFor21();

        if (!this.checkFor21()) {
            if (this.player.getScore() > 21) {
                WebPageInteraction.getInstance().displayToWebpage("It's a bust, you lose!");

                this.playAgainLogic();
                return;

                //Would you like to play again logic
            }
            WebPageInteraction.getInstance().displayToWebpage("<br>Would you like to hit or stay?<br>");
            console.log(this.player.getHand().toString())


        }
    }

    public stayLogic() {
        // show dealers hand
        WebPageInteraction.getInstance().displayToWebpage(
            "You stayed, the dealers hand is: "+this.dealer.getHand().toString()+ " ("+this.dealer.calculateScore()+")");


        if (!this.checkFor21()) {
            //press enter to continue
            blackJackConsole.pressEnterToContinueButtonLogic();
            document.getElementById("continueButton")
                .setAttribute("onclick", "blackJack.dealerHitUntilFinished()");
        }
    }

    public dealerHitUntilFinished(): void {
        if (this.dealer.calculateScore() <= 17) {
            this.dealCard(this.dealer);
            WebPageInteraction.getInstance().displayToWebpage(
                "The dealer hit, the dealers hand is now: " + this.dealer.getHand().toString()+ " ("+this.dealer.calculateScore()+")");
            console.log(this.dealer.calculateScore());
        }
        else if (this.dealer.calculateScore() > 17) {
            if (this.determineWinner()) {
                this.playerWins();
            }
            else {
                WebPageInteraction.getInstance().displayToWebpage("You lose!");
                this.playAgainLogic();
            }
        }


    }

    public checkFor21(): boolean {
        this.player.calculateScore();
        this.dealer.calculateScore();

        console.log("Players score: " + this.player.getScore());
        console.log("Dealers score: " + this.dealer.getScore());

        if (this.player.getScore() === 21 && !(this.dealer.getScore() === 21)) {
            this.playerWins();
            return true;
        }
        else if (this.player.getScore() === 21 && this.dealer.getScore() === 21) {
            console.log("It's a tie!");
            let amountWon: number = this.pot;
            WebPageInteraction.getInstance().displayToWebpage("It's a tie, you collected: $"+amountWon);
            this.player.setMoney(this.player.getMoney() + amountWon);
            document.getElementById("playersMoney").innerHTML = "Player's Money: $" + this.player.getMoney();
            this.playAgainLogic();
            //do tie logic
            return true;
        }
        else if (!(this.player.getScore() === 21) && this.dealer.getScore() === 21) {
            WebPageInteraction.getInstance().displayToWebpage("The dealer got 21, you lose!");
            this.playAgainLogic();
            return true;
            //do lose logic
        }
    }


    public  determineWinner(): boolean {
        if((this.player.getScore() === 21 && !(this.dealer.getScore() === 21)) ||
            (this.player.getScore()<21 && this.dealer.getScore() < this.player.getScore()) ||
            (this.player.getScore() < 21 && this.dealer.getScore() > 21)) {
            //Player wins
            return true;
        }
        //Dealer wins
        return false;
    }

    public playerWins() {
        let amountWon: number = this.pot*2;
        WebPageInteraction.getInstance().displayToWebpage("You win and collected: $"+amountWon);
        this.player.setMoney(this.player.getMoney() + amountWon);
        document.getElementById("playersMoney").innerHTML = "Player's Money: $" + this.player.getMoney();
        this.playAgainLogic();
    }

    public backToMainMenu() {
        console.log("Going back to Main Menu");
        blackJackConsole.backToMainMenuButtonLogic();
        document.getElementById("display").innerHTML = menuCreation.casinoTitle();

    }

    public playAgainLogic() {
        WebPageInteraction.getInstance().displayToWebpage("<br>Would you like to play again?");
        blackJackConsole.playAgainButtonLogic();
        document.getElementById("yesButton").setAttribute("onclick", "blackJack.playBlackJack()");
        document.getElementById("noButton").setAttribute("onclick", "blackJack.backToMainMenu()");
    }
}