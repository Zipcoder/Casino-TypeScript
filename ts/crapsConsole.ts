/// <reference path="display.ts"/>
class CrapsConsole{


  crapsGame: Craps = new Craps();
  playAgain: string;
  moneyToBet: number;

  // playCraps(){
  //
  //   do{
  //     //some greeting message prints prior to choosing craps? or does it happen here
  //     //here makes sense for the game logic and how I have it set up to repeat itself
  //     //I'm sure we can change this tho
  //     Display.print("Let's play some basic AF Craps!")
  //
  //     do{
  //       this.moneyToBet =
  //     }while (this.crapsGame.placeBet(4/*gotta change*/) == 1)
  //     Display.print("Your current bet is " );
  //     Display.print("Let's get the dice rolling");//all filler right now
  //     //prompt user to roll
  //   }
  // }


    printStartCraps() {
        Display.print("Hello Welcome to the craps table." +
            "<br/>Ryan is the man and is going to make this shit rock!!!")
    }

    startCraps(){
        //I just throw this in here for you to run your craps game
        //You'll have to change the button one level up if this is not the name of this method
    }

}
