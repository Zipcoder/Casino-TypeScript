///<reference path="cardGame.ts"/>
///<reference path="diceGame.ts"/>


let cardGame = new CardGame();
let diceGame = new DiceGame();

class Game{





    ChooseGame() {
        // Display.setCurrentStep("game.ChooseGame");
        Display.print("Here at ZipCode Casino we have both card games and dice games." +
            "<br/>What type of game would you like to play?" +
            "<br/><br/>Please enter cardgame or dicegames.");
    }

    pickGame(){
        switch(UserInput.userInput.value){
            case "cardgame":
                cardGame.printChooseCardGame();
                document.getElementById("button").setAttribute("onclick","cardGame.chooseCardGame()");
                break;
            case "dicegame":
                diceGame.printChooseDiceGame();
                document.getElementById("button").setAttribute("onclick","diceGame.chooseDiceGame()");
                break;
            default:
                Display.print("Invalid answer please try again.");
                break;
        }
        UserInput.clearTextBox();
    }
}
