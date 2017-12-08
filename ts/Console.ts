import {Utilities} from './Utilities'
export abstract class Console {
  constructor() {

  }

  // abstract getNameOfGame(): string;
  abstract start(): void;
  // abstract setUpGame(): void;
  // abstract playRound(): void;

  getNumPlayers(min: number, max: number) : number {
    if(min == max) {
        return min;
    }
    let validInput = false;
    let numPlayers = 0;
    while(!validInput) {
        numPlayers = Utilities.getIntegerInput("How many players? May have " + min + " to " + max + " players.");
        if(numPlayers >= min && numPlayers <= max) {
            validInput = true;
        }
    }
    return numPlayers;
  }

  getPlayerNames(numPlayers: number) : string[] {
    var names: string[] = [];
    for(let i = 0; i < numPlayers; i++) {
      let playerNumber = i + 1;
      let thePrompt = "Enter name of Player " + playerNumber;
      let name = Utilities.getUserInput(thePrompt);
      names.push(name);
    }
    return names;
  }

  getPlayerChips(game) {
    var players = game.getPlayers();
    let i = 1;
    for(let player in players) {
      let amount = Utilities.getMoneyInput("Player " + i + ", " + players[player].getName() + ", how much money do you have in chips?");
      players[player].setMoney(amount);
      i++;
    }
  }

  playRoundsUntilAllPlayersCashOut(game) {
      while(this.atLeastOnePlayerHasMoney(game)) {
          this.playRound();
      }
  }

  atLeastOnePlayerHasMoney(game) : boolean {
    var players = game.getPlayers();
    for(let player in players) {
      if(players[player].getMoney() > 0) {
        return true;
      }
    }
    return false;
  }
}
