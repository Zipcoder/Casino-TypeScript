export class MoneyContainer {

    money = 0;

    getMoney() {
        return this.money;
    }

    addMoney(money) {
        if (money > 0) {
            this.money += money;
        }
    }

    takeOutMoney (money){

        if (money>0 && money<=this.money){
            this.money-=money;
            return money;
        }
        return 0.0;
    }

    takeAllMoney(){
        let moneyHolder: number = this.money;
        this.money=0.0;
        return moneyHolder;
    }
}

