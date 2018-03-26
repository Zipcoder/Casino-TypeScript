"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Card {
    constructor(theSuit, theRank) {
        this._suit = theSuit;
        this._rank = theRank;
    }
    get suit() {
        return this._suit;
    }
    set suit(newSuit) {
        this._suit = newSuit;
    }
    get rank() {
        return this._rank;
    }
    set rank(newRank) {
        this._rank = newRank;
    }
    toPrint() {
        return this._rank + " of " + this._suit;
    }
}
exports.Card = Card;
