enum Suit {
    CLUB = 1,
    DIAMOND = 2,
    HEART = 3,
    SPADE =4
}

enum CardRank{
    ACE = 1 || 11,
    TWO = 2,
    THREE = 3,
    FOUR = 4,
    FIVE = 5,
    SIX = 6,
    SEVEN = 7,
    EIGHT = 8,
    NINE = 9,
    TEN = 10,
    JACK = 10,
    QUEEN = 10,
    KING = 10 
}

class Card{

    constructor(public suit: Suit, public value: CardRank){

    }

    getSuit():string {
        return Suit[this.suit];
    }

    getValue():string {
        return CardRank[this.value];
    }

    showCard():string {
        return this.getValue + " of " + this.getSuit();
    }
} 

