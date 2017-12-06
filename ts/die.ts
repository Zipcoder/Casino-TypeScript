class Die{
  die1: number;
  die2: number;

  constructor(){

  }

  rollDie(){
    this.die1 = Math.random()*6 + 1;
    this.die2 = Math.random()*6 + 1;
  }

  diceTotal() :number{
    return this.die1 + this.die2;    
  }

}
