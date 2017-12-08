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
define(["require", "exports", "./Utilities", "./Console", "./Craps"], function (require, exports, Utilities_1, Console_1, Craps_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CrapsConsole = (function (_super) {
        __extends(CrapsConsole, _super);
        function CrapsConsole() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.game = new Craps_1.Craps();
            _this.currentPlayerIndex = 0;
            return _this;
        }
        CrapsConsole.prototype.start = function () {
            this.setUpGame();
            //this.playRoundsUntilAllPlayersCashOut(this.game);
        };
        CrapsConsole.prototype.setUpGame = function () {
            Utilities_1.Utilities.printMenuName("Welcome to " + this.getNameOfGame());
            // var numPlayers:number = this.getNumPlayers(this.game.MIN_NUMBER_OF_PLAYERS, this.game.MAX_NUMBER_OF_PLAYERS);
            // let playerNames:string[] = this.getPlayerNames(numPlayers);
            // let players:Array<CrapsPlayer>  = [];
            // for(let name in playerNames) {
            //     let player:CrapsPlayer  = new CrapsPlayer(playerNames[name]);
            //     players.push(player);
            // }
            // this.game.addPlayers(players);
            // this.getPlayerChips(this.game);
        };
        CrapsConsole.prototype.playRound = function () {
            this.currentPlayer = this.game.getPlayers()[this.currentPlayerIndex];
            if (this.currentPlayer.getMoney() > 0) {
                this.askContinueOrCashOut();
                if (this.currentPlayer.getMoney() > 0) {
                    var playerNumber = this.currentPlayerIndex + 1;
                    Utilities_1.Utilities.printLine("Player " + playerNumber + " turn:");
                    this.playerTakeTurn(this.currentPlayer);
                }
            }
            this.currentPlayerIndex++;
            this.currentPlayerIndex %= this.game.getNumPlayers();
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
        CrapsConsole.prototype.makeBet = function (player) {
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