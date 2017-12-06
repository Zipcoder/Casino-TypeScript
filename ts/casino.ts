/// <reference path="display.ts"/>
/// <reference path="userInput.ts"/>
///<reference path="game.ts"/>

let game = new Game();

class Casino{

 public enterCasino(){
    Display.print("Welcome to Zip Code Casino." +
        "<br/>You are going to have lots of fun while you are here." +
        "<br/><br/>Please enter [game] to choose a game or [other] for other options.");
 }

 public chooseWhatToDo(){
     switch (UserInput.userInput.value){
         case "game":
             game.ChooseGame();
             document.getElementById("button").setAttribute("onclick","game.pickGame()");
             break;
         case "other":
             Display.print("We currently only have games inside Zip Code Casino." +
                 "<br/>I'm sorry if there is nothing else to do.");
             break;
         default:
             Display.print("Invalid answer please try again.");
             this.enterCasino();
             break;
     }
 }
}
