"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Player = /** @class */ (function () {
    function Player(name) {
        this.name = name;
        this.hand = [];
        this.handScore = 0;
    }
    Player.prototype.playerNameToString = function () {
        return this.name;
    };
    Player.prototype.handToString = function () {
        var handString = "";
        for (var i = 0; i < this.hand.length; i++) {
            handString += this.hand[i].cardToString + " ";
        }
        return handString;
    };
    return Player;
}());
exports.Player = Player;
