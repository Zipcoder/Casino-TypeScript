BlackJack;
CardGame;
{
}
var Card = /** @class */ (function () {
    function Card(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }
    Card.prototype.toString = function () {
        return CardRank[this.rank] + " of " + CardSuit[this.suit];
    };
    return Card;
}());
var CardRank;
(function (CardRank) {
    CardRank[CardRank["two"] = 0] = "two";
    CardRank[CardRank["three"] = 1] = "three";
    CardRank[CardRank["four"] = 2] = "four";
    CardRank[CardRank["five"] = 3] = "five";
    CardRank[CardRank["six"] = 4] = "six";
    CardRank[CardRank["seven"] = 5] = "seven";
    CardRank[CardRank["eight"] = 6] = "eight";
    CardRank[CardRank["nine"] = 7] = "nine";
    CardRank[CardRank["ten"] = 8] = "ten";
    CardRank[CardRank["jack"] = 9] = "jack";
    CardRank[CardRank["queen"] = 10] = "queen";
    CardRank[CardRank["king"] = 11] = "king";
    CardRank[CardRank["Ace"] = 12] = "Ace";
})(CardRank || (CardRank = {}));
var CardSuit;
(function (CardSuit) {
    CardSuit[CardSuit["Clubs"] = 0] = "Clubs";
    CardSuit[CardSuit["Diamonds"] = 1] = "Diamonds";
    CardSuit[CardSuit["Hearts"] = 2] = "Hearts";
    CardSuit[CardSuit["Spades"] = 3] = "Spades";
})(CardSuit || (CardSuit = {}));
