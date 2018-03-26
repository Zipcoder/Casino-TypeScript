import { GameEngine } from "../../gameengine";
import { GoFishGame } from "./gofishgame";
import { GoFishPlayer } from "./gofishplayer";

class GoFishEngine extends GameEngine {

    _game: GoFishGame;
    _player: GoFishPlayer;

    constructor(game: GoFishGame, player: GoFishPlayer) {
        super(game, player);
        this._game = game;
        this._player = player;
    }

    run() {

    }

    endGame() {
        
    }

}
