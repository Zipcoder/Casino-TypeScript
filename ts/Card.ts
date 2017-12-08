class Card {

    private  faceValue:FaceValue;
    private  suit:Suit;

    constructor( faceValue:FaceValue,  suit:Suit) {
        this.faceValue = faceValue;
        this.suit = suit;
    }

    public  matches(card:Card):boolean {
        return this.getFaceValue()==card.getFaceValue() && this.suit==card.getSuit();
    }

    public  getFaceValue():FaceValue {
        return this.faceValue;
    }

    public  getSuit():Suit {
        return this.suit;
    }

    public  toString():String {
        return this.faceValue +" "+this.suit;
    }
  }

 enum FaceValue {
        ACE =1,
        TWO ,
        THREE ,
        FOUR,
        FIVE ,
        SIX ,
        SEVEN ,
        EIGHT ,
        NINE ,
        TEN ,
        JACK ,
        QUEEN ,
        KING
    }

enum Suit {
        SPADES ,
        HEARTS ,
        DIAMONDS ,
        CLUBS
}
