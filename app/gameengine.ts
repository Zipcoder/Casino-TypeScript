import { CasinoGame } from "./casinogame";
import { Player } from "./player";

export class GameEngine {

    _game: CasinoGame<Player>;
    _player: Player;

    constructor(aGame: CasinoGame<Player>, aPlayer: Player) {
        this._game = aGame;
        this._player = aPlayer;
    }

    // game: () => CasinoGame<Player>;
    // get game() {
    //     return this._game;
    // }

    // set game(newGame: CasinoGame<Player>) {
    //     this._game = newGame;
    // }

    // player: () => Player;

}