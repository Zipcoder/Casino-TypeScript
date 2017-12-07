define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Player = (function () {
        function Player(name) {
            this.name = name;
            this.id = Player.nextId;
            Player.nextId++;
        }
        Player.nextId = 1;
        return Player;
    }());
    exports.Player = Player;
});
// public class Player<T extends Game> {
//
//     private String name;
//     private Double money;
//
//     public Player(String name) {
//         this.name = name;
//     }
//
//     public void bet(Double money) {
//         this.money -= money;
//     }
//
//     public void receiveWinnings(Double money) {
//         this.money += money;
//     }
//
//     public void cashOut() {
//         money = 0.0;
//     }
//
//     public String getName() {
//         return name;
//     }
//
//     public Double getMoney() {
//         return money;
//     }
//
//     public void setMoney(Double money) {
//         this.money = money;
//     }
// }
//# sourceMappingURL=Player.js.map