export class Card {

  private  faceValue: string;
  private  suit: string;

  constructor( faceValue: string,  suit: string) {
      this.faceValue = faceValue;
      this.suit = suit;
  }

  public  matches(card:Card):boolean {
      return this.getFaceValue()==card.getFaceValue() && this.suit==card.getSuit();
  }

  public  getFaceValue(): string {
      return this.faceValue;
  }

  public  getSuit(): string {
      return this.suit;
  }

  public getIcon(): string {
    return Card.faceValues[this.faceValue] + Card.suits[this.suit];
  }

  public  toString():String {
      return this.faceValue +" "+this.suit;
  }

  static faceValues= {
    "ACE": "A",
    "TWO": "2",
    "THREE": "3",
    "FOUR": "4",
    "FIVE": "5",
    "SIX": "6",
    "SEVEN": "7",
    "EIGHT": "8",
    "NINE": "9",
    "TEN": "10",
    "JACK": "J",
    "QUEEN": "Q",
    "KING": "K"
  };

  static suits= {
    "SPADES": "\u2660",
    "HEARTS": "\u2665",
    "DIAMONDS": "\u2666",
    "CLUBS": "\u2663"
  };
}
