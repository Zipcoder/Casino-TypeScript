/// <reference path="MoneyContainer.ts"/>

class User {

    private name: string;
    private wallet: MoneyContainer = new MoneyContainer();

    public constructor(name: string, money: number) {
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