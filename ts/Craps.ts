///<reference path="CardGames.ts"/>
///<reference path="bootstrapper.ts"/>
///<reference path="Dice.ts"/>


class Craps {
    private casino: Casino;
    private dice1: Dice = new Dice(1, 6);
    private diceOneValue: number;
    private dice2: Dice = new Dice(1, 6);
    private diceTwoValue: number;
    private player: Player;
    private static betAmount: number;
    private sumOfRolls: number;
    private target: number;

    private primaryButton: any;
    private gameSelectionButtons: any;

    constructor(casino: Casino) {
        this.casino = casino;
        this.primaryButton = document.getElementById("primaryButton");
        this.gameSelectionButtons = document.getElementById("gameSelectionButtons");
    }

    public play(): void {
        this.player = this.casino.aPlayer;
        this.printWelcomeMessage();
        this.takeBet();
    }

    public printWelcomeMessage(): void {
        this.gameSelectionButtons.style.display = "none";
        WebPageInteraction.getInstance().
        displayToWebpage("Welcome to craps " + this.player.getName() + "!");
    }

    public takeBet(): void {
        document.getElementById("nameOfLabel").innerText = "Bet Amount";
        document.getElementById("userInputGroup").style.display = "inline";
        this.gameSelectionButtons.style.display = "none";
        document.getElementById("generalSubmitButton").style.display = "block";
        this.primaryButton.innerText = "Submit";
        this.primaryButton.style.display = "inline";

        document.getElementById("nameOfLabel").hidden = false;
        WebPageInteraction.getInstance().displayToWebpage(
            "You currently have $" + this.player.getMoney() + "<br>" +
            "How much money do you want to bet?");

        this.primaryButton.setAttribute("onclick", "craps.getBetAmount()");
    }

    public getBetAmount(): void {
        this.gameSelectionButtons.style.display = "none";
        document.getElementById("user_input").hidden = false;
        let amount: number = parseFloat((<HTMLInputElement>document.getElementById("user_input")).value);
        if (amount > this.player.getMoney() || amount <= 0) {
            WebPageInteraction.getInstance().displayToWebpage(
                "Please make sure you have entered a number greater than " +
                "zero and less than or equal to $" + this.player.getMoney()) + ".";
        }
        else {
            Craps.betAmount = amount;
            WebPageInteraction.getInstance().displayToWebpage("<br>You bet: $" + Craps.betAmount+"<br>");
            this.player.setMoney(this.player.getMoney() - amount);
            document.getElementById("playersMoney").innerHTML = "Player's Money: $" + this.player.getMoney();

            document.getElementById("userInputGroup").style.display = "none";
            this.primaryButton.innerHTML = "Press To Roll";
            this.primaryButton.setAttribute("onclick", "craps.pressEnterToRoll()");

        }
    }

    public pressEnterToRoll(): void {
        this.diceOneValue = this.dice1.roll();
        this.diceTwoValue = this.dice2.roll();
        this.sumOfRolls = this.diceOneValue + this.diceTwoValue;
        this.printDiceRoll(this.sumOfRolls);
        if (this.sevenOrEleven(this.sumOfRolls)) {
            this.printWinMessage();
        } else if (this.twoThreeOrTwelve(this.sumOfRolls)) {
            this.printLoseMessage();
        } else {
            this.target = this.sumOfRolls;
            WebPageInteraction.getInstance().displayToWebpage("<br>The new target is: " + this.target);
        }

        this.primaryButton.setAttribute("onclick", "craps.keepRollingDice()");
    }

    public keepRollingDice(): void {
        this.diceOneValue = this.dice1.roll();
        this.diceTwoValue = this.dice2.roll();
        this.sumOfRolls = this.diceOneValue + this.diceTwoValue;

        if (!(this.sumOfRolls === 7) && !(this.sumOfRolls === this.target)) {
            this.printDiceRoll(this.sumOfRolls);
        }
        else {

            this.primaryButton.setAttribute("onclick", "craps.playAgainYes()");
            this.primaryButton.innerText = "Yes";
            console.log("when does this happen");

            let p = document.getElementById("generalSubmitButton");
            let newNoButton = document.createElement("button");
            newNoButton.innerText = "No";
            newNoButton.setAttribute('class', "btn btn-danger");
            newNoButton.setAttribute('id', "noButton");
            newNoButton.setAttribute('onclick', "craps.playAgainNo()");
            p.appendChild(newNoButton);



            if (this.sumOfRolls === 7) {
                this.printLoseMessage();

            } else if (this.sumOfRolls === this.target) {
                this.printWinMessage();

            }
        }
    }

    public bootPlayer(): void {
        WebPageInteraction.getInstance().displayToWebpage("Time for you to go to the ATM. Kicking you from the casino.");
        //System.exit(0);
        // Go to main Menu
    }




    public printDiceRoll(diceRollValue: number): void {
        let diceOneImage = "<img src=images/dice/dice"+this.diceOneValue+".png >";
        let diceTwoImage = "<img src=images/dice/dice"+this.diceTwoValue+".png >";

        WebPageInteraction.getInstance().displayToWebpage("You rolled: " + diceOneImage + diceTwoImage);

    }

    public sevenOrEleven(diceRollValue: number): boolean {
        return diceRollValue === 7 || diceRollValue === 11;

    }

    public twoThreeOrTwelve(diceRollValue: number): boolean {
        return (diceRollValue === 2 || diceRollValue === 3 || diceRollValue === 12);
    }

    public printWinMessage(): void {
        WebPageInteraction.getInstance().displayToWebpage("Congratulations you won!");
        this.printWinnings(Craps.betAmount);
    }

    public printWinnings(amount: number): void {
        let newMoneyAmount: number = this.player.getMoney() + amount*2;
        this.player.setMoney(newMoneyAmount);
        WebPageInteraction.getInstance().displayToWebpage("You now have $" + this.player.getMoney() + " dollars!");
        document.getElementById("playersMoney").innerHTML = "Player's Money: $" + this.player.getMoney();
        WebPageInteraction.getInstance().displayToWebpage("<br>Do you want to play another round?<br>");
    }

    public printLoseMessage(): void {
        WebPageInteraction.getInstance().displayToWebpage("Sorry you lost!<br>You now have $"+this.player.getMoney());
        WebPageInteraction.getInstance().displayToWebpage("<br>Do you want to play another round?<br>");
    }

    public playAgainNo() {
        document.getElementById("noButton").remove();
        console.log("not playing again");

        this.primaryButton.style.display = "none";
        document.getElementById("gameSelectionButtons").style.display = "inline";
    }

    public playAgainYes() {
        console.log("playing again.");
        document.getElementById("noButton").remove();
        document.getElementById("generalSubmitButton").style.display = "none";
        this.primaryButton.setAttribute('onclick', "craps.takeBet()");
        this.primaryButton.click();

        //document.getElementById("primaryButton").innerText = "none";

    }



}