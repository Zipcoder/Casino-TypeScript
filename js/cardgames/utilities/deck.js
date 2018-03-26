"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var card_1 = require("./card");
var Deck = /** @class */ (function () {
    function Deck() {
        this._cardDeck = new Array();
        this.buildDeck();
        this.shuffle();
    }
    Object.defineProperty(Deck.prototype, "deck", {
        get: function () {
            return this._cardDeck;
        },
        set: function (newDeck) {
            this._cardDeck = newDeck;
        },
        enumerable: true,
        configurable: true
    });
    Deck.prototype.deal = function () {
        var card = this._cardDeck[this._cardDeck.length - 1];
        this._cardDeck.splice(this._cardDeck.length - 1, 1);
        // console.log(card);
        return card;
    };
    Deck.prototype.buildDeck = function () {
        var cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        var suits = ["diamonds", "hearts", "spades", "clubs"];
        for (var i = 0; i < suits.length; i++) {
            for (var j = 0; j < cards.length; j++) {
                var card = new card_1.Card(suits[i], cards[j]);
                this._cardDeck.push(card);
            }
        }
    };
    Deck.prototype.shuffle = function () {
        for (var i = 0; i < 1000; i++) {
            var location1 = Math.floor((Math.random() * this._cardDeck.length));
            var location2 = Math.floor((Math.random() * this._cardDeck.length));
            var temp = this._cardDeck[location1];
            this._cardDeck[location1] = this._cardDeck[location2];
            this._cardDeck[location2] = temp;
        }
    };
    return Deck;
}());
exports.Deck = Deck;
var myDeck = new Deck();
console.log(myDeck.deal());
