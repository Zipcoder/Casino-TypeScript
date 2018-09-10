var game;
(function (game) {
    let Suit;
    (function (Suit) {
        Suit["HEARTS"] = "\u2665";
        Suit["CLUBS"] = "\u2663";
        Suit["SPADES"] = "\u2660";
        Suit["DIAMONDS"] = "\u2666";
    })(Suit = game.Suit || (game.Suit = {}));
    let Rank;
    (function (Rank) {
        Rank[Rank["ACE"] = 1] = "ACE";
        Rank[Rank["TWO"] = 2] = "TWO";
        Rank[Rank["THREE"] = 3] = "THREE";
        Rank[Rank["FOUR"] = 4] = "FOUR";
        Rank[Rank["FIVE"] = 5] = "FIVE";
        Rank[Rank["SIX"] = 6] = "SIX";
        Rank[Rank["SEVEN"] = 7] = "SEVEN";
        Rank[Rank["EIGHT"] = 8] = "EIGHT";
        Rank[Rank["NINE"] = 9] = "NINE";
        Rank[Rank["TEN"] = 10] = "TEN";
        Rank[Rank["JACK"] = 11] = "JACK";
        Rank[Rank["QUEEN"] = 12] = "QUEEN";
        Rank[Rank["KING"] = 13] = "KING";
    })(Rank = game.Rank || (game.Rank = {}));
    class Card {
        constructor() { }
    }
    game.Card = Card;
    class Deck extends Card {
        constructor() {
            super();
            this._deck = new Array();
            let fullSuit = new Array(Suit.HEARTS, Suit.DIAMONDS, Suit.CLUBS, Suit.SPADES);
            let fullRank = new Array(Rank.ACE, Rank.TWO, Rank.THREE, Rank.FOUR, Rank.FIVE, Rank.SIX, Rank.SEVEN, Rank.EIGHT, Rank.NINE, Rank.TEN, Rank.JACK, Rank.QUEEN, Rank.KING);
            for (let suit of fullSuit) {
                for (let rank of fullRank) {
                    this._deck.push({ suit, rank });
                }
            }
            for (let i = this._deck.length - 1; i >= 0; i--) {
                let randomI = Math.floor(Math.random() * (i + 1));
                let temp = this._deck[i];
                this._deck[i] = this._deck[randomI];
                this._deck[randomI] = temp;
            }
        }
        getDeck() {
            return this._deck;
        }
        shuffleDeck() {
            for (let i = this._deck.length - 1; i >= 0; i--) {
                let randomI = Math.floor(Math.random() * (i + 1));
                let temp = this._deck[i];
                this._deck[i] = this._deck[randomI];
                this._deck[randomI] = temp;
            }
            return this._deck;
        }
        drawCard() {
            return this._deck.pop();
        }
        splitDeck() {
            return this._deck.splice(0, (this._deck.length - 1) / 2);
        }
        addCard(card) {
            this._deck.push(card);
        }
        dealHand(nCards) {
            return this._deck.splice(0, nCards);
        }
    }
    game.Deck = Deck;
})(game || (game = {}));
//# sourceMappingURL=tsc.js.map