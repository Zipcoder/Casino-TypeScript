import {Player} from './Player';
import {Game} from './Game';
export interface Gamble<T extends Game<T>> {
  takeBet(player: Player<T>, amount: number);
  payOutBets();
  clearAllBets();
}
