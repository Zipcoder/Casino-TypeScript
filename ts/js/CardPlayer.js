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
define(["require", "exports", "./Player", "./CardPile", "./Card"], function (require, exports, Player_1, CardPile_1, Card_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CardPlayer = (function (_super) {
        __extends(CardPlayer, _super);
        function CardPlayer(name) {
            var _this = _super.call(this, name) || this;
            _this.hand = new CardPile_1.CardPile();
            return _this;
        }
        CardPlayer.prototype.addCardToHand = function (card) {
            this.hand.addCardToPile(card);
        };
        CardPlayer.prototype.addCardsToHand = function (cardPile) {
            this.hand.addCardsToPile(cardPile);
        };
        CardPlayer.prototype.hasCardsOfRank = function (rank) {
            var hand = this.getHand();
            for (var suit in Object.keys(Card_1.Card.suits)) {
                var cardToCheck = new Card_1.Card(rank, suit);
                if (hand.contains(cardToCheck)) {
                    return true;
                }
            }
            return false;
        };
        CardPlayer.prototype.getHand = function () {
            return this.hand;
        };
        return CardPlayer;
    }(Player_1.Player));
    exports.CardPlayer = CardPlayer;
});
//# sourceMappingURL=CardPlayer.js.map