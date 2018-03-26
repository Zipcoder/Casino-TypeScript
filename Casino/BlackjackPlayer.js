"use strict";
exports.__esModule = true;
var Wallet_1 = require("./Wallet");
var BlackjackPlayer = /** @class */ (function () {
    function BlackjackPlayer(firstName, lastName, balance) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.wallet = new Wallet_1["default"](balance);
    }
    BlackjackPlayer.prototype.getName = function () {
        return this.firstName + " " + this.lastName;
    };
    BlackjackPlayer.prototype.setName = function (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    };
    BlackjackPlayer.prototype.getBalance = function () {
        return this.wallet.getBalance();
    };
    BlackjackPlayer.prototype.setHand = function (hand) {
        this.hand = hand;
    };
    BlackjackPlayer.prototype.addToHand = function (card) {
        this.hand.push(card);
    };
    BlackjackPlayer.prototype.getHand = function () {
        return this.hand;
    };
    BlackjackPlayer.prototype.canIHit = function () {
        return this.canHit;
    };
    BlackjackPlayer.prototype.setCanHit = function (bool) {
        this.canHit = bool;
    };
    BlackjackPlayer.prototype.getHandValue = function () {
        var handValue = 0;
        var aceCounter = 0;
        for (var i = 0; i < this.hand.length; i++) {
            if (this.hand[i].getRank() == 1) {
                aceCounter += 1;
                handValue += 11;
            }
            else if (this.hand[i].getRank() > 9) {
                handValue += 10;
            }
            else {
                handValue += this.hand[i].getRank();
            }
            if (aceCounter > 0 && handValue > 21) {
                handValue -= 10;
            }
        }
        return handValue;
    };
    BlackjackPlayer.prototype.payoutWin = function (amount) {
        this.wallet.add(amount);
    };
    BlackjackPlayer.prototype.payoutLoss = function (amount) {
        this.wallet.subtract(amount);
    };
    return BlackjackPlayer;
}());
exports["default"] = BlackjackPlayer;
