class Card {

private rank: CardValue;
private suit: CardSuit;

constructor(rank: CardValue, suit: CardSuit) {
        this.rank = rank;
        this.suit = suit;

}

toString(): string {

    return CardValue[this.rank] + " of " + CardSuit[this.suit];
}



}