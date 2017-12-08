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
define(["require", "exports", "./Game", "./Dice"], function (require, exports, Game_1, Dice_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Craps = (function (_super) {
        __extends(Craps, _super);
        function Craps() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.MIN_NUMBER_OF_PLAYERS = 1;
            _this.MAX_NUMBER_OF_PLAYERS = 8;
            _this.players = [];
            _this.dice = new Dice_1.Dice(2);
            _this.bets = {};
            _this.playersOnPass = [];
            _this.playersOnDontPass = [];
            _this.passBetsWin = true;
            return _this;
        }
        Craps.prototype.addPlayers = function (players) {
            this.players = players;
        };
        Craps.prototype.getNumPlayers = function () {
            return this.players.length;
        };
        Craps.prototype.getPlayers = function () {
            return this.players;
        };
        Craps.prototype.getPlayersOnPass = function () {
            return this.playersOnPass;
        };
        Craps.prototype.getPlayersOnDontPass = function () {
            return this.playersOnDontPass;
        };
        Craps.prototype.getSumOfDice = function () {
            return this.getValueOfDieOne() + this.getValueOfDieTwo();
        };
        Craps.prototype.getValueOfDieOne = function () {
            return this.dice.getDice()[0].getValue();
        };
        Craps.prototype.getValueOfDieTwo = function () {
            return this.dice.getDice()[1].getValue();
        };
        Craps.prototype.getDice = function () {
            return this.dice;
        };
        Craps.prototype.rollDice = function () {
            this.dice.rollDice();
        };
        Craps.prototype.getPoint = function () {
            return this.point;
        };
        Craps.prototype.setPoint = function (point) {
            this.point = point;
        };
        Craps.prototype.isPassBetsWin = function () {
            return this.passBetsWin;
        };
        Craps.prototype.setPassBetsWin = function (passBetsWin) {
            this.passBetsWin = passBetsWin;
        };
        Craps.prototype.takeBet = function (player, amount) {
            if (this.bets[player.id] == undefined) {
                this.bets[player.id] = amount;
                console.log(this.bets[player.id]);
            }
            else {
                this.bets[player.id] += amount;
            }
            player.bet(amount);
        };
        Craps.prototype.payOutBets = function () {
            if (this.passBetsWin) {
                for (var i = 0; i < this.playersOnPass.length; i++) {
                    var playerId = this.playersOnPass[i].id;
                    var amountWon = this.bets[playerId] * 2;
                    this.playersOnPass[i].receiveWinnings(amountWon);
                }
            }
            else {
                for (var i = 0; i < this.playersOnDontPass.length; i++) {
                    var playerId = this.playersOnDontPass[i].id;
                    var amountWon = this.bets[playerId] * 2;
                    this.playersOnDontPass[i].receiveWinnings(amountWon);
                }
            }
            this.clearAllBets();
        };
        Craps.prototype.clearAllBets = function () {
            this.bets = {};
            this.playersOnPass = [];
            this.playersOnDontPass = [];
        };
        Craps.prototype.putPlayerOnPass = function (player) {
            this.playersOnPass.push(player);
        };
        Craps.prototype.putPlayerOnDontPass = function (player) {
            this.playersOnDontPass.push(player);
        };
        Craps.prototype.printPlayersMoney = function () {
            var moneyString = [];
            var i = 1;
            for (var player in this.players) {
                moneyString.push("Player " + i + ", " + this.players[player].getName() + ", Total money: $" + this.players[player].getMoney());
                i++;
            }
            return "[ " + moneyString.join(" ] , [ ") + " ]";
        };
        return Craps;
    }(Game_1.Game));
    exports.Craps = Craps;
});
//# sourceMappingURL=Craps.js.map