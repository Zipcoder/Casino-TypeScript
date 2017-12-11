/// <reference path="MoneyContainer.ts"/>

class User {

    name: string;
    wallet: MoneyContainer = new MoneyContainer();

    constructor(name: string, money: number) {
        this.name = name;
        this.wallet.addMoney(money);
    }

    public get Name(): string {
        return this.name;
    }

    public get Wallet(): MoneyContainer {
        return this.wallet;
    }
}