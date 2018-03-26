"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Escrow = /** @class */ (function () {
    function Escrow() {
        this._balance = 0;
    }
    Object.defineProperty(Escrow.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        set: function (newBalance) {
            this._balance = newBalance;
        },
        enumerable: true,
        configurable: true
    });
    return Escrow;
}());
exports.Escrow = Escrow;
