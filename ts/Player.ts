import {Game} from './Game';
export class Player<T extends Game<T>> {
  name: string;
  money: number;
  id: number;
  static nextId = 1;

  constructor(name: string) {
    this.name = name;
    this.id = Player.nextId;
    Player.nextId++;
  }

  bet(money: number) {
    this.money -= money;
  }

  receiveWinnings(money: number) {
    this.money += money;
  }

  cashOut() {
    this.money = 0.0;
  }

  getName() : string {
    return this.name;
  }

  getMoney() : number {
    return this.money;
  }

  setMoney(money: number) {
    this.money = money;
  }
}
