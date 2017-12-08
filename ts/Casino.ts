import {Console} from './Console';
import {BlackJackConsole} from './BlackJackConsole';
import {CrapsConsole} from './CrapsConsole';
import {GoFishConsole} from './GoFishConsole';
import {SlotsConsole} from './SlotsConsole';
import {Utilities} from './Utilities';

export class Casino {

  gameConsoles: Console[];
  // displayEle: any;
  // userInputEle: any;
  //static buttonEle = document.getElementById("my_button");

  constructor() {
    this.gameConsoles = [];
    // this.displayEle = document.getElementById("display");
    // this.userInputEle = document.getElementById("user_input");
  }

  startCasino() {
    this.gameConsoles.push(new BlackJackConsole());
    this.gameConsoles.push(new CrapsConsole());
    this.gameConsoles.push(new GoFishConsole());
    this.gameConsoles.push(new SlotsConsole());

    // while(true) {
        this.selectGameToPlay();
    // }
  }

  selectGameToPlay() {
    var gameNames: string[] = [];
    for(let consoleKey in this.gameConsoles) {
      gameNames.push(this.gameConsoles[consoleKey].getNameOfGame());
    }
    Utilities.printMenuName("Select a game to play");
    Utilities.printMenuOptions(gameNames);
    // var choice = Utilities.getMenuInput(">> ", gameNames).toUpperCase();
    var _this = this;
    Utilities.buttonEle.addEventListener("click", function() {
      var choice: string = Utilities.userInputEle.value.toUpperCase();
      _this.goToGame(choice);
    })
  }

  goToGame(gameName: string) {
    console.log("got here");
    console.log(gameName);
    switch (gameName) {
        case "BLACKJACK":
            this.startBlackJack();
            break;
        case "CRAPS":
        console.log("started craps");
            this.startCraps();
            break;
        case "GO FISH":
            this.startGoFish();
            break;
        case "SLOTS":
            this.startSlots();
            break;
    }
  }

  startBlackJack() {
      this.gameConsoles[0].start();
  }

  startCraps() {
    console.log("actually starts");
      this.gameConsoles[1].start();
  }

  startGoFish() {
      this.gameConsoles[2].start();
  }

  startSlots() {
      this.gameConsoles[3].start();
  }
}
