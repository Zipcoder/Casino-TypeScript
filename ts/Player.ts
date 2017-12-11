class Player{
    private account;
    public _name;
    name: String;
    gamblingMoney: number;

    constructor(name:String, gamblingMoney:number){
        this.name = name;
        this.gamblingMoney = gamblingMoney;
    }

    getName(): String{
        return this.name;
    }

    getGamblingMoney(): number{
        return this.gamblingMoney;
    }

    setGamblingMoney(amount: number){
        this.gamblingMoney = amount;
    }

    addGamblingMoney(amount: number){
        this.gamblingMoney += amount;
    }

}