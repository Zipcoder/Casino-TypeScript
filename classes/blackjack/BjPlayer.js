"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var CardGamePlayer_1 = require("../CardGame/CardGamePlayer");
var BjPlayer = /** @class */ (function (_super) {
    __extends(BjPlayer, _super);
    function BjPlayer(player) {
        var _this = _super.call(this) || this;
        _this.score = 0;
        _this.player = player;
        _this.score = 0;
        return _this;
    }
    BjPlayer.prototype.displayScore = function () {
        return document.getElementById("playerHand").innerHTML = "Player's Score: " + this.getScore();
    };
    BjPlayer.prototype.getScore = function () {
        //start score with 0
        this.score = 0;
        //loop through the hand length and add each rank
        for (var i = 0; i < _super.prototype.getHand.call(this).length; i++) {
            this.score += _super.prototype.getHand.call(this)[i].getRank();
        }
        //if player has an ACE
        if (this.aceInHand() && this.score <= 11) {
            this.score += 10;
        }
        return this.score;
    };
    BjPlayer.prototype.aceInHand = function () {
        //if player has an ace it can be an 11 or 1
        for (var i = 0; i < _super.prototype.getHand.call(this).length; i++) {
            if (_super.prototype.getHand.call(this)[i].getFace() == "ace") {
                return true;
            }
        }
        return false;
    };
    BjPlayer.prototype.calculateScore = function () {
    };
    return BjPlayer;
}(CardGamePlayer_1.CardGamePlayer));
exports.BjPlayer = BjPlayer;
