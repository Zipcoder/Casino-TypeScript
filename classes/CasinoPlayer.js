"use strict";
exports.__esModule = true;
var CasinoPlayer = /** @class */ (function () {
    function CasinoPlayer(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    CasinoPlayer.prototype.getName = function () {
        return this.name;
    };
    CasinoPlayer.prototype.getBalance = function () {
        return this.balance;
    };
    CasinoPlayer.prototype.getHand = function () {
        return this.hand;
    };
    CasinoPlayer.prototype.setBalance = function (amount) {
        this.balance = amount;
    };
    CasinoPlayer.prototype.addBalance = function (amount) {
        this.balance += amount;
    };
    return CasinoPlayer;
}());
exports.CasinoPlayer = CasinoPlayer;
