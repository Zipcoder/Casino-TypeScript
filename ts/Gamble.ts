<<<<<<< HEAD
import {Player} from './Player'
import {Game} from './Game'
=======
import {Player} from './Player';
import {Game} from './Game';
>>>>>>> 9749b2c38f515211e8e8aee1809920cf0ef13c02
export interface Gamble<T extends Game<T>> {
  takeBet(player: Player<T>, amount: number);
  payOutBets();
  clearAllBets();
}
