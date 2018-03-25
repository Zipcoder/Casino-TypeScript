var Deck = /** @class */ (function () {
    function Deck(card, deck) {
        if (deck === void 0) { deck = []; }
        this._deck = [];
        this.card = card;
        this._deck = deck;
        this._deck.push({ suit: "Clubs", rank: 2 }, { suit: "Clubs", rank: 3 }, { suit: "Clubs", rank: 4 }, { suit: "Clubs", rank: 5 }, { suit: "Clubs", rank: 6 }, { suit: "Clubs", rank: 7 }, { suit: "Clubs", rank: 8 }, { suit: "Clubs", rank: 9 }, { suit: "Clubs", rank: 10 }, { suit: "Clubs", rank: 11 }, { suit: "Clubs", rank: 12 }, { suit: "Clubs", rank: 13 }, { suit: "Clubs", rank: 14 });
        this._deck.push({ suit: "Hearts", rank: 2 }, { suit: "Hearts", rank: 3 }, { suit: "Hearts", rank: 4 }, { suit: "Hearts", rank: 5 }, { suit: "Hearts", rank: 6 }, { suit: "Hearts", rank: 7 }, { suit: "Hearts", rank: 8 }, { suit: "Hearts", rank: 9 }, { suit: "Hearts", rank: 10 }, { suit: "Hearts", rank: 11 }, { suit: "Hearts", rank: 12 }, { suit: "Hearts", rank: 13 }, { suit: "Hearts", rank: 14 });
        this._deck.push({ suit: "Diamonds", rank: 2 }, { suit: "Diamonds", rank: 3 }, { suit: "Diamonds", rank: 4 }, { suit: "Diamonds", rank: 5 }, { suit: "Diamonds", rank: 6 }, { suit: "Diamonds", rank: 7 }, { suit: "Diamonds", rank: 8 }, { suit: "Diamonds", rank: 9 }, { suit: "Diamonds", rank: 10 }, { suit: "Diamonds", rank: 11 }, { suit: "Diamonds", rank: 12 }, { suit: "Diamonds", rank: 13 }, { suit: "Diamonds", rank: 14 });
        this._deck.push({ suit: "Spade", rank: 2 }, { suit: "Spade", rank: 3 }, { suit: "Spade", rank: 4 }, { suit: "Spade", rank: 5 }, { suit: "Spade", rank: 6 }, { suit: "Spade", rank: 7 }, { suit: "Spade", rank: 8 }, { suit: "Spade", rank: 9 }, { suit: "Spade", rank: 10 }, { suit: "Spade", rank: 11 }, { suit: "Spade", rank: 12 }, { suit: "Spade", rank: 13 }, { suit: "Spade", rank: 14 });
    }
    Object.defineProperty(Deck.prototype, "deck", {
        get: function () {
            return this._deck;
        },
        enumerable: true,
        configurable: true
    });
    Deck.prototype.shuffleDeck = function () {
        for (var i = 0; i < this._deck.length; i++) {
            var randomChoiceIndex = Math.floor(Math.random() * (this._deck.length - i));
            _a = [this._deck[randomChoiceIndex], this._deck[i]], this._deck[i] = _a[0], this._deck[randomChoiceIndex] = _a[1];
        }
        return this._deck;
        var _a;
    };
    Deck.prototype.drawCard = function () {
        console.log(this._deck.pop());
        return this._deck.pop();
    };
    return Deck;
}());
