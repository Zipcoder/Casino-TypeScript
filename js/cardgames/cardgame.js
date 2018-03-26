"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cardplayer_1 = require("./cardplayer");
var CardGame = /** @class */ (function () {
    function CardGame(aProfile) {
        this._player = new cardplayer_1.CardPlayer(aProfile);
    }
    CardGame.prototype.startGame = function () {
    };
    CardGame.prototype.endGame = function () {
    };
    return CardGame;
}());
exports.CardGame = CardGame;
