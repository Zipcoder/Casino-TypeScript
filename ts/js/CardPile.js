define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CardPile = (function () {
        function CardPile() {
            this.cards = Array();
        }
        CardPile.prototype.shuffle = function () {
            Collections.shuffle(this.cards);
        };
        CardPile.prototype.addCardToPile = function (card) {
            this.cards.push(card);
        };
        CardPile.prototype.addCardsToPile = function (cards) {
            for (var c in cards.getCards()) {
                var card = cards.getCards()[c];
                this.addCardToPile(card);
            }
        };
        CardPile.prototype.contains = function (card) {
            if (this.cards.contains(card)) {
                return true;
            }
            else {
                for (var c in this.cards) {
                    if (this.cards[c] == (card)) {
                        return true;
                    }
                }
                return false;
            }
        };
        CardPile.prototype.containsAll = function (cardPile) {
            var temp = new CardPile();
            temp.addCardsToPile(cardPile);
            while (temp.numCards() > 0) {
                var nextCard = temp.getCard(0);
                if (cards.contains(nextCard)) {
                    temp.removeCard(nextCard);
                }
                else {
                    return false;
                }
            }
            return true;
        };
        CardPile.prototype.numCards = function () {
            return this.cards.length;
        };
        CardPile.prototype.getCard = function (index) {
            return this.cards[index];
        };
        CardPile.prototype.removeCard = function (card) {
            var matchedCards = new Array();
            for (var c in this.cards) {
                var other = this.cards[c];
                if (other == card) {
                    matchedCards.push(other);
                }
            }
            if (matchedCards.length > 0) {
                this.cards.remove(matchedCards[0]);
            }
        };
        CardPile.prototype.getCards = function () {
            return this.cards;
        };
        CardPile.prototype.toString = function () {
            StringJoiner;
            stringJoiner = new StringJoiner(", ");
            for (Card; card; )
                : cards;
            {
                stringJoiner.add(card.getFaceValue().getIcon() + card.getSuit().getIcon());
            }
            return stringJoiner.toString();
        };
        return CardPile;
    }());
});
//# sourceMappingURL=CardPile.js.map