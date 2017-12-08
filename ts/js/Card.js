define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Card = (function () {
        function Card(faceValue, suit) {
            this.faceValue = faceValue;
            this.suit = suit;
        }
        Card.prototype.matches = function (card) {
            return this.getFaceValue() == card.getFaceValue() && this.suit == card.getSuit();
        };
        Card.prototype.getFaceValue = function () {
            return this.faceValue;
        };
        Card.prototype.getSuit = function () {
            return this.suit;
        };
        Card.prototype.getIcon = function () {
            return Card.faceValues[this.faceValue] + Card.suits[this.suit];
        };
        Card.prototype.toString = function () {
            return this.faceValue + " " + this.suit;
        };
        return Card;
    }());
    exports.Card = Card;
});
//# sourceMappingURL=Card.js.map