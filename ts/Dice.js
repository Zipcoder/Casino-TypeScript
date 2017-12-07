define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Dice = (function () {
        function Dice(numDice) {
        }
        return Dice;
    }());
    exports.Dice = Dice;
});
// public class Dice {
// 
//     private ArrayList<Die> dice = new ArrayList<>();
// 
//     public Dice(int numDice) {
//         for(int i = 0; i < numDice; i++) {
//             dice.add(new Die());
//         }
//     }
// 
//     public void rollDice() {
//         for(Die die : dice) {
//             die.rollDie();
//         }
//     }
// 
//     public String printDice() {
//         StringBuilder stringBuilder = new StringBuilder();
//         for(Die die : dice) {
//             stringBuilder.append(die.printDie());
//         }
//         return stringBuilder.toString();
//     }
// 
//     public ArrayList<Die> getDice() {
//         return dice;
//     }
// 
//     public class Die {
//         Integer value;
// 
//         public Die() {
//             rollDie();
//         }
// 
//         public void rollDie() {
//             Random rand = new Random();
//             value = rand.nextInt(6) + 1;
//         }
// 
//         public Integer getValue() {
//             return value;
//         }
// 
//         public String printDie() {
//             switch (value) {
//                 case 1:
//                     return "\u2680";
//                 case 2:
//                     return "\u2681";
//                 case 3:
//                     return "\u2682";
//                 case 4:
//                     return "\u2683";
//                 case 5:
//                     return "\u2684";
//                 case 6:
//                     return "\u2685";
//             }
//             return null;
//         }
//     }
// }
//# sourceMappingURL=Dice.js.map