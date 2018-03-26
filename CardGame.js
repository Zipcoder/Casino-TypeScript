"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var player_1 = require("./player");
var deck_1 = require("./deck");
var dealer_1 = require("./dealer");
var CardGame = /** @class */ (function () {
    function CardGame() {
        this.players = [];
        this.currentPlayer = 1;
        this.players.push(new dealer_1.Dealer("Dealer"));
        this.deck = new deck_1.Deck();
    }
    CardGame.prototype.draw = function () {
        var card = this.deck.draw();
        this.players[this.currentPlayer].hand.push(card);
    };
    CardGame.prototype.incrementTurn = function () {
        this.currentPlayer++;
        if (this.currentPlayer === this.players.length) {
            this.currentPlayer = 0;
        }
    };
    CardGame.prototype.dealCards = function (numOfCards) {
        for (var i = 0; i < (numOfCards || 2); i++) {
            for (var player = 0; player < this.players.length; player++) {
                this.draw();
                this.incrementTurn();
            }
        }
    };
    CardGame.prototype.addNewPlayer = function (name) {
        this.players.push(new player_1.Player((name || "Player " + (this.players.length + 1))));
    };
    CardGame.prototype.showHands = function () {
        this.players.forEach(function (player) {
            console.log(player.name + "'s hand:");
            player.hand.forEach(function (card) {
                console.log(card.cardToString());
            });
        });
    };
    CardGame.prototype.newHand = function () {
        for (var player = 0; player < this.players.length; player++) {
            this.players[player].hand = [];
            this.players[player].handScore = 0;
        }
    };
    return CardGame;
}());
exports.CardGame = CardGame;
