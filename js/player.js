"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    constructor(profile) {
        this.profile = profile;
    }
    getProfile() {
        return this.profile;
    }
    getName() {
        return this.profile.name;
    }
    getId() {
        return this.profile.id;
    }
}
exports.Player = Player;
//# sourceMappingURL=player.js.map