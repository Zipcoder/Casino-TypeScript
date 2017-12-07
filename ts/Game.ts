import {Player} from './Player'
export abstract class Game<T extends Game<T>> {
  players: Player<T>[] = [];

  abstract getPlayers(): Player<T>[];

  getNumPlayers() : number {
    return this.players.length;
  }

  addPlayers(players: Player<T>[]) {
    this.players = players;
  }

  printPlayersMoney() : string {
    var moneyString: string[] = [];
    let i = 1;
    for(let player in this.players) {
      moneyString.push("Player " + i + ", " + player.getName() + ", Total money: $" + player.getMoney());
      i++;
    }
    return "[ " + moneyString.join(" ] , [ ") + " ]";
  }
}
