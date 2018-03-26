"use strict";
var Dice = /** @class */ (function () {
    function Dice(numOfDice) {
        this.numOfDice = numOfDice;
    }
    Dice.prototype.tossAndSum = function () {
        var sumOfToss = 0;
        for (var toss = 0; toss < this.numOfDice; toss++) {
            sumOfToss += Math.floor(Math.random() * 6);
        }
        return sumOfToss;
    };
    return Dice;
}());
