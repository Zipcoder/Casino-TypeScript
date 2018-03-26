"use strict";
exports.__esModule = true;
var Dealer = /** @class */ (function () {
    function Dealer() {
        this.hand = new Array();
    }
    Dealer.prototype.setHand = function (hand) {
        this.hand = hand;
    };
    Dealer.prototype.getHand = function () {
        return this.hand;
    };
    Dealer.prototype.addToHand = function (card) {
        this.hand.push(card);
    };
    Dealer.prototype.getHandValue = function () {
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
    Dealer.prototype.canHit = function () {
        if (this.getHandValue() < 17) {
            return true;
        }
        return false;
    };
    return Dealer;
}());
exports["default"] = Dealer;
