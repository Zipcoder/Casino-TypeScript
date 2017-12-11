/// <reference path="player.ts"/>
class CardPlayer extends Player{
  hand:Card[];

  cardHeight:number = 117;
  cardWidth:number = 81;
  finalStringImg:string = ".png width="+this.cardWidth+"height="+this.cardHeight+">";
  constructor(){
    super("CardPlayer",0,0);
    this.hand = [];
  }
  getHand():Card[]{
    return this.hand;
  }
  addCard(card:Card):void{
    this.hand.push(card);
  }
  clearHand(){
    this.hand = [];
  }

  setHand(hand:Card[]):void{
    this.hand = hand;
  }

  sort():void{
    this.hand.sort();
  }

  displayHand(sort:boolean):void{
    if(sort){
      this.sort()
    }
    let displayHand = document.getElementById("playerHand");
    displayHand.innerHTML = "";
    for (let i = 0; i < this.hand.length; i++) {
        let currentCard: Card = this.hand[i]
        displayHand.innerHTML += this.cardImg(currentCard);
    }
  }

  getDisplayHand():string{
    let displayString:string = "";
    for (let i = 0; i < this.hand.length; i++) {
        let currentCard: Card = this.hand[i]
        displayString += this.cardImg(currentCard);
    }
    return displayString;
  }


  getFirstCardImg():string{
    let jokerCard:string = "<img src = ././images/cards/red_joker"+this.finalStringImg;
    return this.cardImg(this.hand[0])+ jokerCard;
  }

  logHand():void{
    for (let i = 0; i < this.hand.length; i++) {
        console.log(this.hand[i].getFaceValue()+" "+this.hand[i].getSuit());
    }
  }
  cardImg(card:Card):string{
    return "<img src = ././images/cards/"+card.getFaceValue()+"_of_"+card.getSuit()+this.finalStringImg;
  }

}
