/// <reference path="Player.ts"/>

class Craps implements Game,Gamble{
  bet:number;
  player:Player;

  constructor(player:Player){
    this.player = player;
  }

  takeBet():number{
    do{
    //this.bet = take number input
    //"place your bet"
  }while(this.bet > this.player.balance){
  return this.bet;
}
  }
  play():boolean{
    return true;
  }

  start():void{
    while(this.play){

      //takeBet();
    }
  }


}
