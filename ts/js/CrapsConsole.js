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
define(["require", "exports", "./Utilities", "./Console", "./Craps", "./CrapsPlayer"], function (require, exports, Utilities_1, Console_1, Craps_1, CrapsPlayer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CrapsConsole = (function (_super) {
        __extends(CrapsConsole, _super);
        function CrapsConsole() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.game = new Craps_1.Craps();
            _this.currentPlayerIndex = 0;
            _this.i = 1;
            _this.continueRolling = true;
            return _this;
        }
        CrapsConsole.prototype.start = function () {
            switch (this.i) {
                case 1:
                    this.getPlayerName();
                    break;
                case 2:
                    this.makeBet();
                    break;
                case 3:
                    this.betOnPassOrDontPass();
                    break;
                case 4:
                    this.comeOutRoll();
                    break;
                case 5:
                    this.rollForPoint();
                    break;
                case 6:
                    this.playAgain();
                    break;
            }
        };
        CrapsConsole.prototype.getPlayerName = function () {
            Utilities_1.Utilities.printMenuName("Welcome to " + this.getNameOfGame());
            Utilities_1.Utilities.printLine("Enter name of Player");
            var _this = this;
            Utilities_1.Utilities.buttonEle.addEventListener("click", function getName() {
                var name = Utilities_1.Utilities.userInputEle.value;
                Utilities_1.Utilities.userInputEle.value = "";
                Utilities_1.Utilities.printLine("Welcome, " + name);
                var players = [];
                players.push(new CrapsPlayer_1.CrapsPlayer(name));
                _this.game.addPlayers(players);
                _this.game.getPlayers()[0].setMoney(1000);
                _this.i++;
                _this.currentPlayer = _this.game.getPlayers()[0];
                var amountAvailableToBet = _this.currentPlayer.getMoney();
                Utilities_1.Utilities.printLine("You have $" + amountAvailableToBet);
                Utilities_1.Utilities.printLine("How much would you like to bet?");
                _this.start();
                this.removeEventListener("click", getName);
            });
        };
        CrapsConsole.prototype.makeBet = function () {
            var amountAvailableToBet = this.currentPlayer.getMoney();
            var _this = this;
            Utilities_1.Utilities.buttonEle.addEventListener("click", function getBet() {
                var amount = parseInt(Utilities_1.Utilities.userInputEle.value);
                Utilities_1.Utilities.userInputEle.value = "";
                console.log(amount);
                if (amount > amountAvailableToBet) {
                    console.log("too much");
                    Utilities_1.Utilities.printLine("Sorry you do not have that much money to bet.");
                }
                else {
                    Utilities_1.Utilities.printLine("You bet $" + amount);
                    _this.game.takeBet(_this.currentPlayer, amount);
                    _this.i++;
                    Utilities_1.Utilities.printLine("Place bet on Pass or Don't Pass?");
                    _this.start();
                    this.removeEventListener("click", getBet);
                }
            });
        };
        CrapsConsole.prototype.betOnPassOrDontPass = function () {
            var _this = this;
            Utilities_1.Utilities.buttonEle.addEventListener("click", function pass() {
                var input = Utilities_1.Utilities.userInputEle.value.toUpperCase();
                Utilities_1.Utilities.userInputEle.value = "";
                if (input != "PASS" && input != "DON'T PASS") {
                    Utilities_1.Utilities.printLine("Try again");
                }
                else {
                    if (input === "PASS") {
                        Utilities_1.Utilities.printLine("You bet on Pass");
                        _this.game.putPlayerOnPass(_this.currentPlayer);
                    }
                    else {
                        Utilities_1.Utilities.printLine("You bet on Don't Pass");
                        _this.game.putPlayerOnDontPass(_this.currentPlayer);
                    }
                    Utilities_1.Utilities.printLine("Click to roll dice");
                    _this.i++;
                    _this.start();
                    this.removeEventListener("click", pass);
                }
            });
        };
        CrapsConsole.prototype.comeOutRoll = function () {
            var _this = this;
            Utilities_1.Utilities.buttonEle.addEventListener("click", function roll() {
                _this.game.rollDice();
                var rollSum = _this.game.getSumOfDice();
                Utilities_1.Utilities.printLine("You rolled a " + rollSum + " " + _this.game.getDice().printDice());
                var comeOutRollEndsRound;
                switch (rollSum) {
                    case 2:
                    case 3:
                    case 12:
                        _this.game.setPassBetsWin(false);
                        comeOutRollEndsRound = true;
                        break;
                    case 7:
                    case 11:
                        _this.game.setPassBetsWin(true);
                        comeOutRollEndsRound = true;
                        break;
                    case 4:
                    case 5:
                    case 6:
                    case 8:
                    case 9:
                    case 10:
                        _this.game.setPoint(rollSum);
                        comeOutRollEndsRound = false;
                        break;
                }
                if (!comeOutRollEndsRound) {
                    Utilities_1.Utilities.printLine("Rolling for point: " + _this.game.getPoint());
                    Utilities_1.Utilities.printLine("Click to roll dice");
                    _this.i++;
                    _this.start();
                    this.removeEventListener("click", roll);
                }
                else {
                    _this.i += 2;
                    _this.start();
                    this.removeEventListener("click", roll);
                }
            });
        };
        CrapsConsole.prototype.rollForPoint = function () {
            var _this = this;
            Utilities_1.Utilities.buttonEle.addEventListener("click", function rollAgain() {
                _this.game.rollDice();
                var rollSum = _this.game.getSumOfDice();
                Utilities_1.Utilities.printLine("You rolled a " + rollSum + " " + _this.game.getDice().printDice());
                if (rollSum == _this.game.getPoint() || rollSum == 7) {
                    _this.continueRolling = false;
                }
                if (!_this.continueRolling) {
                    if (rollSum === _this.game.getPoint()) {
                        _this.game.setPassBetsWin(true);
                    }
                    else {
                        _this.game.setPassBetsWin(false);
                    }
                    _this.i++;
                    _this.start();
                    this.removeEventListener("click", rollAgain);
                }
                else {
                    _this.start();
                    this.removeEventListener("click", rollAgain);
                }
            });
        };
        CrapsConsole.prototype.payOutBets = function () {
            if (this.game.isPassBetsWin()) {
                if (this.game.getPlayersOnPass().length > 0) {
                    Utilities_1.Utilities.printLine("Congratulations, the bets on PASS win!");
                }
                else {
                    Utilities_1.Utilities.printLine("Sorry, you lost.");
                }
            }
            else {
                if (this.game.getPlayersOnDontPass().length > 0) {
                    Utilities_1.Utilities.printLine("Congratulations, the bets on DON'T PASS win!");
                }
                else {
                    Utilities_1.Utilities.printLine("Sorry, you lost.");
                }
            }
            this.game.payOutBets();
        };
        CrapsConsole.prototype.playAgain = function () {
            this.payOutBets();
            this.continueRolling = true;
            if (this.currentPlayer.getMoney() <= 0) {
                Utilities_1.Utilities.printLine("Sorry, you are out of money.");
            }
            else {
                Utilities_1.Utilities.printLine("Play again? Y or N");
                var _this = this;
                Utilities_1.Utilities.buttonEle.addEventListener("click", function playAgain() {
                    var input = Utilities_1.Utilities.userInputEle.value.toUpperCase();
                    Utilities_1.Utilities.userInputEle.value = "";
                    if (input != "Y" && input != "N") {
                        Utilities_1.Utilities.printLine("Try again");
                    }
                    else {
                        if (input === "Y") {
                            Utilities_1.Utilities.clearDisplay();
                            var amountAvailableToBet = _this.currentPlayer.getMoney();
                            Utilities_1.Utilities.printLine("You have $" + amountAvailableToBet);
                            Utilities_1.Utilities.printLine("How much would you like to bet?");
                            _this.i = 2;
                            this.removeEventListener("click", playAgain);
                            _this.start();
                        }
                        else {
                            this.removeEventListener("click", playAgain);
                        }
                    }
                });
            }
        };
        CrapsConsole.prototype.getNameOfGame = function () {
            return "Craps";
        };
        return CrapsConsole;
    }(Console_1.Console));
    exports.CrapsConsole = CrapsConsole;
});
//# sourceMappingURL=CrapsConsole.js.map