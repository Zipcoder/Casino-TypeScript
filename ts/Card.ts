class Card{
   
    private value;
    private suit;

    constructor(value: string, suit: string){
        this.value = value;
        this.suit = suit;
    }  

    getValue(): string{
        return this.value;
    }

    getSuit(): string{
        return this.suit;
    }
}

enum Value{
    Ace = 1,
    Two = 2,
    Three = 3,
    Four = 4,
    Five = 5,
    Six = 6,
    Seven = 7,
    Eight = 8,
    Nine = 9,
    Ten = 10,
    Jack = 10,
    Queen = 10,
    King = 10,
}

enum Suit{
    Spade = 1,
    Heart = 2,
    Diamond = 3,
    Club = 4,
}
