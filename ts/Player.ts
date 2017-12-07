class Player{
    name: String;
    balance: number;
    hand: Card[];

    constructor(name:String, balance:number){
        this.name = name;
        this.balance = balance;
    }

    getName(): String{
        return this.name;
    }

    getBalance(): number{
        return this.balance;
    }

    getHand(): Card[]{
        return this.hand;
    }

    setBalance(amount: number){
        this.balance = amount;
    }

    addToBalance(amount: number){
        this.balance += amount;
    }

}
