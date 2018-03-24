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
var CardSuit;
(function (CardSuit) {
    CardSuit[CardSuit["Clubs"] = 0] = "Clubs";
    CardSuit[CardSuit["Diamonds"] = 1] = "Diamonds";
    CardSuit[CardSuit["Hearts"] = 2] = "Hearts";
    CardSuit[CardSuit["Spades"] = 3] = "Spades";
})(CardSuit || (CardSuit = {}));
var CardValue;
(function (CardValue) {
    CardValue[CardValue["Two"] = 2] = "Two";
    CardValue[CardValue["Three"] = 3] = "Three";
    CardValue[CardValue["Four"] = 4] = "Four";
    CardValue[CardValue["Five"] = 5] = "Five";
    CardValue[CardValue["Six"] = 6] = "Six";
    CardValue[CardValue["Seven"] = 7] = "Seven";
    CardValue[CardValue["Eight"] = 8] = "Eight";
    CardValue[CardValue["Nine"] = 9] = "Nine";
    CardValue[CardValue["Ten"] = 10] = "Ten";
    CardValue[CardValue["Jack"] = 10] = "Jack";
    CardValue[CardValue["Queen"] = 10] = "Queen";
    CardValue[CardValue["King"] = 10] = "King";
    CardValue[CardValue["Ace"] = 11] = "Ace";
})(CardValue || (CardValue = {}));
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
var Player = /** @class */ (function () {
    function Player() {
    }
    Player.prototype.getProfile = function () {
        throw new Error("Method not implemented.");
    };
    Player.prototype.getName = function (name) {
        throw new Error("Method not implemented.");
    };
    Player.prototype.getId = function (id) {
        throw new Error("Method not implemented.");
    };
    return Player;
}());
var Profile = /** @class */ (function () {
    function Profile(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    Profile.prototype.setId = function (id) {
        this.id = id;
    };
    Profile.prototype.setName = function (name) {
        this.name = name;
    };
    Profile.prototype.setBalance = function (balance) {
        this.balance = balance;
    };
    Profile.prototype.getName = function () {
        return this.name;
    };
    Profile.prototype.getId = function () {
        return this.id;
    };
    Profile.prototype.get = function () {
        return this.balance;
    };
    return Profile;
}());
//# sourceMappingURL=app.js.map