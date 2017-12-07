import {Game} from './Game'
import {Gamble} from './Gamble'
import {Dice} from './Dice'
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
    
  }
}
// public class Craps extends Game implements Gamble{

//
//     public Dice getDice() {
//         return dice;
//     }
//
//     public void rollDice() {
//         dice.rollDice();
//     }
//
//     public Integer getPoint() {
//         return point;
//     }
//
//     public void setPoint(Integer point) {
//         this.point = point;
//     }
//
//     public boolean isPassBetsWin() {
//         return passBetsWin;
//     }
//
//     public void setPassBetsWin(boolean passBetsWin) {
//         this.passBetsWin = passBetsWin;
//     }
//
//     @Override
//     public void takeBet(Player player, Double amount) {
//         bets.put(player, amount);
//         player.bet(amount);
//     }
//
//     @Override
//     public void payOutBets() {
//         if(passBetsWin) {
//             for(CrapsPlayer player : playersOnPass) {
//                 Double amountWon = bets.get(player) * 2;
//                 player.receiveWinnings(amountWon);
//             }
//         }
//         else {
//             for(CrapsPlayer player : playersOnDontPass) {
//                 Double amountWon = bets.get(player) * 2;
//                 player.receiveWinnings(amountWon);
//             }
//         }
//         clearAllBets();
//     }
//
//     @Override
//     public void clearAllBets() {
//         bets.clear();
//         playersOnPass.clear();
//         playersOnDontPass.clear();
//     }
//
//     public void putPlayerOnPass(CrapsPlayer player) {
//         playersOnPass.add(player);
//     }
//
//     public void putPlayerOnDontPass(CrapsPlayer player) {
//         playersOnDontPass.add(player);
//     }
// }
