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

  public  toString():String {
      return this.faceValue +" "+this.suit;
  }

  static faceValues: string[] = [
    "ACE",
    "TWO",
    "THREE",
    "FOUR",
    "FIVE",
    "SIX",
    "SEVEN",
    "EIGHT",
    "NINE",
    "TEN",
    "JACK",
    "QUEEN",
    "KING"
  ];

  static suits: string[] = [
    "SPADES",
    "HEARTS",
    "DIAMONDS",
    "CLUBS"
  ];
}
