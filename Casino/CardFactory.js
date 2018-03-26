"use strict";
exports.__esModule = true;
var Deck_1 = require("./Deck");
var Card_1 = require("./Card");
var CardShuffler_1 = require("./CardShuffler");
var buildStandardDeck = function () {
    var cards = new Array();
    for (var suit in Card_1.Suit) {
        if (!isNaN(parseInt(suit))) {
            var suitAsNumber = parseInt(suit);
            for (var rank = 1; rank < 14; rank++) {
                cards.push(new Card_1.Cards(rank, suitAsNumber));
            }
        }
    }
    return cards;
};
var CardFactory = /** @class */ (function () {
    function CardFactory() {
    }
    CardFactory.createStandardDeck = function () {
        return new Deck_1["default"](buildStandardDeck(), new CardShuffler_1.CardShuffler());
    };
    return CardFactory;
}());
exports.CardFactory = CardFactory;
