"use strict";
var Card = /** @class */ (function () {
    function Card(suit, value) {
        this.suit = suit;
        this.value = value;
    }
    Card.prototype.getSuit = function () {
        return Suit[this.suit];
    };
    Card.prototype.getValue = function () {
        return CardRank[this.value];
    };
    Card.prototype.showCard = function () {
        return this.getValue + " of " + this.getSuit();
    };
    return Card;
}());
