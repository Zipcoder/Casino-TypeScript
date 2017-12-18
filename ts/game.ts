///<reference path="cardGame.ts"/>
///<reference path="diceGame.ts"/>


let cardGame = new CardGame();
let diceGame = new DiceGame();

class Game{





    ChooseGame() {
        Display.print("Here at ZipCode Casino we have both card games and dice games." +
            "<br/>What type of game would you like to play?");
    }

    pickGame(){
        switch(UserInput.gameTypeChoice.value){
            case "1":
                cardGame.printChooseCardGame();
                // document.getElementById("button").setAttribute("onclick","cardGame.chooseCardGame()");
                Display.hideGameChoiceMenu();
                Display.showCardGameMenu();
                break;
            case "2":
                diceGame.printChooseDiceGame();
                Display.hideGameChoiceMenu();
                Display.shoeDiceGameMenu();
                // document.getElementById("button").setAttribute("onclick","diceGame.chooseDiceGame()");
                break;
            case "3":
                Display.hideGameChoiceMenu();
                Display.showCasinoMenu();
                casinoStart.enterCasino();
                break;
            default:
                Display.print("Invalid answer please try again.");
                break;
        }
        UserInput.clearGameTypeChoice();
    }
}
