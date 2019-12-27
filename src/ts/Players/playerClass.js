var game;
(function (game) {
    class Player {
        constructor(name) {
        }
        setName(name) {
            this.name = name;
        }
        getName() {
            return this.name;
        }
        setId(id) {
            this.id = id;
        }
        getId() {
            return this.id;
        }
        setWallet(chips) {
            this.wallet = chips;
        }
        getWallet() {
            return this.wallet;
        }
    }
    game.Player = Player;
})(game || (game = {}));
//# sourceMappingURL=tsc.js.map