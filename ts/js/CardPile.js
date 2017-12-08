define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CardPile = (function () {
        function CardPile() {
            this.cards = [];
        }
        CardPile.prototype.shuffle = function () {
            var j, x, i;
            for (i = this.cards.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = this.cards[i];
                this.cards[i] = this.cards[j];
                this.cards[j] = x;
            }
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
            for (var c in this.cards) {
                if (this.cards[c].matches((card))) {
                    return true;
                }
            }
            return false;
        };
        CardPile.prototype.containsAll = function (cardPile) {
            var temp = new CardPile();
            temp.addCardsToPile(cardPile);
            while (temp.numCards() > 0) {
                var nextCard = temp.getCard(0);
                if (this.contains(nextCard)) {
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
            for (var c = 0; c < this.cards.length; c++) {
                var other = this.cards[c];
                if (other.matches(card)) {
                    this.cards.splice(c, 1);
                    return;
                }
            }
        };
        CardPile.prototype.clear = function () {
            this.cards = [];
        };
        CardPile.prototype.getCards = function () {
            return this.cards;
        };
        CardPile.prototype.toString = function () {
            var icons = [];
            for (var c in this.cards) {
                icons.push(this.cards[c].getIcon());
            }
            return icons.toString();
        };
        return CardPile;
    }());
    exports.CardPile = CardPile;
});
//# sourceMappingURL=CardPile.js.map