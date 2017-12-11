/// <reference path="display.ts"/>
/// <reference path="userInput.ts"/>
///<reference path="game.ts"/>


let game = new Game();

class Casino{

 public enterCasino(){
    Display.print("Welcome to Zip Code Casino." +
        "<br/>You are going to have lots of fun while you are here." +
        "<br/><br/>Please choose from the drop down menu below.");
 }

 public chooseWhatToDo(){
     switch (UserInput.casinoMenuResponse.value){
         case "1":
         document.write
            game.ChooseGame();
            Display.hideCasinoMenu();
            Display.showGameChoiceMenu();
             // document.getElementById("button").setAttribute("onclick","game.pickGame()");
             break;
         case "2":
         Display.print("What would you like to have to drink?")         
                 Display.hideCasinoMenu();
                 Display.showDrinks();
             break;
         case "3":
             Display.print("Thank you for coming to our casino." +
                 "<br/>Have a nice day.");
             Display.hideCasinoMenu();
             break;
         default:
             Display.print("Invalid answer please try again.");
             break;
     }
     UserInput.clearCasinoMenuResponse();
 }

 drinks(){
     switch(UserInput.chooseDrink.value){
        case"1":
        Display.showBud();
            break;
        case"2":
            Display.showCorona();
            break;
        case"3":
            Display.showCran();
            break;
        case"4":
            Display.showHien();
            break;
        case"5":
            Display.showMargarita();
            break;
        case"6":
            Display.showOldFasion();
            break;
        case"7":
            Display.showRedWine();
            break;
        case"8":
            Display.showWhiteWine();
            break;
        case"9":
            Display.showLong();
            break;
     }
     UserInput.clearDrinks();
     Display.print("What would you like to do now?");
     Display.showCasinoMenu();
     Display.hideDrinks();
 }

}
