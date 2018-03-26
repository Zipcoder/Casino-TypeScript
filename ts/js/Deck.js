var Deck = /** @class */ (function () {
    function Deck() {
        this.cards = [];
        this.createDeck();
        this.shuffle(this.cards);
    }
    Deck.prototype.createDeck = function () {
        this.cards = [];
        var suitLength = 4;
        var rankLength = 13;
        for (var indexOfSuit = 0; indexOfSuit < suitLength; indexOfSuit++) {
            for (var indexOfRank = 0; indexOfRank < rankLength; indexOfRank++) {
                this.cards.push(new Card(indexOfSuit, indexOfRank));
            }
        }
        return this.cards;
    };
    Deck.prototype.shuffle = function (array) {
        var length = array.length;
        while (length > 0) {
            var index = Math.floor(Math.random() * length);
            length--;
            var tempCard = array[length];
            array[length] = array[index];
            array[index] = tempCard;
        }
        return array;
    };
    Deck.prototype.getCard = function () {
        return this.cards.pop();
    };
    Deck.prototype.countRemainingCards = function () {
        return this.cards.length;
    };
    Deck.prototype.addCard = function (aCard) {
        this.cards.push(aCard);
    };
    Deck.prototype.peek = function () {
        return this.cards[this.cards.length - 1];
    };
    return Deck;
}());
//# sourceMappingURL=Deck.js.map