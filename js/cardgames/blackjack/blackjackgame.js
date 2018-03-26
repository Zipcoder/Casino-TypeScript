"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var cardgame_1 = require("../cardgame");
var blackjackplayer_1 = require("./blackjackplayer");
var house_1 = require("../../house");
var BlackJackGame = /** @class */ (function (_super) {
    __extends(BlackJackGame, _super);
    function BlackJackGame(aProfile) {
        var _this = _super.call(this, aProfile) || this;
        _this._player = new blackjackplayer_1.BlackJackPlayer(aProfile);
        _this._dealer = new blackjackplayer_1.BlackJackPlayer(house_1.House._houseProfile);
        _this._players = new Array();
        _this._players.push(_this._player);
        _this._players.push(_this._dealer);
        return _this;
    }
    BlackJackGame.prototype.playOneRound = function () {
        this.placeBets();
        this.deal();
        this.playerTurn(this._player);
        if (this._player.isBusted === false) {
            this.dealerTurn(this._dealer);
        }
        if (this._player.isBusted === false && this._dealer.isBusted === false) {
            this.decideWinner();
        }
    };
    BlackJackGame.prototype.deal = function () {
        for (var i = 0; i < this._players.length; i++) {
            var card1 = this.cardDeck.deal();
            this._players[i]._hand.push(card1);
            var card2 = this.cardDeck.deal();
            this._players[i]._hand.push(card2);
        }
        // need to display players 2 cards and 1/2 of dealers
    };
    BlackJackGame.prototype.playerTurn = function (currentPlayer) {
        // dispaly the players score
        currentPlayer.scoreHand();
        while (currentPlayer.hasStood === false && currentPlayer.isBusted === false) {
            // ask player hit or stand
            // if hit, calculate score
            currentPlayer.scoreHand();
            // if stand, mark as stood
            currentPlayer.hasStood = true;
        }
        if (this._player.isBusted === true) {
            // display that the player busted and lost their bet
            this._player.lose();
        }
    };
    BlackJackGame.prototype.dealerTurn = function (theDealer) {
        this.revealDealerCard();
        // display the dealer's score
        theDealer.scoreHand();
        while (theDealer.hasStood === false && theDealer.isBusted === false) {
            if (theDealer.scoreHand() < 17) {
                this.hit(theDealer);
            }
            else if (theDealer.scoreHand() > 21) {
                // display that the dealer busted
                this._dealer.isBusted = true;
                // display that the player wins
                this._player.win();
            }
            else {
                theDealer.hasStood = true;
            }
        }
    };
    BlackJackGame.prototype.hit = function (aBlackJackPlayer) {
        var hitCard = this.cardDeck.deal();
        aBlackJackPlayer._hand.push(hitCard);
        // need to display card
    };
    BlackJackGame.prototype.placeBets = function () {
        // ask the player how much to bet
        var playersBet = 0;
        this._player.bet(playersBet);
    };
    BlackJackGame.prototype.calculateScore = function (aBlackJackPlayer) {
        aBlackJackPlayer.hand;
    };
    BlackJackGame.prototype.revealDealerCard = function () {
        // display 2nd card from dealer's hand
        this._dealer._hand[1];
    };
    BlackJackGame.prototype.decideWinner = function () {
        if (this._player.scoreHand() === this._dealer.scoreHand()) {
            // display that it is a push
            this._player.push();
        }
        else if (this._player.scoreHand() > this._dealer.scoreHand()) {
            // display that the player wins
            this._player.win();
        }
        else {
            // display that the dealer wins
            this._player.lose();
        }
    };
    Object.defineProperty(BlackJackGame.prototype, "player", {
        get: function () {
            return this._player;
        },
        set: function (newPlayer) {
            this._player = newPlayer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlackJackGame.prototype, "dealer", {
        get: function () {
            return this._dealer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlackJackGame.prototype, "cardDeck", {
        get: function () {
            return this.cardDeck;
        },
        set: function (newDeck) {
            this.cardDeck = newDeck;
        },
        enumerable: true,
        configurable: true
    });
    return BlackJackGame;
}(cardgame_1.CardGame));
exports.BlackJackGame = BlackJackGame;
