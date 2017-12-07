define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Dice = (function () {
        function Dice(numDice) {
            this.dice = [];
            for (var i = 0; i < numDice; i++) {
                this.dice.push(new Die());
            }
        }
        Dice.prototype.rollDice = function () {
            for (var die in this.dice) {
                this.dice[die].rollDie();
            }
        };
        Dice.prototype.printDice = function () {
            var output = "";
            for (var die in this.dice) {
                output += this.dice[die].printDie();
            }
            return output;
        };
        Dice.prototype.getDice = function () {
            return this.dice;
        };
        return Dice;
    }());
    exports.Dice = Dice;
    var Die = (function () {
        function Die() {
            this.rollDie();
        }
        Die.prototype.rollDie = function () {
            this.value = Math.floor(Math.random() * 6) + 1;
        };
        Die.prototype.getValue = function () {
            return this.value;
        };
        Die.prototype.printDie = function () {
            switch (this.value) {
                case 1:
                    return "\u2680";
                case 2:
                    return "\u2681";
                case 3:
                    return "\u2682";
                case 4:
                    return "\u2683";
                case 5:
                    return "\u2684";
                case 6:
                    return "\u2685";
            }
            return null;
        };
        return Die;
    }());
    exports.Die = Die;
});
//# sourceMappingURL=Dice.js.map