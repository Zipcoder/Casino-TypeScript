class User {

    name: string;
    wallet = new MoneyContainer();

    // constructor (name){
    //     this.name = name;
    // }

    public constructor(name, money){
        this.name = name;
        this.wallet.addMoney(money);
    }

    getName() {
        return this.name;
    }

    getWallet() {
        return this.wallet;
    }
}