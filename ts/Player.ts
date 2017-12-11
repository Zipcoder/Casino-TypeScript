class Player {
    private name: string;
    private money: number;
    private hand: Card[];
    private score: number;

    constructor(name: string, money: number) {
        this.hand = [];
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
        this.hand.push(card);
    }

    clearHand():void {
        this.hand = [];
    }

    getHand(): Card[] {
        return this.hand;
    }

    getScore(): number {
        return this.score;
    }

    public calculateScore(): number {
        let sum: number = 0;
        for(let card of this.hand) {
            sum += card.getValue();
        }

        if(this.isAceInHand() && sum <= 11) {
            sum += 10;
        }
        this.score = sum;
        return sum;
    }

    public isAceInHand(): boolean {
        for(let card of this.hand) {
            if(card.getValue() == 1) {
                return true;
            }
        }
        return false;
    }
}