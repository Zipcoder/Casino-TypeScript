class Player {
    private name: string;
    private money: number;

    constructor(name: string, money: number) {
        this.name = name;
        this.money = money;
    }

    getName(): string {
        return this.name;
    }

    setMoney(money: number) {
        this.money = money;
    }

    getMoney(): number {
        return this.money;
    }

    addToHand(card: Card) {

    }


}