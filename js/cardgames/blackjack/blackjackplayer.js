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
Object.defineProperty(exports, "__esModule", { value: true });
var cardplayer_1 = require("../cardplayer");
var escrow_1 = require("../../escrow");
var BlackJackPlayer = /** @class */ (function (_super) {
    __extends(BlackJackPlayer, _super);
    function BlackJackPlayer(someProfile) {
        var _this = _super.call(this, someProfile) || this;
        _this._escrow = new escrow_1.Escrow();
        return _this;
    }
    BlackJackPlayer.prototype.bet = function (betAmount) {
        var accountBalance = this.profile.balance;
        if (betAmount > accountBalance) {
            // print insufficient funds
            return false;
        }
        else {
            this.profile.balance = accountBalance - betAmount;
            this.escrow.balance = betAmount;
            return true;
        }
    };
    BlackJackPlayer.prototype.win = function () {
        this.profile.balance = this.profile.balance + (this._escrow.balance * 2);
        this.escrow.balance = 0;
    };
    BlackJackPlayer.prototype.lose = function () {
        this.escrow.balance = 0;
    };
    BlackJackPlayer.prototype.push = function () {
        this.profile.balance = this.profile.balance + this._escrow.balance;
        this._escrow.balance = 0;
    };
    BlackJackPlayer.prototype.scoreHand = function () {
        var handScore = 0;
        for (var i = 0; i < this.hand.length; i++) {
            handScore += this.scoreCard(this.hand[i]);
        }
        if (handScore > 21) {
            this.isBusted = true;
        }
        return handScore;
    };
    BlackJackPlayer.prototype.scoreCard = function (anyCard) {
        var cardScore = 0;
        switch (anyCard.rank) {
            case "A":
                cardScore = 11;
                break;
            case "2":
                cardScore = 2;
                break;
            case "3":
                cardScore = 3;
                break;
            case "4":
                cardScore = 4;
                break;
            case "5":
                cardScore = 5;
                break;
            case "6":
                cardScore = 6;
                break;
            case "7":
                cardScore = 7;
                break;
            case "8":
                cardScore = 8;
                break;
            case "9":
                cardScore = 9;
                break;
            case "10":
                cardScore = 10;
                break;
            case "J":
                cardScore = 10;
                break;
            case "Q":
                cardScore = 10;
                break;
            case "K":
                cardScore = 10;
                break;
        }
        return cardScore;
    };
    Object.defineProperty(BlackJackPlayer.prototype, "hasStood", {
        get: function () {
            return this.hasStood;
        },
        set: function (stoodStatus) {
            this.hasStood = stoodStatus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlackJackPlayer.prototype, "isBusted", {
        get: function () {
            return this.isBusted;
        },
        set: function (bustedStatus) {
            this.isBusted = bustedStatus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlackJackPlayer.prototype, "escrow", {
        get: function () {
            return this._escrow;
        },
        set: function (newEscrow) {
            this._escrow = newEscrow;
        },
        enumerable: true,
        configurable: true
    });
    return BlackJackPlayer;
}(cardplayer_1.CardPlayer));
exports.BlackJackPlayer = BlackJackPlayer;
