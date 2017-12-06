class Player{
  name: string;
  money: number;

  constructor(){
    this.name = "Player";
    this.money = 500;

  }

  getName():string{
    return this.name;
  }

  setName(nameInput: string){
    this.name = nameInput;
  }

  getMoney():number{
    return this.money;
  }

  setMoney(moneyInput: number){
    this.money = moneyInput;
  }


}
