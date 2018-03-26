"use strict";
exports.__esModule = true;
var Card = /** @class */ (function () {
    function Card(suit, rank, faceValue, location) {
        this.suit = suit;
        this.rank = rank;
        this.face = faceValue;
        this.location = location;
    }
    //generating the get methods made a GET keyword and then the name of the
    //variable...I had to manually combine them.
    Card.prototype.getSuit = function () {
        return this.suit;
    };
    Card.prototype.getRank = function () {
        return this.rank;
    };
    Card.prototype.getFace = function () {
        return this.face;
    };
    Card.prototype.toString = function () {
        return this.face + " of " + this.suit;
    };
    return Card;
}());
exports.Card = Card;
