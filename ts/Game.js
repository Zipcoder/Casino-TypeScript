define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Game = (function () {
        function Game() {
            this.players = [];
        }
        Game.prototype.getNumPlayers = function () {
            return this.players.length;
        };
        Game.prototype.addPlayers = function (players) {
            this.players = players;
        };
        Game.prototype.printPlayersMoney = function () {
            var moneyString = [];
            var i = 1;
            for (var player in this.players) {
                moneyString.push("Player " + i + ", " + player.getName() + ", Total money: $" + player.getMoney());
                i++;
            }
            return "[ " + moneyString.join(" ] , [ ") + " ]";
        };
        return Game;
    }());
    exports.Game = Game;
});
//# sourceMappingURL=Game.js.map