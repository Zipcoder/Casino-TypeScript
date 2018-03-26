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
        this.player.hand.push(this.deck.draw());
        this.player.hand.push(this.deck.draw());
        let dealerHand = [];
        dealerHand.push(this.deck.draw());
        dealerHand.push(this.deck.draw());
        let UI = document.getElementById('display');
        let header = document.createElement('p');
        header.innerHTML = "Dealer Hand:";
        UI.appendChild(header);
        for (let card of dealerHand) {
            let e = document.createElement('span');
            e.classList.add('card');
            e.innerHTML = card.toString() + ' | ';
            UI.appendChild(e);
        }
        let playerHeader = document.createElement('p');
        playerHeader.innerHTML = "<br />Player Hand:";
        UI.appendChild(playerHeader);
        for (let card of this.player.hand) {
            let e = document.createElement('span');
            e.classList.add('card');
            e.innerHTML = card.toString() + ' | ';
            UI.appendChild(e);
        }
        let output = document.createElement('p');
        output.innerHTML = "<br />You win...or lose. IDK there isn't any real game logic. I'm deleting this repo and starting from scratch with React.";
        UI.appendChild(output);
    }
    run() {
        this.game.addPlayer(this.player);
        this.evaluateTurn(this.player);
    }
}
exports.BlackjackEngine = BlackjackEngine;
//# sourceMappingURL=blackjackEngine.js.map