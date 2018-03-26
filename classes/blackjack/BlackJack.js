"use strict";
///<reference path="Dealer.ts"/>
///<reference path="../CardGame/CardGame.ts"/>
///<reference path="BjPlayer.ts"/>
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
exports.__esModule = true;
var BjPlayer_1 = require("./BjPlayer");
var Dealer_1 = require("./Dealer");
var Deck_1 = require("../CardUtils/Deck");
var CardGame_1 = require("../CardGame/CardGame");
var BlackJack = /** @class */ (function (_super) {
    __extends(BlackJack, _super);
    function BlackJack(player, dealer) {
        var _this = _super.call(this) || this;
        _this.player = new BjPlayer_1.BjPlayer(player);
        _this.dealer = new Dealer_1.Dealer(dealer);
        return _this;
    }
    BlackJack.prototype.getPlayer = function () {
        return this.player;
    };
    BlackJack.prototype.getDealer = function () {
        return this.dealer;
    };
    BlackJack.prototype.start = function () {
        console.log("GAME STARTED!");
        this.deal(this.player, this.dealer, 2);
    };
    BlackJack.prototype.deal = function (player, dealer, number) {
        this.player = new BjPlayer_1.BjPlayer(player);
        this.dealer = new Dealer_1.Dealer(dealer);
    };
    BlackJack.prototype.hit = function () {
        this.player.addCard(this.deck.pop());
        this.checkForOver21();
    };
    BlackJack.prototype.stand = function () {
        this.player.calculateScore();
        this.dealerPlay();
        this.checkForWin();
    };
    BlackJack.prototype.checkBalanceAmount = function () {
        if (this.player.balance < 1) {
            //exit game
        }
    };
    BlackJack.prototype.checkForOver21 = function () {
        this.player.calculateScore();
        if (this.player.getScore() > 21) {
            this.checkForWin();
            this.dealer.calculateScore();
        }
    };
    BlackJack.prototype.checkForWin = function () {
        if (this.didPlayerWin()) {
            //PLAYER WON
            this.player.balance += (this.betAmount) * 1.5;
        }
        else {
            //PLAYER LOST
            this.player.balance -= this.betAmount;
        }
    };
    BlackJack.prototype.didPlayerWin = function () {
        var playerScore = this.player.getScore();
        var dealerScore = this.dealer.getScore();
        if ((playerScore == 21 && dealerScore != 21) ||
            (playerScore < 21 && dealerScore < playerScore) ||
            (playerScore < 21 && dealerScore > 21)) {
            return true;
        }
        else {
            return false;
        }
    };
    BlackJack.prototype.dealerPlay = function () {
        this.dealer.calculateScore();
        while (this.dealer.getScore() < 17) {
            this.dealer.addCard(this.deck.pop());
            this.dealer.calculateScore();
        }
        this.dealer.clearHand();
        //display dealer hand
    };
    BlackJack.prototype.playAgain = function () {
        new Deck_1.Deck();
        this.start();
    };
    BlackJack.prototype.placeBet = function () {
    };
    return BlackJack;
}(CardGame_1.CardGame));
exports.BlackJack = BlackJack;
