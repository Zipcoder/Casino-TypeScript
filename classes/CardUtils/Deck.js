"use strict";
///<reference path = "Card.ts"/>
exports.__esModule = true;
var Card_1 = require("./Card");
var Deck = /** @class */ (function () {
    function Deck() {
        this.deck = [];
        this.suits = ["clubs", "spades", "hearts", "diamonds"];
        this.faces = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
    }
    Deck.prototype.newDeck = function () {
        //for every suit inside this.suits
        for (var _i = 0, _a = this.suits; _i < _a.length; _i++) {
            var suit = _a[_i];
            for (var i = 0; i < this.faces.length; i++) {
                //no zero value cards
                var num = i + 1;
                if (num > 10) {
                    //all faces are 10
                    num = 10;
                }
                this.deck.push(new Card_1.Card(suit, num, this.faces[i]));
            }
        }
        this.shuffle();
    };
    Deck.prototype.getDeck = function () {
        this.newDeck();
        return this.deck;
    };
    Deck.prototype.shuffle = function () {
        for (var i = 0; i < this.deck.length; i++) {
            var ranNum = Math.floor(Math.random() * this.deck.length);
            _a = [this.deck[ranNum], this.deck[i]], this.deck[i] = _a[0], this.deck[ranNum] = _a[1];
        }
        var _a;
    };
    return Deck;
}());
exports.Deck = Deck;
// checking if file works
var deck;
deck = new Deck();
deck.newDeck();
console.log(deck);
