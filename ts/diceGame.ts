///<reference path="crapsConsole.ts"/>
/// <reference path="game.ts" />



let craps = new CrapsConsole();

class DiceGame{

    printChooseDiceGame() {

        Display.print("What type of dice game would you like tp play?");

    }

    chooseDiceGame() {

        switch(UserInput.chooseDiceGame.value){
            case "1":
                Display.hideDiceGameMenu();
                craps.startCrapsBetting();
                Display.showUserInputButtonAndTextBox();
                break;
            case "2":
                Display.showGameChoiceMenu();
                game.ChooseGame();
                Display.hideDiceGameMenu();
                break;
        }
        UserInput.clearDiceGame();

    }
}
