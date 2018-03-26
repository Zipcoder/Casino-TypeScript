export class Card {

    private suit: string;
    private rank: number;
    private face: string;
    private location: string;


    constructor(suit: string, rank: number, faceValue: string, location: string) {
        this.suit = suit;
        this.rank = rank;
        this.face = faceValue;
        this.location = location;
    }

    //generating the get methods made a GET keyword and then the name of the
    //variable...I had to manually combine them.

    getSuit(): string {
        return this.suit;
    }

    getRank(): number {
        return this.rank;
    }

    getFace(): string {
        return this.face;
    }

    toString(): string {
        return this.face + " of " + this.suit;
    }
}



