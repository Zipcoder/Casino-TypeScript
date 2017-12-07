export class MoneyContainer {

    private money = 0;

    public getMoney() {
        return this.money;
    }

    public addMoney(money) {
        if (money > 0) {
            this.money += money;
        }
    }

    public takeOutMoney (money){

        if (money>0 && money<=this.money){
            this.money-=money;
            return money;
        }
        return 0.0;
    }

    public takeAllMoney(){
        let moneyHolder: number = this.money;
        this.money=0.0;
        return moneyHolder;
    }
}

