var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./CardPlayer", "./CardPile"], function (require, exports, CardPlayer_1, CardPile_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GoFishPlayer = (function (_super) {
        __extends(GoFishPlayer, _super);
        function GoFishPlayer(name) {
            var _this = _super.call(this, name) || this;
            _this.books = [];
            return _this;
        }
        GoFishPlayer.prototype.fishForCards = function (otherPlayer, rank) {
            if (otherPlayer.hasCardsOfRank(rank)) {
                return true;
            }
            else {
                return false;
            }
        };
        GoFishPlayer.prototype.handOverAllCardsRequested = function (rank) {
            var toHandOver = new CardPile_1.CardPile();
            var hand = this.getHand().getCards();
            for (var card in hand) {
                if (hand[card].getFaceValue() === rank) {
                    toHandOver.addCardToPile(hand[card]);
                }
            }
            for (var card in toHandOver.getCards()) {
                this.getHand().removeCard(toHandOver.getCards()[card]);
            }
            return toHandOver;
        };
        GoFishPlayer.prototype.playPotentialBooksInHand = function () {
            var numberOfEachValue = {};
            var hand = this.getHand().getCards();
            for (var card in hand) {
                var key = hand[card].getFaceValue();
                if (numberOfEachValue[key] === undefined) {
                    numberOfEachValue[key] = 1;
                }
                else {
                    numberOfEachValue[key]++;
                }
            }
            var fourOfAKindValues = [];
            for (var key in numberOfEachValue) {
                if (numberOfEachValue[key] === 4) {
                    fourOfAKindValues.push(key);
                }
            }
            for (var value in fourOfAKindValues) {
                var book = new CardPile_1.CardPile();
                for (var card in hand) {
                    if (hand[card].getFaceValue() === fourOfAKindValues[value]) {
                        book.addCardToPile(hand[card]);
                    }
                }
                this.books.push(book);
                for (var card in book.getCards()) {
                    this.getHand().removeCard(book.getCards()[card]);
                }
            }
            return fourOfAKindValues.length;
        };
        GoFishPlayer.prototype.goFish = function (card) {
            this.addCardToHand(card);
        };
        GoFishPlayer.prototype.getBooks = function () {
            return this.books;
        };
        return GoFishPlayer;
    }(CardPlayer_1.CardPlayer));
    exports.GoFishPlayer = GoFishPlayer;
});
//# sourceMappingURL=GoFishPlayer.js.map