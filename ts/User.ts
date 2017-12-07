/// <reference path="MoneyContainer.ts"/>

// import {MoneyContainer} from "./MoneyContainer";

class User {

    private name: string;
    private wallet: MoneyContainer = new MoneyContainer();

    public constructor(name: string, money: number) {
        this.name = name;
        this.wallet.addMoney(money);
    }

    public getName(): string {
        return this.name;
    }

    public getWallet(): MoneyContainer {
        return this.wallet;
    }
}