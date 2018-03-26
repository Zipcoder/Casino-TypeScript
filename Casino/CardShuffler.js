"use strict";
exports.__esModule = true;
var CardShuffler = /** @class */ (function () {
    function CardShuffler() {
    }
    CardShuffler.prototype.shuffle = function (inputCards) {
        var shuffledDeck = [];
        var n = inputCards.length;
        var i;
        while (n) {
            i = Math.floor(Math.random() * n--);
            shuffledDeck.push(inputCards.splice(i, 1)[0]);
        }
        return shuffledDeck.slice(0);
    };
    return CardShuffler;
}());
exports.CardShuffler = CardShuffler;
