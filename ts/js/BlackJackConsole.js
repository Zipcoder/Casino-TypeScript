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
define(["require", "exports", "./Console", "./Utilities", "./BlackJack", "./BlackJackPlayer", "./Casino"], function (require, exports, Console_1, Utilities_1, BlackJack_1, BlackJackPlayer_1, Casino_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BlackJackConsole = (function (_super) {
        __extends(BlackJackConsole, _super);
        function BlackJackConsole() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.nameOfGame = "BlackJack";
            _this.game = new BlackJack_1.BlackJack(8);
            _this.i = 1;
            return _this;
        }
        BlackJackConsole.prototype.start = function () {
            switch (this.i) {
                case 1:
                    this.inputNumPlayers();
                    break;
                case 2:
                    this.getPlayerName();
                    break;
                case 3:
                    this.makeBet();
                    break;
                case 4:
                    this.dealCards();
                    break;
                case 5:
                    this.hitOrStand();
                    break;
                case 6:
                    this.dealerHitsUntilFinished();
                    this.displayEndOfRound();
                    break;
                case 7:
                    this.payOutBets();
                    this.game.putCardsInDiscardPile();
                    this.askContinueOrCashOut();
                    break;
                default:
                    Utilities_1.Utilities.printLine("Error, returning to lobby.");
                    var casino = new Casino_1.Casino();
                    casino.startCasino();
            }
        };
        BlackJackConsole.prototype.inputNumPlayers = function () {
            Utilities_1.Utilities.printMenuName("Welcome to " + this.getNameOfGame());
            Utilities_1.Utilities.printLine("Enter the number of Players (up to 7)");
            var _this = this;
            Utilities_1.Utilities.buttonEle.addEventListener("click", function getName() {
                var length = parseInt(Utilities_1.Utilities.userInputEle.value);
                Utilities_1.Utilities.userInputEle.value = "";
                if (isNaN(length) || length > _this.game.MAX_NUMBER_OF_PLAYERS)
                    Utilities_1.Utilities.printLine("Invalid selection");
                else {
                    Utilities_1.Utilities.userInputEle.value = "";
                    length > 0 ? _this.game.setNumPlayers(length) : _this.game.setNumPlayers(length + 1);
                    _this.i++;
                    Utilities_1.Utilities.printLine("Enter the name of Player 1");
                    this.removeEventListener("click", getName);
                    _this.start();
                }
            });
        };
        BlackJackConsole.prototype.getPlayerName = function () {
            var count = 1;
            var _this = this;
            Utilities_1.Utilities.buttonEle.addEventListener("click", function getName() {
                var name = Utilities_1.Utilities.userInputEle.value;
                if (count < _this.game.getNumPlayers()) {
                    Utilities_1.Utilities.clearDisplay();
                    count++;
                    Utilities_1.Utilities.userInputEle.value = "";
                    Utilities_1.Utilities.printLine("Welcome, " + name);
                    var player = new BlackJackPlayer_1.BlackJackPlayer(name);
                    player.setMoney(1000);
                    _this.game.addPlayer(player);
                    Utilities_1.Utilities.printLine("Enter name of Player " + (count));
                }
                else {
                    Utilities_1.Utilities.clearDisplay();
                    Utilities_1.Utilities.printLine("Welcome, " + name);
                    Utilities_1.Utilities.userInputEle.value = "";
                    var player = new BlackJackPlayer_1.BlackJackPlayer(name);
                    player.setMoney(1000);
                    _this.game.addPlayer(player);
                    _this.i++;
                    _this.currentPlayer = _this.game.getPlayers()[0];
                    var amountAvailableToBet = _this.currentPlayer.getMoney();
                    Utilities_1.Utilities.printLine(_this.currentPlayer.getName() + ", you have $" + amountAvailableToBet);
                    Utilities_1.Utilities.printLine("How much would you like to bet?");
                    this.removeEventListener("click", getName);
                    _this.start();
                }
            });
        };
        BlackJackConsole.prototype.makeBet = function () {
            var playerIndex = 1;
            var _this = this;
            Utilities_1.Utilities.buttonEle.addEventListener("click", function getBet() {
                var amountAvailableToBet = _this.currentPlayer.getMoney();
                var amount = parseInt(Utilities_1.Utilities.userInputEle.value);
                Utilities_1.Utilities.userInputEle.value = "";
                if (amount > amountAvailableToBet || isNaN(amount)) {
                    Utilities_1.Utilities.printLine("Invalid Amount, Enter a new bet");
                }
                else {
                    Utilities_1.Utilities.clearDisplay();
                    Utilities_1.Utilities.printLine(_this.currentPlayer.getName() + " bet $" + amount);
                    _this.game.takeBet(_this.currentPlayer, amount);
                    if (playerIndex < _this.game.getNumPlayers()) {
                        _this.currentPlayer = _this.game.getPlayer(playerIndex);
                        playerIndex++;
                        Utilities_1.Utilities.printLine(_this.currentPlayer.getName() + ", you have $" + amountAvailableToBet);
                        Utilities_1.Utilities.printLine("How much would you like to bet?");
                    }
                    else {
                        Utilities_1.Utilities.printLine("Dealing...");
                        _this.i++;
                        this.removeEventListener("click", getBet);
                        _this.start();
                    }
                }
            });
        };
        BlackJackConsole.prototype.dealCards = function () {
            this.game.dealInitialCards();
            this.displayAllHands();
            this.displayDealerFaceUpCard();
            this.i++;
            this.currentPlayer = this.game.getPlayer(0);
            Utilities_1.Utilities.printLine(this.currentPlayer.getName() + ", Hit or Stand?");
            this.start();
        };
        BlackJackConsole.prototype.hitOrStand = function () {
            var playerIndex = 1;
            var _this = this;
            Utilities_1.Utilities.buttonEle.addEventListener("click", function hitOrStand() {
                var choice = Utilities_1.Utilities.userInputEle.value;
                Utilities_1.Utilities.userInputEle.value = "";
                if (choice.match(/^(Hit\b|H\b)/gi) != null) {
                    Utilities_1.Utilities.printLine("Hit");
                    _this.game.dealCardToHand(_this.currentPlayer);
                    Utilities_1.Utilities.printLine(_this.currentPlayer.getHand().toString());
                    if (_this.game.calculatePlayerScore(_this.currentPlayer) >= 21 && playerIndex < _this.game.getNumPlayers()) {
                        Utilities_1.Utilities.clearDisplay();
                        _this.currentPlayer = _this.game.getPlayer(playerIndex);
                        playerIndex++;
                        _this.displayAllHands();
                        Utilities_1.Utilities.printLine(_this.currentPlayer.getName() + ", Hit or Stand?");
                    }
                    else if (_this.game.calculatePlayerScore(_this.currentPlayer) >= 21) {
                        _this.i++;
                        _this.currentPlayer = _this.game.getPlayer(0);
                        this.removeEventListener("click", hitOrStand);
                        _this.start();
                    }
                    else {
                        Utilities_1.Utilities.clearDisplay();
                        _this.displayAllHands();
                        Utilities_1.Utilities.printLine(_this.currentPlayer.getName() + ", Hit or Stand?");
                    }
                }
                else if (choice.match(/^(Stand\b|s\b|Stay\b)/gi) != null) {
                    Utilities_1.Utilities.printLine("Stand");
                    if (playerIndex < _this.game.getNumPlayers()) {
                        _this.currentPlayer = _this.game.getPlayer(playerIndex);
                        playerIndex++;
                        Utilities_1.Utilities.clearDisplay();
                        _this.displayAllHands();
                        Utilities_1.Utilities.printLine(_this.currentPlayer.getName() + ", Hit or Stand?");
                    }
                    else {
                        _this.i++;
                        _this.currentPlayer = _this.game.getPlayer(0);
                        this.removeEventListener("click", hitOrStand);
                        _this.start();
                    }
                }
                else {
                    Utilities_1.Utilities.printLine("Invalid Entry, Hit or Stand?");
                }
            });
        };
        BlackJackConsole.prototype.dealerHitsUntilFinished = function () {
            Utilities_1.Utilities.clearDisplay();
            this.displayAllHands();
            this.displayDealerCards();
            while (this.game.calculatePlayerScore(this.game.getDealer()) <= 16 ||
                (this.game.calculatePlayerScore(this.game.getDealer()) == 17 && this.game.getDealer().hasAceInHand())) {
                Utilities_1.Utilities.printLine("Dealer Hits");
                this.game.dealCardToHand(this.game.getDealer());
                this.displayDealerCards();
            }
        };
        BlackJackConsole.prototype.displayOverTwenty = function (player) {
            if (this.game.calculatePlayerScore(player) == 21) {
                Utilities_1.Utilities.printLine(player.getName() + " got 21!");
            }
            else if (this.game.calculatePlayerScore(player) > 21) {
                Utilities_1.Utilities.printLine(player.getName() + " busted!");
            }
        };
        BlackJackConsole.prototype.displayDealerFaceUpCard = function () {
            Utilities_1.Utilities.printLine("Dealer showing " + this.game.getDealer().getHand().getCard(0).getIcon());
        };
        BlackJackConsole.prototype.displayDealerCards = function () {
            Utilities_1.Utilities.printLine("Dealer showing " + this.game.getDealer().getHand().toString());
        };
        BlackJackConsole.prototype.displayAllHands = function () {
            for (var ind = 0; ind < this.game.getNumPlayers(); ind++) {
                var player = this.game.getPlayer(ind);
                Utilities_1.Utilities.printLine(player.getName() + ": " + player.getHand().toString());
                this.displayOverTwenty(player);
            }
        };
        BlackJackConsole.prototype.displayEndOfRound = function () {
            Utilities_1.Utilities.printLine("<br/>Dealer score: " + this.game.calculatePlayerScore(this.game.getDealer()) + " " + this.game.getDealer().getHand());
            for (var p in this.game.getPlayers()) {
                var player = this.game.getPlayers()[p];
                if (this.game.getBets()[player.id]) {
                    Utilities_1.Utilities.printLine(player.getName() + " score: " + this.game.calculatePlayerScore(player) +
                        " " + player.getHand());
                }
            }
            Utilities_1.Utilities.printLine("");
            this.i++;
            this.start();
        };
        BlackJackConsole.prototype.payOutBets = function () {
            this.game.determineWinners();
            this.game.payOutBets();
        };
        BlackJackConsole.prototype.askContinueOrCashOut = function () {
            Utilities_1.Utilities.printLine(this.game.printPlayersMoney());
            Utilities_1.Utilities.printLine(this.currentPlayer.getName() + ", Cash Out? Y or N");
            var _this = this;
            Utilities_1.Utilities.buttonEle.addEventListener("click", function cashOrContinue() {
                var cashOut = Utilities_1.Utilities.userInputEle.value;
                Utilities_1.Utilities.userInputEle.value = "";
                if (cashOut.match(/^(Yes\b|Y\b)/gi) != null) {
                    _this.currentPlayer.cashOut();
                    var casino = new Casino_1.Casino();
                    Utilities_1.Utilities.clearDisplay();
                    this.removeEventListener("click", cashOrContinue);
                    casino.startCasino();
                }
                else if (cashOut.match(/^(No\b|N\b)/gi) != null) {
                    Utilities_1.Utilities.clearDisplay();
                    if (_this.currentPlayer.getMoney() == 0) {
                        var casino = new Casino_1.Casino();
                        Utilities_1.Utilities.printLine("You have no more money, returning to lobby...");
                        this.removeEventListener("click", cashOrContinue);
                        casino.startCasino();
                    }
                    else {
                        Utilities_1.Utilities.printLine(_this.currentPlayer.getName() + ", you have $" + _this.currentPlayer.getMoney());
                        Utilities_1.Utilities.printLine(_this.currentPlayer.getName() + ", how much would you like to bet?");
                        _this.i = 3;
                        this.removeEventListener("click", cashOrContinue);
                        _this.start();
                    }
                }
                else {
                    Utilities_1.Utilities.printLine("Invalid choice. Cash Out? Y or N");
                }
            });
        };
        BlackJackConsole.prototype.getNameOfGame = function () {
            return this.nameOfGame;
        };
        return BlackJackConsole;
    }(Console_1.Console));
    exports.BlackJackConsole = BlackJackConsole;
});
//# sourceMappingURL=BlackJackConsole.js.map