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
define(["require", "exports", "./Console", "./Utilities", "./BlackJack", "./BlackJackPlayer"], function (require, exports, Console_1, Utilities_1, BlackJack_1, BlackJackPlayer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BlackJackConsole = (function (_super) {
        __extends(BlackJackConsole, _super);
        function BlackJackConsole() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.nameOfGame = "BlackJack";
            _this.game = new BlackJack_1.BlackJack(1);
            return _this;
        }
        BlackJackConsole.prototype.start = function () {
            this.setUpGame();
            // this.playRoundsUntilAllPlayersCashOut(this.game);
        };
        BlackJackConsole.prototype.setUpGame = function () {
            Utilities_1.Utilities.printMenuName("Welcome to " + this.getNameOfGame());
            var numPlayers = this.getNumPlayers(this.game.MIN_NUMBER_OF_PLAYERS, this.game.MAX_NUMBER_OF_PLAYERS);
            var playerNames = this.getPlayerNames(numPlayers);
            var players = [];
            for (var name_1 in playerNames) {
                var player = new BlackJackPlayer_1.BlackJackPlayer(playerNames[name_1]);
                players.push(player);
            }
            this.game.addPlayers(players);
            this.getPlayerChips(this.game);
        };
        BlackJackConsole.prototype.playRound = function () {
            for (var p in this.game.getPlayers()) {
                var player = this.game.getPlayers[p];
                if (player.getMoney() > 0) {
                    this.makeBet(player);
                }
            }
            Utilities_1.Utilities.printLine("<br/> Dealing cards...<br/>");
            this.game.dealInitialCards();
            this.displayDealerFaceUpCard();
            for (var currentPlayerIndex = 0; currentPlayerIndex < this.game.getNumPlayers(); currentPlayerIndex++) {
                var currentPlayer = this.game.getPlayers()[currentPlayerIndex];
                if (this.game.getBets()[currentPlayer.id] != undefined) {
                    var playerNumber = currentPlayerIndex + 1;
                    Utilities_1.Utilities.printLine("Player " + playerNumber + ", " + currentPlayer.getName() + " turn:");
                    this.playerTakeTurn(currentPlayer);
                }
            }
            this.dealerHitsUntilFinished();
            this.displayEndOfRound();
            this.payOutBets();
            this.game.putCardsInDiscardPile();
            this.askContinueOrCashOut();
        };
        BlackJackConsole.prototype.displayDealerFaceUpCard = function () {
            Utilities_1.Utilities.printLine("Dealer showing " + this.game.getDealer().getHand().getCard(0));
        };
        BlackJackConsole.prototype.playerTakeTurn = function (player) {
            var finishedTurn = false;
            while (!finishedTurn) {
                Utilities_1.Utilities.printLine("Your cards: " + player.getHand());
                finishedTurn = this.hitOrStay();
            }
            Utilities_1.Utilities.printLine("");
        };
        BlackJackConsole.prototype.makeBet = function (player) {
            var amountAvailableToBet = player.getMoney();
            var amount = 0.0;
            var isValidInput = false;
            while (!isValidInput) {
                amount = Utilities_1.Utilities.getMoneyInput(player.getName() + ", how much would you like to bet?");
                if (amount <= amountAvailableToBet) {
                    isValidInput = true;
                }
                else {
                    Utilities_1.Utilities.printLine("Sorry you do not have that much money to bet.");
                }
            }
            this.game.takeBet(player, amount);
        };
        BlackJackConsole.prototype.hitOrStay = function () {
            if (this.game.calculatePlayerScore(this.currentPlayer) == 21) {
                Utilities_1.Utilities.printLine("21!!");
                return true;
            }
            var toHit = Utilities_1.Utilities.getYesOrNoInput("Do you want to hit? Y or N");
            if (toHit) {
                this.game.dealCardToHand(this.currentPlayer);
            }
            else {
                return true;
            }
            if (this.game.playerHasBust(this.currentPlayer)) {
                Utilities_1.Utilities.printLine("Bust! " + this.currentPlayer.getHand());
                return true;
            }
            return false;
        };
        BlackJackConsole.prototype.dealerHitsUntilFinished = function () {
            while (this.game.calculatePlayerScore(this.game.getDealer()) <= 16 ||
                (this.game.calculatePlayerScore(this.game.getDealer()) == 17 && this.game.getDealer().hasAceInHand())) {
                this.game.dealCardToHand(this.game.getDealer());
            }
        };
        BlackJackConsole.prototype.displayEndOfRound = function () {
            Utilities_1.Utilities.printLine("<br/>Dealer score: " + this.game.calculatePlayerScore(this.game.getDealer()) + this.game.getDealer().getHand());
            for (var p in this.game.getPlayers()) {
                var player = this.game.getPlayers[p];
                if (this.game.getBets()[player.id]) {
                    Utilities_1.Utilities.printLine(player.getName() + " score: " + this.game.calculatePlayerScore(player) +
                        " " + player.getHand());
                }
            }
            Utilities_1.Utilities.printLine("");
        };
        BlackJackConsole.prototype.payOutBets = function () {
            this.game.determineWinners();
            this.game.payOutBets();
        };
        BlackJackConsole.prototype.askContinueOrCashOut = function () {
            Utilities_1.Utilities.printLine(this.game.printPlayersMoney());
            for (var p in this.game.getPlayers()) {
                var player = this.game.getPlayers()[p];
                if (player.getMoney() > 0) {
                    var cashOut = Utilities_1.Utilities.getYesOrNoInput(player.getName() + ", Cash Out? Y or N");
                    if (cashOut) {
                        player.cashOut();
                    }
                }
            }
        };
        BlackJackConsole.prototype.getNameOfGame = function () {
            return this.nameOfGame;
        };
        return BlackJackConsole;
    }(Console_1.Console));
    exports.BlackJackConsole = BlackJackConsole;
});
//# sourceMappingURL=BlackJackConsole.js.map