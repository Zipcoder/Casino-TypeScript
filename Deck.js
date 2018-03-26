"use strict";
var Deck = /** @class */ (function () {
    function Deck() {
        this.cards = [];
        this.shuffle();
    }
    Deck.prototype.newCards = function () {
        for (var i = 1; i <= 4; i++) {
            for (var n = 1; n <= 13; n++) {
                this.cards.push(new Card(i, n));
            }
        }
        return this.cards;
    };
    Deck.prototype.shuffle = function () {
        this.cards = [];
        for (var suitIndex = 0; suitIndex < 4; suitIndex++) {
            for (var cardRankIndex = 0; cardRankIndex < 13; cardRankIndex++) {
                this.cards.push(new Card(suitIndex, cardRankIndex));
            }
        }
        var currentIndex = this.cards.length;
        var swap;
        var randomIndex;
        //always puts a random card in the last index and moves the previous index
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            swap = this.cards[currentIndex];
            this.cards[currentIndex] = this.cards[randomIndex];
            this.cards[randomIndex] = swap;
        }
    };
    Deck.prototype.cardsLeft = function () {
        return this.cards.length;
    };
    Deck.prototype.dealCard = function () {
        return this.cards.shift();
    };
    return Deck;
}());
