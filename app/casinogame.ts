import { Player } from "./player";

export interface CasinoGame<Player> {
    _player: Player;

    startGame: () => void;
    endGame: () => void;
}