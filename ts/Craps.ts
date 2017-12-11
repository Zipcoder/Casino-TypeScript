///<reference path="CardGames.ts"/>
///<reference path="bootstrapper.ts"/>
///<reference path="Dice.ts"/>
///<reference path="HtmlObjectCreation.ts"/>


class Craps {
    private casino: Casino;
    private dice1: Dice = new Dice(1, 6);
    private diceOneValue: number;
    private dice2: Dice = new Dice(1, 6);
    private diceTwoValue: number;
    private player: Player;
    private betAmount: number;
    private sumOfRolls: number;
    private target: number;

    private primaryButton: any;
    private gameSelectionButtons: any;

    constructor(casino: Casino) {
        this.casino = casino;
        this.primaryButton = document.getElementById("primaryButton");
        this.gameSelectionButtons = document.getElementById("gameSelectionButtons");
    }

    public playCraps(): void {
        this.player = this.casino.aPlayer;
        this.printWelcomeMessage();
        crapsButtonLogic.takeBetButtonLogic();
        document.getElementById("newButton").setAttribute("onclick", "craps.takeBetAmount()");
    }

    public printWelcomeMessage(): void {
        this.gameSelectionButtons.style.display = "none";
        WebPageInteraction.getInstance().
        displayToWebpage("Welcome to craps " + this.player.getName() + "!");
    }

    public takeBetAmount(): void {
        let betAmountHTML = <HTMLInputElement>document.getElementById("newButtonInput");
        let betAmountString: string = betAmountHTML.value;
        console.log(betAmountString);
        let betAmountFloat = parseFloat(betAmountString);
        console.log(betAmountFloat);
        if (betAmountString.match("^[0-9]*$") && betAmountFloat>0 && betAmountFloat <= this.player.getMoney()) {
            this.betAmount = betAmountFloat;
            console.log(this.betAmount);
            this.player.setMoney(this.player.getMoney() - betAmountFloat);
            document.getElementById("playersMoney").innerHTML = "Player's Money: $" + this.player.getMoney();
            WebPageInteraction.getInstance().displayToWebpage("<br>You bet $" + betAmountString);




            crapsButtonLogic.rollDiceButtonLogic();
            document.getElementById("newButton").setAttribute("onclick", "craps.rollDice()");
            //button change goes here
            //doc goes here
        }
        else {
            WebPageInteraction.getInstance().displayToWebpage("<br>Please enter a valid amount to bet.");
        }
    }

    public rollDice() {
        this.diceOneValue = this.dice1.roll();
        this.diceTwoValue = this.dice2.roll();
        console.log(this.diceOneValue);
        console.log(this.diceTwoValue);

        this.sumOfRolls = this.diceOneValue + this.diceTwoValue;
        console.log(this.sumOfRolls);
        this.printDiceRoll(this.sumOfRolls);
        if (this.sumOfRolls === 7 || this.sumOfRolls === 11) {
            this.winGameOfCraps();
        } else if (this.sumOfRolls === 2 || this.sumOfRolls === 3 || this.sumOfRolls === 12) {
            this.loseGameOfCraps();
        } else {
            this.target = this.sumOfRolls;
            WebPageInteraction.getInstance().displayToWebpage("<br>The new target is: " + this.target);
            document.getElementById("newButton").setAttribute("onclick", "craps.keepRollingDice()");
        }
    }

    public printDiceRoll(diceRollValue: number): void {
        let diceOneImage = "<img src=images/dice/dice"+this.diceOneValue+".png >";
        let diceTwoImage = "<img src=images/dice/dice"+this.diceTwoValue+".png >";

        WebPageInteraction.getInstance().displayToWebpage("You rolled: " + diceOneImage + diceTwoImage + " ("+diceRollValue+")");

    }

    public winGameOfCraps(): void {
        WebPageInteraction.getInstance().displayToWebpage("<br>Congratulations you won!");
        let newMoneyAmount: number = this.player.getMoney() + this.betAmount*2;
        this.player.setMoney(newMoneyAmount);
        WebPageInteraction.getInstance().displayToWebpage("You now have $" + this.player.getMoney() + " dollars!");
        document.getElementById("playersMoney").innerHTML = "Player's Money: $" + this.player.getMoney();
        this.playAgainLogic();

    }

    public loseGameOfCraps(): void {
        WebPageInteraction.getInstance().displayToWebpage("Sorry you lost!<br>You now have $"+this.player.getMoney());
        this.playAgainLogic();
    }

    public playAgainLogic(): void {
        WebPageInteraction.getInstance().displayToWebpage("<br>Would you like to play again?");
        crapsButtonLogic.playAgainButtonLogic();
        document.getElementById("yesButton").setAttribute("onclick", "craps.playCraps()");
        document.getElementById("noButton").setAttribute("onclick", "craps.backToMainMenu()");

    }

    public backToMainMenu() {
        console.log("Going back to Main Menu");
        crapsButtonLogic.backToMainMenuButtonLogic();
        document.getElementById("display").innerHTML = menuCreation.casinoTitle();
    }


    public keepRollingDice(): void {
        this.diceOneValue = this.dice1.roll();
        this.diceTwoValue = this.dice2.roll();
        this.sumOfRolls = this.diceOneValue + this.diceTwoValue;

        if (!(this.sumOfRolls === 7) && !(this.sumOfRolls === this.target)) {
            this.printDiceRoll(this.sumOfRolls);
        }
        else {
            this.printDiceRoll(this.sumOfRolls);
            if (this.sumOfRolls === 7) {
                this.loseGameOfCraps();


            } else if (this.sumOfRolls === this.target) {
                this.winGameOfCraps();

            }
        }
    }













    public bootPlayer(): void {
        WebPageInteraction.getInstance().displayToWebpage("Time for you to go to the ATM. Kicking you from the casino.");
        //System.exit(0);
        // Go to main Menu
    }


}