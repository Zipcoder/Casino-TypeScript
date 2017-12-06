/// <reference path="MoneyContainer.ts"/>

class User {

    name:string;
    wallet:MoneyContainer = new MoneyContainer();

    constructor(name:string, money:number){
        this.name=name;
        this.wallet.addMoney(money);
    }

    get Name():string {
        return this.name;
    }

    get Wallet():MoneyContainer {
        return this.wallet;
    }
}