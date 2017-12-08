///<reference path="blackJackConsole.ts"/>
///<reference path="goFishConsole.ts"/>



let blackJack = new BlackJackConsole();
let goFish = new GoFishConsole();

class CardGame{

    printChooseCardGame() {
        Display.print("What type of card game would you like tp play?" +
            "<br/>Please enter goFish or blackJack");
    }


    chooseCardGame() {


        switch (UserInput.userInput.value){
            case "goFish":
                goFish.printPlay();
                document.getElementById("button").setAttribute("onclick","goFish.play()");
                break;
            case "blackJacK":
                blackJack.printPlay();
                document.getElementById("button").setAttribute("onclick","blackJack.play()");
                break;
            default:
                Display.print("Invalid choice.")
                this.chooseCardGame();
                break;
        }
        UserInput.clearTextBox();

    }

}
