define(["require", "exports", "./Utilities"], function (require, exports, Utilities_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Console = (function () {
        function Console() {
        }
        // abstract setUpGame(): void;
        // abstract playRound(): void;
        Console.prototype.getNumPlayers = function (min, max) {
            if (min == max) {
                return min;
            }
            var validInput = false;
            var numPlayers = 0;
            while (!validInput) {
                numPlayers = Utilities_1.Utilities.getIntegerInput("How many players? May have " + min + " to " + max + " players.");
                if (numPlayers >= min && numPlayers <= max) {
                    validInput = true;
                }
            }
            return numPlayers;
        };
        Console.prototype.getPlayerNames = function (numPlayers) {
            var names = [];
            for (var i = 0; i < numPlayers; i++) {
                var playerNumber = i + 1;
                var thePrompt = "Enter name of Player " + playerNumber;
                var name_1 = Utilities_1.Utilities.getUserInput(thePrompt);
                names.push(name_1);
            }
            return names;
        };
        Console.prototype.getPlayerChips = function (game) {
            var players = game.getPlayers();
            var i = 1;
            for (var player in players) {
                var amount = Utilities_1.Utilities.getMoneyInput("Player " + i + ", " + players[player].getName() + ", how much money do you have in chips?");
                players[player].setMoney(amount);
                i++;
            }
        };
        Console.prototype.playRoundsUntilAllPlayersCashOut = function (game) {
            while (this.atLeastOnePlayerHasMoney(game)) {
                this.playRound();
            }
        };
        Console.prototype.atLeastOnePlayerHasMoney = function (game) {
            var players = game.getPlayers();
            for (var player in players) {
                if (players[player].getMoney() > 0) {
                    return true;
                }
            }
            return false;
        };
        return Console;
    }());
    exports.Console = Console;
});
//# sourceMappingURL=Console.js.map