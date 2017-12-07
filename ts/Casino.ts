import {Console} from './Console';
import {BlackJackConsole} from './BlackJackConsole';
import {CrapsConsole} from './CrapsConsole';
import {GoFishConsole} from './GoFishConsole';
import {SlotsConsole} from './SlotsConsole';
import {Utilities} from './Utilities';

export class Casino {

  gameConsoles: Console[];
  displayEle: any;
  userInputEle : any;

  constructor() {
    this.gameConsoles = [];
    this.displayEle = document.getElementById("display");
    this.userInputEle = document.getElementById("user_input");
  }

  startCasino() {
    this.displayEle += "Hello are you working?";
    this.gameConsoles.push(new BlackJackConsole());
    this.gameConsoles.push(new CrapsConsole());
    this.gameConsoles.push(new GoFishConsole());
    this.gameConsoles.push(new SlotsConsole());

    while(true) {
        this.selectGameToPlay();
    }
  }

  selectGameToPlay() {
    var gameNames: string[] = [];
    var console: any;
    for(console in this.gameConsoles) {
      gameNames.push(console.getNameOfGame());
    }
    Utilities.printMenuName("Select a game to play");
    Utilities.printMenuOptions(gameNames);
    var choice = Utilities.getMenuInput(">> ", gameNames).toUpperCase();
    this.goToGame(choice);
  }

  goToGame(gameName: string) {
    switch (gameName) {
        case "BLACKJACK":
            this.startBlackJack();
            break;
        case "CRAPS":
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
      this.gameConsoles[1].start();
  }

  startGoFish() {
      this.gameConsoles[2].start();
  }

  startSlots() {
      this.gameConsoles[3].start();
  }
}
