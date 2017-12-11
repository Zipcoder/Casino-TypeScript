
class Card{
  private suit: string;
  private numValue:number;
  private faceValue: string;

  constructor(suit:string,numValue:number,faceValue: string){
    this.suit = suit;
    this.numValue = numValue;
    this.faceValue = faceValue;
  }
  getSuit(): string{
    return this.suit;
  }
  getNumValue(): number{
    return this.numValue;
  }
  getFaceValue(): string{
    return this.faceValue;
  }

  toString():string{
    return this.faceValue +" of "+this.suit;
    //return "Suit: "+this.suit+" Value: "+this.value;
  }
}
