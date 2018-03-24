var DeckOfCards = /** @class */ (function () {
    function DeckOfCards() {
        var _this = this;
        this.newDeck = [];
        this.inPlayDeck = [];
        this.suits = [CardSuit.Spades, CardSuit.Clubs, CardSuit.Diamonds, CardSuit.Hearts];
        this.ranks = [CardValue.Ace, CardValue.Two, CardValue.Three, CardValue.Four, CardValue.Five,
            CardValue.Six, CardValue.Seven, CardValue.Eight, CardValue.Nine, CardValue.Ten,
            CardValue.Jack, CardValue.Queen, CardValue.King];
        this.deck = [];
        this.suits.forEach(function (suit) {
            return _this.ranks.forEach(function (rank) {
                return _this.deck.push(new Card(rank, suit));
            });
        });
        this.deck.push(new Card(null, null));
        this.deck.push(new Card(null, null));
    }
    DeckOfCards.prototype.shuffle = function () {
        for (var i = this.deck.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var swap = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = swap;
        }
    };
    DeckOfCards.prototype.toString = function () {
        return this.deck.join("\n");
    };
    return DeckOfCards;
}());
//# sourceMappingURL=DeckOfCards.js.map