"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Blackjack {
    constructor() {
        this.players = [];
    }
    getPlayers() {
        return this.players;
    }
    getPlayer(playerId) {
        return this.players[playerId];
    }
    addPlayer(player) {
        this.players[player.getId()] = player;
    }
    contains(player) {
        for (let p of this.players) {
            if (p.getName() == player.getName()) {
                return true;
            }
        }
        return false;
    }
}
exports.Blackjack = Blackjack;
//# sourceMappingURL=blackjack.js.map