"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blackjackPlayer_1 = require("./blackjackPlayer");
const blackjack_1 = require("./blackjack");
const deck_1 = require("./deck");
class BlackjackEngine {
    constructor(profile) {
        this.deck = new deck_1.Deck();
        this.player = new blackjackPlayer_1.BlackjackPlayer(profile);
        this.game = new blackjack_1.Blackjack();
    }
    getGame() {
        return this.game;
    }
    evaluateTurn(player) {
    }
    run() {
        //add player
        this.game.addPlayer(this.player);
        // deal cards
        console.log(this.deck.draw().toString());
    }
}
exports.BlackjackEngine = BlackjackEngine;
//# sourceMappingURL=blackjackEngine.js.map