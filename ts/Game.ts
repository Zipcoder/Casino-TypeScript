import {Player} from './Player'
export abstract class Game<T extends Game<T>> {
  // players: Player<T>[] = [];

  abstract getPlayers(): Player<T>[];

  abstract getNumPlayers() : number ;
  // {
  //   return this.players.length;
  // }

  abstract addPlayers(players: Player<T>[]) ;
  // {
  //   this.players = players;
  // }

  abstract printPlayersMoney() : string ;
  // {
  //   var moneyString: string[] = [];
  //   let i = 1;
  //   for(let player in this.players) {
  //     moneyString.push("Player " + i + ", " + this.players[player].getName() + ", Total money: $" + this.players[player].getMoney());
  //     i++;
  //   }
  //   return "[ " + moneyString.join(" ] , [ ") + " ]";
  // }
}
