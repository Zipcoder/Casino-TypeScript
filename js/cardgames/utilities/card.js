"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Card = /** @class */ (function () {
    function Card(theSuit, theRank) {
        this._suit = theSuit;
        this._rank = theRank;
    }
    Object.defineProperty(Card.prototype, "suit", {
        get: function () {
            return this._suit;
        },
        set: function (newSuit) {
            this._suit = newSuit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "rank", {
        get: function () {
            return this._rank;
        },
        set: function (newRank) {
            this._rank = newRank;
        },
        enumerable: true,
        configurable: true
    });
    Card.prototype.toPrint = function () {
        return this._rank + " of " + this._suit;
    };
    return Card;
}());
exports.Card = Card;
