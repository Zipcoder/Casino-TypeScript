"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const profile_1 = require("./profile");
const blackjackEngine_1 = require("./blackjack/blackjackEngine");
class Casino {
    constructor(name, balance = 500) {
        this.profile = new profile_1.Profile(1, name, balance);
    }
    receiveCommand(cmd) {
        if (cmd == "blackjack") {
            console.log("Starting Blackjack!");
            let engine = new blackjackEngine_1.BlackjackEngine(this.profile);
            engine.run();
        }
    }
}
exports.Casino = Casino;
//# sourceMappingURL=casino.js.map