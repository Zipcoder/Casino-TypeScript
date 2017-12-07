import {Player} from './Player';
export interface Gamble<T> {
  takeBet(player: Player<T>, amount: number);
  payOutBets();
  clearAllBets();
}
