"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var card_1 = require("./card");
var Deck = /** @class */ (function (_super) {
    __extends(Deck, _super);
    function Deck(card) {
        return _super.call(this, card) || this;
    }
    Deck.prototype.passOutCards = function (numberCard) {
        console.log("I am passing out " + numberCard + "and they are " + this.getCard);
    };
    return Deck;
}(card_1.Card));
var myDeck = new card_1.Card("Goobly");
myDeck.passOutCards(3);
