/// <reference path="cardPlayer.ts"/>
class GoFishPlayer extends CardPlayer{
  bookCounter:number;
  constructor(player:Player){
    super();
    this.bookCounter = 0;
  }
  addBook():void{
    this.bookCounter += 1;
  }
  getBookCount():number{
    return this.bookCounter;
  }
  clearBooks():void{
    this.bookCounter = 0;
  }
}
