"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }
    toString() {
        return `${this.rank} of ${this.suit}`;
    }
}
exports.Card = Card;
//# sourceMappingURL=card.js.map