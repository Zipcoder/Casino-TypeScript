var CardsClass;
(function (CardsClass) {
    var Suits;
    (function (Suits) {
        Suits[Suits["Clubs"] = 0] = "Clubs";
        Suits[Suits["Diamonds"] = 1] = "Diamonds";
        Suits[Suits["Hearts"] = 2] = "Hearts";
        Suits[Suits["Spades"] = 3] = "Spades";
    })(Suits || (Suits = {}));
    var OneCard = /** @class */ (function () {
        function OneCard(CardName, CardValue, CardSuit) {
            this.CardName = CardName;
            this.CardValue = CardValue;
            this.CardSuit = CardSuit;
        }
        return OneCard;
    }());
    CardsClass.OneCard = OneCard;
    var DeckOfCards = /** @class */ (function () {
        function DeckOfCards() {
            this.Deck = new Array;
            this.addCard(new CardsClass.OneCard("Ace", "15", 1));
            this.addCard(new CardsClass.OneCard("Ace", "15", 2));
            this.addCard(new CardsClass.OneCard("Ace", "15", 3));
            this.addCard(new CardsClass.OneCard("Ace", "15", 4));
        }
        DeckOfCards.prototype.addCard = function (Card) {
            this.Deck.push(Card);
        };
        DeckOfCards.prototype.drawCard = function () {
            var i = 0;
            var count = Math.floor(Math.random() * this.Deck.length - 1);
            for (i; i < 1; i++) {
                return this.Deck[count];
            }
        };
        return DeckOfCards;
    }());
    okokok;
})(CardsClass || (CardsClass = {}));
