import {Card} from "./CardUtils/Card";

export class CasinoPlayer{

    name: string;
    hand: Card[];
    balance: number;


    constructor(name: string, balance: number) {

        this.name = name;
        this.balance = balance;
    }

    getName(): string {
        return this.name;
    }

    getBalance(): number {
        return this.balance;
    }

    getHand(): Card[] {
        return this.hand;
    }

    setBalance(amount: number) {
        this.balance = amount;
    }

    addBalance(amount: number) {
        this.balance += amount;
    }

}

