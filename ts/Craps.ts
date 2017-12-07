import {Game} from './Game'
import {Gamble} from './Gamble'
import {Dice} from './Dice'
import {Player} from './Player'
import {CrapsPlayer} from './CrapsPlayer'
export class Craps extends Game<Craps> implements Gamble<Craps> {
  MIN_NUMBER_OF_PLAYERS = 1;
  MAX_NUMBER_OF_PLAYERS = 8;

  private dice: Dice = new Dice(2);
  private point: number;

  private bets = {};
  private playersOnPass: CrapsPlayer[] = [];
  private playersOnDontPass: CrapsPlayer[] = [];
  private passBetsWin = true;

  getPlayers() : CrapsPlayer[] {
    return this.players;
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
    if(this.bets[player.id]==undefined)
      this.bets[player.id]= amount;
      else this.bets[player.id]+= amount;
      player.bet(amount);
  }

  payOutBets() {
    if(this.passBetsWin) {
        for(let player in this.playersOnPass) {
            let amountWon = this.bets[player] * 2;
            this.playersOnPass[player].receiveWinnings(amountWon);
        }
    }
    else {
        for(let player in this.playersOnDontPass) {
            let amountWon = this.bets[player] * 2;
            this.playersOnDontPass[player].receiveWinnings(amountWon);
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
}
