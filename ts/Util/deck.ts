/// <reference path="card.ts"/>

class Deck {

  private cards: Card[];
  private suits: string[];
  private faceValues: string[]

  constructor() {
    this.cards = [];
    this.suits = ["HEARTS","DIAMONDS","CLUBS","SPADES"];
    this.faceValues = ["ACE","2","3","4","5","6","7","8","9","10","JACK","QUEEN","KING"]
  }

  createFullDeck(): void{
    for (let suit of this.suits) {
        for (let i = 0; i < this.faceValues.length; i++) {
            let num = i+1;
            if (num > 10){
              num = 10
            }
            this.cards.push(new Card(suit,num,this.faceValues[i]))
        }
    }
    this.shuffle();
  }

  getDeck():Card[]{
    this.createFullDeck();
    return this.cards;
  }

  shuffle():void{
    for (let i = 0; i < this.cards.length; i++) {
        let randonNum: number = Math.floor(Math.random()*this.cards.length);
        [this.cards[i], this.cards[randonNum]] = [this.cards[randonNum],this.cards[i]];
    }
  }
}
