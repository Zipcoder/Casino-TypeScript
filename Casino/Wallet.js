"use strict";
exports.__esModule = true;
var Wallet = /** @class */ (function () {
    function Wallet(balance) {
        this.balance = balance;
    }
    Wallet.prototype.getBalance = function () {
        return this.balance;
    };
    Wallet.prototype.add = function (amount) {
        this.balance += amount;
    };
    Wallet.prototype.subtract = function (amount) {
        this.balance -= amount;
    };
    return Wallet;
}());
exports["default"] = Wallet;
