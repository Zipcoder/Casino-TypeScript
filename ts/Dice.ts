export class Dice {

  private dice: Die[] = [];

  constructor(numDice: number) {
    for(let i = 0; i < numDice; i++) {
      this.dice.push(new Die());
    }
  }

  rollDice() {
    for(let die in this.dice) {
      this.dice[die].rollDie();
    }
  }

  printDice() : string {
    var output = "";
    for(let die in this.dice) {
      output += this.dice[die].printDie();
    }
    return output;
  }

  getDice() : Die[] {
    return this.dice;
  }
}

export class Die {

  value: number;

  constructor() {
    this.rollDie();
  }

  rollDie() {
    this.value = Math.floor(Math.random() * 6) + 1;
  }

  getValue() : number {
    return this.value;
  }

  printDie() : string {
    switch (this.value) {
        case 1:
            return "\u2680";
        case 2:
            return "\u2681";
        case 3:
            return "\u2682";
        case 4:
            return "\u2683";
        case 5:
            return "\u2684";
        case 6:
            return "\u2685";
    }
    return null;
  }
}
