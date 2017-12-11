///<reference path="blackJackConsole.ts"/>
///<reference path="goFishConsole.ts"/>



let blackJack = new BlackJackConsole();
let goFish = new GoFishConsole();

class CardGame{

    printChooseCardGame() {
        Display.print("What type of card game would you like tp play?");
    }


    chooseCardGame() {


        switch (UserInput.chooseCardGame.value){
            case "1":
                goFish.printPlay();
                Display.hideCardGameMenu();
                // document.getElementById("button").setAttribute("onclick","goFish.play()");
                break;
            case "2":
                blackJack.printPlay();
                Display.hideCardGameMenu();
                // document.getElementById("button").setAttribute("onclick","blackJack.play()");
                break;
            case "3":
                Display.hideCardGameMenu();            
                Display.showCasinoMenu();
                game.ChooseGame();
            default:
                Display.print("Invalid choice please try again.")
                this.chooseCardGame();
                break;
        }
        UserInput.clearChooseCardGame();

    }

}
