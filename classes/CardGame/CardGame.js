"use strict";
///<reference path="../CardUtils/Card.ts"/>
///<reference path="../CardUtils/Deck.ts"/>
exports.__esModule = true;
var Deck_1 = require("../CardUtils/Deck");
var CardGame = /** @class */ (function () {
    function CardGame() {
        this.deck = new Deck_1.Deck().getDeck();
    }
    CardGame.prototype.dealCards = function (dealer, player, amount) {
        //clear hands
        dealer.clearHand();
        player.clearHand();
        for (var i = 0; i < amount; i++) {
            dealer.addCard(this.deck.pop());
            player.addCard(this.deck.pop());
        }
    };
    CardGame.prototype.dealCard = function (player, amount) {
        for (var i = 0; i < amount; i++) {
            player.addCard(this.deck.pop());
        }
    };
    CardGame.prototype.createNewDeck = function () {
        this.deck = new Deck_1.Deck().getDeck();
    };
    CardGame.prototype.getDeck = function () {
        return this.deck;
    };
    return CardGame;
}());
exports.CardGame = CardGame;
