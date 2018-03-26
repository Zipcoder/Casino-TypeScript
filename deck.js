"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var card_1 = require("./card");
var Deck = /** @class */ (function () {
    function Deck() {
        this.cards = [];
        this.currentCard = 0;
        for (var i = 0; i < 13; i++) {
            for (var suit = 0; suit < 4; suit++) {
                this.cards.push(new card_1.Card(Deck.RANKS[i], Deck.SUITS[suit]));
            }
        }
        this.shuffle(3);
    }
    Deck.prototype.shuffle = function (times) {
        for (var i = 0; i < (times || 1); i++) {
            this.cards.sort(function () {
                return (0.5 - Math.random());
            });
        }
    };
    Deck.prototype.printDeck = function () {
        this.cards.forEach(function (card) {
            console.log(card.cardToString());
        });
    };
    Deck.prototype.draw = function () {
        if (this.currentCard === this.cards.length - 1) {
            this.shuffle();
            this.currentCard = 0;
        }
        return this.cards[this.currentCard++];
    };
    Deck.SUITS = ['♥', '♦', '♠', '♣'];
    Deck.RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    return Deck;
}());
exports.Deck = Deck;
