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
            _this.dice = new Dice_1.Dice(2);
            _this.bets = {};
            _this.playersOnPass = [];
            _this.playersOnDontPass = [];
            _this.passBetsWin = true;
            return _this;
        }
        Craps.prototype.getPlayers = function () {
            return this.players;
        };
        Craps.prototype.getSumOfDice = function () {
            return getValueOfDieOne() + getValueOfDieTwo();
        };
        return Craps;
    }(Game_1.Game));
    exports.Craps = Craps;
});
// public class Craps extends Game implements Gamble{
// 
//     @Override
//     public ArrayList<CrapsPlayer> getPlayers() {
//         return (ArrayList<CrapsPlayer>) players;
//     }
// 
//     public Integer getSumOfDice() {
//         return getValueOfDieOne() + getValueOfDieTwo();
//     }
// 
//     public Integer getValueOfDieOne() {
//         return dice.getDice().get(0).getValue();
//     }
// 
//     public Integer getValueOfDieTwo() {
//         return dice.getDice().get(1).getValue();
//     }
// 
//     public Dice getDice() {
//         return dice;
//     }
// 
//     public void rollDice() {
//         dice.rollDice();
//     }
// 
//     public Integer getPoint() {
//         return point;
//     }
// 
//     public void setPoint(Integer point) {
//         this.point = point;
//     }
// 
//     public boolean isPassBetsWin() {
//         return passBetsWin;
//     }
// 
//     public void setPassBetsWin(boolean passBetsWin) {
//         this.passBetsWin = passBetsWin;
//     }
// 
//     @Override
//     public void takeBet(Player player, Double amount) {
//         bets.put(player, amount);
//         player.bet(amount);
//     }
// 
//     @Override
//     public void payOutBets() {
//         if(passBetsWin) {
//             for(CrapsPlayer player : playersOnPass) {
//                 Double amountWon = bets.get(player) * 2;
//                 player.receiveWinnings(amountWon);
//             }
//         }
//         else {
//             for(CrapsPlayer player : playersOnDontPass) {
//                 Double amountWon = bets.get(player) * 2;
//                 player.receiveWinnings(amountWon);
//             }
//         }
//         clearAllBets();
//     }
// 
//     @Override
//     public void clearAllBets() {
//         bets.clear();
//         playersOnPass.clear();
//         playersOnDontPass.clear();
//     }
// 
//     public void putPlayerOnPass(CrapsPlayer player) {
//         playersOnPass.add(player);
//     }
// 
//     public void putPlayerOnDontPass(CrapsPlayer player) {
//         playersOnDontPass.add(player);
//     }
// }
//# sourceMappingURL=Craps.js.map