import CardRank from "./CardRank";
import CardSuit from "./CardSuit";

class Card {
    suit: CardSuit;
    rank: CardRank;

    constructor(suit: CardSuit, rank: CardRank) {
        this.suit = suit;
        this.rank = rank;
    }

    toString(): string {
        return CardRank[this.rank] + " of " + CardSuit[this.suit];
    }
    
}
