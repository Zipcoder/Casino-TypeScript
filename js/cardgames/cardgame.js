"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cardplayer_1 = require("./cardplayer");
class CardGame {
    constructor(aProfile) {
        this._player = new cardplayer_1.CardPlayer(aProfile);
    }
    startGame() {
    }
    endGame() {
    }
}
exports.CardGame = CardGame;
