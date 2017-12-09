import {Game} from './Game'
import {Gamble} from './Gamble'
import {Dice} from './Dice'
import {Player} from './Player'
import {CrapsPlayer} from './CrapsPlayer'
export class Craps extends Game<Craps> implements Gamble<Craps> {
  MIN_NUMBER_OF_PLAYERS = 1;
  MAX_NUMBER_OF_PLAYERS = 8;

  private players: CrapsPlayer[] = [];

  private dice: Dice = new Dice(2);
  private point: number;

  private bets = {};
  private playersOnPass: CrapsPlayer[] = [];
  private playersOnDontPass: CrapsPlayer[] = [];
  private passBetsWin = true;

  addPlayers(players: CrapsPlayer[]) {
    this.players = players;
  }
  getNumPlayers() : number {
    return this.players.length;
  }

  getPlayers() : CrapsPlayer[] {
    return this.players;
  }

  getPlayersOnPass() : CrapsPlayer[] {
    return this.playersOnPass;
  }

  getPlayersOnDontPass() : CrapsPlayer[] {
    return this.playersOnDontPass;
  }

  getSumOfDice() : number {
    return this.getValueOfDieOne() + this.getValueOfDieTwo();
  }

  getValueOfDieOne() {
    return this.dice.getDice()[0].getValue();
  }

  getValueOfDieTwo() {
    return this.dice.getDice()[1].getValue();
  }

  getDice() {
    return this.dice;
  }

  rollDice() {
    this.dice.rollDice();
  }

  getPoint() : number {
    return this.point;
  }

  setPoint(point: number) {
    this.point = point;
  }

  isPassBetsWin() : boolean {
    return this.passBetsWin;
  }

  setPassBetsWin(passBetsWin: boolean) {
    this.passBetsWin = passBetsWin;
  }

  takeBet(player:Player<Craps>, amount:number) {
    if(this.bets[player.id]==undefined) {
      this.bets[player.id]= amount;
      console.log(this.bets[player.id]);
    }
    else {
      this.bets[player.id]+= amount;
    }
    player.bet(amount);
  }

  payOutBets() {
    if(this.passBetsWin) {
      for(let i = 0; i < this.playersOnPass.length; i++) {
        let playerId = this.playersOnPass[i].id;
        let amountWon: number = this.bets[playerId] * 2;
        this.playersOnPass[i].receiveWinnings(amountWon);
      }
    }
    else {
      for(let i = 0; i < this.playersOnDontPass.length; i++) {
        let playerId = this.playersOnDontPass[i].id;
        let amountWon: number = this.bets[playerId] * 2;
        this.playersOnDontPass[i].receiveWinnings(amountWon);
      }
    }
    this.clearAllBets();
  }

  clearAllBets() {
    this.bets={};
    this.playersOnPass = [];
    this.playersOnDontPass = [];
  }

  putPlayerOnPass(player: CrapsPlayer) {
    this.playersOnPass.push(player);
  }

  putPlayerOnDontPass(player: CrapsPlayer) {
    this.playersOnDontPass.push(player);
  }

  printPlayersMoney() : string {
    var moneyString: string[] = [];
    let i = 1;
    for(let player in this.players) {
      moneyString.push("Player " + i + ", " + this.players[player].getName() + ", Total money: $" + this.players[player].getMoney());
      i++;
    }
    return "[ " + moneyString.join(" ] , [ ") + " ]";
  }
}
