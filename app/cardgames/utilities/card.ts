export class Card {
    
    private _suit: string;
    private _rank: string;

    constructor(theSuit: string, theRank: string) {
        this._suit = theSuit;
        this._rank = theRank;
    }

    get suit(): string {
        return this._suit;
    }

    set suit(newSuit: string) {
        this._suit = newSuit;
    }

    get rank(): string {
        return this._rank;
    }

    set rank(newRank: string) {
        this._rank = newRank;
    }

    toPrint() {
        return this._rank + " of " + this._suit;
    }

}