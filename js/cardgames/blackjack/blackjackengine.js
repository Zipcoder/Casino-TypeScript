"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gameengine_1 = require("../../gameengine");
class BlackJackEngine extends gameengine_1.GameEngine {
    constructor(game, player) {
        super(game, player);
        this._game = game;
        this._player = player;
        this._keepPlaying = true;
    }
    run() {
        // display a welcome message
        while (this.keepPlaying === true) {
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
