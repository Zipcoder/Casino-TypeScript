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
}
// public class Player<T extends Game> {
//
//     private String name;
//     private Double money;
//
//     public Player(String name) {
//         this.name = name;
//     }
//
//     public void bet(Double money) {
//         this.money -= money;
//     }
//
//     public void receiveWinnings(Double money) {
//         this.money += money;
//     }
//
//     public void cashOut() {
//         money = 0.0;
//     }
//
//     public String getName() {
//         return name;
//     }
//
//     public Double getMoney() {
//         return money;
//     }
//
//     public void setMoney(Double money) {
//         this.money = money;
//     }
// }
