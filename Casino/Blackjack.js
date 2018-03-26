"use strict";
exports.__esModule = true;
var CardFactory_1 = require("./CardFactory");
var Dealer_1 = require("./Dealer");
var Blackjack = /** @class */ (function () {
    function Blackjack(entryPlayer) {
        this.betAmount = 0;
        this.deck = CardFactory_1.CardFactory.createStandardDeck();
        this.dealer = new Dealer_1["default"]();
        this.player = entryPlayer;
    }
    Blackjack.prototype.startGame = function () {
    };
    Blackjack.prototype.outOfMoneyCheck = function () {
        if (this.player.getBalance() < 10) {
            return true;
        }
        return false;
    };
    Blackjack.prototype.preGameReset = function () {
        this.player.setHand([]);
        this.dealer.setHand([]);
        this.player.setCanHit(true);
        this.setBetAmount(0);
    };
    Blackjack.prototype.getBetAmount = function () {
        return this.betAmount;
    };
    Blackjack.prototype.setBetAmount = function (amount) {
        this.betAmount = amount;
    };
    Blackjack.prototype.runTurn = function () {
        for (var i = 0; i < this.player.getHand.length; i++) {
            //Tell them what they have
        }
        this.setBetAmount(10);
    };
    Blackjack.prototype.deal = function () {
        var temp = this.deck.privateCards[0];
        this.player.addToHand(temp);
        this.deck.privateCards.shift();
    };
    Blackjack.prototype.dealToDealer = function () {
        var temp = this.deck.privateCards[0];
        this.dealer.addToHand(temp);
        this.deck.privateCards.shift();
    };
    Blackjack.prototype.initialHand = function () {
        this.deal;
        this.deal;
        this.dealToDealer;
        this.dealToDealer;
    };
    Blackjack.prototype.bustCheck = function (player) {
        var handValue = player.getHandValue();
        if (handValue > 21) {
            return true;
        }
        return false;
    };
    Blackjack.prototype.dealerHitCheck = function () {
        if (this.dealer.getHandValue() > 16) {
            return false;
        }
        return true;
    };
    Blackjack.prototype.dealerTurn = function () {
        while (this.dealerHitCheck()) {
            this.dealToDealer();
        }
        //tell them what the dealer has
    };
    Blackjack.prototype.winCheck = function () {
        var playerHand = this.player.getHandValue();
        if (playerHand == 21 || playerHand > this.dealer.getHandValue()) {
            return true;
        }
        return false;
    };
    Blackjack.prototype.playerHitOption = function () {
        var hitOrNot = this.runPlayerHit();
        if (hitOrNot != null) {
            return hitOrNot;
        }
        return hitOrNot;
    };
    Blackjack.prototype.runPlayerHit = function () {
        while (this.player.canIHit()) {
            if (this.player.getHandValue() > 21) {
                //tell them they bust
                break;
            }
            var hit;
            if (hit) {
                return true;
            }
            this.player.setCanHit(false);
            return false;
        }
    };
    Blackjack.prototype.setPlaying = function (isPlaying) {
        this.isPlaying = isPlaying;
    };
    Blackjack.prototype.endGame = function () {
    };
    return Blackjack;
}());
