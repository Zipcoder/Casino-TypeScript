define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Player = (function () {
        function Player(name) {
            this.name = name;
            this.id = Player.nextId;
            Player.nextId++;
        }
        Player.prototype.bet = function (money) {
            this.money -= money;
        };
        Player.prototype.receiveWinnings = function (money) {
            this.money += money;
        };
        Player.prototype.cashOut = function () {
            this.money = 0.0;
        };
        Player.prototype.getName = function () {
            return this.name;
        };
        Player.prototype.getMoney = function () {
            return this.money;
        };
        Player.prototype.setMoney = function (money) {
            this.money = money;
        };
        Player.nextId = 1;
        return Player;
    }());
    exports.Player = Player;
});
//# sourceMappingURL=Player.js.map