class Die{
  die1: number;
  die2: number;

  constructor(){

  }

  rollDie() : number {
    this.die1 = Math.floor(Math.random()*6 + 1);
    this.die2 = Math.floor(Math.random()*6 + 1);
    return this.diceTotal();
  }

  diceTotal() :number{
    // console.log("I am now in the diceTotal() function");
    // console.log("die1 = " + this.die1);
    // console.log("die2 = " + this.die2);
    //   console.log("I am now leaving the diceTotal() function");
    return this.die1 + this.die2;

  }

}
