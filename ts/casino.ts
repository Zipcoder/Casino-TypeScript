/// <reference path="display.ts"/>
/// <reference path="userInput.ts"/>
///<reference path="game.ts"/>

let game = new Game();

class Casino{

 public enterCasino(){
    Display.print("Welcome to Zip Code Casino." +
        "<br/>You are going to have lots of fun while you are here." +
        "<br/>Use the drop down menu below to choose whether or not to play a game.");
 }

 public chooseWhatToDo(){
     console.log("Something anyting");
     switch (UserInput.userInput.value){
         case "1":
             game.ChooseGame();
             break;
         case "2":
             Display.print("We currently only have games inside Zip Code Casino." +
                 "<br/>I'm sorry if there is nothing else to do." +
                 "<br/>If you'd like a drink ask Tariq :-)");
             break;
     }
 }
}
