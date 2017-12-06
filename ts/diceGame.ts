///<reference path="crapsConsole.ts"/>


let craps = new CrapsConsole();

class DiceGame{

    printChooseDiceGame() {

        Display.print("What type of dice game would you like tp play?" +
            "<br/>Please enter craps or you can roll out cause this is the only dice game.");

    }

    chooseDiceGame() {

        switch(UserInput.userInput.value){
            case "craps":
                craps.printStartCraps();
                document.getElementById("button").setAttribute("onclick", "craps.startCraps");
        }

    }
}
