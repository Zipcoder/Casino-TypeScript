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
        Card.faceValues = {
            "ACE": "A",
            "TWO": "2",
            "THREE": "3",
            "FOUR": "4",
            "FIVE": "5",
            "SIX": "6",
            "SEVEN": "7",
            "EIGHT": "8",
            "NINE": "9",
            "TEN": "10",
            "JACK": "J",
            "QUEEN": "Q",
            "KING": "K"
        };
        Card.suits = {
            "SPADES": "\u2660",
            "HEARTS": "\u2665",
            "DIAMONDS": "\u2666",
            "CLUBS": "\u2663"
        };
        return Card;
    }());
    exports.Card = Card;
});
//# sourceMappingURL=Card.js.map