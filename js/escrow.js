"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Escrow {
    constructor() {
        this._balance = 0;
    }
    get balance() {
        return this._balance;
    }
    set balance(newBalance) {
        this._balance = newBalance;
    }
}
exports.Escrow = Escrow;
