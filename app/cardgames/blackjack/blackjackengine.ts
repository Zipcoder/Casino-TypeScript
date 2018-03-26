import { GameEngine } from "../../gameengine";
import { BlackJackGame } from "./blackjackgame";
import { BlackJackPlayer } from "./blackjackplayer";

class BlackJackEngine extends GameEngine {

    _game: BlackJackGame;
    _player: BlackJackPlayer;
    _keepPlaying: boolean;

    constructor(game: BlackJackGame, player: BlackJackPlayer) {
        super(game, player);
        this._game = game;
        this._player = player;
        this._keepPlaying = true;
    }

    run() {
        // display a welcome message

        while(this.keepPlaying === true) {
            this._game.playOneRound();

            //ask if player wants to play another round
            //set keepPlaying status
        }
        this.endGame();
    }

    endGame() {
        // game over
        // back to menu
    }

    get keepPlaying() {
        return this._keepPlaying;
    }

}