export class Escrow {
    private _balance: number;

    constructor() {
        this._balance = 0;
    }

    get balance() {
        return this._balance;
    }

    set balance(newBalance: number) {
        this._balance = newBalance;
    }
}