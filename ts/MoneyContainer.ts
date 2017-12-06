class MoneyContainer {

    money:number = 0;

    getMoney():number {
        return this.money;
    }

    addMoney(money:number):void {
        if (money>0) {
            this.money += money;
        }
    }

    takeOutMoney (money:number):number{
        if (money>0 && money<=this.money){
            this.money-=money;
            return money;
        }
        return 0.0;
    }

    takeAllMoney():number{
        let moneyHolder:number = this.money;
        this.money=0.0;
        return moneyHolder;
    }
}
