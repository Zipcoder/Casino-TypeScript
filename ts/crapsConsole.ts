/// <reference path="display.ts"/>
///<reference path="craps.ts"/>


class CrapsConsole {


    crapsGame = new Craps();
    moneyToBet: number;
    playAgain: string;

    constructor() {


    }

    startCrapsBetting() {
        Display.print("Hello Welcome to the craps table." +
            "<br/>Ryan is the man and is going to make this rock!!!");
        UserInput.userInput.value = "";

        Display.print("Let's play some basic AF Craps!");

        Display.print("How much would you like to bet? You have " + this.crapsGame.crapsPlayer.getMoney());

        document.getElementById("button").setAttribute("onclick", "crapsGame.getUserBet()");

        this.crapsGame.setRollButtonToFirstRoll();



    }

    crapsLogic() {
        this.crapsGame.die.rollDie();
        if (this.crapsGame.firstRollLogic() === 1) {
        }
            this.crapsGame.subsequentRollLogic();
        }




    // playCraps() {
    //
    //     Display.print("Hello Welcome to the craps table." +
    //         "<br/>Ryan is the man and is going to make this rock!!!");
    //     UserInput.userInput.value = "";
    //
    //     do {
    //         Display.print("Let's play some basic AF Craps!");
    //
    //         //do {
    //         Display.print("How much would you like to bet? You have " + this.crapsGame.crapsPlayer.getMoney());
    //
    //         Display.print("Is this working?");
    //         this.moneyToBet = parseInt(UserInput.userInput.value);
    //         document.getElementById("button").setAttribute("onclick", "this.crapsGame.placeBet(" + this.moneyToBet + ")");
    //
    //
    //         } while (this.crapsGame.placeBet(this.moneyToBet) === 1);
    //
    //     do {
    //         Display.print("Your current bet is " + this.moneyToBet);
    //         document.getElementById("rollButton").removeAttribute("disabled");
    //         Display.print("Let's get the dice rolling, click the roll button!");//all filler right now
    //         document.getElementById("rollButton").setAttribute("onclick", "this.crapsLogic()");
    //
    //         if (this.crapsGame.crapsPlayer.getMoney() === 0) {
    //             Display.print("Out of money buddy, see ya later!")
    //             //have to send them back to beginning
    //
    //         }
    //
    //         Display.print("Would you like to play again? [yes] or [no]");
    //         this.playAgain = UserInput.userInput.value;
    //     } while (this.playAgain.toLowerCase() === "yes");
    //     document.getElementById("button").setAttribute("onclick", "CrapsConsole.playCraps()");
    // }

    //
    // crapsLogic() {
    //     this.crapsGame.die.rollDie();
    //     if (this.crapsGame.firstRollLogic() === 1) {
    //         this.crapsGame.subsequentRollLogic();
    //     }
    //
    // }

}
