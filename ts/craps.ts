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

init():void{
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
    var play:boolean = true;
    return play;
  }

  private start():void{
    //while(this.play()){
    console.log("start() function");
      let target:number;
      this.takeBet();

      let rollOne:number = this.roll();
      this.displayElement.innerHTML += "You rolled " + rollOne + "<br />";
      target = rollOne;


      if(rollOne == 7 || rollOne == 11){
        this.playerWin(this.bet);
      } else if(rollOne == 2 || rollOne == 3 || rollOne == 12){
        console.log("rollOne not pass");
        this.playerLose(this.bet);
      } else{
        this.displayElement.innerHTML += "Target is now " + rollOne;
        let rollTwo:number = this.roll();
        if(rollTwo === 7){
          console.log("rollTwo = 7");
          this.displayElement.innerHTML += "Second Roll was 7!";
          this.playerLose(this.bet);
        }
    //  }
    }

  }
private playAgain():boolean{
  this.displayElement.innerHTML += "Play Again? Y/N";
  return false;
}

  private checkRollTwo(rollOne:number,rollTwo:number):number{
    while(rollTwo !== 7){
      if(rollTwo == rollOne){
        this.playerWin(this.bet);
        break;
      } else{
        this.displayElement.innerHTML += "<br />Target is " + rollOne;
      }
      rollTwo = this.roll();
    }
    return rollTwo;
  }
  private roll():number{
    let diceOne:number = Math.floor(Math.random()*6)+ 1;
    let diceTwo:number = Math.floor(Math.random()*6)+ 1;

    let sum = diceTwo + diceOne;
    console.log("rolling " + sum);
    return sum;
  }

  private playerWin(bet:number):void{
    this.displayElement.innerHTML += "You Win!";
    this.player.balance += bet;
  }
  private playerLose(bet:number):void{
    this.displayElement.innerHTML += "You Lose";
    this.player.balance -= bet;
  }


}
