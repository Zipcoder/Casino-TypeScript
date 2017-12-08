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
            }
            // this.setUpGame();
            //this.playRoundsUntilAllPlayersCashOut(this.game);
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
        CrapsConsole.prototype.askContinueOrCashOut = function () {
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
        CrapsConsole.prototype.playerTakeTurn = function (player) {
        };
        CrapsConsole.prototype.getNameOfGame = function () {
            return "Craps";
        };
        return CrapsConsole;
    }(Console_1.Console));
    exports.CrapsConsole = CrapsConsole;
});
// public void playerTakeTurn(CrapsPlayer player) {
//     makeBet(player);
//     for(CrapsPlayer otherPlayer : game.getPlayers()) {
//         if(!otherPlayer.equals(currentPlayer) && otherPlayer.getMoney() > 0) {
//             boolean toBet = getYesOrNoInput(String.format("%s, would you like to make a bet? Y or N", otherPlayer.getName()));
//             if(toBet) {
//                 makeBet(otherPlayer);
//             }
//         }
//     }
//
//     boolean comeOutRollEndsRound = comeOutRoll();
//     if(!comeOutRollEndsRound) {
//         rollForPoint();
//     }
//     payOutBets();
// }
//
// public void makeBet(CrapsPlayer player) {
//     Double amountAvailableToBet = player.getMoney();
//     Double amount = 0.0;
//     boolean isValidInput = false;
//     while(!isValidInput) {
//         amount = getMoneyInput(String.format("%s, how much would you like to bet?", player.getName()));
//         if(amount <= amountAvailableToBet) {
//             isValidInput = true;
//         } else {
//             System.out.println("Sorry you do not have that much money to bet.");
//         }
//     }
//     game.takeBet(player, amount);
//
//     ArrayList<String> betOptions = new ArrayList<>();
//     betOptions.add("Pass");
//     betOptions.add("Don't pass");
//     System.out.print("Would you like to place your bet on ");
//     printMenuOptions(betOptions);
//     String betChoice = getMenuInput(">> ", betOptions).toUpperCase();
//     switch (betChoice) {
//         case "PASS":
//             game.putPlayerOnPass(player);
//             break;
//         case "DON'T PASS":
//             game.putPlayerOnDontPass(player);
//             break;
//     }
// }
//
// public boolean comeOutRoll() {
//     game.rollDice();
//     int rollSum = game.getSumOfDice();
//     System.out.printf("You rolled a %d %s\n", rollSum, game.getDice().printDice());
//     switch (rollSum) {
//         case 2:
//         case 3:
//         case 12:
//             game.setPassBetsWin(false);
//             return true;
//         case 7:
//         case 11:
//             game.setPassBetsWin(true);
//             return true;
//         case 4:
//         case 5:
//         case 6:
//         case 8:
//         case 9:
//         case 10:
//             game.setPoint(rollSum);
//             return false;
//     }
//     return false;
// }
//
// public void rollForPoint() {
//     boolean continueRolling = true;
//     int rollSum = 0;
//     while(continueRolling) {
//         System.out.printf("Rolling for point: %d\n", game.getPoint());
//         getUserInput("Press enter to roll again.");
//         game.rollDice();
//         rollSum = game.getSumOfDice();
//         System.out.printf("You rolled a %d %s\n", rollSum, game.getDice().printDice());
//         if(rollSum == game.getPoint() || rollSum == 7) {
//             continueRolling = false;
//         }
//     }
//
//     if(rollSum == game.getPoint()) {
//         game.setPassBetsWin(true);
//     } else {
//         game.setPassBetsWin(false);
//     }
// }
//
// public void payOutBets() {
//     if(game.isPassBetsWin()) {
//         System.out.println("Congratulations, the bets on PASS win!");
//     }
//     else {
//         System.out.println("Congratulations, the bets on DON'T PASS win!");
//     }
//     game.payOutBets();
// }
//
// @Override
// public String getNameOfGame() {
//     return nameOfGame;
// }
//# sourceMappingURL=CrapsConsole.js.map