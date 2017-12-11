/// <reference path="display.ts"/>
///<reference path="craps.ts"/>


class CrapsConsole {


    instanceOfCraps = new Craps();

    constructor() {


    }

    startCrapsBetting() {
        Display.clearInnerHTMLDisplay();

        Display.print("Hello Welcome to the craps table." +
            "<br/>Ryan is the man and is going to make this rock!!!");

        Display.print("Let's play some basic Craps!");

        Display.print("How much would you like to bet? You have " + this.instanceOfCraps.crapsPlayer.getMoney());


        document.getElementById("button").setAttribute("onclick", "crapsGame.getUserBet()");

        this.instanceOfCraps.setRollButtonToFirstRoll();


    }


}
