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
define(["require", "exports", "./CardPile", "./Card"], function (require, exports, CardPile_1, Card_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StandardDeck = (function (_super) {
        __extends(StandardDeck, _super);
        function StandardDeck() {
            var _this = _super.call(this) || this;
            _this.populateStandardDeck();
            return _this;
        }
        StandardDeck.prototype.populateStandardDeck = function () {
            for (var faceValue in Card_1.Card.faceValues) {
                for (var suit in Card_1.Card.suits) {
                    this.addCardToPile(new Card_1.Card(faceValue, suit));
                }
            }
            this.shuffle();
        };
        return StandardDeck;
    }(CardPile_1.CardPile));
    exports.StandardDeck = StandardDeck;
});
//# sourceMappingURL=StandardDeck.js.map