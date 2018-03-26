enum PictureCard {
    Ace,
    Jack,
    Queen,
    King
}

enum Suit {
    Hearts,
    Diamonds,
    Spades,
    Clubs
}

class Cards {
    rank: number;
    suit: Suit;
    isPictureCard = function(): boolean {
        return this.rank > 10 || this.rank === 1;
    }
    
    constructor(rank: number, suit: Suit) {
        if(rank > 0 && rank < 14) {
            this.rank = rank;
        } else {
            throw new RangeError("Card is outside of normal deck range.");
        }
        this.suit = suit;
    }

    getRank(): number {
        return this.rank;
    }

    getSuit(): Suit {
        return this.suit;
    }

    toJSObject(): any {
    return {suite: Suit[this.suit], rank: this.isPictureCard()  ?  PictureCard[this.rank] : this.rank.toString()};
    }
}
export {Cards, PictureCard, Suit};