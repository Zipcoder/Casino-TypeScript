"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const player_1 = require("../player");
class CardPlayer extends player_1.Player {
    constructor(theProfile) {
        super(theProfile);
        this._hand = new Array();
    }
    get hand() {
        return this._hand;
    }
    set hand(newHand) {
        this._hand = newHand;
    }
}
exports.CardPlayer = CardPlayer;
