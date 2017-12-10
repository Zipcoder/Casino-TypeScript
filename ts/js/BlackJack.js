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
define(["require", "exports", "./CardGame", "./BlackJackPlayer"], function (require, exports, CardGame_1, BlackJackPlayer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BlackJack = (function (_super) {
        __extends(BlackJack, _super);
        function BlackJack(numStandardDecks) {
            var _this = _super.call(this, numStandardDecks) || this;
            _this.MAX_NUMBER_OF_PLAYERS = 7;
            _this.pointValues = { TWO: 2, THREE: 3, FOUR: 4, FIVE: 5, SIX: 6, SEVEN: 7, EIGHT: 8, NINE: 9, TEN: 10, JACK: 10, QUEEN: 10, KING: 10, ACE: 1 };
            _this.dealer = new BlackJackPlayer_1.BlackJackPlayer("Dealer");
            _this.bets = {};
            _this.winners = [];
            _this.push = [];
            _this.players = [];
            return _this;
        }
        BlackJack.prototype.getPlayers = function () {
            return this.players;
        };
        BlackJack.prototype.getPlayer = function (index) {
            return this.players[index];
        };
        BlackJack.prototype.getDealer = function () {
            return this.dealer;
        };
        BlackJack.prototype.dealInitialCards = function () {
            for (var i = 0; i < 2; i++) {
                for (var p in this.getPlayers()) {
                    var player = this.getPlayers()[p];
                    if (this.bets[player.id] != undefined) {
                        this.dealCardToHand(player);
                    }
                }
                this.dealCardToHand(this.dealer);
            }
        };
        BlackJack.prototype.dealCardToHand = function (player) {
            this.shuffleCardsWhenStockIsEmpty();
            player.addCardToHand(this.drawFromStock());
        };
        BlackJack.prototype.putCardsInDiscardPile = function () {
            this.discardCards(this.dealer.getHand());
            for (var p in this.getPlayers()) {
                var player = this.getPlayers()[p];
                this.discardCards(player.getHand());
            }
        };
        BlackJack.prototype.shuffleCardsWhenStockIsEmpty = function () {
            if (this.getStockPile().numCards() == 0) {
                this.shuffleDiscardPileBackToStock();
            }
        };
        BlackJack.prototype.calculatePlayerScore = function (player) {
            var score = 0;
            for (var c in player.getHand().getCards()) {
                var card = player.getHand().getCards()[c];
                score += this.pointValues[card.getFaceValue()];
            }
            if (player.hasAceInHand() && score <= 11) {
                score += 10;
            }
            return score;
        };
        BlackJack.prototype.playerHasBust = function (player) {
            if (this.calculatePlayerScore(player) > 21) {
                return true;
            }
            else {
                return false;
            }
        };
        BlackJack.prototype.determineWinners = function () {
            if (this.playerHasBust(this.dealer)) {
                for (var p in this.getPlayers()) {
                    var player = this.getPlayers()[p];
                    if (this.bets[player.id] != undefined) {
                        if (!this.playerHasBust(player)) {
                            this.winners.push(player);
                        }
                    }
                }
            }
            else {
                for (var p in this.getPlayers()) {
                    var player = this.getPlayers()[p];
                    if (this.bets[player.id] != undefined) {
                        if (!this.playerHasBust(player) && this.calculatePlayerScore(player) > this.calculatePlayerScore(this.dealer)) {
                            this.winners.push(player);
                        }
                        else if (this.calculatePlayerScore(player) == (this.calculatePlayerScore(this.dealer))) {
                            this.winners.push(player);
                        }
                    }
                }
            }
        };
        BlackJack.prototype.takeBet = function (player, amount) {
            if (this.bets[player.id] == undefined)
                this.bets[player.id] = amount;
            else
                this.bets[player.id] += amount;
            player.bet(amount);
        };
        BlackJack.prototype.payOutBets = function () {
            for (var p in this.winners) {
                var player = this.winners[p];
                var amountWon = this.bets[player.id] * 2;
                this.winners[p].receiveWinnings(amountWon);
            }
            for (var p in this.push) {
                var player = this.push[p];
                var amountWon = this.bets[player.id];
                this.push[p].receiveWinnings(amountWon);
            }
            this.clearAllBets();
        };
        BlackJack.prototype.clearAllBets = function () {
            this.bets = {};
            this.winners = [];
            this.push = [];
        };
        BlackJack.prototype.getBets = function () {
            return this.bets;
        };
        BlackJack.prototype.getWinners = function () {
            return this.winners;
        };
        BlackJack.prototype.getPush = function () {
            return this.push;
        };
        BlackJack.prototype.setNumPlayers = function (length) {
            this.players.length = length;
        };
        BlackJack.prototype.getNumPlayers = function () {
            return this.players.length;
        };
        BlackJack.prototype.addPlayer = function (player) {
            this.players.shift();
            this.players.push(player);
        };
        BlackJack.prototype.addPlayers = function (players) {
            this.players = (players);
        };
        BlackJack.prototype.printPlayersMoney = function () {
            var moneyString = [];
            var i = 1;
            for (var player in this.players) {
                moneyString.push("Player " + i + ", " + this.players[player].getName() + ", Total money: $" + this.players[player].getMoney());
                i++;
            }
            return "[ " + moneyString.join(" ] , [ ") + " ]";
        };
        return BlackJack;
    }(CardGame_1.CardGame));
    exports.BlackJack = BlackJack;
});
//# sourceMappingURL=BlackJack.js.map