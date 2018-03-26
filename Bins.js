"use strict";
var Bins = /** @class */ (function () {
    function Bins(startingBound, endingBound, rollSums) {
        if (rollSums === void 0) { rollSums = []; }
        this.endingBound = this.startingBound * 6;
        this.rollSums = [];
        this.startingBound = startingBound;
        this.endingBound = endingBound;
        this.rollSums = rollSums;
    }
    ;
    return Bins;
}());
