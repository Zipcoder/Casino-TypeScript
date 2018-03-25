"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Card = /** @class */ (function () {
    function Card(rank, suit) {
        this.rank = rank;
        this.suit = suit;
        switch (rank) {
            case 'A':
                this.value = 11;
                break;
            case 'K':
            case 'Q':
            case 'J':
                this.value = 10;
                break;
            default:
                this.value = parseInt(rank);
                break;
        }
    }
    Card.prototype.rankToString = function () {
        switch (this.rank) {
            case 'A':
                return "Ace";
            case 'K':
                return "King";
            case 'Q':
                return "Queen";
            case 'J':
                return "Jack";
            default:
                return this.value.toString();
        }
    };
    Card.prototype.suitToString = function () {
        switch (this.suit) {
            case '♥':
                return "Hearts";
            case '♦':
                return "Diamonds";
            case '♣':
                return "Clubs";
            case '♠':
                return "Spades";
            default:
                return this.value.toString();
        }
    };
    Card.prototype.cardToString = function () {
        return this.rankToString() + " of " + this.suitToString();
    };
    return Card;
}());
exports.Card = Card;
