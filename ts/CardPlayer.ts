/// <reference path="Player.ts"/>
/// <reference path="Deck.ts"/>

class CardPlayer extends Player {

_hand: Card[];

constructor() {
  super("cardplayer", undefined, undefined);
  this._hand = new Array<Card>(); 
}

public getHand(): Card[] {
  return this._hand;
}

public setHand(newHand: Card[]): void {
  this._hand = newHand;
}

public addToHand(card: Card): void {
  this._hand.push(card);
}

public clearHand(): void {
  this._hand = [];
}

//getFullHand()

}
