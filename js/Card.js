var Card = /** @class */ (function () {
    function Card(rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }
    Card.prototype.toString = function () {
        return CardValue[this.rank] + " of " + CardSuit[this.suit];
    };
    return Card;
}());
//# sourceMappingURL=Card.js.map