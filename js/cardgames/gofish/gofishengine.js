"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gameengine_1 = require("../../gameengine");
class GoFishEngine extends gameengine_1.GameEngine {
    constructor(game, player) {
        super(game, player);
        this._game = game;
        this._player = player;
    }
    run() {
    }
    endGame() {
    }
}
