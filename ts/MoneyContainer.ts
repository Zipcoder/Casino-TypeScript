class MoneyContainer {

    private money: number = 0;

    public getMoney(): number {
        return parseInt(this.money.toFixed(2));
    }

    public addMoney(money: number): void {
        if (money > 0) {
            this.money += money;
        }
    }

    public takeOutMoney(money): number{

        if (money>0 && money<=this.money){
            this.money-=money;
            return money;
        }
        return 0.0;
    }

    public takeAllMoney(): number{
        let moneyHolder: number = this.money;
        this.money=0.0;
        return moneyHolder;
    }
}

