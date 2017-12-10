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
            _this.game = new BlackJack_1.BlackJack(1);
            _this.i = 1;
            return _this;
        }
        BlackJackConsole.prototype.start = function () {
            switch (this.i) {
                case 1:
                    console.log("case1");
                    this.getPlayerName();
                    break;
                case 2:
                    this.makeBet();
                    break;
                case 3:
                    this.hitOrStand();
                    break;
                case 4:
                    this.dealerHitsUntilFinished();
                    this.displayEndOfRound();
                    break;
                case 5:
                    this.payOutBets();
                    this.game.putCardsInDiscardPile();
                    this.askContinueOrCashOut();
                    break;
                default: Utilities_1.Utilities.printLine("done" + this.currentPlayer.getHand().toString());
            }
        };
        BlackJackConsole.prototype.getPlayerName = function () {
            Utilities_1.Utilities.printMenuName("Welcome to " + this.getNameOfGame());
            Utilities_1.Utilities.printLine("Enter name of Player");
            var _this = this;
            Utilities_1.Utilities.buttonEle.addEventListener("click", function getName() {
                var name = Utilities_1.Utilities.userInputEle.value;
                Utilities_1.Utilities.userInputEle.value = "";
                Utilities_1.Utilities.printLine("Welcome, " + name);
                _this.currentPlayer = new BlackJackPlayer_1.BlackJackPlayer(name);
                var players = [_this.currentPlayer];
                _this.game.addPlayers(players);
                _this.currentPlayer.setMoney(1000);
                _this.i++;
                // _this.currentPlayer = _this.game.getPlayers()[0];
                var amountAvailableToBet = _this.currentPlayer.getMoney();
                Utilities_1.Utilities.printLine("You have $" + amountAvailableToBet);
                Utilities_1.Utilities.printLine("How much would you like to bet?");
                _this.start();
                this.removeEventListener("click", getName);
            });
        };
        BlackJackConsole.prototype.makeBet = function () {
            var amountAvailableToBet = this.currentPlayer.getMoney();
            var _this = this;
            Utilities_1.Utilities.buttonEle.addEventListener("click", function getBet() {
                var amount = parseInt(Utilities_1.Utilities.userInputEle.value);
                Utilities_1.Utilities.userInputEle.value = "";
                if (amount > amountAvailableToBet || isNaN(amount)) {
                    Utilities_1.Utilities.printLine("Invalid Amount, Enter a new bet");
                }
                else {
                    Utilities_1.Utilities.printLine("You bet $" + amount);
                    _this.game.takeBet(_this.currentPlayer, amount);
                    _this.i++;
                    _this.dealCards();
                    this.removeEventListener("click", getBet);
                }
            });
        };
        BlackJackConsole.prototype.dealCards = function () {
            this.game.dealInitialCards();
            Utilities_1.Utilities.printLine(this.currentPlayer.getHand().toString());
            this.displayDealerFaceUpCard();
            Utilities_1.Utilities.printLine("Hit or Stand?");
            this.start();
        };
        BlackJackConsole.prototype.hitOrStand = function () {
            var _this = this;
            Utilities_1.Utilities.buttonEle.addEventListener("click", function hitOrStand() {
                var choice = Utilities_1.Utilities.userInputEle.value.toUpperCase();
                Utilities_1.Utilities.userInputEle.value = "";
                if (choice == "HIT") {
                    Utilities_1.Utilities.printLine("Hit");
                    _this.game.dealCardToHand(_this.currentPlayer);
                    Utilities_1.Utilities.printLine(_this.currentPlayer.getHand().toString());
                    if (_this.game.calculatePlayerScore(_this.currentPlayer) >= 21) {
                        _this.i++;
                        _this.start();
                        this.removeEventListener("click", hitOrStand);
                    }
                    else {
                        Utilities_1.Utilities.printLine("Hit or Stand?");
                        _this.start();
                        this.removeEventListener("click", hitOrStand);
                    }
                }
                else if (choice == "STAND") {
                    Utilities_1.Utilities.printLine("Stand");
                    _this.i++;
                    _this.start();
                    this.removeEventListener("click", hitOrStand);
                }
                else {
                    Utilities_1.Utilities.printLine("Invalid Entry, Hit or Stand?");
                }
            });
        };
        BlackJackConsole.prototype.dealerHitsUntilFinished = function () {
            this.displayDealerCards();
            while (this.game.calculatePlayerScore(this.game.getDealer()) <= 16 ||
                (this.game.calculatePlayerScore(this.game.getDealer()) == 17 && this.game.getDealer().hasAceInHand())) {
                this.displayDealerCards();
                this.game.dealCardToHand(this.game.getDealer());
            }
        };
        BlackJackConsole.prototype.displayDealerFaceUpCard = function () {
            Utilities_1.Utilities.printLine("Dealer showing " + this.game.getDealer().getHand().getCard(0).getIcon());
        };
        BlackJackConsole.prototype.displayDealerCards = function () {
            Utilities_1.Utilities.printLine("Dealer showing " + this.game.getDealer().getHand().toString());
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
                if (cashOut.toUpperCase() == "Y" || _this.currentPlayer.getMoney() == 0) {
                    Utilities_1.Utilities.printLine("Returning to the Lobby;");
                    _this.currentPlayer.cashOut();
                    Utilities_1.Utilities.clearDisplay();
                    var casino = new Casino_1.Casino();
                    casino.startCasino();
                    this.removeEventListener("click", cashOrContinue);
                }
                else if (cashOut.toUpperCase() == "N") {
                    Utilities_1.Utilities.clearDisplay();
                    Utilities_1.Utilities.printLine("How much would you like to bet?");
                    _this.i = 2;
                    _this.start();
                    this.removeEventListener("click", cashOrContinue);
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