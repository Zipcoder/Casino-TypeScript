"use strict";
exports.__esModule = true;
var PictureCard;
(function (PictureCard) {
    PictureCard[PictureCard["Ace"] = 0] = "Ace";
    PictureCard[PictureCard["Jack"] = 1] = "Jack";
    PictureCard[PictureCard["Queen"] = 2] = "Queen";
    PictureCard[PictureCard["King"] = 3] = "King";
})(PictureCard || (PictureCard = {}));
exports.PictureCard = PictureCard;
var Suit;
(function (Suit) {
    Suit[Suit["Hearts"] = 0] = "Hearts";
    Suit[Suit["Diamonds"] = 1] = "Diamonds";
    Suit[Suit["Spades"] = 2] = "Spades";
    Suit[Suit["Clubs"] = 3] = "Clubs";
})(Suit || (Suit = {}));
exports.Suit = Suit;
var Cards = /** @class */ (function () {
    function Cards(rank, suit) {
        this.isPictureCard = function () {
            return this.rank > 10 || this.rank === 1;
        };
        if (rank > 0 && rank < 14) {
            this.rank = rank;
        }
        else {
            throw new RangeError("Card is outside of normal deck range.");
        }
        this.suit = suit;
    }
    Cards.prototype.getRank = function () {
        return this.rank;
    };
    Cards.prototype.getSuit = function () {
        return this.suit;
    };
    Cards.prototype.toJSObject = function () {
        return { suite: Suit[this.suit], rank: this.isPictureCard() ? PictureCard[this.rank] : this.rank.toString() };
    };
    return Cards;
}());
exports.Cards = Cards;
