var Card = /** @class */ (function () {
    function Card(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }
    Card.prototype.getSuit = function () {
        return this.suit;
    };
    Card.prototype.getRank = function () {
        return this.rank;
    };
    Card.prototype.setSuit = function (suit) {
        this.suit = suit;
    };
    Card.prototype.setRank = function (rank) {
        this.rank = rank;
    };
    return Card;
}());
//# sourceMappingURL=Card.js.map