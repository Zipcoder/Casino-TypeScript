/// <reference path="Player.ts"/>

class Craps implements Game,Gamble{
  bet:number;
  player:Player;

  displayElement:any;
  userInputElement:any;

  constructor(player:Player){
    this.player = player
    this.displayElement = document.getElementById("display");
		this.userInputElement = document.getElementById("user_input")
  }

init(){
  this.displayElement.innerHTML += "Welcome to Craps! <br />";
  this.start();
}
  takeBet():number{
    do{
      this.displayElement.innerHTML += "Place your bet: <br />";
      this.bet = this.userInputElement.value;
  }while(this.bet > this.player.balance){
  return this.bet;
}
  }
  play():boolean{
    return true;
  }

  start():void{
    while(this.play){
      this.takeBet();

      this.displayElement.innerHTML += "You rolled " + this.roll +" and "+ this.roll;
    }
  }
  roll():number{
    let diceOne:number = (Math.random()*6)+1;
    let diceTwo:number = (Math.random()*6)+1;

    let sum = diceTwo + diceOne;

    return sum;
  }


}
