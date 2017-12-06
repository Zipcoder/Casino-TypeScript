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
<<<<<<< HEAD
                craps.playCraps();
=======
                craps.printStartCraps();
>>>>>>> 8709fa0c017d0585e1e9e492c990138ba0064f6b
                document.getElementById("button").setAttribute("onclick", "craps.startCraps");
        }

    }
}
