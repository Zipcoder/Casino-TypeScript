/// <reference path="CardPlayer.ts"/>

class BlackJackPlayer extends CardPlayer {

private _score: number;

constructor(player: Player) {
  super();
  this._score = 0;
}

public getScore(): number {
  return this._score;
}

public setScore(newScore: number): void {
  this._score = newScore;
}

public calculateTotalScore(): void {
  this._score = 0;
  for(var i=0; i<this._hand.length; i++) {
    this._score += this._hand[i].getValue();  //for(let card of this.hand) { }
  }
   if(this.isAceInHand() && this._score <= 11) {
     this._score += 10;
   }
}

private isAceInHand(): boolean {
  for(var i=0; i<this._hand.length; i++) {
    if(this._hand[i].getValue() == 1) {
      return true;
    }
    else {
      return false;
    }
  }
}

}
