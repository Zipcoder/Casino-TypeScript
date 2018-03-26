"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const card_1 = require("./card");
const cardEnums_1 = require("../cardEnums");
class Deck {
    constructor() {
        this.cards = this.buildDeck();
    }
    draw() {
        let randomIndex = Math.floor(Math.random() * 52);
        let draw = this.cards[randomIndex];
        this.cards[randomIndex] = this.cards[this.cards.length - 1];
        this.cards[this.cards.length - 1] = draw;
        return this.cards.pop();
    }
    buildDeck() {
        let result = [];
        for (let suit in cardEnums_1.CardSuit) {
            for (let rank in cardEnums_1.CardRank) {
                result.push(new card_1.Card(suit, rank));
            }
        }
        return result;
    }
}
exports.Deck = Deck;
//# sourceMappingURL=deck.js.map