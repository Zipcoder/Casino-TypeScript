/// <reference path="Card.ts"/>

class Player {
    private _name: string;
    private _balance: number;
    private _age: number;
    private _hand: Card[];
    private _score: number;

    public constructor(name?: string, balance?: number, age?: number, hand?: Card[]) {
        this._name = name;
        this._balance = balance;
        this._age = age;
        this._hand = hand;
    }
    //need to add score to constructor?

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get balance(): number {
        return this._balance;
    }

    set balance(value: number) {
        this._balance = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    public getHand(): Card[] {
      return this._hand;
    }

    public addToHand(card: Card): void {
      this._hand.push(card);
    }

    public clearHands(player: Player, dealer: Player): void {
      player.clearHand();
      dealer.clearHand();
    }

    private clearHand(): void {
      this._hand.splice(0, this._hand.length);
    }

    public getScore(): number {
      return this._score;
    }

    public setScore(newScore: number): void {
      this._score = newScore;
    }

    public calculateTotalScore(): number {
      let total = 0;
      for(var i=0; i<this._hand.length; i++) {
        total = total + this._hand[i].getValue();
        this.setScore(total);
      }
       if(this.isAceInHand() && total <= 11) {
         total += 10;
       }
       return total;
    }

    private isAceInHand(): boolean {
    for(var i=0; i<this._hand.length; i++) {
      if(this._hand[i].getValue() ==1) {
        return true;
      }
      else {
        return false;
      }
    }
  }
}
